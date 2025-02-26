// src/components/AddMovieModal.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import '../App.css';


const AddMovie = ({ isOpen, onRequestClose, onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [type, setType] = useState('Comedy'); // Default type or adjust as needed
  const [watchLink, setWatchLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
      type,
      watchLink
    };
    onAddMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
    setType('Comedy');
    setWatchLink('');
    onRequestClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Add New Movie"
      >
        <h2>Add New Movie</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Poster URL:</label>
            <input
              type="url"
              value={posterURL}
              onChange={(e) => setPosterURL(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Rating:</label>
            <input
              type="number"
              step="0.1"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Type:</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="Comedy">Comedy</option>
              <option value="Romantic">Romantic</option>
              <option value="Action">Action</option>
              <option value="Anime">Anime</option>
              <option value="Disturbing and Mystery">Disturbing and Mystery</option>
              <option value="Historical">Historical</option>
            </select>
          </div>
          <div>
            <label>Watch Link:</label>
            <input
              type="url"
              value={watchLink}
              onChange={(e) => setWatchLink(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Movie</button>
          <button type="button" onClick={onRequestClose}>Cancel</button>
        </form>
      </Modal>
    </>
  );
};

AddMovie.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onAddMovie: PropTypes.func.isRequired,
};

export default AddMovie;
