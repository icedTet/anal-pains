export const Slide8 = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-start gap-32 p-32`}
      id={`slide-8`}
    >
      <span className={`text-6xl font-black font-montserrat`}>Well...</span>
      <div className={`flex flex-grow max-h-[80%]`}>
        <img
          src={`/imgs/longMIDI.png`}
          className={`flex-grow object-contain`}
        />
      </div>
      
    </div>
  );
};
