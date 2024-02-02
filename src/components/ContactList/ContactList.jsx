import PropTypes from 'prop-types';
import s from './ContactList.module.css'






export function ContactList({ errors, contacts, onDeleteContact  }) {



  return (
      <ul className={s.contactList}>
      {errors ? (
        <h2>{errors}</h2>
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


    // <ul className={s.contactList}>
    //   {erorrs && <h2>{erorrs}</h2>}
    //   {contacts.map(({id, name, phone})=>(
    //       <li key={id} className={s.contactItem}>
    //         <span className={s.contactName} >{name}:</span>
    //         <span >{phone}</span>
    //         <button className={s.contactButton}
    //           type="button"
    //           id={id}
    //           onClick={() => onDeleteContact(id)}
    //         >
    //           Delete
    //         </button>
    //       </li>
    //   ))}
    // </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          phone: PropTypes.string.isRequired,
      }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
  errors: PropTypes.string
};