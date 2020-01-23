import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../action/Auth';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    this.props.logout();
    // this.props.history.push("/");
  }

  render() {
    return (
      <nav className="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
        <ul className="nav nav-pills flex-column sidebar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/"><em className="fa fa-dashboard" /> Todos <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login" onClick={this.handleLogout}><em className="fa fa-power-off" /> Log Out </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(
  state => ({
    data: state
  }), {
    logout
  }
)(Sidebar)
