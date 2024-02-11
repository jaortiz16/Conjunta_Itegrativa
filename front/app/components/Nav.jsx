import React from 'react';
import Link from 'next/link';
import { FaBox } from 'react-icons/fa'; // Importa el icono de una caja

function Nav() {
  return (
    <nav className='bg-black'> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center text-white text-lg font-semibold">
                        <FaBox className="w-6 h-6 mr-2" /> {/* Agrega el icono de la caja */}
                  Sistema de inventario
                
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 justify-end">
              <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              
                  Inicio
               
              </Link>
              <Link href="/crear-producto" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                
                  Crear Producto
                
              </Link>
              <Link href="/ver-producto" className="bg-white text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition duration-300">
               
                  Ver Productos
              
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
