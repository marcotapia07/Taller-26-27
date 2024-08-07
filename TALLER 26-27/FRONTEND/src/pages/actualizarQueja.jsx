// src/pages/ActualizarQueja.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ActualizarQueja = () => {
  const { id } = useParams();
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    const fetchQueja = async () => {
      try {
        const response = await fetch(`/api/quejas/${id}`);
        const data = await response.json();
        setDescripcion(data.descripcion);
      } catch (error) {
        console.error('Error al obtener queja:', error);
      }
    };

    fetchQueja();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`/api/quejas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descripcion }),
      });
      alert('Queja actualizada con éxito');
    } catch (error) {
      console.error('Error al actualizar queja:', error);
    }
  };

  return (
    <div>
      <h1>Actualizar Queja</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Descripción:
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </label>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default ActualizarQueja;
