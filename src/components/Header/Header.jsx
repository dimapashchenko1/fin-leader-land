import logo from '../../images/img/logo.png';
import css from './Header.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { createRef, useEffect } from 'react';

function Header() {
  const refComponent = createRef();
  useEffect(() => {}, [refComponent]);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById('header').style.backgroundColor =
        'var(--bg-color)';
    } else {
      document.getElementById('header').style.backgroundColor = 'initial';
    }
  }

  return (
    <>
      <header ref={refComponent} className={css.header} id="header">
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
              <AnchorLink
                offset={() =>
                  refComponent.current.getBoundingClientRect().height
                }
                className={css.nav__link}
                href="#home"
              >
                Home
              </AnchorLink>
            </li>
            <li className={css.nav__item}>
              <AnchorLink
                offset={() =>
                  refComponent.current.getBoundingClientRect().height
                }
                className={css.nav__link}
                href="#about"
              >
                About
              </AnchorLink>
            </li>
            <li className={css.nav__item}>
              <AnchorLink
                offset={() =>
                  refComponent.current.getBoundingClientRect().height
                }
                className={css.nav__link}
                href="#cases"
              >
                Cases
              </AnchorLink>
            </li>
            <li className={css.nav__item}>
              <AnchorLink
                offset={() =>
                  refComponent.current.getBoundingClientRect().height
                }
                className={css.nav__link}
                href="#blog"
              >
                Blog
              </AnchorLink>
            </li>
            <li className={css.nav__item}>
              <AnchorLink
                offset={() =>
                  refComponent.current.getBoundingClientRect().height
                }
                className={css.nav__link}
                href="#contact"
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
