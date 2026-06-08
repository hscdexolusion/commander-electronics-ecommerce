"use client";

import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductCard({ id, name, price }: Product) {
  const { addToCart } = useCart();

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-red-600 transition">

      <div className="h-40 bg-zinc-800 rounded-md mb-4 flex items-center justify-center text-zinc-500">
        Product Image
      </div>

      <h4 className="font-semibold mb-1">{name}</h4>

      <p className="text-red-500 font-bold mb-3">${price}</p>

      <button
        onClick={() => addToCart({ id, name, price })}
        className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-md text-sm font-semibold"
      >
        Add to Cart
      </button>

    </div>
  );
}