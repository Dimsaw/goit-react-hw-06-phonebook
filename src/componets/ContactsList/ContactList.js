import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';
import {
  getContactsItem,
  getContactsFilter,
} from '../../redux/contact_selector';
import { deleteContact } from '../../redux/slice/contact_slice';

const ContactsList = () => {
  const contacts = useSelector(getContactsItem);
  const filter = useSelector(getContactsFilter);

  const dispatch = useDispatch();

  const findContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter) ??
        contact.number.toLowerCase().includes(filter)
    );
  };
  const resultOfFindingContacts = findContacts();

  const onDeleteContacts = id => dispatch(deleteContact(id));

  return (
    <ul className={s.list}>
      {resultOfFindingContacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <ContactItem
            name={name}
            number={number}
            onDeleteContacts={() => onDeleteContacts(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
