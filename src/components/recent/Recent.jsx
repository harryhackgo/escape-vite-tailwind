import React from "react";
import image from "../../assets/air-balloon.jpg";
import avatar from "../../assets/avatar1.png";
const Recent = () => {
  return (
    <section className="pb-20">
      <div className="container flex flex-col items-center">
        <div className="pb-4 pt-11">
          <h2 className="text-[20px]/[27px] text-400 inline-block tracking-[2px] text-[#2E2E2E] p-4 border-b border-[#DEDEDE]">
            Most Recent
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <div key={index} className=" flex flex-col bg-white">
                <div>
                  <img className="w-full" src={image} alt="air balloon" />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="p-3.5 flex-1">
                    <h3>Still Standing Tall</h3>
                    <p className="text-[13px] pt-1.5 text-[#7A7A7A]">
                      Life begins at the end of your comfort zone.
                    </p>
                  </div>
                  <div className="flex gap-2.5 items-center p-3 border-t-3 border-[#F7F7F7] text-[#999999]">
                    <img src={avatar} alt="Avatar" />
                    <p className="flex-1 text-xs">William Wong</p>
                    <span>9/25/2015</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Recent;
