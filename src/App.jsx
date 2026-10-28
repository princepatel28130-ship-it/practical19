import { useState } from "react";

function App() {
const [students, setStudents] = useState([
{ id: 1, name: "Anjali", course: "React" },
{ id: 2, name: "kalpit", course: "Java" },
{ id: 3, name: "kunj", course: "Python" },
{ id: 4, name: "anjee", course: "Web Development" },
]);

function deleteStudent(id) {
setStudents(students.filter((student) => student.id !== id));
}

return (
<div style={{ textAlign: "center", margin: "30px" }}> <h1>Student Management</h1>


  {students.length === 0 ? (
    <p>No students available.</p>
  ) : (
    students.map((student) => (
      <div
        key={student.id}
        style={{
          border: "1px solid gray",
          padding: "10px",
          margin: "10px auto",
          maxWidth: "400px",
        }}
      >
        <h3>{student.name}</h3>
        <p>Course: {student.course}</p>

        <button onClick={() => deleteStudent(student.id)}>
          Delete
        </button>
      </div>
    ))
  )}
</div>


);
}

export default App;
