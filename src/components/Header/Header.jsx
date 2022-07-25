import logo from '../../images/img/logo.png';
import css from './Header.module.css';

function Header() {
  return (
    <>
      <header className={css.header}>
        <a className={css.logo} href="/">
          <img className={css.logo__img} src={logo} alt="logo" />
          <p className={css.logo__text}>
            <span className={css.logo__span}>Finance</span>
            Leader
          </p>
        </a>
        <nav className={css.nav}>
          <ul className={css.nav__list}>
            <li className={css.nav__item}>
              <a className={css.nav__link} href="#home">
                Home
              </a>
            </li>
            <li className={css.nav__item}>
              <a className={css.nav__link} href="#about">
                About
              </a>
            </li>
            <li className={css.nav__item}>
              <a className={css.nav__link} href="#cases">
                Cases
              </a>
            </li>
            <li className={css.nav__item}>
              <a className={css.nav__link} href="#blog">
                Blog
              </a>
            </li>
            <li className={css.nav__item}>
              <a className={css.nav__link} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
