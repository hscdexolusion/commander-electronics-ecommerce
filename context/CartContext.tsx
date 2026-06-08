"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  cartCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  cartTotal: number;
};


const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
  if (typeof window === "undefined") return [];

  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
});


        //CART COUNT
        const cartCount = cart.reduce(
          (sum, item) => sum + item.quantity,
          0
        );

  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // REMOVE ITEM
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // CLEAR CART
  const clearCart = () => setCart([]);

  //INCREASE & DECREASE QUANTITY
  const increaseQty = (id: number) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQty = (id: number) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};


    //TOTAL CALCULATION
    const cartTotal = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  return (
    <CartContext.Provider
      value={{ 
        cart, 
        cartCount,
        cartTotal,
        addToCart, 
        removeFromCart, 
        clearCart, 
        increaseQty, 
        decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}