import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    const img = new Image();
    img.src = "/coke.png";
  }, []);

  useGSAP(function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".history",
        start: "0% 85%",
        end: "50% 50%",
        scrub: true,
      },
    });

    tl.to(".coke", {
      rotate: "20deg",
      y: "72%",
      left: "30%",
      width: "40%",
    });
  });

  useGSAP(function () {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".brands",
        start: "-25% 100%",
        end: "90% 90%",
        scrub: true,
      },
    });

    tl2.to(".coke", {
      rotate: "0deg",
      y: "252%",
      left: "50%",
      scale: 0.46,
    });
  });

  useGSAP(function () {
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "0% 95%",
        end: "90% 90%",
        scrub: true,
      },
    });

    tl3.to(".coke", {
      y: "355%",
      left: "50%",
      rotate: "90deg",
      scale: 1.2,
    });
  });

  useGSAP(function () {
    gsap.from(".heading1", {
      y: "100%",
      duration: 1,
      stagger: 0.2,
      ease: [0.45, 0, 0.55, 1],
    });
    gsap.from(".heading2", {
      y: "100%",
      duration: 1,
      stagger: 0.2,
      ease: [0.45, 0, 0.55, 1],
    });
  });

  return (
    <div className="hero h-[110vh] w-full bg-[#AE141B]">
      {/* radial grandiant */}{" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,80,80,0.6)_0%,rgba(174,20,27,1)_90%)]" />
      <div className="coke  z-999 h-[88%] w-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          className="w-full h-full object-cover scale-90"
          src="/coke.png"
          alt="coke"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <img src="/coca-cola.png" className="w-[80vw]" />
      </div>
      <div className="absolute bottom-0 p-5 flex flex-col  w-full text-wrapper">
        <div className="overflow-hidden">
          <h1 className="text-7xl font-semibold leading-none tracking-tight heading1">
            The <br />
            <span>coca-cola</span>
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="text-2xl font-semibold leading-none tracking-tighter mt-2 ml-2 heading2">
            Own Happiness
          </h1>
        </div>
      </div>
    </div>
  );
}
