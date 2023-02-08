import { Container } from "react-bootstrap";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Title from "./components/Title";
import { useState } from "react";
import MovieList from "./components/MovieList";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addMovie = (movie) => {
    setMovieList([...movieList, movie]);
  };

  return (
    <div className="Wrapper">
      <Container>
        <Title />
        <SearchForm addMovieFunc={addMovie} />
        <MovieList movieList={movieList} />
      </Container>
    </div>
  );
}

export default App;
