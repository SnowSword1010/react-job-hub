import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero title="Dummy Title" subtitle="Dummy Subtitle"/>
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
    </>
  )
}

export default HomePage