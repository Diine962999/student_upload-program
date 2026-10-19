const students = [];

function addStudent(name, matricNo, level, department) {
  const student = {
    name: name,
    matricNo: matricNo,
    level: level,
    department: department
  };

  students.push(student);
  console.log(`${name} was added.`);
}

function displayStudentNames() {
  if (students.length === 0) {
    console.log("No students have been added.");
    return;
  }

  console.log("Students:");

  for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i].name}`);
  }
}

function removeLastStudent() {
  if (students.length === 0) {
    console.log("There is no student to remove.");
    return;
  }

  const removedStudent = students.pop();
  console.log(`${removedStudent.name} was removed.`);
}

// Example usage
addStudent("Ada Okafor", "CSC/2026/001", 100, "Computer Science");
addStudent("Tunde Bello", "ENG/2026/014", 200, "Engineering");

displayStudentNames();

removeLastStudent();

displayStudentNames();
