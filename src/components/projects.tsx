import { useEffect, useRef, useState } from "react";
import ProjectData from "../assets/data";

const Projects = (props: {width: number}) => {
  // Active project state for slider
  const [activeProject, setActiveProject] = useState<number>(0);
  // Useffect for initializing slider and interval, slider is null before re-render
  useEffect(() => {
    slider.current = document.querySelector(".slider") as HTMLDivElement;
    // Interval to change slide in every 5 seconds
    const projectInterval = setInterval(function(){
      if(activeProject < ProjectData.length - 1) {
        setActiveProject(activeProject + 1);
        changeSlide(activeProject + 1);
      } else {
        setActiveProject(0);
        changeSlide(0);
      }
    }, 5000);
    return () => clearInterval(projectInterval);
  }, [activeProject]);
  // Declaring variables
  const slider = useRef<HTMLDivElement | null>(null);
  // Function responsible for slider animation
  const changeSlide = (num: number) => {
    // Set active project
    setActiveProject(num);
    // transform amount in precentages
    let transformAmount: number = -num * 100;
    // transform translate styles
    slider.current!.style.transform = `translateX(${transformAmount}%)`;
  }
  return (
    <div className="bg-purple-light-8">
      {/* Conditional styling for project container */}
      <div id="projects" className={props.width >= 960 ? "container d-flex flex-column align-center justify-center pt-2 pb-4" : "d-flex flex-column justify-center align-center pt-2 pb-4"}>
        <h3 className="text-center fw-700 mt-4 mb-3 fs-xs-lg">Projects</h3>
        <div className="col-xs-11 col-lg-12 card d-flex row bg-white gap-1">
          <div className="col-xs-12 col-lg-6 h-100">
            <div className="slider-container">
              <div className="slider">
                {ProjectData.map((item, key) => {
                  return <img key={key} src={item.image} alt={item.name} />
                })}
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6 h-100 project-info">
            <div className="d-flex flex-column justify-flex-start">
              <h4 className="card-title w-100 mb-2">{ProjectData[activeProject].name}</h4>
              <div className="d-block mb-1">
                <h5 className="card-mini-header mb-1">Made with</h5>
                <p className="italic lh-2">{ProjectData[activeProject].madeWith.join(" / ")}</p>
              </div>
              <div className="d-block mb-1 mt-1">
                <h5 className="card-mini-header mb-1">Links</h5>
                <p className="lh-2">Visit Live Url - <a href={ProjectData[activeProject].links.live} target="_blank" className="decoration-none text-purple text-hover-purple-light-5 fw-700 italic">Here</a></p>
                <p className="lh-2">Visit Github Repository - <a href={ProjectData[activeProject].links.githubRepo} target="_blank" className="decoration-none text-purple text-hover-purple-light-5 fw-700 italic">Here</a></p>
              </div>            
              <div className="d-block">
                <h5 className="card-mini-header mb-1 mt-1">About project</h5>
                <p className="lh-2 description">{ProjectData[activeProject].description}</p>
              </div>
            </div>
            <p className="italic fw-200 fs-md">Designs are taken from figma</p>
          </div>
        </div>
        <div className="gap-1 mt-1">
          {
            ProjectData.map((_, key) => {
              return (
                <span>
                  <button key={key} onClick={() => changeSlide(key)} className={activeProject === key ? "active radio-button br-rounded" : "radio-button br-rounded"}/>
                </span>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Projects;