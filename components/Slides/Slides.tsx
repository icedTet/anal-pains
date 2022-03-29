import { useLayoutEffect, useRef, useState } from "react";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";
import { Slide3 } from "./Slide3";
import { Slide4 } from "./Slide4";
import { Slide5 } from "./Slide5";

export const SlideMaster = () => {
  const [scroll, setscroll] = useState(0);
  const div = useRef(null);
  useLayoutEffect(() => {
    const keydown = (ev: KeyboardEvent) => {
      if (ev.key === "z") {
        setscroll((s) => {
          const slider = document.getElementById(`slide-${s + 1}`);
          if (slider) {
            slider.scrollIntoView({ block: "center", behavior: "smooth" });
            return s + 1;
          }
          return s;
        });
      }
      if (ev.key === "a")
        setscroll((s) => {
          const slider = document.getElementById(`slide-${Math.max(0, s - 1)}`);
          if (s == 1) return s;
          if (!!slider) {
            slider.scrollIntoView({ block: "center", behavior: "smooth" });
            return s - 1;
          }
          return s;
        });
      if (ev.key === "c") {
        setscroll(0);
        document
          .getElementById("splash")
          .scrollIntoView({ block: "center", behavior: "smooth" });
      }
      setscroll((s) => {
        console.log(s);
        return s;
      });
    };
    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  });
  return (
    <div className={`w-full flex flex-col items-stretch`}>
      <Slide1 />
      <svg
        id="visual"
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className={` w-full`}
      >
        <path
          d="M0 30L30 43.5C60 57 120 84 180 91C240 98 300 85 360 80.3C420 75.7 480 79.3 540 77.5C600 75.7 660 68.3 720 62C780 55.7 840 50.3 870 47.7L900 45L900 0L870 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0L0 0Z"
          fill="#f3f4f6"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>
      <svg
        id="visual"
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className={`w-full bottom-0 left-0 pointer-events-none rotate-180 translate-y-1`}
      >
        <path
          d="M0 102L21.5 103.8C43 105.7 86 109.3 128.8 104.3C171.7 99.3 214.3 85.7 257.2 73.2C300 60.7 343 49.3 385.8 44.3C428.7 39.3 471.3 40.7 514.2 42.7C557 44.7 600 47.3 642.8 49.3C685.7 51.3 728.3 52.7 771.2 51.5C814 50.3 857 46.7 878.5 44.8L900 43L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
          fill="rgb(39 39 42)"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>
      <Slide2 />
      <svg
        id="visual"
        viewBox="0 0 900 200"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className={`w-full bottom-0 left-0 pointer-events-none -translate-y-1`}
      >
        <path
          d="M0 102L21.5 103.8C43 105.7 86 109.3 128.8 104.3C171.7 99.3 214.3 85.7 257.2 73.2C300 60.7 343 49.3 385.8 44.3C428.7 39.3 471.3 40.7 514.2 42.7C557 44.7 600 47.3 642.8 49.3C685.7 51.3 728.3 52.7 771.2 51.5C814 50.3 857 46.7 878.5 44.8L900 43L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
          fill="rgb(39 39 42)"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>
      <Slide3 />
      <Slide4 />
      <Slide5 />
    </div>
  );
};
export default SlideMaster;
