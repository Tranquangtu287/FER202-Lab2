import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Form, Alert } from 'react-bootstrap';
import fptLogo from './fpt.png'; // Đảm bảo bạn đã có sẵn ảnh fpt.png

export default function Ex10() {
  // State quản lý Counter từ Ex9 (hoặc các bài trước)
  const [count, setCount] = useState(0);
  
  // State cho Form demo
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setShowAlert(true);
    }
    setValidated(true);
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      {/* 1. NAVBAR ĐIỀU HƯỚNG CHUNG CHO WEBSITE LAB 2 */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="px-4 shadow-sm">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={fptLogo} alt="Logo" style={{ height: '35px', marginRight: '10px', backgroundColor: '#fff', padding: '2px', borderRadius: '4px' }} />
          <span className="fw-bold text-warning">FER202 - Lab 2 Website</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* 2. HEADER BANNER SECTION */}
      <div id="home" className="py-5 text-center bg-warning bg-opacity-75 shadow-sm mb-4">
        <Container>
          <div className="bg-white p-4 d-inline-block shadow-sm rounded mb-3">
            <img src={fptLogo} alt="FPT Logo" style={{ maxHeight: '60px' }} />
            <h4 className="text-warning fw-bold mt-2 m-0">FPT UNIVERSITY</h4>
          </div>
          <h1 className="fw-bold text-dark">Welcome to React-Bootstrap Lab 2</h1>
          <p className="text-secondary lead">Building responsive and user-friendly web interfaces using React and Bootstrap components.</p>
        </Container>
      </div>

      {/* 3. MAIN CONTENT CONTAINER */}
      <Container className="flex-grow-1 mb-5">
        
        {/* Phần Component & Cards (Kế thừa từ Ex9) */}
        <section id="components" className="mb-5">
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 shadow-sm border-primary">
                <Card.Body>
                  <Card.Title className="fw-bold text-danger">Profile Component</Card.Title>
                  <Card.Text className="text-muted">
                    Họ tên: Tran Quang Tu<br />
                    Giới thiệu: Student at FPT University Da Nang learning React.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              {/* Simple Card chuẩn chỉnh */}
              <div className="p-2 border border-primary bg-white shadow-sm h-100">
                <Row className="g-2 align-items-center">
                  <Col md={3}>
                    <div className="d-flex align-items-center justify-content-center fw-bold" style={{ backgroundColor: '#fef08a', color: '#ca8a04', height: '100px', border: '1px solid #eab308' }}>
                      IMG
                    </div>
                  </Col>
                  <Col md={9}>
                    <div className="p-2 mb-2" style={{ border: '1px solid #f97316', backgroundColor: '#fff' }}>
                      <h4 className="fw-normal m-0" style={{ color: '#f97316', fontFamily: 'Georgia, serif' }}>A Title</h4>
                    </div>
                    <div className="p-2" style={{ border: '1px solid #9ca3af', backgroundColor: '#fff' }}>
                      <p className="m-0 text-secondary" style={{ fontFamily: 'Georgia, serif', fontSize: '14px' }}>The description goes here.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </section>

        {/* Phần Interactive Demo (Counter & Form) */}
        <section id="interactive" className="mb-5">
          <Row className="g-4">
            {/* Counter Demo */}
            <Col md={5}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center d-flex flex-column justify-content-center">
                  <Card.Title className="fw-bold">Counter Application</Card.Title>
                  <p className="fs-3 text-danger fw-bold my-2">{count}</p>
                  <div>
                    <Button variant="success" className="me-2" onClick={() => setCount(count + 1)}>Increment (+)</Button>
                    <Button variant="danger" onClick={() => setCount(count - 1)}>Decrement (-)</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Form Demo */}
            <Col md={7}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">Feedback Form</Card.Title>
                  {showAlert && <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>Form submitted successfully!</Alert>}
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required />
                      <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={2} placeholder="Your message..." required />
                      <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit Feedback</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Phần Contact / About Section */}
        <section id="contact" className="text-center p-4 bg-white border rounded shadow-sm">
          <h4 className="fw-bold">About & Contact</h4>
          <p className="text-muted mb-1">For any inquiries regarding Lab 2 React-Bootstrap, please contact via FPT student portal.</p>
          <p className="text-secondary small mb-0">Email: tutqde180... @fpt.edu.vn</p>
        </section>

      </Container>

      {/* 4. FOOTER WEBSITE (Đã tinh chỉnh màu nền đậm rõ chữ trắng theo ý bạn) */}
      <footer className="text-center py-3 text-white border-top mt-auto" style={{ backgroundColor: '#e59400' }}>
        <small>© 2026 FPT University - Lab 2 Website. All rights reserved.</small>
      </footer>
    </div>
  );
}