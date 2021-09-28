import React from "react";

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-left">
        <a href="#about" className="title-font font-medium text-gray mb-4 md:mb-0 ml-3 text-6xl">
            🕴
        </a>
      </div>
    </header>
  );
}