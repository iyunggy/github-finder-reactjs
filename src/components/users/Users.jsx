import React, { Component } from "react";
import UsersItem from "./UserItem";

export class Users extends Component {

  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map((user) => (
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
