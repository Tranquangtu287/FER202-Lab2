//cái này ex5-ex10
// import React from 'react';
// import Slot2Home from './slot2/Slot2Home';

// export default function App() {
//   return (
//     <div>
//       <Slot2Home />
//     </div>
//   );
// }

//cái này của StudentsCard
// import React from 'react';
// import "./App.css";

// import { Container, Row, Col } from "react-bootstrap";

// import img1 from "./images/img1.png";
// import img2 from "./images/img2.png";
// import img3 from "./images/img3.png";

// function App() {
//   const students = [
//     {
//       id: 1,
//       name: "Loan",
//       age: 20,
//       image: img1,
//     },
//     {
//       id: 2,
//       name: "Ly",
//       age: 25,
//       image: img2,
//     },
//     {
//       id: 3,
//       name: "Lương",
//       age: 28,
//       image: img3,
//     },
//   ];

//   return (
//     <div>
//       <h3>Danh sách Sinh Viên</h3>
//       <Container className="mt-5">
        

//         <Row>
//           {students.map((student) => (
//             <Col md={4} key={student.id}>
//               <img
//                 src={student.image}
//                 alt={student.name}
//                 width="150"
//               />

//               <p>
//                 ID: {student.id} - Name: {student.name} - Age: {student.age}
//               </p>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default App;


//bai pizza
import React from 'react';
import Ex10plus from './slot4/Ex10plus'; // Điều chỉnh đường dẫn thư mục cho đúng với chỗ bạn đặt file nhé

function App() {
  return (
    <div>
      <Ex10plus />
    </div>
  );
}

export default App;