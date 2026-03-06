import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";
import InputField from "../components/InputField";
import "./LoginPage.css";

export default function LoginPage({ setUser }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const isDisabled = !form.email.trim() || !form.password.trim();

  const handleChange = (key) => (event) => {
    setForm({
      ...form,
      [key]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isDisabled) {
      return;
    }

    setUser({
  name: "Koushik Madaboni",
  email: form.email,
  phone: "+91 9876543210",
  company: "PopX",
  isAgency: true,
  bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
});

    navigate("/account");
  };

  return (
    <AppShell>
      <div className="login-page">
        <h1 className="login-title">Signin to your PopX account</h1>
        <p className="login-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            placeholder="Enter email address"
          />

          <InputField
            label="Password"
            type="password"
            value={form.password}
            onChange={handleChange("password")}
            placeholder="Enter password"
          />

          <button
            type="submit"
            className={isDisabled ? "login-button disabled-button" : "login-button active-button"}
            disabled={isDisabled}
          >
            Login
          </button>
        </form>
      </div>
    </AppShell>
  );
}