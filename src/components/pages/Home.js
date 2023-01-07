import React from 'react'
import Banner from './banner/Banner'
import Card1 from './card/Card1'
import Card2 from './card/Card2'
import Card3 from './card/Card3'
import Footer from '../navigation/footer/Footer'
import CenterMode from '../pages/user/Index'
import Header from '../navigation/header/Header'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Card1/>
        <Card3/>
        <CenterMode/>
        <Footer/>
    </div>
  )
}

export default Home