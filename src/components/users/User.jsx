import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

class User extends Component {
  componentDidMount() {
    console.log(this.props.match.params);
    this.props.getUser(this.props.match.params.login);
  }

  static propTyypes = {
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool,
  };

  render() {
    const {
      name,
      login,
      avatar_url,
      html_url,
      location,
      bio,
      company,
      blog,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-ligth'>
          Back To Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fas-times-circle thect-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt='Avatar'
              className='round-img'
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>{login && <Fragment>Username: {login}</Fragment>}</li>
              <li>{company && <Fragment>Company: {company}</Fragment>}</li>
              <li>{blog && <Fragment>Website: {blog}</Fragment>}</li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Follower: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-danger'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
      </Fragment>
    );
  }
}

export default User;
