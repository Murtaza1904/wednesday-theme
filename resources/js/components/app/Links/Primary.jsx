export default function Primary({ children, to, className = "" }) {
    return (
        <Link
            className={`btn btn-primary ${className}`}
            to={to}
        >
            {children}
        </Link>
    );
}
