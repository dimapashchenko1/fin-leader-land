import css from './About.module.css';
function About() {
  return (
    <>
      <section className={css.about} id="about">
        <div className={css.about__box}></div>
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
