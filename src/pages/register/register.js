import { useState } from 'react';
import css from "./register.module.css";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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

    setName('');
    setEmail('');
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
        <button type="submit" className={css.register__btn} onSubmit={handleSubmit}>
          Зареєструватися
        </button>
      </form>
    </div>
  );
};

export default Register;
