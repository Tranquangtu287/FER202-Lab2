import React from 'react';

function App() {
  // 1. Phần people (Array methods: find, filter, every, some)
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

  // 2. Phần reduce array số
  const array = [1, 2, 3, 4];
  const sumArray = array.reduce((acc, curr) => acc + curr, 0);

  // 3. Phần companies và ages
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

  // Lọc Retail và tăng start lên 1
  const retailCompanies = companies
    .filter(comp => comp.category === "Retail")
    .map(comp => ({ ...comp, start: comp.start + 1 }));

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Exercise 4: JSX and ES6 Solutions</h1>
      
      <h2>1. People Analysis</h2>
      <p>First teenager: {firstTeen ? firstTeen.name : 'None'}</p>
      <p>Every person is teenager? {isEveryTeen.toString()}</p>
      <p>Some person is teenager? {isSomeTeen.toString()}</p>

      <h2>2. Array Reduce</h2>
      <p>Sum of [1, 2, 3, 4] using reduce: {sumArray}</p>

      <h2>3. Companies & Ages</h2>
      <p>Sum of all ages: {sumAges}</p>
      <p>Sorted ages (descending): {sortedAges.join(', ')}</p>

      <h3>Retail Companies (Start incremented by 1):</h3>
      {retailCompanies.map((c, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '5px 0', padding: '10px' }}>
          <p>Name: {c.name}</p>
          <p>Category: {c.category}</p>
          <p>Start: {c.start}</p>
          <p>End: {c.end}</p>
        </div>
      ))}
    </div>
  );
}

export default App;