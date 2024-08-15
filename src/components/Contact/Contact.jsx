import React, { useState } from "react";

export default function Contact() {
  const [copiedText, setCopiedText] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(text);
        setShowMessage(true);

        // Hide the message after 1 second
        setTimeout(() => {
          setShowMessage(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <div>
        <div className="flex justify-center gap-5 items-center font-Anton text-white text-7xl mb-10">
          <p>Contact me</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-5 items-center font-Anton text-white p-12">
          <button className="hover:text-[#0C868C]">
            <a href="https://www.linkedin.com/in/omarehab01/">LinkedIn</a>
          </button>
          <button className="hover:text-[#0C868C]">
            <a href="https://www.facebook.com/mooro.ehab">Facebook</a>
          </button>
          <span
            className="hover:text-[#0C868C] cursor-pointer"
            onClick={() => copyToClipboard("+(20) 01101740808")}
          >
            +(20) 01101740808
          </span>
          <span
            className="hover:text-[#0C868C] cursor-pointer"
            onClick={() => copyToClipboard("mooroehab18@gmail.com")}
          >
            mooroehab18@gmail.com
          </span>
        </div>

        {showMessage && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg opacity-0 animate-fade-in-out">
            {copiedText} copied to clipboard!
          </div>
        )}
      </div>
    </>
  );
}
