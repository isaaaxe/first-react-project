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
      <Button click={handleHome}>Let's Begin</Button>
    </main>
  );
}
