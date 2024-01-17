import BannerHome from "../components/BannerHome";
import HeroSection from "../components/HeroSection";
import About from "./About";
import Blogs from "./Blogs";
import Project from "./Project";

const Home = () => {
  return (
    <div>
      <div>
        <BannerHome />
        <HeroSection />
      </div>
      <div className="bg-black">
        <Blogs />
      </div>
      <div className="bg-indigo-800">
        <Project />
      </div>
      <div className="">
        <About />
      </div>
    </div>
  );
};

export default Home;
