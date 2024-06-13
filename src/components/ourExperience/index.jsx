import React from 'react'
import './ourExperienceStyle.css'
import frame1 from "assets/frame1.png"
import frame2 from "assets/frame2.jpg"
import frame3 from "assets/frame3.png"

const OurExperience = () => {
  return (
    <div className='our_exp_container'>
        <div className='boxes_container'>
            <div className='box1'><img src={frame1} alt="exp_info_image1" className="frame1_image" /></div>
            <div className='box2'><img src={frame2} alt="exp_info_image2" className="frame2_image" /></div>
            <div className='box3'><img src={frame3} alt="exp_info_image3" className="frame3_image" /></div>
        </div>
        <div className='text flex'>
            {`Our Experience guarantees unmatched proficiency and excellence.`}
        </div>
    </div>
  )
}

export default OurExperience