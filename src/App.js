import React, { useState } from 'react';

class Person {
  constructor(ten, tuoi) {
    this.name = ten;
    this.age = tuoi;
  }
  introduce() {
    return `Hi, I am ${this.name}, ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(ten, tuoi, diem) {
    super(ten, tuoi);
    this.scores = diem;
  }
  calculateAverage() {
    if (this.scores.length === 0) return 0;
    let tong = this.scores.reduce((sum, s) => sum + s, 0);
    return (tong / this.scores.length).toFixed(1);
  }
  getFullInfo() {
    return `${this.introduce()} - Average Score: ${this.calculateAverage()}`;
  }
}

export default function App() {
  // Bài Exercise 4 cũ
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

  const retailComps = companies
    .filter(c => c.category === "Retail")
    .map(c => ({ ...c, start: c.start + 1 }));

  // Bài Student Management ES6 mới
  const hs = new Student("Alex", 20, [8, 9, 7, 10, 6]);

  const createScores = (...args) => args;
  const restScores = createScores(8, 9, 10);

  const { name, age } = hs;
  const mergedScores = [...hs.scores, 9, 10];
  const passingScores = hs.scores.filter(s => s >= 8);
  const formattedScores = hs.scores.map(s => `Score: ${s}`);
  const totalScoreSum = hs.scores.reduce((acc, s) => acc + s, 0);

  const [kq, setKq] = useState("Bấm nút để check...");

  const chayPromise = () => {
    setKq("Đang chạy...");
    let avg = parseFloat(hs.calculateAverage());
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (avg >= 8) resolve("Excellent Student");
        else reject("Need Improvement");
      }, 500);
    });
    p.then(res => setKq(res)).catch(err => setKq(err));
  };

  return (
    <div style={{ padding: '15px' }}>
      <h2>Ex4: JSX & ES6 Basic</h2>
      <p>First teen: {firstTeen ? firstTeen.name : 'None'}</p>
      <p>Every person is teen? {isEveryTeen.toString()}</p>
      <p>Some person is teen? {isSomeTeen.toString()}</p>
      <p>Sum array [1,2,3,4]: {sumArray}</p>
      <p>Sum all ages: {sumAges}</p>
      <p>Sorted ages: {sortedAges.join(', ')}</p>

      <h3>Retail Companies:</h3>
      {retailComps.map((c, i) => (
        <div key={i} style={{ border: '1px solid gray', margin: '4px 0', padding: '5px' }}>
          {c.name} - {c.category} - Start: {c.start} - End: {c.end}
        </div>
      ))}

      <hr style={{ margin: '20px 0' }} />

      <h2>Assignment: Student Management</h2>
      <p><b>Student info:</b> {hs.getFullInfo()}</p>
      <p><b>Rest scores:</b> [{restScores.join(', ')}]</p>
      <p><b>Destructuring:</b> Name: {name}, Age: {age}</p>
      <p><b>Spread merged:</b> [{mergedScores.join(', ')}]</p>
      <p><b>Filter (&gt;=8):</b> [{passingScores.join(', ')}]</p>
      <p><b>Map:</b> [{formattedScores.join(', ')}]</p>
      <p><b>Reduce sum:</b> {totalScoreSum}</p>
      <p><b>Promise result:</b> {kq}</p>
      <button onClick={chayPromise}>Run Promise</button>
    </div>
  );
}