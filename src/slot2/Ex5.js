import React from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';

// Import các file ảnh từ thư mục
import fptLogo from './fpt.png';
import anh1 from './anh1.png';
import anh2 from './anh2.png';
import anh3 from './anh3.png';
import anh4 from './anh4.png';
import anh5 from './anh5.png';

export default function Ex5() {
  const students = [
    { id: 'DE160182', name: 'Nguyễn Hữu Quốc Khánh', status: 'DaNang', img: anh2 },
    { id: 'DE160377', name: 'Choy Vinh Thân', status: 'QuyNhon', img: anh3 },
    { id: 'DE160547', name: 'Đỗ Nguyên Phúc', status: 'QuangNam', img: anh4 },
    { id: 'DE170049', name: 'Lê Hoàng Minh', status: 'DaNang', img: anh5 },
  ];

  return (
    <div>
      {/* 1. Header chuẩn mẫu: Logo không khung trắng, menu 1 dòng, search cách xa */}
      <div className="py-2 px-4" style={{ backgroundColor: '#f2cc8f' }}>
        <Container fluid className="d-flex justify-content-between align-items-center flex-nowrap">
          
          {/* Logo và Menu cùng nằm trên một khối bên trái */}
          <div className="d-flex align-items-center gap-4 flex-nowrap">
            {/* Logo FPT không có khung trắng */}
            <div style={{ width: '100px', flexShrink: 0 }}>
              <img src={fptLogo} alt="FPT Logo" style={{ width: '100%', objectFit: 'contain' }} />
            </div>
            
            {/* Menu ngang chắc chắn trên 1 dòng */}
            <Nav className="d-flex flex-row align-items-center gap-4 flex-nowrap mb-0">
              <Nav.Link href="#home" className="text-dark small fw-semibold p-0 text-nowrap">
                🏠 Trang chủ
              </Nav.Link>
              <Nav.Link href="#majors" className="text-dark small fw-semibold p-0 text-nowrap">
                📖 Ngành học
              </Nav.Link>
              <Nav.Link href="#admission" className="text-dark small fw-semibold p-0 text-nowrap">
                📑 Tuyển sinh
              </Nav.Link>
              <Nav.Link href="#students" className="text-dark small fw-semibold p-0 text-nowrap">
                📋 Sinh viên
              </Nav.Link>
            </Nav>
          </div>

          {/* Ô Search đẩy sát góc phải và cách xa menu */}
          <div className="d-flex align-items-center gap-2 flex-shrink-0 ms-4">
            <span className="text-dark small fw-semibold">Search:</span>
            <input type="text" className="form-control form-control-sm shadow-sm" style={{ width: '180px' }} />
          </div>

        </Container>
      </div>

      {/* 2. Top Banner Image (anh1.png) to nhất ở ngay dưới header */}
      <div className="text-center py-3" style={{ backgroundColor: '#e98b25' }}>
        <Container>
          <img 
            src={anh1} 
            alt="Banner Top" 
            className="img-fluid rounded shadow-sm" 
            style={{ maxHeight: '420px', width: '100%', objectFit: 'cover' }} 
          />
        </Container>
      </div>

      {/* 3. Main Students Detail Content */}
      <Container className="my-4">
        <h4 className="text-center mb-4 fw-bold">Students Detail</h4>
        <Row className="g-4">
          {students.map((stu, index) => (
            <Col md={6} key={index}>
              <Card className="text-center p-3 shadow-sm h-100">
                <div className="d-flex justify-content-center mb-3">
                  <Card.Img 
                    variant="top" 
                    src={stu.img} 
                    style={{ width: '180px', height: '220px', objectFit: 'cover' }} 
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fs-6 fw-bold text-dark">{stu.id}</Card.Title>
                    <Card.Text className="small mb-3 text-muted">
                      {stu.name} &bull; {stu.status}
                    </Card.Text>
                  </div>
                  <div>
                    <Button variant="warning" size="sm" className="text-white px-4 fw-semibold">Submit</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 4. Footer chuẩn màu và nội dung giống ảnh mẫu số 2 */}
      <footer className="py-4 text-dark mt-4" style={{ backgroundColor: '#e98b25' }}>
        <Container>
          <Row className="align-items-center">
            {/* Thông tin Our Address bên trái với đầy đủ các dòng chi tiết */}
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <h6 className="fw-bold mb-1">Our Address</h6>
              <p className="small mb-1">Khu đô thị FPT Đà Nẵng</p>
              <p className="small mb-1">📞 +84523111111</p>
              <p className="small mb-1">📠 +842 8765 4321</p>
              <p className="small mb-0">✉️ fptudn@fpt.edu.vn</p>
            </Col>
            
            {/* Các icon mạng xã hội và dòng Copyright bên phải */}
            <Col md={6} className="text-center text-md-end">
              <div className="mb-2 fs-6 fw-bold d-flex justify-content-center justify-content-md-end gap-3 align-items-center">
                <span>G+</span>
                <span>f</span>
                <span>in</span>
                <span>🐦</span>
                <span>📺</span>
                <span>✉️</span>
              </div>
              <small className="text-dark">&copy; Copyright 2023</small>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}