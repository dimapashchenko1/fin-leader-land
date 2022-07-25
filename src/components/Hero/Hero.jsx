import css from './Hero.module.css';

function Hero() {
  return (
    <>
      <section className={css.hero} id="home">
        <div className={css.hero__wrapper}>
          <h1 className={css.hero__title}>The Sky Is The Limit</h1>
          <p className={css.hero__text}>
            We provide world class financial assistance
          </p>
          <button className={css.hero__btn}>
            <span>&#10095;</span> Read More
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
