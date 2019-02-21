webpackHotUpdate("static\\development\\pages\\posts.js",{

/***/ "./components/PostsList.js":
/*!*********************************!*\
  !*** ./components/PostsList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions_prismicAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/prismicAction */ "./actions/prismicAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var _jsxFileName = "C:\\Users\\Charlotte Hagelin\\Desktop\\nextjs\\components\\PostsList.js";






var PostsList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PostsList, _Component);

  function PostsList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostsList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostsList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchAllPrismic();
    }
  }, {
    key: "renderPosts",
    value: function renderPosts() {
      console.log("le data", this.props.data);
      var posts = this.props.data.filter(function (type) {
        return type === "post";
      });
      console.log("filter", posts);
    }
  }, {
    key: "render",
    value: function render() {
      // console.log("fetch", this.props.posts);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "header"), this.renderPosts());
    }
  }]);

  return PostsList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    fetchAllPrismic: _actions_prismicAction__WEBPACK_IMPORTED_MODULE_8__["fetchAllPrismic"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(PostsList)); // {this.props.posts &&
// Object.keys(this.props.posts).map(key => {
//   const posts = this.props.posts[key];
//   const data = this.props.posts[key].data;
//   console.log("data", data);
// return (
//   <ul key={posts.id}>
//     <li>{RichText.asText(data.title)}</li>
//     <li>{RichText.asText(data.description)}</li>
//     <img alt="cover" src={data.image.url} />
//   </ul>
// );
// })}
// this.props.data.map(posts => {
//   if (posts.type === "post") {
//     console.log("here", posts.data);
// const posts = posts.data;
// console.log("le posts", posts);
// }
// Object.keys(posts.data).map(key => {
//   const posts = posts.data[key];
//   const data = posts.data[key].data;
//   console.log("data", data);
//   return (
//     <ul key={posts.id}>
//       <li>{RichText.asText(data.title)}</li>
//       <li>{RichText.asText(data.description)}</li>
//       <img alt="cover" src={data.image.url} />
//     </ul>
//   );
// });
// })
// this.props.data &&
// Object.keys(this.props.data).map(key => {
//   if (this.props.data[key].type === "post") {
//     const posts = this.props.data[key];
//     const data = this.props.data[key].data;
//     console.log("this", data);
//     return (
//       <p>{posts.id}</p>
// <ul key={posts.id}>
//   <li>{RichText.asText(data.title)}</li>
//   <li>{RichText.asText(data.description)}</li>
//   <img alt="cover" src={data.image.url} />
// </ul>
//     );
//   }
//   {
//     return <p>loading...</p>;
//   }
// });

/***/ })

})
//# sourceMappingURL=posts.js.673f1017bb68dfb0dc64.hot-update.js.map