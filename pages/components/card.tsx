import React from "react";
import Image from "next/image";

export default function card(props) {
  return (
    <div
      id={props.id}
      className={
        props.opacity
          ? "w-[20vw] flex flex-col opacity-1"
          : "w-[20vw] flex flex-col opacity-0"
      }
    >
      <Image src={props.image} width={600} height={400}></Image>
      <div className="text-xl font-bold p-5">{props.title}</div>
      <div className="px-4 pb-10 h-20">{props.desc}</div>
    </div>
  );
}
