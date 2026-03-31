import image from "./img/mohsin.jpg";

const MainPage = ({ setActive, toggleBtn, setToggleBtn, active }) => {
  return (
    <section
      className={` absolute z-20
      group/hf bg-gray-600 w-[30%] h-[75%] 
      rounded-lg border-none outline-none
      transition-all duration-300 ease-in-out 
      focus:shadow-[0_0_20px_5px_#4ade80]
      hover:shadow-[0_0_20px_5px_#4ade80]
      ${active ? "mainCustomHide" : "mainCustomShow"}
    `}
    >
      <article className="flex flex-col items-center justify-around p-2 mainSection h-5/6">
        <img
          src={image}
          alt="Mohsin Khan image"
          className="custom-w-h 
          rounded-full border-none outline-none 
          transition-all duration-300 ease-in-out
          group-focus/hf:shadow-[0_0_20px_5px_#4ade80]
          group-hover/hf:shadow-[0_0_20px_5px_#4ade80]
          "
        />
        <h2
          className="w-full text-center py-1 custom-h-font uppercase
            font-bold tracking-widest text-white
            group-focus/hf:text-[aliceblue]
            group-hover/hf:text-[aliceblue]
            group-focus/hf:text-shadow-[0_0_20px_#4ade80]
            group-hover/hf:text-shadow-[0_0_20px_#4ade80]
          "
        >
          Mohsin Khan
        </h2>
        <p
          className="w-full text-center custom-p-font py-1 tracking-widest text-white
            group-focus/hf:text-[aliceblue]
            group-hover/hf:text-[aliceblue]
            group-focus/hf:text-shadow-[0_0_20px_#4ade80]
            group-hover/hf:text-shadow-[0_0_20px_#4ade80]
            "
        >
          Frontend Developer
        </p>
        <button
          className="
          bg-red-800 custom-p-x-y mt-2 mb-2 rounded-lg border-none outline-none custom-p-font
            font-bold tracking-widest uppercase text-white cursor-pointer 
            transition-all duration-300 ease-in-out
            focus:text-shadow-[0_0_20px_#4ade80]
            hover:text-shadow-[0_0_20px_#4ade80]
            focus:shadow-[0_0_20px_5px_red]
            hover:shadow-[0_0_20px_5px_red]
           focus:border-red-800 focus:bg-transparent
           hover:border-red-800 hover:bg-transparent
          "
        >
          Hire Me
        </button>

        <button
          className="
          bg-red-800 custom-p-x-y mt-2 mb-2 rounded-lg border-none outline-none custom-p-font
            font-bold tracking-widest uppercase text-white cursor-pointer 
            transition-all duration-300 ease-in-out
            focus:text-shadow-[0_0_20px_#4ade80]
            hover:text-shadow-[0_0_20px_#4ade80]
            focus:shadow-[0_0_20px_5px_red]
            hover:shadow-[0_0_20px_5px_red]
           focus:border-red-800 focus:bg-transparent
           hover:border-red-800 hover:bg-transparent
           "
        >
          Message
        </button>
      </article>

      <button
        onClick={() => {
          setActive((prev) => !prev);
          setToggleBtn((prev) => !prev);
        }}
        className={`text-white font-bold custom-p3-font absolute right-0 top-[50%]
          bg-gray-700 p-1 rounded-sm border-none 
          outline-none cursor-pointer paddingLeftBtn
             focus:text-shadow-[0_0_20px_#4ade80] hover:text-shadow-[0_0_20px_#4ade80] 
             focus:shadow-[0_0_20px_5px_#4ade80]
            hover:shadow-[0_0_20px_5px_#4ade80] toggleBtn
            `}
      >
        <span
          className={`inline-block transition-all duration-200 ease-in-out
           ${toggleBtn ? "rotate-180" : "rotate-0"}
           `}
        >
          {">"}
        </span>
      </button>
    </section>
  );
};

export default MainPage;
