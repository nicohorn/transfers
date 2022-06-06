import React, { useEffect } from "react";
import gsap from "gsap";

export default function quoteSlider(props) {
  useEffect(() => {
    gsap.fromTo("#comp1, #comp2", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, [props.quote]);

  return (
    <div className="flex justify-center py-32 bg-cover bg-[center_50rem] bg-img6 ">
      <div className="w-[50%] px-10 text-center text-white bg-black h-[208px] bg-opacity-80 flex flex-col justify-center">
        {" "}
        <div id="comp1" className="italic text-2xl opacity-100">
          {props.quote}
        </div>
        <div id="comp2" className="mt-2">
          {props.author}
        </div>
      </div>
    </div>
  );
}
