import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  if (cartItems.length === 0) {
    return <h3>Your cart is empty</h3>;
  }

  return (
    <div>
      <h3>
        Cart ({totalItems} items) - ${totalPrice.toFixed(2)}
      </h3>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #ccc",
            padding: "10px 0",
          }}
        >
          <span>
            {item.title.slice(0, 40)}... (x{item.quantity})
          </span>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
