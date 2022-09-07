import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/pro-light-svg-icons";

export const TitleRow = ({ title, visibility }) => {
  return (
    <div className="title flex align-center justify-between">
      <h1>{title}</h1>
      <a href="/" className="refresh bounding-32">
        {!!visibility ? <FontAwesomeIcon icon={faArrowsRotate} /> : " "}
      </a>
    </div>
  );
};
