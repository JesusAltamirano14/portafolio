import React from 'react'
import { useState } from 'react';
import imgContact from '../svg/contact-orange.svg';

const Contact = () => {

  const [name, setName] = useState();
  const [email,setEmail] = useState();
  const [body,setBody] = useState();

const handleChangeName = (e) => {
  setName(e.target.value);
}

const handleChangeEmail = (e) => {
  setEmail(e.target.value);
}

const handleChangeBody = (e) => {
  setBody(e.target.value);
}

  return (
    <div className='home__contact' id='contact'>
      <img className='home__contact__img' src={imgContact} alt='contact'/>
      <div className='home__contact__container-form'>
        <div className='home__contact__container-form__title'>Get in touch</div>
        <div className='home__contact__container-inputs'>
            <input className='home__contact__container-inputs__input home__contact__container-inputs__input--1' type='text' placeholder='Name' onChange={handleChangeName} />
            <input className='home__contact__container-inputs__input home__contact__container-inputs__input--2' type='text' placeholder='Email'onChange={handleChangeEmail} />
            <textarea className='home__contact__container-inputs__input home__contact__container-inputs__input--3' type='text' placeholder='Body' onChange={handleChangeBody} />
        </div>
        <a href={`mailto:jesusaltamirano14@hotmail.com?subject=${name}-${email}&body=${body}`}  className={'home__contact__container-form__button'}>Send</a>
      </div>
      
    </div>
  )
}

export default Contact