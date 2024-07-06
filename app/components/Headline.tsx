import React from "react"; // Add this line
import Image from "next/image";
import workers from "/public/3D Worker.png";

const Headline = () => {
  return (
    <div className="px-20 h-screen flex items-center justify-center gap-40 bg-[#183560] text-white">
      <div className="flex flex-col w-4/12 gap-12">
        <h1 className="text-6xl font-semibold">
          Revolutionizing Managed IT at Lightning Speeds
        </h1>
        <p className="text-lg">
          Discover TSG, your premier Managed IT firm offering cutting-edge
          solutions. Established in 2014 and headquartered in central Indiana,
          we excel in Managed IT, strategic consulting, exceptional IT support,
          cybersecurity, and cloud systems for businesses across Central Indiana
          and beyond.
        </p>
        <button className="border w-fit px-4 py-1 rounded-sm">Contact Us</button>
      </div>
      <div className="">
        <Image src={workers} width={600} alt="IT Workers" />
      </div>
    </div>
  );
};
export default Headline;
