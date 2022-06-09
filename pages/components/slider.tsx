import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { setTimeout } from "timers";
import { useSpring, animated } from "react-spring";
import gsap from "gsap";
import { setInterval } from "timers/promises";

export default function Slider() {
  const images = ["bg-img1", "bg-img2", "bg-img3", "bg-img4", "bg-img5"];

  const [index, setIndex] = useState(0);

  function changeImage(images: string[]) {
    index < images.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  function loop() {
    setTimeout(function () {
      index < images.length - 1 ? setIndex(index + 1) : setIndex(0);
    }, 5000);
  }
  loop();

  const props1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
    config: { duration: 800 },
  });

  const props2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 850,
    config: { duration: 500 },
  });

  useEffect(() => {
    gsap.fromTo(
      "#slider",
      { autoAlpha: 0.8, scale: 1 },
      { autoAlpha: 1, duration: 1, scale: 1.02 }
    );
  }, [index]);

  return (
    <>
      <div
        id="slider"
        className={`bg-cover ${images[index]} w-screen h-screen bg-center fixed -z-10 text-white`}
      >
        <div className="h-full w-full bg-black bg-opacity-30"></div>
      </div>

      <div className="text-white bg-black bg-opacity-40 h-screen w-screen flex justify-center items-center flex-col">
        <animated.span style={props1} className="text-5xl mb-2">
          Explore
        </animated.span>
        <div className="text-7xl">
          <animated.p style={props1} className="font-bold">
            Buenos Aires
          </animated.p>
        </div>
        <animated.div style={props2} className="mt-5 w-[35%] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          molestias nam illo, sint nobis accusamus dolore sunt quis ratione
          sequi eos incidunt quo consequuntur, maxime veniam blanditiis cum sit
          libero!
        </animated.div>
      </div>
    </>
  );
}
