import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { SplashSection } from "../components/SplashSection";
export const IndexPage = () => {
  return (
    <div className={`bg-gray-100 h-full overflow-auto`}>
      <Head>
        <title>Epic Markov Chain Music Generator</title>
        <meta name="description" content="Generates music (painfully)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={""}>
        <SplashSection />
        <svg
          id="visual"
          viewBox="0 25 900 200"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={`w-full`}
        >
          <g>
            <path
              d="M0 44L50 55.2C100 66.3 200 88.7 300 97.3C400 106 500 101 600 110.2C700 119.3 800 142.7 850 154.3L900 166L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
              fill="rgb(24 24 27)"
              strokeLinecap="round"
              strokeLinejoin="miter"
            ></path>
          </g>
        </svg>
      </main>
      {/* <MissionStatement /> */}
      <div className={`flex flex-col w-full bg-gray-800 relative z-10`}>
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
        {/* <WhoWeAre /> */}
        <svg
          id="visual"
          viewBox="0 0 900 200"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={`w-full absolute bottom-0 left-0 translate-y-full pointer-events-none`}
        >
          <path
            d="M0 102L21.5 103.8C43 105.7 86 109.3 128.8 104.3C171.7 99.3 214.3 85.7 257.2 73.2C300 60.7 343 49.3 385.8 44.3C428.7 39.3 471.3 40.7 514.2 42.7C557 44.7 600 47.3 642.8 49.3C685.7 51.3 728.3 52.7 771.2 51.5C814 50.3 857 46.7 878.5 44.8L900 43L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
            fill="rgb(31 41 55)"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
      </div>
      <div
        className={`h-[64rem] w-full  flex flex-col items-center justify-center relative`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-25`}
          style={{
            backgroundImage: `  
  radial-gradient(at 40% 20%, hsla(309,100%,93%,1) 0, transparent 50%),  
  radial-gradient(at 80% 0%, hsla(248,100%,70%,1) 0, transparent 50%),  
  radial-gradient(at 0% 50%, hsla(332,100%,86%,1) 0, transparent 50%),  
  radial-gradient(at 75% 35%, hsla(276,100%,87%,1) 0, transparent 50%),  
  radial-gradient(at 23% 70%, hsla(276,100%,80%,1) 0, transparent 50%),  
  radial-gradient(at 78% 94%, hsla(242,100%,70%,1) 0, transparent 50%),  
  radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0, transparent 50%)`,
          }}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex flex-col gap-4`}
        >
          <span className={`text-8xl font-bold text-gray-900/80`}>
            Convinced?
          </span>
          <span className={`text-3xl font-medium text-gray-900/80 text-center`}>
            Sign up for free classes today!
          </span>
          <div className="flex flex-row justify-center mt-6">
            <button
              className={`bg-gray-900 text-white font-bold py-4 px-8 rounded-lg text-xl w-1/2 hover:bg-gray-800`}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndexPage;
