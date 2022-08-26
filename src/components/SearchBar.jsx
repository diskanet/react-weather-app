import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <form onSubmit={this.props.weatherMethod}>
        <input type="text" name="city" placeholder="Enter city..." />
        <button>Find</button>
      </form>
    );
  }
}

export default SearchBar;
