import "../styles/CenteredPopup.css";

export default function CenteredPopup({ popupVisibile, children }) {
  return (
    <div
      className={"popup-border-wrapper " + (popupVisibile && "active")}
    >
      <div className="centered-popup">{children}</div>
    </div>
  );
}
