import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard/ProductCard";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      {isLoading ? <div>Loading...</div> : products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}

export default App;
