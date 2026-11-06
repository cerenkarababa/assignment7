
const API_URL = "https://fakestoreapi.com/products";

export async function fetchProducts(signal) {
  const response = await fetch(API_URL, { signal });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function fetchProduct(id, signal) {
  const response = await fetch(`${API_URL}/${id}`, { signal });

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}
