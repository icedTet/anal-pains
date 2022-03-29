export const Slide13 = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-start gap-32 p-32`}
      id={`slide-13`}
    >
      <span className={`text-6xl font-black font-montserrat`}>
        Generating Music from the Markov Chain
      </span>
      <div className={`grid grid-cols-10 w-full`}>
        <div className={`col-span-4 p-8 flex flex-col gap-2`}>
          <div className={`rounded-lg overflow-hidden shadow-md p-4 bg-white`}>
            <img src={`/imgs/graphMIDI.jpeg`} />
          </div>
          <span className={`font-light text-sm text-gray-600`}>
            Picture drawn by{" "}
            <a href="" className={`text-indigo-500`}>
              John Li
            </a>
          </span>
        </div>
        <div className={`col-span-1`}></div>
        <div
          className={`col-span-4 flex flex-col items-end justify-start h-full gap-16  prose`}
        >
          {/* <span className={`text-5xl font-bold font-montserrat`}>
            Markov Chains!
          </span> */}
          <ol className={`text-3xl font-light`}>
            <li className={`text-gray-600`}>
              <span className={`text-gray-600`}>Start with a random note.</span>
            </li>
            <li className={`text-gray-600`}>
              <span className={`text-gray-600`}>
                Find all notes that have followed the current note.
              </span>
            </li>
            <li className={`text-gray-600`}>
              <span className={`text-gray-600`}>
                Using the precomputed probabilities, pick a weighted random
                note.
              </span>
            </li>
            <li className={`text-gray-600`}>
              <span className={`text-gray-600`}>
                Repeat until the song has been generated.
              </span>
            </li>
            <li className={`text-gray-600`}>
              <span className={`text-gray-600`}>
                Reparse current note format into events
              </span>
            </li>
            <li className={`text-gray-600`}>
              <span className={`text-gray-600`}>
                Generate a MIDI file from the events
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
