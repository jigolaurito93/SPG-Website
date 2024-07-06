import Image from "next/image";
import image2 from "/public/The spartan (3).png";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Image src={image2} alt="logo" width={800} />
      <div className="flex gap-10">
        <button className="border-4 border-black w-44 h-12 text-sm font-medium">
          GET STARTED
        </button>
        <button className="border-4 border-black w-44 h-12 text-sm font-medium">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Hero;
