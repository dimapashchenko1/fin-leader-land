import css from './Footer.module.css';
import svg from '../../images/svg/sprite.svg';

function Footer() {
  return (
    <>
      <footer className={css.footer}>
        <ul className={css.social__list}>
          <li className={css.social__item}>
            <a className={css.social__link} href="https://www.facebook.com">
              <svg className={css.social__svg}>
                <use href={svg + '#fb'}></use>
              </svg>
            </a>
          </li>
          <li className={css.social__item}>
            <a className={css.social__link} href="https://twitter.com">
              <svg className={css.social__svg}>
                <use href={svg + '#twitter'}></use>
              </svg>
            </a>
          </li>
          <li className={css.social__item}>
            <a className={css.social__link} href="https://www.youtube.com">
              <svg className={css.social__svg}>
                <use href={svg + '#youtube'}></use>
              </svg>
            </a>
          </li>
          <li className={css.social__item}>
            <a className={css.social__link} href="https://www.linkedin.com">
              <svg className={css.social__svg}>
                <use href={svg + '#linkedin'}></use>
              </svg>
            </a>
          </li>
        </ul>
        <p className={css.footer__copy}>Copyright © 2021 - FinanceLedger</p>
      </footer>
    </>
  );
}

export default Footer;
