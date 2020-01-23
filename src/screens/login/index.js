import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../action/Auth';
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {username: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.username);
    window.location.href = '/'
  }

  render() {
    return (
      <div className="col-md-12 col-lg-12">
        <div className="mb-4">
          <div className="card-block">
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="form-label">Username</label>
                <input placeholder="Enter username" type="text" className="form-control" value={this.state.username} onChange={this.handleChange} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state
  }), {
    login
  }
)(Login)
