import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { fetchTodos } from '../../action/Todo';
import Loading from '../__layout/loading'

class TodoList extends Component {
  componentDidMount(){
    this.props.fetchTodos();
  }
  
  render() {
    if (this.props.data.loading) return <Loading/>
    
    let list = this.props.data.todos.map((item, key) => {
      return (
        <tr key={key} className={item.completed ? 'completed' : 'not-completed'}>
          <td> {item.userId} </td>
          <td> {item.id} </td>
          <td> <Link to={`/todos/${item.id}`}>{item.title}</Link> </td>
          <td> {item.completed ? 'Yes' : 'No'} </td>
          <td>
            <Link to={`/todos/${item.id}`}><button className="btn btn-primary">View</button></Link>
          </td>
        </tr>
      )
    })

    return (
      <div className="col-md-12 col-lg-12">
        <div className="mb-4">
          <div className="card-block">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr style={{textAlign: 'center'}}>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
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
    data: state.todos
  }), {
    fetchTodos
  }
)(TodoList)
