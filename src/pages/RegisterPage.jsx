import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";
import InputField from "../components/InputField";
import "./RegisterPage.css";

export default function RegisterPage({ setUser }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
  fullName: "Koushik Madaboni",
  phone: "9876543210",
  email: "koushikmadaboni@gmail.com",
  password: "Koushik@123",
  company: "PopX",
  isAgency: "yes"
});

  const isDisabled = useMemo(() => {
    return (
      !form.fullName.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.password.trim()
    );
  }, [form]);

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
      name: form.fullName,
      email: form.email,
      phone: form.phone,
      company: form.company,
      isAgency: form.isAgency === "yes",
      bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
    });

    navigate("/account");
  };

  return (
    <AppShell>
      <form className="register-page" onSubmit={handleSubmit}>
        <h1 className="register-title">Create your PopX account</h1>

        <div className="register-fields">
          <InputField
            label="Full Name"
            required
            value={form.fullName}
            onChange={handleChange("fullName")}
            placeholder="Marry Doe"
          />

          <InputField
            label="Phone number"
            required
            value={form.phone}
            onChange={handleChange("phone")}
            placeholder="Marry Doe"
          />

          <InputField
            label="Email address"
            required
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            placeholder="Marry Doe"
          />

          <InputField
            label="Password"
            required
            type="password"
            value={form.password}
            onChange={handleChange("password")}
            placeholder="Marry Doe"
          />

          <InputField
            label="Company name"
            value={form.company}
            onChange={handleChange("company")}
            placeholder="Marry Doe"
          />
        </div>

        <div className="agency-section">
          <p className="agency-label">
            Are you an Agency?<span className="agency-required">*</span>
          </p>

          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.isAgency === "yes"}
                onChange={handleChange("isAgency")}
              />
              Yes
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.isAgency === "no"}
                onChange={handleChange("isAgency")}
              />
              No
            </label>
          </div>
        </div>

        <div className="register-button-wrap">
          <button
            type="submit"
            className={isDisabled ? "register-button disabled-button" : "register-button active-button"}
            disabled={isDisabled}
          >
            Create Account
          </button>
        </div>
      </form>
    </AppShell>
  );
}