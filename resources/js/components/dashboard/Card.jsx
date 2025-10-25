import PropTypes from "prop-types";

export function Card({ children, className = "" }) {
  return <div className={`card mb-4 ${className}`}>{children}</div>;
}

export function CardHeader({ children, className = "" }) {
  return <div className={`card-header ${className}`}>{children}</div>;
}

export function CardBody({ children, className = "" }) {
  return <div className={`card-body ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return <div className={`card-footer ${className}`}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardHeader.propTypes = CardBody.propTypes = CardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
