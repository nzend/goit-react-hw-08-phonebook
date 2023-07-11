import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import css from './Layout.module.css';
import UserMenu from '../UserMenu/UserMenu';

let activeClassName = {
  color: '#f87719',
};

const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav>
          <ul className={css.navigation}>
            <li className={css.navigation__item}>
              <NavLink
                className={css.navigation__link}
                to="/"
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li className={css.navigation__item}>
              <NavLink
                className={css.navigation__link}
                to="/contacts"
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <ul className={css.user__bar}>
            <li className={css.navigation__item}>
              <NavLink
                className={css.navigation__link}
                to="/register"
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Register
              </NavLink>
            </li>
            <li className={css.navigation__item}>
              <NavLink
                className={css.navigation__link}
                to="/login"
                style={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <UserMenu></UserMenu>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
