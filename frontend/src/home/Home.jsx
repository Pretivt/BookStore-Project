
import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

import Freebook from "../components/Freebook";
import Cards from "../components/Cards";
import DataFetcher from "../components/DataFetcher";

import Footer from "../components/Footer";


function Home() {
  return (
    <>
     <Navbar />
      <Banner />
      <Freebook />
      <Cards/> 
      <Footer />
    </>
  )
}

export default Home
