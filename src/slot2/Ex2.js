import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Nhập các file ảnh logo bạn vừa tải vào cùng thư mục
import html5Logo from './html5.png';
import css3Logo from './css3.png';
import bootstrapLogo from './bootstrap.png';

export default function Ex2() {
  // Quy định kích thước hiển thị của các logo cho đều nhau
  const logoStyle = {
    height: '120px',
    objectFit: 'contain'
  };

  return (
    <Container className="py-4">
      {/* Khung tiêu đề "My First Bootstrap Page" */}
      <Card className="text-center mb-4 shadow-sm border-0 bg-light">
        <Card.Body className="py-4">
          <h2 className="fw-bold text-dark">My First Bootstrap Page</h2>
        </Card.Body>
      </Card>

      {/* Phần hiển thị 3 logo cạnh nhau */}
      <Row className="justify-content-center text-center">
        {/* Logo HTML5 */}
        <Col md={3} className="mb-3">
          <Card className="border-0 shadow-sm h-100 py-4">
            <Card.Body className="d-flex align-items-center justify-content-center">
              <img src={html5Logo} alt="HTML5" style={logoStyle} />
            </Card.Body>
          </Card>
        </Col>

        {/* Logo CSS3 */}
        <Col md={3} className="mb-3">
          <Card className="border-0 shadow-sm h-100 py-4">
            <Card.Body className="d-flex align-items-center justify-content-center">
              <img src={css3Logo} alt="CSS3" style={logoStyle} />
            </Card.Body>
          </Card>
        </Col>

        {/* Logo Bootstrap */}
        <Col md={3} className="mb-3">
          <Card className="border-0 shadow-sm h-100 py-4">
            <Card.Body className="d-flex align-items-center justify-content-center">
              <img src={bootstrapLogo} alt="Bootstrap" style={logoStyle} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}