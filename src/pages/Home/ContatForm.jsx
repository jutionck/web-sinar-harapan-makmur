import React, {Component} from 'react';
import WithContactForm from "./WithContactForm";

class ContactForm extends Component {
  render() {
    const { values, handleChange, handleSubmit } = this.props
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Nama lengkap"
              onChange={handleChange}
              value={values.fullName}
            />
            <label htmlFor="fullName">Nama Lengkap</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              onChange={handleChange}
              value={values.email}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="08219xxxx"
              onChange={handleChange}
              value={values.phoneNumber}
            />
            <label htmlFor="phoneNumber">No Handphone</label>
          </div>
          <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="message"
            style={{ height: "100px" }}
            onChange={handleChange}
            value={values.message}
          ></textarea>
            <label htmlFor="message">Pesan</label>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Kirim Pesan
          </button>
        </form>
      </>
    );
  }
}

export default WithContactForm(ContactForm);