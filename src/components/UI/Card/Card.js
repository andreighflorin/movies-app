import { memo } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../../images/default.jpg";
import styles from "./Card.module.css";

const Card = ({ movie }) => {
  return (
    <div className={styles.card}>
      <Link to={`/movie/${movie.imdbID}`} state={movie}>
        <img
          className={styles.image}
          src={movie.Poster === "N/A" ? defaultImg : movie.Poster}
          alt={movie.Title}
        />
        <h3 className={styles.name}>{movie.Title}</h3>
      </Link>
    </div>
  );
};

export default memo(Card);
