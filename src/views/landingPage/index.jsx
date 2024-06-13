import HeroSection from 'components/heroSection'
import React from 'react'
import './landingPageStyles.css'
import Header from 'shared/header'
import DiscoverPlace from 'components/discoverPlace'
import SubHeroSection from 'components/heroSection/subHeroSection'
import InfoCard from 'components/infoCard'
import residainfo from '../../assets/residainfo.png'
import guidemap from '../../assets/guidemap.png'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
      <InfoCard 
      title="Resida is Not just an App"
      subtitle="We are an ecosystem with you at the center"
      body="Resida aims to bridge the gap between potential tenants and
      available properties. This app is not just a tool; it's a solution
      for individuals and families who are navigating the challenging
      terrain of apartment hunting in a new and familiar city."
      image={residainfo}
      imageStyle={"info_image"}
      infoStyle={"info"}
      />
      {/* Our Experience */}
      {/* Find Your Space Now */}
      <InfoCard 
      title="Comprehensive"
      subtitle="Neighborhood Guides"
      body="The Neighborhood Guides in Resida are like your friendly local 
      experts, giving you the inside scoop on the vibe, hotspots, and 
      quirks of each area so you can find your perfect match
      effortlessly!"
      image={guidemap}
      imageStyle={"info_comprehensive_image"}
      imageHeight={"info_comprehensive_image_height"}
      button={true}
      infoStyle={"info_guide"}
      />
      <DiscoverPlace />
      </div>
  )
}
export default LandingPage