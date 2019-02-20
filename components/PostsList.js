import React, { Component } from "react";
import { Link, RichText, Date } from "prismic-reactjs";
import { bindActionCreators } from "redux";
import { fetchAllPrismic } from "../actions/prismicAction";
import { connect } from "react-redux";

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchAllPrismic();
  }
  //spara ner datan i posts i en const för att sedan använda
  renderPosts() {
    return (
      <div>
        {this.props.posts &&
          Object.keys(this.props.posts).map(key => {
            const posts = this.props.posts[key];
            const data = this.props.posts[key].data;
            console.log("data", data);
            return (
              <ul key={posts.id}>
                <li>{RichText.asText(data.title)}</li>
                <li>{RichText.asText(data.description)}</li>
                <img alt="cover" src={data.image.url} />
              </ul>
            );
          })}
      </div>
    );
  }

  render() {
    console.log("fetch", this.props.posts);
    return (
      <div>
        <h3>header</h3>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllPrismic }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
