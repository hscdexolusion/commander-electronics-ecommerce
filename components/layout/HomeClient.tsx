"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import CartDrawer from "@/components/ecommerce/CartDrawer";
import { products } from "@/data/products";
import ProductCard from "@/components/ecommerce/ProductCard";
import { useCart } from "@/context/CartContext";
import Footer from "@/components/layout/Footer";

export default function HomeClient() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <Navbar setCartOpen={setCartOpen} cartCount={cartCount} />
      
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="flex flex-col">

        {/* HERO */}
        <section className="flex items-center justify-center text-center px-6 py-28">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">
              Power Your Work With{" "}
              <span className="text-red-600">Professional Electrical Tools</span>
            </h2>

            <p className="text-zinc-400 text-lg mb-8">
              High-quality tools, equipment, and accessories for electricians and technicians.
            </p>

            <div className="flex gap-6 justify-center">
              <button className="bg-red-600 px-6 py-3 rounded-md font-semibold">
                Shop Now
              </button>

              <button className="border border-zinc-700 px-6 py-3 rounded-md">
                Browse Categories
              </button>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-10">Shop by Category</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">⚡ Power Tools</div>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">🔌 Electrical Parts</div>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">🧰 Tool Kits</div>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">🔋 Accessories</div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-10">Featured Products</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}