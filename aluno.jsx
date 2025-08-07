import React, { useState, useEffect } from 'react';
import { Dumbbell } from 'lucide-react';

export default function AlunoPage() {
  const [exercises, setExercises] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('Maria Oliveira');

  useEffect(() => {
    // Simulação de dados como se viessem do backend
    const allExercises = [
      {
        name: 'Supino Reto',
        videoUrl: 'https://www.youtube.com/watch?v=QW4rYBSG258',
        instructions: '3 séries de 12 repetições com carga moderada.',
        group: 'Peito',
        student: 'Maria Oliveira'
      },
      {
        name: 'Agachamento Livre',
        videoUrl: 'https://www.youtube.com/watch?v=U3HlEF_E9fo',
        instructions: '4 séries de 10 repetições. Cuidado com a postura.',
        group: 'Pernas',
        student: 'Carlos Souza'
      }
    ];

    const filtered = allExercises.filter(ex => ex.student === selectedStudent);
    setExercises(filtered);
  }, [selectedStudent]);

  return (
    <div style={{ minHeight: '100vh', background: '#1a1a1a', color: '#fff', padding: '1.5rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Dumbbell size={24} /> Olá, {selectedStudent}
      </h1>

      {exercises.length === 0 ? (
        <p style={{ color: '#ccc' }}>Nenhum exercício atribuído para você.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#ccc' }}>Seu treino de hoje:</h3>
          {exercises.map((ex, index) => (
            <div key={index} style={{ background: '#333', padding: '1rem', borderRadius: '0.5rem' }}>
              <h4 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{ex.name}</h4>
              <p style={{ fontSize: '0.875rem', color: '#bbb' }}>Grupo: {ex.group}</p>
              <p style={{ fontSize: '0.875rem', color: '#aaa' }}>Instruções: {ex.instructions}</p>
              <a href={ex.videoUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#4dabf7', fontSize: '0.875rem' }}>Assistir vídeo</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
