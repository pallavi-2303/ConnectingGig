import CategoryCarousal from '@/components/ui/CategoryCarousel'
import HeroSection from '@/components/ui/HeroSection'
import LatestGigs from '@/components/ui/LatestGigs'
import Footer from '@/components/ui/shared/Footer'
import Navbar from '@/components/ui/shared/navbar'
import React from 'react'

const HomePage = () => {
  return (
    <div><Navbar/>
    <HeroSection/>
    <CategoryCarousal/>
    <LatestGigs/>
    <Footer/>
    </div>
  )
}

export default HomePage