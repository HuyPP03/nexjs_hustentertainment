const MenuItem = () => {
  return (
    <div className="bg-primary/50 p-2 rounded-lg hover:bg-primary/20 hover:shadow-2xl hover: shadow-black/50 transition-all">
      <img className="w-full" src="./logo.jpg" alt="" />
      <h1 className="font-semibold text-lg">
        PEPSI presents RAVOLUTION Music Festival (RAVO-X Edition)
      </h1>
      <time className="text-s">03/12/2023</time>
      <p className="">Live Music</p>
    </div>
  );
};

export default MenuItem;
