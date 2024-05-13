import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState('');

  const addStudent = () => {
    if (newStudentName.trim() !== '') {
      setStudents([...students, newStudentName]);
      setNewStudentName('');
    }
  };
ss
  const deleteStudent = (index) => {
    const newStudents = [...students];
    newStudents.splice(index, 1);
    setStudents(newStudents);
  };

  return (
    <div className="App">
      <h1>Registro de Estudiantes</h1>
      <input
        type="text"
        value={newStudentName}
        onChange={(e) => setNewStudentName(e.target.value)}
        placeholder="Nombre del Estudiante"
      />
      <button onClick={addStudent}>Agregar Estudiante</button>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
            <button onClick={() => deleteStudent(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;