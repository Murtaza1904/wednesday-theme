export default function Secondary({ children, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`btn btn-secondary ${className}`}
        >
            {children}
        </button>
    );
}
