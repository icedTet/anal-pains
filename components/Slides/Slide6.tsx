export const Slide6 = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-start gap-32 p-32 bg-gray-800`}
      id={`slide-6`}
    >
      <span className={`text-6xl font-black font-montserrat text-white`}>
       Example of 3 MIDI Events
      </span>
      <div className={`flex flex-row items-end gap-16`}>
        <div className={`flex flex-col py-8 gap-4`}>
          <div
            className={`w-128 bg-gray-50 p-8 rounded-lg flex flex-col gap-8`}
          >
            <span className={`text-6xl font-black font-worksans text-gray-800`}>
              NoteOn
            </span>
            <span
              className={`text-4xl font-medium font-worksans text-gray-800`}
            >
              Note: C6
            </span>
            <span
              className={`text-4xl font-medium font-worksans text-gray-800`}
            >
              Velocity: 127
            </span>
            <span
              className={`text-4xl font-medium font-worksans text-gray-800`}
            >
              Delta Time: 208
            </span>
          </div>
        </div>
        <div className={`flex flex-col py-8 gap-4`}>
          <div
            className={`w-128 bg-gray-50 p-8 rounded-lg flex flex-col gap-8`}
          >
            <span className={`text-6xl font-black font-worksans text-gray-800`}>
              NoteOn
            </span>
            <span
              className={`text-4xl font-medium font-worksans text-gray-800`}
            >
              Note: E6
            </span>
            <span
              className={`text-4xl font-medium font-worksans text-gray-800`}
            >
              Velocity: 127
            </span>
            <span
              className={`text-4xl font-medium font-worksans text-gray-800`}
            >
              Delta Time: 203
            </span>
          </div>
        </div>
        <div className={`flex flex-col py-8 gap-4`}>
          <div
            className={`w-128 bg-gray-50 p-8 rounded-lg flex flex-col gap-8`}
          >
            <span className={`text-6xl font-black font-worksans text-gray-800`}>
              NoteOff
            </span>
            <span
              className={`text-4xl font-medium font-worksans text-gray-800`}
            >
              C6
            </span>
            <span
              className={`text-4xl font-medium font-worksans text-gray-800`}
            >
              Velocity: 127
            </span>
            <span
              className={`text-4xl font-medium font-worksans text-gray-800`}
            >
              Delta Time: 8000
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};
