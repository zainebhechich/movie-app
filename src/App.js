// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Filter from './components/Filter';
import './App.css';
import AddMovie from './components/AddMovie';

const initialMovies = {
  Comedy: [
    {
      title: 'Superbad',
      description: 'A coming-of-age teen comedy about high school friends navigating their last days before graduation.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevmmWW8yA76y27E2ue2RKmdZEkWZbpj6kNF9wjWBpcjrSjrsTc3FbIdIEYcNU-wt00T4&usqp=CAU',
      rating: 7.6,
      type: 'Comedy',
      watchLink: 'https://www.moviefone.com/movie/the-hangover/35061/main/' // Replace with the actual link
    },
    {
      title: 'Bridesmaids',
      description: 'A hilarious film about a maid of honor whose life unravels as she leads her best friend\'s wedding party.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykdh_4PMGBkwaFtX5V92xQjJdC8KeqODmLGNtDopGeroEHcarbY5w7Ca1mjuRyFX9i98&usqp=CAU',
      rating: 6.8,
    },
    {
      title: 'The Hangover',
      description: 'A comedy about a bachelor party gone wrong in Las Vegas.',
      posterURL: 'https://play-lh.googleusercontent.com/3li3UAlq6UoInhvvF6BjmBU5BwmJaXxsJBS0p_ueFHoZZCTuofWA83dINBk_Ub8hCok',
      rating: 7.7,
    },
    {
      title: 'Monty Python and the Holy Grail',
      description: 'A classic British comedy that parodies the legend of King Arthur.',
      posterURL: 'https://www.movieposters.com/cdn/shop/products/montypythonholygrain.styleB.mp_480x.progressive.jpg?v=1647538695',
      rating: 8.2,
    },
    {
      title: 'Dumb and Dumber',
      description: 'A slapstick comedy about two dim-witted friends on a cross-country road trip.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8LGlJdZiHq_OMOYYuSj3122FdjUIJQzWT6u9r-7KD9YreZ57cYJwspdY1bseFES_hRk&usqp=CAU',
      rating: 7.3,
    },
  ],
  Romantic: [
    {
      title: 'The Notebook',
      description: 'A romantic drama about a young couple who fall in love during the 1940s.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 7.8,
    },
    {
      title: 'La La Land',
      description: 'A musical romantic comedy-drama about a jazz pianist and an aspiring actress who meet and fall in love.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg',
      rating: 8.0,
    },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      description: 'A unique romantic drama about a couple who undergo a procedure to erase each other from their memories.',
      posterURL: 'https://m.media-amazon.com/images/I/71G7AybM3qL.jpg',
      rating: 8.3,
    },
    {
      title: 'Before Sunrise',
      description: 'A romantic drama about a young American man and a French woman who spend a night together in Vienna.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.1,
    },
    {
      title: 'Crazy, Stupid, Love',
      description: 'A romantic comedy about a man who seeks to rediscover his manhood after his wife asks for a divorce.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_FMjpg_UX1000_.jpg',
      rating: 7.4,
    },
  ],
  Action: [
    {
      title: 'Die Hard',
      description: 'An action classic about a New York City police detective who single-handedly takes on a group of terrorists.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5Zr6L42Hpep5FmWMyq92Elonifz4e0-7UHPOuK3KIOCR0ycy3eOfO6kHA7XJDjbpj3o&usqp=CAU',
      rating: 8.2,
    },
    {
      title: 'Mad Max: Fury Road',
      description: 'A post-apocalyptic action film about a woman rebelling against a tyrannical ruler.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.1,
    },
    {
      title: 'The Dark Knight',
      description: 'A superhero action film featuring Batman\'s battle against the Joker.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
      rating: 9.0,
    },
    {
      title: 'John Wick',
      description: 'An action-packed film about a retired hitman seeking revenge.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg',
      rating: 7.4,
    },
    {
      title: 'Mission: Impossible - Fallout',
      description: 'An action spy film featuring Ethan Hunt and his team on a dangerous mission.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_FMjpg_UX1000_.jpg',
      rating: 7.7,
    },
  ],
  Anime: [
    {
      title: 'Spirited Away',
      description: 'A magical adventure about a young girl who enters a world of spirits and sorcery.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.6,
    },
    {
      title: 'Your Name',
      description: 'A body-swapping fantasy romance about two teenagers who mysteriously switch places.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTIyNzFjNzItZmQ1MC00NzhjLThmMzYtZjRhN2Y3MmM2OGQyXkEyXkFqcGc@._V1_.jpg',
      rating: 8.4,
    },
    {
      title: 'Akira',
      description: 'A dystopian cyberpunk action film set in a futuristic Tokyo.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BM2NiMTIzZWEtM2Y2ZS00NTg1LTlhZTgtOThjMTkwNzQ4NzBlXkEyXkFqcGc@._V1_.jpg',
      rating: 8.0,
    },
    {
      title: 'Ghost in the Shell',
      description: 'A cyberpunk action film about a cyborg police officer hunting a mysterious hacker.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYzllNGRjYTctY2Q2MS00M2Y3LWE5ZTktODc5ZmMwODE5OTVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.0,
    },
    {
      title: 'Princess Mononoke',
      description: 'An epic fantasy adventure about a young prince\'s journey to find a cure for his curse.',
      posterURL: 'https://m.media-amazon.com/images/I/81Xh5jukUkL.jpg',
      rating: 8.4,
    },
  ],
  'Disturbing and Mystery': [
    {
      title: 'Se7en',
      description: 'A dark mystery thriller about a serial killer who uses the seven deadly sins as his modus operandi.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.6,
    },
    {
      title: 'The Silence of the Lambs',
      description: 'A psychological horror-thriller about an FBI trainee who seeks help from a cannibalistic serial killer.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg',
      rating: 8.6,
    },
    {
      title: 'Memento',
      description: 'A mystery thriller about a man with short-term memory loss seeking revenge for his wife\'s murder.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Memento_poster.jpg/220px-Memento_poster.jpg',
      rating: 8.4,
    },
    {
      title: 'Shutter Island',
      description: 'A psychological mystery about a U.S. Marshal investigating a missing person case on a remote island.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.2,
    },
    {
      title: 'Gone Girl',
      description: 'A psychological mystery thriller about a man whose wife disappears on their fifth wedding anniversary.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_FMjpg_UX1000_.jpg',
      rating: 8.1,
    },
  ],
  Historical: [
    {
      title: 'Schindler\'s List',
      description: 'A historical drama about a German businessman who saves the lives of more than a thousand Jewish refugees during the Holocaust.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.9,
    },
    {
      title: 'Gladiator',
      description: 'An epic historical drama about a Roman general who seeks revenge against the corrupt emperor.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg',
      rating: 8.5,
    },
    {
      title: 'Lincoln',
      description: 'A historical drama about the 16th U.S. President\'s efforts to abolish slavery.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Lincoln_2012_Teaser_Poster.jpg',
      rating: 7.4,
    },
    {
      title: 'Braveheart',
      description: 'A historical epic about a 13th-century Scottish warrior who leads a rebellion against English rule.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNGMxZDBhNGQtYTZlNi00N2UzLWI4NDEtNmUzNWM2NTdmZDA0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rating: 8.3,
    },
    {
      title: 'The King\'s Speech',
      description: 'A historical drama about King George VI\'s efforts to overcome his stammer with the help of a speech therapist.',
      posterURL: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327941516i/9755737.jpg',
      rating: 8.0,
    },
  ],
};

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [filters, setFilters] = useState({ title: '', rating: '' });
 

  const handleFilter = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filterMovies = (movies) => {
    return movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        (filters.rating === '' || movie.rating >= parseFloat(filters.rating))
      );
    });
  };

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => {
      const updatedMovies = { ...prevMovies };
      updatedMovies[newMovie.type].push(newMovie);
      return updatedMovies;
    });
  };
 

  return (
    <Router>
      <div className="App">
        <h1>Movie App</h1>
        <Filter onFilter={handleFilter} />
        <AddMovie/>
        <Routes>
          <Route path="/" element={
            <>
              {Object.keys(movies).map((type) => (
                <div key={type}>
                  <h2>{type}</h2>
                  <MovieList movies={filterMovies(movies[type])} />
                </div>
              ))}
            </>
          } />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
