import React from "react";
import Quote from "./components/quote";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated } from "react-spring";
import {
  faClock,
  faStopwatch,
  faUserTie,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const [index, setIndex] = useState(0);

  const props1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 300 },
  });

  const props2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 700,
    config: { duration: 400 },
  });

  const content = [
    {
      quote: `“Buenos Aires is easily one of the most stylish cities in the world
      with its eclectic collection of neighbourhoods, each with its own
      unique charm.”`,
      author: "Ben Elliot",
    },
    {
      quote: `“Without the streets or dusks of Buenos Aires, a tango cannot be written.”`,
      author: "Jorge Luis Borges",
    },
    {
      quote: `“Buenos Aires. I’m new, I wanna say I’m just a little stuck on you. And if ever I go too far, it’s because of the things you are. Beautiful town, I love you.”`,
      author: "Madonna",
    },
  ];

  let quotes = [];
  function quoteGenerator() {
    content.map((item) =>
      quotes.push(<Quote author={item.author} quote={item.quote}></Quote>)
    );
    setTimeout(function () {
      index < quotes.length - 1 ? setIndex(index + 1) : setIndex(0);
    }, 5000);
  }

  quoteGenerator();

  return (
    <animated.div style={props1}>
      {quotes[index]}
      <animated.div style={props2} className="flex justify-center">
        <div className="text-black text-center my-20 w-[40%]">
          <div className="uppercase font-bold text-3xl">Our mission</div>
          <div className="italic text-xl mt-4">
            Pick you up on time, drop you off on time
          </div>
          <div>We bring you the correct vehicle for your your needs</div>
          <div>
            <FontAwesomeIcon className="text-5xl mt-4" icon={faClock} />
          </div>
        </div>
        <div className="text-black text-center my-24 w-[40%]">
          <div className="uppercase font-bold text-3xl">Our values</div>
          <div className="flex gap-10 justify-center mt-4">
            <div>
              <div>Punctuality</div>
              <div>
                <FontAwesomeIcon
                  className="text-3xl mt-3"
                  icon={faStopwatch}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div>
              {" "}
              <div>Flexibility</div>
              <div>
                <FontAwesomeIcon
                  className="text-3xl mt-3"
                  icon={faShuffle}
                ></FontAwesomeIcon>
              </div>
            </div>
            <div>
              {" "}
              <div>Professionalism</div>
              <div>
                <FontAwesomeIcon
                  className="text-3xl mt-3"
                  icon={faUserTie}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
}
