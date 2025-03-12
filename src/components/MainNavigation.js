import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../store/menu-context";
import { motion } from "framer-motion";

export const AVAILABLE_PATHS = {
  "/": "Start",
  "/home": "Home",
  "/education": "Education",
  "/fitness": "Fitness",
  "/games": "Games",
};

export default function MainNavigation() {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <header className="navbar">
      <nav>
        <ul>
          <motion.li key="menu-button" whileHover={{ scale: 1.2 }}>
            <button onClick={toggleMenu}>Menu</button>
          </motion.li>
          {Object.entries(AVAILABLE_PATHS).map(([path, value]) => (
            <motion.li whileHover={{ scale: 1.2 }} key={value}>
              <NavLink to={path}>{value}</NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
