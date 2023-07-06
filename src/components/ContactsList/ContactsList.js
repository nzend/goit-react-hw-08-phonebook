import React from 'react';
import css from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectContacts,
  selectFilter,
 
} from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  let contacts = useSelector(selectContacts);
  let filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <span className={css.contactName}>{contact.name}:</span>
          <span className={css.contactNumber}> {contact.phone}</span>

          <button
            className={css.deleteBtn}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
