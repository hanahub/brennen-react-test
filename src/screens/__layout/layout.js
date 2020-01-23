import React, { Component } from 'react';
import Sidebar from './sidebar'
import storage from '../../libs/storage';

class Layout extends Component {
  
  render() {
    const user = storage.get('username');

    return (
      <div className="container-fluid" id="wrapper">
        <div className="row">
          {user ? <Sidebar/> : ''}
          <main className={user ? 'col-xl-10 offset-xl-2 col-lg-9 offset-lg-3 col-md-8 offset-md-4 col-xs-12 pt-3' : 'login col-sm-12 pt-3'}>
            <section className="row">
              <div className="col-sm-12">
                <section className="row">
                  {this.props.children}
                </section>
              </div>
            </section>
          </main>
        </div>
      </div>
    )
  }
}

export default Layout