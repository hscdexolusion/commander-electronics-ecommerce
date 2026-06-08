"use client";

import { useCart } from "@/context/CartContext";


export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const { cartTotal } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-zinc-950 border-l border-zinc-800 z-50 transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <h2 className="font-bold">Your Cart</h2>

        <button onClick={onClose} className="text-zinc-400">
          ✕
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-4">
  {cart.length === 0 ? (
    <p className="text-zinc-500">Your cart is empty</p>
  ) : (
    cart.map((item) => (
      <div
        key={item.id}
        className="border border-zinc-800 rounded p-3 flex flex-col gap-3"
      >
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold">{item.name}</p>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-xs"
          >
            Remove
          </button>
        </div>

        <p className="text-red-500 text-sm">
          ${item.price}
        </p>

        <div className="flex items-center gap-3">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>
      </div>

      
    ))
    
  )}
      </div>
      <div className="border-t border-zinc-800 p-4 mt-auto">
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">Total</span>
          <span className="text-red-500 font-bold">
            ${cartTotal.toFixed(2)}
          </span>
        </div>
        <button className="w-full mt-4 bg-red-600 hover:bg-red-700 py-2 rounded-md font-semibold">
          Checkout
        </button>
      </div>
    </div>
  );
}