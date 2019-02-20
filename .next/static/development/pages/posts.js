((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\posts.js"],{

/***/ "./actions/prismicAction.js":
/*!**********************************!*\
  !*** ./actions/prismicAction.js ***!
  \**********************************/
/*! exports provided: fetchAllPrismic, fetchPrismic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllPrismic", function() { return fetchAllPrismic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPrismic", function() { return fetchPrismic; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./actions/types.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-javascript */ "./node_modules/prismic-javascript/dist/prismic-javascript.min.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_1__);


var apiEndpoint = "https://pristastic.cdn.prismic.io/api/v2";
var accessToken = process.env.PRISMIC_ACCESS_TOKEN;
function fetchAllPrismic() {
  return function (dispatch) {
    prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.api(apiEndpoint, {
      accessToken: accessToken
    }).then(function (api) {
      api.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.Predicates.at("document.type", "post")).then(function (response) {
        dispatch(fetchPrismic(response.results));
      }).catch(function (error) {
        throw error;
      });
    });
  };
}
function fetchPrismic(posts) {
  console.log("fetching", posts);
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRISMIC"],
    posts: posts
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./actions/types.js":
/*!**************************!*\
  !*** ./actions/types.js ***!
  \**************************/
/*! exports provided: FETCH_PRISMIC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRISMIC", function() { return FETCH_PRISMIC; });
var FETCH_PRISMIC = "FETCH_PRISMIC";

/***/ }),

/***/ "./components/PostsList.js":
/*!*********************************!*\
  !*** ./components/PostsList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions_prismicAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/prismicAction */ "./actions/prismicAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






var _jsxFileName = "C:\\Users\\Charlotte Hagelin\\Desktop\\nextjs\\components\\PostsList.js";






var PostsList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostsList, _Component);

  function PostsList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PostsList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PostsList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PostsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchAllPrismic();
    } //spara ner datan i posts i en const för att sedan använda

  }, {
    key: "renderPosts",
    value: function renderPosts() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, this.props.posts && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(this.props.posts).map(function (key) {
        var posts = _this.props.posts[key];
        var data = _this.props.posts[key].data;
        console.log("data", data);
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
          key: posts.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_7__["RichText"].asText(data.title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_7__["RichText"].asText(data.description)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          alt: "cover",
          src: data.image.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      console.log("fetch", this.props.posts);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "header"), this.renderPosts());
    }
  }]);

  return PostsList;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])({
    fetchAllPrismic: _actions_prismicAction__WEBPACK_IMPORTED_MODULE_9__["fetchAllPrismic"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(PostsList)); // {this.state.doc &&
//     Object.keys(this.state.doc).map(key => {
//       const posts = this.state.doc[key];
//       const data = this.state.doc[key].data;
//       console.log("data", data);
//       return (
//         <ul key={posts.id}>
//           <li>{RichText.asText(data.title)}</li>
//           <li>{RichText.asText(data.description)}</li>
//           <img alt="cover" src={data.image.url} />
//         </ul>
//       );
//     })}
//   state = {
//     doc: null
//   };
//   // Link Resolver
//   linkResolver(doc) {
//     // Define the url depending on the document type
//     if (doc.type === "post") {
//       return "/post/" + doc.uid;
//     }
//     // Default to homepage
//     return "/";
//   }
//   componentDidMount() {
//     const apiEndpoint = "https://pristastic.cdn.prismic.io/api/v2";
//     const accessToken =
//       "MC5YR3ZDVUJVQUFDY0FDdllO.de-_vUbvv73vv71z77-977-977-9C--_ve-_ve-_vUIsdxsd77-9Au-_ve-_ve-_ve-_vQLvv73vv73vv70RAzw-";
//     Prismic.api(apiEndpoint, { accessToken }).then(api => {
//       api
//         .query(Prismic.Predicates.at("document.type", "post"))
//         .then(response => {
//           if (response) {
//             this.setState({ doc: response.results });
//           }
//         });
//     });
//   }

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-polyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-polyfill.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(self) {

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fposts&absolutePagePath=C%3A%5CUsers%5CCharlotte%20Hagelin%5CDesktop%5Cnextjs%5Cpages%5Cposts.js!./":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fposts&absolutePagePath=C%3A%5CUsers%5CCharlotte%20Hagelin%5CDesktop%5Cnextjs%5Cpages%5Cposts.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/posts", function() {
      var page = __webpack_require__(/*! ./pages/posts.js */ "./pages/posts.js")
      if(true) {
        module.hot.accept(/*! ./pages/posts.js */ "./pages/posts.js", function() {
          if(!next.router.components["/posts"]) return
          var updatedPage = __webpack_require__(/*! ./pages/posts.js */ "./pages/posts.js")
          next.router.update("/posts", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_9c75acfe53428ad7a9fa ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9c75acfe53428ad7a9fa */ "dll-reference dll_9c75acfe53428ad7a9fa"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/prismic-javascript/dist/prismic-javascript.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/prismic-javascript/dist/prismic-javascript.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! cross-fetch/polyfill */ "./node_modules/cross-fetch/dist/browser-polyfill.js")):undefined}("undefined"!=typeof self?self:this,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=20)}([function(t,e,n){"use strict";e.a=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";e.__esModule=!0;var r=n(5),i=n(4),o=n(6),u=n(12);e.PREVIEW_COOKIE="io.prismic.preview",e.EXPERIMENT_COOKIE="io.prismic.experiment";var a=function(){function t(t,e,n){this.data=t,this.masterRef=t.refs.filter(function(t){return t.isMasterRef})[0],this.experiments=new r.Experiments(t.experiments),this.bookmarks=t.bookmarks,this.httpClient=e,this.options=n,this.refs=t.refs,this.tags=t.tags,this.types=t.types}return t.prototype.form=function(t){var e=this.data.forms[t];return e?new i.SearchForm(e,this.httpClient):null},t.prototype.everything=function(){var t=this.form("everything");if(!t)throw new Error("Missing everything form");return t},t.prototype.master=function(){return this.masterRef.ref},t.prototype.ref=function(t){var e=this.data.refs.filter(function(e){return e.label===t})[0];return e?e.ref:null},t.prototype.currentExperiment=function(){return this.experiments.current()},t.prototype.query=function(t,n,r){void 0===r&&(r=function(){});var i="function"==typeof n?{options:{},callback:n}:{options:n||{},callback:r},o=i.options,a=i.callback,s=this.everything();for(var f in o)s=s.set(f,o[f]);if(!o.ref){var c="";this.options.req?c=this.options.req.headers.cookie||"":"undefined"!=typeof window&&window.document&&(c=window.document.cookie||"");var l=u.default.parse(c),h=l[e.PREVIEW_COOKIE],p=this.experiments.refFromCookie(l[e.EXPERIMENT_COOKIE]);s=s.ref(h||p||this.masterRef.ref)}return t&&s.query(t),s.submit(a)},t.prototype.queryFirst=function(t,e,n){var r="function"==typeof e?{options:{},callback:e}:{options:e||{},callback:n||function(){}},i=r.options,o=r.callback;return i.page=1,i.pageSize=1,this.query(t,i).then(function(t){var e=t&&t.results&&t.results[0];return o(null,e),e}).catch(function(t){throw o(t),t})},t.prototype.getByID=function(t,e,n){var r=e||{};return r.lang||(r.lang="*"),this.queryFirst(o.default.at("document.id",t),r,n)},t.prototype.getByIDs=function(t,e,n){var r=e||{};return r.lang||(r.lang="*"),this.query(o.default.in("document.id",t),r,n)},t.prototype.getByUID=function(t,e,n,r){var i=n||{};if("*"===i.lang)throw new Error("FORDIDDEN. You can't use getByUID with *, use the predicates instead.");return i.page||(i.page=1),this.queryFirst(o.default.at("my."+t+".uid",e),i,r)},t.prototype.getSingle=function(t,e,n){var r=e||{};return this.queryFirst(o.default.at("document.type",t),r,n)},t.prototype.getBookmark=function(t,e,n){var r=this.data.bookmarks[t];return r?this.getByID(r,e,n):Promise.reject("Error retrieving bookmarked id")},t.prototype.previewSession=function(t,e,n,r){var i=this;return new Promise(function(o,u){i.httpClient.request(t,function(a,s){if(a)r&&r(a),u(a);else if(s){if(s.mainDocument)return i.getByID(s.mainDocument,{ref:t}).then(function(t){if(t){var i=e(t);r&&r(null,i),o(i)}else r&&r(null,n),o(n)}).catch(u);r&&r(null,n),o(n)}})})},t}();e.default=a},function(t,e,n){"use strict";e.__esModule=!0;var r=n(2),i=n(11),o=function(){function t(t,e){if(this.options=e||{},this.url=t,this.options.accessToken){var n="access_token="+this.options.accessToken;this.url+=(t.indexOf("?")>-1?"&":"?")+n}this.apiDataTTL=this.options.apiDataTTL||5,this.httpClient=new i.default(this.options.requestHandler,this.options.apiCache,this.options.proxyAgent)}return t.prototype.get=function(t){var e=this;return this.httpClient.cachedRequest(this.url,{ttl:this.apiDataTTL}).then(function(n){var i=new r.default(n,e.httpClient,e.options);return t&&t(null,i),i}).catch(function(e){throw t&&t(e),e})},t}();e.default=o},function(t,e,n){"use strict";e.__esModule=!0;var r=function(){function t(t,e){this.id=t,this.api=e,this.fields={}}return t.prototype.set=function(t,e){return this.fields[t]=e,this},t.prototype.ref=function(t){return this.set("ref",t)},t.prototype.query=function(t){return this.set("q",t)},t.prototype.pageSize=function(t){return this.set("pageSize",t)},t.prototype.fetch=function(t){return console.warn("Warning: Using Fetch is deprecated. Use the property `graphQuery` instead."),this.set("fetch",t)},t.prototype.fetchLinks=function(t){return console.warn("Warning: Using FetchLinks is deprecated. Use the property `graphQuery` instead."),this.set("fetchLinks",t)},t.prototype.graphQuery=function(t){return this.set("graphQuery",t)},t.prototype.lang=function(t){return this.set("lang",t)},t.prototype.page=function(t){return this.set("page",t)},t.prototype.after=function(t){return this.set("after",t)},t.prototype.orderings=function(t){return this.set("orderings",t)},t.prototype.url=function(){var e=this;return this.api.get().then(function(n){return t.toSearchForm(e,n).url()})},t.prototype.submit=function(e){var n=this;return this.api.get().then(function(r){return t.toSearchForm(n,r).submit(e)})},t.toSearchForm=function(t,e){var n=e.form(t.id);if(n)return Object.keys(t.fields).reduce(function(e,n){var r=t.fields[n];return"q"===n?e.query(r):"pageSize"===n?e.pageSize(r):"fetch"===n?e.fetch(r):"fetchLinks"===n?e.fetchLinks(r):"graphQuery"===n?e.graphQuery(r):"lang"===n?e.lang(r):"page"===n?e.page(r):"after"===n?e.after(r):"orderings"===n?e.orderings(r):e.set(n,r)},n);throw new Error("Unable to access to form "+t.id)},t}();e.LazySearchForm=r;var i=function(){function t(t,e){for(var n in this.httpClient=e,this.form=t,this.data={},t.fields)t.fields[n].default&&(this.data[n]=[t.fields[n].default])}return t.prototype.set=function(t,e){var n=this.form.fields[t];if(!n)throw new Error("Unknown field "+t);var r=""===e||void 0===e?null:e,i=this.data[t]||[];return i=n.multiple?r?i.concat([r]):i:r?[r]:i,this.data[t]=i,this},t.prototype.ref=function(t){return this.set("ref",t)},t.prototype.query=function(t){if("string"==typeof t)return this.query([t]);if(t instanceof Array)return this.set("q","["+t.join("")+"]");throw new Error("Invalid query : "+t)},t.prototype.pageSize=function(t){return this.set("pageSize",t)},t.prototype.fetch=function(t){console.warn("Warning: Using Fetch is deprecated. Use the property `graphQuery` instead.");var e=t instanceof Array?t.join(","):t;return this.set("fetch",e)},t.prototype.fetchLinks=function(t){console.warn("Warning: Using FetchLinks is deprecated. Use the property `graphQuery` instead.");var e=t instanceof Array?t.join(","):t;return this.set("fetchLinks",e)},t.prototype.graphQuery=function(t){return this.set("graphQuery",t)},t.prototype.lang=function(t){return this.set("lang",t)},t.prototype.page=function(t){return this.set("page",t)},t.prototype.after=function(t){return this.set("after",t)},t.prototype.orderings=function(t){return t?this.set("orderings","["+t.join(",")+"]"):this},t.prototype.url=function(){var t=this.form.action;if(this.data){var e=t.indexOf("?")>-1?"&":"?";for(var n in this.data)if(this.data.hasOwnProperty(n)){var r=this.data[n];if(r)for(var i=0;i<r.length;i++)t+=e+n+"="+encodeURIComponent(r[i]),e="&"}}return t},t.prototype.submit=function(t){return this.httpClient.cachedRequest(this.url()).then(function(e){return t&&t(null,e),e}).catch(function(e){throw t&&t(e),e})},t}();e.SearchForm=i},function(t,e,n){"use strict";e.__esModule=!0;var r=function(){function t(t){this.data={},this.data=t}return t.prototype.id=function(){return this.data.id},t.prototype.ref=function(){return this.data.ref},t.prototype.label=function(){return this.data.label},t}();e.Variation=r;var i=function(){function t(t){this.data={},this.data=t,this.variations=(t.variations||[]).map(function(t){return new r(t)})}return t.prototype.id=function(){return this.data.id},t.prototype.googleId=function(){return this.data.googleId},t.prototype.name=function(){return this.data.name},t}();e.Experiment=i;var o=function(){function t(t){t&&(this.drafts=(t.drafts||[]).map(function(t){return new i(t)}),this.running=(t.running||[]).map(function(t){return new i(t)}))}return t.prototype.current=function(){return this.running.length>0?this.running[0]:null},t.prototype.refFromCookie=function(t){if(!t||""===t.trim())return null;var e=t.trim().split(" ");if(e.length<2)return null;var n=e[0],r=parseInt(e[1],10),i=this.running.filter(function(t){return t.googleId()===n&&t.variations.length>r})[0];return i?i.variations[r].ref():null},t}();e.Experiments=o},function(t,e,n){"use strict";e.__esModule=!0;var r="at",i="not",o="missing",u="has",a="any",s="in",f="fulltext",c="similar",l="number.gt",h="number.lt",p="number.inRange",d="date.before",y="date.after",m="date.between",g="date.day-of-month",v="date.day-of-month-after",w="date.day-of-month-before",_="date.day-of-week",k="date.day-of-week-after",b="date.day-of-week-before",T="date.month",I="date.month-before",E="date.month-after",O="date.year",x="date.hour",A="date.hour-before",M="date.hour-after",j="geopoint.near";function q(t){if("string"==typeof t)return'"'+t+'"';if("number"==typeof t)return t.toString();if(t instanceof Date)return t.getTime().toString();if(t instanceof Array)return"["+t.map(function(t){return q(t)}).join(",")+"]";throw new Error("Unable to encode "+t+" of type "+typeof t)}var S={near:function(t,e,n,r){return"["+j+"("+t+", "+e+", "+n+", "+r+")]"}},C={before:function(t,e){return"["+d+"("+t+", "+q(e)+")]"},after:function(t,e){return"["+y+"("+t+", "+q(e)+")]"},between:function(t,e,n){return"["+m+"("+t+", "+q(e)+", "+q(n)+")]"},dayOfMonth:function(t,e){return"["+g+"("+t+", "+e+")]"},dayOfMonthAfter:function(t,e){return"["+v+"("+t+", "+e+")]"},dayOfMonthBefore:function(t,e){return"["+w+"("+t+", "+e+")]"},dayOfWeek:function(t,e){return"["+_+"("+t+", "+q(e)+")]"},dayOfWeekAfter:function(t,e){return"["+k+"("+t+", "+q(e)+")]"},dayOfWeekBefore:function(t,e){return"["+b+"("+t+", "+q(e)+")]"},month:function(t,e){return"["+T+"("+t+", "+q(e)+")]"},monthBefore:function(t,e){return"["+I+"("+t+", "+q(e)+")]"},monthAfter:function(t,e){return"["+E+"("+t+", "+q(e)+")]"},year:function(t,e){return"["+O+"("+t+", "+e+")]"},hour:function(t,e){return"["+x+"("+t+", "+e+")]"},hourBefore:function(t,e){return"["+A+"("+t+", "+e+")]"},hourAfter:function(t,e){return"["+M+"("+t+", "+e+")]"}},F={gt:function(t,e){return"["+l+"("+t+", "+e+")]"},lt:function(t,e){return"["+h+"("+t+", "+e+")]"},inRange:function(t,e,n){return"["+p+"("+t+", "+e+", "+n+")]"}};e.default={at:function(t,e){return"["+r+"("+t+", "+q(e)+")]"},not:function(t,e){return"["+i+"("+t+", "+q(e)+")]"},missing:function(t){return"["+o+"("+t+")]"},has:function(t){return"["+u+"("+t+")]"},any:function(t,e){return"["+a+"("+t+", "+q(e)+")]"},in:function(t,e){return"["+s+"("+t+", "+q(e)+")]"},fulltext:function(t,e){return"["+f+"("+t+", "+q(e)+")]"},similar:function(t,e){return"["+c+'("'+t+'", '+e+")]"},date:C,dateBefore:C.before,dateAfter:C.after,dateBetween:C.between,dayOfMonth:C.dayOfMonth,dayOfMonthAfter:C.dayOfMonthAfter,dayOfMonthBefore:C.dayOfMonthBefore,dayOfWeek:C.dayOfWeek,dayOfWeekAfter:C.dayOfWeekAfter,dayOfWeekBefore:C.dayOfWeekBefore,month:C.month,monthBefore:C.monthBefore,monthAfter:C.monthAfter,year:C.year,hour:C.hour,hourBefore:C.hourBefore,hourAfter:C.hourAfter,number:F,gt:F.gt,lt:F.lt,inRange:F.inRange,near:S.near,geopoint:S}},function(t,e,n){"use strict";(function(t){var r=n(0),i=setTimeout;function o(){}function u(t){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(t,this)}function a(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,u._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(t){return void f(e.promise,t)}s(e.promise,r)}else(1===t._state?s:f)(e.promise,t._value)})):t._deferreds.push(e)}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof u)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void l(function(t,e){return function(){t.apply(e,arguments)}}(n,e),t)}t._state=1,t._value=e,c(t)}catch(e){f(t,e)}}function f(t,e){t._state=2,t._value=e,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&u._immediateFn(function(){t._handled||u._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function l(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,f(e,t))})}catch(t){if(n)return;n=!0,f(e,t)}}u.prototype.catch=function(t){return this.then(null,t)},u.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new function(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}(t,e,n)),n},u.prototype.finally=r.a,u.all=function(t){return new u(function(e,n){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var i=r.length;function o(t,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var a=u.then;if("function"==typeof a)return void a.call(u,function(e){o(t,e)},n)}r[t]=u,0==--i&&e(r)}catch(t){n(t)}}for(var u=0;u<r.length;u++)o(u,r[u])})},u.resolve=function(t){return t&&"object"==typeof t&&t.constructor===u?t:new u(function(e){e(t)})},u.reject=function(t){return new u(function(e,n){n(t)})},u.race=function(t){return new u(function(e,n){for(var r=0,i=t.length;r<i;r++)t[r].then(e,n)})},u._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){i(t,0)},u._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.a=u}).call(this,n(18).setImmediate)},function(t,e,n){"use strict";e.__esModule=!0;var r=20,i=0,o=[];function u(t){if(o.length>0&&i<r){i++;var e=o.shift();e&&function(t,e,n){var r={headers:{Accept:"application/json"}};e&&e.proxyAgent&&(r.agent=e.proxyAgent),fetch(t,r).then(function(e){return~~(e.status/100!=2)?e.text().then(function(){var n=new Error("Unexpected status code ["+e.status+"] on URL "+t);throw n.status=e.status,n}):e.json().then(function(t){var r=e.headers.get("cache-control"),i=r?/max-age=(\d+)/.exec(r):null,o=i?parseInt(i[1],10):void 0;n(null,t,e,o)})}).catch(n)}(e.url,t,function(n,r,o,a){i--,e.callback(n,r,o,a),u(t)})}}var a=function(){function t(t){this.options=t||{}}return t.prototype.request=function(t,e){o.push({url:t,callback:e}),u(this.options)},t}();e.DefaultRequestHandler=a},function(t,e,n){"use strict";function r(t){this.size=0,this.limit=t,this._keymap={}}e.__esModule=!0,e.MakeLRUCache=function(t){return new r(t)},r.prototype.put=function(t,e){var n={key:t,value:e};if(this._keymap[t]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size===this.limit)return this.shift();this.size++},r.prototype.shift=function(){var t=this.head;return t&&(this.head.newer?(this.head=this.head.newer,this.head.older=void 0):this.head=void 0,t.newer=t.older=void 0,delete this._keymap[t.key]),console.log("purging ",t.key),t},r.prototype.get=function(t,e){var n=this._keymap[t];if(void 0!==n)return n===this.tail?e?n:n.value:(n.newer&&(n===this.head&&(this.head=n.newer),n.newer.older=n.older),n.older&&(n.older.newer=n.newer),n.newer=void 0,n.older=this.tail,this.tail&&(this.tail.newer=n),this.tail=n,e?n:n.value)},r.prototype.find=function(t){return this._keymap[t]},r.prototype.set=function(t,e){var n,r=this.get(t,!0);return r?(n=r.value,r.value=e):(n=this.put(t,e))&&(n=n.value),n},r.prototype.remove=function(t){var e=this._keymap[t];if(e)return delete this._keymap[e.key],e.newer&&e.older?(e.older.newer=e.newer,e.newer.older=e.older):e.newer?(e.newer.older=void 0,this.head=e.newer):e.older?(e.older.newer=void 0,this.tail=e.older):this.head=this.tail=void 0,this.size--,e.value},r.prototype.removeAll=function(){this.head=this.tail=void 0,this.size=0,this._keymap={}},"function"==typeof Object.keys?r.prototype.keys=function(){return Object.keys(this._keymap)}:r.prototype.keys=function(){var t=[];for(var e in this._keymap)t.push(e);return t},r.prototype.forEach=function(t,e,n){var r;if(!0===e?(n=!0,e=void 0):"object"!=typeof e&&(e=this),n)for(r=this.tail;r;)t.call(e,r.key,r.value,this),r=r.older;else for(r=this.head;r;)t.call(e,r.key,r.value,this),r=r.newer},r.prototype.toString=function(){for(var t="",e=this.head;e;)t+=String(e.key)+":"+e.value,(e=e.newer)&&(t+=" < ");return t}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(9),i=function(){function t(t){void 0===t&&(t=1e3),this.lru=r.MakeLRUCache(t)}return t.prototype.isExpired=function(t){var e=this.lru.get(t,!1);return!!e&&(0!==e.expiredIn&&e.expiredIn<Date.now())},t.prototype.get=function(t,e){var n=this.lru.get(t,!1);n&&!this.isExpired(t)?e(null,n.data):e&&e(null)},t.prototype.set=function(t,e,n,r){this.lru.remove(t),this.lru.put(t,{data:e,expiredIn:n?Date.now()+1e3*n:0}),r&&r(null)},t.prototype.remove=function(t,e){this.lru.remove(t),e&&e(null)},t.prototype.clear=function(t){this.lru.removeAll(),t&&t(null)},t}();e.DefaultApiCache=i},function(t,e,n){"use strict";e.__esModule=!0;var r=n(10),i=n(8),o=function(){function t(t,e,n){this.requestHandler=t||new i.DefaultRequestHandler({proxyAgent:n}),this.cache=e||new r.DefaultApiCache}return t.prototype.request=function(t,e){this.requestHandler.request(t,function(t,n,r,i){t?e&&e(t,null,r,i):n&&e&&e(null,n,r,i)})},t.prototype.cachedRequest=function(t,e){var n=this,r=e||{};return new Promise(function(e,i){!function(e){var i=r.cacheKey||t;n.cache.get(i,function(o,u){o||u?e(o,u):n.request(t,function(t,o,u,a){if(t)e(t,null);else{var s=a||r.ttl;s&&n.cache.set(i,o,s,e),e(null,o)}})})}(function(t,n){t&&i(t),n&&e(n)})})},t}();e.default=o},function(t,e,n){"use strict";e.__esModule=!0;var r=decodeURIComponent;e.default={parse:function(t,e){if("string"!=typeof t)throw new TypeError("argument str must be a string");var n={},i=e||{},o=t.split(/; */),u=i.decode||r;return o.forEach(function(t){var e=t.indexOf("=");if(!(e<0)){var r=t.substr(0,e).trim(),i=t.substr(++e,t.length).trim();'"'==i[0]&&(i=i.slice(1,-1)),void 0==n[r]&&(n[r]=function(t,e){try{return e(t)}catch(e){return t}}(i,u))}}),n}}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(4),i=n(3),o=function(){function t(t,e){this.api=new i.default(t,e)}return t.prototype.getApi=function(){return this.api.get()},t.prototype.everything=function(){return this.form("everything")},t.prototype.form=function(t){return new r.LazySearchForm(t,this.api)},t.prototype.query=function(t,e,n){return this.getApi().then(function(r){return r.query(t,e,n)})},t.prototype.queryFirst=function(t,e,n){return this.getApi().then(function(r){return r.queryFirst(t,e,n)})},t.prototype.getByID=function(t,e,n){return this.getApi().then(function(r){return r.getByID(t,e,n)})},t.prototype.getByIDs=function(t,e,n){return this.getApi().then(function(r){return r.getByIDs(t,e,n)})},t.prototype.getByUID=function(t,e,n,r){return this.getApi().then(function(i){return i.getByUID(t,e,n,r)})},t.prototype.getSingle=function(t,e,n){return this.getApi().then(function(r){return r.getSingle(t,e,n)})},t.prototype.getBookmark=function(t,e,n){return this.getApi().then(function(r){return r.getBookmark(t,e,n)})},t.prototype.previewSession=function(t,e,n,r){return this.getApi().then(function(i){return i.previewSession(t,e,n,r)})},t.getApi=function(t,e){return new i.default(t,e).get()},t}();e.DefaultClient=o},function(t,e,n){"use strict";var r,i=n(6),o=n(5),u=n(13),a=n(3),s=n(2);!function(t){function e(t,e){return u.DefaultClient.getApi(t,e)}t.experimentCookie=s.EXPERIMENT_COOKIE,t.previewCookie=s.PREVIEW_COOKIE,t.Predicates=i.default,t.Experiments=o.Experiments,t.Api=a.default,t.client=function(t,e){return new u.DefaultClient(t,e)},t.getApi=e,t.api=function(t,n){return e(t,n)}}(r||(r={})),t.exports=r},function(e,n){e.exports=t},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var s,f=[],c=!1,l=-1;function h(){c&&s&&(c=!1,s.length?f=s.concat(f):l=-1,f.length&&p())}function p(){if(!c){var t=a(h);c=!0;for(var e=f.length;e;){for(s=f,f=[];++l<e;)s&&s[l].run();l=-1,e=f.length}s=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new d(t,e)),1!==f.length||c||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,i=1,o={},u=!1,a=t.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(t);s=s&&s.setTimeout?s:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){c(t)})}:function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&c(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),r=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){c(t.data)},r=function(e){t.port2.postMessage(e)}}():a&&"onreadystatechange"in a.createElement("script")?function(){var t=a.documentElement;r=function(e){var n=a.createElement("script");n.onreadystatechange=function(){c(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():r=function(t){setTimeout(c,0,t)},s.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var u={callback:t,args:e};return o[i]=u,r(i),i++},s.clearImmediate=f}function f(t){delete o[t]}function c(t){if(u)setTimeout(c,0,t);else{var e=o[t];if(e){u=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{f(t),u=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(1),n(16))},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(17),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(t,e,n){"use strict";n.r(e),function(t){var e=n(7),r=n(0),i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();i.Promise?i.Promise.prototype.finally||(i.Promise.prototype.finally=r.a):i.Promise=e.a}.call(this,n(1))},function(t,e,n){n(19),n(15),t.exports=n(14)}])});

/***/ }),

/***/ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js":
/*!**************************************************************!*\
  !*** ./node_modules/prismic-reactjs/dist/prismic-reactjs.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
	else {}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=n(2),o=r(u),i=n(1),f=r(i);e.exports={Link:o.default,Date:f.default}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return null;var t=24==e.length?e.substring(0,22)+":"+e.substring(22,24):e;return new Date(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={url:function(e,t){return"Document"===e.link_type?t?t(e,e.isBroken):"":e.url}}},function(e,t,n){e.exports=n(0)}])});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _prismicHelpers = __webpack_require__(0);

var _prismicHelpers2 = _interopRequireDefault(_prismicHelpers);

var _richtext = __webpack_require__(3);

var _richtext2 = _interopRequireDefault(_richtext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { Date: _prismicHelpers2.default.Date, RichText: _richtext2.default, Link: _prismicHelpers2.default.Link };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prismicRichtext = __webpack_require__(4);

var _prismicRichtext2 = _interopRequireDefault(_prismicRichtext);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _prismicHelpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serialize(linkResolver, type, element, content, children, index) {
  switch (type) {
    case _prismicRichtext.Elements.heading1:
      return serializeStandardTag('h1', element, children, index);
    case _prismicRichtext.Elements.heading2:
      return serializeStandardTag('h2', element, children, index);
    case _prismicRichtext.Elements.heading3:
      return serializeStandardTag('h3', element, children, index);
    case _prismicRichtext.Elements.heading4:
      return serializeStandardTag('h4', element, children, index);
    case _prismicRichtext.Elements.heading5:
      return serializeStandardTag('h5', element, children, index);
    case _prismicRichtext.Elements.heading6:
      return serializeStandardTag('h6', element, children, index);
    case _prismicRichtext.Elements.paragraph:
      return serializeStandardTag('p', element, children, index);
    case _prismicRichtext.Elements.preformatted:
      return serializeStandardTag('pre', element, children, index);
    case _prismicRichtext.Elements.strong:
      return serializeStandardTag('strong', element, children, index);
    case _prismicRichtext.Elements.em:
      return serializeStandardTag('em', element, children, index);
    case _prismicRichtext.Elements.listItem:
      return serializeStandardTag('li', element, children, index);
    case _prismicRichtext.Elements.oListItem:
      return serializeStandardTag('li', element, children, index);
    case _prismicRichtext.Elements.list:
      return serializeStandardTag('ul', element, children, index);
    case _prismicRichtext.Elements.oList:
      return serializeStandardTag('ol', element, children, index);
    case _prismicRichtext.Elements.image:
      return serializeImage(linkResolver, element, index);
    case _prismicRichtext.Elements.embed:
      return serializeEmbed(element, index);
    case _prismicRichtext.Elements.hyperlink:
      return serializeHyperlink(linkResolver, element, children, index);
    case _prismicRichtext.Elements.label:
      return serializeLabel(element, children, index);
    case _prismicRichtext.Elements.span:
      return serializeSpan(content);
    default:
      return null;
  }
}

function propsWithUniqueKey(props, key) {
  return Object.assign(props || {}, { key: key });
}

function serializeStandardTag(tag, element, children, key) {
  var props = element.label ? Object.assign({}, { className: element.label }) : {};
  return _react2.default.createElement(tag, propsWithUniqueKey(props, key), children);
}

function serializeHyperlink(linkResolver, element, children, key) {
  var targetAttr = element.data.target ? { target: element.data.target } : {};
  var relAttr = element.data.target ? { rel: 'noopener' } : {};
  var props = Object.assign({ href: _prismicHelpers.Link.url(element.data, linkResolver) }, targetAttr, relAttr);
  return _react2.default.createElement('a', propsWithUniqueKey(props, key), children);
}

function serializeLabel(element, children, key) {
  var props = element.data ? Object.assign({}, { className: element.data.label }) : {};
  return _react2.default.createElement('span', propsWithUniqueKey(props, key), children);
}

function serializeSpan(content) {
  if (content) {
    return content.split("\n").reduce(function (acc, p) {
      if (acc.length === 0) {
        return [p];
      } else {
        var brIndex = (acc.length + 1) / 2 - 1;
        var br = _react2.default.createElement('br', propsWithUniqueKey({}, brIndex));
        return acc.concat([br, p]);
      }
    }, []);
  } else {
    return null;
  }
}

function serializeImage(linkResolver, element, key) {
  var linkUrl = element.linkTo ? _prismicHelpers.Link.url(element.linkTo, linkResolver) : null;
  var linkTarget = element.linkTo && element.linkTo.target ? { target: element.linkTo.target } : {};
  var relAttr = linkTarget.target ? { rel: 'noopener' } : {};
  var img = _react2.default.createElement('img', { src: element.url, alt: element.alt || '' });

  return _react2.default.createElement('p', propsWithUniqueKey({ className: [element.label || '', 'block-img'].join(' ') }, key), linkUrl ? _react2.default.createElement('a', Object.assign({ href: linkUrl }, linkTarget, relAttr), img) : img);
}

function serializeEmbed(element, key) {
  var props = Object.assign({
    "data-oembed": element.oembed.embed_url,
    "data-oembed-type": element.oembed.type,
    "data-oembed-provider": element.oembed.provider_name
  }, element.label ? { className: element.label } : {});

  var embedHtml = _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: element.oembed.html } });

  return _react2.default.createElement('div', propsWithUniqueKey(props, key), embedHtml);
}

exports.default = {
  asText: function asText(structuredText) {
    return _prismicRichtext2.default.asText(structuredText);
  },
  render: function render(richText, linkResolver, htmlSerializer) {
    var serializedChildren = _prismicRichtext2.default.serialize(richText, serialize.bind(null, linkResolver), htmlSerializer);
    return _react2.default.createElement('div', propsWithUniqueKey(), serializedChildren);
  },


  Elements: _prismicRichtext.Elements
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){return function(t){function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var r={};return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=123)}([function(t,n,r){"use strict";function e(t){return function n(r,e){switch(arguments.length){case 0:return n;case 1:return Object(u.a)(r)?n:Object(a.a)(function(n){return t(r,n)});default:return Object(u.a)(r)&&Object(u.a)(e)?n:Object(u.a)(r)?Object(a.a)(function(n){return t(n,e)}):Object(u.a)(e)?Object(a.a)(function(n){return t(r,n)}):t(r,e)}}}n.a=e;var a=r(1),u=r(27)},function(t,n,r){"use strict";function e(t){return function n(r){return 0===arguments.length||Object(a.a)(r)?n:t.apply(this,arguments)}}n.a=e;var a=r(27)},function(t,n,r){"use strict";function e(t){return function n(r,e,i){switch(arguments.length){case 0:return n;case 1:return Object(c.a)(r)?n:Object(u.a)(function(n,e){return t(r,n,e)});case 2:return Object(c.a)(r)&&Object(c.a)(e)?n:Object(c.a)(r)?Object(u.a)(function(n,r){return t(n,e,r)}):Object(c.a)(e)?Object(u.a)(function(n,e){return t(r,n,e)}):Object(a.a)(function(n){return t(r,e,n)});default:return Object(c.a)(r)&&Object(c.a)(e)&&Object(c.a)(i)?n:Object(c.a)(r)&&Object(c.a)(e)?Object(u.a)(function(n,r){return t(n,r,i)}):Object(c.a)(r)&&Object(c.a)(i)?Object(u.a)(function(n,r){return t(n,e,r)}):Object(c.a)(e)&&Object(c.a)(i)?Object(u.a)(function(n,e){return t(r,n,e)}):Object(c.a)(r)?Object(a.a)(function(n){return t(n,e,i)}):Object(c.a)(e)?Object(a.a)(function(n){return t(r,n,i)}):Object(c.a)(i)?Object(a.a)(function(n){return t(r,e,n)}):t(r,e,i)}}}n.a=e;var a=r(1),u=r(0),c=r(27)},function(t,n,r){"use strict";function e(t,n,r){return function(){if(0===arguments.length)return r();var e=Array.prototype.slice.call(arguments,0),c=e.pop();if(!Object(a.a)(c)){for(var i=0;i<t.length;){if("function"==typeof c[t[i]])return c[t[i]].apply(c,e);i+=1}if(Object(u.a)(c))return n.apply(null,e)(c)}return r.apply(this,arguments)}}n.a=e;var a=r(15),u=r(43)},function(t,n,r){"use strict";n.a={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},function(t,n,r){"use strict";var e=r(12),a=r(1),u=r(0),c=r(29),i=Object(u.a)(function(t,n){return 1===t?Object(a.a)(n):Object(e.a)(t,Object(c.a)(t,[],n))});n.a=i},function(t,n,r){"use strict";function e(t,n){return Object.prototype.hasOwnProperty.call(n,t)}n.a=e},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(30),c=r(8),i=r(134),o=r(5),s=r(13),f=Object(e.a)(Object(a.a)(["fantasy-land/map","map"],i.a,function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return Object(o.a)(n.length,function(){return t.call(this,n.apply(this,arguments))});case"[object Object]":return Object(c.a)(function(r,e){return r[e]=t(n[e]),r},{},Object(s.a)(n));default:return Object(u.a)(t,n)}}));n.a=f},function(t,n,r){"use strict";function e(t,n,r){for(var e=0,a=r.length;e<a;){if((n=t["@@transducer/step"](n,r[e]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e+=1}return t["@@transducer/result"](n)}function a(t,n,r){for(var e=r.next();!e.done;){if((n=t["@@transducer/step"](n,e.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e=r.next()}return t["@@transducer/result"](n)}function u(t,n,r,e){return t["@@transducer/result"](r[e](Object(s.a)(t["@@transducer/step"],t),n))}function c(t,n,r){if("function"==typeof t&&(t=Object(o.a)(t)),Object(i.a)(r))return e(t,n,r);if("function"==typeof r["fantasy-land/reduce"])return u(t,n,r,"fantasy-land/reduce");if(null!=r[f])return a(t,n,r[f]());if("function"==typeof r.next)return a(t,n,r);if("function"==typeof r.reduce)return u(t,n,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}n.a=c;var i=r(31),o=r(66),s=r(67),f="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator"},function(t,n,r){"use strict";var e=r(0),a=r(157),u=Object(e.a)(function(t,n){return Object(a.a)(t,n,[],[])});n.a=u},function(t,n,r){"use strict";function e(t,n){t=t||[],n=n||[];var r,e=t.length,a=n.length,u=[];for(r=0;r<e;)u[u.length]=t[r],r+=1;for(r=0;r<a;)u[u.length]=n[r],r+=1;return u}n.a=e},function(t,n,r){"use strict";var e=r(23),a=r(2),u=Object(a.a)(Object(e.a)("slice",function(t,n,r){return Array.prototype.slice.call(r,t,n)}));n.a=u},function(t,n,r){"use strict";function e(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,a){return n.apply(this,arguments)};case 5:return function(t,r,e,a,u){return n.apply(this,arguments)};case 6:return function(t,r,e,a,u,c){return n.apply(this,arguments)};case 7:return function(t,r,e,a,u,c,i){return n.apply(this,arguments)};case 8:return function(t,r,e,a,u,c,i,o){return n.apply(this,arguments)};case 9:return function(t,r,e,a,u,c,i,o,s){return n.apply(this,arguments)};case 10:return function(t,r,e,a,u,c,i,o,s,f){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}n.a=e},function(t,n,r){"use strict";var e=r(1),a=r(6),u=r(68),c=!{toString:null}.propertyIsEnumerable("toString"),i=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],o=function(){return arguments.propertyIsEnumerable("length")}(),s=function(t,n){for(var r=0;r<t.length;){if(t[r]===n)return!0;r+=1}return!1},f="function"!=typeof Object.keys||o?function(t){if(Object(t)!==t)return[];var n,r,e=[],f=o&&Object(u.a)(t);for(n in t)!Object(a.a)(n,t)||f&&"length"===n||(e[e.length]=n);if(c)for(r=i.length-1;r>=0;)n=i[r],Object(a.a)(n,t)&&!s(e,n)&&(e[e.length]=n),r-=1;return e}:function(t){return Object(t)!==t?[]:Object.keys(t)},l=Object(e.a)(f);n.a=l},function(t,n,r){"use strict";var e=r(2),a=r(8),u=Object(e.a)(a.a);n.a=u},function(t,n,r){"use strict";n.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},function(t,n,r){"use strict";function e(t){return t&&t["@@transducer/reduced"]?t:{"@@transducer/value":t,"@@transducer/reduced":!0}}n.a=e},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return function(){return t}});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return n>t?n:t});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=n,e=0;e<t.length;){if(null==r)return;r=r[t[e]],e+=1}return r});n.a=a},function(t,n,r){"use strict";function e(t,n){return Object(a.a)(n,t,0)>=0}n.a=e;var a=r(84)},function(t,n,r){"use strict";var e=r(0),a=r(7),u=r(44),c=Object(e.a)(function(t,n){return Object(a.a)(Object(u.a)(t),n)});n.a=c},function(t,n,r){"use strict";function e(t){return"[object String]"===Object.prototype.toString.call(t)}n.a=e},function(t,n,r){"use strict";function e(t,n){return function(){var r=arguments.length;if(0===r)return n();var e=arguments[r-1];return Object(a.a)(e)||"function"!=typeof e[t]?n.apply(this,arguments):e[t].apply(e,Array.prototype.slice.call(arguments,0,r-1))}}n.a=e;var a=r(15)},function(t,n,r){"use strict";var e=r(1),a=r(156),u=Object(e.a)(function(t){return Object(a.a)(t,[])});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(22),u=Object(e.a)(function(t,n){var r=t<0?n.length+t:t;return Object(a.a)(n)?n.charAt(r):n[r]});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(34),u=r(5),c=r(24),i=Object(e.a)(function(t,n){return Object(u.a)(t+1,function(){var r=arguments[t];if(null!=r&&Object(a.a)(r[n]))return r[n].apply(r,Array.prototype.slice.call(arguments,0,t));throw new TypeError(Object(c.a)(r)+' does not have a method named "'+n+'"')})});n.a=i},function(t,n,r){"use strict";function e(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.a=e},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return Number(t)+Number(n)});n.a=a},function(t,n,r){"use strict";function e(t,n,r){return function(){for(var c=[],i=0,o=t,s=0;s<n.length||i<arguments.length;){var f;s<n.length&&(!Object(u.a)(n[s])||i>=arguments.length)?f=n[s]:(f=arguments[i],i+=1),c[s]=f,Object(u.a)(f)||(o-=1),s+=1}return o<=0?r.apply(this,c):Object(a.a)(o,e(t,c,r))}}n.a=e;var a=r(12),u=r(27)},function(t,n,r){"use strict";function e(t,n){for(var r=0,e=n.length,a=Array(e);r<e;)a[r]=t(n[r]),r+=1;return a}n.a=e},function(t,n,r){"use strict";var e=r(1),a=r(15),u=r(22),c=Object(e.a)(function(t){return!!Object(a.a)(t)||!!t&&"object"==typeof t&&!Object(u.a)(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1))});n.a=c},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){var e={};for(var a in r)e[a]=r[a];return e[t]=n,e});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){switch(t){case 0:return function(){return n.call(this)};case 1:return function(t){return n.call(this,t)};case 2:return function(t,r){return n.call(this,t,r)};case 3:return function(t,r,e){return n.call(this,t,r,e)};case 4:return function(t,r,e,a){return n.call(this,t,r,e,a)};case 5:return function(t,r,e,a,u){return n.call(this,t,r,e,a,u)};case 6:return function(t,r,e,a,u,c){return n.call(this,t,r,e,a,u,c)};case 7:return function(t,r,e,a,u,c,i){return n.call(this,t,r,e,a,u,c,i)};case 8:return function(t,r,e,a,u,c,i,o){return n.call(this,t,r,e,a,u,c,i,o)};case 9:return function(t,r,e,a,u,c,i,o,s){return n.call(this,t,r,e,a,u,c,i,o,s)};case 10:return function(t,r,e,a,u,c,i,o,s,f){return n.call(this,t,r,e,a,u,c,i,o,s,f)};default:throw new Error("First argument to nAry must be a non-negative integer no greater than ten")}});n.a=a},function(t,n,r){"use strict";function e(t){return"[object Function]"===Object.prototype.toString.call(t)}n.a=e},function(t,n,r){"use strict";var e=r(1),a=r(76),u=Object(e.a)(function(t){return Object(a.a)(t.length,t)});n.a=u},function(t,n,r){"use strict";var e=r(1),a=r(22),u=Object(e.a)(function(t){return Object(a.a)(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()});n.a=u},function(t,n,r){"use strict";function e(t,n,r){for(var e=0,a=r.length;e<a;){if(t(n,r[e]))return!0;e+=1}return!1}n.a=e},function(t,n,r){"use strict";var e=r(86),a=r(0),u=r(53),c=Object(a.a)(function(t,n){return Object(u.a)(Object(e.a)(t),n)});n.a=c},function(t,n,r){"use strict";var e=r(29),a=r(3),u=r(6),c=r(8),i=r(167),o=Object(e.a)(4,[],Object(a.a)([],i.a,function(t,n,r,e){return Object(c.a)(function(e,a){var c=r(a);return e[c]=t(Object(u.a)(c,e)?e[c]:n,a),e},{},e)}));n.a=o},function(t,n,r){"use strict";var e=r(1),a=r(5),u=Object(e.a)(function(t){return Object(a.a)(t.length,function(n,r){var e=Array.prototype.slice.call(arguments,0);return e[0]=r,e[1]=n,t.apply(this,e)})});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(7),u=Object(e.a)(function(t,n){return function(r){return function(e){return Object(a.a)(function(t){return n(t,e)},r(t(e)))}}});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(55),u=r(62),c=Object(e.a)(function t(n,r,e){return Object(u.a)(function(r,e,u){return Object(a.a)(e)&&Object(a.a)(u)?t(n,e,u):n(r,e,u)},r,e)});n.a=c},function(t,n,r){"use strict";function e(t){return"function"==typeof t["@@transducer/step"]}n.a=e},function(t,n,r){"use strict";var e=r(0),a=r(19),u=Object(e.a)(function(t,n){return Object(a.a)([t],n)});n.a=u},function(t,n,r){"use strict";var e=r(10),a=r(0),u=r(8),c=r(7),i=Object(a.a)(function(t,n){return"function"==typeof n["fantasy-land/ap"]?n["fantasy-land/ap"](t):"function"==typeof t.ap?t.ap(n):"function"==typeof t?function(r){return t(r)(n(r))}:Object(u.a)(function(t,r){return Object(e.a)(t,Object(c.a)(r,n))},[],t)});n.a=i},function(t,n,r){"use strict";n.a=Number.isInteger||function(t){return t<<0===t}},function(t,n,r){"use strict";var e=r(1),a=r(5),u=Object(e.a)(function(t){return Object(a.a)(t.length,t)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(77),c=r(146),i=r(7),o=Object(e.a)(Object(a.a)(["fantasy-land/chain","chain"],c.a,function(t,n){return"function"==typeof n?function(r){return t(n(r))(r)}:Object(u.a)(!1)(Object(i.a)(t,n))}));n.a=o},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)});n.a=a},function(t,n,r){"use strict";function e(){if(0===arguments.length)throw new Error("compose requires at least one argument");return a.a.apply(this,Object(u.a)(arguments))}n.a=e;var a=r(81),u=r(36)},function(t,n,r){"use strict";var e=r(23),a=r(1),u=r(11),c=Object(a.a)(Object(e.a)("tail",Object(u.a)(1,1/0)));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(15),u=r(34),c=r(22),i=r(24),o=Object(e.a)(function(t,n){if(Object(a.a)(t)){if(Object(a.a)(n))return t.concat(n);throw new TypeError(Object(i.a)(n)+" is not an array")}if(Object(c.a)(t)){if(Object(c.a)(n))return t+n;throw new TypeError(Object(i.a)(n)+" is not a string")}if(null!=t&&Object(u.a)(t["fantasy-land/concat"]))return t["fantasy-land/concat"](n);if(null!=t&&Object(u.a)(t.concat))return t.concat(n);throw new TypeError(Object(i.a)(t)+' does not have a method named "concat" or "fantasy-land/concat"')});n.a=o},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(54),c=r(55),i=r(8),o=r(162),s=r(13),f=Object(e.a)(Object(a.a)(["filter"],o.a,function(t,n){return Object(c.a)(n)?Object(i.a)(function(r,e){return t(n[e])&&(r[e]=n[e]),r},{},Object(s.a)(n)):Object(u.a)(t,n)}));n.a=f},function(t,n,r){"use strict";function e(t,n){for(var r=0,e=n.length,a=[];r<e;)t(n[r])&&(a[a.length]=n[r]),r+=1;return a}n.a=e},function(t,n,r){"use strict";function e(t){return"[object Object]"===Object.prototype.toString.call(t)}n.a=e},function(t,n,r){"use strict";var e=r(2),a=r(65),u=r(17),c=Object(e.a)(function(t,n,r){return Object(a.a)(Object(u.a)(n),t,r)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(175),c=r(11),i=Object(e.a)(Object(a.a)(["take"],u.a,function(t,n){return Object(c.a)(0,t<0?1/0:t,n)}));n.a=i},function(t,n,r){"use strict";var e=r(1),a=r(59),u=Object(e.a)(a.a);n.a=u},function(t,n,r){"use strict";function e(t){return t}n.a=e},function(t,n,r){"use strict";var e=r(58),a=r(101),u=Object(a.a)(e.a);n.a=u},function(t,n,r){"use strict";var e=r(220);n.a="function"==typeof Object.assign?Object.assign:e.a},function(t,n,r){"use strict";var e=r(2),a=r(6),u=Object(e.a)(function(t,n,r){var e,u={};for(e in n)Object(a.a)(e,n)&&(u[e]=Object(a.a)(e,r)?t(e,n[e],r[e]):n[e]);for(e in r)Object(a.a)(e,r)&&!Object(a.a)(e,u)&&(u[e]=r[e]);return u});n.a=u},function(t,n,r){"use strict";n.__esModule=!0,n.NODE_TYPES={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"},n.PRIORITIES=(e={},e[n.NODE_TYPES.heading1]=4,e[n.NODE_TYPES.heading2]=4,e[n.NODE_TYPES.heading3]=4,e[n.NODE_TYPES.heading4]=4,e[n.NODE_TYPES.heading5]=4,e[n.NODE_TYPES.heading6]=4,e[n.NODE_TYPES.paragraph]=3,e[n.NODE_TYPES.preformatted]=5,e[n.NODE_TYPES.strong]=6,e[n.NODE_TYPES.em]=6,e[n.NODE_TYPES.oList]=1,e[n.NODE_TYPES.list]=1,e[n.NODE_TYPES.listItem]=1,e[n.NODE_TYPES.oListItem]=1,e[n.NODE_TYPES.image]=1,e[n.NODE_TYPES.embed]=1,e[n.NODE_TYPES.hyperlink]=3,e[n.NODE_TYPES.label]=4,e[n.NODE_TYPES.span]=7,e);var e},function(t,n,r){"use strict";function e(t){return t.sort(function(t,n){if(t.isParentOf(n))return-1;if(n.isParentOf(t))return 1;var r=d.PRIORITIES[t.type]-d.PRIORITIES[n.type];return 0===r?t.text.length-n.text.length:r})}function a(t,n,r){return r.start<n.start?{inner:j.SpanNode.slice(r,n.start,r.end,t),outer:j.SpanNode.slice(r,r.start,n.start,t)}:r.end>n.end?{inner:j.SpanNode.slice(r,r.start,n.end,t),outer:j.SpanNode.slice(r,n.end,r.end,t)}:{inner:r}}function u(t,n){var r=n.others.reduce(function(r,e){var u=r.inner,c=r.outer,i=a(t,n.elected,e);return{inner:u.concat(i.inner),outer:i.outer?c.concat(i.outer):c}},{inner:[],outer:[]}),e=r.inner,u=r.outer;return[n.elected.setChildren(f(t,e,n.elected.boundaries()))].concat(l(t,u))}function c(t,n){return n.reduce(function(n,r){var e=p.last(n);if(e){if(e.some(function(t){return t.isParentOf(r)}))return p.init(n).concat([e.concat(r)]);var a=p.last(e);return a&&t(a,r)?p.init(n).concat([e.concat(r)]):n.concat([[r]])}return[[r]]},[])}function i(t){var n=function(t,n){return t.start-n.start},r=function(t,n){return t.end-n.end},e=p.sortWith([n,r],t);return c(function(t,n){return t.end>=n.start},e)}function o(t){if(0===t.length)throw new Error("Unable to elect node on empty list");var n=e(t);return{elected:n[0],others:n.slice(1)}}function s(t,n,r){return n.reduce(function(e,a,u){var c=[],i=0===u&&a.start>r.lower,o=u===n.length-1&&r.upper>a.end;if(i){var s=new j.TextNode(r.lower,a.start,t.slice(r.lower,a.start));c=c.concat(s)}else{var f=n[u-1];if(f&&a.start>f.end){var l=t.slice(f.end,a.start),s=new j.TextNode(f.end,a.start,l);c=c.concat(s)}}if(c=c.concat(a),o){var s=new j.TextNode(a.end,r.upper,t.slice(a.end,r.upper));c=c.concat(s)}return e.concat(c)},[])}function f(t,n,r){if(n.length>0)return s(t,l(t,n),r);var e=t.slice(r.lower,r.upper);return[new j.TextNode(r.lower,r.upper,e)]}function l(t,n){var r=p.sortBy(function(t){return t.start},n),e=i(r),a=e.map(o),c=p.flatten(a.map(function(n){return u(t,n)}));return p.sortBy(function(t){return t.start},c)}function v(t){var n=t.spans.map(function(n){var r=t.text.slice(n.start,n.end);return new j.SpanNode(n.start,n.end,n.type,r,[],n)}),r={lower:0,upper:t.text.length};return f(t.text,n,r)}n.__esModule=!0;var p=r(126),b=r(121),O=r(326),d=r(63),j=r(122),h=function(){function t(){}return t.fromRichText=function(t){return{key:b.default(),children:t.reduce(function(t,n,r){if(O.RichTextBlock.isEmbedBlock(n.type)||O.RichTextBlock.isImageBlock(n.type))return t.concat(new j.BlockNode(n.type,n));var e=v(n),a=t[t.length-1];if(O.RichTextBlock.isListItem(n.type)&&a&&a instanceof j.ListBlockNode){var u=new j.ListItemBlockNode(n,e),c=a.addChild(u);return p.init(t).concat(c)}if(O.RichTextBlock.isOrderedListItem(n.type)&&a&&a instanceof j.OrderedListBlockNode){var i=new j.OrderedListItemBlockNode(n,e),c=a.addChild(i);return p.init(t).concat(c)}if(O.RichTextBlock.isListItem(n.type)){var u=new j.ListItemBlockNode(n,e),o=new j.ListBlockNode(O.RichTextBlock.emptyList(),[u]);return t.concat(o)}if(O.RichTextBlock.isOrderedListItem(n.type)){var i=new j.OrderedListItemBlockNode(n,e),s=new j.OrderedListBlockNode(O.RichTextBlock.emptyOrderedList(),[i]);return t.concat(s)}return t.concat(new j.BlockNode(n.type,n,e))},[])}},t.NODE_TYPES=d.NODE_TYPES,t}();n.default=h},function(t,n,r){"use strict";var e=r(10),a=r(2),u=Object(a.a)(function(t,n,r){if(n>=r.length||n<-r.length)return r;var a=n<0?r.length:0,u=a+n,c=Object(e.a)(r);return c[u]=t(r[u]),c});n.a=u},function(t,n,r){"use strict";function e(t){return new a(t)}n.a=e;var a=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}()},function(t,n,r){"use strict";var e=r(12),a=r(0),u=Object(a.a)(function(t,n){return Object(e.a)(t.length,function(){return t.apply(n,arguments)})});n.a=u},function(t,n,r){"use strict";var e=r(6),a=Object.prototype.toString,u=function(){return"[object Arguments]"===a.call(arguments)?function(t){return"[object Arguments]"===a.call(t)}:function(t){return Object(e.a)("callee",t)}};n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t&&n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(71),c=Object(e.a)(Object(a.a)(["any"],u.a,function(t,n){for(var r=0;r<n.length;){if(t(n[r]))return!0;r+=1}return!1}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(16),u=r(4),c=function(){function t(t,n){this.xf=n,this.f=t,this.any=!1}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){return this.any||(t=this.xf["@@transducer/step"](t,!1)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)&&(this.any=!0,t=Object(a.a)(this.xf["@@transducer/step"](t,!0))),t},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t.apply(this,n)});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(13),u=Object(e.a)(function(t){for(var n=Object(a.a)(t),r=n.length,e=[],u=0;u<r;)e[u]=t[n[u]],u+=1;return e});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(6),u=r(15),c=r(46),i=r(32),o=r(75),s=Object(e.a)(function t(n,r,e){if(0===n.length)return r;var s=n[0];if(n.length>1){var f=!Object(o.a)(e)&&Object(a.a)(s,e)?e[s]:Object(c.a)(n[1])?[]:{};r=t(Array.prototype.slice.call(n,1),r,f)}if(Object(c.a)(s)&&Object(u.a)(e)){var l=[].concat(e);return l[s]=r,l}return Object(i.a)(s,r,e)});n.a=s},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return null==t});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(8),u=r(45),c=r(5),i=r(7),o=Object(e.a)(function(t,n){var r=Object(c.a)(t,n);return Object(c.a)(t,function(){return Object(a.a)(u.a,Object(i.a)(r,arguments[0]),Array.prototype.slice.call(arguments,1))})});n.a=o},function(t,n,r){"use strict";function e(t){return function n(r){for(var e,u,c,i=[],o=0,s=r.length;o<s;){if(Object(a.a)(r[o]))for(e=t?n(r[o]):r[o],c=0,u=e.length;c<u;)i[i.length]=e[c],c+=1;else i[i.length]=r[o];o+=1}return i}}n.a=e;var a=r(31)},function(t,n,r){"use strict";function e(t,n,r,c){var i=function(a){for(var u=n.length,i=0;i<u;){if(t===n[i])return r[i];i+=1}n[i+1]=t,r[i+1]=a;for(var o in t)a[o]=c?e(t[o],n,r,!0):t[o];return a};switch(Object(u.a)(t)){case"Object":return i({});case"Array":return i([]);case"Date":return new Date(t.valueOf());case"RegExp":return Object(a.a)(t);default:return t}}n.a=e;var a=r(79),u=r(49)},function(t,n,r){"use strict";function e(t){return new RegExp(t.source,(t.global?"g":"")+(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.sticky?"y":"")+(t.unicode?"u":""))}n.a=e},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return!t});n.a=a},function(t,n,r){"use strict";function e(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return Object(a.a)(arguments[0].length,Object(c.a)(u.a,arguments[0],Object(i.a)(arguments)))}n.a=e;var a=r(12),u=r(153),c=r(14),i=r(51)},function(t,n,r){"use strict";function e(){if(0===arguments.length)throw new Error("composeK requires at least one argument");var t=Array.prototype.slice.call(arguments),n=t.pop();return Object(u.a)(u.a.apply(this,Object(c.a)(a.a,t)),n)}n.a=e;var a=r(48),u=r(50),c=r(7)},function(t,n,r){"use strict";function e(){if(0===arguments.length)throw new Error("pipeP requires at least one argument");return Object(a.a)(arguments[0].length,Object(c.a)(u.a,arguments[0],Object(i.a)(arguments)))}n.a=e;var a=r(12),u=r(155),c=r(14),i=r(51)},function(t,n,r){"use strict";function e(t,n,r){var e,u;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(e=1/n;r<t.length;){if(0===(u=t[r])&&1/u===e)return r;r+=1}return-1}if(n!==n){for(;r<t.length;){if("number"==typeof(u=t[r])&&u!==u)return r;r+=1}return-1}return t.indexOf(n,r);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,r);case"object":if(null===n)return t.indexOf(n,r)}for(;r<t.length;){if(Object(a.a)(t[r],n))return r;r+=1}return-1}n.a=e;var a=r(9)},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t===n?0!==t||1/t==1/n:t!==t&&n!==n});n.a=a},function(t,n,r){"use strict";function e(t){return function(){return!t.apply(this,arguments)}}n.a=e},function(t,n,r){"use strict";var e=r(0),a=r(47),u=r(33),c=Object(e.a)(function(t,n){if(t>10)throw new Error("Constructor with greater than ten arguments");return 0===t?function(){return new n}:Object(a.a)(Object(u.a)(t,function(t,r,e,a,u,c,i,o,s,f){switch(arguments.length){case 1:return new n(t);case 2:return new n(t,r);case 3:return new n(t,r,e);case 4:return new n(t,r,e,a);case 5:return new n(t,r,e,a,u);case 6:return new n(t,r,e,a,u,c);case 7:return new n(t,r,e,a,u,c,i);case 8:return new n(t,r,e,a,u,c,i,o);case 9:return new n(t,r,e,a,u,c,i,o,s);case 10:return new n(t,r,e,a,u,c,i,o,s,f)}}))});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(30),u=r(5),c=r(18),i=r(21),o=r(14),s=Object(e.a)(function(t,n){return Object(u.a)(Object(o.a)(c.a,0,Object(i.a)("length",n)),function(){var r=arguments,e=this;return t.apply(e,Object(a.a)(function(t){return t.apply(e,r)},n))})});n.a=s},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return null==n||n!==n?t:n});n.a=a},function(t,n,r){"use strict";var e=r(20),a=r(0),u=Object(a.a)(function(t,n){for(var r=[],a=0,u=t.length;a<u;)Object(e.a)(t[a],n)||Object(e.a)(t[a],r)||(r[r.length]=t[a]),a+=1;return r});n.a=u},function(t,n,r){"use strict";var e=r(37),a=r(2),u=Object(a.a)(function(t,n,r){for(var a=[],u=0,c=n.length;u<c;)Object(e.a)(t,n[u],r)||Object(e.a)(t,n[u],a)||a.push(n[u]),u+=1;return a});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){var r={};for(var e in n)r[e]=n[e];return delete r[t],r});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){var e=Array.prototype.slice.call(r,0);return e.splice(t,n),e});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(172),c=r(11),i=Object(e.a)(Object(a.a)(["drop"],u.a,function(t,n){return Object(c.a)(Math.max(0,t),1/0,n)}));n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.pred=t,this.lastValue=void 0,this.seenFirstValue=!1}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){var r=!1;return this.seenFirstValue?this.pred(this.lastValue,n)&&(r=!0):this.seenFirstValue=!0,this.lastValue=n,r?t:this.xf["@@transducer/step"](t,n)},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(95),c=r(97),i=Object(e.a)(Object(a.a)([],u.a,function(t,n){var r=[],e=1,a=n.length;if(0!==a)for(r[0]=n[0];e<a;)t(Object(c.a)(r),n[e])||(r[r.length]=n[e]),e+=1;return r}));n.a=i},function(t,n,r){"use strict";var e=r(25),a=Object(e.a)(-1);n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t||n});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(68),u=r(15),c=r(55),i=r(22),o=Object(e.a)(function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():Object(u.a)(t)?[]:Object(i.a)(t)?"":Object(c.a)(t)?{}:Object(a.a)(t)?function(){return arguments}():void 0});n.a=o},function(t,n,r){"use strict";var e=r(0),a=r(94),u=Object(e.a)(function(t,n){return Object(a.a)(t>=0?n.length-t:0,n)});n.a=u},function(t,n,r){"use strict";var e=r(216),a=r(0),u=Object(a.a)(function(t,n){for(var r,a,u=new e.a,c=[],i=0;i<n.length;)a=n[i],r=t(a),u.add(r)&&c.push(a),i+=1;return c});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){var r={};return r[t]=n,r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return null!=n&&n.constructor===t||n instanceof t});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(88),u=Object(e.a)(function(t){return Object(a.a)(function(){return Array.prototype.slice.call(arguments,0)},t)});n.a=u},function(t,n,r){"use strict";var e=r(1),a=r(106),u=Object(e.a)(function(t){return null!=t&&Object(a.a)(t.length)?t.length:NaN});n.a=u},function(t,n,r){"use strict";function e(t){return"[object Number]"===Object.prototype.toString.call(t)}n.a=e},function(t,n,r){"use strict";var e=r(1),a=r(108),u=Object(e.a)(function(t){return Object(a.a)(t)/t.length});n.a=u},function(t,n,r){"use strict";var e=r(28),a=r(14),u=Object(a.a)(e.a,0);n.a=u},function(t,n,r){"use strict";var e=r(12),a=r(0),u=r(6),c=Object(a.a)(function(t,n){var r={};return Object(e.a)(n.length,function(){var e=t.apply(this,arguments);return Object(u.a)(e,r)||(r[e]=n.apply(this,arguments)),r[e]})});n.a=c},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t*n});n.a=a},function(t,n,r){"use strict";var e=r(2),a=function(t){return{value:t,map:function(n){return a(n(t))}}},u=Object(e.a)(function(t,n,r){return t(function(t){return a(n(t))})(r).value});n.a=u},function(t,n,r){"use strict";function e(t){return Object(u.a)(function(n,r){return Object(a.a)(Math.max(0,n.length-r.length),function(){return n.apply(this,t(r,arguments))})})}n.a=e;var a=r(12),u=r(0)},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r={},e=0,a=t.length;e<a;){var u=t[e];r[u]=n[u],e+=1}return r});n.a=a},function(t,n,r){"use strict";var e=r(10),a=r(0),u=Object(a.a)(function(t,n){return Object(e.a)([t],n)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(5),u=Object(e.a)(function(t,n){return Object(a.a)(n.length,function(){for(var r=[],e=0;e<n.length;)r.push(n[e].call(this,arguments[e])),e+=1;return t.apply(this,r.concat(Array.prototype.slice.call(arguments,n.length)))})});n.a=u},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){for(var e=r.length-1;e>=0;)n=t(r[e],n),e-=1;return n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){var r,e=Number(n),a=0;if(e<0||isNaN(e))throw new RangeError("n must be a non-negative number");for(r=new Array(e);a<e;)r[a]=t(a),a+=1;return r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(45),u=r(7),c=r(114),i=r(116),o=Object(e.a)(function(t,n){return"function"==typeof n.sequence?n.sequence(t):Object(i.a)(function(t,n){return Object(a.a)(Object(u.a)(c.a,t),n)},t([]),n)});n.a=o},function(t,n,r){"use strict";var e=r(37),a=r(0),u=Object(a.a)(function(t,n){for(var r,a=0,u=n.length,c=[];a<u;)r=n[a],Object(e.a)(t,r,c)||(c[c.length]=r),a+=1;return c});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(6),u=Object(e.a)(function(t,n){for(var r in t)if(Object(a.a)(r,t)&&!t[r](n[r]))return!1;return!0});n.a=u},function(t,n,r){"use strict";function e(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var r=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==n?r:3&r|8).toString(16)})}n.__esModule=!0,n.default=e},function(t,n,r){"use strict";var e=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])};return function(n,r){function e(){this.constructor=n}t(n,r),n.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}();n.__esModule=!0;var a=r(121),u=r(63),c=function(){function t(t,n,r){this.key=a.default(),this.type=t,this.element=n,this.children=r}return t}();n.Node=c;var i=function(t){function n(n,r,e,a,u,c){var i=t.call(this,e,c,u)||this;return i.start=n,i.end=r,i.text=a,i.children=u,i}return e(n,t),n.prototype.boundaries=function(){return{lower:this.start,upper:this.end}},n.prototype.isParentOf=function(t){return this.start<=t.start&&this.end>=t.end},n.prototype.setChildren=function(t){return new n(this.start,this.end,this.type,this.text,t,this.element)},n.slice=function(t,r,e,a){return new n(r,e,t.type,a.slice(r,e),t.children,t.element)},n}(c);n.SpanNode=i;var o=function(t){function n(n,r,e){var a={type:u.NODE_TYPES.span,start:n,end:r,text:e};return t.call(this,n,r,u.NODE_TYPES.span,e,[],a)||this}return e(n,t),n}(i);n.TextNode=o;var s=function(t){function n(n,r,e){return void 0===e&&(e=[]),t.call(this,n,r,e)||this}return e(n,t),n}(c);n.BlockNode=s;var f=function(t){function n(n,r){return t.call(this,u.NODE_TYPES.listItem,n,r)||this}return e(n,t),n}(s);n.ListItemBlockNode=f;var l=function(t){function n(n,r){return t.call(this,u.NODE_TYPES.oListItem,n,r)||this}return e(n,t),n}(s);n.OrderedListItemBlockNode=l;var v=function(t){function n(n,r){return t.call(this,u.NODE_TYPES.oList,n,r)||this}return e(n,t),n.prototype.addChild=function(t){var r=this.children.concat(t);return new n(this.element,r)},n}(s);n.OrderedListBlockNode=v;var p=function(t){function n(n,r){return t.call(this,u.NODE_TYPES.list,n,r)||this}return e(n,t),n.prototype.addChild=function(t){var r=this.children.concat(t);return new n(this.element,r)},n}(s);n.ListBlockNode=p},function(t,n,r){t.exports=r(124)},function(t,n,r){"use strict";n.__esModule=!0;var e=r(125),a=r(64),u=r(327);t.exports={asText:e.default,asTree:a.default.fromRichText,serialize:u.default,Elements:a.default.NODE_TYPES}},function(t,n,r){"use strict";function e(t,n){var r="string"==typeof n?n:" ";return t.map(function(t){return t.text}).join(r)}n.__esModule=!0,n.default=e},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r(127);r.d(n,"F",function(){return e.a});var a=r(128);r.d(n,"T",function(){return a.a});var u=r(129);r.d(n,"__",function(){return u.a});var c=r(28);r.d(n,"add",function(){return c.a});var i=r(130);r.d(n,"addIndex",function(){return i.a});var o=r(65);r.d(n,"adjust",function(){return o.a});var s=r(131);r.d(n,"all",function(){return s.a});var f=r(133);r.d(n,"allPass",function(){return f.a});var l=r(17);r.d(n,"always",function(){return l.a});var v=r(69);r.d(n,"and",function(){return v.a});var p=r(70);r.d(n,"any",function(){return p.a});var b=r(135);r.d(n,"anyPass",function(){return b.a});var O=r(45);r.d(n,"ap",function(){return O.a});var d=r(136);r.d(n,"aperture",function(){return d.a});var j=r(139);r.d(n,"append",function(){return j.a});var h=r(72);r.d(n,"apply",function(){return h.a});var y=r(140);r.d(n,"applySpec",function(){return y.a});var g=r(141);r.d(n,"applyTo",function(){return g.a});var m=r(142);r.d(n,"ascend",function(){return m.a});var x=r(32);r.d(n,"assoc",function(){return x.a});var w=r(74);r.d(n,"assocPath",function(){return w.a});var E=r(143);r.d(n,"binary",function(){return E.a});var _=r(67);r.d(n,"bind",function(){return _.a});var S=r(144);r.d(n,"both",function(){return S.a});var N=r(145);r.d(n,"call",function(){return N.a});var T=r(48);r.d(n,"chain",function(){return T.a});var P=r(149);r.d(n,"clamp",function(){return P.a});var A=r(150);r.d(n,"clone",function(){return A.a});var k=r(151);r.d(n,"comparator",function(){return k.a});var I=r(152);r.d(n,"complement",function(){return I.a});var D=r(50);r.d(n,"compose",function(){return D.a});var B=r(82);r.d(n,"composeK",function(){return B.a});var L=r(154);r.d(n,"composeP",function(){return L.a});var Y=r(52);r.d(n,"concat",function(){return Y.a});var R=r(163);r.d(n,"cond",function(){return R.a});var q=r(164);r.d(n,"construct",function(){return q.a});var C=r(87);r.d(n,"constructN",function(){return C.a});var W=r(165);r.d(n,"contains",function(){return W.a});var M=r(88);r.d(n,"converge",function(){return M.a});var F=r(166);r.d(n,"countBy",function(){return F.a});var U=r(47);r.d(n,"curry",function(){return U.a});var z=r(5);r.d(n,"curryN",function(){return z.a});var K=r(168);r.d(n,"dec",function(){return K.a});var V=r(89);r.d(n,"defaultTo",function(){return V.a});var $=r(169);r.d(n,"descend",function(){return $.a});var H=r(90);r.d(n,"difference",function(){return H.a});var J=r(91);r.d(n,"differenceWith",function(){return J.a});var X=r(92);r.d(n,"dissoc",function(){return X.a});var Z=r(170);r.d(n,"dissocPath",function(){return Z.a});var G=r(171);r.d(n,"divide",function(){return G.a});var Q=r(94);r.d(n,"drop",function(){return Q.a});var tt=r(173);r.d(n,"dropLast",function(){return tt.a});var nt=r(177);r.d(n,"dropLastWhile",function(){return nt.a});var rt=r(180);r.d(n,"dropRepeats",function(){return rt.a});var et=r(96);r.d(n,"dropRepeatsWith",function(){return et.a});var at=r(181);r.d(n,"dropWhile",function(){return at.a});var ut=r(183);r.d(n,"either",function(){return ut.a});var ct=r(99);r.d(n,"empty",function(){return ct.a});var it=r(184);r.d(n,"endsWith",function(){return it.a});var ot=r(185);r.d(n,"eqBy",function(){return ot.a});var st=r(186);r.d(n,"eqProps",function(){return st.a});var ft=r(9);r.d(n,"equals",function(){return ft.a});var lt=r(187);r.d(n,"evolve",function(){return lt.a});var vt=r(53);r.d(n,"filter",function(){return vt.a});var pt=r(188);r.d(n,"find",function(){return pt.a});var bt=r(190);r.d(n,"findIndex",function(){return bt.a});var Ot=r(192);r.d(n,"findLast",function(){return Ot.a});var dt=r(194);r.d(n,"findLastIndex",function(){return dt.a});var jt=r(196);r.d(n,"flatten",function(){return jt.a});var ht=r(40);r.d(n,"flip",function(){return ht.a});var yt=r(197);r.d(n,"forEach",function(){return yt.a});var gt=r(198);r.d(n,"forEachObjIndexed",function(){return gt.a});var mt=r(199);r.d(n,"fromPairs",function(){return mt.a});var xt=r(200);r.d(n,"groupBy",function(){return xt.a});var wt=r(201);r.d(n,"groupWith",function(){return wt.a});var Et=r(202);r.d(n,"gt",function(){return Et.a});var _t=r(203);r.d(n,"gte",function(){return _t.a});var St=r(204);r.d(n,"has",function(){return St.a});var Nt=r(205);r.d(n,"hasIn",function(){return Nt.a});var Tt=r(206);r.d(n,"head",function(){return Tt.a});var Pt=r(85);r.d(n,"identical",function(){return Pt.a});var At=r(58);r.d(n,"identity",function(){return At.a});var kt=r(207);r.d(n,"ifElse",function(){return kt.a});var It=r(208);r.d(n,"inc",function(){return It.a});var Dt=r(209);r.d(n,"indexBy",function(){return Dt.a});var Bt=r(210);r.d(n,"indexOf",function(){return Bt.a});var Lt=r(211);r.d(n,"init",function(){return Lt.a});var Yt=r(212);r.d(n,"innerJoin",function(){return Yt.a});var Rt=r(213);r.d(n,"insert",function(){return Rt.a});var qt=r(214);r.d(n,"insertAll",function(){return qt.a});var Ct=r(215);r.d(n,"intersection",function(){return Ct.a});var Wt=r(217);r.d(n,"intersperse",function(){return Wt.a});var Mt=r(218);r.d(n,"into",function(){return Mt.a});var Ft=r(221);r.d(n,"invert",function(){return Ft.a});var Ut=r(222);r.d(n,"invertObj",function(){return Ut.a});var zt=r(26);r.d(n,"invoker",function(){return zt.a});var Kt=r(103);r.d(n,"is",function(){return Kt.a});var Vt=r(223);r.d(n,"isEmpty",function(){return Vt.a});var $t=r(75);r.d(n,"isNil",function(){return $t.a});var Ht=r(224);r.d(n,"join",function(){return Ht.a});var Jt=r(104);r.d(n,"juxt",function(){return Jt.a});var Xt=r(13);r.d(n,"keys",function(){return Xt.a});var Zt=r(225);r.d(n,"keysIn",function(){return Zt.a});var Gt=r(97);r.d(n,"last",function(){return Gt.a});var Qt=r(226);r.d(n,"lastIndexOf",function(){return Qt.a});var tn=r(105);r.d(n,"length",function(){return tn.a});var nn=r(41);r.d(n,"lens",function(){return nn.a});var rn=r(227);r.d(n,"lensIndex",function(){return rn.a});var en=r(228);r.d(n,"lensPath",function(){return en.a});var an=r(229);r.d(n,"lensProp",function(){return an.a});var un=r(35);r.d(n,"lift",function(){return un.a});var cn=r(76);r.d(n,"liftN",function(){return cn.a});var on=r(230);r.d(n,"lt",function(){return on.a});var sn=r(231);r.d(n,"lte",function(){return sn.a});var fn=r(7);r.d(n,"map",function(){return fn.a});var ln=r(232);r.d(n,"mapAccum",function(){return ln.a});var vn=r(233);r.d(n,"mapAccumRight",function(){return vn.a});var pn=r(234);r.d(n,"mapObjIndexed",function(){return pn.a});var bn=r(235);r.d(n,"match",function(){return bn.a});var On=r(236);r.d(n,"mathMod",function(){return On.a});var dn=r(18);r.d(n,"max",function(){return dn.a});var jn=r(237);r.d(n,"maxBy",function(){return jn.a});var hn=r(107);r.d(n,"mean",function(){return hn.a});var yn=r(238);r.d(n,"median",function(){return yn.a});var gn=r(239);r.d(n,"memoize",function(){return gn.a});var mn=r(109);r.d(n,"memoizeWith",function(){return mn.a});var xn=r(240);r.d(n,"merge",function(){return xn.a});var wn=r(241);r.d(n,"mergeAll",function(){return wn.a});var En=r(242);r.d(n,"mergeDeepLeft",function(){return En.a});var _n=r(243);r.d(n,"mergeDeepRight",function(){return _n.a});var Sn=r(244);r.d(n,"mergeDeepWith",function(){return Sn.a});var Nn=r(42);r.d(n,"mergeDeepWithKey",function(){return Nn.a});var Tn=r(245);r.d(n,"mergeWith",function(){return Tn.a});var Pn=r(62);r.d(n,"mergeWithKey",function(){return Pn.a});var An=r(246);r.d(n,"min",function(){return An.a});var kn=r(247);r.d(n,"minBy",function(){return kn.a});var In=r(248);r.d(n,"modulo",function(){return In.a});var Dn=r(110);r.d(n,"multiply",function(){return Dn.a});var Bn=r(33);r.d(n,"nAry",function(){return Bn.a});var Ln=r(249);r.d(n,"negate",function(){return Ln.a});var Yn=r(250);r.d(n,"none",function(){return Yn.a});var Rn=r(80);r.d(n,"not",function(){return Rn.a});var qn=r(25);r.d(n,"nth",function(){return qn.a});var Cn=r(251);r.d(n,"nthArg",function(){return Cn.a});var Wn=r(252);r.d(n,"o",function(){return Wn.a});var Mn=r(102);r.d(n,"objOf",function(){return Mn.a});var Fn=r(253);r.d(n,"of",function(){return Fn.a});var Un=r(255);r.d(n,"omit",function(){return Un.a});var zn=r(256);r.d(n,"once",function(){return zn.a});var Kn=r(98);r.d(n,"or",function(){return Kn.a});var Vn=r(111);r.d(n,"over",function(){return Vn.a});var $n=r(257);r.d(n,"pair",function(){return $n.a});var Hn=r(258);r.d(n,"partial",function(){return Hn.a});var Jn=r(259);r.d(n,"partialRight",function(){return Jn.a});var Xn=r(260);r.d(n,"partition",function(){return Xn.a});var Zn=r(19);r.d(n,"path",function(){return Zn.a});var Gn=r(261);r.d(n,"pathEq",function(){return Gn.a});var Qn=r(262);r.d(n,"pathOr",function(){return Qn.a});var tr=r(263);r.d(n,"pathSatisfies",function(){return tr.a});var nr=r(264);r.d(n,"pick",function(){return nr.a});var rr=r(113);r.d(n,"pickAll",function(){return rr.a});var er=r(265);r.d(n,"pickBy",function(){return er.a});var ar=r(81);r.d(n,"pipe",function(){return ar.a});var ur=r(266);r.d(n,"pipeK",function(){return ur.a});var cr=r(83);r.d(n,"pipeP",function(){return cr.a});var ir=r(21);r.d(n,"pluck",function(){return ir.a});var or=r(114);r.d(n,"prepend",function(){return or.a});var sr=r(267);r.d(n,"product",function(){return sr.a});var fr=r(268);r.d(n,"project",function(){return fr.a});var lr=r(44);r.d(n,"prop",function(){return lr.a});var vr=r(269);r.d(n,"propEq",function(){return vr.a});var pr=r(270);r.d(n,"propIs",function(){return pr.a});var br=r(271);r.d(n,"propOr",function(){return br.a});var Or=r(272);r.d(n,"propSatisfies",function(){return Or.a});var dr=r(273);r.d(n,"props",function(){return dr.a});var jr=r(274);r.d(n,"range",function(){return jr.a});var hr=r(14);r.d(n,"reduce",function(){return hr.a});var yr=r(39);r.d(n,"reduceBy",function(){return yr.a});var gr=r(116);r.d(n,"reduceRight",function(){return gr.a});var mr=r(275);r.d(n,"reduceWhile",function(){return mr.a});var xr=r(276);r.d(n,"reduced",function(){return xr.a});var wr=r(38);r.d(n,"reject",function(){return wr.a});var Er=r(93);r.d(n,"remove",function(){return Er.a});var _r=r(277);r.d(n,"repeat",function(){return _r.a});var Sr=r(278);r.d(n,"replace",function(){return Sr.a});var Nr=r(36);r.d(n,"reverse",function(){return Nr.a});var Tr=r(279);r.d(n,"scan",function(){return Tr.a});var Pr=r(118);r.d(n,"sequence",function(){return Pr.a});var Ar=r(280);r.d(n,"set",function(){return Ar.a});var kr=r(11);r.d(n,"slice",function(){return kr.a});var Ir=r(281);r.d(n,"sort",function(){return Ir.a});var Dr=r(282);r.d(n,"sortBy",function(){return Dr.a});var Br=r(283);r.d(n,"sortWith",function(){return Br.a});var Lr=r(284);r.d(n,"split",function(){return Lr.a});var Yr=r(285);r.d(n,"splitAt",function(){return Yr.a});var Rr=r(286);r.d(n,"splitEvery",function(){return Rr.a});var qr=r(287);r.d(n,"splitWhen",function(){return qr.a});var Cr=r(288);r.d(n,"startsWith",function(){return Cr.a});var Wr=r(289);r.d(n,"subtract",function(){return Wr.a});var Mr=r(108);r.d(n,"sum",function(){return Mr.a});var Fr=r(290);r.d(n,"symmetricDifference",function(){return Fr.a});var Ur=r(291);r.d(n,"symmetricDifferenceWith",function(){return Ur.a});var zr=r(51);r.d(n,"tail",function(){return zr.a});var Kr=r(57);r.d(n,"take",function(){return Kr.a});var Vr=r(100);r.d(n,"takeLast",function(){return Vr.a});var $r=r(292);r.d(n,"takeLastWhile",function(){return $r.a});var Hr=r(293);r.d(n,"takeWhile",function(){return Hr.a});var Jr=r(295);r.d(n,"tap",function(){return Jr.a});var Xr=r(297);r.d(n,"test",function(){return Xr.a});var Zr=r(117);r.d(n,"times",function(){return Zr.a});var Gr=r(299);r.d(n,"toLower",function(){return Gr.a});var Qr=r(300);r.d(n,"toPairs",function(){return Qr.a});var te=r(301);r.d(n,"toPairsIn",function(){return te.a});var ne=r(24);r.d(n,"toString",function(){return ne.a});var re=r(302);r.d(n,"toUpper",function(){return re.a});var ee=r(303);r.d(n,"transduce",function(){return ee.a});var ae=r(304);r.d(n,"transpose",function(){return ae.a});var ue=r(305);r.d(n,"traverse",function(){return ue.a});var ce=r(306);r.d(n,"trim",function(){return ce.a});var ie=r(307);r.d(n,"tryCatch",function(){return ie.a});var oe=r(49);r.d(n,"type",function(){return oe.a});var se=r(308);r.d(n,"unapply",function(){return se.a});var fe=r(309);r.d(n,"unary",function(){return fe.a});var le=r(310);r.d(n,"uncurryN",function(){return le.a});var ve=r(311);r.d(n,"unfold",function(){return ve.a});var pe=r(312);r.d(n,"union",function(){return pe.a});var be=r(313);r.d(n,"unionWith",function(){return be.a});var Oe=r(60);r.d(n,"uniq",function(){return Oe.a});var de=r(101);r.d(n,"uniqBy",function(){return de.a});var je=r(119);r.d(n,"uniqWith",function(){return je.a});var he=r(314);r.d(n,"unless",function(){return he.a});var ye=r(315);r.d(n,"unnest",function(){return ye.a});var ge=r(316);r.d(n,"until",function(){return ge.a});var me=r(56);r.d(n,"update",function(){return me.a});var xe=r(115);r.d(n,"useWith",function(){return xe.a});var we=r(73);r.d(n,"values",function(){return we.a});var Ee=r(317);r.d(n,"valuesIn",function(){return Ee.a});var _e=r(318);r.d(n,"view",function(){return _e.a});var Se=r(319);r.d(n,"when",function(){return Se.a});var Ne=r(120);r.d(n,"where",function(){return Ne.a});var Te=r(320);r.d(n,"whereEq",function(){return Te.a});var Pe=r(321);r.d(n,"without",function(){return Pe.a});var Ae=r(322);r.d(n,"xprod",function(){return Ae.a});var ke=r(323);r.d(n,"zip",function(){return ke.a});var Ie=r(324);r.d(n,"zipObj",function(){return Ie.a});var De=r(325);r.d(n,"zipWith",function(){return De.a})},function(t,n,r){"use strict";var e=r(17),a=Object(e.a)(!1);n.a=a},function(t,n,r){"use strict";var e=r(17),a=Object(e.a)(!0);n.a=a},function(t,n,r){"use strict";n.a={"@@functional/placeholder":!0}},function(t,n,r){"use strict";var e=r(10),a=r(1),u=r(5),c=Object(a.a)(function(t){return Object(u.a)(t.length,function(){var n=0,r=arguments[0],a=arguments[arguments.length-1],u=Array.prototype.slice.call(arguments,0);return u[0]=function(){var t=r.apply(this,Object(e.a)(arguments,[n,a]));return n+=1,t},t.apply(this,u)})});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(132),c=Object(e.a)(Object(a.a)(["all"],u.a,function(t,n){for(var r=0;r<n.length;){if(!t(n[r]))return!1;r+=1}return!0}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(16),u=r(4),c=function(){function t(t,n){this.xf=n,this.f=t,this.all=!0}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){return this.all&&(t=this.xf["@@transducer/step"](t,!0)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)||(this.all=!1,t=Object(a.a)(this.xf["@@transducer/step"](t,!1))),t},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(1),a=r(5),u=r(18),c=r(21),i=r(14),o=Object(e.a)(function(t){return Object(a.a)(Object(i.a)(u.a,0,Object(c.a)("length",t)),function(){for(var n=0,r=t.length;n<r;){if(!t[n].apply(this,arguments))return!1;n+=1}return!0})});n.a=o},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(1),a=r(5),u=r(18),c=r(21),i=r(14),o=Object(e.a)(function(t){return Object(a.a)(Object(i.a)(u.a,0,Object(c.a)("length",t)),function(){for(var n=0,r=t.length;n<r;){if(t[n].apply(this,arguments))return!0;n+=1}return!1})});n.a=o},function(t,n,r){"use strict";var e=r(137),a=r(0),u=r(3),c=r(138),i=Object(a.a)(Object(u.a)([],c.a,e.a));n.a=i},function(t,n,r){"use strict";function e(t,n){for(var r=0,e=n.length-(t-1),a=new Array(e>=0?e:0);r<e;)a[r]=Array.prototype.slice.call(n,r,r+t),r+=1;return a}n.a=e},function(t,n,r){"use strict";var e=r(10),a=r(0),u=r(4),c=function(){function t(t,n){this.xf=n,this.pos=0,this.full=!1,this.acc=new Array(t)}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){return this.acc=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.store(n),this.full?this.xf["@@transducer/step"](t,this.getCopy()):t},t.prototype.store=function(t){this.acc[this.pos]=t,this.pos+=1,this.pos===this.acc.length&&(this.pos=0,this.full=!0)},t.prototype.getCopy=function(){return Object(e.a)(Array.prototype.slice.call(this.acc,this.pos),Array.prototype.slice.call(this.acc,0,this.pos))},t}(),i=Object(a.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(10),a=r(0),u=Object(a.a)(function(t,n){return Object(e.a)(n,[t])});n.a=u},function(t,n,r){"use strict";var e=r(1),a=r(72),u=r(5),c=r(7),i=r(18),o=r(21),s=r(14),f=r(73),l=Object(e.a)(function t(n){return n=Object(c.a)(function(n){return"function"==typeof n?n:t(n)},n),Object(u.a)(Object(s.a)(i.a,0,Object(o.a)("length",Object(f.a)(n))),function(){var t=arguments;return Object(c.a)(function(n){return Object(a.a)(n,t)},n)})});n.a=l},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return n(t)});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){var e=t(n),a=t(r);return e<a?-1:e>a?1:0});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(33),u=Object(e.a)(function(t){return Object(a.a)(2,t)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(34),u=r(69),c=r(35),i=Object(e.a)(function(t,n){return Object(a.a)(t)?function(){return t.apply(this,arguments)&&n.apply(this,arguments)}:Object(c.a)(u.a)(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(47),a=Object(e.a)(function(t){return t.apply(this,Array.prototype.slice.call(arguments,1))});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(147),u=r(7),c=Object(e.a)(function(t,n){return Object(u.a)(t,Object(a.a)(n))});n.a=c},function(t,n,r){"use strict";var e=r(148),a=r(31),u=r(8),c=r(4),i=function(t){return{"@@transducer/init":c.a.init,"@@transducer/result":function(n){return t["@@transducer/result"](n)},"@@transducer/step":function(n,r){var a=t["@@transducer/step"](n,r);return a["@@transducer/reduced"]?Object(e.a)(a):a}}},o=function(t){var n=i(t);return{"@@transducer/init":c.a.init,"@@transducer/result":function(t){return n["@@transducer/result"](t)},"@@transducer/step":function(t,r){return Object(a.a)(r)?Object(u.a)(n,t,r):Object(u.a)(n,t,[r])}}};n.a=o},function(t,n,r){"use strict";function e(t){return{"@@transducer/value":t,"@@transducer/reduced":!0}}n.a=e},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){if(t>n)throw new Error("min must not be greater than max in clamp(min, max, value)");return r<t?t:r>n?n:r});n.a=a},function(t,n,r){"use strict";var e=r(78),a=r(1),u=Object(a.a)(function(t){return null!=t&&"function"==typeof t.clone?t.clone():Object(e.a)(t,[],[],!0)});n.a=u},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return function(n,r){return t(n,r)?-1:t(r,n)?1:0}});n.a=a},function(t,n,r){"use strict";var e=r(35),a=r(80),u=Object(e.a)(a.a);n.a=u},function(t,n,r){"use strict";function e(t,n){return function(){return n.call(this,t.apply(this,arguments))}}n.a=e},function(t,n,r){"use strict";function e(){if(0===arguments.length)throw new Error("composeP requires at least one argument");return a.a.apply(this,Object(u.a)(arguments))}n.a=e;var a=r(83),u=r(36)},function(t,n,r){"use strict";function e(t,n){return function(){var r=this;return t.apply(r,arguments).then(function(t){return n.call(r,t)})}}n.a=e},function(t,n,r){"use strict";function e(t,n){var r=function(r){var u=n.concat([t]);return Object(a.a)(r,u)?"<Circular>":e(r,u)},f=function(t,n){return Object(u.a)(function(n){return Object(c.a)(n)+": "+r(t[n])},n.slice().sort())};switch(Object.prototype.toString.call(t)){case"[object Arguments]":return"(function() { return arguments; }("+Object(u.a)(r,t).join(", ")+"))";case"[object Array]":return"["+Object(u.a)(r,t).concat(f(t,Object(s.a)(function(t){return/^\d+$/.test(t)},Object(o.a)(t)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof t?"new Boolean("+r(t.valueOf())+")":t.toString();case"[object Date]":return"new Date("+(isNaN(t.valueOf())?r(NaN):Object(c.a)(Object(i.a)(t)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof t?"new Number("+r(t.valueOf())+")":1/t==-1/0?"-0":t.toString(10);case"[object String]":return"object"==typeof t?"new String("+r(t.valueOf())+")":Object(c.a)(t);case"[object Undefined]":return"undefined";default:if("function"==typeof t.toString){var l=t.toString();if("[object Object]"!==l)return l}return"{"+f(t,Object(o.a)(t)).join(", ")+"}"}}n.a=e;var a=r(20),u=r(30),c=r(160),i=r(161),o=r(13),s=r(38)},function(t,n,r){"use strict";function e(t,n,r,e){function i(t,n){return a(t,n,r.slice(),e.slice())}var o=Object(u.a)(t),s=Object(u.a)(n);return!Object(c.a)(function(t,n){return!Object(c.a)(i,n,t)},s,o)}function a(t,n,r,u){if(Object(s.a)(t,n))return!0;var c=Object(l.a)(t);if(c!==Object(l.a)(n))return!1;if(null==t||null==n)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(c){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===Object(i.a)(t.constructor))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!Object(s.a)(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!Object(s.a)(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var v=r.length-1;v>=0;){if(r[v]===t)return u[v]===n;v-=1}switch(c){case"Map":return t.size===n.size&&e(t.entries(),n.entries(),r.concat([t]),u.concat([n]));case"Set":return t.size===n.size&&e(t.values(),n.values(),r.concat([t]),u.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var p=Object(f.a)(t);if(p.length!==Object(f.a)(n).length)return!1;var b=r.concat([t]),O=u.concat([n]);for(v=p.length-1;v>=0;){var d=p[v];if(!Object(o.a)(d,n)||!a(n[d],t[d],b,O))return!1;v-=1}return!0}n.a=a;var u=r(158),c=r(37),i=r(159),o=r(6),s=r(85),f=r(13),l=r(49)},function(t,n,r){"use strict";function e(t){for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}n.a=e},function(t,n,r){"use strict";function e(t){var n=String(t).match(/^function (\w*)/);return null==n?"":n[1]}n.a=e},function(t,n,r){"use strict";function e(t){return'"'+t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}n.a=e},function(t,n,r){"use strict";var e=function(t){return(t<10?"0":"")+t},a="function"==typeof Date.prototype.toISOString?function(t){return t.toISOString()}:function(t){return t.getUTCFullYear()+"-"+e(t.getUTCMonth()+1)+"-"+e(t.getUTCDate())+"T"+e(t.getUTCHours())+":"+e(t.getUTCMinutes())+":"+e(t.getUTCSeconds())+"."+(t.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(12),a=r(1),u=r(7),c=r(18),i=r(14),o=Object(a.a)(function(t){var n=Object(i.a)(c.a,0,Object(u.a)(function(t){return t[0].length},t));return Object(e.a)(n,function(){for(var n=0;n<t.length;){if(t[n][0].apply(this,arguments))return t[n][1].apply(this,arguments);n+=1}})});n.a=o},function(t,n,r){"use strict";var e=r(1),a=r(87),u=Object(e.a)(function(t){return Object(a.a)(t.length,t)});n.a=u},function(t,n,r){"use strict";var e=r(20),a=r(0),u=Object(a.a)(e.a);n.a=u},function(t,n,r){"use strict";var e=r(39),a=Object(e.a)(function(t,n){return t+1},0);n.a=a},function(t,n,r){"use strict";var e=r(29),a=r(6),u=r(4),c=function(){function t(t,n,r,e){this.valueFn=t,this.valueAcc=n,this.keyFn=r,this.xf=e,this.inputs={}}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){var n;for(n in this.inputs)if(Object(a.a)(n,this.inputs)&&(t=this.xf["@@transducer/step"](t,this.inputs[n]),t["@@transducer/reduced"])){t=t["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){var r=this.keyFn(n);return this.inputs[r]=this.inputs[r]||[r,this.valueAcc],this.inputs[r][1]=this.valueFn(this.inputs[r][1],n),t},t}(),i=Object(e.a)(4,[],function(t,n,r,e){return new c(t,n,r,e)});n.a=i},function(t,n,r){"use strict";var e=r(28),a=Object(e.a)(-1);n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){var e=t(n),a=t(r);return e>a?-1:e<a?1:0});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(46),u=r(32),c=r(92),i=r(93),o=r(56),s=Object(e.a)(function t(n,r){switch(n.length){case 0:return r;case 1:return Object(a.a)(n[0])?Object(i.a)(n[0],1,r):Object(c.a)(n[0],r);default:var e=n[0],s=Array.prototype.slice.call(n,1);return null==r[e]?r:Object(a.a)(n[0])?Object(o.a)(e,t(s,r[e]),r):Object(u.a)(e,t(s,r[e]),r)}});n.a=s},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t/n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.n=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.n>0?(this.n-=1,t):this.xf["@@transducer/step"](t,n)},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(174),c=r(176),i=Object(e.a)(Object(a.a)([],c.a,u.a));n.a=i},function(t,n,r){"use strict";function e(t,n){return Object(a.a)(t<n.length?n.length-t:0,n)}n.a=e;var a=r(57)},function(t,n,r){"use strict";var e=r(0),a=r(16),u=r(4),c=function(){function t(t,n){this.xf=n,this.n=t,this.i=0}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=u.a.result,t.prototype["@@transducer/step"]=function(t,n){this.i+=1;var r=0===this.n?t:this.xf["@@transducer/step"](t,n);return this.n>=0&&this.i>=this.n?Object(a.a)(r):r},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.pos=0,this.full=!1,this.acc=new Array(t)}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=function(t){return this.acc=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.full&&(t=this.xf["@@transducer/step"](t,this.acc[this.pos])),this.store(n),t},t.prototype.store=function(t){this.acc[this.pos]=t,this.pos+=1,this.pos===this.acc.length&&(this.pos=0,this.full=!0)},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(178),c=r(179),i=Object(e.a)(Object(a.a)([],c.a,u.a));n.a=i},function(t,n,r){"use strict";function e(t,n){for(var r=n.length-1;r>=0&&t(n[r]);)r-=1;return Object(a.a)(0,r+1,n)}n.a=e;var a=r(11)},function(t,n,r){"use strict";var e=r(0),a=r(8),u=r(4),c=function(){function t(t,n){this.f=t,this.retained=[],this.xf=n}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){return this.retained=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.retain(t,n):this.flush(t,n)},t.prototype.flush=function(t,n){return t=Object(a.a)(this.xf["@@transducer/step"],t,this.retained),this.retained=[],this.xf["@@transducer/step"](t,n)},t.prototype.retain=function(t,n){return this.retained.push(n),t},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(1),a=r(3),u=r(95),c=r(96),i=r(9),o=Object(e.a)(Object(a.a)([],Object(u.a)(i.a),Object(c.a)(i.a)));n.a=o},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(182),c=r(11),i=Object(e.a)(Object(a.a)(["dropWhile"],u.a,function(t,n){for(var r=0,e=n.length;r<e&&t(n[r]);)r+=1;return Object(c.a)(r,1/0,n)}));n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){if(this.f){if(this.f(n))return t;this.f=null}return this.xf["@@transducer/step"](t,n)},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(34),u=r(35),c=r(98),i=Object(e.a)(function(t,n){return Object(a.a)(t)?function(){return t.apply(this,arguments)||n.apply(this,arguments)}:Object(u.a)(c.a)(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(9),u=r(100),c=Object(e.a)(function(t,n){return Object(a.a)(Object(u.a)(t.length,n),t)});n.a=c},function(t,n,r){"use strict";var e=r(2),a=r(9),u=Object(e.a)(function(t,n,r){return Object(a.a)(t(n),t(r))});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(9),u=Object(e.a)(function(t,n,r){return Object(a.a)(n[t],r[t])});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function t(n,r){var e,a,u,c={};for(a in r)e=n[a],u=typeof e,c[a]="function"===u?e(r[a]):e&&"object"===u?t(e,r[a]):r[a];return c});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(189),c=Object(e.a)(Object(a.a)(["find"],u.a,function(t,n){for(var r=0,e=n.length;r<e;){if(t(n[r]))return n[r];r+=1}}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(16),u=r(4),c=function(){function t(t,n){this.xf=n,this.f=t,this.found=!1}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,void 0)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)&&(this.found=!0,t=Object(a.a)(this.xf["@@transducer/step"](t,n))),t},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(191),c=Object(e.a)(Object(a.a)([],u.a,function(t,n){for(var r=0,e=n.length;r<e;){if(t(n[r]))return r;r+=1}return-1}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(16),u=r(4),c=function(){function t(t,n){this.xf=n,this.f=t,this.idx=-1,this.found=!1}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,-1)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.idx+=1,this.f(n)&&(this.found=!0,t=Object(a.a)(this.xf["@@transducer/step"](t,this.idx))),t},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(193),c=Object(e.a)(Object(a.a)([],u.a,function(t,n){for(var r=n.length-1;r>=0;){if(t(n[r]))return n[r];r-=1}}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=function(t){return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t,this.last))},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)&&(this.last=n),t},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(195),c=Object(e.a)(Object(a.a)([],u.a,function(t,n){for(var r=n.length-1;r>=0;){if(t(n[r]))return r;r-=1}return-1}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.f=t,this.idx=-1,this.lastIdx=-1}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=function(t){return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t,this.lastIdx))},t.prototype["@@transducer/step"]=function(t,n){return this.idx+=1,this.f(n)&&(this.lastIdx=this.idx),t},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(1),a=r(77),u=Object(e.a)(Object(a.a)(!0));n.a=u},function(t,n,r){"use strict";var e=r(23),a=r(0),u=Object(a.a)(Object(e.a)("forEach",function(t,n){for(var r=n.length,e=0;e<r;)t(n[e]),e+=1;return n}));n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(13),u=Object(e.a)(function(t,n){for(var r=Object(a.a)(n),e=0;e<r.length;){var u=r[e];t(n[u],u,n),e+=1}return n});n.a=u},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){for(var n={},r=0;r<t.length;)n[t[r][0]]=t[r][1],r+=1;return n});n.a=a},function(t,n,r){"use strict";var e=r(23),a=r(0),u=r(39),c=Object(a.a)(Object(e.a)("groupBy",Object(u.a)(function(t,n){return null==t&&(t=[]),t.push(n),t},null)));n.a=c},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=[],e=0,a=n.length;e<a;){for(var u=e+1;u<a&&t(n[u-1],n[u]);)u+=1;r.push(n.slice(e,u)),e=u}return r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t>n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t>=n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(6),u=Object(e.a)(a.a);n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t in n});n.a=a},function(t,n,r){"use strict";var e=r(25),a=Object(e.a)(0);n.a=a},function(t,n,r){"use strict";var e=r(2),a=r(5),u=Object(e.a)(function(t,n,r){return Object(a.a)(Math.max(t.length,n.length,r.length),function(){return t.apply(this,arguments)?n.apply(this,arguments):r.apply(this,arguments)})});n.a=u},function(t,n,r){"use strict";var e=r(28),a=Object(e.a)(1);n.a=a},function(t,n,r){"use strict";var e=r(39),a=Object(e.a)(function(t,n){return n},null);n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(84),u=r(15),c=Object(e.a)(function(t,n){return"function"!=typeof n.indexOf||Object(u.a)(n)?Object(a.a)(n,t,0):n.indexOf(t)});n.a=c},function(t,n,r){"use strict";var e=r(11),a=Object(e.a)(0,-1);n.a=a},function(t,n,r){"use strict";var e=r(37),a=r(2),u=r(54),c=Object(a.a)(function(t,n,r){return Object(u.a)(function(n){return Object(e.a)(t,n,r)},n)});n.a=c},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){t=t<r.length&&t>=0?t:r.length;var e=Array.prototype.slice.call(r,0);return e.splice(t,0,n),e});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t=t<r.length&&t>=0?t:r.length,[].concat(Array.prototype.slice.call(r,0,t),n,Array.prototype.slice.call(r,t))});n.a=a},function(t,n,r){"use strict";var e=r(20),a=r(0),u=r(54),c=r(40),i=r(60),o=Object(a.a)(function(t,n){var r,a;return t.length>n.length?(r=t,a=n):(r=n,a=t),Object(i.a)(Object(u.a)(Object(c.a)(e.a)(r),a))});n.a=o},function(t,n,r){"use strict";function e(t,n,r){var e,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!r._items["-0"]||(n&&(r._items["-0"]=!0),!1):null!==r._nativeSet?n?(e=r._nativeSet.size,r._nativeSet.add(t),r._nativeSet.size===e):r._nativeSet.has(t):u in r._items?t in r._items[u]||(n&&(r._items[u][t]=!0),!1):(n&&(r._items[u]={},r._items[u][t]=!0),!1);case"boolean":if(u in r._items){var c=t?1:0;return!!r._items[u][c]||(n&&(r._items[u][c]=!0),!1)}return n&&(r._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==r._nativeSet?n?(e=r._nativeSet.size,r._nativeSet.add(t),r._nativeSet.size===e):r._nativeSet.has(t):u in r._items?!!Object(a.a)(t,r._items[u])||(n&&r._items[u].push(t),!1):(n&&(r._items[u]=[t]),!1);case"undefined":return!!r._items[u]||(n&&(r._items[u]=!0),!1);case"object":if(null===t)return!!r._items.null||(n&&(r._items.null=!0),!1);default:return u=Object.prototype.toString.call(t),u in r._items?!!Object(a.a)(t,r._items[u])||(n&&r._items[u].push(t),!1):(n&&(r._items[u]=[t]),!1)}}var a=r(20),u=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!e(t,!0,this)},t.prototype.has=function(t){return e(t,!1,this)},t}();n.a=u},function(t,n,r){"use strict";var e=r(23),a=r(0),u=Object(a.a)(Object(e.a)("intersperse",function(t,n){for(var r=[],e=0,a=n.length;e<a;)e===a-1?r.push(n[e]):r.push(n[e],t),e+=1;return r}));n.a=u},function(t,n,r){"use strict";var e=r(78),a=r(2),u=r(43),c=r(8),i=r(219),o=Object(a.a)(function(t,n,r){return Object(u.a)(t)?Object(c.a)(n(t),t["@@transducer/init"](),r):Object(c.a)(n(Object(i.a)(t)),Object(e.a)(t,[],[],!1),r)});n.a=o},function(t,n,r){"use strict";function e(t){if(Object(i.a)(t))return t;if(Object(c.a)(t))return s;if("string"==typeof t)return f;if("object"==typeof t)return l;throw new Error("Cannot create transformer for "+t)}n.a=e;var a=r(61),u=r(59),c=r(31),i=r(43),o=r(102),s={"@@transducer/init":Array,"@@transducer/step":function(t,n){return t.push(n),t},"@@transducer/result":u.a},f={"@@transducer/init":String,"@@transducer/step":function(t,n){return t+n},"@@transducer/result":u.a},l={"@@transducer/init":Object,"@@transducer/step":function(t,n){return Object(a.a)(t,Object(c.a)(n)?Object(o.a)(n[0],n[1]):n)},"@@transducer/result":u.a}},function(t,n,r){"use strict";function e(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),r=1,e=arguments.length;r<e;){var u=arguments[r];if(null!=u)for(var c in u)Object(a.a)(c,u)&&(n[c]=u[c]);r+=1}return n}n.a=e;var a=r(6)},function(t,n,r){"use strict";var e=r(1),a=r(6),u=r(13),c=Object(e.a)(function(t){for(var n=Object(u.a)(t),r=n.length,e=0,c={};e<r;){var i=n[e],o=t[i],s=Object(a.a)(o,c)?c[o]:c[o]=[];s[s.length]=i,e+=1}return c});n.a=c},function(t,n,r){"use strict";var e=r(1),a=r(13),u=Object(e.a)(function(t){for(var n=Object(a.a)(t),r=n.length,e=0,u={};e<r;){var c=n[e];u[t[c]]=c,e+=1}return u});n.a=u},function(t,n,r){"use strict";var e=r(1),a=r(99),u=r(9),c=Object(e.a)(function(t){return null!=t&&Object(u.a)(t,Object(a.a)(t))});n.a=c},function(t,n,r){"use strict";var e=r(26),a=Object(e.a)(1,"join");n.a=a},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){var n,r=[];for(n in t)r[r.length]=n;return r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(15),u=r(9),c=Object(e.a)(function(t,n){if("function"!=typeof n.lastIndexOf||Object(a.a)(n)){for(var r=n.length-1;r>=0;){if(Object(u.a)(n[r],t))return r;r-=1}return-1}return n.lastIndexOf(t)});n.a=c},function(t,n,r){"use strict";var e=r(1),a=r(41),u=r(25),c=r(56),i=Object(e.a)(function(t){return Object(a.a)(Object(u.a)(t),Object(c.a)(t))});n.a=i},function(t,n,r){"use strict";var e=r(1),a=r(74),u=r(41),c=r(19),i=Object(e.a)(function(t){return Object(u.a)(Object(c.a)(t),Object(a.a)(t))});n.a=i},function(t,n,r){"use strict";var e=r(1),a=r(32),u=r(41),c=r(44),i=Object(e.a)(function(t){return Object(u.a)(Object(c.a)(t),Object(a.a)(t))});n.a=i},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t<n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t<=n});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){for(var e=0,a=r.length,u=[],c=[n];e<a;)c=t(c[0],r[e]),u[e]=c[1],e+=1;return[c[0],u]});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){for(var e=r.length-1,a=[],u=[n];e>=0;)u=t(r[e],u[0]),a[e]=u[1],e-=1;return[a,u[0]]});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(8),u=r(13),c=Object(e.a)(function(t,n){return Object(a.a)(function(r,e){return r[e]=t(n[e],e,n),r},{},Object(u.a)(n))});n.a=c},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return n.match(t)||[]});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(46),u=Object(e.a)(function(t,n){return Object(a.a)(t)?!Object(a.a)(n)||n<1?NaN:(t%n+n)%n:NaN});n.a=u},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t(r)>t(n)?r:n});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(107),u=Object(e.a)(function(t){var n=t.length;if(0===n)return NaN;var r=2-n%2,e=(n-r)/2;return Object(a.a)(Array.prototype.slice.call(t,0).sort(function(t,n){return t<n?-1:t>n?1:0}).slice(e,e+r))});n.a=u},function(t,n,r){"use strict";var e=r(109),a=r(24),u=Object(e.a)(function(){return Object(a.a)(arguments)});n.a=u},function(t,n,r){"use strict";var e=r(61),a=r(0),u=Object(a.a)(function(t,n){return Object(e.a)({},t,n)});n.a=u},function(t,n,r){"use strict";var e=r(61),a=r(1),u=Object(a.a)(function(t){return e.a.apply(null,[{}].concat(t))});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(42),u=Object(e.a)(function(t,n){return Object(a.a)(function(t,n,r){return n},t,n)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(42),u=Object(e.a)(function(t,n){return Object(a.a)(function(t,n,r){return r},t,n)});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(42),u=Object(e.a)(function(t,n,r){return Object(a.a)(function(n,r,e){return t(r,e)},n,r)});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(62),u=Object(e.a)(function(t,n,r){return Object(a.a)(function(n,r,e){return t(r,e)},n,r)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return n<t?n:t});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t(r)<t(n)?r:n});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return t%n});n.a=a},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return-t});n.a=a},function(t,n,r){"use strict";var e=r(86),a=r(0),u=r(3),c=r(71),i=r(70),o=Object(a.a)(Object(e.a)(Object(u.a)(["any"],c.a,i.a)));n.a=o},function(t,n,r){"use strict";var e=r(1),a=r(5),u=r(25),c=Object(e.a)(function(t){var n=t<0?1:t+1;return Object(a.a)(n,function(){return Object(u.a)(t,arguments)})});n.a=c},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t(n(r))});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(254),u=Object(e.a)(a.a);n.a=u},function(t,n,r){"use strict";function e(t){return[t]}n.a=e},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r={},e={},a=0,u=t.length;a<u;)e[t[a]]=1,a+=1;for(var c in n)e.hasOwnProperty(c)||(r[c]=n[c]);return r});n.a=a},function(t,n,r){"use strict";var e=r(12),a=r(1),u=Object(a.a)(function(t){var n,r=!1;return Object(e.a)(t.length,function(){return r?n:(r=!0,n=t.apply(this,arguments))})});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return[t,n]});n.a=a},function(t,n,r){"use strict";var e=r(10),a=r(112),u=Object(a.a)(e.a);n.a=u},function(t,n,r){"use strict";var e=r(10),a=r(112),u=r(40),c=Object(a.a)(Object(u.a)(e.a));n.a=c},function(t,n,r){"use strict";var e=r(53),a=r(104),u=r(38),c=Object(a.a)([e.a,u.a]);n.a=c},function(t,n,r){"use strict";var e=r(2),a=r(9),u=r(19),c=Object(e.a)(function(t,n,r){return Object(a.a)(Object(u.a)(t,r),n)});n.a=c},function(t,n,r){"use strict";var e=r(2),a=r(89),u=r(19),c=Object(e.a)(function(t,n,r){return Object(a.a)(t,Object(u.a)(n,r))});n.a=c},function(t,n,r){"use strict";var e=r(2),a=r(19),u=Object(e.a)(function(t,n,r){return n.length>0&&t(Object(a.a)(n,r))});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r={},e=0;e<t.length;)t[e]in n&&(r[t[e]]=n[t[e]]),e+=1;return r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){var r={};for(var e in n)t(n[e],e,n)&&(r[e]=n[e]);return r});n.a=a},function(t,n,r){"use strict";function e(){if(0===arguments.length)throw new Error("pipeK requires at least one argument");return a.a.apply(this,Object(u.a)(arguments))}n.a=e;var a=r(82),u=r(36)},function(t,n,r){"use strict";var e=r(110),a=r(14),u=Object(a.a)(e.a,1);n.a=u},function(t,n,r){"use strict";var e=r(30),a=r(58),u=r(113),c=r(115),i=Object(c.a)(e.a,[u.a,a.a]);n.a=i},function(t,n,r){"use strict";var e=r(2),a=r(9),u=Object(e.a)(function(t,n,r){return Object(a.a)(n,r[t])});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(103),u=Object(e.a)(function(t,n,r){return Object(a.a)(t,r[n])});n.a=u},function(t,n,r){"use strict";var e=r(2),a=r(6),u=Object(e.a)(function(t,n,r){return null!=r&&Object(a.a)(n,r)?r[n]:t});n.a=u},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t(r[n])});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=t.length,e=[],a=0;a<r;)e[a]=n[t[a]],a+=1;return e});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(106),u=Object(e.a)(function(t,n){if(!Object(a.a)(t)||!Object(a.a)(n))throw new TypeError("Both arguments to range must be numbers");for(var r=[],e=t;e<n;)r.push(e),e+=1;return r});n.a=u},function(t,n,r){"use strict";var e=r(29),a=r(8),u=r(16),c=Object(e.a)(4,[],function(t,n,r,e){return Object(a.a)(function(r,e){return t(r,e)?n(r,e):Object(u.a)(r)},r,e)});n.a=c},function(t,n,r){"use strict";var e=r(1),a=r(16),u=Object(e.a)(a.a);n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(17),u=r(117),c=Object(e.a)(function(t,n){return Object(u.a)(Object(a.a)(t),n)});n.a=c},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return r.replace(t,n)});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){for(var e=0,a=r.length,u=[n];e<a;)n=t(n,r[e]),u[e+1]=n,e+=1;return u});n.a=a},function(t,n,r){"use strict";var e=r(2),a=r(17),u=r(111),c=Object(e.a)(function(t,n,r){return Object(u.a)(t,Object(a.a)(n),r)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return Array.prototype.slice.call(n,0).sort(t)});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return Array.prototype.slice.call(n,0).sort(function(n,r){var e=t(n),a=t(r);return e<a?-1:e>a?1:0})});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return Array.prototype.slice.call(n,0).sort(function(n,r){for(var e=0,a=0;0===e&&a<t.length;)e=t[a](n,r),a+=1;return e})});n.a=a},function(t,n,r){"use strict";var e=r(26),a=Object(e.a)(1,"split");n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(105),u=r(11),c=Object(e.a)(function(t,n){return[Object(u.a)(0,t,n),Object(u.a)(t,Object(a.a)(n),n)]});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(11),u=Object(e.a)(function(t,n){if(t<=0)throw new Error("First argument to splitEvery must be a positive integer");for(var r=[],e=0;e<n.length;)r.push(Object(a.a)(e,e+=t,n));return r});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=0,e=n.length,a=[];r<e&&!t(n[r]);)a.push(n[r]),r+=1;return[a,Array.prototype.slice.call(n,r)]});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(9),u=r(57),c=Object(e.a)(function(t,n){return Object(a.a)(Object(u.a)(t.length,n),t)});n.a=c},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){return Number(t)-Number(n)});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(52),u=r(90),c=Object(e.a)(function(t,n){return Object(a.a)(Object(u.a)(t,n),Object(u.a)(n,t))});n.a=c},function(t,n,r){"use strict";var e=r(2),a=r(52),u=r(91),c=Object(e.a)(function(t,n,r){return Object(a.a)(Object(u.a)(t,n,r),Object(u.a)(t,r,n))});n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(11),u=Object(e.a)(function(t,n){for(var r=n.length-1;r>=0&&t(n[r]);)r-=1;return Object(a.a)(r+1,1/0,n)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(294),c=r(11),i=Object(e.a)(Object(a.a)(["takeWhile"],u.a,function(t,n){for(var r=0,e=n.length;r<e&&t(n[r]);)r+=1;return Object(c.a)(0,r,n)}));n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(16),u=r(4),c=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=u.a.init,t.prototype["@@transducer/result"]=u.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):Object(a.a)(t)},t}(),i=Object(e.a)(function(t,n){return new c(t,n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=r(3),u=r(296),c=Object(e.a)(Object(a.a)([],u.a,function(t,n){return t(n),n}));n.a=c},function(t,n,r){"use strict";var e=r(0),a=r(4),u=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n),this.xf["@@transducer/step"](t,n)},t}(),c=Object(e.a)(function(t,n){return new u(t,n)});n.a=c},function(t,n,r){"use strict";var e=r(79),a=r(0),u=r(298),c=r(24),i=Object(a.a)(function(t,n){if(!Object(u.a)(t))throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received "+Object(c.a)(t));return Object(e.a)(t).test(n)});n.a=i},function(t,n,r){"use strict";function e(t){return"[object RegExp]"===Object.prototype.toString.call(t)}n.a=e},function(t,n,r){"use strict";var e=r(26),a=Object(e.a)(0,"toLowerCase");n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(6),u=Object(e.a)(function(t){var n=[];for(var r in t)Object(a.a)(r,t)&&(n[n.length]=[r,t[r]]);return n});n.a=u},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){var n=[];for(var r in t)n[n.length]=[r,t[r]];return n});n.a=a},function(t,n,r){"use strict";var e=r(26),a=Object(e.a)(0,"toUpperCase");n.a=a},function(t,n,r){"use strict";var e=r(8),a=r(66),u=r(5),c=Object(u.a)(4,function(t,n,r,u){return Object(e.a)(t("function"==typeof n?Object(a.a)(n):n),r,u)});n.a=c},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){for(var n=0,r=[];n<t.length;){for(var e=t[n],a=0;a<e.length;)void 0===r[a]&&(r[a]=[]),r[a].push(e[a]),a+=1;n+=1}return r});n.a=a},function(t,n,r){"use strict";var e=r(2),a=r(7),u=r(118),c=Object(e.a)(function(t,n,r){return"function"==typeof r["fantasy-land/traverse"]?r["fantasy-land/traverse"](n,t):Object(u.a)(t,Object(a.a)(n,r))});n.a=c},function(t,n,r){"use strict";var e=r(1),a="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",u="​",c="function"==typeof String.prototype.trim,i=c&&!a.trim()&&u.trim()?function(t){return t.trim()}:function(t){var n=new RegExp("^["+a+"]["+a+"]*"),r=new RegExp("["+a+"]["+a+"]*$");return t.replace(n,"").replace(r,"")},o=Object(e.a)(i);n.a=o},function(t,n,r){"use strict";var e=r(12),a=r(10),u=r(0),c=Object(u.a)(function(t,n){return Object(e.a)(t.length,function(){try{return t.apply(this,arguments)}catch(t){return n.apply(this,Object(a.a)([t],arguments))}})});n.a=c},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){return function(){return t(Array.prototype.slice.call(arguments,0))}});n.a=a},function(t,n,r){"use strict";var e=r(1),a=r(33),u=Object(e.a)(function(t){return Object(a.a)(1,t)});n.a=u},function(t,n,r){"use strict";var e=r(0),a=r(5),u=Object(e.a)(function(t,n){return Object(a.a)(t,function(){for(var r,e=1,a=n,u=0;e<=t&&"function"==typeof a;)r=e===t?arguments.length:u+a.length,a=a.apply(this,Array.prototype.slice.call(arguments,u,r)),e+=1,u=r;return a})});n.a=u},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=t(n),e=[];r&&r.length;)e[e.length]=r[0],r=t(r[1]);return e});n.a=a},function(t,n,r){"use strict";var e=r(10),a=r(0),u=r(50),c=r(60),i=Object(a.a)(Object(u.a)(c.a,e.a));n.a=i},function(t,n,r){"use strict";var e=r(10),a=r(2),u=r(119),c=Object(a.a)(function(t,n,r){return Object(u.a)(t,Object(e.a)(n,r))});n.a=c},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t(r)?r:n(r)});n.a=a},function(t,n,r){"use strict";var e=r(59),a=r(48),u=Object(a.a)(e.a);n.a=u},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){for(var e=r;!t(e);)e=n(e);return e});n.a=a},function(t,n,r){"use strict";var e=r(1),a=Object(e.a)(function(t){var n,r=[];for(n in t)r[r.length]=t[n];return r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=function(t){return{value:t,"fantasy-land/map":function(){return this}}},u=Object(e.a)(function(t,n){return t(a)(n).value});n.a=u},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){return t(r)?n(r):r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=r(9),u=r(7),c=r(120),i=Object(e.a)(function(t,n){return Object(c.a)(Object(u.a)(a.a,t),n)});n.a=i},function(t,n,r){"use strict";var e=r(20),a=r(0),u=r(40),c=r(38),i=Object(a.a)(function(t,n){return Object(c.a)(Object(u.a)(e.a)(t),n)});n.a=i},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r,e=0,a=t.length,u=n.length,c=[];e<a;){for(r=0;r<u;)c[c.length]=[t[e],n[r]],r+=1;e+=1}return c});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=[],e=0,a=Math.min(t.length,n.length);e<a;)r[e]=[t[e],n[e]],e+=1;return r});n.a=a},function(t,n,r){"use strict";var e=r(0),a=Object(e.a)(function(t,n){for(var r=0,e=Math.min(t.length,n.length),a={};r<e;)a[t[r]]=n[r],r+=1;return a});n.a=a},function(t,n,r){"use strict";var e=r(2),a=Object(e.a)(function(t,n,r){for(var e=[],a=0,u=Math.min(n.length,r.length);a<u;)e[a]=t(n[a],r[a]),a+=1;return e});n.a=a},function(t,n,r){"use strict";n.__esModule=!0;var e=r(63),a=function(){function t(t,n,r){this.type=t,this.text=n,this.spans=r}return t.isEmbedBlock=function(t){return t===e.NODE_TYPES.embed},t.isImageBlock=function(t){return t===e.NODE_TYPES.image},t.isList=function(t){return t===e.NODE_TYPES.list},t.isOrderedList=function(t){return t===e.NODE_TYPES.oList},t.isListItem=function(t){return t===e.NODE_TYPES.listItem},t.isOrderedListItem=function(t){return t===e.NODE_TYPES.oListItem},t.emptyList=function(){return{type:e.NODE_TYPES.list,spans:[],text:""}},t.emptyOrderedList=function(){return{type:e.NODE_TYPES.oList,spans:[],text:""}},t}();n.RichTextBlock=a},function(t,n,r){"use strict";function e(t,n,r){return u.default.fromRichText(t).children.map(function(t,e){return a(t,n,e,r)})}function a(t,n,r,e){function a(t,r){var u=t instanceof c.SpanNode?t.text:null,i=t.children.reduce(function(t,n,r){return t.concat([a(n,r)])},[]);return e&&e(t.type,t.element,u,i,r)||n(t.type,t.element,u,i,r)}return a(t,r)}n.__esModule=!0;var u=r(64),c=r(122);n.default=e}])});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_9c75acfe53428ad7a9fa ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9c75acfe53428ad7a9fa */ "dll-reference dll_9c75acfe53428ad7a9fa"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_9c75acfe53428ad7a9fa ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9c75acfe53428ad7a9fa */ "dll-reference dll_9c75acfe53428ad7a9fa"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var Portal = REACT_PORTAL_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Profiler = Profiler;
exports.Portal = Portal;
exports.StrictMode = StrictMode;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isProfiler = isProfiler;
exports.isPortal = isPortal;
exports.isStrictMode = isStrictMode;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");





var Provider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Provider, _Component);

  function Provider(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var store = props.store;
    _this.state = {
      storeState: store.getState(),
      store: store
    };
    return _this;
  }

  var _proto = Provider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this.subscribe();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
    this._isMounted = false;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.store !== prevProps.store) {
      if (this.unsubscribe) this.unsubscribe();
      this.subscribe();
    }
  };

  _proto.subscribe = function subscribe() {
    var _this2 = this;

    var store = this.props.store;
    this.unsubscribe = store.subscribe(function () {
      var newStoreState = store.getState();

      if (!_this2._isMounted) {
        return;
      }

      _this2.setState(function (providerState) {
        // If the value is the same, skip the unnecessary state update.
        if (providerState.storeState === newStoreState) {
          return null;
        }

        return {
          storeState: newStoreState
        };
      });
    }); // Actions might have been dispatched between render and mount - handle those

    var postMountStoreState = store.getState();

    if (postMountStoreState !== this.state.storeState) {
      this.setState({
        storeState: postMountStoreState
      });
    }
  };

  _proto.render = function render() {
    var Context = this.props.context || _Context__WEBPACK_IMPORTED_MODULE_3__["ReactReduxContext"];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Context.Provider, {
      value: this.state
    }, this.props.children);
  };

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Provider.propTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    subscribe: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    dispatch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
    getState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }),
  context: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connectAdvanced; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/react-redux/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");









function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_8__["ReactReduxContext"] : _ref2$context,
      connectOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  invariant__WEBPACK_IMPORTED_MODULE_5___default()(renderCountProp === undefined, "renderCountProp is removed. render counting is built into the latest React dev tools profiling extension");
  invariant__WEBPACK_IMPORTED_MODULE_5___default()(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');
  var customStoreWarningMessage = 'To use a custom Redux store for specific components,  create a custom React context with ' + "React.createContext(), and pass the context object to React-Redux's Provider and specific components" + ' like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
  invariant__WEBPACK_IMPORTED_MODULE_5___default()(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (true) {
      invariant__WEBPACK_IMPORTED_MODULE_5___default()(Object(react_is__WEBPACK_IMPORTED_MODULE_7__["isValidElementType"])(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;
    var OuterBaseComponent = react__WEBPACK_IMPORTED_MODULE_6__["Component"];
    var FinalWrappedComponent = WrappedComponent;

    if (pure) {
      OuterBaseComponent = react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"];
    }

    function makeDerivedPropsSelector() {
      var lastProps;
      var lastState;
      var lastDerivedProps;
      var lastStore;
      var sourceSelector;
      return function selectDerivedProps(state, props, store) {
        if (pure && lastProps === props && lastState === state) {
          return lastDerivedProps;
        }

        if (store !== lastStore) {
          lastStore = store;
          sourceSelector = selectorFactory(store.dispatch, selectorFactoryOptions);
        }

        lastProps = props;
        lastState = state;
        var nextProps = sourceSelector(state, props);

        if (lastDerivedProps === nextProps) {
          return lastDerivedProps;
        }

        lastDerivedProps = nextProps;
        return lastDerivedProps;
      };
    }

    function makeChildElementSelector() {
      var lastChildProps, lastForwardRef, lastChildElement;
      return function selectChildElement(childProps, forwardRef) {
        if (childProps !== lastChildProps || forwardRef !== lastForwardRef) {
          lastChildProps = childProps;
          lastForwardRef = forwardRef;
          lastChildElement = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FinalWrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, childProps, {
            ref: forwardRef
          }));
        }

        return lastChildElement;
      };
    }

    var Connect =
    /*#__PURE__*/
    function (_OuterBaseComponent) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Connect, _OuterBaseComponent);

      function Connect(props) {
        var _this;

        _this = _OuterBaseComponent.call(this, props) || this;
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(forwardRef ? !props.wrapperProps[storeKey] : !props[storeKey], 'Passing redux store in props has been removed and does not do anything. ' + customStoreWarningMessage);
        _this.selectDerivedProps = makeDerivedPropsSelector();
        _this.selectChildElement = makeChildElementSelector();
        _this.renderWrappedComponent = _this.renderWrappedComponent.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)));
        return _this;
      }

      var _proto = Connect.prototype;

      _proto.renderWrappedComponent = function renderWrappedComponent(value) {
        invariant__WEBPACK_IMPORTED_MODULE_5___default()(value, "Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
        var storeState = value.storeState,
            store = value.store;
        var wrapperProps = this.props;
        var forwardedRef;

        if (forwardRef) {
          wrapperProps = this.props.wrapperProps;
          forwardedRef = this.props.forwardedRef;
        }

        var derivedProps = this.selectDerivedProps(storeState, wrapperProps, store);
        return this.selectChildElement(derivedProps, forwardedRef);
      };

      _proto.render = function render() {
        var ContextToUse = this.props.context || Context;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ContextToUse.Consumer, null, this.renderWrappedComponent);
      };

      return Connect;
    }(OuterBaseComponent);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Connect, {
          wrapperProps: props,
          forwardedRef: ref
        });
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnect", function() { return createConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ __webpack_exports__["default"] = (createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsFunction", function() { return whenMapDispatchToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsMissing", function() { return whenMapDispatchToPropsIsMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapDispatchToPropsIsObject", function() { return whenMapDispatchToPropsIsObject; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsFunc"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__["wrapMapToPropsConstant"])(function (dispatch) {
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsFunction", function() { return whenMapStateToPropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMapStateToPropsIsMissing", function() { return whenMapStateToPropsIsMissing; });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsFunc"])(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__["wrapMapToPropsConstant"])(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMergeProps", function() { return defaultMergeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMergePropsFunc", function() { return wrapMergePropsFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsFunction", function() { return whenMergePropsIsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenMergePropsIsOmitted", function() { return whenMergePropsIsOmitted; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ __webpack_exports__["default"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "impureFinalPropsSelectorFactory", function() { return impureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pureFinalPropsSelectorFactory", function() { return pureFinalPropsSelectorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return finalPropsSelectorFactory; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifySubselectors; });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsConstant", function() { return wrapMapToPropsConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependsOnOwnProps", function() { return getDependsOnOwnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapMapToPropsFunc", function() { return wrapMapToPropsFunc; });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"]; });

/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPlainObject; });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return verifyPlainObject; });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!Object(_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    Object(_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warning; });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-redux/node_modules/hoist-non-react-statics/node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-redux/node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-redux/node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-redux/node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_9c75acfe53428ad7a9fa ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9c75acfe53428ad7a9fa */ "dll-reference dll_9c75acfe53428ad7a9fa"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference dll_9c75acfe53428ad7a9fa ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_9c75acfe53428ad7a9fa */ "dll-reference dll_9c75acfe53428ad7a9fa"))("./node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostsList */ "./components/PostsList.js");
var _jsxFileName = "C:\\Users\\Charlotte Hagelin\\Desktop\\nextjs\\pages\\posts.js";



var PostsPage = function PostsPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PostsList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PostsPage);

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fposts&absolutePagePath=C%3A%5CUsers%5CCharlotte%20Hagelin%5CDesktop%5Cnextjs%5Cpages%5Cposts.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fposts&absolutePagePath=C%3A%5CUsers%5CCharlotte%20Hagelin%5CDesktop%5Cnextjs%5Cpages%5Cposts.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fposts&absolutePagePath=C%3A%5CUsers%5CCharlotte%20Hagelin%5CDesktop%5Cnextjs%5Cpages%5Cposts.js!./");


/***/ }),

/***/ "dll-reference dll_9c75acfe53428ad7a9fa":
/*!*******************************************!*\
  !*** external "dll_9c75acfe53428ad7a9fa" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_9c75acfe53428ad7a9fa;

/***/ })

},[[1,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=posts.js.map