import React from 'react';
import Herosection from '../components/Herosection';
import Cards from '../components/Cards';
import ExchangeRatesComponent from '../components/ExchangeRatesComponent';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
        <Herosection/>
        <Cards/>
        <ExchangeRatesComponent/>
        <Footer/>

        </>
  )
}

export default Home