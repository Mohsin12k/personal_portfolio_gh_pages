import MainPage from "./components/MainPage";
import DetailPage from "./components/DetailPage";
import { useEffect, useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [progressHtml, setProgressHtml] = useState(0);
  const [progressCss, setProgressCss] = useState(0);
  const [progressTailwind, setProgressTailwind] = useState(0);
  const [progressJs, setProgressJs] = useState(0);
  const [progressReact, setProgressReact] = useState(0);

  // useEffect for html + css
  useEffect(() => {
    if (active) {
      // for html

      let startHtml = 0;
      const endHtml = 95;
      const speed = 30;

      const intervalHtml = setInterval(() => {
        startHtml += 1;
        setProgressHtml(startHtml);
        if (startHtml >= endHtml) {
          clearInterval(intervalHtml);
        }
      }, speed);

      // for css

      let startCss = 0;
      const endCss = 90;

      const intervalCss = setInterval(() => {
        startCss += 1;
        setProgressCss(startCss);
        if (startCss >= endCss) {
          clearInterval(intervalCss);
        }
      }, speed);

      // for Tailwindcss

      let startTailwind = 0;
      const endTailwind = 90;

      const intervalTailwind = setInterval(() => {
        startTailwind += 1;
        setProgressTailwind(startTailwind);
        if (startTailwind >= endTailwind) {
          clearInterval(intervalTailwind);
        }
      }, speed);

      // for Js

      let startJs = 0;
      const endJs = 80;

      const intervalJs = setInterval(() => {
        startJs += 1;
        setProgressJs(startJs);
        if (startJs >= endJs) {
          clearInterval(intervalJs);
        }
      }, speed);

      // for React

      let startReact = 0;
      const endReact = 60;

      const intervalReact = setInterval(() => {
        startReact += 1;
        setProgressReact(startReact);
        if (startReact >= endReact) {
          clearInterval(intervalReact);
        }
      }, speed);

      return () => {
        clearInterval(intervalHtml);
        clearInterval(intervalCss);
        clearInterval(intervalTailwind);
        clearInterval(intervalJs);
        clearInterval(intervalReact);
      };
    } else {
      setProgressHtml(0);
      setProgressCss(0);
      setProgressTailwind(0);
      setProgressJs(0);
      setProgressReact(0);
    }
  }, [active]);

  return (
    <>
      <main
        className="
     w-full h-screen bg-gray-700 flex justify-center items-center
     relative overflow-hidden
     "
      >
        <MainPage
          active={active}
          setActive={setActive}
          toggleBtn={toggleBtn}
          setToggleBtn={setToggleBtn}
        />
        <DetailPage
          active={active}
          progressHtml={progressHtml}
          progressCss={progressCss}
          progressTailwind={progressTailwind}
          progressJs={progressJs}
          progressReact={progressReact}
          setActive={setActive}
          setToggleBtn={setToggleBtn}
        />
      </main>
    </>
  );
}

export default App;
