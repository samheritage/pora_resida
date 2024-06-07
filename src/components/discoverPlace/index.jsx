import React from 'react' 
import discoverplace from "assets/discoverplace.svg"
import './discoverPlace.css'

const DiscoverPlace = () => {
  return (
    <div className='discoverplace_container'>
        <img src={discoverplace} alt="discoverpic" className='full_image'/>
        <div className='discover_text'>
          <h1>Discover a place you'll <br/>love to live</h1>
        </div>
    </div>
  )
}

export default DiscoverPlace