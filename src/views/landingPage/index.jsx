import HeroSection from 'components/heroSection'
import React from 'react'
//import './LandingPageStyles.css'
import Header from 'shared/header'
import DiscoverPlace from 'components/discoverPlace'
import SubHeroSection from 'components/heroSection/subHeroSection'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
      <DiscoverPlace />
      </div>
  )
}
export default LandingPage