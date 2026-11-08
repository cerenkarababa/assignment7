
import { fetchProducts } from "../api/productsApi";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router";

export default function ProductList() {
  const { data, loading, error } = useFetch(fetchProducts, []);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const categories = [...new Set(data.map((product) => product.category))];

  const filteredProducts = data.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  function handleSearch(value) {
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      newParams.set("search", value);
    } else {
      newParams.delete("search");
    }

    setSearchParams(newParams);
  }

  function handleCategory(value) {
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      newParams.set("category", value);
    } else {
      newParams.delete("category");
    }

    setSearchParams(newParams);
  }

  return (
    <div>
      <h1>Our Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => handleCategory(event.target.value)}
      >
        <option value="">All Categories</option>

        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <p>{filteredProducts.length} products found</p>

      <div>
        {filteredProducts.map((product) => (
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

      {filteredProducts.length === 0 && (
        <p>No products found.</p>
      )}
    </div>
  );
}
