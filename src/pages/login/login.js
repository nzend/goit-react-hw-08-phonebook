import css from '../register/register.module.css';
import { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setName('');

    setPassword('');
  };
  return (
    <div className={css.form__container}>
      <form autoComplete="off" className={css.form}>
        <label className={css.form__label}>
          Ім'я
          <input
            className={css.form__input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          ></input>
        </label>

        <label className={css.form__label}>
          Пароль
          <input
            className={css.form__input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <button
          type="submit"
          className={css.register__btn}
          onSubmit={handleSubmit}
        >
          Увійти
        </button>
      </form>
    </div>
  );
};

export default Login;
