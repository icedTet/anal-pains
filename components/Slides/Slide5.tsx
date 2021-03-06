export const Slide5 = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-start gap-32 p-32`}
      id={`slide-5`}
    >
      <span className={`text-6xl font-black font-montserrat`}>
        What is a MIDI File?
      </span>
      <div className={`grid grid-cols-10 w-full`}>
        <div className={`col-span-4 p-8 flex flex-col gap-2`}>
          <div className={`rounded-lg overflow-hidden shadow-md p-4 bg-white`}>
            <img src={`/imgs/midi.png`} />
          </div>
          <span className={`font-light text-sm text-gray-600`}>
            Picture from{" "}
            <a href="" className={`text-indigo-500`}>
              John Li
            </a>
          </span>
        </div>
        <div className={`col-span-1`}></div>
        <div
          className={`col-span-4 flex flex-col items-end justify-start h-full gap-16  prose`}
        >
          <span className={`text-5xl font-bold font-montserrat`}>
            Musical Instrument Digital Interface
          </span>
          <ul className={`text-3xl font-light`}>
            <li className={`text-gray-600`}>
              <span className={`text-gray-600`}>
                Carries Event Messages (NoteOn, NoteOff, etc.)
              </span>
            </li>
            <li className={`text-gray-600`}>
              <span className={`text-gray-600`}>
                Records notes including notation, pitch, velocity, etc.
              </span>
            </li>
            <li className={`text-gray-600`}>
              <span className={`text-gray-600`}>
                Standardized, though somewhat a pain to parse.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
