'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function CrearProducto({ params }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch("http://localhost:4000/products/" + params.id,{
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
          setDescription(data.description);
          setPrice(data.price);
          setQuantity(data.quantity);
          setPhotoUrl(data.photoUrl);
        });
    }
  }, []);

  const router = useRouter();

  const handleDelete = async () => {
    if (params.id) {
      await fetch("http://localhost:4000/products/" + params.id, {
        method: "DELETE",
      });
      router.push("/ver-producto");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      await fetch("http://localhost:4000/products/" + params.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, price, quantity, photoUrl }),
      });
    } else {
      await fetch("http://localhost:4000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, price, quantity, photoUrl }),
      });
    }

    router.push("/ver-producto");
    router.refresh();
  };

  return (
    <>
      <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen">
      <div className="pt-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-black p-8 rounded-md shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Crear Nuevo Producto</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-300 text-sm font-medium mb-2"
          >
            Nombre
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nombre"
            id="name"
            name="name"
            value={name}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-300 text-sm font-medium mb-2"
          >
            Descripción
          </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Descripción"
            id="description"
            name="description"
            value={description}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-300 text-sm font-medium mb-2"
          >
            Precio
          </label>
          <input
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            type="number"
            placeholder="Precio"
            id="price"
            name="price"
            value={price}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-gray-300 text-sm font-medium mb-2"
          >
            Cantidad
          </label>
          <input
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            type="number"
            placeholder="Cantidad"
            id="quantity"
            name="quantity"
            value={quantity}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="photoUrl"
            className="block text-gray-300 text-sm font-medium mb-2"
          >
            URL de la Foto
          </label>
          <input
            onChange={(e) => setPhotoUrl(e.target.value)}
            type="text"
            placeholder="URL de la Foto"
            id="photoUrl"
            name="photoUrl"
            value={photoUrl}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-white text-black py-2 px-6 rounded font-bold hover:bg-gray-200 transition duration-300 mx-auto"
          >
            {params.id ? "Actualizar Producto" : "Crear Producto"}
          </button>
          {params.id && (
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-6 rounded font-bold hover:bg-red-400 transition duration-300 ml-4"
            >
              Eliminar Producto
            </button>
          )}
        </div>
      </form>
      </div>
      </div>
    </>
  );
}

export default CrearProducto;
