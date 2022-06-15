import React from "react";
import Card from "./components/card";
import { gsap, Power4, Elastic } from "gsap";
import { useEffect } from "react";
import { setInterval } from "timers";

export default function Services() {
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
    {
      title: "City tour",
      desc: "Take the Buenos Aires City Tour and go over the most important districts of the Argentine capital.",
      img: "/cabildo.webp",
    },
    {
      title: "Wine tasting",
      desc: "Enjoy the best malbecs wine of Argentina with our sommeliers.",
      img: "/winetasting.webp",
    },
    {
      title: "Tango show",
      desc: "Enjoy a memorable night out in Buenos Aires and experience the passion of the Argentine tango.",
      img: "/tangoshow.webp",
    },
    {
      title: "Gaucho day",
      desc: "Visit a typical Argentinean gaucho ranch and enjoy a tipical barbecue for lunch.",
      img: "/gaucho.webp",
    },
    {
      title: "Delta Tigre day",
      desc: "Escape the city for a tour of the Tigre River Delta and San Isidro from Buenos Aires.",
      img: "/tigre.webp",
    },
    {
      title: "Polo day",
      desc: "Take polo lessons in the Argentine pampas on this full-day trip from Buenos Aires.",
      img: "/polo.webp",
    },
    {
      title: "Craft shopping day",
      desc: "Shopping in the best souvenirs stores.",
      img: "/craft.webp",
    },
    {
      title: "Tango lessons",
      desc: "Be a tango dancer in Buenos Aires. ",
      img: "/tango.webp",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      "#title",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: Power4.easeInOut }
    );
    gsap.fromTo(
      "#title",
      { y: -100 },
      { y: 0, duration: 0.8, ease: Power4.easeInOut }
    );

    for (let i = 0; i < content.length; i++) {
      setTimeout(function () {
        gsap.fromTo(
          `#card${i}`,
          { y: 200 },
          {
            y: 0,
            duration: 0.2,
            ease: Power4.easeOut,
          }
        );
        gsap.fromTo(
          `#card${i}`,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: Power4.easeOut,
            delay: 0.5,
          }
        );
      }, 115 * i);
    }
  }, []);

  return (
    <>
      <div id="title" className="py-40 w-screen text-center text-5xl font-bold">
        Our services
      </div>
      <div className="grid grid-cols-3 place-items-center gap-1 my-10 px-48 ">
        {content.map((item, i) => (
          <div
            key={i}
            className="hover:scale-[1.01] transition-all duration-150 hover:shadow shadow-none"
          >
            <Card
              key={i}
              id={`card${i}`}
              image={item.img}
              title={item.title}
              desc={item.desc}
            ></Card>
          </div>
        ))}
      </div>
    </>
  );
}
