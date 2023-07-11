import { useDispatch } from 'react-redux';
import css from '../register/register.module.css';
import { useState } from 'react';
import { login } from '../../redux/auth/auth-operations';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div className={css.form__container}>
      <form autoComplete="off" className={css.form} onSubmit={handleSubmit}>
        <label className={css.form__label}>
          Пошта
          <input
            className={css.form__input}
            type="email"
            name="email"
            value={email}
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
        <button type="submit" className={css.register__btn}>
          Увійти
        </button>
      </form>
    </div>
  );
};

export default Login;
