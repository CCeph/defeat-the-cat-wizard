import "../styles/CenteredPopup.css";

export default function CenteredPopup({ children }) {
  return (
    <div className="popup-border-wrapper">
      <div className="centered-popup">{children}</div>
    </div>
  );
}
