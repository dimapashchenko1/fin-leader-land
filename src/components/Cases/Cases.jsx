import css from './Cases.module.css';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Cases() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <>
      <section className={css.cases} id="cases">
        <div className={css.cases__info}>
          <p className={css.cases__text}>This is what we do</p>
          <h2 className={css.cases__title}>Business Cases</h2>
          <p className={css.cases__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
        </div>
        <div className={css.cases__gallery}>
          <LightGallery
            onInit={onInit}
            elementClassNames={css.cases__grid}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a href={require('../../images/img/cases/cases1.jpg')}>
              <picture className={css.cases__img}>
                <source
                  type="image/jpeg"
                  srcSet={`${require('../../images/img/cases/cases1.jpg')} 1x, ${require('../../images/img/cases/cases1@2x.jpg')} 2x`}
                />
                <source
                  type="image/webp"
                  srcSet={`${require('../../images/img/cases/cases1.webp')} 1x, ${require('../../images/img/cases/cases1@2x.webp')} 2x`}
                />
                <img
                  src={require('../../images/img/cases/cases1.jpg')}
                  alt="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  loading="lazy"
                />
              </picture>
            </a>
            <a href={require('../../images/img/cases/cases2.jpg')}>
              <picture className={css.cases__img}>
                <source
                  type="image/jpeg"
                  srcSet={`${require('../../images/img/cases/cases2.jpg')} 1x, ${require('../../images/img/cases/cases2@2x.jpg')} 2x`}
                />
                <source
                  type="image/webp"
                  srcSet={`${require('../../images/img/cases/cases2.webp')} 1x, ${require('../../images/img/cases/cases2@2x.webp')} 2x`}
                />
                <img
                  src={require('../../images/img/cases/cases2.jpg')}
                  alt="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  loading="lazy"
                />
              </picture>
            </a>
            <a href={require('../../images/img/cases/cases3.jpg')}>
              <picture className={css.cases__img}>
                <source
                  type="image/jpeg"
                  srcSet={`${require('../../images/img/cases/cases3.jpg')} 1x, ${require('../../images/img/cases/cases3@2x.jpg')} 2x`}
                />
                <source
                  type="image/webp"
                  srcSet={`${require('../../images/img/cases/cases3.webp')} 1x, ${require('../../images/img/cases/cases3@2x.webp')} 2x`}
                />
                <img
                  src={require('../../images/img/cases/cases3.jpg')}
                  alt="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  loading="lazy"
                />
              </picture>
            </a>
            <a href={require('../../images/img/cases/cases4.jpg')}>
              <picture className={css.cases__img}>
                <source
                  type="image/jpeg"
                  srcSet={`${require('../../images/img/cases/cases4.jpg')} 1x, ${require('../../images/img/cases/cases4@2x.jpg')} 2x`}
                />
                <source
                  type="image/webp"
                  srcSet={`${require('../../images/img/cases/cases4.webp')} 1x, ${require('../../images/img/cases/cases4@2x.webp')} 2x`}
                />
                <img
                  src={require('../../images/img/cases/cases4.jpg')}
                  alt="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  loading="lazy"
                />
              </picture>
            </a>
            <a href={require('../../images/img/cases/cases5.jpg')}>
              <picture className={css.cases__img}>
                <source
                  type="image/jpeg"
                  srcSet={`${require('../../images/img/cases/cases5.jpg')} 1x, ${require('../../images/img/cases/cases5@2x.jpg')} 2x`}
                />
                <source
                  type="image/webp"
                  srcSet={`${require('../../images/img/cases/cases5.webp')} 1x, ${require('../../images/img/cases/cases5@2x.webp')} 2x`}
                />
                <img
                  src={require('../../images/img/cases/cases5.jpg')}
                  alt="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  loading="lazy"
                />
              </picture>
            </a>
            <a href={require('../../images/img/cases/cases6.jpg')}>
              <picture className={css.cases__img}>
                <source
                  type="image/jpeg"
                  srcSet={`${require('../../images/img/cases/cases6.jpg')} 1x, ${require('../../images/img/cases/cases6@2x.jpg')} 2x`}
                />
                <source
                  type="image/webp"
                  srcSet={`${require('../../images/img/cases/cases6.webp')} 1x, ${require('../../images/img/cases/cases6@2x.webp')} 2x`}
                />
                <img
                  src={require('../../images/img/cases/cases6.jpg')}
                  alt="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  loading="lazy"
                />
              </picture>
            </a>
          </LightGallery>
        </div>
      </section>
    </>
  );
}

export default Cases;
