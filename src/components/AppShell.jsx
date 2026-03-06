import "./AppShell.css";

export default function AppShell({ children }) {
  return (
    <div className="app-shell-wrapper">
      <div className="app-shell-mobile">
        {children}
      </div>
    </div>
  );
}