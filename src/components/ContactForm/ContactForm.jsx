import React, { Component } from 'react';
import css from './ContactForm.module.css';


export class ContactForm extends Component { 
    state = {
  name: '',
  number: ''
    }

   handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };


handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({name, number});

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };


render() {
    const { name, number } = this.state;
    return (
        <form className={css.contactForm} onSubmit={this.handleSubmit}>
          <label className={css.contactForm__label}>Name<input
  className={css.contactForm__input}
  onChange={this.handelChange}
  type="text"
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  placeholder='Name'
  required
        /></label>
          <label className={css.contactForm__label}>Number<input
  className={css.contactForm__input}
  onChange={this.handelChange}
  type="tel"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  placeholder='Number: xxx-xxx-xxxx'
  required
/></label>
        
        <button className={css.contactForm__button} type="submit">Add contact</button>
        </form>
    );
  };
    
}

