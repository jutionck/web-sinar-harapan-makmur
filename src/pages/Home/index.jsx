import {Component} from "react";
import Hero from "./Hero";
import Brand from "./Brand";
import About from "./About";
import WhyUs from "./WhyUs";
import Service from "./Service";
import Contact from "./Contact";

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero/>
        <main id={"main"}>
          <Brand/>
          <About/>
          <WhyUs/>
          <Service/>
          <Contact/>
        </main>
      </>
    )
  }
}