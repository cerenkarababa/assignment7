
import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <h2>MyShop</h2>

      <div>
        <NavLink to="/">Home</NavLink>
        {" | "}
        <NavLink to="/products">Products</NavLink>
        {" | "}
        <NavLink to="/cart">Cart</NavLink>
        {" | "}
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}
