import React from "react";
import { useEffect } from "react";
import gsap from "gsap";

export default function Contact() {
  useEffect(() => {
    gsap.fromTo(
      "#container",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5 }
    );
  }, []);

  return (
    <div
      id="container"
      className="flex w-screen justify-center items-center h-[60vh] flex-col text-center mt-36"
    >
      <div className="shadow-md px-20">
        <div className="py-20 text-5xl font-bold">Contact me</div>
        <div className="text-xl pb-28">
          <p className="hover:text-white hover:bg-black p-3 mb-2 transition-all duration-200">
            My email:{" "}
            <a href="mailto:carbonediego@gmail.com">
              <b>carbonediego@gmail.com</b>
            </a>
          </p>
          <p className="hover:text-white hover:bg-black p-3 transition-all duration-200">
            {" "}
            My phone:{" "}
            <a href="https://walink.co/fd107e">
              {" "}
              <b>+54 9 11 4474 2207</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
