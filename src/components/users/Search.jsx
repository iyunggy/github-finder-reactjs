import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({ text: "" });
    console.log("masuk submit", this.state.text);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search User....'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type='submit' className='btn btn-dark btn-block' />
        </form>
        {this.props.showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUser}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
