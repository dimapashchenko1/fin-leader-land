import css from './About.module.css';
function About() {
  return (
    <>
      <section className={css.about} id="about">
        <picture className={css.about__img}>
          <source
            type="image/jpeg"
            srcSet={`${require('../../images/img/home/people.jpg')} 1x, ${require('../../images/img/home/people@2x.jpg')} 2x`}
          />
          <source
            type="image/webp"
            srcSet={`${require('../../images/img/home/people.webp')} 1x, ${require('../../images/img/home/people@2x.webp')} 2x`}
          />
          <img
            src={require('../../images/img/home/people.jpg')}
            alt="people"
            loading="lazy"
          />
        </picture>
        <div className={css.about__wrapper}>
          <p className={css.about__text}>What you are looking for</p>
          <h2 className={css.about__title}>We provide bespoke solutions</h2>
          <p className={css.about__desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <button className={css.about__btn} type="button">
            Read More
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
