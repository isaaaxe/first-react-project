import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="home-page">
        <p>Hello, my name is Isaac Choong</p>
        <p>This is my first React project I have made to practice</p>
        <p>the skills I have learnt over a React course I had found on</p>
        <strong>
          <a href="https://www.udemy.com/">Udemy</a>
        </strong>
      </section>
      <section className="home-page-sections">
        <div className="sideBySide">
          <Link to="/education">
            <motion.div
              className="quarter-section"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#a67b5b",
                color: "#f4ede1",
              }}
            >
              <strong>
                <p>Education</p>
              </strong>
              <div>
                <p>A brief summary of my education so far</p>
              </div>
            </motion.div>
          </Link>
          <Link to="/games">
            <motion.div
              className="quarter-section"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#a67b5b",
                color: "#f4ede1",
              }}
            >
              <strong>
                <p>Game</p>
              </strong>
              <div>
                <p>A game I made to try out some React Hooks</p>
              </div>
            </motion.div>
          </Link>
        </div>
        <div className="sideBySide">
          <Link to="/fitness">
            <motion.div
              className="quarter-section"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#a67b5b",
                color: "#f4ede1",
              }}
            >
              <strong>
                <p>Fitness</p>
              </strong>
              <div>
                <p>My attempt at making an IPPT score tracker</p>
              </div>
            </motion.div>
          </Link>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <motion.div
              className="quarter-section"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#a67b5b",
                color: "#f4ede1",
              }}
            >
              <p>
                <strong>Coming soon!</strong>
              </p>
              <div>
                <p>Placeholder for a 4th page idea</p>
              </div>
            </motion.div>
          </a>
        </div>
      </section>
    </>
  );
}
