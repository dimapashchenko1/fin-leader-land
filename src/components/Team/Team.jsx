import css from './Team.module.css';
import svg from '../../images/svg/sprite.svg';

function Team() {
  return (
    <>
      <section className={css.team} id="team">
        <div className={css.team__info}>
          <p className={css.team__text}>Who we are</p>
          <h2 className={css.team__title}>Our Professional Team</h2>
          <p className={css.team__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
        </div>
        <div>
          <ul className={css.team__list}>
            <li className={css.team__item}>
              <div className={css.team__box}>
                <picture className={css.team__img}>
                  <source
                    type="image/jpeg"
                    srcSet={`${require('../../images/img/team/person1.jpg')} 1x, ${require('../../images/img/team/person1@2x.jpg')} 2x`}
                  />
                  <source
                    type="image/webp"
                    srcSet={`${require('../../images/img/team/person1.webp')} 1x, ${require('../../images/img/team/person1@2x.webp')} 2x`}
                  />
                  <img
                    src={require('../../images/img/team/person1.jpg')}
                    alt="teammate"
                    loading="lazy"
                  />
                </picture>
                <div className={css.team__overlay}>
                  <ul className={css.overlay__list}>
                    <li className={css.overlay__item}>
                      <a
                        className={css.overlay__link}
                        href="https://www.facebook.com"
                      >
                        <svg className={css.overlay__svg}>
                          <use href={svg + '#fb'}></use>
                        </svg>
                      </a>
                    </li>
                    <li className={css.overlay__item}>
                      <a
                        className={css.overlay__link}
                        href="https://twitter.com"
                      >
                        <svg className={css.overlay__svg}>
                          <use href={svg + '#twitter'}></use>
                        </svg>
                      </a>
                    </li>
                    <li className={css.overlay__item}>
                      <a
                        className={css.overlay__link}
                        href="https://www.youtube.com"
                      >
                        <svg className={css.overlay__svg}>
                          <use href={svg + '#youtube'}></use>
                        </svg>
                      </a>
                    </li>
                    <li className={css.overlay__item}>
                      <a
                        className={css.overlay__link}
                        href="https://www.linkedin.com"
                      >
                        <svg className={css.overlay__svg}>
                          <use href={svg + '#linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className={css.team__name}>Jane Doe</h3>
              <p className={css.team__position}>Vice President</p>
            </li>
            <li className={css.team__item}>
              <div className={css.team__box}>
                <picture className={css.team__img}>
                  <source
                    type="image/jpeg"
                    srcSet={`${require('../../images/img/team/person2.jpg')} 1x, ${require('../../images/img/team/person2@2x.jpg')} 2x`}
                  />
                  <source
                    type="image/webp"
                    srcSet={`${require('../../images/img/team/person2.webp')} 1x, ${require('../../images/img/team/person2@2x.webp')} 2x`}
                  />
                  <img
                    src={require('../../images/img/team/person2.jpg')}
                    alt="teammate"
                    loading="lazy"
                  />
                </picture>
                <div className={css.team__overlay}>
                  <ul className={css.overlay__list}>
                    <li className={css.overlay__item}>
                      <a
                        className={css.overlay__link}
                        href="https://www.facebook.com"
                      >
                        <svg className={css.overlay__svg}>
                          <use href={svg + '#fb'}></use>
                        </svg>
                      </a>
                    </li>
                    <li className={css.overlay__item}>
                      <a
                        className={css.overlay__link}
                        href="https://twitter.com"
                      >
                        <svg className={css.overlay__svg}>
                          <use href={svg + '#twitter'}></use>
                        </svg>
                      </a>
                    </li>
                    <li className={css.overlay__item}>
                      <a
                        className={css.overlay__link}
                        href="https://www.youtube.com"
                      >
                        <svg className={css.overlay__svg}>
                          <use href={svg + '#youtube'}></use>
                        </svg>
                      </a>
                    </li>
                    <li className={css.overlay__item}>
                      <a
                        className={css.overlay__link}
                        href="https://www.linkedin.com"
                      >
                        <svg className={css.overlay__svg}>
                          <use href={svg + '#linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className={css.team__name}>Steve Smith</h3>
              <p className={css.team__position}>Marketing Head</p>
            </li>
            <li className={css.team__item}>
              <div className={css.team__box}>
                <picture className={css.team__img}>
                  <source
                    type="image/jpeg"
                    srcSet={`${require('../../images/img/team/person3.jpg')} 1x, ${require('../../images/img/team/person3@2x.jpg')} 2x`}
                  />
                  <source
                    type="image/webp"
                    srcSet={`${require('../../images/img/team/person3.webp')} 1x, ${require('../../images/img/team/person3@2x.webp')} 2x`}
                  />
                  <img
                    src={require('../../images/img/team/person3.jpg')}
                    alt="teammate"
                    loading="lazy"
                  />
                </picture>
                <div className={css.team__overlay}>
                  <ul className={css.overlay__list}>
                    <li className={css.overlay__item}>
                      <a
                        className={css.overlay__link}
                        href="https://www.facebook.com"
                      >
                        <svg className={css.overlay__svg}>
                          <use href={svg + '#fb'}></use>
                        </svg>
                      </a>
                    </li>
                    <li className={css.overlay__item}>
                      <a
                        className={css.overlay__link}
                        href="https://twitter.com"
                      >
                        <svg className={css.overlay__svg}>
                          <use href={svg + '#twitter'}></use>
                        </svg>
                      </a>
                    </li>
                    <li className={css.overlay__item}>
                      <a
                        className={css.overlay__link}
                        href="https://www.youtube.com"
                      >
                        <svg className={css.overlay__svg}>
                          <use href={svg + '#youtube'}></use>
                        </svg>
                      </a>
                    </li>
                    <li className={css.overlay__item}>
                      <a
                        className={css.overlay__link}
                        href="https://www.linkedin.com"
                      >
                        <svg className={css.overlay__svg}>
                          <use href={svg + '#linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className={css.team__name}>John Doe</h3>
              <p className={css.team__position}>President</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Team;
