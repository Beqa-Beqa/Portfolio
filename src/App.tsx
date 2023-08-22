import * as comp from "./components";
import { laptop } from "./assets/svgs";
import { scrollTo } from "./components/navbar";
import {useState, useEffect} from "react";

const App = () => {
  // Function that makes sure that after refresh scroll position is on top
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  // State to keep track of browser window width
  const [width, setWidth] = useState<number>(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
  // Resize handler event that sets width state to new width everytime resize event happens
  const handleResize = () => {
    const newWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    setWidth(newWidth);
  }
  // State to keep track of browser scrollY position
  const [posY, setPosY] = useState<number>(window.scrollY);
  // Scroll handler event that sets scroll position after scroll
  const handleScroll = () => {
    const newPos = window.scrollY;
    setPosY(newPos);
  }
  useEffect(() => {
    // Event listener for resize event
    window.addEventListener("resize", handleResize);
    // Event listener for scroll event
    window.addEventListener('scroll', handleScroll);
    // Clean event listener for resize and scroll event on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    }
  }, []); // Empty dependency value makes sure that useffect only runs after initial render
  return (
    <>
      <header>
        <comp.Navbar width={width}/>
      </header>
      <main>
        <div className="container custom-margin">
          <div className="row">
            <div className="p-5 col-xs-12 col-lg-7 align-center text-center">
              <h2 className="fs-xs-lg fs-sm-xl fs-xl-xxl text-black fw-700 mb-1">Beka Aladashvili</h2>
              <h2 className="fs-xs-lg fs-sm-xl text-primary fw-800 mb-2">Front-End Developer</h2>
              <p className="lh-1 fs-xs-sm fs-md-md fs-xxl-lg italic mb-2 ">How do you like your coffee ?</p>
              <button onClick={() => scrollTo("projects")} className="fs-xs-sm fs-md-md btn-outlined-primary col-xs-8 col-sm-4 col-lg-5" type="button">View my work</button>
            </div>
            <img className="p-1 col-xs-12 col-lg-5" src={laptop} alt="laptop"/>
          </div>
        </div>
        <comp.AboutMe />
        <comp.Skills />
        <comp.Projects width={width} />
      </main>
      <footer>
        <comp.Contact />
      </footer>
    </>
  );
}

export default App;