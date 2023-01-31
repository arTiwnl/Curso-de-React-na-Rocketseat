import React, {useState, useEffect} from 'react';
import './style.css'

import { Card } from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState('Valor Inicial');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState ({ name: '', avatar: ''})

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

useEffect(() => {
    /*fetch('https://api.github.com/users/artiwnl')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })

    })*/

    async function fetchData(){
      const response = await fetch('https://api.github.com/users/artiwnl');
      const data = await response.json();
      
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });

      
    }
    fetchData();

},[]); // toda vez q tiver alteração no estado dentro do array, o useeffect será chamado, se tiver vazio será somente ao iniciar a página

  return (
    <div className='container'>

    <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil"></img>
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

