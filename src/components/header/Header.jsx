import React from "react";

const Header = () => {
  return (
    <header className="absolute w-full">
      <div className="container">
        <nav className="h-[74px] flex items-center justify-between text-white">
          <h1 className="text-[26px]">Escape.</h1>
          <ul className="flex gap-10 uppercase">
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Categories</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
