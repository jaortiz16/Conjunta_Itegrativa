'use client'
import { useRouter } from 'next/navigation'

function UpdateButton({ product}) {
    const router = useRouter()
  return (
    <button
      onClick={() => router.push("/actualizar-producto/" + product.id)}
      className="bg-black text-white py-2 px-6 rounded-md font-bold hover:bg-white hover:text-black transition duration-300 00"
    >
      Ver detalles
    </button>
  )
}

export default UpdateButton