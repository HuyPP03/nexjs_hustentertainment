import CategoryPage from "@/libs/category";
import DatePage from "@/libs/date";
import Image from "next/image";

const MenuItem = ({ image, name, date, category }) => {
  return (
    <div className="bg-primary/50 p-2 rounded-lg hover:bg-primary/20 hover:shadow-2xl hover: shadow-black/50 transition-all">
      <Image className="w-full" src={image} alt={""} width={300} height={300} />
      <h1 className="font-semibold text-lg uppercase">{name}</h1>
      <time className="text-s">{DatePage(date)}</time>
      <p className="">{CategoryPage(category)}</p>
    </div>
  );
};

export default MenuItem;
