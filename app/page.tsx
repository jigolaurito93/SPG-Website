import Hero from "./components/Hero";
import Headline from "./components/Headline";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Headline />
      {/* <div className="flex gap-16">
        <button className="border-4 border-black w-44 h-12 text-sm font-medium">GET STARTED</button>
        <button className="border-4 border-black w-44 h-12 text-sm font-medium">LEARN MORE</button>
      </div> */}
    </div>
  );
}
