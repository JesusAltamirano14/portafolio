import React from 'react'

const Projects = () => {
  return (
    <div className='home__projects' id='projects'>
      <div className="home__projects__title">Proyectos</div>
      <div className="home__projects__container">
        <div className="home__projects__container__img home__projects__container__img--videogames">
          <div className="home__projects__container__img__first">
            <div className="home__projects__container__img__first__title">Videogames JES</div>
            <div className="home__projects__container__img__first__description">Aplicacion Fullstack</div>
            <div className="home__projects__container__img__first__logos">
              <a className="home__footer__container-icons__logos" href='https://videogames-jes.vercel.app/' target="_blank" rel="noreferrer">
                <div className="home__footer__container-icons__logos__link home__footer__container-icons__logos__link--web" ></div> 
              </a>
              <a className="home__footer__container-icons__logos" href='https://github.com/JesusAltamirano14/client-videogames' target="_blank" rel="noreferrer">
                <div className="home__footer__container-icons__logos__link" ></div>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="home__projects__container__img">
          <div className="home__projects__container__img__first">
            <div className="home__projects__container__img__first__title">Title</div>
            <div className="home__projects__container__img__first__description">Description</div>
            <div className="home__projects__container__img__first__logos">
              <a className="home__footer__container-icons__logos" href='https://www.google.com.pe' target="_blank" rel="noreferrer">
                <div className="home__footer__container-icons__logos__link home__footer__container-icons__logos__link--linkedin" ></div> 
              </a>
              <a className="home__footer__container-icons__logos" href='https://www.google.com.pe' target="_blank" rel="noreferrer">
                <div className="home__footer__container-icons__logos__link" ></div>
              </a>
            </div>
          </div>
        </div> */}
        <div className="home__projects__container__img">
          <div className="home__projects__container__img__first">
            <div className="home__projects__container__img__first__title">Spotify</div>
            <div className="home__projects__container__img__first__description">Replica de una página oficial de Spotify</div>
            <div className="home__projects__container__img__first__logos">
              <a className="home__footer__container-icons__logos" href='https://spotify-replica-jesus-cx6pn5nmm-peluchow.vercel.app/' target="_blank" rel="noreferrer">
                <div className="home__footer__container-icons__logos__link home__footer__container-icons__logos__link--web" ></div> 
              </a>
              <a className="home__footer__container-icons__logos" href='https://github.com/JesusAltamirano14/spotify-replica-jesus/tree/master/src' target="_blank" rel="noreferrer">
                <div className="home__footer__container-icons__logos__link" ></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects