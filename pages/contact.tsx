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
      className="flex w-screen justify-center items-center h-[60vh] flex-col"
    >
      <div className="py-20 text-5xl font-bold">Contact us</div>
      <div className="w-[40vw] h-[50vh] shadow-lg flex justify-center">
        {" "}
        <form
          action="https://formsubmit.co/info@beneutral.cl"
          method="POST"
          className="mb-4 w-[90%] flex flex-col rounded bg-white px-8 pt-6 pb-8 "
        >
          <label htmlFor="">Name</label>
          <input
            className="mb-4 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none sm:text-sm"
            type="text"
            name="name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            className="mb-4 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm  sm:text-sm focus:outline-none"
            type="email"
            name="email"
            required
          />
          <label htmlFor="">Message</label>
          <textarea
            className="mb-4 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm sm:text-sm focus:outline-none"
            rows={3}
            name="message"
            required
          ></textarea>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/"
          ></input>
          <button
            type="submit"
            className="p-2 font-bold hover:scale-[1.01] rounded-lg transition-all duration-200 text-white bg-green-400 active:scale-[0.99]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
