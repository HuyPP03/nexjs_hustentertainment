import MenuItem from "../Menu/MenuItem";
import Link from "next/link";
export const HomeMenu = () => {
  return (
    <section>
      <div className="text-center">
        <h3 className="uppercase text-gray-500 font-semibold leading-4">
          Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic pb-4">
          Featured events
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      <div className="flex items-center justify-center py-6">
        <Link
          href="/menu"
          className="items-center bg-primary rounded-full text-white px-10 py-1 font-semibold"
        >
          See more
        </Link>
      </div>
    </section>
  );
};
