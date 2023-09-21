import React from "react";
import styles from "./Card.module.css";
class Card extends React.Component {
  render() {
    const { moviesData } = this.props;
    return (
      <div className={styles.container}>
        <div className="imgDiv">
          <img src={moviesData.Poster} alt={`${moviesData.imdbID}`} />
        </div>

        <div className={styles.content}>
          <div>
            <p>Movie: {moviesData.Title}</p>
          </div>
          <div>
            <p>Released: {moviesData.Year}</p>
          </div>
        </div>

        <div>
          <p></p>
        </div>
      </div>
    );
  }
}
<footer class="footer">
  <p>© 2017 Mustafa Ispahani</p>
  <p>
    <a href="mustafaispahani@gmail.com">
      <i class="fa fa-envelope fa-fw"></i>
    </a>
    <a href="https://github.com/Mustafa2503" target="_blank">
      <i class="fa fa-github fa-fw"></i>
    </a>
    <a href="https://www.linkedin.com/in/ispahani-m-mustafa" target="_blank">
      <i class="fa fa-linkedin"></i>
    </a>
    <a href="https://codepen.io/Mustafa-Ispahani25/" target="_blank">
      <i class="fa fa-codepen"></i>
    </a>

    <a href="https://www.freecodecamp.com/mustafa-ispahani25" target="_blank">
      (<i class="fa fa-fire fa-fw"></i>)
    </a>
  </p>
</footer>;
export default Card;
