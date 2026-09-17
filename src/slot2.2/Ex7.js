import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Import ảnh nằm cùng thư mục slot2.2
import imgCard1 from './oto.png';
import imgCard2 from './oto.png';
import imgCard3 from './oto.png';

export default function Ex7() {
  return (
    <Container className="py-4">
      <h3 className="fw-bold mb-3">Exercise 7: Demo about Cards Column</h3>
      
      {/* Mục tiêu bài học */}
      <div className="mb-4 text-muted">
        <h5 className="text-dark fw-semibold">Objectives and Outcomes</h5>
        <p style={{ textAlign: 'justify' }}>
          Bootstrap provides a built-in card component that allows you to create stylish and flexible cards for displaying content. 
          Through this exercise, you can learn how a Bootstrap card is structured, including the use of various classes and elements 
          such as <code>card</code>, <code>card-img-top</code>, <code>card-body</code>, <code>card-title</code>, <code>card-text</code>, and more.
        </p>
      </div>

      <h4 className="fw-semibold mb-3">Exercises</h4>

      {/* Khu vực Cards Columns */}
      <Row className="g-4 mb-5">
        {/* Card 1 - Viền xanh dương */}
        <Col md={4}>
          <Card className="border border-primary border-3 shadow-sm h-100 rounded-0">
            <Card.Img 
              variant="top" 
              src={imgCard1} 
              alt="Card 1" 
              className="p-2"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="bg-primary text-white text-center py-3">
              <Card.Text className="mb-0 fw-medium">
                Some text inside the first card
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 - Viền vàng */}
        <Col md={4}>
          <Card className="border border-warning border-3 shadow-sm h-100 rounded-0">
            <Card.Img 
              variant="top" 
              src={imgCard2} 
              alt="Card 2" 
              className="p-2"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="bg-warning text-dark text-center py-3">
              <Card.Text className="mb-0 fw-medium">
                Some text inside the second card
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 - Viền đỏ */}
        <Col md={4}>
          <Card className="border border-danger border-3 shadow-sm h-100 rounded-0">
            <Card.Img 
              variant="top" 
              src={imgCard3} 
              alt="Card 3" 
              className="p-2"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="bg-danger text-white text-center py-3">
              <Card.Text className="mb-0 fw-medium">
                Some text inside the third card
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Phần kết luận */}
      <div className="text-muted border-top pt-3">
        <h5 className="text-dark fw-semibold">Conclusion</h5>
        <p>
          By working on exercises and exploring the Bootstrap documentation, you can further enhance your understanding and skills in using Bootstrap cards effectively.
        </p>
      </div>
    </Container>
  );
}