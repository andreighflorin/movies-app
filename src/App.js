import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useData } from "./hooks/useData";
import useFetch from "./hooks/useFetch";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/UI/Container/Container";
import SearchForm from "./components/SearchForm/SearchForm";
import List from "./components/UI/List/List";
import MovieDetails from "./components/UI/MovieDetails/MovieDetails";
import Favorites from "./components/Favorites/Favorites";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

const base = "https://www.omdbapi.com/";
const apiKey = "3fb84fc2";

function App() {
  const { fetchData } = useFetch();
  const { searchTerm } = useData();

  useEffect(() => {
    if (!searchTerm) return;
    fetchData(`${base}?s=${searchTerm}&apikey=${apiKey}`);
  }, [searchTerm, fetchData]);

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchForm />
                <List />
              </>
            }
          ></Route>
          <Route path="/movie/:id" element={<MovieDetails />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
