import React, { useEffect, useState } from 'react'
import iconHamburger from '../images/hamburguesa.png'

const Navbar = () => {


    const [hamburger,setHamburger] = useState(false);
    const [scroll,setScroll] = useState(false);


    const handleClickIcon = (e) => {
        e.preventDefault();
        setHamburger(!hamburger);
    }

    useEffect(()=>{
        const activeScroll = () => {
            if(window.scrollY>70){
                setScroll(true);
            }else{
                setScroll(false);
            }
        }
        window.addEventListener('scroll',activeScroll);

        return ()=>{
            window.removeEventListener('scroll',activeScroll);
        }
    },[])
  return (
    <div className={scroll?'navbar navbar-active':'navbar'}>
        <div className='navbar__logo'>
            <a className='navbar__logo__link' href='#presentation'>Jesus</a>
            <a className='navbar__logo__link navbar__logo__link-lastname' href='#presentation'>Altamirano</a>   
        </div>
        <div className='navbar__icon' onClick={handleClickIcon}><img className='navbar__icon__ham' src={iconHamburger} alt='burger'/></div>
        <div className={hamburger?'navbar__container-all navbar__container-all-active':'navbar__container-all'}>
            <ul className='navbar__list'>
                <li className="navbar__list__item"><a href="#skills" className="navbar__list__item__link">Habilidades</a></li>
                <li className="navbar__list__item"><a href="#projects" className="navbar__list__item__link">Proyectos</a></li>
            </ul>
            <div className='navbar__buttons'>
                <a href="https://github.com/JesusAltamirano14" target="_blank" rel="noreferrer" className="navbar__buttons__git">{null}</a>
                <a href="https://drive.google.com/file/d/1eqT58I9XUgTJA8tNc7gTnUCDXwx8MeJw/view?usp=sharing" target="_blank" rel="noreferrer" className="navbar__buttons__cv">{null}</a>
                <a href="#contact" className="navbar__buttons__contact">
                    <span className='navbar__buttons__contact__me'>Contáctame</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar