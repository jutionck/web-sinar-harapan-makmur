import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Tentang Kami</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <h4>Siapa kami ?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, vitae quasi officia facilis eos dolore,
                itaque voluptatem vero expedita quo animi soluta illo dolor repudiandae ipsum aliquam, quae ipsa
                exercitationem voluptatibus sit eum quaerat totam perspiciatis rem. Assumenda, incidunt at.
              </p>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h4>Layanan Kami</h4>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a href="#">
                <svg className="svg-right-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                     fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
                <span>Selengkapnya...</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;