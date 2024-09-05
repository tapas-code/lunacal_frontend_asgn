import React from "react";
import DetailsWidget from "./widgets/DetailsWidget";
import GalleryWidget from "./widgets/GalleryWidget";

const RightSection = () => {
  return (
    <div className="flex-1">
      <div className="flex h-full w-full flex-col justify-center pe-[86px] gap-[20px]">
        <DetailsWidget />
        <div className="h-[4px] bg-hr-gradient max-w-[80%] self-center w-full"></div>
        <GalleryWidget />
        <div className="h-[4px] bg-hr-gradient max-w-[80%] self-center w-full"></div>
      </div>
    </div>
  );
};

export default RightSection;
