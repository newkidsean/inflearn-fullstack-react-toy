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

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar UserIds = [\n    'roy',\n    'jay'\n];\nvar getRandomeUserId = function() {\n    return UserIds[Math.round(Math.random())];\n};\n// server setting 전에는 mock 데이터를 사용하기 때문에 아래 코드가 필요하지만\n// 서버를 만들고 난 이후에는 필요 없으므로 주석처리\n// const originalMsgs = Array(50).fill(0).map((_, i) => ({\n//   id: i + 1,\n//   userId: getRandomeUserId(),\n//   timestamp: 1234567890123 + i * 1000 * 60,\n//   text: `${i + 1} mock text`\n// })).reverse();\n// const msgs = [\n//   {\n//     id:1,\n//     userId: getRandomeUserId(),\n//     timestamp: 1234567890123,\n//     text: '1 mock text'\n//   },\n// ]\n// console.log(JSON.stringify(originalMsgs));\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    // query 를 통해 userId 를 가지고 옴\n    var ref = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(), _query = ref.query, _userId = _query.userId, userId = _userId === void 0 ? '' : _userId;\n    console.log({\n        userId: userId\n    });\n    // const [msgs, setMsgs] = useState(originalMsgs);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), msgs1 = ref1[0], setMsgs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), editingId = ref2[0], setEditingId = ref2[1];\n    // 서버 연결 전에는 아래와 같이 뉴메세지 객체를 만들어서 useState 에 넣어주어야 했지만,\n    // 서버 연결 후에는 직접 데이터를 통신하는 방식으로 구현하면 된다.\n    // const onCreate = text => {\n    //   const newMsg = {\n    //     id: msgs.length + 1,\n    //     userId: getRandomeUserId(),\n    //     timestamp: Date.now(),\n    //     text: `${msgs.length + 1} ${text}`\n    //   };\n    //   setMsgs(msgs => ([newMsg, ...msgs]));\n    // }\n    var onCreate = function() {\n        var _ref = _asyncToGenerator(_Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n            var newMsg;\n            return _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('post', '/messages', {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('Somwthing wrong...');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            return [\n                                newMsg\n                            ].concat(_toConsumableArray(msgs));\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onCreate(text) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // update 도 마찬가지로 mock 데이터에서 직접 통신으로 수정\n    // const onUpdate = (text, id) => {\n    //   setMsgs(msgs => {\n    //     const targetIndex = msgs.findIndex(msg => msg.id === id);\n    //     if (targetIndex < 0) return msgs;\n    //     const newMsgs = [...msgs];\n    //     newMsgs.splice(targetIndex, 1, {\n    //       ...msgs[targetIndex],\n    //       text\n    //     });\n    //     return newMsgs;\n    //   });\n    //   doneEdit();\n    // };\n    var onUpdate = function() {\n        var _ref = _asyncToGenerator(_Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n            var newMsg;\n            return _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('put', \"/messages/\".concat(id), {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('Something wrong..');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === id;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1, newMsg);\n                            return newMsgs;\n                        });\n                        doneEdit();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onUpdate(text, id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    // delete 도 DB 와 통신 방식으로 수정\n    // const onDelete = (id) => {\n    //   setMsgs(msgs => {\n    //     const targetIndex = msgs.findIndex(msg => msg.id === id);\n    //     if (targetIndex < 0) return msgs;\n    //     const newMsgs = [...msgs];\n    //     newMsgs.splice(targetIndex, 1);\n    //     return newMsgs;\n    //   });\n    // }\n    var onDelete = function() {\n        var _ref = _asyncToGenerator(_Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var receivedId;\n            return _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('delete', \"/messages/\".concat(id), {\n                            userId: userId\n                        });\n                    case 2:\n                        receivedId = _ctx.sent;\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === receivedId;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1);\n                            return newMsgs;\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onDelete(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getMessages = function() {\n        var _ref = _asyncToGenerator(_Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var msgs;\n            return _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('get', '/messages');\n                    case 2:\n                        msgs = _ctx.sent;\n                        setMsgs(msgs);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getMessages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgList.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(x) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, x, {\n                        onUpdate: onUpdate,\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        myId: userId\n                    }), x.id, false, {\n                        fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgList.js\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgList.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"7uYoK/Xma1ZRbI68k7kfRtq6rY0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNYO0FBQ1I7QUFDRTtBQUNEOztBQUVoQyxHQUFLLENBQUNPLE9BQU8sR0FBRyxDQUFDO0lBQUEsQ0FBSztJQUFFLENBQUs7QUFBQSxDQUFDO0FBQzlCLEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQUcsUUFBUTtXQUFGRCxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU07O0FBRTdELEVBQXFEO0FBQ0wsRUFBbEI7QUFDWSxFQUFnQjtBQUMxRCxFQUFlO0FBQ2YsRUFBZ0M7QUFDaEMsRUFBOEM7QUFDOUMsRUFBK0I7QUFDL0IsRUFBaUI7QUFDakIsRUFBaUI7QUFDakIsRUFBTTtBQUNOLEVBQVk7QUFDWixFQUFrQztBQUNsQyxFQUFnQztBQUNoQyxFQUEwQjtBQUMxQixFQUFPO0FBQ1AsRUFBSTtBQUVKLEVBQTZDO0FBRTdDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQ2hCLEdBRHNCLENBQUM7OztJQUNyQixFQUE0QjtJQUNaLEdBQVgsQ0FBOEJULEdBQVcsR0FBWEEsc0RBQVMsYUFBVEEsR0FBVyxDQUF0Q1UsS0FBSyxtQkFBSUMsTUFBTSxFQUFOQSxNQUFNLHdCQUFHLENBQUU7SUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUM7UUFBQ0YsTUFBTSxFQUFOQSxNQUFNO0lBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsRUFBa0Q7SUFDbEQsR0FBSyxDQUFtQlosSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE1QmUsS0FBSSxHQUFhZixJQUFZLEtBQXZCZ0IsT0FBTyxHQUFJaEIsSUFBWTtJQUNwQyxHQUFLLENBQTZCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q2lCLFNBQVMsR0FBa0JqQixJQUFjLEtBQTlCa0IsWUFBWSxHQUFJbEIsSUFBYztJQUVoRCxFQUF1RDtJQUNTLEVBQXpCO0lBQ2UsRUFBekI7SUFDN0IsRUFBcUI7SUFDckIsRUFBMkI7SUFDM0IsRUFBa0M7SUFDbEMsRUFBNkI7SUFDN0IsRUFBeUM7SUFDekMsRUFBTztJQUNQLEVBQTBDO0lBQzFDLEVBQUk7SUFDSixHQUFLLENBQUNtQixRQUFROzZNQUFHLFFBQVEsU0FBRkMsSUFBSSxFQUFJLENBQUM7Z0JBQ3hCQyxNQUFNOzs7OzsrQkFBU2pCLG9EQUFPLENBQUMsQ0FBTSxPQUFFLENBQVcsWUFBRSxDQUFDOzRCQUFDZ0IsSUFBSSxFQUFKQSxJQUFJOzRCQUFFUixNQUFNLEVBQU5BLE1BQU07d0JBQUMsQ0FBQzs7d0JBQTVEUyxNQUFNLFlBaERoQixDQWdEdUU7NEJBQzlEQSxNQUFNOzs7O3dCQUFFLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQW9COzt3QkFDN0NOLE9BQU8sQ0FBQ0QsUUFBUSxDQUFSQSxJQUFJO21DQUFLLENBQUNNO2dDQUFBQSxNQUFNOzRCQUFTLENBQUMsQ0FBakIsTUFBaUIsb0JBQUxOLElBQUk7MEJBQUcsQ0FBQzs7Ozs7O1FBQ3ZDLENBQUM7d0JBSktJLFFBQVEsQ0FBU0MsSUFBSTs7OztJQUszQixFQUF1QztJQUNELEVBQUg7SUFDbkMsRUFBc0I7SUFDdEIsRUFBZ0U7SUFDaEUsRUFBd0M7SUFFeEMsRUFBaUM7SUFDakMsRUFBdUM7SUFDdkMsRUFBOEI7SUFDOUIsRUFBYTtJQUNiLEVBQVU7SUFDVixFQUFzQjtJQUN0QixFQUFRO0lBQ1IsRUFBZ0I7SUFDaEIsRUFBSztJQUNMLEdBQUssQ0FBQ0csUUFBUTs2TUFBRyxRQUFRLFNBQURILElBQUksRUFBRUksRUFBRSxFQUFLLENBQUM7Z0JBQzlCSCxNQUFNOzs7OzsrQkFBU2pCLG9EQUFPLENBQUMsQ0FBSyxNQUFHLENBQVUsWUFBSyxPQUFIb0IsRUFBRSxHQUFJLENBQUM7NEJBQUNKLElBQUksRUFBSkEsSUFBSTs0QkFBRVIsTUFBTSxFQUFOQSxNQUFNO3dCQUFDLENBQUM7O3dCQUFqRVMsTUFBTSxZQXBFaEIsQ0FvRTRFOzRCQUNuRUEsTUFBTTs7Ozt3QkFBRSxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFtQjs7d0JBRTVDTixPQUFPLENBQUNELFFBQVEsQ0FBUkEsSUFBSSxFQUFJLENBQUM7NEJBQ2YsR0FBSyxDQUFDVSxXQUFXLEdBQUdWLElBQUksQ0FBQ1csU0FBUyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7dUNBQUlBLEdBQUcsQ0FBQ0gsRUFBRSxLQUFLQSxFQUFFOzs0QkFDdkQsRUFBRSxFQUFFQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQ1YsSUFBSTs0QkFDaEMsR0FBSyxDQUFDYSxPQUFPLHNCQUFPYixJQUFJOzRCQUN4QmEsT0FBTyxDQUFDQyxNQUFNLENBQUNKLFdBQVcsRUFBRSxDQUFDLEVBQUVKLE1BQU0sQ0FBQyxDQUFDOzRCQUN2QyxNQUFNLENBQUNPLE9BQU87d0JBQ2hCLENBQUMsQ0FBQyxDQUFDO3dCQUNIRSxRQUFRLEVBQUUsQ0FBQzs7Ozs7O1FBQ2IsQ0FBQzt3QkFaS1AsUUFBUSxDQUFVSCxJQUFJLEVBQUVJLEVBQUU7Ozs7SUFjaEMsR0FBSyxDQUFDTSxRQUFRLEdBQUcsUUFBUTtlQUFGWixZQUFZLENBQUMsSUFBSTs7SUFFeEMsRUFBMkI7SUFDM0IsRUFBNkI7SUFDN0IsRUFBc0I7SUFDdEIsRUFBZ0U7SUFDaEUsRUFBd0M7SUFFeEMsRUFBaUM7SUFDakMsRUFBc0M7SUFDdEMsRUFBc0I7SUFDdEIsRUFBUTtJQUNSLEVBQUk7SUFDSixHQUFLLENBQUNhLFFBQVE7Nk1BQUcsUUFBUSxTQUFEUCxFQUFFLEVBQUssQ0FBQztnQkFDeEJRLFVBQVU7Ozs7OytCQUFTNUIsb0RBQU8sQ0FBQyxDQUFRLFNBQUcsQ0FBVSxZQUFLLE9BQUhvQixFQUFFLEdBQUksQ0FBQzs0QkFBQ1osTUFBTSxFQUFOQSxNQUFNO3dCQUFDLENBQUM7O3dCQUFsRW9CLFVBQVUsWUEvRnBCLENBK0Y2RTt3QkFFekVoQixPQUFPLENBQUNELFFBQVEsQ0FBUkEsSUFBSSxFQUFJLENBQUM7NEJBQ2YsR0FBSyxDQUFDVSxXQUFXLEdBQUdWLElBQUksQ0FBQ1csU0FBUyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7dUNBQUlBLEdBQUcsQ0FBQ0gsRUFBRSxLQUFLUSxVQUFVOzs0QkFDL0QsRUFBRSxFQUFFUCxXQUFXLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQ1YsSUFBSTs0QkFFaEMsR0FBSyxDQUFDYSxPQUFPLHNCQUFPYixJQUFJOzRCQUN4QmEsT0FBTyxDQUFDQyxNQUFNLENBQUNKLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsTUFBTSxDQUFDRyxPQUFPO3dCQUNoQixDQUFDLENBQUMsQ0FBQzs7Ozs7O1FBQ0wsQ0FBQzt3QkFYS0csUUFBUSxDQUFVUCxFQUFFOzs7O0lBYTFCLEdBQUssQ0FBQ1MsV0FBVzs2TUFBRyxRQUFRLFdBQUksQ0FBQztnQkFDekJsQixJQUFJOzs7OzsrQkFBU1gsb0RBQU8sQ0FBQyxDQUFLLE1BQUUsQ0FBVzs7d0JBQXZDVyxJQUFJLFlBNUdkLENBNEdrRDt3QkFDOUNDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDLENBQUM7Ozs7OztRQUNoQixDQUFDO3dCQUhLa0IsV0FBVzs7OztJQUlqQmxDLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZrQyxXQUFXLEVBQUUsQ0FBQztJQUNoQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVQLE1BQU07O3dGQUVEOUIsaURBQVE7Z0JBQUMrQixNQUFNLEVBQUVmLFFBQVE7Ozs7Ozt3RkFDekJnQixDQUFFO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVTswQkFDdEJyQixLQUFJLENBQUNzQixHQUFHLENBQUNDLFFBQ2QsQ0FEY0EsQ0FBQzt1R0FDUHBDLGdEQUFPLG9CQUVGb0MsQ0FBQzt3QkFDTGYsUUFBUSxFQUFFQSxRQUFRO3dCQUNsQmdCLFNBQVMsRUFBRSxRQUFRO21DQUFGckIsWUFBWSxDQUFDb0IsQ0FBQyxDQUFDZCxFQUFFOzt3QkFDbENnQixTQUFTLEVBQUV2QixTQUFTLEtBQUtxQixDQUFDLENBQUNkLEVBQUU7d0JBQzdCTyxRQUFRLEVBQUUsUUFBUTttQ0FBRkEsUUFBUSxDQUFDTyxDQUFDLENBQUNkLEVBQUU7O3dCQUM3QmlCLElBQUksRUFBRTdCLE1BQU07d0JBTlAwQixDQUFDLENBQUNkLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFXckIsQ0FBQztHQXhHS2QsT0FBTzs7UUFFd0JULGtEQUFTOzs7S0FGeENTLE9BQU87QUEwR2IsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MWFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJztcblxuY29uc3QgVXNlcklkcyA9IFsncm95JywgJ2pheSddO1xuY29uc3QgZ2V0UmFuZG9tZVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG5cbi8vIHNlcnZlciBzZXR0aW5nIOyghOyXkOuKlCBtb2NrIOuNsOydtO2EsOulvCDsgqzsmqntlZjquLAg65WM66y47JeQIOyVhOuemCDsvZTrk5zqsIAg7ZWE7JqU7ZWY7KeA66eMXG4vLyDshJzrsoTrpbwg66eM65Ok6rOgIOuCnCDsnbTtm4Tsl5DripQg7ZWE7JqUIOyXhuycvOuvgOuhnCDso7zshJ3sspjrpqxcbi8vIGNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKS5maWxsKDApLm1hcCgoXywgaSkgPT4gKHtcbi8vICAgaWQ6IGkgKyAxLFxuLy8gICB1c2VySWQ6IGdldFJhbmRvbWVVc2VySWQoKSxcbi8vICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzICsgaSAqIDEwMDAgKiA2MCxcbi8vICAgdGV4dDogYCR7aSArIDF9IG1vY2sgdGV4dGBcbi8vIH0pKS5yZXZlcnNlKCk7XG4vLyBjb25zdCBtc2dzID0gW1xuLy8gICB7XG4vLyAgICAgaWQ6MSxcbi8vICAgICB1c2VySWQ6IGdldFJhbmRvbWVVc2VySWQoKSxcbi8vICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMsXG4vLyAgICAgdGV4dDogJzEgbW9jayB0ZXh0J1xuLy8gICB9LFxuLy8gXVxuXG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcmlnaW5hbE1zZ3MpKTtcblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbiAgLy8gcXVlcnkg66W8IO2Gte2VtCB1c2VySWQg66W8IOqwgOyngOqzoCDsmLRcbiAgY29uc3QgeyBxdWVyeTogeyB1c2VySWQgPSAnJyB9IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2coeyB1c2VySWQgfSk7XG4gIC8vIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncyk7XG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIOyEnOuyhCDsl7DqsrAg7KCE7JeQ64qUIOyVhOuemOyZgCDqsJnsnbQg64m066mU7IS47KeAIOqwneyytOulvCDrp4zrk6TslrTshJwgdXNlU3RhdGUg7JeQIOuEo+yWtOyjvOyWtOyVvCDtlojsp4Drp4wsXG4gIC8vIOyEnOuyhCDsl7DqsrAg7ZuE7JeQ64qUIOyngeygkSDrjbDsnbTthLDrpbwg7Ya17Iug7ZWY64qUIOuwqeyLneycvOuhnCDqtaztmITtlZjrqbQg65Cc64ukLlxuICAvLyBjb25zdCBvbkNyZWF0ZSA9IHRleHQgPT4ge1xuICAvLyAgIGNvbnN0IG5ld01zZyA9IHtcbiAgLy8gICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gIC8vICAgICB1c2VySWQ6IGdldFJhbmRvbWVVc2VySWQoKSxcbiAgLy8gICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgLy8gICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWBcbiAgLy8gICB9O1xuICAvLyAgIHNldE1zZ3MobXNncyA9PiAoW25ld01zZywgLi4ubXNnc10pKTtcbiAgLy8gfVxuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jIHRleHQgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdTb213dGhpbmcgd3JvbmcuLi4nKVxuICAgIHNldE1zZ3MobXNncyA9PiAoW25ld01zZywgLi4ubXNnc10pKTtcbiAgfVxuICAvLyB1cGRhdGUg64+EIOuniOywrOqwgOyngOuhnCBtb2NrIOuNsOydtO2EsOyXkOyEnCDsp4HsoJEg7Ya17Iug7Jy866GcIOyImOyglVxuICAvLyBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xuICAvLyAgIHNldE1zZ3MobXNncyA9PiB7XG4gIC8vICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKTtcbiAgLy8gICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuXG4gIC8vICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAvLyAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcbiAgLy8gICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXG4gIC8vICAgICAgIHRleHRcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgcmV0dXJuIG5ld01zZ3M7XG4gIC8vICAgfSk7XG4gIC8vICAgZG9uZUVkaXQoKTtcbiAgLy8gfTtcbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwdXQnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdTb21ldGhpbmcgd3JvbmcuLicpO1xuXG4gICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgICBkb25lRWRpdCgpO1xuICB9XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XG5cbiAgLy8gZGVsZXRlIOuPhCBEQiDsmYAg7Ya17IugIOuwqeyLneycvOuhnCDsiJjsoJVcbiAgLy8gY29uc3Qgb25EZWxldGUgPSAoaWQpID0+IHtcbiAgLy8gICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAvLyAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZCk7XG4gIC8vICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcblxuICAvLyAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgLy8gICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgLy8gICAgIHJldHVybiBuZXdNc2dzO1xuICAvLyAgIH0pO1xuICAvLyB9XG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHVzZXJJZCB9KTtcblxuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG5cbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJyk7XG4gICAgc2V0TXNncyhtc2dzKTtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1lc3NhZ2VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPntcbiAgICAgICAgbXNncy5tYXAoeCA9PlxuICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICBrZXk9e3guaWR9XG4gICAgICAgICAgICB7Li4ueH1cbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XG4gICAgICAgICAgLz4pXG4gICAgICB9PC91bD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiZmV0Y2hlciIsIlVzZXJJZHMiLCJnZXRSYW5kb21lVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcklkIiwiY29uc29sZSIsImxvZyIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwiRXJyb3IiLCJvblVwZGF0ZSIsImlkIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsInJlY2VpdmVkSWQiLCJnZXRNZXNzYWdlcyIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});