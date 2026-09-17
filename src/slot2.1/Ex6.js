import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Carousel, Card } from 'react-bootstrap';

export default function Ex6() {
  return (
    <div className="bg-white py-3">
      <Container className="border p-4 bg-light shadow-sm">
        
        {/* 1. Navbar Section */}
        <Navbar bg="light" expand="lg" className="px-3 mb-3 border bg-white">
          <Navbar.Brand href="#home" className="text-muted fw-normal">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-dark">Home</Nav.Link>
              <Nav.Link href="#link" className="text-muted">Link</Nav.Link>
              <Nav.Link href="#dropdown" className="text-muted">Dropdown</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 rounded-0"
                aria-label="Search"
                style={{ width: '200px' }}
              />
              <Button variant="outline-primary" className="rounded-0 px-3">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        {/* 2. Carousel Banner Section (1920 x 530) */}
        <div className="mb-4 position-relative">
          <Carousel indicators={true} interval={null} variant="dark">
            <Carousel.Item>
              <div 
                className="bg-secondary text-white d-flex flex-column align-items-center justify-content-center rounded-0" 
                style={{ height: '350px', backgroundColor: '#d6d8db' }}
              >
                <h1 className="display-4 fw-light text-secondary">1920 x 530</h1>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div 
                className="bg-secondary text-white d-flex flex-column align-items-center justify-content-center rounded-0" 
                style={{ height: '350px', backgroundColor: '#d6d8db' }}
              >
                <h1 className="display-4 fw-light text-secondary">1920 x 530</h1>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* 3. New Product Section */}
        <div className="mb-3">
          <h3 className="fw-normal text-secondary mb-1">NEW PRODUCT</h3>
          <p className="text-muted small mb-4">List product description</p>

          <Row xs={1} sm={2} md={4} className="g-4">
            {/* Sản phẩm 1 */}
            <Col>
              <Card className="h-100 rounded-0 border shadow-sm position-relative">
                <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '220px', backgroundColor: '#e9ecef' }}>
                  <span className="text-muted">280 x 280</span>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-6 text-secondary mb-2">Product</Card.Title>
                  <div className="d-flex justify-content-between align-items-center small text-muted mb-3">
                    <span className="text-decoration-line-through">100.000 vnđ</span>
                    <span className="text-danger fw-bold">80.000 vnđ</span>
                  </div>
                  <div className="mt-auto d-flex gap-1">
                    <Button variant="dark" size="sm" className="rounded-0 px-2"><i className="bi bi-cart-fill">🛒</i></Button>
                    <Button variant="outline-secondary" size="sm" className="rounded-0 w-100 text-dark">Xem chi tiết</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Sản phẩm 2 */}
            <Col>
              <Card className="h-100 rounded-0 border shadow-sm position-relative">
                <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '220px', backgroundColor: '#e9ecef' }}>
                  <span className="text-muted">280 x 280</span>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-6 text-secondary mb-2">Product</Card.Title>
                  <div className="d-flex justify-content-between align-items-center small text-muted mb-3">
                    <span className="text-decoration-line-through">100.000 vnđ</span>
                    <span className="text-danger fw-bold">80.000 vnđ</span>
                  </div>
                  <div className="mt-auto d-flex gap-1">
                    <Button variant="dark" size="sm" className="rounded-0 px-2">🛒</Button>
                    <Button variant="outline-secondary" size="sm" className="rounded-0 w-100 text-dark">Xem chi tiết</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Sản phẩm 3 */}
            <Col>
              <Card className="h-100 rounded-0 border shadow-sm position-relative">
                <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '220px', backgroundColor: '#e9ecef' }}>
                  <span className="text-muted">280 x 280</span>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-6 text-secondary mb-2">Product</Card.Title>
                  <div className="d-flex justify-content-between align-items-center small text-muted mb-3">
                    <span className="text-decoration-line-through">100.000 vnđ</span>
                    <span className="text-danger fw-bold">80.000 vnđ</span>
                  </div>
                  <div className="mt-auto d-flex gap-1">
                    <Button variant="dark" size="sm" className="rounded-0 px-2">🛒</Button>
                    <Button variant="outline-secondary" size="sm" className="rounded-0 w-100 text-dark">Xem chi tiết</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Sản phẩm 4 (Có băng rôn Sale màu cam góc phải) */}
            <Col>
              <Card className="h-100 rounded-0 border shadow-sm position-relative overflow-hidden">
                {/* Dải băng Sale góc phải */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '-30px',
                  background: '#ffc107',
                  color: 'white',
                  padding: '4px 30px',
                  transform: 'rotate(45deg)',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  zIndex: 10
                }}>
                  Sale
                </div>

                <div className="bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '220px', backgroundColor: '#e9ecef' }}>
                  <span className="text-muted">280 x 280</span>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-6 text-secondary mb-2">Product</Card.Title>
                  <div className="d-flex justify-content-between align-items-center small text-muted mb-3">
                    <span className="text-decoration-line-through">100.000 vnđ</span>
                    <span className="text-danger fw-bold">80.000 vnđ</span>
                  </div>
                  <div className="mt-auto d-flex gap-1">
                    <Button variant="dark" size="sm" className="rounded-0 px-2">🛒</Button>
                    <Button variant="outline-secondary" size="sm" className="rounded-0 w-100 text-dark">Xem chi tiết</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

      </Container>
    </div>
  );
}