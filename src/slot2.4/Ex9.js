import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import fptLogo from './fpt.png';

// ==========================================
// CÁC COMPONENT CON (Theo đúng yêu cầu Exercise 9)
// ==========================================

// 1. Component hiển thị tên và thông điệp cá nhân
function MyProfile({ name, message }) {
  return (
    <div className="p-3 mb-3 border rounded bg-light">
      <h5 className="text-primary fw-bold">1. My Profile Component</h5>
      <p className="mb-1"><strong>Họ tên:</strong> {name}</p>
      <p className="mb-0"><strong>Giới thiệu:</strong> {message}</p>
    </div>
  );
}

// 2. Component hiển thị "Hello, World!"
function HelloWorld() {
  return (
    <div className="p-3 mb-3 border rounded bg-light">
      <h5 className="text-primary fw-bold">2. Hello World Component</h5>
      <h3 className="text-success mb-0">Hello, World!</h3>
    </div>
  );
}

// 3. Component Counter (Tăng/giảm số lượng)
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-3 mb-3 border rounded bg-light">
      <h5 className="text-primary fw-bold">3. Counter Application</h5>
      <p className="fs-4 mb-2">Current Count: <span className="fw-bold text-danger">{count}</span></p>
      <div>
        <Button variant="success" className="me-2" onClick={() => setCount(count + 1)}>
          Increment (+)
        </Button>
        <Button variant="danger" onClick={() => setCount(count - 1)}>
          Decrement (-)
        </Button>
      </div>
    </div>
  );
}

// 4. Các component cấu thành Simple Card (Chuẩn theo hình phác thảo mẫu)
function Title({ text }) {
  return (
    <div className="p-2 mb-2" style={{ border: '1px solid #f97316' }}>
      <h3 className="fw-bold m-0" style={{ color: '#ea580c', fontSize: '26px' }}>{text}</h3>
    </div>
  );
}

function Description({ text }) {
  return (
    <div className="p-2" style={{ border: '1px solid #9ca3af', minHeight: '60px' }}>
      <p className="text-secondary m-0" style={{ fontSize: '15px' }}>{text}</p>
    </div>
  );
}

function ProfileImage({ imageUrl }) {
  return (
    <div 
      className="d-flex align-items-center justify-content-center fw-bold h-100" 
      style={{ 
        backgroundColor: '#fef08a', 
        color: '#d1ad60', 
        fontSize: '50px', 
        border: '1px solid #eab308',
        minHeight: '125px'
      }}
    >
      {imageUrl ? <img src={imageUrl} alt="Profile" className="img-fluid h-100 w-100 object-fit-cover" /> : "IMG"}
    </div>
  );
}

function SimpleCard({ item }) {
  return (
    <div className="p-2" style={{ border: '2px solid #2563eb', maxWidth: '700px', backgroundColor: '#fff' }}>
      <Row className="g-2 align-items-center">
        {/* Cột Ảnh bên trái (khung vàng nhạt IMG) */}
        <Col md={3}>
          <ProfileImage imageUrl={item.imageUrl} />
        </Col>
        
        {/* Cột Nội dung bên phải (Khung Title cam và Khung Description xám) */}
        <Col md={9}>
          <Title text={item.title} />
          <Description text={item.description} />
        </Col>
      </Row>
    </div>
  );
}

// ==========================================
// COMPONENT CHÍNH: Ex9
// ==========================================
export default function Ex9() {
  const cardItem = {
    title: "A Title",
    description: "The description goes here.",
    imageUrl: "" 
  };

  return (
    <Container className="py-4">
      <h3 className="fw-bold mb-3">Exercise 9: React Component</h3>

      <h4 className="fw-semibold mb-3">Exercises</h4>

      {/* Phần 1, 2, 3 */}
      <MyProfile name="Hoai Nguyen" message="I am a passionate student learning React at FPT University Da Nang." />
      <HelloWorld />
      <Counter />

      {/* Phần 4: Simple Card */}
      <div className="p-3 mb-4 border rounded bg-light">
        
        {/* Card FPT sử dụng ảnh fpt.png và căn giữa thông tin theo chiều dọc */}
        <Card className="p-3 mb-3 shadow-sm border">
          <Row className="align-items-center">
            <Col md={6} className="text-center border-end d-flex align-items-center justify-content-center">
              <img src={fptLogo} alt="FPT Logo" style={{ maxHeight: '60px' }} />
            </Col>
            <Col md={6} className="text-center d-flex flex-column justify-content-center">
              <h6 className="fw-bold mb-1" style={{ fontSize: '17px' }}>Hoai Nguyen - FPT DaNang</h6>
              <p className="text-muted mb-0" style={{ fontSize: '14px' }}>Mobile: 0982827763</p>
            </Col>
          </Row>
        </Card>

        <p className="text-muted small mb-2">Start off with a simpler version:</p>
        
        {/* Simple Card chuẩn khung phác thảo */}
        <SimpleCard item={cardItem} />
      </div>

      {/* Phần 5: Simple Website Demo */}
      <div className="p-3 mb-4 border rounded bg-light">
        <div className="border bg-white shadow-sm">
          <div className="p-4 text-center bg-warning bg-opacity-75">
            <div className="bg-white p-3 d-inline-block shadow-sm mb-2">
              <img src={fptLogo} alt="FPT Logo" style={{ maxHeight: '45px' }} />
            </div>
            <div>
              <a href="#home" className="text-dark text-decoration-none mx-2">Home</a>
              <a href="#about" className="text-dark text-decoration-none mx-2">About</a>
              <a href="#contact" className="text-dark text-decoration-none mx-2">Contact</a>
            </div>
          </div>
          <div className="p-4 text-center">
            <h4 className="fw-bold">About</h4>
            <p className="text-muted">This is the about section of the website.</p>
            <h4 className="fw-bold mt-4">Contact</h4>
            <p className="text-muted">For any inquiries, please contact us at example@example.com.</p>
          </div>
          <div className="text-center py-3 text-white border-top" style={{ backgroundColor: '#e59400' }}>
           <small>© 2023 Website. All rights reserved.</small>
</div>
        </div>
      </div>

    </Container>
  );
}