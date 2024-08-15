import { Link } from "react-router-dom";
import { useData } from "../../hooks/useData";
import Card from "../UI/Card/Card";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { data, favorites } = useData();

  if (favorites.length === 0) {
    return (
      <div className={styles.favorites}>
        <h2>You don't have any favorite movies added!</h2>
        <Link to="/" className="btn btnLink">
          Back to homepage
        </Link>
      </div>
    );
  }

  const favoriteMovies = data.Search.filter((movie) =>
    favorites.includes(movie.imdbID)
  );

  return (
    favoriteMovies &&
    favoriteMovies.map((movie) => <Card key={movie.imdbID} movie={movie} />)
  );
};

export default Favorites;
