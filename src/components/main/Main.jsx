import React from "react";
import Hero from "../hero/Hero";
import PostCategories from "../post-categories/PostCategories";
import Recent from "../recent/Recent";
import Featured from "../featured/Featured";

const Main = () => {
  return (
    <main className="bg-[#F7F7F7]">
      <Hero />
      <PostCategories />
      <Featured />
      <Recent />
    </main>
  );
};

export default Main;
