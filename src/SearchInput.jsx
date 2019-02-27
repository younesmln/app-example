import React, { Component } from "react";

class SearchInput extends Component {
  render() {
    console.log(this.props);
    return (
      <input
        className="search__input"
        type="text"
        placeholder={this.props.InputPlaceholder}
      />
    );
  }
}

export default SearchInput;
