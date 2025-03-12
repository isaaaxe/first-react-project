import { useContext } from "react";
import { MenuContext } from "../store/menu-context";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { AVAILABLE_PATHS } from "./MainNavigation";
import { NavLink } from "react-router-dom";

export default function MenuModal({ className }) {
  const { closeMenu } = useContext(MenuContext);
  return createPortal(
    <>
      <div className="backdrop" onClick={closeMenu} />
      <motion.div
        className={className}
        initial={{ opacity: 0, x: -210 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -210 }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <ul>
          {Object.entries(AVAILABLE_PATHS).map(([path, value]) => (
            <motion.li whileHover={{ scale: 1.2 }} key={value}>
              <NavLink to={path} onClick={closeMenu}>
                {value}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>,
    document.getElementById("modal")
  );
}
