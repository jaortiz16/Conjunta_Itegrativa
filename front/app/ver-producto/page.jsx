'use client'
import { useState, useEffect } from "react";
import UpdateButton from "../components/UpdateButton";
import Link from "next/link";
import jsPDF from "jspdf";

function generatePDFReport(products) {
  const doc = new jsPDF();
  let y = 20;

  doc.setFontSize(18);
  doc.text("Reporte de Productos", 105, y, { align: "center" });
  y += 10;
  doc.setFontSize(12);
  doc.text(`Fecha del reporte: ${new Date().toLocaleDateString()}`, 105, y, { align: "center" });
  y += 10;

  products.forEach((product) => {
    doc.text(`ID: ${product.id}`, 20, y);
    doc.text(`Nombre: ${product.name}`, 20, y + 5);
    doc.text(`Descripción: ${product.description}`, 20, y + 10);
    doc.text(`Precio: $${product.price}`, 20, y + 15);
    doc.text(`Cantidad: ${product.quantity}`, 20, y + 20);
    doc.text(`Fecha de Creación: ${product.createdAt}`, 20, y + 25);

    y += 35; 
    if (y >= 280) { 
      doc.addPage();
      y = 20;
    }
  });

  doc.save("reporte_productos.pdf");
}

async function searchProductsByName(name) {
  const res = await fetch(`http://localhost:4000/products/search?name=${name}`);
  const data = await res.json();
  return data;
}

async function loadProducts() {
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();
  return data;
}

function VerProductosInventario() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    loadSortedProducts().then(setProducts);
  }, [sortCriteria, sortDirection]);

  const loadSortedProducts = async () => {
    let url = "http://localhost:4000/products/search";
    if (sortCriteria) {
      url += `?orderBy=${sortCriteria}&orderDirection=${sortDirection}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  
  

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      return; 
    }
    searchProductsByName(searchTerm).then(setProducts);
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    loadProducts().then(setProducts);
  };

  const handleSort = (criteria) => {
    if (criteria === sortCriteria) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortDirection("asc");
    }
  };

  const renderSortArrow = (criteria) => {
    if (criteria === sortCriteria) {
      return sortDirection === "asc" ? "↑" : "↓";
    }
    return null;
  };

  return (
    <>
      <Link
        href="/crear-producto"
        className="bg-black text-white py-2 px-4 rounded-md float-right mt-5 mr-5"
      >
        Crear Producto
      </Link>
      <Link
        href="#"
        onClick={() => generatePDFReport(products)}
        className="bg-gray-500 text-white py-2 px-4 rounded-md float-right mt-5 mr-5"
      >
        Generar Reporte
      </Link>
      <div className="container mx-auto mt-16">
        <h1 className="text-2xl font-bold mb-4 text-center">Inventario de Productos</h1>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md mr-2"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400"
          >
            Buscar
          </button>
          <button
            onClick={handleResetSearch}
            className="bg-gray-500 text-white py-2 px-4 rounded-md ml-2 hover:bg-gray-400"
          >
            Limpiar
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-black text-white">
                <th className="px-4 py-2" onClick={() => handleSort("id")}>
                  ID {renderSortArrow("id")}
                </th>
                <th className="px-4 py-2" onClick={() => handleSort("name")}>
                  Nombre {renderSortArrow("name")}
                </th>
                <th className="px-4 py-2">Descripción</th>
                <th className="px-4 py-2" onClick={() => handleSort("price")}>
                  Precio {renderSortArrow("price")}
                </th>
                <th className="px-4 py-2" onClick={() => handleSort("quantity")}>
                  Cantidad {renderSortArrow("quantity")}
                </th>
                <th className="px-4 py-2" onClick={() => handleSort("createdAt")}>
                  Fecha de Creación {renderSortArrow("createdAt")}
                </th>
                <th className="px-4 py-2">Imagen</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-200">
                  <td className="px-4 py-2">{product.id}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">{product.description}</td>
                  <td className="px-4 py-2">${product.price}</td>
                  <td className="px-4 py-2">{product.quantity}</td>
                  <td className="px-4 py-2">{product.createdAt}</td>
                  <td className="px-4 py-2">
                    <img
                      src={product.photoUrl}
                      alt={product.name}
                      className="w-20 h-20 object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <UpdateButton product={product} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default VerProductosInventario;
