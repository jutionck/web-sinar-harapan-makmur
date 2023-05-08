import React, {Component} from 'react';

class Contact extends Component {
  state = {
    btnText: 'Hubung Sekarang',
}

  btnSend = () => {
    this.setState({
      btnText: 'Terima Kasih!'
    });
    setTimeout(() => {
      this.setState({
        btnText :'Hubungi Sekarang'
      })
    }, 2000)
  }
  render() {
    return (
      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-start">
              <h3>Tidak menemukan mobil yang Anda cari ?</h3>
              <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.</p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <button className="cta-btn align-middle" onClick={this.btnSend}>{this.state.btnText}</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;