import {Component} from "react";
import Car from "../../assets/car.svg"

export default class Hero extends Component {
  render() {
    return(
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                 data-aos="fade-up" data-aos-delay="200">
              <h1>Jual Beli Mobil Baru atau Bekas dengan angsuran mulai dari Rp 1,5 Jt</h1>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#" className="btn-get-started scrollto">Beli Sekarang</a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={Car} className="img-fluid animated" alt=""/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}