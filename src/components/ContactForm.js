import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      showConfirmation: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showConfirmation: true });
    setTimeout(() => this.setState({ showConfirmation: false }), 3000);
    console.log('Form submitted:', this.state.formData);
  };

  render() {
    const { formData, showConfirmation } = this.state;
    return (
      <div>
        {showConfirmation && (
          <div className="popup">
            <h2>Форма успешно отправлена</h2>
            <p><strong>Имя:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Сообщение:</strong> {formData.message}</p>
          </div>
        )}
        <form onSubmit={this.handleSubmit} className="contact-form">
          <div>
            <label>Имя:</label>
            <input type="text" name="name" value={formData.name} onChange={this.handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={this.handleChange} />
          </div>
          <div>
            <label>Сообщение:</label>
            <textarea name="message" value={formData.message} onChange={this.handleChange} />
          </div>
          <button type="submit">Отправить</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
