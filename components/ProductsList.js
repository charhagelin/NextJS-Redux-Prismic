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
    const products = this.props.data.filter(product => {
      return product.type === "products";
    });
    return Object.keys(products).map(key => {
      const productId = products[key].id;
      const product = products[key].data;
      console.log("productID:", productId);
      return (
        <ul key={productId}>
          <li>{RichText.asText(product.title)}</li>
          <li>{RichText.asText(product.description)}</li>
          <img alt="cover" src={product.image.url} />
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
