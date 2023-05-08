import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Home from "../pages/Home";
import "../assets/Global.css"


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