import React from 'react';
import {
  Col,
  Container,
  Row
} from 'react-bootstrap';

import data from './data';

import './style.scss';

const VideoRecette = ({ title, video }) => (
  <Col>
    <Row className='video-row'>
    <iframe
      width="70%"
      height="200px"
      src={video}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
    </Row>
    <Row>
      <h2>{title}</h2>
    </Row>
  </Col>
);

const VideoRecettes = ({ data }) => (
  <Row>
    {data.map((recette, index) => {
      const { title, video } = recette;

      return (
        <VideoRecette
          key={index}
          title={title}
          video={video}
        />
      );
    })}
  </Row>
);

const Recettes = () => (
  <Container fluid>
    <Row className='recettes'>
      <h1 className="display-3">Recettes</h1>
    </Row>
    <VideoRecettes data={data} />
    <Row>
      <div className="d-grid gap-2">
        <a href="http://127.0.0.1:9090/login" className="btn4" size="lg">Afficher plus de recettes</a>
      </div>
    </Row>
  </ Container>
);

export default Recettes;
