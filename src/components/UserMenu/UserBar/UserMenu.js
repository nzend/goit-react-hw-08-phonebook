import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';
import { logOut } from '../../../redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={css.user__menu}>
      <p className={css.user__email}>{name}</p>
      <button className={css.logout__btn} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
