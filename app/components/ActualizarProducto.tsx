'use client';

import { useState } from 'react';

const ActualizarProducto = () => {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const actualizarProducto = async () => {
    setError('');
    setMensaje('');
    
    // Validar y convertir `precio` a número
    const precioNumber = parseFloat(precio);
    if (isNaN(precioNumber)) {
      setError('Por favor, ingrese un precio válido.');
      return;
    }

    try {
      const response = await fetch('/api/productos', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ codigo, nombre, precio: precioNumber }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar el producto');
      }

      const data = await response.json();
      setMensaje(`Producto ${data.codigo} actualizado con éxito`);

      // Limpiar los campos
      setCodigo('');
      setNombre('');
      setPrecio('');
    } catch (error: any) {
      setError(error.message || 'Error desconocido al actualizar el producto');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        placeholder="Código del producto"
        className="border border-gray-300 p-2"
      />
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre del producto"
        className="border border-gray-300 p-2 ml-2"
      />
      <input
        type="number"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        placeholder="Precio del producto"
        className="border border-gray-300 p-2 ml-2"
      />
      <button onClick={actualizarProducto} className="bg-blue-500 text-white p-2 ml-2">
        Actualizar Producto
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {mensaje && <p className="text-green-500">{mensaje}</p>}
    </div>
  );
};

export default ActualizarProducto;
