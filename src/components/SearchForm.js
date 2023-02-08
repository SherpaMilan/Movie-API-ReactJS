import React from "react";
import { Button, Row, Col, Form, Alert } from "react-bootstrap";
import { useState } from "react";
import { fetchData } from "../helpers/axiosHelper";
import CustomCard from "./CustomCard";

const SearchForm = (addMovieFunc) => {
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setMovieName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // below code will refresh the card searching for new movie
    setMovie();
    setError(false);

    const result = await fetchData(movieName);
    console.log(result);
    if (result.Response === "True") {
      setMovie(result);
    } else {
      setError(true);
    }
  };

  const handleAddToList = (movie) => {
    addMovieFunc(movie);

    setMovie();
    setMovieName("");
  };

  return (
    <div className="bg-dark py-5 rounded p-2">
      <Form onSubmit={handleSubmit}>
        <Row className="g-2">
          <Col className="d-flex justify-content-center">
            <div className="d-flex gap-3" style={{ width: "50%" }}>
              <Form.Control
                placeholder="Movie Name"
                onChange={handleChange}
                required
                value={movieName}
              />
            </div>
            <Button variant="warning" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <div className="mt-3 d-flex justify-content-center">
        {movie?.imdbID && (
          <CustomCard movie={movie} addMovieFunc={handleAddToList} />
        )}
      </div>
      {error && (
        <Alert variant="danger">
          No Movie found. Try searching other movie
        </Alert>
      )}
    </div>
  );
};

export default SearchForm;
