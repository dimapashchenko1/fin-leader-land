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
        <div>
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <div className={css.cases__gallery}>
              <a
                className={css.cases__img}
                href={require('../../images/img/home/blog.jpg')}
              >
                <img
                  alt="Lorem ipsum dolor sit amet consectetur adipisicing!"
                  src={require('../../images/img/home/blog.jpg')}
                />
              </a>
              <a
                className={css.cases__img}
                href={require('../../images/img/home/people.jpg')}
              >
                <img
                  alt="Lorem ipsum dolor sit amet consectetur adipisicing!"
                  src={require('../../images/img/home/people.jpg')}
                />
              </a>
              <a
                className={css.cases__img}
                href={require('../../images/img/home/blog.jpg')}
              >
                <img
                  alt="Lorem ipsum dolor sit amet consectetur adipisicing!"
                  src={require('../../images/img/home/blog.jpg')}
                />
              </a>
              <a
                className={css.cases__img}
                href={require('../../images/img/home/people.jpg')}
              >
                <img
                  alt="Lorem ipsum dolor sit amet consectetur adipisicing!"
                  src={require('../../images/img/home/people.jpg')}
                />
              </a>
              <a
                className={css.cases__img}
                href={require('../../images/img/home/blog.jpg')}
              >
                <img
                  alt="Lorem ipsum dolor sit amet consectetur adipisicing!"
                  src={require('../../images/img/home/blog.jpg')}
                />
              </a>
              <a
                className={css.cases__img}
                href={require('../../images/img/home/people.jpg')}
              >
                <img
                  alt="Lorem ipsum dolor sit amet consectetur adipisicing!"
                  src={require('../../images/img/home/people.jpg')}
                />
              </a>
            </div>
          </LightGallery>
        </div>
      </section>
    </>
  );
}

export default Cases;
