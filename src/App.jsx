import Brands from "./components/Brands";
import Hero from "./components/Hero";
import History from "./components/History";
import Marquee from "./components/Marquee";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  new LocomotiveScroll();

  return (
    <div className="min-h-screen text-white w-full bg-zinc-900">
      <Navbar />
      <Hero />
      <History />
      <Marquee />
      <Brands />
      <Footer />
    </div>
  );
}
