// src/components/MovieDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Flatten the movies object to find the selected movie by index
  const allMovies = Object.values(movies).flat();
  const movie = allMovies[id];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <button onClick={() => navigate(-1)}>Back</button>
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <p>Type: {movie.type}</p>
      <a href={movie.watchLink} target="_blank" rel="noopener noreferrer">
        Watch Movie
      </a>
    </div>
  );
};

export default MovieDetails;
