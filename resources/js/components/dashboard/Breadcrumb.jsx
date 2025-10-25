import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const formatSegment = (segment) => {
    return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
  };

  return (
    <div className="container-fluid px-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb my-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {pathnames.map((segment, index) => {
            const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;

            return isLast ? (
              <li key={index} className="breadcrumb-item active" aria-current="page">
                <span>{formatSegment(segment)}</span>
              </li>
            ) : (
              <li key={index} className="breadcrumb-item">
                <Link to={routeTo}>{formatSegment(segment)}</Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
