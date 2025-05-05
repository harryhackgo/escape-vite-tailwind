import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[url('./assets/forfooter.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="container flex flex-col items-center">
        <div className="pb-5 pt-11">
          <h2 className="text-[25px]/[30px] text-400 inline-block -tracking-[0] text-[#EFEFEF] p-4 border-b border-[#DEDEDE]">
            Stay In Touch
          </h2>
        </div>
        <div className="flex items-center justify-center mb-[90px]">
          <input
            className="bg-white rounded-bl-primary rounded-tl-primary pl-9 pr-52  h-12 outline-gray-200 text-xs"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="bg-white/30 h-12 rounded-br-primary rounded-tr-primary text-xs px-11 text-white ">
            Submit
          </button>
        </div>
      </div>
      <section className="border bg-black/30 backdrop-blur-md">
        <div className="container">
          <nav className="h-[90px] flex items-center justify-between text-white">
            <h1 className="text-[26px]">Escape.</h1>
            <ul className="flex gap-10 uppercase text-[#fff] opacity-60 text-xs">
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
      </section>
    </footer>
  );
};

export default Footer;
