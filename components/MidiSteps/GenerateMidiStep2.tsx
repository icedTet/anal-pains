import { RadioGroup, Transition } from "@headlessui/react";
import { UploadIcon, TrashIcon, CheckIcon } from "@heroicons/react/outline";
import { TMidiEvent } from "midi-json-parser-worker";
import { Dispatch, SetStateAction, useState } from "react";
import { genMidi } from "../../utils/genMidi";
import { KEY_NAMES } from "../../utils/nameMIDIKey";
import {
  parseMidiPrestep,
  mergeMidiPresteps,
  weighMidievents,
  WeightedMidiEvent,
  MIDINote,
} from "../../utils/parseMidi";
const plans = [
  {
    name: "Short Song",
    len: "~50 notes",
  },
  {
    name: "Medium Song",
    len: "~100 notes",
  },
  {
    name: "Long Song",
    len: "~200 notes",
  },
  {
    name: "Painfully Long Song",
    len: "~800 notes",
  },
];
const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
const lengths = {
  0: 50,
  1: 100,
  2: 200,
  3: 800,
};
export const GenerateMidiStep2 = (props: {
  stage: number;
  result: Map<string, WeightedMidiEvent[]>;
}) => {
  const { stage, result } = props;
  const [fileDrag, setFileDrag] = useState(false);
  const notes = result;
  console.log(notes);
  const [length, setLength] = useState(0);
  const [selected, setSelected] = useState(plans[0]);
  const [midiLink, setMidiLink] = useState("");
  return (
    <Transition
      show={stage === 2 || stage === 3}
      enter="transition ease-out duration-300 delay-[400ms]"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as="div"
      className={`w-full `}
    >
      <div className={`flex flex-col gap-8 items-center`}>
        <div className={`max-w-prose flex flex-col w-full`}>
          <div
            className={`w-full bg-gray-100 p-6 rounded-xl ${
              fileDrag && `!bg-indigo-900`
            } transition-colors flex flex-col gap-4`}
          >
            <div
              className={`w-full h-full  rounded-xl flex flex-col  text-gray-400 gap-2`}
            >
              <span className={`text-lg`}>Options</span>

              <div
                className={`flex flex-col gap-2 flex-grow justify-center items-stretch`}
              >
                <span>
                  <span className={`text-sm text-gray-400 w-full`}>
                    {/* Note List:{" "}
                    {notes && !!notes.size &&
                      Array.from(notes.keys())
                        .map((x) => JSON.parse(x) as TMidiEvent)
                        .filter((x) => x.noteOn)
                        .map((x) => KEY_NAMES[x.noteOn.noteNumber])
                        .join(", ")} */}
                    <RadioGroup value={selected} onChange={setSelected}>
                      <RadioGroup.Label className="sr-only">
                        Song Length
                      </RadioGroup.Label>
                      <div className="space-y-2 w-full">
                        {plans.map((plan) => (
                          <RadioGroup.Option
                            key={plan.name}
                            value={plan}
                            className={({ active, checked }) =>
                              `${active ? " ring-white ring-opacity-60" : ""} ${
                                checked
                                  ? "bg-opacity-75 bg-gradient-to-br from-purple-400 to-indigo-400 text-white"
                                  : "bg-white"
                              }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none transition-all w-full`
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <div className="flex items-center justify-between w-full">
                                  <div className="flex items-center">
                                    <div className="text-sm">
                                      <RadioGroup.Label
                                        as="p"
                                        className={`font-medium  ${
                                          checked
                                            ? "text-white"
                                            : "text-gray-900"
                                        }`}
                                      >
                                        {plan.name}
                                      </RadioGroup.Label>
                                      <RadioGroup.Description
                                        as="span"
                                        className={`inline ${
                                          checked
                                            ? "text-sky-100"
                                            : "text-gray-500"
                                        }`}
                                      >
                                        <span>{plan.len}</span>
                                      </RadioGroup.Description>
                                    </div>
                                  </div>
                                  {checked && (
                                    <div className="flex-shrink-0 text-white">
                                      <CheckIcon className="w-6 h-6" />
                                    </div>
                                  )}
                                </div>
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </span>
                </span>
              </div>
            </div>
            {/* <div className={`border-t-2 border-gray-300 h-32`}>

            </div> */}
          </div>
        </div>
        <button
          className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full`}
          onClick={async () => {
            const file = await genMidi(
              lengths[plans.findIndex((x) => x === selected)],
              JSON.parse(notes.keys().next().value!) as MIDINote,
              result
            );
            const url = URL.createObjectURL(file);
            const a = document.createElement("a");
            a.href = url;
            a.download = "midi.mid";
            a.click();
            setMidiLink(url);
            // URL.revokeObjectURL(url);
          }}
        >
          {stage === 2 ? <p>Generate Music</p> : <p>Generating Music...</p>}
        </button>
      </div>
    </Transition>
  );
};
