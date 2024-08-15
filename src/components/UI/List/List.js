import { memo } from "react";
import { useData } from "../../../hooks/useData";
import Spinner from "../Spinner/Spinner";
import Error from "../../Error/Error";
import Card from "../Card/Card";

const List = () => {
  const { data, isLoading, error } = useData();
  return (
    <>
      {isLoading && <Spinner />}
      {error && (
        <Error>
          <p>There is a network error. We can't fetch the data!</p>
        </Error>
      )}
      {data && data.Response === "False" && (
        <Error>
          <p>{data.Error}</p>
        </Error>
      )}
      {data &&
        data.Response === "True" &&
        data.Search.map((movie) => <Card movie={movie} key={movie.imdbID} />)}
    </>
  );
};

export default memo(List);
