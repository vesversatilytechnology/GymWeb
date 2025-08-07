import React, { useState, useEffect } from 'react';
import { Dumbbell, UploadCloud } from 'lucide-react';

export default function PersonalTrainerPage() {
  const [exercise, setExercise] = useState({
    name: '',
    videoUrl: '',
    instructions: '',
    group: '',
    student: ''
  });

  const [exercises, setExercises] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const mockStudents = [
        'João Silva',
        'Maria Oliveira',
        'Carlos Souza',
        'Ana Lima'
      ];
      setStudents(mockStudents);
    };
    fetchStudents();
  }, []);

  const validateExercise = () => {
    return (
      exercise.name &&
      exercise.videoUrl &&
      exercise.instructions &&
      exercise.group &&
      exercise.student
    );
  };

  const resetExercise = () => {
    setExercise({ name: '', videoUrl: '', instructions: '', group: '', student: '' });
  };

  const handleAddExercise = () => {
    if (validateExercise()) {
      setExercises((prev) => [...prev, exercise]);
      resetExercise();
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#1a1a1a', color: '#fff', padding: '1.5rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Dumbbell size={24} /> Painel do Personal Trainer
      </h1>

      <div style={{ background: '#333', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Adicionar novo exercício</h2>

        <select
          value={exercise.student}
          onChange={(e) => setExercise({ ...exercise, student: e.target.value })}
          style={{
            width: '100%',
            padding: '0.5rem',
            marginTop: '1rem',
            backgroundColor: '#2c2c2c',
            color: '#fff',
            border: '1px solid #555',
            borderRadius: '0.25rem',
            appearance: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none'
          }}
        >
          <option value="">Selecione o aluno</option>
          {students.map((student, index) => (
            <option key={index} value={student}>{student}</option>
          ))}
        </select>

        <input
          placeholder="Nome do exercício"
          value={exercise.name}
          onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
          style={{ width: '100%', padding: '0.5rem', marginTop: '1rem' }}
        />

        <input
          placeholder="Link do vídeo (YouTube)"
          value={exercise.videoUrl}
          onChange={(e) => setExercise({ ...exercise, videoUrl: e.target.value })}
          style={{ width: '100%', padding: '0.5rem', marginTop: '1rem' }}
        />

        <input
          placeholder="Grupo muscular (ex: Peito, Pernas...)"
          value={exercise.group}
          onChange={(e) => setExercise({ ...exercise, group: e.target.value })}
          style={{ width: '100%', padding: '0.5rem', marginTop: '1rem' }}
        />

        <textarea
          placeholder="Instruções detalhadas do exercício"
          value={exercise.instructions}
          onChange={(e) => setExercise({ ...exercise, instructions: e.target.value })}
          style={{ width: '100%', padding: '0.5rem', marginTop: '1rem' }}
        />

        <button
          onClick={handleAddExercise}
          style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
        >
          <UploadCloud size={18} /> Atribuir exercício ao aluno
        </button>
      </div>

      {exercises.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#ccc' }}>Exercícios atribuídos:</h3>
          {exercises.map((ex, index) => (
            <div key={index} style={{ background: '#444', padding: '1rem', borderRadius: '0.5rem' }}>
              <h4 style={{ fontWeight: 'bold' }}>{ex.name}</h4>
              <p style={{ fontSize: '0.875rem', color: '#bbb' }}>Aluno: {ex.student}</p>
              <p style={{ fontSize: '0.875rem', color: '#bbb' }}>Grupo: {ex.group}</p>
              <p style={{ fontSize: '0.875rem', color: '#aaa' }}>Instruções: {ex.instructions}</p>
              <a href={ex.videoUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#4dabf7', fontSize: '0.875rem' }}>Ver vídeo</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
