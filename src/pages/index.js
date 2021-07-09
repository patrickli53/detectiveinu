import React from 'react';

import Contact from '../components/contact';
import HeroSection from '../components/hero';
import Navigation from '../components/Navbar';
import Roadmap from '../components/roadmap';
import Tokenomics from '../components/tokenomics';
import Whyinvest from '../components/whyinvest';


const Home = () => {
    return (
        <>
          <Navigation/>  
          <HeroSection/>
          <Whyinvest id="whyinvest"/>
          <Tokenomics id="tokenomics"/>
          <Roadmap id="roadmap"/>
          <Contact id="contact"/>
        </>
    )
}

export default Home
