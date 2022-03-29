import { TrashIcon, UploadIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import {
  getFileArrayBuffer,
  mergeMidiPresteps,
  parseMidiFile,
  parseMidiPrestep,
  weighMidievents,
  WeightedMidiEvent,
} from "../utils/parseMidi";
import { GenerateMidiStep1 } from "./MidiSteps/GenerateMidiStep1";
import { GenerateMidiStep2 } from "./MidiSteps/GenerateMidiStep2";

export const SplashSection = () => {
  const [fileDrag, setFileDrag] = useState(false);
  const [files, setFiles] = useState([] as File[]);
  const [generationStage, setGenerationStage] = useState(0);
  const [weightedMap, setWeightedMap] = useState(
    null as null | Map<string, WeightedMidiEvent[]>
  );
  return (
    <div
      className={`w-full min-h-[80vh] bg-gray-900 flex flex-col items-center justify-center gap-12 p-8`}
      id={`splash`}
    >
      <div className={`flex flex-col gap-4 items-center`}>
        <span
          className={`text-white text-8xl font-extrabold font-montserrat text-transparent bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text`}
        >
          Music Generator
        </span>
        <div className={`text-gray-400 text-2xl font-worksans`}>
          Generate music from MIDI files with{" "}
          <span
            className={`bg-gradient-to-br from-red-400 to-indigo-400 bg-clip-text text-transparent font-medium`}
          >
            Markov Chains
          </span>
        </div>
      </div>
      <GenerateMidiStep1
        stage={generationStage}
        setGenStage={setGenerationStage}
        fileList={files}
        setFiles={setFiles}
        setResult={setWeightedMap}
      />
      <GenerateMidiStep2 stage={generationStage} result={weightedMap} />
    </div>
  );
};
