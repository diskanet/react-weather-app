import React from "react";


export const InfoBlock = ({ icon, label, value, metric }) => {
  return (
    <div className="info-block flex flex-1 gap-12 align-center">
      <div className="icon bounding-64">
        {icon}
      </div>
      <div className="info-block__data">
        <div className="info-block__label">{label}</div>
        <div className="info-block__value">
          {value}
          <span>{metric}</span>{" "}
        </div>
      </div>
    </div>
  );
};

