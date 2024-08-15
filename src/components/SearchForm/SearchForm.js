import { useState, useRef } from "react";
import { useData } from "../../hooks/useData";
import Error from "../Error/Error";
import styles from "./SearchForm.module.css";

const patternName = /^[a-zA-Z '-]*$/;

const SearchForm = () => {
  const [error, setError] = useState(false);
  const { updateSearchTerm } = useData();
  let searchTermRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchTermRef.current.value.trim();
    if (patternName.test(searchTerm)) {
      updateSearchTerm(searchTerm.trim());
      searchTermRef.current.value = "";
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form className={styles.search} onSubmit={handleSubmit}>
        <label htmlFor="movieTitle">Search for a movie title:</label>
        <input
          type="text"
          id="movieTitle"
          name="add"
          ref={searchTermRef}
          placeholder="Enter movie title..."
        />
        {error && (
          <Error>
            <p>
              You didn't enter a valid movie title. Name should contain only
              letters, apostrophes or white spaces.
            </p>
          </Error>
        )}
      </form>
    </>
  );
};

export default SearchForm;
