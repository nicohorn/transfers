import React from "react";
import Quote from "./components/quote";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated } from "react-spring";
import {
  faClock,
  faStopwatch,
  faUserTie,
  faShuffle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const [index, setIndex] = useState(0);

  const props1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
    config: { duration: 300 },
  });

  const props2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1500,
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
    <div>
      <animated.div style={props1} className="">
        {quotes[index]}
        <div className="w-[60rem] mx-auto mt-10 mb-5 text-center text-lg ">
          We are a family company purpose driven, fully dedicated to provide
          overwhelming experiences to our customers by tailor made products
          according to their preferences. We offer roundtrips from the airports
          or terminal cruises to the city and a variety of tours :{" "}
          <a href="/services">
            <p className="font-bold transition-all duration-100 hover:text-white hover:bg-black p-2">
              City tour, Gaucho tour, Tango tour, Delta tour.
            </p>
          </a>
        </div>
        <animated.div
          style={props2}
          className="flex justify-center items-center mt-20 mb-40"
        >
          <div className="text-black text-center mt-10 w-[30%] ">
            <div className="uppercase font-bold text-3xl overflow-hidden">
              Our mission
            </div>
            <div className="italic text-xl mt-4">
              You have a hassle-free ride with an English-speaking driver.
            </div>
            <div>
              We aim to supply a full knowledge of our customs and culture
              through a fifth senses take over.
            </div>
          </div>
          <div className="text-black text-center w-[30%]">
            <div className="uppercase font-bold text-3xl overflow-hidden mt-6">
              Our values
            </div>
            <div className="flex gap-10 justify-center mt-4">
              <div>
                <div>Punctuality</div>
                <div>
                  <FontAwesomeIcon className="text-3xl mt-4" icon={faClock} />
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
                    className="text-3xl mt-3 "
                    icon={faUserTie}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </animated.div>
      <div className="py-20 bg-black mt-10 text-white font-bold flex items-center justify-center gap-20">
        <div>
          <FontAwesomeIcon
            className="mx-auto text-7xl mb-10"
            icon={faCheckCircle}
          ></FontAwesomeIcon>
        </div>
        <div>
          <div className="mx-auto  my-10 text-3xl">
            Authorized by the city of Buenos Bires to work in private
            transportation
          </div>
          <div className="mx-auto ] mb-20 text-3xl">
            FIVE YEAR IN THE MARKET, OUR BEST CREDENCIAL
          </div>
        </div>
      </div>
    </div>
  );
}
