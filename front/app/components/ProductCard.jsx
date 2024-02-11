"use client";
import { useRouter } from "next/navigation";

function ProductCard({ product }) {
  const router = useRouter();
  return (
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col">
      <img
        src={product.photoUrl}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-gray-500">Precio: ${product.price}</p>
      <p className="text-gray-500">Cantidad: {product.quantity}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => router.push("/actualizar-producto/" + product.id)}
          className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold hover:bg-blue-400 transition duration-300"
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
