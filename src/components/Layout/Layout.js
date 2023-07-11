import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import css from './Layout.module.css';
import UserMenu from '../UserMenu/UserBar/UserMenu';

let activeClassName = {
  color: '#f87719',
};

const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <div></div>
      </header>
    </div>
  );
};
export default Layout;
