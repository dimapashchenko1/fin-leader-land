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
        <picture className={css.contact__img}>
          <source
            type="image/jpeg"
            srcSet={`${require('../../images/img/home/contact.jpg')} 1x, ${require('../../images/img/home/contact@2x.jpg')} 2x`}
          />
          <source
            type="image/webp"
            srcSet={`${require('../../images/img/home/contact.webp')} 1x, ${require('../../images/img/home/contact@2x.webp')} 2x`}
          />
          <img
            src={require('../../images/img/home/contact.jpg')}
            alt="people"
            loading="lazy"
          />
        </picture>
        <div className={css.contact__info}>
          <h2 className={css.contact__title}>Request Callback</h2>
        </div>
        <div>
          <form
            className={css.form}
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit(onSubmit)}
          >
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
