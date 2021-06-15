import React from "react";

export default class SearchBar extends React.Component {
  state = { text: "" };

  onInputChangeHandler = (event) => {
    this.setState({ text: event.target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    // Call a callback from parent here
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmitHandler}>
          <div className="field">
            <label>Youtube Search</label>
            <input
              type="text"
              value={this.state.text}
              onChange={this.onInputChangeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}
