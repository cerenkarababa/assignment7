
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import useCartStore from "../store/cartStore";

export default function NavBar({ theme, onToggleTheme }) {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  // Select only the total cart quantity from Zustand.
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  function handleLogout() {
    logoutUser();
    navigate("/");
  }

  return (
    <nav>
      <h2>MyShop</h2>

      <div>
        <NavLink to="/">Home</NavLink>
        {" | "}

        <NavLink to="/products">Products</NavLink>
        {" | "}

        <NavLink to="/cart">Cart ({cartCount})</NavLink>
        {" | "}

        {user ? (
          <>
            <span>{user.username}</span>
            {" | "}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}

        {" | "}

        <button onClick={onToggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
}
