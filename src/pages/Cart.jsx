
import useCartStore from "../store/cartStore";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const clear = useCartStore((state) => state.clear);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Shopping Cart</h1>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>

          <p>Price: ${item.price}</p>

          <button
            onClick={() => setQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>

          <span> {item.quantity} </span>

          <button
            onClick={() => setQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>

          <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>

          <hr />
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <button onClick={clear}>Clear Cart</button>
    </div>
  );
}
