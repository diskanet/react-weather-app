import React from "react";

export const InfoBlock = ({ label, value }) => {
  return (
    <div className="info-block flex flex-1">
      <div className="info-block__icon"></div>
      <div className="info-block__data">
        <div className="info-block__label">
          <h2>{label}</h2>
        </div>
        <div className="info-block__value">
          <span>{value}</span>
        </div>
      </div>
    </div>
  );
};
