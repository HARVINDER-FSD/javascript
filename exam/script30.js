let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 18 },
    { name: "Charlie", age: 22 }
  ];
  
  let student = students.find(student => student.age === 18);
  console.log(student); // Output: { name: "Bob", age: 18 }
  