import React from 'react'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import Navbar from './components/Navbar'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
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

export default App
    