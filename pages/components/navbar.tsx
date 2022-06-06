import React from "react";
import { useSpring, animated, easings } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { useRouter } from "next/router";
import path from "path";

export default function Navbar(state: any) {
  const config = useSpring({
    to: { x: 10 },
    from: { x: 0 },
    config: { duration: 700, easing: easings.easeInOutCubic },
    delay: 500,
    loop: { reverse: true },
  });
  const url = useRouter().pathname;

  const content = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/services", title: "Services" },
    { url: "/contact", title: "Contact" },
  ];

  const props = useSpring({
    to: { y: 0 },
    from: { y: -200 },
    config: { duration: 800, easing: easings.easeInOutCubic },
  });

  const navbar1 = (
    <animated.nav
      style={props}
      className="h-20 w-screen bg-black bg-opacity-80 fixed"
    >
      {" "}
      <div className="h-full w-full text-white flex justify-around items-center">
        <Link href="/">
          <div className="font-bold text-2xl flex">
            <div>Transfers </div>
            <animated.div style={config}>
              <FontAwesomeIcon className="ml-2" icon={faPlane} />
            </animated.div>
          </div>
        </Link>
        <div className="flex gap-6">
          {content.map((item) => (
            <Link href={item.url}>
              <div className="hover:scale-105 transition-all duration-100 group">
                <p>{item.title}</p>
                <div className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-150"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </animated.nav>
  );

  const navbar2 = (
    <nav className="h-20 w-screen bg-black sticky">
      {" "}
      <div className="h-full w-full text-white flex justify-around items-center">
        <Link href="/">
          <div className="font-bold text-2xl flex">
            <div>Transfers</div>{" "}
            <animated.div style={config}>
              <FontAwesomeIcon className="ml-2" icon={faPlane} />
            </animated.div>
          </div>
        </Link>
        <div className="flex gap-6">
          {content.map((item) => (
            <Link href={item.url}>
              <div className="hover:scale-105 transition-all duration-100 group">
                <p>{item.title}</p>
                <div className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-150"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );

  return url === "/" ? navbar1 : navbar2;
}
