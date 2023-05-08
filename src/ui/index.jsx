import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Home from "../pages/Home";


export default class Layout extends React.Component{
  render() {
    return(
      <>
        <Navbar/>
        <Home/>
        <Footer/>
      </>

    )
  }
}