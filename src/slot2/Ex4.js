import React from 'react';
import { Container, Nav } from 'react-bootstrap';

// 1. Import file ảnh fpt.png vừa lưu vào thư mục
import fptLogo from './fpt.png';

export default function Ex4() {
  return (
    <div>
      {/* Header màu cam FPT */}
      <div className="text-center py-4" style={{ backgroundColor: '#e98b25' }}>
        <div className="bg-white mx-auto p-3 rounded shadow-sm" style={{ maxWidth: '600px' }}>
          
          {/* 2. Thay phần chữ cũ bằng thẻ chứa ảnh fptLogo */}
          <img 
            src={fptLogo} 
            alt="FPT Education Logo" 
            style={{ width: '100%', maxHeight: '110px', objectFit: 'contain' }} 
          />

        </div>
        
        {/* Menu chữ màu trắng */}
        <Nav className="justify-content-center mt-3 gap-3">
          <Nav.Link href="#home" className="text-white fw-semibold">Home</Nav.Link>
          <Nav.Link href="#about" className="text-white fw-semibold">About</Nav.Link>
          <Nav.Link href="#contact" className="text-white fw-semibold">Contact</Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <Container className="my-5 text-center">
        <section id="about" className="mb-5">
          <h3 className="fw-bold">About</h3>
          <p className="text-muted">This is the about section of the website.</p>
        </section>

        <section id="contact">
          <h3 className="fw-bold">Contact</h3>
          <p className="text-muted">For any inquiries, please contact us at example@example.com.</p>
        </section>
      </Container>

      {/* Footer (chữ trắng trên nền vàng nhạt) */}
      <footer className="text-center py-3 text-white" style={{ backgroundColor: '#f2cc8f' }}>
        <small>© 2023 Website. All rights reserved.</small>
      </footer>
    </div>
  );
}