import Image from "next/image";
import cityImage from "/public/indianapolis.jpg";

const Headline = () => {
  return (
    <div className="aspect-square px-20">
      <Image src={cityImage} alt="Indianapolis City" width={700}/>
    </div>
  );
};
export default Headline;
