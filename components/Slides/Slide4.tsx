export const Slide4 = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center gap-32 p-32 bg-gray-800`}
      id={`slide-4`}
    >
      {/* <span className={`text-6xl font-black font-montserrat text-white`}>
        AI, Blockchain, Cloud!
      </span> */}
      <div className={`flex flex-col justify-center items-center gap-24 p-24`}>
        <span className={`text-7xl font-black font-montserrat text-white`}>
          MIDI Files!
        </span>
        <div className={`flex flex-grow max-h-[70%]`}>
          <img src={`/imgs/GarageBand.png`} className={`flex-grow object-contain`} />
        </div>
      </div>
    </div>
  );
};
