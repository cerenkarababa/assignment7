
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchProduct } from "../api/productsApi";
import useFetch from "../hooks/useFetch";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const loadProduct = useCallback(
    (signal) => fetchProduct(id, signal),
    [id]
  );

  const { data, loading, error } = useFetch(loadProduct, [id]);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data || !data.id) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>

      <h1>{data.title}</h1>

      <img
        src={data.image}
        alt={data.title}
        width="200"
      />

      <h2>${data.price}</h2>

      <p>{data.description}</p>

      <p>Category: {data.category}</p>

      <p>Rating: {data.rating?.rate} / 5</p>

      <button disabled>
        Add to Cart (Coming Soon)
      </button>
    </div>
  );
}
