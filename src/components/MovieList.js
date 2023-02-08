import React, { useEffect, useState } from "react";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import CustomCard from "./CustomCard";

const MovieList = ({ movieList }) => {
  const [displayMovie, setDisplayMovie] = useState([]);

  useEffect(() => {
    setDisplayMovie(movieList);
  }, [movieList]);

  const selectCategory = (category) => {
    category === "all" && setDisplayMovie(movieList);

    category === "awesome" &&
      setDisplayMovie(movieList.filter((movie) => movie.type === "awesome"));

    category === "boring" &&
      setDisplayMovie(movieList.filter((movie) => movie.type === "boring"));
  };

  return (
    <div className="bg-dark py-3 rounded mt-5">
      <Row>
        <Col>
          <ButtonGroup>
            <Button variant="primary" onClick={() => selectCategory("all")}>
              All
            </Button>

            <Button variant="danger" onClick={() => selectCategory("awesome")}>
              Awesome
            </Button>
            <Button variant="warning" onClick={() => selectCategory("boring")}>
              Boring
            </Button>
          </ButtonGroup>
          <p className="mt-3 text-white">
            {displayMovie.length} Movie(s) Found!
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-wrap justify-content-around gap-3">
          {displayMovie?.map((movie) => (
            <CustomCard key={movie.imdbID} movie={movie} isDelete={true} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;
