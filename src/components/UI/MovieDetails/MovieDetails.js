import { Link, useLocation, useParams } from "react-router-dom";
import { useData } from "../../../hooks/useData";
import Error from "../../Error/Error";
import Button from "../Button/Button";
import defaultImg from "../../../images/default.jpg";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
  const location = useLocation();
  const { state } = location;
  let { id } = useParams();
  const { favorites, addFavorites, removeFavorites } = useData();

  if (!state) {
    return (
      <div className={styles.cardExtended}>
        <Error>
          <p>Movie with id {id} doesn't exist.</p>
        </Error>
        <Link to="/" className="btn btnLink">
          Back to homepage
        </Link>
      </div>
    );
  }

  const handleFavorites = (e) => {
    e.preventDefault();
    if (favorites.includes(id)) {
      removeFavorites(id);
    } else {
      addFavorites(id);
    }
  };

  return (
    <div className={styles.cardExtended}>
      <div className={styles.cardContainer}>
        <div className={styles.imgSection}>
          <img
            className={styles.image}
            src={state.Poster === "N/A" ? defaultImg : state.Poster}
            alt={state.Title}
          />
        </div>
        <div className={styles.detailsSection}>
          <h2 className={styles.name}>Title: {state.Title}</h2>
          <p>Type: {state.Type}</p>
          <p>Year: {state.Year}</p>
          <p>imdbID: {state.imdbID}</p>
          <div className={styles.actions}>
            <Button
              className={favorites.includes(id) ? "btnRemove" : "btnAdd"}
              onClick={handleFavorites}
            >
              {favorites.includes(id)
                ? "Remove from favorites"
                : "Add to favorites"}
            </Button>
            <Link to="/" className="btn btnLink">
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
