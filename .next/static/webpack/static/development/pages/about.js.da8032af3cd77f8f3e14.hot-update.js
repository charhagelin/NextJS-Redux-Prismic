webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _jsxFileName = "C:\\Users\\Charlotte Hagelin\\Desktop\\nextjs\\components\\Form.js";



var BasicForm = function BasicForm(_ref) {
  var handleSubmit = _ref.handleSubmit;

  var submit = function submit(values) {
    console.log(values);
  }; //using render field for costume styling of components


  var renderField = function renderField(_ref2) {
    var label = _ref2.label,
        type = _ref2.type,
        input = _ref2.input,
        _ref2$meta = _ref2.meta,
        touched = _ref2$meta.touched,
        error = _ref2$meta.error;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, input, {
      placeholder: label,
      type: type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), touched && error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, error));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: handleSubmit(submit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    label: "First Name",
    name: "firstName",
    component: renderField,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    label: "Last Name",
    name: "lastName",
    component: renderField,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    label: "Email",
    name: "email",
    component: renderField,
    type: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Submit"));
};

var ContactForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_2__["reduxForm"])({
  // a unique name for the form
  form: "contact"
})(BasicForm);
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=about.js.da8032af3cd77f8f3e14.hot-update.js.map