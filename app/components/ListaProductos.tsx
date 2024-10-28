'use client';

import { useState, useEffect } from 'react';

interface Producto {
  codigo: string;
  nombre: string;
  precio: number;
}

const ListaProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch('/api/productos');
      const data = await response.json();
      setProductos(data);
    };
    fetchProductos();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.codigo}>
            {`Código: ${producto.codigo} - Nombre: ${producto.nombre} - Precio: $${producto.precio}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;
