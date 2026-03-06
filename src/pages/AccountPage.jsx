import { Navigate, useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";
import "./AccountPage.css";

export default function AccountPage({ user, setUser }) {
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <AppShell>
      <div className="account-page">
        <div className="account-header">
          <h1 className="account-title">Account Settings</h1>
          <button
            className="logout-button"
            onClick={() => {
              setUser(null);
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>

        <div className="account-body">
          <div className="profile-row">
            <div className="profile-image-wrap">
              <img
                className="profile-image"
                src="https://i.pravatar.cc/150?img=32"
                alt="Profile"
              />
              <div className="camera-badge">📷</div>
            </div>

            <div className="profile-info">
              <h2 className="profile-name">{user.name}</h2>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>

          <p className="profile-bio">{user.bio}</p>
        </div>

        <div className="dashed-line"></div>
        <div className="account-empty-space"></div>
        <div className="dashed-line"></div>
      </div>
    </AppShell>
  );
}