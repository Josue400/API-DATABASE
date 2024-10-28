// app/components/BuscadorProductos.tsx
'use client';

import { useState } from 'react';

interface Producto {
  codigo: string;
  nombre: string;
  precio: number;
}

const BuscadorProductos = () => {
  const [codigoBuscar, setCodigoBuscar] = useState('');
  const [productoEncontrado, setProductoEncontrado] = useState<Producto | null>(null);
  const [error, setError] = useState('');

  const buscarProducto = async () => {
    setError('');
    setProductoEncontrado(null);
    try {
      const response = await fetch(`/api/productos?codigo=${codigoBuscar}`);
      if (!response.ok) throw new Error('Producto no encontrado');
      const data = await response.json();
      setProductoEncontrado(data[0]); // Asumiendo que solo se devuelve un producto
    } catch (error) {
      // Verifica si error tiene un mensaje, si no, establece un mensaje genérico
      setError((error as Error).message || 'Ha ocurrido un error inesperado');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={codigoBuscar}
        onChange={(e) => setCodigoBuscar(e.target.value)}
        placeholder="Buscar por código"
        className="border border-gray-300 p-2"
      />
      <button onClick={buscarProducto} className="bg-blue-500 text-white p-2 ml-2">
        Buscar
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {productoEncontrado && (
        <div>
          <h3>Producto Encontrado:</h3>
          <p>{`Código: ${productoEncontrado.codigo}`}</p>
          <p>{`Nombre: ${productoEncontrado.nombre}`}</p>
          <p>{`Precio: $${productoEncontrado.precio}`}</p>
        </div>
      )}
    </div>
  );
};

export default BuscadorProductos;
