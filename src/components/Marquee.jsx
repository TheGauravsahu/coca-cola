import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Marquee() {
  useGSAP(function () {
    gsap.to(".marquee-text", {
      x: "-100%",
      repeat: -1,
      duration: 8,
      ease: "none",
    });
  });

  return (
    <div className="w-full h-[32vh] bg-[#E81622] overflow-hidden z-10">
      <div className="w-full h-full flex items-center whitespace-nowrap gap-8">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <>
            <h1 className="marquee-text flex items-end justify-center gap-6 text-[6vw] leading-none font-semibold">
              136+ Years of Refreshing
              <span className="w-20 h-20 rounded-full border border-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.41421 8L18.0208 16.6066L16.6066 18.0208L8 9.41421V17H6V6H17V8H9.41421Z"></path>
                </svg>
              </span>
            </h1>

            <h1 className="marquee-text flex items-end justify-center gap-6 text-[6vw] leading-none font-semibold">
              200+ Brands World Wide
              <span className="w-20 h-20 rounded-full border border-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.41421 8L18.0208 16.6066L16.6066 18.0208L8 9.41421V17H6V6H17V8H9.41421Z"></path>
                </svg>
              </span>
            </h1>
          </>
        ))}
      </div>
    </div>
  );
}
