import css from './ContactItem.module.css';
import PropTypes from 'prop-types';


export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li className={css.contactItem}>
      {name}: {number}
      <button className={css.contactItem__button}type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};