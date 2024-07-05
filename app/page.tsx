import Image from "next/image";
import { SpartanLogo } from "./components/Logo";
import image2 from "/public/The spartan (3).png";

export default function Home() {
  return (
    // <div className="h-screen flex justify-center items-center bg-[#222222]">
    <div className="h-screen flex justify-center items-center bg-white">
      <Image src={image2} alt="logo" width={800} />
    </div>
  );
}
