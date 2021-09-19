import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Users from "./components/users/Users";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
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

  // Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => {
      this.setState({alert: null})
    }, 5000);
  };

  render() {
    const { users, loading, alert } = this.state;

    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />
          <Search
            searchUser={this.searchUser}
            clearUser={this.clearUser}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
