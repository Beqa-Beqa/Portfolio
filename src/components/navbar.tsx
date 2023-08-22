import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

// Function to scroll towards desired place smoothly
const scrollTo = (id: string) => {
  const elem = document.getElementById(id);
  if(id === "nav-name") {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    const offset = elem?.getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + offset?.top! - 56,
      behavior: "smooth"
    });
  }
}

const Navbar = (props: {width: number}) => {
  // Section positions
  const posAbout: DOMRect | undefined = document.getElementById("about")?.getBoundingClientRect();
  const posSkills: DOMRect | undefined = document.getElementById("skills")?.getBoundingClientRect();
  const posProjects: DOMRect | undefined = document.getElementById("projects")?.getBoundingClientRect();
  const posContact: DOMRect | undefined = document.getElementById("contact")?.getBoundingClientRect();
  // State to whether show burger menu or not
  const [showMenu, setShowMenu] = useState<boolean>(false);
  // State to whether set burgermenu toggler or not
  const [burgerMenu, setBurgerMenu] = useState<boolean>(true);
  // Useffect runs after every width change
  useEffect(() => {
    // Set burger menu based on width
    if(props.width < 960) {
      setBurgerMenu(true);
    } else {
      setBurgerMenu(false);
      setShowMenu(false);
    }
  }, [props.width]);
  // Declare color variables
  let bgColor: string;
  let hoverColor: string;
  // Define color variables based on scroll position
  if(posContact?.top! - 56 <= 0) {
    bgColor = "bg-white";
    hoverColor = "text-hover-primary";
  } else if(posProjects?.top! - 56 <= 0) {
    bgColor = "bg-purple-light-7";
    hoverColor = "text-hover-purple";
  } else if (posSkills?.top! - 56 <= 0) {
    bgColor = "bg-info-light-7";
    hoverColor = "text-hover-info";
  } else if (posAbout?.top! - 56 <= 0) {
    bgColor = "bg-secondary-light-7";
    hoverColor = "text-hover-secondary";
  } else {
    bgColor = "bg-white";
    hoverColor = "text-hover-primary";
  }
  return (
    <div className={`z-100 navbar ${bgColor} d-fixed custom-nav`}>
      <div className="container justify-space-between text-black">
        <div className="col-xs-5 fs-lg fs-lg-xl">
          <h2 id="nav-name" onClick={() => scrollTo("nav-name")} className={`fw-600 ${hoverColor} web-name`}>Beka's</h2>
        </div>
        {/* Conditional rendering */}
        {
          burgerMenu ?
            <div className="col-xs-1 d-flex align-items-center justify-center">
              <RxHamburgerMenu id="burger" onClick={() => setShowMenu(!showMenu)} className={`z-100 ${hoverColor}`} />
            </div>
          : 
            <ul className="d-flex justify-space-between w-50">
              <li onClick={() => scrollTo("about")} className={`${hoverColor}`}>About me</li>
              <li onClick={() => scrollTo("skills")} className={`${hoverColor}`}>Skills</li>
              <li onClick={() => scrollTo("projects")} className={`${hoverColor}`}>Projects</li>
              <li onClick={() => scrollTo("contact")} className={`${hoverColor}`}>Contact</li>
            </ul>
        }
        {/* Conditional styling */}
        <ul className={showMenu ? `z-99 burger active ${bgColor}` : `z-99 burger ${bgColor}`}>
          <li onClick={() => scrollTo("about")} className={`${hoverColor}`}>About me</li>
          <li onClick={() => scrollTo("skills")} className={`${hoverColor}`}>Skills</li>
          <li onClick={() => scrollTo("projects")} className={`${hoverColor}`}>Projects</li>
          <li onClick={() => scrollTo("contact")} className={`${hoverColor}`}>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
export {scrollTo}