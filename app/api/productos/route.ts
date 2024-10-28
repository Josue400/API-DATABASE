// app/api/productos/route.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const codigo = url.searchParams.get('codigo');

    if (codigo) {
      const producto = await prisma.producto.findMany({
        where: { codigo: codigo },
      });
      return new Response(JSON.stringify(producto), {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      const productos = await prisma.producto.findMany();
      return new Response(JSON.stringify(productos), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al obtener los productos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(request: Request) {
  try {
    const { codigo, nombre, precio } = await request.json();
    const productoActualizado = await prisma.producto.update({
      where: { codigo: codigo },
      data: { nombre, precio },
    });
    return new Response(JSON.stringify(productoActualizado), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al actualizar el producto' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Código para el método POST permanece igual...
export async function POST(request: Request) {
  try {
    const { codigo, nombre, precio } = await request.json();
    const producto = await prisma.producto.create({
      data: { codigo, nombre, precio },
    });
    return new Response(JSON.stringify(producto), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al crear el producto' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

