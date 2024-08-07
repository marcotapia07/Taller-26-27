import React, { useState } from 'react';

const CrearQueja = () => {
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/quejas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descripcion }),
      });
      setDescripcion('');
      alert('Queja creada con éxito');
    } catch (error) {
      console.error('Error al crear queja:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Crear Queja</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Descripción:
          <textarea
            className="w-full border border-gray-300 p-2 rounded-md"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Crear
        </button>
      </form>
    </div>
  );
};

export default CrearQueja;
