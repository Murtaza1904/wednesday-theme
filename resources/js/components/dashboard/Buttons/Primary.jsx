export default function Primary({ children, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`btn btn-primary ${className}`}
        >
            {children}
        </button>
    );
}
