import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";
import "./WelcomePage.css";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <AppShell>
      <div className="welcome-page">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to PopX</h1>
          <p className="welcome-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="welcome-buttons">
          <button
            className="primary-button"
            onClick={() => navigate("/register")}
          >
            Create Account
          </button>

          <button
            className="secondary-button"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </AppShell>
  );
}