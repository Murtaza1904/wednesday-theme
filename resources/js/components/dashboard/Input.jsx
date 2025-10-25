export default function Primary({ ref, type="text", className = "", id, placeholder }) {
    return (
        <input
            ref={ref}
            type={type}
            className={`form-control ${className}`}
            id={id}
            placeholder={placeholder}
        />
    );
}
