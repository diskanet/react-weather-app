import React, { Component } from "react";

class InfoRow extends Component {
  render() {
    return (
      <div className="info-row">
        <h2 className="info-row__label">{this.props.label}</h2>
        <span className="info-row__value">{this.props.value}</span>
      </div>
    );
  }
}

export default InfoRow;
