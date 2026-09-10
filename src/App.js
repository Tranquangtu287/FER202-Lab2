import React, { useState } from 'classnames' ? null : useState;

// ==================== PHẦN 2: STUDENT MANAGEMENT CLASSES (ES6) ====================
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Hi, I am ${this.name}, ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, scores) {
    super(name, age);
    this.scores = scores; // array of grades
  }
  calculateAverage() {
    if (this.scores.length === 0) return 0;
    const sum = this.scores.reduce((acc, score) => acc + score, 0);
    return (sum / this.scores.length).toFixed(1);
  }
  getFullInfo() {
    return `${this.introduce()} - Average Score: ${this.calculateAverage()}`;
  }
}

export default function App() {
  // ==================== PHẦN 1: EXERCISE 4 (Của cậu) ====================
  const people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
  ];

  const firstTeen = people.find(p => p.age >= 10 && p.age <= 20);
  const allTeens = people.filter(p => p.age >= 10 && p.age <= 20);
  const isEveryTeen = people.every(p => p.age >= 10 && p.age <= 20);
  const isSomeTeen = people.some(p => p.age >= 10 && p.age <= 20);

  const array = [1, 2, 3, 4];
  const sumArray = array.reduce((acc, curr) => acc + curr, 0);

  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  const sumAges = ages.reduce((total, age) => total + age, 0);
  const sortedAges = [...ages].sort((a, b) => b - a);

  const retailCompanies = companies
    .filter(comp => comp.category === "Retail")
    .map(comp => ({ ...comp, start: comp.start + 1 }));


  // ==================== PHẦN 2: STUDENT MANAGEMENT LOGIC (ES6) ====================
  const studentData = new Student("Alex", 20, [8, 9, 7, 10, 6]);

  // 3. Rest Parameter
  const createScores = (...args) => args;
  const restScores = createScores(8, 9, 10);

  // 4. Destructuring
  const { name, age } = studentData;

  // 5. Spread Operator
  const mergedScores = [...studentData.scores, 9, 10];

  // 6. Array Methods
  const passingScores = studentData.scores.filter(score => score >= 8);
  const formattedScores = studentData.scores.map(score => `Score: ${score}`);
  const totalScoreSum = studentData.scores.reduce((acc, score) => acc + score, 0);

  // 7. Promise
  const [evaluationResult, setEvaluationResult] = useState("Click button to evaluate...");

  const evaluateStudent = () => {
    setEvaluationResult("Evaluating...");
    const avg = parseFloat(studentData.calculateAverage());
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (avg >= 8) resolve("Excellent Student");
        else reject("Need Improvement");
      }, 800);
    });
    promise
      .then(res => setEvaluationResult(`Result: ${res}`))
      .catch(err => setEvaluationResult(`Result: ${err}`));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '900px', margin: 'auto', background: '#f4f6f8' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>FPT University - Exercise 4 & ES6 Assignment</h1>
      
      {/* PHẦN 1: EXERCISE 4 BASIC */}
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', marginBottom: '25px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: '8px' }}>1. Exercise 4: JSX and ES6 Solutions</h2>
        
        <h3>People Analysis</h3>
        <p><b>First teenager:</b> {firstTeen ? firstTeen.name : 'None'}</p>
        <p><b>Every person is teenager?</b> {isEveryTeen.toString()}</p>
        <p><b>Some person is teenager?</b> {isSomeTeen.toString()}</p>

        <h3>Array Reduce</h3>
        <p><b>Sum of [1, 2, 3, 4] using reduce:</b> {sumArray}</p>

        <h3>Companies & Ages</h3>
        <p><b>Sum of all ages:</b> {sumAges}</p>
        <p><b>Sorted ages (descending):</b> {sortedAges.join(', ')}</p>

        <h4>Retail Companies (Start incremented by 1):</h4>
        {retailCompanies.map((c, index) => (
          <div key={index} style={{ border: '1px solid #ddd', margin: '5px 0', padding: '10px', borderRadius: '4px', background: '#fafafa' }}>
            <p style={{ margin: '2px 0' }}><b>Name:</b> {c.name}</p>
            <p style={{ margin: '2px 0' }}><b>Category:</b> {c.category}</p>
            <p style={{ margin: '2px 0' }}><b>Start:</b> {c.start}</p>
            <p style={{ margin: '2px 0' }}><b>End:</b> {c.end}</p>
          </div>
        ))}
      </div>

      {/* PHẦN 2: STUDENT MANAGEMENT ES6 ASSIGNMENT */}
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#28a745', borderBottom: '2px solid #28a745', paddingBottom: '8px' }}>2. Assignment: Student Management (ES6)</h2>
        
        <div style={{ background: '#f9f9f9', padding: '10px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #28a745' }}>
          <p><b>1 & 2. Person & Student Classes:</b> {studentData.getFullInfo()}</p>
        </div>
        
        <div style={{ background: '#f9f9f9', padding: '10px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #28a745' }}>
          <p><b>3. Rest Parameter:</b> createScores(8, 9, 10) -> [{restScores.join(', ')}]</p>
        </div>

        <div style={{ background: '#f9f9f9', padding: '10px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #28a745' }}>
          <p><b>4. Destructuring:</b> Name: <b>{name}</b>, Age: <b>{age}</b></p>
        </div>

        <div style={{ background: '#f9f9f9', padding: '10px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #28a745' }}>
          <p><b>5. Spread Operator:</b> Merged scores: [{mergedScores.join(', ')}]</p>
        </div>

        <div style={{ background: '#f9f9f9', padding: '10px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #28a745' }}>
          <p><b>6. Array Methods:</b></p>
          <ul style={{ margin: '5px 0' }}>
            <li>Filter (passing scores &gt;= 8): [{passingScores.join(', ')}]</li>
            <li>Map: [{formattedScores.join(', ')}]</li>
            <li>Reduce (total sum): {totalScoreSum}</li>
          </ul>
        </div>

        <div style={{ background: '#f9f9f9', padding: '10px', margin: '10px 0', borderRadius: '5px', borderLeft: '4px solid #28a745' }}>
          <p><b>7. Promise Evaluation:</b> <b>{evaluationResult}</b></p>
          <button 
            onClick={evaluateStudent} 
            style={{ padding: '8px 15px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Run Promise Evaluation
          </button>
        </div>
      </div>
    </div>
  );
}