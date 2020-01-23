import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
        <ul className="nav nav-pills flex-column sidebar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/todos"><em className="fa fa-dashboard" /> Todos <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/"><em className="fa fa-power-off" /> Log Out </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
