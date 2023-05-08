import React, {Component} from 'react';
import {HondaLogo, LexusLogo, MazdaLogo, NissanLogo, SuzukiLogo, ToyotaLogo} from '../../assets/clients'

class Brand extends Component {
  render() {
    const brands = [
      {
        imageSrc: HondaLogo,
        alt: 'Honda logo'
      },
      {
        imageSrc: ToyotaLogo,
        alt: 'Toyota logo'
      },
      {
        imageSrc: SuzukiLogo,
        alt: 'Suzuki logo'
      },
      {
        imageSrc: MazdaLogo,
        alt: 'Mazda logo'
      },
      {
        imageSrc: LexusLogo,
        alt: 'Lexus logo'
      },
      {
        imageSrc: NissanLogo,
        alt: 'Nissan logo'
      },
    ];
    return (
      <section className="clients section-bg">
        <div className="container">
          <div className="row">
            {
              brands.map((brand) => (
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center" key={brand.imageSrc}>
                  <img src={brand.imageSrc} className="img-fluid" alt={brand.alt} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
  }
}

export default Brand;