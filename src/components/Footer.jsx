import React from 'react'

const Footer = () => {
  return (
    <div className='home__footer'>
      <div className="home__footer__container-first">
        <div className="home__footer__container-first__cont-thanks">
          <div className="home__footer__container-first__cont-thanks__thanks">Thanks for watching,</div>
          <div className="home__footer__container-first__cont-thanks__thanks">please send me your feedback</div>
        </div>
      </div>
      <div className="home__footer__container-all">
        <div className="home__footer__container-all__logo">Jesus Altamirano</div>
        <div className="home__footer__container-icons">
          <a className="home__footer__container-icons__logos" href='https://www.google.com.pe' target="_blank" rel="noreferrer">
            <div className="home__footer__container-icons__logos__link" ></div>
          </a>
          <a className="home__footer__container-icons__logos" href='https://www.google.com.pe' target="_blank" rel="noreferrer">
            <div className="home__footer__container-icons__logos__link home__footer__container-icons__logos__link--linkedin" ></div> 
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer