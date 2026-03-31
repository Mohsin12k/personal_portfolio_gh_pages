const DetailPage = ({
  active,
  progressHtml,
  progressCss,
  progressTailwind,
  progressJs,
  progressReact,
  setActive,
  setToggleBtn,
}) => {
  return (
    <section
      className={`
      absolute z-10 
      bg-gray-600 w-[30%] h-[75%] 
      rounded-lg border-none outline-none
      focus:shadow-[0_0_20px_5px_#4ade80]
      hover:shadow-[0_0_20px_5px_#4ade80]
      flex flex-col items-center p-2 text-white
      ${active ? "customShow" : "customHide"}
    `}
    >
      <article
        className="
        flex flex-col items-center justify-center px-3
      "
      >
        <h1
          className="text-[125%] uppercase font-bold tracking-widest
          text-[aliceblue] text-shadow-[0_0_20px_#4ade80]
        "
        >
          Profile Detailes
        </h1>
        <p
          className="
          text-[80%] px-2 mb-1 capitalize font-semibold tracking-widest
          text-[aliceblue] text-shadow-[0_0_20px_#4ade80]
        "
        >
          I am Frontend Developer.I learn Html,CSS, Javascript, TailwindCSS and
          React.js. I have 2 years of experience in Frontend Development.
        </p>
      </article>
      <section
        className="w-full h-full pl-1 pt-1 flex flex-col section2 
      "
      >
        <h2
          className="
          text-[110%] font-bold tracking-widest uppercase text-center
          transition-all duration-300 ease-in-out
          text-[aliceblue] text-shadow-[0_0_20px_#4ade80]
          skills
        "
        >
          Skills
        </h2>

        {/* html skill */}

        <article
          className="mb-5 uppercase font-semibold text-shadow-white
        "
        >
          <i
            className="fa-brands fa-html5 text-sm text-green-500
             text-shadow-[0_0_20px_#4ade80]
          "
          ></i>
          <p
            className="inline-block uppercase tracking-widest 
          text-[aliceblue] text-shadow-[0_0_20px_#4ade80] ml-2
          "
          >
            HTML
          </p>
          <div
            className={`h-1 bg-green-300 rounded-lg text-right
            ${active ? "custom-w-html" : "custom-whtml-zero"}
            `}
          >
            {progressHtml}%
          </div>
        </article>

        {/* css skill */}

        <article className="mb-5 uppercase font-semibold text-shadow-white">
          <i
            className="fa-brands fa-css3 text-sm text-green-500
             text-shadow-[0_0_20px_#4ade80]"
          ></i>
          <p
            className="inline-block
            uppercase tracking-widest ml-2
          text-[aliceblue] text-shadow-[0_0_20px_#4ade80] 
          "
          >
            CSS
          </p>
          <div
            className={`w-full h-1 bg-green-300 rounded-lg text-right
            ${active ? "custom-w-CSS" : "custom-wcss-zero"}
            `}
          >
            {progressCss}%
          </div>
        </article>

        {/* TailwindCSS skill */}

        <article className="mb-5 uppercase font-semibold text-shadow-white">
          <i
            className="fa-brands fa-tailwind-css text-sm text-green-500
             text-shadow-[0_0_20px_#4ade80]"
          ></i>
          <p
            className="inline-block
            uppercase tracking-widest ml-2
          text-[aliceblue] text-shadow-[0_0_20px_#4ade80] 
          "
          >
            TailwindCSS
          </p>
          <div
            className={`w-full h-1 bg-green-300 rounded-lg text-right
                ${active ? "custom-w-tailwind" : "custom-wtailwind-zero"}
            `}
          >
            {progressTailwind}%
          </div>
        </article>

        {/* js skill */}

        <article className="mb-5 uppercase font-semibold text-shadow-white">
          <i
            className="fa-brands fa-js text-sm text-green-500
             text-shadow-[0_0_20px_#4ade80]"
          ></i>
          <p
            className="inline-block
            uppercase tracking-widest ml-2
          text-[aliceblue] text-shadow-[0_0_20px_#4ade80] 
          "
          >
            JavaScript
          </p>
          <div
            className={`w-full h-1 bg-green-300 rounded-lg text-right
                ${active ? "custom-w-Js" : "custom-wJs-zero"}
            `}
          >
            {progressJs}%
          </div>
        </article>

        {/* React Skill */}

        <article className="mb-5 uppercase font-semibold text-shadow-white">
          <i
            className="fa-brands fa-react text-sm text-green-500
             text-shadow-[0_0_20px_#4ade80]"
          ></i>
          <p
            className="inline-block
            uppercase tracking-widest ml-2
          text-[aliceblue] text-shadow-[0_0_20px_#4ade80] 
          "
          >
            React
          </p>
          <div
            className={`w-full h-1 bg-green-300 rounded-lg text-right
                ${active ? "custom-w-React" : "custom-wReact-zero"}
            `}
          >
            {progressReact}%
          </div>
        </article>

        {/* Social Account Links */}

        <article className="w-full h-[20%] flex items-center mt-5">
          <ul className="flex justify-around items-center w-full h-full list-none">
            <i
              className="fa-brands fa-linkedin
              text-[110%] font-bold text-green-500
              transition-all duration-300 ease-in-out
              focus:text-shadow-[0_0_20px_#4ade80] 
              hover:text-shadow-[0_0_20px_#4ade80] 
              cursor-pointer
            "
            ></i>
            <i
              className="fa-brands fa-twitter 
              text-[110%] font-bold text-green-500
              transition-all duration-300 ease-in-out
              focus:text-shadow-[0_0_20px_#4ade80] 
              hover:text-shadow-[0_0_20px_#4ade80] 
              cursor-pointer"
            ></i>
            <i
              className="fa-brands fa-facebook     
              text-[110%] font-bold text-green-500
              transition-all duration-300 ease-in-out
              focus:text-shadow-[0_0_20px_#4ade80] 
              hover:text-shadow-[0_0_20px_#4ade80] 
              cursor-pointer"
            ></i>
            <i
              className="fa-brands fa-instagram     
              text-[110%] font-bold text-green-500
              transition-all duration-300 ease-in-out
              focus:text-shadow-[0_0_20px_#4ade80] 
              hover:text-shadow-[0_0_20px_#4ade80] 
              cursor-pointer"
            ></i>
          </ul>
        </article>
      </section>

      <button
        onClick={() => {
          setActive(false);
          setToggleBtn(false);
        }}
        className="min-[861px]:hidden max-[860px]:absolute max-[860px]:top-105 
      max-[860px]:right-1 max-[860px]:font-bold max-[860px]:text-[aliceblue] 
      max-[860px]:text-shadow-[0_0_20px_#4ade80] max-[860px]:custom-p3-font
      max-[860px]:rounded-sm max-[860px]:border-none 
      max-[860px]:outline-none max-[860px]:cursor-pointer max-[860px]:p-1 max-[860px]:pb-2 
      max-[860px]:bg-gray-700 max-[860px]:focus:text-shadow-[0_0_20px_#4ade80]
      max-[860px]:hover:text-shadow-[0_0_20px_#4ade80] 
      max-[860px]:focus:shadow-[0_0_20px_5px_#4ade80]
      max-[860px]:hover:shadow-[0_0_20px_5px_#4ade80]
      "
      >
        {"<"}
      </button>
    </section>
  );
};

export default DetailPage;
