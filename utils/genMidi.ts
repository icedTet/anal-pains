import {
  IMidiFile,
  IMidiNoteOffEvent,
  IMidiNoteOnEvent,
  TMidiEvent,
} from "midi-json-parser-worker";
import { encode } from "json-midi-encoder";
import { MIDINote, StartSongHeaders, WeightedMidiEvent } from "./parseMidi";
import Soundfont from "soundfont-player";
export const generateNextEvent = (
  currentEvent: MIDINote,
  genMap: Map<string, WeightedMidiEvent[]>
) => {
  const currentKey = JSON.stringify(currentEvent);
  const nextEvent = genMap.get(currentKey);
  if (nextEvent) {
    const randomNumber = Math.random();
    let totalWeight = 0;
    nextEvent.sort((a, b) => b.weight - a.weight);
    // console.log(nextEvent);
    for (let i = 0; i < nextEvent.length; i++) {
      totalWeight += nextEvent[i].weight;
      if (randomNumber < totalWeight && nextEvent[i].weight !== 1) {
        return nextEvent[i].event;
      }
    }
  }
  return null;
};
// const piano = new Promise((resolve, reject) => {
//   const piano = new AudioContext();
//   Soundfont.instrument(piano, "acoustic_grand_piano").then((instrument) => {
//     resolve(instrument);
//   });
// });
export const genMidi = async (
  notes: number,
  firstEvent: MIDINote,
  genMap: Map<string, WeightedMidiEvent[]>
) => {
  const trackBuild = [firstEvent] as MIDINote[];
  for (let i = 1; i < notes; i++) {
    const note = generateNextEvent(trackBuild[i - 1], genMap);
    if (note) {
      trackBuild.push(note);
    } else {
      // console.log("no note found for", trackBuild[i - 1]);
      const randomArr = Array.from(genMap.keys());
      const randomKey = randomArr[Math.floor(Math.random() * randomArr.length)];
      trackBuild.push(
        JSON.parse(randomArr[Math.floor(Math.random() * randomArr.length)])
      );
    }
  }
  console.log(trackBuild);
  // start bulding midi file
  const events = [] as TMidiEvent[];
  const keyDowns = new Map<number, MIDINote[]>();
  const keyUps = new Map<number, MIDINote[]>();
  let current = 0;
  for (let i = 0; i < trackBuild.length; i++) {
    const keydownTimestamp = trackBuild[i].delay + current;
    const keyupTimestamp = keydownTimestamp + trackBuild[i].duration;
    if (keyDowns.has(keydownTimestamp)) {
      keyDowns.get(keydownTimestamp).push(trackBuild[i]);
    } else {
      keyDowns.set(keydownTimestamp, [trackBuild[i]]);
    }
    if (keyUps.has(keyupTimestamp)) {
      keyUps.get(keyupTimestamp).push(trackBuild[i]);
    } else {
      keyUps.set(keyupTimestamp, [trackBuild[i]]);
    }
    current += trackBuild[i].duration;
  }
  const timesKeys = Array.from(keyDowns.keys())
    .map((x) => ({ i: x, t: "down" }))
    .concat(Array.from(keyUps.keys()).map((x) => ({ i: x, t: "up" })))
    .sort((a, b) => a.i - b.i);
  console.log(timesKeys);
  let ctime = 0;
  for (let i = 0; i < timesKeys.length; i++) {
    const time = timesKeys[i].i;
    const type = timesKeys[i].t;
    if (type === "down") {
      const notes = keyDowns.get(time);
      notes.forEach((note) => {
        events.push({
          type: "noteOn",
          channel: 1,
          noteOn: {
            noteNumber: note.note,
            velocity: note.velocity,
          },
          delta: time - ctime,
        } as IMidiNoteOnEvent);
      });
    }
    if (type === "up") {
      const notes = keyUps.get(time);
      notes.forEach((note) => {
        events.push({
          type: "noteOff",
          channel: 1,
          noteOff: {
            noteNumber: note.note,
            velocity: note.velocity,
          },
          delta: time - ctime,
        } as IMidiNoteOffEvent);
      });
    }
    ctime = time;
  }
  console.log({
    format: 1,
    division: 480,
    tracks: [[...StartSongHeaders, ...events, { endOfTrack: true, delta: 1 }]],
  });
  const encodedMidi = await (
    await import("json-midi-encoder")
  ).encode({
    format: 1,
    division: 480,
    tracks: [[...StartSongHeaders, ...events, { endOfTrack: true, delta: 1 }]],
  });
  return new File([encodedMidi], "result.mid", { type: "audio/midi" });
};
