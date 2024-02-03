import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export function ContactList({ errors, contacts, onDeleteContact }) {
  console.log('contacts:', contacts);

  return (
    <ul className={s.contactList}>
      {errors ? (
        <h2>{errors}</h2>
      ) : Array.isArray(contacts) && contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        contacts.map(({ id, name, phone }) => (
          <li key={id} className={s.contactItem}>
            <span className={s.contactName}>{name}:</span>
            <span>{phone}</span>
            <button
              className={s.contactButton}
              type="button"
              id={id}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>

  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
  errors: PropTypes.string,
};
