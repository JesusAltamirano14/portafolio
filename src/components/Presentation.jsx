import React from 'react'
import Typical from 'react-typical';

const Presentation = () => {
  return (
    <div className='home__presentation' id='presentation'>
        <div className="home__presentation__welcome">Welcome</div>
        <div className='home__presentation__container-text'>
          <div className='home__presentation__container-text__title'>Hi! I'm Jesus,</div>
          <Typical
          className='home__presentation__container-text__dinamic-text'
          loop={Infinity}
          wrapper='b'
          steps={['Fullstack Developer',1000,'Front-End',2000 ,'Back-End',1000]}
          />
        </div>
    </div>
  )
}

export default Presentation