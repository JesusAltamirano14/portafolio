import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import imgJavascript from "../images/javascript.png";
import imgReact from "../images/react.png";
import imgHtml from "../images/html.png";
import imgCss from "../images/css.png";
import imgRedux from "../images/redux.png";
import imgPostgres from "../images/postgres.png";
import imgExpress from "../images/express.png";
import imgSass from "../images/sass.png";



const Skills = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(Math.ceil(window.innerWidth/1000));


  const arrayImagenes = [
    {imagen:imgJavascript,title:'Javascript'},
    {imagen:imgHtml,title:'Html'},
    {imagen:imgCss,title:'Css'},
    {imagen:imgReact,title:'React'},
    {imagen:imgRedux,title:'Redux'},
    {imagen:imgSass,title:'Sass'},
    {imagen:imgPostgres,title:'Postgres'},
    {imagen:imgExpress,title:'Express'}
    
  ];

  let numberPages = Math.ceil(arrayImagenes.length / postsPerPage);
  let lastIndex = currentPage*postsPerPage;
  let index = lastIndex - postsPerPage;
  const newPosts = arrayImagenes.slice(index,lastIndex);

  const handleClickPrevious = (e) => {
    e.preventDefault();
    currentPage<=1?(setCurrentPage(numberPages)):(setCurrentPage(currentPage-1));
  }

  const handleClickNext = (e) => {
    e.preventDefault();
    currentPage>=numberPages?(setCurrentPage(1)):(setCurrentPage(currentPage+1));
  }

  useEffect(()=>{
    const runner = () => {
      if(window.innerWidth>=3000){
        setPostsPerPage(5);
        console.log('screen mayor a 3000')
      }else if(window.innerWidth>=2400 && window.innerWidth<3000){
        setPostsPerPage(4);
      }
      else if(window.innerWidth>=1700 && window.innerWidth<2400){
        setPostsPerPage(3);
      }
      else if(window.innerWidth>=1100 && window.innerWidth<1700){
        setPostsPerPage(2);
        console.log('screen menor a 3000 pero mayor a 1024')
      }else if(window.innerWidth>=0 && window.innerWidth<1100){
        setPostsPerPage(1);
      }
    }

    window.addEventListener('resize',runner);

    const interval = setInterval(()=>{
    currentPage>=numberPages?(setCurrentPage(1)):(setCurrentPage(currentPage+1));
    },3000)

    return ()=>{
      console.log('finish')
      window.removeEventListener('resize',runner);
      clearInterval(interval);
    }
  })

  return (
    <div className="home__skills" id="skills">
      <div className="home__skills__container">
        <div className="home__skills__container__title">Skills</div> 
        <div className="home__skills__container__parag">
          Tengo una amplia gama de habilidades que estoy ampliando constantemente con +800 horas de programación basada en prácticas.
        </div>
        <div className="home__skills__container-logos">
          <button className="home__skills__container-logos__button" onClick={handleClickPrevious}>{'<'}</button>
          {newPosts?.map(data=>(<div className="home__skills__container-logos__logos">
            <img className="home__skills__container-logos__logos__img" src={data.imagen} alt='logo'/>
            <h5 className="home__skills__container-logos__logos__title">{data.title}</h5>
          </div>))}
          <button className="home__skills__container-logos__button" onClick={handleClickNext}>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
