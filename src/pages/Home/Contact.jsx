import React, {Component} from 'react';
import Modal from "../../components/modal";
import ContatForm from "./ContatForm";

class Contact extends Component {
  state = {
    btnText: 'Hubungi Sekarang',
    success: false,
    message: null
  }

  handleFormSubmit = formData => {
    this.setState({
      message: formData,
      success: !this.state.success
    })
    setTimeout(() => {
      this.setState({
        success: false
      })
    }, 2000)
  }

  render() {
    return (
      <>
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
                <button className="cta-btn align-middle" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{this.state.btnText}</button>
              </div>
              <Modal title="Form Pengaduan">
                {this.state.success === true ? `Terima kasih ${this.state.message.fullName} atas pengaduannya!` : <ContatForm onFormSubmit={this.handleFormSubmit}/> }
              </Modal>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;