import "../styles/CenteredPopup.css";

export default function CenteredPopup({ initialPopupVisibile, children }) {
  return (
    <div
      className={"popup-border-wrapper " + (initialPopupVisibile && "active")}
    >
      <div className="centered-popup">{children}</div>
    </div>
  );
}
