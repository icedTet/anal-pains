export const Slide2 = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-start gap-32 p-32 bg-gray-800`}
      id={`slide-2`}
    >
      <span className={`text-6xl font-black font-montserrat text-white`}>
        AI, Blockchain, Cloud!
      </span>
      <div className={`grid grid-cols-10 w-full`}>
        <div className={`col-span-4 p-8 flex flex-col gap-2`}>
          <div
            className={`rounded-lg overflow-hidden shadow-md p-4 bg-gray-100 hue-rotate-180 shadow-gray-100 invert-95`}
          >
            <img
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/LARGER_FONT_VERSION_Six_n-grams_frequently_found_in_titles_of_publications_about_Coronavirus_disease_2019%2C_as_of_7_May_2020.svg/1920px-LARGER_FONT_VERSION_Six_n-grams_frequently_found_in_titles_of_publications_about_Coronavirus_disease_2019%2C_as_of_7_May_2020.svg.png`}
            />
          </div>
          <span className={`font-light text-sm text-gray-400`}>
            Picture by{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:LARGER_FONT_VERSION_Six_n-grams_frequently_found_in_titles_of_publications_about_Coronavirus_disease_2019,_as_of_7_May_2020.svg"
              className={`text-indigo-500`}
            >
              Daniel Mietchen
            </a>
          </span>
        </div>
        <div className={`col-span-1`}></div>
        <div
          className={`col-span-4 flex flex-col items-end justify-start h-full gap-16  prose`}
        >
          <span className={`text-5xl font-bold font-montserrat text-white`}>
            N-Gram models
          </span>
          <div className={`flex flex-col flex-grow`}>
            <ul className={`text-3xl font-light`}>
              <li className={`text-gray-200`}>
                Connecting multiple objects together to establish relationship.
              </li>
              <li className={`text-gray-200`}>
                Famous for it's use in statistical language processing.
              </li>
              <li className={`text-gray-200`}>
                Simple to use, easily scalable.
              </li>
              <li className={`text-gray-200`}>
                Used in many areas, not just AI. 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
