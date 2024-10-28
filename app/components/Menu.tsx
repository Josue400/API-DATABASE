// app/components/Menu.tsx
'use client';

import Link from 'next/link';

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <a className="text-white hover:text-gray-300">Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/crear-producto">
            <a className="text-white hover:text-gray-300">Crear Producto</a>
          </Link>
        </li>
        <li>
          <Link href="/listar-productos">
            <a className="text-white hover:text-gray-300">Listar Productos</a>
          </Link>
        </li>
        <li>
          <Link href="/buscar-productos">
            <a className="text-white hover:text-gray-300">Buscar Producto</a>
          </Link>
        </li>
        <li>
          <Link href="/actualizar-producto">
            <a className="text-white hover:text-gray-300">Actualizar Producto</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
