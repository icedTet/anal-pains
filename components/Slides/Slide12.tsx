export const Slide12 = () => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-start gap-0 bg-gray-800`}
      id={`slide-12`}
    >
      <span className={`text-6xl font-black font-montserrat text-white py-8`}>
        Example of Parsed MIDI Events
      </span>
      <div className={`flex flex-row items-end gap-16`}>
        <div className={`flex flex-col py-8 gap-4`}>
          <div
            className={`w-128 bg-gray-50 p-8 rounded-lg flex flex-col gap-8`}
          >
            <span className={`text-6xl font-black font-worksans text-gray-800`}>
              Play Note
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
              Duration: 8203
            </span>
            <span
              className={`text-4xl font-medium font-worksans text-gray-800`}
            >
              Delay: 203
            </span>
          </div>
        </div>
        <div className={`flex flex-col py-8 gap-4`}>
          <div
            className={`w-128 bg-gray-50 p-8 rounded-lg flex flex-col gap-8`}
          >
            <span className={`text-6xl font-black font-worksans text-gray-800`}>
              Play Note
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
              Duration: 8450
            </span>
            <span
              className={`text-4xl font-medium font-worksans text-gray-800`}
            >
              Delay: 210
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
