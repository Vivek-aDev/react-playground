import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../api/fetchProducts";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading products...</p>;
  }

  if (status === "failed") {
    return <p>Error Loading products...</p>;
  }

  return (
    <div>
      {items.map((product) => (
        <li
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            width: "200px",
            textAlign: "center",
            margin: "10px",
            display: "inline-block",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
            cursor: "pointer",
            backgroundColor: "#f9f9f9",
            ":hover": {
              transform: "scale(1.05)",
            },
            ":active": {
              transform: "scale(0.95)",
            },
            ":focus": {
              outline: "none",
            },
          }}
        >
          <img src={product.image} alt={product.title} height={100} />
          <h4>{product.title.slice(0, 30)}...</h4>
          <p>${product.price}</p>
          <button onClick={() => dispatch()}>Add to cart 🛒</button>
        </li>
      ))}
    </div>
  );
};

export default ProductList;
