import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import Contacts from '../../pages/contacts/contacts';
import AppBar from 'components/UserMenu/AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import { useEffect } from 'react';
import { RestrictedRoute } from 'components/UserMenu/RestrictedRoute';
import { PrivateRoute } from 'components/UserMenu/PrivateRoute';
import Loader from 'components/Loader/Loader';

// ________________________________________

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
};
// ________________________________________

export default App;
