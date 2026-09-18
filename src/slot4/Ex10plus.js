import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { FaShoppingCart, FaSearch } from 'react-icons/fa';

import pizza1 from '../images/pizza1.png';
import pizza2 from '../images/pizza2.png';
import pizza3 from '../images/pizza3.png';
import pizza4 from '../images/pizza4.png';
import pizza5 from '../images/pizza5.png';

function Ex10plus() {
  const pizzas = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: "$13",
      image: pizza1
    },
    {
      id: 2,
      name: "Mushroom Pizza",
      price: "$14",
      image: pizza2
    },
    {
      id: 3,
      name: "Hawaiian Pizza",
      price: "$15",
      image: pizza3
    },
    {
      id: 4,
      name: "Pepperoni Pizza",
      price: "$16",
      image: pizza4
    },
  
  ];

  // State quản lý trạng thái đổi màu khi bấm nút Buy
  const [boughtItems, setBoughtItems] = useState({});

  const handleBuyClick = (id) => {
    setBoughtItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="bg-dark text-white min-vh-100 pb-5">
      {/* 1. Navbar */}
      <Navbar bg="dark" variant="dark" className="px-4 justify-content-between border-bottom border-secondary">
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#home" className="fw-bold me-4 text-white">Pizza House</Navbar.Brand>
          <Nav className="flex-row">
            <Nav.Link href="#home" className="px-2 text-white">Home</Nav.Link>
            <Nav.Link href="#about" className="px-2 text-white">About Us</Nav.Link>
            <Nav.Link href="#contact" className="px-2 text-white">Contact</Nav.Link>
          </Nav>
        </div>

        {/* Ô tìm kiếm bên phải */}
        <Form className="d-flex" style={{ width: '260px' }}>
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="bg-white text-dark border-0 shadow-none"
            />
            <Button variant="danger">
              <FaSearch />
            </Button>
          </InputGroup>
        </Form>
      </Navbar>

      {/* 2. Banner ảnh to với Card.ImgOverlay */}
      <Container className="my-4">
        <Card className="bg-dark text-white border-0 shadow">
          <Card.Img 
            src={pizza1} 
            alt="Card image" 
            style={{ height: "400px", objectFit: "cover", filter: "brightness(60%)" }} 
          />
          <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center text-center">
            <Card.Title className="fs-2 fw-bold text-warning">Neapolitan Pizza</Card.Title>
            <Card.Text className="w-75">
              If you are looking for traditional Italian pizza, the Neapolitan is the best choice.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>

      {/* 3. Phần Our Menu (Canh sát trái) */}
      <Container className="mb-5">
        <h2 className="mb-4 fw-bold text-start text-white">Our Menu</h2>
        <Row className="g-4">
          {pizzas.map((pizza) => {
            const isBought = boughtItems[pizza.id];
            return (
              <Col md={4} lg={3} className="mb-4" key={pizza.id}>
                <Card className="h-100 shadow-sm bg-white text-dark">
                  <Card.Img
                    variant="top"
                    src={pizza.image}
                    style={{
                      height: "200px",
                      objectFit: "cover"
                    }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">{pizza.name}</Card.Title>
                    <Card.Text className="text-muted">{pizza.price}</Card.Text>
                    
                    {/* Nút Buy đổi màu/trạng thái khi click */}
                    <Button 
                      variant={isBought ? "success" : "dark"} 
                      className="mt-auto"
                      onClick={() => handleBuyClick(pizza.id)}
                    >
                      <FaShoppingCart className="me-2" />
                      {isBought ? "Purchased" : "Buy"}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* 4. Phần Book Your Table (Tiêu đề và nút Send Message canh sát trái) */}
      <Container className="p-4 rounded mb-5 bg-dark border border-secondary text-white">
        <h3 className="mb-4 fw-bold text-start text-white">Book Your Table</h3>
        <Form>
          <Row className="mb-3">
            <Col md={3}>
              <Form.Control type="text" placeholder="Your Name *" className="bg-light" />
            </Col>
            <Col md={3}>
              <Form.Control type="email" placeholder="Your Email *" className="bg-light" />
            </Col>
            <Col md={3}>
              <Form.Control type="text" placeholder="Select Date *" className="bg-light" />
            </Col>
            <Col md={3}>
              <Form.Select className="bg-light">
                <option>Select a Service</option>
                <option>Dining</option>
                <option>Takeaway</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={12}>
              <Form.Control as="textarea" rows={4} placeholder="Please write your comment" className="bg-light" />
            </Col>
          </Row>
          <div className="text-start">
            <Button variant="warning" className="px-5 fw-bold text-dark">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Ex10plus;