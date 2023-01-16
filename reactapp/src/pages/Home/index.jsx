import React, {useState} from 'react';
import './style.css'

import { Card } from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState('Valor Inicial');


  return (
    <div className='container'>
    <h1>Lista de Presença</h1>
    <p> Nome : {studentName}</p>
    <input type="text" placeholder="Digite seu nome..."
    onChange={e => setStudentName(e.target.value)}
    />
    <button type="button">Adicionar</button>

    <Card name="Arthur" time="10:55:25" />
    <Card name="Letícia" time="11:00:10" />
    
   </div>
  )
}

