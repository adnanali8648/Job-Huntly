import React from 'react'
import Footer from '../../components/footer/Footer'
import Content from '../../components/homePageComponents/content/Content'
import Nav from '../../components/navBar/Nav'

const LandingPage = () => {
    return (
        <div className='flex flex-col  h-screen'>
            <Nav></Nav>
            <Content />
            <Footer />
        </div>
    )
}

export default LandingPage
