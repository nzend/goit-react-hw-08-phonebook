import css from './AuthMenu.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import authSelectors from '../../../redux/auth/auth-selectors';
import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
  let activeClassName = {
    color: '#f87719',
  };
  // const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUserName);
  return (
    <ul className={css.user__bar}>
      <li className={css.navigation__item}>
        <NavLink
          className={css.navigation__link}
          to="/register"
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Register
        </NavLink>
      </li>
      <li className={css.navigation__item}>
        <NavLink
          className={css.navigation__link}
          to="/login"
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthMenu;
