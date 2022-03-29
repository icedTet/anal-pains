export const Slide10 = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-start gap-32 p-32 bg-gray-800`}
      id={`slide-10`}
    >
      <span className={`text-6xl font-black font-montserrat text-white`}>
        Modified Approach
      </span>
      <div className={`grid grid-cols-10 w-full`}>
        <div className={`col-span-4 p-8 flex flex-col gap-2`}>
          <div
            className={`rounded-lg overflow-hidden shadow-md p-4 bg-gray-100 hue-rotate-180 shadow-gray-100 invert-95`}
          >
            <img src={`/imgs/newApproach.jpeg`} />
          </div>
          <span className={`font-light text-sm text-gray-400`}>
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
          <span className={`text-5xl font-bold font-montserrat text-white`}>
            Parsing Notes
          </span>
          <div className={`flex flex-col flex-grow`}>
            <ol className={`text-3xl font-light`}>
              <li className={`text-gray-200`}>
                Find all NoteOn events in the MIDI file.
              </li>
              <li className={`text-gray-200`}>
                Find the nearest NoteOff event for each NoteOn event.
              </li>
              <li className={`text-gray-200`}>
                Find the duration of each NoteOn event by summing all Deltas
                between the NoteOn and NoteOff events.
              </li>
              <li className={`text-gray-200`}>
                Find the minimum time before the next note is played.
              </li>
              <li className={`text-gray-200`}>
                Generate Bi-Grams for the note
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
