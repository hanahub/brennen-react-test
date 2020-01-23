import React from 'react';
// import Loading from '../__layout/loading'

function Login() {
  return (
    <div className="col-md-12 col-lg-12">
      <div className="mb-4">
        <div className="card-block">
          <h2>Login</h2>
          <form>
            <div class="form-group">
              <label class="form-label" for="formUsername">Username</label>
              <input placeholder="Enter username" type="text" class="form-control" autocomplete="off" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
