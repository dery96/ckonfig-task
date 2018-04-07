import React from "react";

export default function SummaryLabel({ title, value }) {
  return (
    <span className="box">
      <span>{title}</span>
      <span>{value}</span>
    </span>
  );
}
