import { useDispatch, useSelector } from 'react-redux';
import {
  ListContact,
  ListContactItem,
  ListContactInfo,
  ListRemoveBtn,
} from './ContactList.styled';
import { deleteContact } from 'redux/contactSlice';
import { contactsSelector, filterSelector } from 'redux/selectors';

const ConatctList = () => {
  const contacts = useSelector(contactsSelector);

  const filters = useSelector(filterSelector);

  const dispatch = useDispatch();

  const filtredListContact = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filters.toLocaleLowerCase())
  );
  return (
    <ListContact>
      {filtredListContact.map(contact => (
        <ListContactItem key={contact.id}>
          <ListContactInfo>
            {contact.name}: {contact.number}
          </ListContactInfo>
          <ListRemoveBtn
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            remove
          </ListRemoveBtn>
        </ListContactItem>
      ))}
    </ListContact>
  );
};

export default ConatctList;
