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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar UserIds = [\n    'roy',\n    'jay'\n];\nvar getRandomeUserId = function() {\n    return UserIds[Math.round(Math.random())];\n};\n// server setting 전에는 mock 데이터를 사용하기 때문에 아래 코드가 필요하지만\n// 서버를 만들고 난 이후에는 필요 없으므로 주석처리\n// const originalMsgs = Array(50).fill(0).map((_, i) => ({\n//   id: i + 1,\n//   userId: getRandomeUserId(),\n//   timestamp: 1234567890123 + i * 1000 * 60,\n//   text: `${i + 1} mock text`\n// })).reverse();\n// const msgs = [\n//   {\n//     id:1,\n//     userId: getRandomeUserId(),\n//     timestamp: 1234567890123,\n//     text: '1 mock text'\n//   },\n// ]\n// console.log(JSON.stringify(originalMsgs));\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    // query 를 통해 userId 를 가지고 옴\n    var ref = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(), _query = ref.query, _userId = _query.userId, userId = _userId === void 0 ? '' : _userId;\n    console.log({\n        userId: userId\n    });\n    // const [msgs, setMsgs] = useState(originalMsgs);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), msgs1 = ref1[0], setMsgs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), editingId = ref2[0], setEditingId = ref2[1];\n    // 서버 연결 전에는 아래와 같이 뉴메세지 객체를 만들어서 useState 에 넣어주어야 했지만,\n    // 서버 연결 후에는 직접 데이터를 통신하는 방식으로 구현하면 된다.\n    // const onCreate = text => {\n    //   const newMsg = {\n    //     id: msgs.length + 1,\n    //     userId: getRandomeUserId(),\n    //     timestamp: Date.now(),\n    //     text: `${msgs.length + 1} ${text}`\n    //   };\n    //   setMsgs(msgs => ([newMsg, ...msgs]));\n    // }\n    var onCreate = function() {\n        var _ref = _asyncToGenerator(_Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n            var newMsg;\n            return _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('post', '/messages', {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('Somwthing wrong...');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            return [\n                                newMsg\n                            ].concat(_toConsumableArray(msgs));\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onCreate(text) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // update 도 마찬가지로 mock 데이터에서 직접 통신으로 수정\n    // const onUpdate = (text, id) => {\n    //   setMsgs(msgs => {\n    //     const targetIndex = msgs.findIndex(msg => msg.id === id);\n    //     if (targetIndex < 0) return msgs;\n    //     const newMsgs = [...msgs];\n    //     newMsgs.splice(targetIndex, 1, {\n    //       ...msgs[targetIndex],\n    //       text\n    //     });\n    //     return newMsgs;\n    //   });\n    //   doneEdit();\n    // };\n    var onUpdate = function() {\n        var _ref = _asyncToGenerator(_Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n            var newMsg;\n            return _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('put', \"/messages/\".concat(id), {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('Something wrong..');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === id;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1, newMsg);\n                            return newMsgs;\n                        });\n                        doneEdit();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onUpdate(text, id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var onDelete = function(id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsgs = _toConsumableArray(msgs);\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    var getMessages = function() {\n        var _ref = _asyncToGenerator(_Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var msgs;\n            return _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('get', '/messages');\n                    case 2:\n                        msgs = _ctx.sent;\n                        setMsgs(msgs);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getMessages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgList.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(x) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, x, {\n                        onUpdate: onUpdate,\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        myId: userId\n                    }), x.id, false, {\n                        fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgList.js\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgList.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"7uYoK/Xma1ZRbI68k7kfRtq6rY0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNYO0FBQ1I7QUFDRTtBQUNEOztBQUVoQyxHQUFLLENBQUNPLE9BQU8sR0FBRyxDQUFDO0lBQUEsQ0FBSztJQUFFLENBQUs7QUFBQSxDQUFDO0FBQzlCLEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQUcsUUFBUTtXQUFGRCxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU07O0FBRTdELEVBQXFEO0FBQ0wsRUFBbEI7QUFDWSxFQUFnQjtBQUMxRCxFQUFlO0FBQ2YsRUFBZ0M7QUFDaEMsRUFBOEM7QUFDOUMsRUFBK0I7QUFDL0IsRUFBaUI7QUFDakIsRUFBaUI7QUFDakIsRUFBTTtBQUNOLEVBQVk7QUFDWixFQUFrQztBQUNsQyxFQUFnQztBQUNoQyxFQUEwQjtBQUMxQixFQUFPO0FBQ1AsRUFBSTtBQUVKLEVBQTZDO0FBRTdDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQ2hCLEdBRHNCLENBQUM7OztJQUNyQixFQUE0QjtJQUNaLEdBQVgsQ0FBOEJULEdBQVcsR0FBWEEsc0RBQVMsYUFBVEEsR0FBVyxDQUF0Q1UsS0FBSyxtQkFBSUMsTUFBTSxFQUFOQSxNQUFNLHdCQUFHLENBQUU7SUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUM7UUFBQ0YsTUFBTSxFQUFOQSxNQUFNO0lBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsRUFBa0Q7SUFDbEQsR0FBSyxDQUFtQlosSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE1QmUsS0FBSSxHQUFhZixJQUFZLEtBQXZCZ0IsT0FBTyxHQUFJaEIsSUFBWTtJQUNwQyxHQUFLLENBQTZCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q2lCLFNBQVMsR0FBa0JqQixJQUFjLEtBQTlCa0IsWUFBWSxHQUFJbEIsSUFBYztJQUVoRCxFQUF1RDtJQUNTLEVBQXpCO0lBQ2UsRUFBekI7SUFDN0IsRUFBcUI7SUFDckIsRUFBMkI7SUFDM0IsRUFBa0M7SUFDbEMsRUFBNkI7SUFDN0IsRUFBeUM7SUFDekMsRUFBTztJQUNQLEVBQTBDO0lBQzFDLEVBQUk7SUFDSixHQUFLLENBQUNtQixRQUFROzZNQUFHLFFBQVEsU0FBRkMsSUFBSSxFQUFJLENBQUM7Z0JBQ3hCQyxNQUFNOzs7OzsrQkFBU2pCLG9EQUFPLENBQUMsQ0FBTSxPQUFFLENBQVcsWUFBRSxDQUFDOzRCQUFDZ0IsSUFBSSxFQUFKQSxJQUFJOzRCQUFFUixNQUFNLEVBQU5BLE1BQU07d0JBQUMsQ0FBQzs7d0JBQTVEUyxNQUFNLFlBaERoQixDQWdEdUU7NEJBQzlEQSxNQUFNOzs7O3dCQUFFLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQW9COzt3QkFDN0NOLE9BQU8sQ0FBQ0QsUUFBUSxDQUFSQSxJQUFJO21DQUFLLENBQUNNO2dDQUFBQSxNQUFNOzRCQUFTLENBQUMsQ0FBakIsTUFBaUIsb0JBQUxOLElBQUk7MEJBQUcsQ0FBQzs7Ozs7O1FBQ3ZDLENBQUM7d0JBSktJLFFBQVEsQ0FBU0MsSUFBSTs7OztJQUszQixFQUF1QztJQUN2QyxFQUFtQztJQUNuQyxFQUFzQjtJQUN0QixFQUFnRTtJQUNoRSxFQUF3QztJQUV4QyxFQUFpQztJQUNqQyxFQUF1QztJQUN2QyxFQUE4QjtJQUM5QixFQUFhO0lBQ2IsRUFBVTtJQUNWLEVBQXNCO0lBQ3RCLEVBQVE7SUFDUixFQUFnQjtJQUNoQixFQUFLO0lBQ0wsR0FBSyxDQUFDRyxRQUFROzZNQUFHLFFBQVEsU0FBREgsSUFBSSxFQUFFSSxFQUFFLEVBQUssQ0FBQztnQkFDOUJILE1BQU07Ozs7OytCQUFTakIsb0RBQU8sQ0FBQyxDQUFLLE1BQUcsQ0FBVSxZQUFLLE9BQUhvQixFQUFFLEdBQUksQ0FBQzs0QkFBQ0osSUFBSSxFQUFKQSxJQUFJOzRCQUFFUixNQUFNLEVBQU5BLE1BQU07d0JBQUMsQ0FBQzs7d0JBQWpFUyxNQUFNLFlBcEVoQixDQW9FNEU7NEJBQ25FQSxNQUFNOzs7O3dCQUFFLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQW1COzt3QkFFNUNOLE9BQU8sQ0FBQ0QsUUFBUSxDQUFSQSxJQUFJLEVBQUksQ0FBQzs0QkFDZixHQUFLLENBQUNVLFdBQVcsR0FBR1YsSUFBSSxDQUFDVyxTQUFTLENBQUNDLFFBQVEsQ0FBUkEsR0FBRzt1Q0FBSUEsR0FBRyxDQUFDSCxFQUFFLEtBQUtBLEVBQUU7OzRCQUN2RCxFQUFFLEVBQUVDLFdBQVcsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDVixJQUFJOzRCQUNoQyxHQUFLLENBQUNhLE9BQU8sc0JBQU9iLElBQUk7NEJBQ3hCYSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0osV0FBVyxFQUFFLENBQUMsRUFBRUosTUFBTSxDQUFDLENBQUM7NEJBQ3ZDLE1BQU0sQ0FBQ08sT0FBTzt3QkFDaEIsQ0FBQyxDQUFDLENBQUM7d0JBQ0hFLFFBQVEsRUFBRSxDQUFDOzs7Ozs7UUFDYixDQUFDO3dCQVpLUCxRQUFRLENBQVVILElBQUksRUFBRUksRUFBRTs7OztJQWNoQyxHQUFLLENBQUNNLFFBQVEsR0FBRyxRQUFRO2VBQUZaLFlBQVksQ0FBQyxJQUFJOztJQUV4QyxHQUFLLENBQUNhLFFBQVEsR0FBRyxRQUFRLENBQVBQLEVBQUUsRUFBSyxDQUFDO1FBQ3hCUixPQUFPLENBQUNELFFBQVEsQ0FBUkEsSUFBSSxFQUFJLENBQUM7WUFDZixHQUFLLENBQUNVLFdBQVcsR0FBR1YsSUFBSSxDQUFDVyxTQUFTLENBQUNDLFFBQVEsQ0FBUkEsR0FBRzt1QkFBSUEsR0FBRyxDQUFDSCxFQUFFLEtBQUtBLEVBQUU7O1lBQ3ZELEVBQUUsRUFBRUMsV0FBVyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUNWLElBQUk7WUFFaEMsR0FBSyxDQUFDYSxPQUFPLHNCQUFPYixJQUFJO1lBQ3hCYSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0osV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQ0csT0FBTztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxHQUFLLENBQUNJLFdBQVc7Nk1BQUcsUUFBUSxXQUFJLENBQUM7Z0JBQ3pCakIsSUFBSTs7Ozs7K0JBQVNYLG9EQUFPLENBQUMsQ0FBSyxNQUFFLENBQVc7O3dCQUF2Q1csSUFBSSxZQS9GZCxDQStGa0Q7d0JBQzlDQyxPQUFPLENBQUNELElBQUksQ0FBQyxDQUFDOzs7Ozs7UUFDaEIsQ0FBQzt3QkFIS2lCLFdBQVc7Ozs7SUFJakJqQyxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmaUMsV0FBVyxFQUFFLENBQUM7SUFDaEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxNQUFNOzt3RkFFRDdCLGlEQUFRO2dCQUFDOEIsTUFBTSxFQUFFZCxRQUFROzs7Ozs7d0ZBQ3pCZSxDQUFFO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVTswQkFDdEJwQixLQUFJLENBQUNxQixHQUFHLENBQUNDLFFBQ2QsQ0FEY0EsQ0FBQzt1R0FDUG5DLGdEQUFPLG9CQUVGbUMsQ0FBQzt3QkFDTGQsUUFBUSxFQUFFQSxRQUFRO3dCQUNsQmUsU0FBUyxFQUFFLFFBQVE7bUNBQUZwQixZQUFZLENBQUNtQixDQUFDLENBQUNiLEVBQUU7O3dCQUNsQ2UsU0FBUyxFQUFFdEIsU0FBUyxLQUFLb0IsQ0FBQyxDQUFDYixFQUFFO3dCQUM3Qk8sUUFBUSxFQUFFLFFBQVE7bUNBQUZBLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDYixFQUFFOzt3QkFDN0JnQixJQUFJLEVBQUU1QixNQUFNO3dCQU5QeUIsQ0FBQyxDQUFDYixFQUFFOzs7Ozs7Ozs7Ozs7O0FBV3JCLENBQUM7R0EzRktkLE9BQU87O1FBRXdCVCxrREFBUzs7O0tBRnhDUyxPQUFPO0FBNkZiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nO1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vZmV0Y2hlcic7XG5cbmNvbnN0IFVzZXJJZHMgPSBbJ3JveScsICdqYXknXTtcbmNvbnN0IGdldFJhbmRvbWVVc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xuXG4vLyBzZXJ2ZXIgc2V0dGluZyDsoITsl5DripQgbW9jayDrjbDsnbTthLDrpbwg7IKs7Jqp7ZWY6riwIOuVjOusuOyXkCDslYTrnpgg7L2U65Oc6rCAIO2VhOyalO2VmOyngOunjFxuLy8g7ISc67KE66W8IOunjOuTpOqzoCDrgpwg7J207ZuE7JeQ64qUIO2VhOyalCDsl4bsnLzrr4DroZwg7KO87ISd7LKY66asXG4vLyBjb25zdCBvcmlnaW5hbE1zZ3MgPSBBcnJheSg1MCkuZmlsbCgwKS5tYXAoKF8sIGkpID0+ICh7XG4vLyAgIGlkOiBpICsgMSxcbi8vICAgdXNlcklkOiBnZXRSYW5kb21lVXNlcklkKCksXG4vLyAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArIGkgKiAxMDAwICogNjAsXG4vLyAgIHRleHQ6IGAke2kgKyAxfSBtb2NrIHRleHRgXG4vLyB9KSkucmV2ZXJzZSgpO1xuLy8gY29uc3QgbXNncyA9IFtcbi8vICAge1xuLy8gICAgIGlkOjEsXG4vLyAgICAgdXNlcklkOiBnZXRSYW5kb21lVXNlcklkKCksXG4vLyAgICAgdGltZXN0YW1wOiAxMjM0NTY3ODkwMTIzLFxuLy8gICAgIHRleHQ6ICcxIG1vY2sgdGV4dCdcbi8vICAgfSxcbi8vIF1cblxuLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkob3JpZ2luYWxNc2dzKSk7XG5cbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XG4gIC8vIHF1ZXJ5IOulvCDthrXtlbQgdXNlcklkIOulvCDqsIDsp4Dqs6Ag7Ji0XG4gIGNvbnN0IHsgcXVlcnk6IHsgdXNlcklkID0gJycgfSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKHsgdXNlcklkIH0pO1xuICAvLyBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyDshJzrsoQg7Jew6rKwIOyghOyXkOuKlCDslYTrnpjsmYAg6rCZ7J20IOuJtOuplOyEuOyngCDqsJ3ssrTrpbwg66eM65Ok7Ja07IScIHVzZVN0YXRlIOyXkCDrhKPslrTso7zslrTslbwg7ZaI7KeA66eMLFxuICAvLyDshJzrsoQg7Jew6rKwIO2bhOyXkOuKlCDsp4HsoJEg642w7J207YSw66W8IO2GteyLoO2VmOuKlCDrsKnsi53snLzroZwg6rWs7ZiE7ZWY66m0IOuQnOuLpC5cbiAgLy8gY29uc3Qgb25DcmVhdGUgPSB0ZXh0ID0+IHtcbiAgLy8gICBjb25zdCBuZXdNc2cgPSB7XG4gIC8vICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxuICAvLyAgICAgdXNlcklkOiBnZXRSYW5kb21lVXNlcklkKCksXG4gIC8vICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gIC8vICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gXG4gIC8vICAgfTtcbiAgLy8gICBzZXRNc2dzKG1zZ3MgPT4gKFtuZXdNc2csIC4uLm1zZ3NdKSk7XG4gIC8vIH1cbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyB0ZXh0ID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pO1xuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignU29td3RoaW5nIHdyb25nLi4uJylcbiAgICBzZXRNc2dzKG1zZ3MgPT4gKFtuZXdNc2csIC4uLm1zZ3NdKSk7XG4gIH1cbiAgLy8gdXBkYXRlIOuPhCDrp4jssKzqsIDsp4DroZwgbW9jayDrjbDsnbTthLDsl5DshJwg7KeB7KCRIO2GteyLoOycvOuhnCDsiJjsoJVcbiAgLy8gY29uc3Qgb25VcGRhdGUgPSAodGV4dCwgaWQpID0+IHtcbiAgLy8gICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAvLyAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZCk7XG4gIC8vICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcblxuICAvLyAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgLy8gICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XG4gIC8vICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxuICAvLyAgICAgICB0ZXh0XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHJldHVybiBuZXdNc2dzO1xuICAvLyAgIH0pO1xuICAvLyAgIGRvbmVFZGl0KCk7XG4gIC8vIH07XG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pO1xuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignU29tZXRoaW5nIHdyb25nLi4nKTtcblxuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gICAgZG9uZUVkaXQoKTtcbiAgfVxuXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xuXG4gIGNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG5cbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJyk7XG4gICAgc2V0TXNncyhtc2dzKTtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1lc3NhZ2VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPntcbiAgICAgICAgbXNncy5tYXAoeCA9PlxuICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICBrZXk9e3guaWR9XG4gICAgICAgICAgICB7Li4ueH1cbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XG4gICAgICAgICAgLz4pXG4gICAgICB9PC91bD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiZmV0Y2hlciIsIlVzZXJJZHMiLCJnZXRSYW5kb21lVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcklkIiwiY29uc29sZSIsImxvZyIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwiRXJyb3IiLCJvblVwZGF0ZSIsImlkIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsImdldE1lc3NhZ2VzIiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});