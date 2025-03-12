import { createContext, useState } from "react";

export const MenuContext = createContext({
  menuIsOpen: null,
  toggleMenu: () => {},
  closeMenu: () => {},
});

export function MenuContextProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen((prevState) => !prevState);
  }

  function closeMenu() {
    setMenuIsOpen(false);
  }

  const contextValue = {
    menuIsOpen,
    toggleMenu,
    closeMenu,
  };

  return <MenuContext value={contextValue}>{children}</MenuContext>;
}
