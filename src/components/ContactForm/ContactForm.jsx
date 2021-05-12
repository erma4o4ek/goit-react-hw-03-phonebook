import React, { Component } from 'react';
import PropTypes from "prop-types";
import style from "../ContactForm/ContactForm.module.css";
import shortid from 'shortid';

class ContactForm extends Component {
state = {
  name: '',
  number: ''
}

nameInputId = shortid.generate();
numberInputId = shortid.generate();

handleChange = e => {
  const {name, value} = e.currentTarget;
  this.setState({
    [name]: value
  });
};

handleSubmit = (e) => {
  e.preventDefault();
  this.props.onAddContact({ ...this.state });
  this.setState({ name: "", number: "" });
};

render() {
  return (
  <form className={style.form} onSubmit={this.handleSubmit}>
    <label className={style.label} htmlFor={this.nameInputId}>
      Name
      <input
        className={style.input}
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        id={this.nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
    <label className={style.label} htmlFor={this.numberInputId}>
      Number
      <input
        className={style.input}
        type="tel"
        name="number"
        value={this.state.number}
        onChange={this.handleChange}
        id={this.numberInputId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
    </label>
    
    <button className={style.button} type='submit'>
      Add contact
    </button>
  </form>)
}
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;


