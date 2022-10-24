import React, { useEffect, useState } from 'react'
import iconHamburger from '../images/menu.png'

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
        document.addEventListener('scroll',activeScroll)
    },[])
  return (
    <div className={scroll?'navbar navbar-active':'navbar'}>
        <div className='navbar__logo'>
            <a className='navbar__logo__link' href='#presentation'>Jesus</a>
            <a className='navbar__logo__link navbar__logo__link-lastname' href='#presentation'>Altamirano</a>   
        </div>
        <div className='navbar__icon' onClick={handleClickIcon}><img className='navbar__icon__ham' src={iconHamburger} alt='jesus'/></div>
        <div className={hamburger?'navbar__container-all navbar__container-all-active':'navbar__container-all'}>
            <ul className='navbar__list'>
                <li className="navbar__list__item"><a href="#skills" className="navbar__list__item__link">Skills</a></li>
                <li className="navbar__list__item"><a href="#projects" className="navbar__list__item__link">Projects</a></li>
            </ul>
            <div className='navbar__buttons'>
                <a href="https://www.google.com.pe" className="navbar__buttons__git"/>
                <a href="https://www.google.com.pe" className="navbar__buttons__cv">CV</a>
                <a href="#contact" className="navbar__buttons__contact">Contact me</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar