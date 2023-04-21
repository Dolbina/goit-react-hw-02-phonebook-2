import { PropTypes } from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}
          <button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete:PropTypes.func.isRequired,
};