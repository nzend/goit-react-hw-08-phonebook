import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    let activeClassName = {
      color: '#f87719',
    };
  return (
    <nav>
      <ul className={css.navigation}>
        <li className={css.navigation__item}>
          <NavLink
            className={css.navigation__link}
            to="/"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className={css.navigation__item}>
          <NavLink
            className={css.navigation__link}
            to="/contacts"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
