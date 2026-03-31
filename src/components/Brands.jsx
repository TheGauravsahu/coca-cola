const BRANDS = [
  {
    title: "Fanta",
    img: "/fanta.png",
  },
  {},
  {
    title: "Sprite",
    img: "/sprite.png",
  },
];

export default function Brands() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
    className="brands h-[130vh] w-full p-28 py-[15vw] flex flex-col gap-12">
      <div>
        <h1 className="font-bold text-center text-6xl leading-none">Explore Our Brands.</h1>
      </div>
      <div className="flex items-center justify-center gap-4 h-full w-full">
        {BRANDS.map((b, i) => (
          <div
            key={i}
            className={`${i === 1 && "shadow-lg shadow-[#E81622]"} brand h-[30vw] w-[25vw] bg-zinc-100 rounded-2xl`}
          >
            <div className="h-[80%] w-full overflow-hidden hover:scale-95 cursor-pointer transition-all">
              <img className="scale-[0.78]" src={b.img} alt={b.title} />
            </div>

            <div className="w-full flex items-end py-8 justify-center">
              <button className="flex items-center gap-4 justify-center font-semibold ronded-full uppercase text-sm py-1 px-6 rounded-full hover:bg-[#E81622] hover:text-white transition-all cursor-pointer border-2  border-[#E81622] text-[#E81622]">
                Add to card{" "}
                <span className="w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
