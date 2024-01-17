import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import BlogDetails from "./pages/BlogDetails";
import { useEffect } from "react";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/project" element={<Project />} exact />
          <Route path="/blog" element={<Blogs />} exact />
          <Route path="/blog/:skillId" element={<BlogDetails />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
