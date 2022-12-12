import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
       <img src={possibilityImage} alt="possibility" />
      </div>  
      <div className='gpt3__possibility-content'>
        <h1 className='gradient__text'>Alright</h1>
        <p>"Alright" is a song by American rapper Kendrick Lamar featured on the artist's third studio album, To Pimp a Butterfly (2015).[1] The song expresses ideas of hope amid personal struggles and features uncredited vocals in its chorus from co-producer Pharrell Williams. "Alright" was released to radio stations as the album's fourth single on June 30, 2015.[2] Many music publications considered it among the best songs and videos of the year. "Alright" received four nominations at the 58th Grammy Awards: Song of the Year, Best Music Video, Best Rap Performance and Best Rap Song, winning the latter two. It was also nominated for a MTV Video Music Award for Video of the Year.</p>
        
      </div>
    </div>
  )
}

export default Possibility