import React, { useState } from 'react';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';

import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import Ex6 from '../slot2.1/Ex6';
import Ex7 from '../slot2.2/Ex7';
import Ex8 from '../slot2.3/Ex8';
import Ex9 from '../slot2.4/Ex9';
import Ex10 from '../slot2.5/Ex10';

export default function Slot2Home() {
  const [activeEx, setActiveEx] = useState('ex1');

  const renderComponent = () => {
    switch (activeEx) {
      case 'ex1': return <Ex1 />;
      case 'ex2': return <Ex2 />;
      case 'ex3': return <Ex3 />;
      case 'ex4': return <Ex4 />;
      case 'ex5': return <Ex5 />;
      case 'ex6': return <Ex6 />;
      case 'ex7': return <Ex7 />;
      case 'ex8': return <Ex8 />;
      case 'ex9': return <Ex9 />;
      case 'ex10': return <Ex10 />;


      default: return <Ex1 />;
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
        <Navbar.Brand href="#home">Slot 2 Exercises (Ex1 - Ex10)</Navbar.Brand>
        <Nav className="ms-auto" activeKey={activeEx} onSelect={(k) => setActiveEx(k)}>
          <Nav.Link eventKey="ex1">Exercise 1</Nav.Link>
          <Nav.Link eventKey="ex2">Exercise 2</Nav.Link>
          <Nav.Link eventKey="ex3">Exercise 3</Nav.Link>
          <Nav.Link eventKey="ex4">Exercise 4</Nav.Link>
          <Nav.Link eventKey="ex5">Exercise 5</Nav.Link>
          <Nav.Link eventKey="ex6">Exercise 6</Nav.Link>
          <Nav.Link eventKey="ex7">Exercise 7</Nav.Link>
          <Nav.Link eventKey="ex8">Exercise 8</Nav.Link>
          <Nav.Link eventKey="ex9">Exercise 9</Nav.Link>
          <Nav.Link eventKey="ex10">Exercise 10</Nav.Link>



        </Nav>
      </Navbar>

      <Container className="my-3 flex-grow-1 d-flex flex-column">
        <Card className="shadow flex-grow-1 d-flex flex-column">
          <Card.Body className="flex-grow-1">
            {renderComponent()}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}