let students = [];
let studentId = 1;


document.getElementById('addStudentBtn').addEventListener('click', () => {
  const name = document.getElementById('studentName').value.trim();
  const grade = parseFloat(document.getElementById('studentGrade').value);
  if (name && !isNaN(grade)) {
    students.push({ id: studentId++, name, grade });
    displayStudents();
    document.getElementById('studentName').value = '';
    document.getElementById('studentGrade').value = '';
  }
});


function displayStudents() {
  const tbody = document.querySelector('#studentsTable tbody');
  tbody.innerHTML = '';
  students.forEach(student => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.grade}</td>
      <td>
        <button onclick="editStudent(${student.id})">Edit</button>
        <button onclick="deleteStudent(${student.id})">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}


function deleteStudent(id) {
  students = students.filter(student => student.id !== id);
  displayStudents();
}


function editStudent(id) {
  const student = students.find(s => s.id === id);
  const newGrade = prompt(`Enter new grade for ${student.name}:`, student.grade);
  if (newGrade !== null) {
    student.grade = parseFloat(newGrade);
    displayStudents();
  }
}


document.getElementById('calculateAverageBtn').addEventListener('click', () => {
  if (students.length === 0) return alert('No students added.');
  const avg = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
  document.getElementById('averageResult').textContent = `Class Average: ${avg.toFixed(2)}`;
});


document.getElementById('findTopStudentBtn').addEventListener('click', () => {
  if (students.length === 0) return alert('No students added.');
  const topStudent = students.reduce((prev, curr) => curr.grade > prev.grade ? curr : prev);
  document.getElementById('topStudentResult').textContent =
    `Top Student: ${topStudent.name} with Grade ${topStudent.grade}`;
});


document.getElementById('applyFilterBtn').addEventListener('click', () => {
  const searchName = document.getElementById('searchName').value.trim().toLowerCase();
  const filterGrade = parseFloat(document.getElementById('filterGrade').value);

  let filteredStudents = students;

  if (searchName) {
    filteredStudents = filteredStudents.filter(s => s.name.toLowerCase().includes(searchName));
  }

  if (!isNaN(filterGrade)) {
    filteredStudents = filteredStudents.filter(s => s.grade >= filterGrade);
  }

  displayStudents(filteredStudents);
});


function displayStudents(list = students) {
  const tbody = document.querySelector('#studentsTable tbody');
  tbody.innerHTML = '';
  list.forEach(student => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.grade}</td>
      <td>
        <button onclick="editStudent(${student.id})">Edit</button>
        <button onclick="deleteStudent(${student.id})">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}