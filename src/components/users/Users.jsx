import React, { Component } from "react";
import UsersItem from "./UserItem";

export class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: "Mojombo",
        avatar_url: "http://google.com",
        html_url: "http://google.com",
      },
      {
        id: 2,
        login: "Mojombo",
        avatar_url: "http://google.com",
        html_url: "http://google.com",
      },
      {
        id: 3,
        login: "Mojombo",
        avatar_url: "http://google.com",
        html_url: "http://google.com",
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UsersItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users;
