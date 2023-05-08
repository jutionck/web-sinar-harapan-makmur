import React from "react";
export default class Navbar extends React.Component {
  render() {
    return(
      <header id="header" className="fixed-top bg-navbar-fixed">
        <div className="container d-flex align-items-center">

          <h1 className="logo me-auto"><a href="">PT Sinar Harapan Makmur</a></h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="">Beranda</a></li>
              <li><a className="nav-link scrollto" href="#about">Tentang Kami</a></li>
              <li className="dropdown"><a href="#"><span>Mobil</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Baru</a></li>
                  <li><a href="#">Bekas</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#cta">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    )
  }
}