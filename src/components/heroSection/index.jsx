import React from 'react'
import './heroSectionStyles.css'
import Button from 'shared/button'
import herosectionbg from 'assets/herosectionbg.png'

const HeroSection = () => {
  return (
    <div 
    style=
    {{backgroundImage: `url(${herosectionbg})` }} 
      className='hero_section_container'>
      <div className='hero_section_content'>
          <p>Finding the perfect home has never been this easy!</p>
          <span>Eliminate stressful house searches. We link you with the Lagos's finest and most affordable residences - <strong>Zero agent fees, middle men payments & hassles.</strong></span>        
      <div className="btn_container">
        <Button 
          style={{
          width: "42%",
        }} btn
         btnName={"Download our app"} />
        <Button
          style={{
          width: "42%",
        }} 
        outline
        btnName={"Learn more"}/>
      </div>
      </div>
    </div>
  )
}
export default HeroSection