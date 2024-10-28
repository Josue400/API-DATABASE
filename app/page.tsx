// app/page.tsx
import Link from 'next/link';

const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Menú de Productos</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/crear-producto" className="text-blue-500">
              Crear Producto
            </Link>
          </li>
          <li>
            <Link href="/listar-productos" className="text-blue-500">
              Listar Productos
            </Link>
          </li>
          <li>
            <Link href="/buscar-producto" className="text-blue-500">
              Buscar Producto
            </Link>
          </li>
          <li>
            <Link href="/actualizar-producto" className="text-blue-500">
              Actualizar Producto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Page;
