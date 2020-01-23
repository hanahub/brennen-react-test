import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import restricted from './restricted';
import Layout from './screens/__layout/layout';

/* Components Example */
import TodoList from './screens/todo'
import TodoDetail from './screens/todo/detail'
import Login from './screens/login'


class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/login" component={restricted(Login)} />
          <Route exact path="/" component={restricted(TodoList)} />
          <Route path="/todos/:todoId" component={restricted(TodoDetail)} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
