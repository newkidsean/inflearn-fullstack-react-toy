/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query/hydration */ \"react-query/hydration\");\n/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ \"./pages/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    // queryClient 가 app 이 실행될 때마다 매번 만들어 지는 것을 막기 위해 useRef 를 사용 함\n    const clientRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const getClient = ()=>{\n        if (!clientRef.current) clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({\n            defaultOptions: {\n                queries: {\n                    // 창이 포커스 될 때마다 리패치 될지 설정하는 옵션\n                    refetchOnWindowFocus: false\n                }\n            }\n        });\n        return clientRef.current;\n    };\n    // const queryClient = new QueryClient();\n    return(// <QueryClientProvider client={queryClient}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: getClient(),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_hydration__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {\n            state: pageProps.dehydratedState,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/pages/_app.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/pages/_app.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/pages/_app.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined));\n};\nApp.getInitialProps = async ({ ctx , Component  })=>{\n    var ref;\n    const pageProps = await ((ref = Component.getInitialProps) === null || ref === void 0 ? void 0 : ref.call(Component, ctx));\n    return {\n        pageProps\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNnQztBQUNmO0FBQzFCO0FBRXJCLEtBQUssQ0FBQ0ksR0FBRyxJQUFJLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDekMsRUFBK0Q7SUFDYixLQUE3QyxDQUFDQyxTQUFTLEdBQUdQLDZDQUFNLENBQUMsSUFBSTtJQUM3QixLQUFLLENBQUNRLFNBQVMsT0FBUyxDQUFDO1FBQ3ZCLEVBQUUsR0FBR0QsU0FBUyxDQUFDRSxPQUFPLEVBQUVGLFNBQVMsQ0FBQ0UsT0FBTyxHQUFHLEdBQUcsQ0FBQ1Isb0RBQVcsQ0FBQyxDQUFDO1lBQzNEUyxjQUFjLEVBQUUsQ0FBQztnQkFDZkMsT0FBTyxFQUFFLENBQUM7b0JBQ1IsRUFBOEI7b0JBQ1VDLG9CQUFwQixFQUFFLEtBQUs7Z0JBQzdCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUNMLFNBQVMsQ0FBQ0UsT0FBTztJQUMxQixDQUFDO0lBQ0QsRUFBeUM7SUFFekMsTUFBTSxDQUNKLEVBQTZDO2dGQUM1Q1AsNERBQW1CO1FBQUNXLE1BQU0sRUFBRUwsU0FBUzs4RkFFbkNMLDBEQUFPO1lBQUNXLEtBQUssRUFBRVIsU0FBUyxDQUFDUyxlQUFlO2tHQUN0Q1YsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0FBQ0RGLEdBQUcsQ0FBQ1ksZUFBZSxVQUFVLENBQUMsQ0FBQ0MsR0FBRyxHQUFFWixTQUFTLEVBQUMsQ0FBQyxHQUFLLENBQUM7UUFDM0JBLEdBQXlCO0lBQWpELEtBQUssQ0FBQ0MsU0FBUyxHQUFHLEtBQUssR0FBQ0QsR0FBeUIsR0FBekJBLFNBQVMsQ0FBQ1csZUFBZSxjQUF6QlgsR0FBeUIsY0FBekJBLElBQUksQ0FBSkEsQ0FBZ0MsR0FBaENBLEdBQXlCLENBQXpCQSxJQUFnQyxDQUFoQ0EsU0FBUyxFQUFtQlksR0FBRztJQUN2RCxNQUFNLENBQUMsQ0FBQztRQUFDWCxTQUFTO0lBQUMsQ0FBQztBQUN0QixDQUFDO0FBRUQsaUVBQWVGLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IEh5ZHJhdGUgfSBmcm9tICdyZWFjdC1xdWVyeS9oeWRyYXRpb24nO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIC8vIHF1ZXJ5Q2xpZW50IOqwgCBhcHAg7J20IOyLpO2WieuQoCDrlYzrp4jri6Qg66ek67KIIOunjOuTpOyWtCDsp4DripQg6rKD7J2EIOunieq4sCDsnITtlbQgdXNlUmVmIOulvCDsgqzsmqkg7ZWoXG4gIGNvbnN0IGNsaWVudFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xuICAgIGlmICghY2xpZW50UmVmLmN1cnJlbnQpIGNsaWVudFJlZi5jdXJyZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgICAvLyDssL3snbQg7Y+s7Luk7IqkIOuQoCDrlYzrp4jri6Qg66as7Yyo7LmYIOuQoOyngCDshKTsoJXtlZjripQg7Ji17IWYXG4gICAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsaWVudFJlZi5jdXJyZW50XG4gIH1cbiAgLy8gY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuICByZXR1cm4gKFxuICAgIC8vIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17Z2V0Q2xpZW50KCl9PlxuICAgICAgey8qIGh5ZHJhdGlvbiDsnYQg7JyE7ZWcIOyEuO2MhS4g7Jes6riw7ISc64qUIFNTUuydtOq4sCDrlYzrrLjsl5Ag7LKY7J2M7JeQIOyEnOuyhOyXkOyEnCDrgqDslYTsmKgg7KCV67O067aA7YSwIOy6kOyLnOyXkCDsoIDsoJXtlZzri6QgKi99XG4gICAgICA8SHlkcmF0ZSBzdGF0ZT17cGFnZVByb3BzLmRlaHlkcmF0ZWRTdGF0ZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvSHlkcmF0ZT5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59O1xuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgQ29tcG9uZW50IH0pID0+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcz8uKGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbInVzZVJlZiIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIkh5ZHJhdGUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnRSZWYiLCJnZXRDbGllbnQiLCJjdXJyZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJjbGllbnQiLCJzdGF0ZSIsImRlaHlkcmF0ZWRTdGF0ZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/hydration":
/*!****************************************!*\
  !*** external "react-query/hydration" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/hydration");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();