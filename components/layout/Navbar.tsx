"use client";

import { useState } from "react";

export default function Navbar({
  setCartOpen,
  cartCount,
}: {
  setCartOpen: (value: boolean) => void;
  cartCount: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-zinc-800 bg-black">
      <div className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">

        <div className="text-red-600 font-bold text-xl">
          ElectroTools ⚡
        </div>

        <nav className="hidden md:flex gap-10 text-zinc-300">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Categories</a>
          <a href="#">Contact</a>
        </nav>

        <div className="flex items-center gap-8">

          {/* CART BUTTON */}
          <button
            onClick={() => setCartOpen(true)}
            className="text-zinc-300 hover:text-white relative"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-6 text-zinc-300">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Categories</a>
          <a href="#">Contact</a>
        </div>
      )}
    </header>
  );
}