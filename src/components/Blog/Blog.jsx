import css from './Blog.module.css';

function Blog() {
  return (
    <>
      <section className={css.blog} id="blog">
        <div className={css.blog__box}></div>
        <div className={css.blog__wrapper}>
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
