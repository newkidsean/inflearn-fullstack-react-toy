"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar MsgInput = function(param) {\n    var mutate = param.mutate, _text = param.text, text1 = _text === void 0 ? '' : _text, _id = param.id, id = _id === void 0 ? undefined : _id;\n    _s();\n    var textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var onSubmit = function(e) {\n        e.preventDefault();\n        e.stopPropagation();\n        var text = textRef.current.value;\n        textRef.current.value = '';\n        mutate({\n            text: text,\n            id: id\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"messages__input\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textRef,\n                placeholder: \"fill in text\",\n                defaultValue: text1\n            }, void 0, false, {\n                fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgInput.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"완료\"\n            }, void 0, false, {\n                fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgInput.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgInput.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_s(MsgInput, \"w6wg8oN6T1JIeHvMfowtaM3MyjI=\");\n_c = MsgInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgInput);\nvar _c;\n$RefreshReg$(_c, \"MsgInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBcUM7O0FBRXJDLEdBQUssQ0FBQ0UsUUFBUSxHQUFHLFFBQVEsUUFBbUMsQ0FBQztRQUF6Q0MsTUFBTSxTQUFOQSxNQUFNLGdCQUFFQyxJQUFJLEVBQUpBLEtBQUksc0JBQUcsQ0FBRSx1QkFBRUMsRUFBRSxFQUFGQSxFQUFFLG9CQUFHQyxTQUFTOztJQUNuRCxHQUFLLENBQUNDLE9BQU8sR0FBR04sNkNBQU0sQ0FBQyxJQUFJO0lBRTNCLEdBQUssQ0FBQ08sUUFBUSxHQUFHQyxRQUNsQixDQURrQkEsQ0FBQyxFQUFJLENBQUM7UUFDckJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJELENBQUMsQ0FBQ0UsZUFBZSxFQUFFLENBQUM7UUFDcEIsR0FBSyxDQUFDUCxJQUFJLEdBQUdHLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLO1FBQ2xDTixPQUFPLENBQUNLLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHLENBQUUsRUFBQztRQUMzQlYsTUFBTSxDQUFDLENBQUM7WUFBQ0MsSUFBSSxFQUFKQSxJQUFJO1lBQUVDLEVBQUUsRUFBRkEsRUFBRTtRQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNLDZFQUNIUyxDQUFJO1FBQUNDLFNBQVMsRUFBQyxDQUFpQjtRQUFDUCxRQUFRLEVBQUVBLFFBQVE7O3dGQUNqRFEsQ0FBUTtnQkFDUEMsR0FBRyxFQUFFVixPQUFPO2dCQUNaVyxXQUFXLEVBQUMsQ0FBYztnQkFDMUJDLFlBQVksRUFBRWYsS0FBSTs7Ozs7O3dGQUVuQmdCLENBQU07Z0JBQUNDLElBQUksRUFBQyxDQUFROzBCQUFDLENBQUU7Ozs7Ozs7Ozs7OztBQUc5QixDQUFDO0dBckJLbkIsUUFBUTtLQUFSQSxRQUFRO0FBdUJkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcz9jYzJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE1zZ0lucHV0ID0gKHsgbXV0YXRlLCB0ZXh0ID0gJycsIGlkID0gdW5kZWZpbmVkIH0pID0+IHtcbiAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJyc7XG4gICAgbXV0YXRlKHsgdGV4dCwgaWQgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlc19faW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIHJlZj17dGV4dFJlZn1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJmaWxsIGluIHRleHRcIlxuICAgICAgICBkZWZhdWx0VmFsdWU9e3RleHR9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7JmE66OMPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIk1zZ0lucHV0IiwibXV0YXRlIiwidGV4dCIsImlkIiwidW5kZWZpbmVkIiwidGV4dFJlZiIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsInZhbHVlIiwiZm9ybSIsImNsYXNzTmFtZSIsInRleHRhcmVhIiwicmVmIiwicGxhY2Vob2xkZXIiLCJkZWZhdWx0VmFsdWUiLCJidXR0b24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgInput.js\n");

/***/ })

});