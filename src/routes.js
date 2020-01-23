import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import restricted from './restricted';
import Layout from './screens/__layout/layout';

/* Components Example */
import TodoList from './screens/todo'
import TodoDetail from './screens/todo/detail'
import Login from './screens/login'
import storage from './libs/storage';

class Routes extends Component {
  render() {
    const user = storage.get('username');

    return (
      <Layout>
        {user ?
          <Switch>
            <Route exact path="/" component={restricted(TodoList)} />
            <Route path="/todos/:todoId" component={restricted(TodoDetail)} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        :
          <Switch>
            <Route exact path="/login" component={restricted(Login)} />
            <Route render={() => <Redirect to="/login" />} />
          </Switch>}
      </Layout>
    );
  }
}

export default Routes;


