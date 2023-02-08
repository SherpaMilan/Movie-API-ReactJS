import React from "react";
import { Card, Button } from "react-bootstrap";

const CustomCard = ({ movie, addMovieFunc, isDelete }) => {
  console.log(movie);
  return (
    <Card>
      <Card.Img variant="top" src={movie?.Poster} />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Text>
          Rating: {movie?.imdbRating}
          <br />
          Year: {movie?.Year}
          <br />
          Director: {movie?.Director}
        </Card.Text>

        {isDelete ? (
          <Button variant="danger">Delete</Button>
        ) : (
          <div className="d-flex justify-content-between">
            <Button
              variant="danger"
              onClick={() => addMovieFunc({ ...movie, type: "awesome" })}
            >
              Awesome
            </Button>

            <Button
              variant="warning"
              onClick={() => addMovieFunc({ ...movie, type: "boring" })}
            >
              Boring
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
