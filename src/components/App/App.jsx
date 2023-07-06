import css from './App.module.css';
import Form from '../Form/Form';

import { useEffect } from 'react';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import  Loader  from "../Loader/Loader";

import { fetchContacts } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';



const App = () => {
  const contacts = useSelector(selectContacts)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
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
      {isLoading && !error && <Loader/>}
    </div>
  );
};

export default App;
