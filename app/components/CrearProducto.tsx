// app/components/CrearProducto.tsx
'use client';

import { useState } from 'react';

const CrearProducto = () => {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const crearProducto = async () => {
    setError('');
    setMensaje('');
    try {
      const response = await fetch('/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ codigo, nombre, precio: parseFloat(precio) }),
      });
      if (!response.ok) throw new Error('Error al crear el producto');
      const data = await response.json();
      setMensaje(`Producto ${data.codigo} creado con éxito`);
    } catch (error) { const mensajeError = error instanceof Error ? error.message : 'Error desconocido';
      setError(mensajeError);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        placeholder="Código"
        className="border border-gray-300 p-2"
      />
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        className="border border-gray-300 p-2 ml-2"
      />
      <input
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        placeholder="Precio"
        className="border border-gray-300 p-2 ml-2"
      />
      <button onClick={crearProducto} className="bg-green-500 text-white p-2 ml-2">
        Crear Producto
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {mensaje && <p className="text-green-500">{mensaje}</p>}
    </div>
  );
};

export default CrearProducto;
