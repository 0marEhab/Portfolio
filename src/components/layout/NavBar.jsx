import React from "react";

export default function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between border-b-[1px] border-[#393E46] text-white font-Merriweather overflow-hidden">
      <div className="mx-8">
        <p className="font-Anton text-2xl">Omar Ehab</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <div className="cursor-pointer relative flex justify-center gap-12 mx-10 my-8">
          <p>Home</p>
          <p>About Me</p>
          <p>Contact</p>
        </div>
      </div>
    </nav>
  );
}
