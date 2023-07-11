import css from './AppBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import UserMenu from '../UserBar/UserMenu';
import AuthMenu from '../AuthMenu/AuthMenu';
import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation></Navigation>
        {isLoggedIn ? <UserMenu></UserMenu> : <AuthMenu></AuthMenu>}
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default AppBar;
