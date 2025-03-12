import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function WelcomePage() {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/home");
  }

  return (
    <main id="welcome">
      <h1>Welcome!</h1>
      <p>
        This will be the root page, that will link to home page with one button
      </p>
      <Button click={handleHome}>me im the button</Button>
    </main>
  );
}
