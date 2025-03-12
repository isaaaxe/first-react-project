import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import MenuModal from "../components/MenuModal";
import { useContext } from "react";
import { MenuContext } from "../store/menu-context";
import { AnimatePresence } from "framer-motion";

export default function RootLayout() {
  const { menuIsOpen } = useContext(MenuContext);
  return (
    <>
      <MainNavigation />
      <main className="main-content">
        <AnimatePresence>
          {menuIsOpen && <MenuModal className="menu-modal" />}
        </AnimatePresence>
        <Outlet />
      </main>
    </>
  );
}
