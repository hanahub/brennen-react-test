import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="page-header row justify-center">
          <div className="col-md-12 col-lg-12">
              <h1 className="float-left text-center text-md-left">My Todos</h1>
          </div>
      </header>
    );
  }
}

export default Header;
