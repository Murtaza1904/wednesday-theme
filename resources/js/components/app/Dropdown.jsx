import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Dropdown({ children }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-transparent p-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="bi bi-three-dots-vertical"></i>
      </button>
      <div className="dropdown-menu dropdown-menu-end">{children}</div>
    </div>
  );
}

Dropdown.Item = function DropdownItem({ to, onClick, children, danger = false }) {
  const className = `dropdown-item ${danger ? "text-danger" : ""}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
};
Dropdown.Item.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  danger: PropTypes.bool,
};
