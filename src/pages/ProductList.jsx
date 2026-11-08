import { fetchProducts } from "../api/productsApi";
import useFetch from "../hooks/useFetch";

export default function ProductList() {
  const { data, loading, error } = useFetch(fetchProducts, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Our Products</h1>

      <div>
        {data.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              width="100"
            />
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}