import React from "react";
import avatar from "../../assets/avatar1.png";
const Featured = () => {
  return (
    <section>
      <div className="container flex flex-col items-center">
        <div className="pb-4 pt-11">
          <h2 className="text-[20px]/[27px] text-400 inline-block tracking-[2px] text-[#2E2E2E] p-4 border-b border-[#DEDEDE]">
            Featured Posts
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 w-full ">
          {Array(2)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-end bg-[url('./assets/north-pole.jpg')] bg-no-repeat bg-center bg-cover min-h-[280px] rounded-primary"
              >
                <div className="px-5">
                  <h3 className="text-[27px] text-[#fff]">The Road Ahead</h3>
                  <p className="text-[14px] pt-1.5 text-[#fff] opacity-70">
                    Life begins at the end of your comfort zone.
                  </p>
                </div>
                <div className="flex  gap-2.5 items-center px-5 py-3  text-[#fff] opacity-70 text-xs">
                  <img src={avatar} alt="Avatar" />
                  <p className="flex-1 ">William Wong</p>
                  <span>September 25 2015</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
