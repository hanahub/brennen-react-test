import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodoDetail } from '../../action/Todo';
import Loading from '../__layout/loading'

class TodoDetail extends Component {

  componentDidMount() {
    this.props.fetchTodoDetail(this.props.match.params.todoId);
  }

  render() {
    console.log(this.props)
    if (this.props.data.loading) return <Loading/>

    let { todo } = this.props.data;
    
    return (
      <div className="col-md-12 col-lg-10">
        <p>User Id : {todo.userId}</p>
        <p>Todo Id : {todo.id}</p>
        <p>Todo Title : {todo.title}</p>
        <p>Todo Completed : {todo.completed ? 'Yes' : 'No'}</p>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state.todoDetail
  }), {
    fetchTodoDetail
  }
)(TodoDetail)
