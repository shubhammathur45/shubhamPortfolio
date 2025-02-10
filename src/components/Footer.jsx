import React from "react";
import html from "../assets/html.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"

const Footer = () => {
  return (
    <div name="footer" className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-8">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
        {/* Text */}
        <p className="text-gray-300 text-center mb-4">
          Website designed using{" "}
          <span className="font-semibold">HTML</span>,{" "}
          <span className="font-semibold">JavaScript</span>,{" "}
          <span className="font-semibold">React</span>, and{" "}
          <span className="font-semibold">Tailwind</span>.
        </p>

        {/* Logos */}
        <div className="flex space-x-6">
          <img src={html} alt="HTML Logo" className="w-10 h-10" />
          <img src={javascript} alt="JavaScript Logo" className="w-10 h-10" />
          <img src={react} alt="React Logo" className="w-10 h-10" />
          <img src={tailwind} alt="Tailwind Logo" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer;