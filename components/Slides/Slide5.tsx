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
            <img src={`https://i.stack.imgur.com/avtO6.jpg`} />
          </div>
          <span className={`font-light text-sm text-gray-600`}>
            Picture from{" "}
            <a
              href="https://math.stackexchange.com/questions/1126530/can-two-nodes-in-a-markov-chain-have-transitions-that-dont-total-1"
              className={`text-indigo-500`}
            >
              StackExchange
            </a>
          </span>
        </div>
        <div className={`col-span-1`}></div>
        <div
          className={`col-span-4 flex flex-col items-end justify-start h-full gap-16  prose`}
        >
          <span className={`text-5xl font-bold font-montserrat`}>
            UNFINISHED!
          </span>
          <ul className={`text-3xl font-light`}>
            <li className={`text-gray-600`}>
              <span className={`text-gray-600`}>
                Way to model the probability of a sequence of events.
              </span>
            </li>
            <li className={`text-gray-600`}>
              <span className={`text-gray-600`}>
                Many paths can be generated from a single starting point.
              </span>
            </li>
            <li className={`text-gray-600`}>
              <span className={`text-gray-600`}>
                Used as a basic/rudimentary model of "AI" for language
                processing (n-Grams)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
