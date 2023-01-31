import React, {useState} from 'react';
import './style.css'

import { Card } from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState('Valor Inicial');
  const [students, setStudents] = useState([]);

  function handleAddStudent (){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }

  return (
    <div className='container'>

    <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong> Arthur Carvalho</strong>
          <img src="https://github.com/artiwnl.png" alt="Foto de Perfil"></img>
        </div>
      </header>

    <input type="text" placeholder="Digite seu nome..."
    onChange={e => setStudentName(e.target.value)}
    />
    <button type="button" onClick={handleAddStudent}>Adicionar</button>

    {
      students.map(student => (
      <Card
         key={student.time} //tem que ser único
         name={student.name}
         time={student.time}
         /> 
      ))
      
    }
    
   </div>
  )
}

