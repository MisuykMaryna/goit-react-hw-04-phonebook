import { useState} from 'react';
import css from './ContactForm.module.css';


export function ContactForm ({ onSubmit }) { 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };


const handleSubmit = e => {
    e.preventDefault();
   onSubmit({name, number});

    reset();
  };

   const reset = () => {
     setName('');
     setNumber('');
     
  };
  
    return (
        <form className={css.contactForm} onSubmit={handleSubmit}>
          <label className={css.contactForm__label}>Name<input
  className={css.contactForm__input}
  onChange={handelChange}
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
  onChange={handelChange}
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
  }
    


