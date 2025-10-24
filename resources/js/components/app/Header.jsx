import { useStateContext } from "../../contexts/ContextProvider";
import Breadcrumb from "./Breadcrumb";
import axiosClient from "../../axios-client";
import { NavLink } from "react-router-dom";
import { headerConfig } from "../../config/header.config";

export default function Header({ toggleSidebar }) {
  const { user, setUser, setToken } = useStateContext();

  const logout = (event) => {
    event.preventDefault();
    axiosClient.post("/auth/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  const handleMenuAction = (action) => {
    if (action === "logout") logout(new Event("click"));
  };

  return (
    <header className="header header-sticky p-0 mb-4">
      <div className="container-fluid border-bottom px-4">
        <button
          className="header-toggler"
          type="button"
          style={{ marginInlineStart: "-14px" }}
          onClick={toggleSidebar}
        >
          <i className="bi bi-list"></i>
        </button>

        <ul className="header-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-bell icon icon-lg"></i>
            </a>
          </li>
        </ul>

        <ul className="header-nav">
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <li className="nav-item dropdown">
            <button
              className="btn btn-link nav-link py-2 px-2 d-flex align-items-center"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
            >
              <i className="icon icon-lg theme-icon-active bi bi-circle-half pe-3"></i>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              style={{ "--cuiDropdownMinWidth": "8rem" }}
            >
              <li>
                <button className="dropdown-item d-flex align-items-center" type="button">
                  <i className="bi bi-sun pe-3"></i> Light
                </button>
              </li>
              <li>
                <button className="dropdown-item d-flex align-items-center" type="button">
                  <i className="bi bi-moon-stars pe-3"></i> Dark
                </button>
              </li>
              <li>
                <button className="dropdown-item d-flex align-items-center active" type="button">
                  <i className="bi bi-circle-half pe-3"></i> Auto
                </button>
              </li>
            </ul>
          </li>

          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link py-0 pe-0"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar avatar-md">
                <img className="avatar-img" src={user.avatar} alt="user avatar" />
              </div>
            </a>

            <div className="dropdown-menu dropdown-menu-end pt-0">
              <div className="dropdown-header bg-body-tertiary text-body-secondary fw-semibold my-2">
                <div className="fw-semibold">Account</div>
              </div>

              {headerConfig.profileMenu.map((item, idx) => {
                if (item.type === "divider")
                  return <div key={idx} className="dropdown-divider"></div>;

                if (item.type === "link")
                  return (
                    <NavLink
                      key={idx}
                      to={item.to}
                      className={({ isActive }) =>
                        "dropdown-item" + (isActive ? " active" : "")
                      }
                    >
                      <i className={`${item.icon} pe-2`}></i> {item.label}
                    </NavLink>
                  );

                if (item.type === "action")
                  return (
                    <button
                      key={idx}
                      className="dropdown-item"
                      onClick={() => handleMenuAction(item.action)}
                    >
                      <i className={`${item.icon} pe-2`}></i> {item.label}
                    </button>
                  );
              })}
            </div>
          </li>
        </ul>
      </div>
      <Breadcrumb />
    </header>
  );
}
