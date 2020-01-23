import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { fetchTodos } from '../../action/Todo';
import Loading from '../__layout/loading'

class ListTodo extends Component {
  componentDidMount(){
    this.props.fetchTodos();
  }
  render() {
    if(this.props.todos.loading) return <Loading/>
    var list = this.props.todos.map((item, key)=>{
      return (
        <tr key={key}>
          <td> {item.userId} </td>
          <td> {item.id} </td>
          <td> {item.title} </td>
          <td> {item.completed} </td>
          <td>
            <Link to={`/todos/${item.id}`}><button className="btn btn-outline-primary">View</button></Link>
          </td>
        </tr>
      )
    })
    return (
      <div className="col-md-12 col-lg-12">
        <div className="card mb-4">
          <div className="card-block">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr style={{textAlign:'center'}}>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {list}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos
  }),{
    fetchTodos
  }
)(ListTodo)
