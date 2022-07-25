import css from './Contact.module.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import svg from '../../images/svg/sprite.svg';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <>
      <section className={css.contact} id="contact">
        <div className={css.contact__box}></div>
        <div className={css.contact__info}>
          <h2 className={css.contact__title}>Request Callback</h2>
          <form
            className={css.form}
            name="contact"
            data-netlify="true"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className={css.form__item}>
              <label className={css.form__label} htmlFor="name">
                Enter your name
              </label>
              <input
                className={css.form__input}
                id="name"
                type="text"
                placeholder=""
                {...register('Name', { required: true, min: 1, maxLength: 80 })}
              />
            </div>

            <div className={css.form__item}>
              <label className={css.form__label} htmlFor="email">
                Enter email*
              </label>
              <input
                className={css.form__input}
                id="email"
                type="email"
                placeholder=""
                {...register('Email', {
                  required: true,
                  min: 3,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <span className={css.form__error}>
                <svg className={css.form__svg}>
                  <use href={svg + '#warning'}></use>
                </svg>
                This is a required field
              </span>
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
