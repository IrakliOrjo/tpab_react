import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin color-change-2x' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="'If I blame U for the loss. I'll be giving U all the credit.'" text="That was one of the hardest songs I had to write. There are some very dark moments in there. All my insecurities and selfishness and let-downs. "/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
         “Loving U is complicated” 
        </h1>
        <p style={{color: "white"}}>TIME IS CHANGE. YOUR FRIEND OR FOE</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="U is vibrant" text="I FOLLOWED YOUR RULES FOR WAY TOO LONG" />
        <Feature title="For Sale?" text="I MADE MONEY.I LOST MONEY.I DID IT AGAIN" />
        <Feature title="Lucy gonna call U" text="NIGHT LIKE THIS I WISH BOMB HEAD WOULD FALL" />
      </div>
    </div>
  )
}

export default WhatGPT3