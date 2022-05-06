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
exports.id = "pages/campaigns/show";
exports.ids = ["pages/campaigns/show"];
exports.modules = {

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/raynerljm/Desktop/repos/personal/solidity-course/kickstart/components/ContributeForm.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nclass ContributeForm extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      value: \"\",\n      loading: false,\n      errorMessage: \"\"\n    });\n\n    _defineProperty(this, \"onSubmit\", async event => {\n      event.preventDefault();\n      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__.default)(this.props.address);\n      this.setState({\n        loading: true,\n        errorMessage: \"\"\n      });\n\n      try {\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();\n        await campaign.methods.contribute().send({\n          from: accounts[0],\n          value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.utils.toWei(this.state.value, \"ether\")\n        });\n        _routes__WEBPACK_IMPORTED_MODULE_5__.Router.replaceRoute(`/campaigns/${this.props.address}`);\n      } catch (err) {\n        var _err$message;\n\n        this.setState({\n          errorMessage: (_err$message = err.message) !== null && _err$message !== void 0 ? _err$message : err\n        });\n      }\n\n      this.setState({\n        loading: false,\n        value: \"\"\n      });\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {\n      onSubmit: this.onSubmit,\n      error: !!this.state.errorMessage,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Amount to Contribute\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n          label: \"ether\",\n          labelPosition: \"right\",\n          value: this.state.value,\n          onChange: event => this.setState({\n            value: event.target.value\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {\n        error: true,\n        header: \"Oops!\",\n        content: this.state.errorMessage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        primary: true,\n        loading: this.state.loading,\n        children: \"Contribute\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzPzBiMjAiXSwibmFtZXMiOlsiQ29udHJpYnV0ZUZvcm0iLCJDb21wb25lbnQiLCJ2YWx1ZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJnZXRDYW1wYWlnbkluc3RhbmNlIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJhY2NvdW50cyIsIndlYjMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwic3RhdGUiLCJSb3V0ZXIiLCJlcnIiLCJtZXNzYWdlIiwicmVuZGVyIiwib25TdWJtaXQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQU4sU0FBNkJDLDRDQUE3QixDQUF1QztBQUFBO0FBQUE7O0FBQUEsbUNBQzdCO0FBQ05DLFdBQUssRUFBRSxFQUREO0FBRU5DLGFBQU8sRUFBRSxLQUZIO0FBR05DLGtCQUFZLEVBQUU7QUFIUixLQUQ2Qjs7QUFBQSxzQ0FPMUIsTUFBT0MsS0FBUCxJQUFpQjtBQUMxQkEsV0FBSyxDQUFDQyxjQUFOO0FBRUEsWUFBTUMsUUFBUSxHQUFHQywyREFBbUIsQ0FBQyxLQUFLQyxLQUFMLENBQVdDLE9BQVosQ0FBcEM7QUFFQSxXQUFLQyxRQUFMLENBQWM7QUFBRVIsZUFBTyxFQUFFLElBQVg7QUFBaUJDLG9CQUFZLEVBQUU7QUFBL0IsT0FBZDs7QUFFQSxVQUFJO0FBQ0YsY0FBTVEsUUFBUSxHQUFHLE1BQU1DLG1FQUFBLEVBQXZCO0FBQ0EsY0FBTU4sUUFBUSxDQUFDTyxPQUFULENBQWlCQyxVQUFqQixHQUE4QkMsSUFBOUIsQ0FBbUM7QUFDdkNDLGNBQUksRUFBRUwsUUFBUSxDQUFDLENBQUQsQ0FEeUI7QUFFdkNWLGVBQUssRUFBRVcsK0RBQUEsQ0FBaUIsS0FBS0ssS0FBTCxDQUFXaEIsS0FBNUIsRUFBbUMsT0FBbkM7QUFGZ0MsU0FBbkMsQ0FBTjtBQUlBaUIsZ0VBQUEsQ0FBcUIsY0FBYSxLQUFLVixLQUFMLENBQVdDLE9BQVEsRUFBckQ7QUFDRCxPQVBELENBT0UsT0FBT1UsR0FBUCxFQUFZO0FBQUE7O0FBQ1osYUFBS1QsUUFBTCxDQUFjO0FBQUVQLHNCQUFZLGtCQUFFZ0IsR0FBRyxDQUFDQyxPQUFOLHVEQUFpQkQ7QUFBL0IsU0FBZDtBQUNEOztBQUVELFdBQUtULFFBQUwsQ0FBYztBQUFFUixlQUFPLEVBQUUsS0FBWDtBQUFrQkQsYUFBSyxFQUFFO0FBQXpCLE9BQWQ7QUFDRCxLQTFCb0M7QUFBQTs7QUE0QnJDb0IsUUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxjQUFRLEVBQUUsS0FBS0MsUUFBckI7QUFBK0IsV0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLTCxLQUFMLENBQVdkLFlBQW5EO0FBQUEsOEJBQ0UsOERBQUMseURBQUQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLG9EQUFEO0FBQ0UsZUFBSyxFQUFDLE9BRFI7QUFFRSx1QkFBYSxFQUFDLE9BRmhCO0FBR0UsZUFBSyxFQUFFLEtBQUtjLEtBQUwsQ0FBV2hCLEtBSHBCO0FBSUUsa0JBQVEsRUFBR0csS0FBRCxJQUFXLEtBQUtNLFFBQUwsQ0FBYztBQUFFVCxpQkFBSyxFQUFFRyxLQUFLLENBQUNtQixNQUFOLENBQWF0QjtBQUF0QixXQUFkO0FBSnZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRSw4REFBQyxzREFBRDtBQUFTLGFBQUssTUFBZDtBQUFlLGNBQU0sRUFBQyxPQUF0QjtBQUE4QixlQUFPLEVBQUUsS0FBS2dCLEtBQUwsQ0FBV2Q7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLGVBV0UsOERBQUMscURBQUQ7QUFBUSxlQUFPLE1BQWY7QUFBZ0IsZUFBTyxFQUFFLEtBQUtjLEtBQUwsQ0FBV2YsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWlCRDs7QUE5Q29DOztBQWlEdkMsK0RBQWVILGNBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGdldENhbXBhaWduSW5zdGFuY2UgZnJvbSBcIi4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xuXG5jbGFzcyBDb250cmlidXRlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiBcIlwiLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGVycm9yTWVzc2FnZTogXCJcIixcbiAgfTtcblxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjYW1wYWlnbiA9IGdldENhbXBhaWduSW5zdGFuY2UodGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6IFwiXCIgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLnZhbHVlLCBcImV0aGVyXCIpLFxuICAgICAgfSk7XG4gICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgPz8gZXJyIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgdmFsdWU6IFwiXCIgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+QW1vdW50IHRvIENvbnRyaWJ1dGU8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJldGhlclwiXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxuICAgICAgICAgIENvbnRyaWJ1dGVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n");

/***/ }),

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ContributeForm */ \"./components/ContributeForm.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/raynerljm/Desktop/repos/personal/solidity-course/kickstart/pages/campaigns/show.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nclass CampaignShow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"renderCards\", () => {\n      const {\n        balance,\n        manager,\n        minimumContribution,\n        requestsCount,\n        approversCount\n      } = this.props;\n      const items = [{\n        header: manager,\n        meta: \"Address of Manager\",\n        description: \"The manager created this campaign and can create requests to withdraw money\",\n        style: {\n          overflowWrap: \"break-word\"\n        }\n      }, {\n        header: minimumContribution,\n        meta: \"Minimum Contribution (wei)\",\n        description: \"You must contribute at least this much wei to be an approver\"\n      }, {\n        header: requestsCount,\n        meta: \"Number of Requests\",\n        description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers\"\n      }, {\n        header: approversCount,\n        meta: \"Number of Approvers\",\n        description: \"Number of people who have already donated to this campaign\"\n      }, {\n        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__.default.utils.fromWei(balance, \"ether\"),\n        meta: \"Campaign Balance (ether)\",\n        description: \"The balance is how much money this campaign has left to spend\"\n      }];\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Group, {\n        items: items\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 12\n      }, this);\n    });\n  }\n\n  static async getInitialProps(props) {\n    const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__.default)(props.query.address);\n    const summary = await campaign.methods.getSummary().call();\n    return {\n      address: props.query.address,\n      minimumContribution: summary[0],\n      balance: summary[1],\n      requestsCount: summary[2],\n      approversCount: summary[3],\n      manager: summary[4]\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Campaign Show\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Row, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {\n            width: 10,\n            children: this.renderCards()\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {\n            width: 6,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__.default, {\n              address: this.props.address\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Row, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_7__.Link, {\n              route: `/campaigns/${this.props.address}/requests`,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                  primary: true,\n                  children: \" View Requests\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz80Zjg1Il0sIm5hbWVzIjpbIkNhbXBhaWduU2hvdyIsIkNvbXBvbmVudCIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsInByb3BzIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsIndlYjMiLCJnZXRJbml0aWFsUHJvcHMiLCJjYW1wYWlnbiIsImdldENhbXBhaWduSW5zdGFuY2UiLCJxdWVyeSIsImFkZHJlc3MiLCJzdW1tYXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwicmVuZGVyIiwicmVuZGVyQ2FyZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFlBQU4sU0FBMkJDLDRDQUEzQixDQUFxQztBQUFBO0FBQUE7O0FBQUEseUNBZ0JyQixNQUFNO0FBQ2xCLFlBQU07QUFDSkMsZUFESTtBQUVKQyxlQUZJO0FBR0pDLDJCQUhJO0FBSUpDLHFCQUpJO0FBS0pDO0FBTEksVUFNRixLQUFLQyxLQU5UO0FBUUEsWUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsY0FBTSxFQUFFTixPQURWO0FBRUVPLFlBQUksRUFBRSxvQkFGUjtBQUdFQyxtQkFBVyxFQUNULDZFQUpKO0FBS0VDLGFBQUssRUFBRTtBQUNMQyxzQkFBWSxFQUFFO0FBRFQ7QUFMVCxPQURZLEVBVVo7QUFDRUosY0FBTSxFQUFFTCxtQkFEVjtBQUVFTSxZQUFJLEVBQUUsNEJBRlI7QUFHRUMsbUJBQVcsRUFDVDtBQUpKLE9BVlksRUFnQlo7QUFDRUYsY0FBTSxFQUFFSixhQURWO0FBRUVLLFlBQUksRUFBRSxvQkFGUjtBQUdFQyxtQkFBVyxFQUNUO0FBSkosT0FoQlksRUFzQlo7QUFDRUYsY0FBTSxFQUFFSCxjQURWO0FBRUVJLFlBQUksRUFBRSxxQkFGUjtBQUdFQyxtQkFBVyxFQUNUO0FBSkosT0F0QlksRUE0Qlo7QUFDRUYsY0FBTSxFQUFFSyxpRUFBQSxDQUFtQlosT0FBbkIsRUFBNEIsT0FBNUIsQ0FEVjtBQUVFUSxZQUFJLEVBQUUsMEJBRlI7QUFHRUMsbUJBQVcsRUFDVDtBQUpKLE9BNUJZLENBQWQ7QUFvQ0EsMEJBQU8sOERBQUMseURBQUQ7QUFBWSxhQUFLLEVBQUVIO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNELEtBOURrQztBQUFBOztBQUNuQyxlQUFhTyxlQUFiLENBQTZCUixLQUE3QixFQUFvQztBQUNsQyxVQUFNUyxRQUFRLEdBQUdDLDJEQUFtQixDQUFDVixLQUFLLENBQUNXLEtBQU4sQ0FBWUMsT0FBYixDQUFwQztBQUVBLFVBQU1DLE9BQU8sR0FBRyxNQUFNSixRQUFRLENBQUNLLE9BQVQsQ0FBaUJDLFVBQWpCLEdBQThCQyxJQUE5QixFQUF0QjtBQUVBLFdBQU87QUFDTEosYUFBTyxFQUFFWixLQUFLLENBQUNXLEtBQU4sQ0FBWUMsT0FEaEI7QUFFTGYseUJBQW1CLEVBQUVnQixPQUFPLENBQUMsQ0FBRCxDQUZ2QjtBQUdMbEIsYUFBTyxFQUFFa0IsT0FBTyxDQUFDLENBQUQsQ0FIWDtBQUlMZixtQkFBYSxFQUFFZSxPQUFPLENBQUMsQ0FBRCxDQUpqQjtBQUtMZCxvQkFBYyxFQUFFYyxPQUFPLENBQUMsQ0FBRCxDQUxsQjtBQU1MakIsYUFBTyxFQUFFaUIsT0FBTyxDQUFDLENBQUQ7QUFOWCxLQUFQO0FBUUQ7O0FBa0RESSxRQUFNLEdBQUc7QUFDUCx3QkFDRSw4REFBQyx1REFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxtREFBRDtBQUFBLGdDQUNFLDhEQUFDLHVEQUFEO0FBQUEsa0NBQ0UsOERBQUMsMERBQUQ7QUFBYSxpQkFBSyxFQUFFLEVBQXBCO0FBQUEsc0JBQXlCLEtBQUtDLFdBQUw7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQWEsaUJBQUssRUFBRSxDQUFwQjtBQUFBLG1DQUNFLDhEQUFDLCtEQUFEO0FBQWdCLHFCQUFPLEVBQUUsS0FBS2xCLEtBQUwsQ0FBV1k7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0UsOERBQUMsdURBQUQ7QUFBQSxpQ0FDRSw4REFBQywwREFBRDtBQUFBLG1DQUNFLDhEQUFDLHlDQUFEO0FBQU0sbUJBQUssRUFBRyxjQUFhLEtBQUtaLEtBQUwsQ0FBV1ksT0FBUSxXQUE5QztBQUFBLHFDQUNFO0FBQUEsdUNBQ0UsOERBQUMscURBQUQ7QUFBUSx5QkFBTyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXNCRDs7QUF2RmtDOztBQTBGckMsK0RBQWVuQixZQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGdldENhbXBhaWduSW5zdGFuY2UgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgeyBDYXJkLCBHcmlkLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm1cIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XG5cbmNsYXNzIENhbXBhaWduU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCBjYW1wYWlnbiA9IGdldENhbXBhaWduSW5zdGFuY2UocHJvcHMucXVlcnkuYWRkcmVzcyk7XG5cbiAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxuICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcbiAgICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXG4gICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcbiAgICAgIG1hbmFnZXI6IHN1bW1hcnlbNF0sXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlckNhcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGJhbGFuY2UsXG4gICAgICBtYW5hZ2VyLFxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgIHJlcXVlc3RzQ291bnQsXG4gICAgICBhcHByb3ZlcnNDb3VudCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXG4gICAgICAgIG1ldGE6IFwiQWRkcmVzcyBvZiBNYW5hZ2VyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjYW4gY3JlYXRlIHJlcXVlc3RzIHRvIHdpdGhkcmF3IG1vbmV5XCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgICAgbWV0YTogXCJNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIllvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZSBhbiBhcHByb3ZlclwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxuICAgICAgICBtZXRhOiBcIk51bWJlciBvZiBSZXF1ZXN0c1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkEgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnNcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIEFwcHJvdmVyc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIk51bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ25cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsIFwiZXRoZXJcIiksXG4gICAgICAgIG1ldGE6IFwiQ2FtcGFpZ24gQmFsYW5jZSAoZXRoZXIpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZFwiLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDM+Q2FtcGFpZ24gU2hvdzwvaDM+XG4gICAgICAgIDxHcmlkPlxuICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9Pnt0aGlzLnJlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgIDxDb250cmlidXRlRm9ybSBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9IC8+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYH0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+IFZpZXcgUmVxdWVzdHM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_web3_js","ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/show.js"); });
module.exports = __webpack_exports__;

})();