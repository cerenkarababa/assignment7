
import { create } from "zustand";

function getSavedCart() {
  try {
    const savedCart = localStorage.getItem("myshop-cart");
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    console.error("Could not load cart:", error);
    return [];
  }
}

const useCartStore = create((set) => ({
  items: getSavedCart(),

  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
          },
        ],
      };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  setQuantity: (id, quantity) =>
    set((state) => ({
      items:
        quantity < 1
          ? state.items.filter((item) => item.id !== id)
          : state.items.map((item) =>
              item.id === id ? { ...item, quantity } : item
            ),
    })),

  clear: () => set({ items: [] }),
}));

// Save cart changes to localStorage outside React components.
useCartStore.subscribe((state) => {
  try {
    localStorage.setItem("myshop-cart", JSON.stringify(state.items));
  } catch (error) {
    console.error("Could not save cart:", error);
  }
});

export default useCartStore;
