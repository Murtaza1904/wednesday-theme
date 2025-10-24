import PropTypes from "prop-types";

export function Table({ children }) {
  return <div className="table-responsive rounded">
    <table className="table border mb-0">{children}</table>
  </div>;
}

export function Thead({ children }) {
  return (
    <thead className="fw-semibold text-nowrap">
      {children}
    </thead>
  );
}

export function Tbody({ children }) {
  return <tbody>{children}</tbody>;
}

export function Tr({ children }) {
  return <tr className="align-middle">{children}</tr>;
}

export function Th({ children, align }) {
  return (
    <th className={`bg-body-secondary ${align ? `text-${align}` : ""}`}>
      {children}
    </th>
  );
}

export function Td({ children, align }) {
  return (
    <td className={align ? `text-${align}` : ""}>
      {children}
    </td>
  );
}

export function NoRecord({ colSpan = 1, children }) {
  return (
    <tr className="text-center">
      <td colSpan={colSpan} className="text-danger">
        {children}
      </td>
    </tr>
  );
}

Table.propTypes = {
  children: PropTypes.node,
};
Th.propTypes = Td.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(["start", "center", "end"]),
};
NoRecord.propTypes = {
  colSpan: PropTypes.number,
  children: PropTypes.node,
};
