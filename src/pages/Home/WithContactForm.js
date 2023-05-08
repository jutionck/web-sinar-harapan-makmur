import {Component} from "react";

const WithContactForm = (WrappedComponent) => {
  return class extends Component {
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
        <WrappedComponent
          {...this.props}
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }
}

export default WithContactForm;