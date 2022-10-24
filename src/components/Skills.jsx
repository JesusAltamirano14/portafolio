import React from "react";
import imgJavascript from "../images/javascript.png";

const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="home__skills" id="skills">
      <div className="home__skills__container">
        <div>Skills</div> 
        <div>
          I have a wide range of skills that I am constantly expanding. With +800
          hours of programming based on practices and real projects applying this
          knowledge
        </div>
        <div>Carousel</div>
      </div>
    </div>
  );
};

export default Skills;
