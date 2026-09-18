// import React, { useState } from 'react'

// function Counter() {
//     const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h2>Number:{count}</h2>
//       <button onClick={() => setCount(count + 5)}>Increase</button>
//       <button onClick={() => setCount(count - 2)}>Decrease</button>
//     </div>
//   )
// }

// export default Counter
// import React, { useState } from 'react'

// function Toggle() {
//     const[isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//         <h3>Hello State</h3>
//      <button onClick={() => setIsOpen(!isOpen)}>
//            {isOpen ? "Open" : "Close"}
//      </button>
      
//     </div>
//   )
// }

// export default Toggle;
// import React from 'react'

// function DemoState() {
//     const[name, setName] = useState("")
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default DemoState chua lam 
import React, { useState } from 'react';

function DemoState() {
  const [user, setUser] = useState({
    name: "T",
    age: 20
  });

  const changeAge = () => {
    setUser({
      ...user,//giữ nguyên thuộc tính khác 
      age: user.age + 2,
    });
  };

  return (
    <div>
      <p>Ten : {user.name}</p>
      <p>Tuoi : {user.age}</p>
      <button onClick={changeAge}>changeAge</button>
    </div>
  );
}

export default DemoState; // <--- Cực kỳ quan trọng: Phải có dòng này để App.js nhận diện được component!


