export const SplashSection = () => {
  return (
    <div
      className={`w-full h-[80vh] bg-gray-900 flex flex-col items-center justify-center gap-12`}
    >
      <div className={`flex flex-col gap-4 items-center`}>
        <span
          className={`text-white text-7xl font-black font-montserrat text-transparent bg-gradient-to-br from-indigo-500 to-purple-500 bg-clip-text`}
        >
          Music Generator
        </span>
        <div className={`text-gray-400 text-3xl font-worksans`}>
          Generate music from MIDI files with Markov chains.
        </div>
      </div>
      <div className={`max-w-prose`}>
        
      </div>
      <button
        className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full`}
        onClick={() => {
          window.location.href = "/generate";
        }}
      >
        Generate
      </button>
    </div>
  );
};
