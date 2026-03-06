import "./InputField.css";

export default function InputField({
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder
}) {
  return (
    <div className="input-field-group">
      <label className="input-field-label">
        {label}
        {required ? <span className="input-required">*</span> : null}
      </label>
      <input
        className="input-field-control"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}