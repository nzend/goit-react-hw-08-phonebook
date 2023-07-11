import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import  Contacts  from '../../pages/contacts/contacts';
import AppBar from 'components/UserMenu/AppBar/AppBar';

// ________________________________________

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
// ________________________________________

export default App;
