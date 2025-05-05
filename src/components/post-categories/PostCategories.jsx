import React from "react";

const PostCategories = () => {
  return (
    <section>
      <div className="container">
        <ul className="flex justify-around items-center h-16 text-[#768088] text-[14px]-400">
          <li>
            <span className="cursor-pointer">Nature</span>
          </li>
          <li>
            <span className="cursor-pointer">Photography</span>
          </li>
          <li>
            <span className="cursor-pointer">Relaxation</span>
          </li>
          <li>
            <span className="cursor-pointer">Vacation</span>
          </li>
          <li>
            <span className="cursor-pointer">Travel</span>
          </li>
          <li>
            <span className="cursor-pointer">Adventure</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PostCategories;
