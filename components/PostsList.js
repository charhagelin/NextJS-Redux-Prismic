import React, { Component } from "react";
import { Link, RichText, Date } from "prismic-reactjs";
import { bindActionCreators } from "redux";
import { fetchAllPrismic } from "../actions/prismicAction";
import { connect } from "react-redux";

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchAllPrismic();
  }

  renderPosts() {
    if (!this.props.data.length) return <p>Loading...</p>;
    const posts = this.props.data.filter(post => {
      return post.type === "post";
    });
    return Object.keys(posts).map(key => {
      const postId = posts[key].id;
      const post = posts[key].data;
      console.log("postID:", postId);
      return (
        <ul key={postId}>
          <li>{RichText.asText(post.title)}</li>
          <li>{RichText.asText(post.description)}</li>
          <img alt="cover" src={post.image.url} />
        </ul>
      );
    });
  }
  render() {
    return (
      <div>
        <p>header</p>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllPrismic }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
