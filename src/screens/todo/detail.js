import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPagePostDetailComment } from '../../action/Todo';
import Loading from '../__layout/loading'

class DetailPost extends Component {

  render() {
    if (this.props.posts.loading) return  <Loading/>
    let {dataPost} = this.props.posts;

    return (
      <div className="col-md-12 col-lg-10">
        <div className="card">
          <div className="card-header">Post Id : {dataPost.id} | {dataPost.title} </div>
          <div className="card-block">
            <p>{dataPost.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ posts: state.postDetail}))(DetailPost)
