import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

export default function Ex8() {
  // Khai báo state để quản lý form (nếu cần xử lý tương tác)
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container className="py-4">
      <h3 className="fw-bold mb-3">Exercise 8: Demo about Form Control</h3>

      {/* Khung chứa form đặt vé máy bay */}
      <div className="border p-4 rounded bg-white shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
        
        {/* Tiêu đề form kèm nút đóng (x) giả lập */}
        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
          <h4 className="fw-bold mb-0">Form đặt vé máy bay</h4>
          <span className="text-muted fw-bold" style={{ cursor: 'pointer' }}>×</span>
        </div>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          
          {/* Họ tên với Input Group (có icon và chữ vnd ở đuôi theo mẫu) */}
          <Form.Group className="mb-3" controlId="formHoTen">
            <Form.Label className="text-muted small mb-1">Họ tên</Form.Label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="bi bi-person">👤</i>
              </span>
              <Form.Control 
                type="text" 
                placeholder="Họ tên" 
                required 
              />
              <span className="input-group-text bg-light text-muted small">vnd</span>
            </div>
            <Form.Text className="text-muted" style={{ fontSize: '12px' }}>
              Phải nhập 5 ký tự, in hoa...
            </Form.Text>
          </Form.Group>

          {/* Địa chỉ */}
          <Form.Group className="mb-3" controlId="formDiaChi">
            <Form.Label className="text-muted small mb-1">Địa chỉ</Form.Label>
            <Form.Control type="text" placeholder="" />
            <Form.Text className="text-muted" style={{ fontSize: '12px' }}>
              Phải nhập 5 ký tự, in hoa...
            </Form.Text>
          </Form.Group>

          {/* Đi từ & Đến */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formDiTu">
                <Form.Label className="text-muted small mb-1">Đi từ</Form.Label>
                <Form.Select>
                  <option>Hà Nội</option>
                  <option>Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formDen">
                <Form.Label className="text-muted small mb-1">Đến</Form.Label>
                <Form.Select>
                  <option>Hà Nội</option>
                  <option>Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Chọn chiều đi (Khứ hồi) */}
          <Form.Group className="mb-4">
            <Form.Label className="text-muted small mb-1">Chọn chiều đi (Khứ hồi)</Form.Label>
            <div>
              <Form.Check 
                inline
                type="radio"
                label="Đi"
                name="chieuDi"
                id="radioDi"
                defaultChecked
              />
              <Form.Check 
                inline
                type="radio"
                label="Về"
                name="chieuDi"
                id="radioVe"
              />
            </div>
          </Form.Group>

          {/* Nút Đặt vé */}
          <Button variant="primary" type="submit" className="w-100 py-2 fw-semibold">
            Đặt vé
          </Button>

        </Form>
      </div>
    </Container>
  );
}