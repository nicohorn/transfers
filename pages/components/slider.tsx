import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { setTimeout } from "timers";
import { useSpring, animated } from "react-spring";
import gsap from "gsap";
import { setInterval } from "timers/promises";
import Card from "./card";

export default function Slider() {
  const images = ["bg-img1", "bg-img2", "bg-img3", "bg-img4", "bg-img5"];

  const [index, setIndex] = useState(0);

  const content = [
    {
      title: "Ezeiza transfers",
      desc: "Transfer between Ezeiza airport and the city",
      img: "/ezeiza.webp",
    },
    {
      title: "Aeroparque transfers",
      desc: "Transfer between Aeroparque airport and the city",
      img: "/aeroparque.webp",
    },
  ];

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

  const props3 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1050,
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
        <animated.span
          style={props1}
          className=" mb-2 flex items-end gap-3 text-7xl mt-16"
        >
          Welcome to{" "}
          <animated.p style={props1} className="font-bold text-7xl">
            Buenos Aires
          </animated.p>
        </animated.span>

        <animated.div
          style={props2}
          className="mt-5 w-[35%] text-center flex flex-col"
        >
          <div className="mb-5 text-xl">
            <div>
              {" "}
              Elite Transfers & Tours | Airports and Cruise Terminal Transfers
            </div>
          </div>
          <div>
            {" "}
            Reserve your transfer to & from Buenos Aires airports/cruise
            terminal with a{" "}
            <b>professional and reliable english speaking driver.</b>
          </div>
        </animated.div>
        <animated.div className="z-10 mt-10 flex gap-10" style={props3}>
          <a href="https://walink.co/fd107e" target="_blank" rel="noreferrer">
            <div className="w-[30rem] bg-black p-10 bg-opacity-30 hover:scale-105 transition-all duration-300">
              <h1 className="text-2xl text-center h-16">
                International airport <b>(EZE)</b> transfers
              </h1>
              <p className="text-center mb-2">
                Reserve your transfer between Ezeiza international airport (EZE)
                and the city.
              </p>
              <Image src={content[0].img} width={600} height={400}></Image>
            </div>
          </a>
          <a href="https://walink.co/fd107e" target="_blank" rel="noreferrer">
            <div className="w-[30rem] p-10 bg-black bg-opacity-30 hover:scale-105 transition-all duration-300">
              <h1 className="text-2xl text-center h-16">
                Local airport <b>(AEP)</b> transfers
              </h1>
              <p className="text-center mb-2">
                Reserve your transfer between Aeroparque local airport (AEP) and
                the city.
              </p>
              <Image src={content[1].img} width={600} height={400}></Image>
            </div>
          </a>
          <a href="https://walink.co/fd107e" target="_blank" rel="noreferrer">
            <div className="w-[30rem] p-10 bg-black bg-opacity-30 hover:scale-105 transition-all duration-300">
              <h1 className="text-xl text-center h-16">
                Cruise Terminal <b>(Benito Quinquela Martín)</b> transfers
              </h1>
              <p className="text-center mb-2">
                Reserve your transfer between Cruise and the city & airports.
              </p>
              <Image src="/cruisebsas.jpg" width={600} height={400}></Image>
            </div>
          </a>
        </animated.div>
      </div>
    </>
  );
}
