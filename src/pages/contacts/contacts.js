import css from './contacts.module.css';

import { useEffect } from 'react';

import { Filter } from '../../components/Filter/Filter';
import Loader from '../../components/Loader/Loader';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import Form from '../../components/Form/Form';

import { fetchContacts } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.phonebookTitle}>
        Phone<span className={css.titlePart}>book</span>
      </h1>
      <Form></Form>

      {contacts.length > 0 ? (
        <>
          <h2 className={css.contactsTitle}>Contacts</h2>
          <Filter />
          <ContactsList></ContactsList>
        </>
      ) : (
        <p className={css.empty__notification}>The contact list is empty</p>
      )}
      {isLoading && !error && <Loader />}
    </div>
  );
};

export default Contacts;
