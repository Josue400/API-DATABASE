// app/page.tsx

import Buscador from '../components/Buscador'; // Asegúrate de que la ruta sea correcta
import CrearProducto from '../components/CrearProducto'; // Asegúrate de que la ruta sea correcta
import ListaProductos from '../components/ListaProductos'; // Asegúrate de que la ruta sea correcta

export default function Home() {
  return (
    <div>
      <h1>Gestión de Productos</h1>
      <CrearProducto />
      <Buscador />
      <ListaProductos />
    </div>
  );
}
