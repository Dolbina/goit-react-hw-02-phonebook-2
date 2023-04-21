import { PropTypes } from 'prop-types';
import { ListWrap, ButtonWrap } from './ContactList.styled';


export const ContactList = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <ListWrap>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonWrap type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </ButtonWrap>
        </li>
      ))}
    </ListWrap>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete:PropTypes.func.isRequired,
};