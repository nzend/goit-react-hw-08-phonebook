import css from "./UserMenu.module.css";

const UserMenu = () => {
  return (
    <div className={css.user__menu}>
      <p className={css.user__email}>mango@mail.com</p>
      <button className={css.logout__btn}>Logout</button>
    </div>
  );
};

export default UserMenu;
