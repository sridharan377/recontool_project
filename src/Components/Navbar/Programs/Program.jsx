import React from 'react'
import './Program.css'





const Programs = () => {
  return (
    
  


    <div className='Programs'>
        
        <div className="TestSection">
        <h2>Website Recon</h2>
        <p>Find out which web technologies your target website is using.</p>
        <div className="input-group">
          <label htmlFor="protocol">Target</label>
          
          <input type="text" placeholder="www.example.com" />
        </div>
        <button className="submit-btn">Start scan</button>
      </div>
    </div>
  )
}

export default Programs
