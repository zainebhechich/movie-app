// src/components/MovieDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.flat().find((movie) => movie.title.toLowerCase().replace(/ /g, '-') === id);

  if (!movie) {
    return (
      <Container className="mt-4 text-center">
        <h2>Movie not found</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Movie Details */}
          <Card>
            <Card.Header>
              <h2>{movie.title}</h2>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4}>
                  {/* Movie Poster */}
                  <img 
                    src={movie.posterURL} 
                    alt={movie.title} 
                    className="img-fluid rounded" 
                  />
                </Col>
                <Col md={8}>
                  <p>{movie.description}</p>
                  <p><strong>Rating:</strong> {movie.rating}</p>
                  <p><strong>Type:</strong> {movie.type}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Trailer Section Below */}
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <div className="trailer-container">
            <Card className="trailer-card">
              <Card.Header className="text-center">
                <h3>Watch Trailer</h3>
              </Card.Header>
              <Card.Body>
                <iframe
                  src={movie.trailerlink}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;