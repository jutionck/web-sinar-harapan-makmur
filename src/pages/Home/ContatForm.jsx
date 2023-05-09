import React, {Component} from 'react';

class ContactForm extends Component {
  state = {
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState({
      fullName: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="fullName" placeholder="Nama lengkap" onChange={this.handleChange} value={this.state.fullName} />
            <label htmlFor="fullName">Nama Lengkap</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={this.handleChange} value={this.state.email} />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="phoneNumber" placeholder="08219xxxx" onChange={this.handleChange} value={this.state.phoneNumber} />
            <label htmlFor="phoneNumber">No Handphone</label>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="message" style={{ height: '100px' }} onChange={this.handleChange} value={this.state.message}></textarea>
            <label htmlFor="message">Pesan</label>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary  mt-3" type="submit">Kirim Pesan</button>
          </div>
        </form>
      </>
    );
  }
}

export default ContactForm;