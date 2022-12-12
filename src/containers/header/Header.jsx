import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content fade-in'>
        <h1 className='gradient__text fade-in'>To Pimp A Butterfly</h1>
        <p>
I remember you was conflicted
Misusing your influence,
Sometimes I did the same
Abusing my power, full of resentment
Resentment that turned into a deep depression,
Found myself screaming in the hotel room.
I didn’t wanna self destruct
The evils of Lucy was all around me</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Enter Your Email'></input>
          <button type="button">Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>Pimped by industry</p>
        </div>
      </div> 
        <div className='gpt3__header-image fade-in'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header