import React from 'react'
import NavBar from '../components/NavBar'
import Presentation from '../components/Presentation';
import AboutUS from '../components/AboutUs';
import Offers from '../components/Offers';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
    <NavBar></NavBar>
    <Presentation></Presentation>
    <Offers></Offers>
    <AboutUS></AboutUS>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}
