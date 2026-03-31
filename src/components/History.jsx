import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function History() {
  useGSAP(function () {
    gsap.to(".card", {
      scrollTrigger: {
        trigger: ".history",
        start: "0% 70%",
        end: "100% 100%",
      },
      duration: 1,
      scrub: true,
      x: "-5%",
      opacity: 1,
    });
  });

  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      className="history h-[105vh] w-full bg-zinc-200 flex items-center justify-center gap-2 rounded-t-2xl"
    >
      <div className="w-1/2" />
      <div className="w-1/2  h-full px-12 py-16 relative">
        <div className="card absolute top-16 opacity-0">
          <div className="overflow-hidden his-h1">
            <h1 className="text-[4.5vw] text-[#E61921] leading-none font-extrabold tracking-tight">
              A Purpose-Driven <br />
              History.
            </h1>
          </div>
          <p className="text-zinc-800 my-4 text-lg w-[80%]">
            The Coca‑Cola Company’s purpose is to refresh the world and make a
            difference and we have remained true to that purpose for 137 years.
          </p>

          <button className="py-2 px-6 cursor-pointer hover:bg-[#E61921] hover:text-white transition-colors  text-[#E61921] font-semibold  flex items-center justify-center gap-2 border-2 border-[#E61921] rounded-full">
            Explore History
            <span className="w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
