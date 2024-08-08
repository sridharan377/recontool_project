import React from 'react'
import './Main.css'
import dark_arrow from '../../../assets/dark-arrow.png'
const Main = () => {
  return (
    <div className='Main container'>
      <div className="Main-text">
        <h1>  Cyber Security </h1>
          <p>
            Recon tool
          </p>
          <button className='btn'>Explore more<img src={dark_arrow} alt="" /> </button>
        
      </div>
      
    </div>
  )
}

export default Main
