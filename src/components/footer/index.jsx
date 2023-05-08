import React from "react";
import {InstagramLogo, TwitterLogo, WaLogo, YoutubeLogo} from '../../assets'

export default class Footer extends React.Component {
  render() {
    const socialMedia = [
      {
        image: InstagramLogo,
        link: '',
        alt: '',
      },
      {
        image: WaLogo,
        link: '',
        alt: '',
      },
      {
        image: TwitterLogo,
        link: '',
        alt: '',
      },
      {
        image: YoutubeLogo,
        link: '',
        alt: '',
      }
    ]
    return(
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Pt S H Makmur</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa corrupti itaque similique, quae
                  laborum nam beatae dolores vitae maiores?
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Lokasi</h4>
                <p>
                  Jl. H. Dahlan No.75, RT.8 / RW.4, Ragunan, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota
                  Jakarta 12550
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Layanan Kami</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Beli Mobil</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Jual Mobil</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Service Mobile</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links ">
                <h4>Social Media</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas?</p>
                <ul className="list-unstyled d-flex justify-content-between">
                  {
                    socialMedia.map((sm) => (
                      <li className="flex-fill" key={sm.image}>
                        <img src={sm.image} alt={sm.alt} srcSet=""/>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-content-center text-light">
          <div className="d-flex align-items-center">
            <div className="mx-auto my-4">
              &copy; Copyright <strong><span>Enigmacamp</span></strong>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    )
  }
}