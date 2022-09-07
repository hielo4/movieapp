import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";

function MovieList({ movies }) {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          posterURL={movie.posterURL}
          description={movie.description}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
