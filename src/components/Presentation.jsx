import React from 'react'
import Typical from 'react-typical';

const Presentation = () => {
  return (
    <div className='home__presentation' id='presentation'>
        {/* <div className="home__presentation__welcome">Welcome</div> */}
        <div className='home__presentation__container-text'>
          <div className='home__presentation__container-text__title'>Hi! I'm Jesus,</div>
          <Typical
          className='home__presentation__container-text__dinamic-text'
          loop={Infinity}
          wrapper='b'
          steps={['Fullstack Developer',1000,'Front-End',2000 ,'Back-End',1000]}
          />
        </div>
        <div className='home__presentation__parag'>
        {/* I am a FullStack developer, responsible and committed to each project I start. I have a proactive and tenacious attitude in the face 
        of challenges and I also have great teamwork and leadership skills, fostering understanding and empathy in interpersonal relationships.
         Enjoy my work and I would appreciate any feedback you can offer. */}        
          Soy desarrollador FullStack, responsable y comprometido con cada proyecto que empiezo. Tengo una actitud proactiva y tenaz ante los desafíos y también tengo gran capacidad de trabajo en equipo y liderazgo, fomentando la comprensión y la empatía en las relaciones interpersonales. Disfruto de mi trabajo y agradecería cualquier comentario que pueda ofrecer.
        </div>
    </div>
  )
}

export default Presentation