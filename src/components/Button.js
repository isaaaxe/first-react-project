import classes from "./Button.module.css";
import { motion } from "framer-motion";

export default function Button({ children, click }) {
  return (
    <motion.button
      onClick={click}
      className={classes["button-primary"]}
      whileHover={{ scale: 1.2 }}
    >
      {children}
    </motion.button>
  );
}
