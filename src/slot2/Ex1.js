import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Ex1() {
  return (
    <Container className="my-4">
      {/* Header box */}
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h1 className="display-6 fw-normal">Let's test the grid!</h1>
      </div>

      {/* Grid section */}
      <div className="border p-3 bg-white">
        <Row className="mb-3">
          <Col md={6} className="border bg-light py-2">First col</Col>
          <Col md={6} className="border bg-light py-2">Second col</Col>
        </Row>
        <Row className="mb-3">
          <Col md={4} className="border bg-light py-2">col</Col>
          <Col md={4} className="border bg-light py-2">col</Col>
          <Col md={4} className="border bg-light py-2">col</Col>
        </Row>
        <Row>
          <Col md={3} className="border bg-light py-2">col</Col>
          <Col md={3} className="border bg-light py-2">col</Col>
          <Col md={3} className="border bg-light py-2">col</Col>
          <Col md={3} className="border bg-light py-2">col</Col>
        </Row>
      </div>

      {/* Footer */}
      <div className="text-center py-3 mt-4" style={{ backgroundColor: '#dcd6d0' }}>
        <h5 className="mb-0 text-dark">Created by ABC!</h5>
      </div>
    </Container>
  );
}