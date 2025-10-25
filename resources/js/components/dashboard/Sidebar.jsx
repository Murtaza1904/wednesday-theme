import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { sidebarConfig } from "@/config/sidebar";

export default function Sidebar({ hidden }) {
  const [narrowUnfoldable, setNarrowUnfoldable] = useState(false);
  const toggleNarrow = () => setNarrowUnfoldable((prev) => !prev);

  const { brand, links } = sidebarConfig;

  return (
    <div
      className={`sidebar sidebar-dark sidebar-fixed border-end ${hidden ? "hide" : ""} ${narrowUnfoldable ? "sidebar-narrow-unfoldable" : ""
        }`}
      id="sidebar"
    >
      <div className="sidebar-header border-bottom text-center py-3">
        <Link to={brand.to || "#"} className="sidebar-brand text-decoration-none text-light">
          {brand.logo ? (
            <img src={brand.logo} alt={brand.name} className="sidebar-brand-full" height="40" />
          ) : (
            <h5 className="sidebar-brand-full mb-0">{brand.name}</h5>
          )}
          <h5 className="sidebar-brand-narrow mb-0">{brand.shortName}</h5>
        </Link>
      </div>
      <ul className="sidebar-nav">
        {links.map((item, idx) =>
          item.isTitle ? (
            <li key={idx} className="nav-title">
              {item.title}
            </li>
          ) : (
            <li key={idx} className="nav-item">
              <NavLink
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                to={item.to}
              >
                <i className={`${item.icon} nav-icon`}></i> {item.title}
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className="sidebar-footer border-top d-none d-md-flex">
        <button className="sidebar-toggler" type="button" onClick={toggleNarrow}></button>
      </div>
    </div>
  );
}
