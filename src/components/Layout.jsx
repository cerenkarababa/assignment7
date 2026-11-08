
import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 MyShop. All rights reserved.</p>
      </footer>
    </>
  );
}
