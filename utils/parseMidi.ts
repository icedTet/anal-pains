import { IMidiNoteOnEvent, TMidiEvent } from "midi-json-parser-worker";
export let StartSongHeaders = [];
export type MIDINote = {
  note: number;
  velocity: number;
  delay: number;
  duration: number;
};
export const getFileArrayBuffer = (file: File): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    console.log("resolving");
    reader.onload = () => {
      console.log("resolved");
      resolve(reader.result as ArrayBuffer);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};

export const parseMidiFile = async (file: File) => {
  const arrayBuffer = await getFileArrayBuffer(file);
  const midiObject = (await import("midi-json-parser")).parseArrayBuffer(
    arrayBuffer
  );
  return midiObject;
};
export const parseMidiPrestep = async (file: File) => {
  console.log("parsing", file.name);
  const midiObject = await parseMidiFile(file);
  console.log("Pasrsed!");
  console.log(midiObject);
  const eventMap = new Map<string, MIDINote[]>();
  let track = midiObject.tracks[0];

  const trackSet = new Set<string>();
  for (let j = 0; j < track.length; j++) {
    if (track[j].noteOn && !trackSet.has(JSON.stringify(track[j])))
      trackSet.add(JSON.stringify(track[j]));
  }
  let trackSize = trackSet.size;
  for (let i = 1; i < midiObject.tracks.length; i++) {
    const competingTrackSet = new Set<string>();
    const competingTrack = midiObject.tracks[i];
    for (let j = 0; j < competingTrack.length; j++) {
      if (
        competingTrack[j].noteOn &&
        !competingTrackSet.has(JSON.stringify(competingTrack[j]))
      )
        competingTrackSet.add(JSON.stringify(competingTrack[j]));
    }
    if (competingTrackSet.size > trackSize) {
      trackSize = competingTrackSet.size;
      track = competingTrack;
      console.log("new track", track);
    }else{
      console.log("competing track", competingTrack, competingTrackSet.size);
    }
  }
  // {endOfTrack: true, delta: 1}
  const start = track.findIndex((x) => x.noteOn) - 1;
  StartSongHeaders.push(...track.splice(0, start));

  const notes = track
    .map((_, i) => i)
    .filter((x) => track[x].noteOn)
    .map((i) => {
      // find nearest noteOff with same pitch
      const noteOff = track.findIndex(
        (x) =>
          x.noteOff &&
          (x.noteOn as IMidiNoteOnEvent)?.pitch ===
            (track[i].noteOn as IMidiNoteOnEvent)?.pitch
      );
      // calculate duration
      let duration = track[i].delta + track[noteOff].delta;
      let delay = 0;
      for (let j = i + 1; j < noteOff; j++) {
        duration += track[j].delta;
      }
      for (let j = i - 1; j >= 0; j--) {
        delay += track[j].delta;
        if (track[j].noteOff) {
          break;
        }
      }
      return {
        note: (track[i].noteOn as IMidiNoteOnEvent).noteNumber as number,
        velocity: (track[i].noteOn as IMidiNoteOnEvent).velocity as number,
        duration: Math.min(duration,8000),
        delay,
      };
    });
  for (let i = 1; i < notes.length; i++) {
    const note = notes[i - 1];
    const nextNote = notes[i];
    const noteKey = JSON.stringify(note);
    if (!eventMap.has(noteKey)) {
      eventMap.set(noteKey, [nextNote]);
    } else {
      eventMap.get(noteKey).push(nextNote);
    }
  }
  console.log(eventMap, notes);
  return eventMap;
};
export const mergeMidiPresteps = async (maps: Map<string, MIDINote[]>[]) => {
  const eventMap = new Map<string, MIDINote[]>();
  maps.forEach((map) => {
    map.forEach((value, key) => {
      if (eventMap.has(key)) {
        eventMap.get(key).push(...value);
      } else {
        eventMap.set(key, value);
      }
    });
  });
  return eventMap;
};
export interface WeightedMidiEvent {
  weight: number;
  event: MIDINote;
}
export const weighMidievents = (map: Map<string, MIDINote[]>) => {
  const weightedMap = new Map<string, WeightedMidiEvent[]>();
  map.forEach((value, key) => {
    const eventsMap = new Map<string, number>();
    let totalWeight = 0;
    value.forEach((event) => {
      if (eventsMap.has(JSON.stringify(event))) {
        eventsMap.set(
          JSON.stringify(event),
          eventsMap.get(JSON.stringify(event)) + 1
        );
      } else {
        eventsMap.set(JSON.stringify(event), 1);
      }
      totalWeight++;
    });
    const weightedEvents = Array.from(eventsMap.entries()).map(
      ([key, value]) => {
        return { weight: value / totalWeight, event: JSON.parse(key) };
      }
    );
    return weightedMap.set(key, weightedEvents);
  });
  return weightedMap;
};
