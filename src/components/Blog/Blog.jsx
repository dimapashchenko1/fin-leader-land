import css from './Blog.module.css';

function Blog() {
  return (
    <>
      <section className={css.blog} id="blog">
        <picture className={css.blog__img}>
          <source
            type="image/jpeg"
            srcSet={`${require('../../images/img/home/blog.jpg')} 1x, ${require('../../images/img/home/blog@2x.jpg')} 2x`}
          />
          <source
            type="image/webp"
            srcSet={`${require('../../images/img/home/blog.webp')} 1x, ${require('../../images/img/home/blog@2x.webp')} 2x`}
          />
          <img
            src={require('../../images/img/home/blog.jpg')}
            alt="blog"
            loading="lazy"
          />
        </picture>
        <div className={css.blog__info}>
          <p className={css.blog__text}>April 16 2020</p>
          <h2 className={css.blog__title}>Blog Post One</h2>
          <p className={css.blog__desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <button className={css.blog__btn} type="button">
            Read Our Blog
          </button>
        </div>
      </section>
    </>
  );
}

export default Blog;
