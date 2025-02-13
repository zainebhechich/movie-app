// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, index }) => {
    return (
      <div className="movie-card">
        <Link to={`/movie/${index}`}>
          <img src={movie.posterURL} alt={movie.title} />
          <h3>{movie.title}</h3>
        </Link>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    );
  }

export default MovieCard;
