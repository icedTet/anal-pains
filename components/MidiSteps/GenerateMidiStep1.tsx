import { Transition } from "@headlessui/react";
import { UploadIcon, TrashIcon } from "@heroicons/react/outline";
import { Dispatch, SetStateAction, useState } from "react";
import {
  parseMidiPrestep,
  mergeMidiPresteps,
  weighMidievents,
  WeightedMidiEvent,
} from "../../utils/parseMidi";
const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
export const GenerateMidiStep1 = (props: {
  stage: number;
  setGenStage: (stage: number) => void;
  setResult: Dispatch<SetStateAction<Map<string, WeightedMidiEvent[]>>>;
  fileList: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}) => {
  const { stage, setGenStage, setResult, fileList, setFiles } = props;
  const [fileDrag, setFileDrag] = useState(false);
  return (
    <Transition
      show={stage <= 1}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      as="div"
      className={`w-full `}
    >
      <div className={`flex flex-col gap-8 items-center`}>
        <div
          className={`max-w-prose flex flex-col w-full`}
          onDragOver={(e) => {
            setFileDrag(true);
            e.preventDefault();
          }}
          onDragLeave={() => setFileDrag(false)}
          onDrop={(e) => {
            e.preventDefault();
            setFileDrag(false);
            const files = e.dataTransfer.files;
            const filesToAdd = Array.from(files).filter((file) =>
              file.type.startsWith("audio/midi")
            );
            console.log(filesToAdd.map((file) => file.type));
            setFiles((x) => [...x, ...filesToAdd]);
          }}
        >
          <input
            type={"file"}
            id={`fileInput`}
            className={`hidden`}
            accept={"audio/midi"}
            onChange={(e) => {
              const files = e.target.files;
              if (files) {
                const filesArray = Array.from(files);
                const filesToAdd = filesArray.filter((file) =>
                  file.type.startsWith("audio/midi")
                );
                console.log(filesToAdd.map((file) => file.type));
                setFiles((x) => [...x, ...filesToAdd]);
              }
            }}
            multiple
          />
          <div
            className={`w-full h-96 bg-gray-100  p-6 rounded-xl ${
              fileDrag && `!bg-indigo-900`
            } transition-colors ${
              fileList.length && `rounded-b-none`
            } cursor-pointer hover:bg-white`}
            onClick={() => {
              const input = document.getElementById(
                "fileInput"
              ) as HTMLInputElement;
              input.click();
            }}
          >
            <div
              className={`w-full h-full border-4 border-gray-300 border-dashed rounded-xl flex flex-col items-center justify-center text-gray-400 ${
                fileDrag && `!text-indigo-200 border-indigo-300`
              }`}
            >
              <UploadIcon className={`w-16 h-16`} />
              <span className={` text-xl font-worksans`}>
                Upload MIDI files to begin
              </span>
            </div>
          </div>
          {fileList.length > 0 && (
            <div
              className={`w-full h-full flex flex-col gap-4 p-8 bg-gray-100 rounded-b-lg border-t-2 border-gray-300 max-h-72 overflow-auto`}
            >
              {fileList.map((file, i) => (
                <div
                  className={`w-full h-full flex flex-row gap-4 items-center justify-between`}
                >
                  <div className={`flex flex-row gap-6`}>
                    <span className={`text-gray-600 text-lg font-worksans`}>
                      {file.name}
                    </span>
                    <span className={`text-gray-400 text-lg font-worksans`}>
                      {formatBytes(file.size)}
                    </span>
                  </div>
                  <button
                    className={` bg-red-600 rounded-lg p-2`}
                    onClick={() =>
                      setFiles((x) => {
                        const newFiles = [...x];
                        newFiles.splice(i, 1);
                        return newFiles;
                      })
                    }
                  >
                    <TrashIcon className={`w-6 h-6 text-red-300`} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full`}
          onClick={async () => {
            setGenStage(1);
            const parsedFiles = await Promise.all(
              fileList.map((x) => parseMidiPrestep(x))
            );
            const mergedPresteps = await mergeMidiPresteps(parsedFiles);
            setResult(weighMidievents(mergedPresteps));
            setGenStage(2);
          }}
        >
          {stage === 0 ? <p>Generate</p> : <p> Generating...</p>}
        </button>
      </div>
    </Transition>
  );
};
