import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Users from "./components/users/Users";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users`);
    this.setState({ users: res.data, loading: false });
  }

  // search user
  searchUser = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ users: res.data.items, loading: false });
    // json = array pencariannya ada di dalam object item
    console.log(text);
  };

  // clear user
  clearUser = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search
            searchUser={this.searchUser}
            clearUser={this.clearUser}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
