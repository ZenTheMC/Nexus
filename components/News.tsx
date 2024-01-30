import React from "react";
import NewsCard from "./Helper/NewsCard";

const News = () => {
  return (
    <div className="bg-gray-800 pt-[5rem] pb-[3rem]">
      <h1 className="w-[80%] mx-auto md:text-[28px] text-[22px] lg:text-[34] text-white">
        Latest News
      </h1>
      <div className="mt-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-[3rem] w-[80%] mx-auto">
          <NewsCard image="/images/apple.png" title="Longevity Escape Velocity" />
          <NewsCard image="/images/chip.png" title="Transcend Humanity" />
          <NewsCard image="/images/dimension.png" title="Post Scarcity Hyper-Abundance" />
        </div>
      </div>
    </div>
  );
};

export default News;