
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

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
        <NavLink to="/cart">Cart</NavLink>
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
      </div>
    </nav>
  );
}
