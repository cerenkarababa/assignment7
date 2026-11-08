
import { Outlet } from "react-router";
import NavBar from "./NavBar";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Layout() {
  const [theme, setTheme] = useLocalStorage("myshop-theme", "light");

  const isDark = theme === "dark";

  const pageStyle = {
    backgroundColor: isDark ? "#222222" : "#ffffff",
    color: isDark ? "#ffffff" : "#222222",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={pageStyle}>
      <NavBar
        theme={theme}
        onToggleTheme={() =>
          setTheme(isDark ? "light" : "dark")
        }
      />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 MyShop. All rights reserved.</p>
      </footer>
    </div>
  );
}
