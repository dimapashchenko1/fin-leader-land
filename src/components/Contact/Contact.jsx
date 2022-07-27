import css from './Contact.module.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import svg from '../../images/svg/sprite.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (form) => {
    console.log(form);
  };

  return (
    <>
      <section className={css.contact} id="contact">
        <div className={css.contact__box}></div>
        <div className={css.contact__info}>
          <h2 className={css.contact__title}>Request Callback</h2>
          <form
            className={css.form}
            name="contact"
            method="POST"
            onSubmit={handleSubmit(onSubmit) && "submit"}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className={css.form__item}>
              <label className={css.form__label} htmlFor="name">
                Enter your name
              </label>
              <input
                className={css.form__input}
                id="name"
                name='name'
                type="text"
                placeholder=' '
                {...register('name')}/>
                
                
            </div>

            <div className={css.form__item}>
              <label className={css.form__label} htmlFor="email">
                Enter email*
              </label>
              <input
                className={css.form__input}
                required
                id="email"
                name='email'
                type="email"
                placeholder=' '
                {...register('email')}
              />
              {errors.email?.message && <span className={css.form__error}>
                <svg className={css.form__svg}>
                  <use href={svg + '#warning'}></use>
                </svg>
                This is a required field
              </span>}
              
            </div>
            <button className={css.form__btn} type="submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
