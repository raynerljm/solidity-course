/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/campaigns/requests/new";
exports.ids = ["pages/campaigns/requests/new"];
exports.modules = {

/***/ "./pages/campaigns/requests/new.js":
/*!*****************************************!*\
  !*** ./pages/campaigns/requests/new.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/raynerljm/Desktop/repos/personal/solidity-course/kickstart/pages/campaigns/requests/new.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nclass RequestsNew extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      description: \"\",\n      value: \"\",\n      recipient: \"\",\n      loading: false,\n      errorMessage: \"\"\n    });\n\n    _defineProperty(this, \"onSubmit\", async event => {\n      event.preventDefault();\n      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(this.props.address);\n      const {\n        description,\n        value,\n        recipient\n      } = this.state;\n      this.setState({\n        loading: true,\n        errorMessage: \"\"\n      });\n\n      try {\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__.default.eth.getAccounts();\n        await campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__.default.utils.toWei(value, \"ether\"), recipient).send({\n          from: accounts[0]\n        });\n        _routes__WEBPACK_IMPORTED_MODULE_6__.Router.pushRoute(`/campaigns/${this.props.address}/requests`);\n      } catch (err) {\n        var _err$message;\n\n        this.setState({\n          errorMessage: (_err$message = err.message) !== null && _err$message !== void 0 ? _err$message : err\n        });\n      }\n\n      this.setState({\n        loading: false\n      });\n    });\n  }\n\n  static async getInitialProps(props) {\n    const {\n      address\n    } = props.query;\n    return {\n      address\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_6__.Link, {\n        route: `/campaigns/${this.props.address}/requests`,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Create a Request\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {\n        onSubmit: this.onSubmit,\n        error: !!this.state.errorMessage,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: \"Description\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n            value: this.state.description,\n            onChange: event => this.setState({\n              description: event.target.value\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: \"Value in Ether\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n            value: this.state.value,\n            onChange: event => this.setState({\n              value: event.target.value\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: \"Recipient\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n            value: this.state.recipient,\n            onChange: event => this.setState({\n              recipient: event.target.value\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {\n          error: true,\n          header: \"Oops!\",\n          content: this.state.errorMessage\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n          primary: true,\n          loading: this.state.loading,\n          children: \"Create!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestsNew);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3LmpzP2Q5ZmMiXSwibmFtZXMiOlsiUmVxdWVzdHNOZXciLCJDb21wb25lbnQiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwicmVjaXBpZW50IiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsImdldENhbXBhaWduSW5zdGFuY2UiLCJwcm9wcyIsImFkZHJlc3MiLCJzdGF0ZSIsInNldFN0YXRlIiwiYWNjb3VudHMiLCJ3ZWIzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsIlJvdXRlciIsImVyciIsIm1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInJlbmRlciIsIm9uU3VibWl0IiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFOLFNBQTBCQyw0Q0FBMUIsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLG1DQUMxQjtBQUNOQyxpQkFBVyxFQUFFLEVBRFA7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsZUFBUyxFQUFFLEVBSEw7QUFJTkMsYUFBTyxFQUFFLEtBSkg7QUFLTkMsa0JBQVksRUFBRTtBQUxSLEtBRDBCOztBQUFBLHNDQWV2QixNQUFPQyxLQUFQLElBQWlCO0FBQzFCQSxXQUFLLENBQUNDLGNBQU47QUFFQSxZQUFNQyxRQUFRLEdBQUdDLDJEQUFtQixDQUFDLEtBQUtDLEtBQUwsQ0FBV0MsT0FBWixDQUFwQztBQUNBLFlBQU07QUFBRVYsbUJBQUY7QUFBZUMsYUFBZjtBQUFzQkM7QUFBdEIsVUFBb0MsS0FBS1MsS0FBL0M7QUFFQSxXQUFLQyxRQUFMLENBQWM7QUFBRVQsZUFBTyxFQUFFLElBQVg7QUFBaUJDLG9CQUFZLEVBQUU7QUFBL0IsT0FBZDs7QUFF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S1UsS0FBTCxDQUFXUDtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVCRixlQTZCRSw4REFBQyxxREFBRDtBQUFRLGlCQUFPLE1BQWY7QUFBZ0IsaUJBQU8sRUFBRSxLQUFLTyxLQUFMLENBQVdSLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXlDRDs7QUFqRmlDOztBQW9GcEMsK0RBQWVMLFdBQWYiLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBnZXRDYW1wYWlnbkluc3RhbmNlIGZyb20gXCIuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCB7IFJvdXRlciwgTGluayB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXNcIjtcblxuY2xhc3MgUmVxdWVzdHNOZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICB2YWx1ZTogXCJcIixcbiAgICByZWNpcGllbnQ6IFwiXCIsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxuICB9O1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xuXG4gICAgcmV0dXJuIHsgYWRkcmVzcyB9O1xuICB9XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY2FtcGFpZ24gPSBnZXRDYW1wYWlnbkluc3RhbmNlKHRoaXMucHJvcHMuYWRkcmVzcyk7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgdmFsdWUsIHJlY2lwaWVudCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6IFwiXCIgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kc1xuICAgICAgICAuY3JlYXRlUmVxdWVzdChkZXNjcmlwdGlvbiwgd2ViMy51dGlscy50b1dlaSh2YWx1ZSwgXCJldGhlclwiKSwgcmVjaXBpZW50KVxuICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuXG4gICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgPz8gZXJyIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYH0+XG4gICAgICAgICAgPGE+QmFjazwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8aDM+Q3JlYXRlIGEgUmVxdWVzdDwvaDM+XG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+VmFsdWUgaW4gRXRoZXI8L2xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVjaXBpZW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNpcGllbnQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgICBDcmVhdGUhXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdHNOZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/new.js\n");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/requests/new.js"); });
module.exports = __webpack_exports__;

})();