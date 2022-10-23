import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Presentation from '../components/Presentation'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home = () => {
  return (
<div className='home'>
    <Presentation/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
</div>
  )
}

export default Home