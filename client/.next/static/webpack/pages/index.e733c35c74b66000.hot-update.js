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

/***/ "./components/MsgListGraphql.js":
/*!**************************************!*\
  !*** ./components/MsgListGraphql.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// import useInfiniteScroll from '../hooks/useInfiniteScroll';\n// smsgs 는 SSR 로 구현되어 들어오는 messages props\nvar MsgListGraphql = function(param1) {\n    var smsgs = param1.smsgs, users = param1.users;\n    var _this1 = _this;\n    _s();\n    console.log('MsgListGraphql :', smsgs);\n    console.log('MsgListGraphql :', users);\n    var client = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient)();\n    // return null;\n    // query 를 통해 userId 를 가지고 옴\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().query;\n    // windows 의 경우 대문자를 자동으로 소문자로 변환하는 경우가 있어서\n    // userId 를 userId, userid 두 가지 경우를 모두 넣어 주어서\n    // windows가 임의로 Id => id 로 바꾸는 경우도 대응\n    var userId = query.userId || query.userid || '';\n    console.log({\n        userId: userId\n    });\n    // const [msgs, setMsgs] = useState(originalMsgs);\n    // const [msgs, setMsgs] = useState([]);\n    // 위에는 CRS 이었지만 SSR 로 바꾸면서 props 로 받은 메시지들을 setState 해 준다\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(smsgs), msgs1 = ref5[0], setMsgs = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    // 아래 세 줄은 무한 스크롤을 위한 용도\n    // const [hasNext, setHasNext] = useState(true);\n    // const fetchMoreEl = useRef(null);\n    // const intersecting = useInfiniteScroll(fetchMoreEl);\n    // mutation 은 text 를 입력받아서 fetcher 함수에 text와 userId 를 variables 로 넣어서 날려주고,\n    // 성공하면 반환되는 메시지를 react-query 가 관리하는 cache 에 저장하도록 한다\n    var ref2 = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)(function(param) {\n        var text = param.text;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.CREATE_MESSAGE, {\n            text: text,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var createMessage = param.createMessage;\n            // client 에 접근해서 setQueryData 라는 메소드로 저장을 하는데,\n            // 쿼리키 를 통해 어떤 데이타에 접근하려는지 찾고,\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                // 저장값은 useQuery 의 응답 형태. 즉, data: { messages : [...] }\n                // 이런 형태로 리턴해 주면 된다\n                return {\n                    messages: _toConsumableArray(createMessage).concat(_toConsumableArray(old.messages))\n                };\n            });\n        }\n    }), onCreate = ref2.mutate;\n    var ref3 = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)(function(param) {\n        var text = param.text, id = param.id;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.UPDATE_MESSAGE, {\n            text: text,\n            id: id\n        });\n    }, {\n        onSuccess: function(param) {\n            var updateMessage = param.updateMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                var targetIndex = old.messages.findIndex(function(msg) {\n                    return msg.id === id;\n                });\n                if (targetIndex < 0) return old;\n                var newMsgs = _toConsumableArray(old.messages);\n                newMsgs.splice(targetIndex, 1, updateMessage);\n                return {\n                    messages: newMsgs\n                };\n            });\n            doneEdit();\n        }\n    }), onUpdate = ref3.mutate;\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var onDelete = function() {\n        var _ref = _asyncToGenerator(_Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var receivedId;\n            return _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)('delete', \"/messages/\".concat(id), {\n                            params: {\n                                userId: userId\n                            }\n                        });\n                    case 2:\n                        receivedId = _ctx.sent;\n                        console.log(typeof id === \"undefined\" ? \"undefined\" : _typeof(id), typeof receivedId === \"undefined\" ? \"undefined\" : _typeof(receivedId)); // string number\n                        setMsgs(function(msgs) {\n                            // receivedId + '' 를 해 주는 이유는 서버에서 id를 받을 때 파싱되면서\n                            // 문자열이 숫자로 변경될 수 있어서 문자열로 통일시키는 것 \n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === receivedId + '';\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1);\n                            return newMsgs;\n                        });\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onDelete(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // react-query 의 useQuery 를 사용할 때 query key 를 사용하지 않고, options 만으로도 쿼리를 날릴 수 있지만,\n    // graphQL 과 같이 사용하려면 query key 를 꼭 같이 사용해야 한다\n    // 두 번째 인자는 서버와 통신을 하는 FETCHER 함수에 원하는 데이타 구조인 GET_MESSAGES 를 인자로 담아서 날려야 하는데,\n    // 화살표 함수를 이용하는 이유는 이미 함수가 실행된 결과를 useQuery 에 넣어주는 꼴이기 때문에\n    // 화살표 함수로 감싸서 필요할 때(그때 그때) 호출이 되도록 해야 한다.\n    // 즉 함수의 결과값이 아닌, 함수 자체가 전달되도록 해야 함\n    // 여기서 props 로 받은 smsgs 는 SSR을 통해 날아온 정보이고, 하이드레이션 세팅을 통해 일단 캐시에 저장되어 있다.\n    // 아래 쿼리는 앱이 실행되면 실행되어 쿼리를 받아오지만, 이미 한번 SSR 을 통해 캐시에 저장되어 있는 데이터가 있기 때문에\n    // 둘이 비교해서 차이가 없다면 굳이 새 데이터로 바꿔치기 하지 않고, 기존에 저장되어 있는 데이터를 반환하게 된다\n    var ref4 = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function() {\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.GET_MESSAGES);\n    }), data = ref4.data, error = ref4.error, isError = ref4.isError;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!(data === null || data === void 0 ? void 0 : data.messages)) return;\n        console.log('msgs changed');\n        setMsgs(data.messages);\n    }, [\n        data === null || data === void 0 ? void 0 : data.messages\n    ]);\n    if (isError) {\n        console.error(error);\n        return null;\n    }\n    var getMessages = function() {\n        var _ref = _asyncToGenerator(_Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, newMsgs;\n            return _Users_seanlee_Documents_nextjs_inflearn_fullstack_react_toy_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        _ctx.next = 3;\n                        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)('get', '/messages', {\n                            params: {\n                                cursor: ((ref = msgs1[msgs1.length - 1]) === null || ref === void 0 ? void 0 : ref.id) || ''\n                            }\n                        });\n                    case 3:\n                        newMsgs = _ctx.sent;\n                        if (!(newMsgs.length === 0)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        setHasNext(false);\n                        return _ctx.abrupt(\"return\");\n                    case 7:\n                        // setMsgs(newMsgs);\n                        setMsgs(function(msgs) {\n                            return _toConsumableArray(msgs).concat(_toConsumableArray(newMsgs));\n                        });\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    //   if (intersecting && hasNext) getMessages();\n    // }, [intersecting]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgListGraphql.js\",\n                lineNumber: 125,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(msg) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, msg, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(msg.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(msg.id);\n                        },\n                        isEditing: editingId === msg.id,\n                        myId: userId,\n                        user: users.find(function(user) {\n                            return user.id === msg.userId;\n                        })\n                    }), msg.id, false, {\n                        fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgListGraphql.js\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgListGraphql.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgListGraphql, \"SEUGZ5zfUMQBqM2HlWrRB6YXG6s=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery\n    ];\n});\n_c = MsgListGraphql;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgListGraphql);\nvar _c;\n$RefreshReg$(_c, \"MsgListGraphql\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3RHcmFwaHFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDbkI7QUFDUjtBQUNFO0FBQ2tCO0FBQ2dCO0FBQzhCOztBQUNqRyxFQUE4RDtBQUU5RCxFQUF5QztBQUNyQixHQUFmLENBQUNnQixjQUFjLEdBQUcsUUFBUSxTQUFjLENBQUM7UUFBcEJDLEtBQUssVUFBTEEsS0FBSyxFQUFFQyxLQUFLLFVBQUxBLEtBQUs7OztJQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBa0IsbUJBQUVILEtBQUssQ0FBQyxDQUFDO0lBQ3ZDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFrQixtQkFBRUYsS0FBSyxDQUFDLENBQUM7SUFFdkMsR0FBSyxDQUFDRyxNQUFNLEdBQUdWLDJEQUFjO0lBRTdCLEVBQWU7SUFDZixFQUE0QjtJQUNaLEdBQVgsQ0FBR1csS0FBSyxHQUFLbEIsc0RBQVMsR0FBbkJrQixLQUFLO0lBQ2IsRUFBMkM7SUFDTyxFQUFMO0lBQ2pCLEVBQVM7SUFDWCxHQUFyQixDQUFDQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBTSxJQUFJRCxLQUFLLENBQUNFLE1BQU0sSUFBSSxDQUFFO0lBQ2pETCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDO1FBQUNHLE1BQU0sRUFBTkEsTUFBTTtJQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLEVBQWtEO0lBQ2xELEVBQXdDO0lBQ3hDLEVBQXlEO0lBQ1gsR0FBekMsQ0FBbUJyQixJQUFlLEdBQWZBLCtDQUFRLENBQUNlLEtBQUssR0FBL0JRLEtBQUksR0FBYXZCLElBQWUsS0FBMUJ3QixPQUFPLEdBQUl4QixJQUFlO0lBQ3ZDLEdBQUssQ0FBNkJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDeUIsU0FBUyxHQUFrQnpCLElBQWMsS0FBOUIwQixZQUFZLEdBQUkxQixJQUFjO0lBRWhELEVBQXdCO0lBQ00sRUFBa0I7SUFDaEQsRUFBb0M7SUFDcEMsRUFBdUQ7SUFFdkQsRUFBMkU7SUFDbkMsRUFBYTtJQUNILEdBQTdDLENBQXdCUSxJQVkzQixHQVoyQkEsd0RBQVcsQ0FBQyxRQUFRO1lBQUxtQixJQUFJLFNBQUpBLElBQUk7ZUFBT3RCLHFEQUFPLENBQUNLLDREQUFjLEVBQUUsQ0FBQztZQUFDaUIsSUFBSSxFQUFKQSxJQUFJO1lBQUVOLE1BQU0sRUFBTkEsTUFBTTtRQUFDLENBQUM7T0FBRyxDQUFDO1FBQ2pHTyxTQUFTLEVBQUUsUUFBUSxRQUFlLENBQUM7Z0JBQXJCQyxhQUFhLFNBQWJBLGFBQWE7WUFDekIsRUFBZ0Y7WUFDaEYsRUFBc0U7WUFDdEVWLE1BQU0sQ0FBQ1csWUFBWSxDQUFDeEIsNERBQWtCLEVBQUUwQixRQUFRLENBQVJBLEdBQUcsRUFBSSxDQUFDO2dCQUM5QyxFQUEyRTtnQkFDM0UsRUFBMkM7Z0JBQzNDLE1BQU0sQ0FBQyxDQUFDO29CQUNOQyxRQUFRLHFCQUFNSixhQUFhLDRCQUFLRyxHQUFHLENBQUNDLFFBQVE7Z0JBQzlDLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsR0FaZUMsUUFBUSxHQUFLMUIsSUFZM0IsQ0FaTTJCLE1BQU07SUFjZCxHQUFLLENBQXdCM0IsSUFXM0IsR0FYMkJBLHdEQUFXLENBQUMsUUFBUTtZQUFMbUIsSUFBSSxTQUFKQSxJQUFJLEVBQUVTLEVBQUUsU0FBRkEsRUFBRTtlQUFPL0IscURBQU8sQ0FBQ08sNERBQWMsRUFBRSxDQUFDO1lBQUNlLElBQUksRUFBSkEsSUFBSTtZQUFFUyxFQUFFLEVBQUZBLEVBQUU7UUFBQyxDQUFDO09BQUcsQ0FBQztRQUNqR1IsU0FBUyxFQUFFLFFBQVEsUUFBZSxDQUFDO2dCQUFyQlMsYUFBYSxTQUFiQSxhQUFhO1lBQ3pCbEIsTUFBTSxDQUFDVyxZQUFZLENBQUN4Qiw0REFBa0IsRUFBRTBCLFFBQVEsQ0FBUkEsR0FBRyxFQUFJLENBQUM7Z0JBQzlDLEdBQUssQ0FBQ00sV0FBVyxHQUFHTixHQUFHLENBQUNDLFFBQVEsQ0FBQ00sU0FBUyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7MkJBQUlBLEdBQUcsQ0FBQ0osRUFBRSxLQUFLQSxFQUFFOztnQkFDL0QsRUFBRSxFQUFFRSxXQUFXLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQ04sR0FBRztnQkFDL0IsR0FBSyxDQUFDUyxPQUFPLHNCQUFPVCxHQUFHLENBQUNDLFFBQVE7Z0JBQ2hDUSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0osV0FBVyxFQUFFLENBQUMsRUFBRUQsYUFBYSxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxDQUFDO29CQUFDSixRQUFRLEVBQUVRLE9BQU87Z0JBQUMsQ0FBQztZQUM5QixDQUFDO1lBQ0RFLFFBQVE7UUFDVixDQUFDO0lBQ0gsQ0FBQyxHQVhlQyxRQUFRLEdBQUtwQyxJQVczQixDQVhNMkIsTUFBTTtJQWFkLEdBQUssQ0FBQ1EsUUFBUSxHQUFHLFFBQVE7ZUFBRmpCLFlBQVksQ0FBQyxJQUFJOztJQUV4QyxHQUFLLENBQUNtQixRQUFROzZNQUFHLFFBQVEsU0FBRFQsRUFBRSxFQUFLLENBQUM7Z0JBQ3hCVSxVQUFVOzs7OzsrQkFBU3pDLHFEQUFPLENBQUMsQ0FBUSxTQUFHLENBQVUsWUFBSyxPQUFIK0IsRUFBRSxHQUFJLENBQUM7NEJBQUNXLE1BQU0sRUFBRSxDQUFDO2dDQUFDMUIsTUFBTSxFQUFOQSxNQUFNOzRCQUFDLENBQUM7d0JBQUMsQ0FBQzs7d0JBQTlFeUIsVUFBVSxZQW5FcEIsQ0FtRXlGO3dCQUNyRjdCLE9BQU8sQ0FBQ0MsR0FBRyxRQUFRa0IsRUFBRSxpQ0FBVCxPQUFTLENBQUZBLEVBQUUsVUFBU1UsVUFBVSxpQ0FBakIsT0FBaUIsQ0FBVkEsVUFBVSxFQUFDLENBQUMsQ0FBQyxFQUFnQjt3QkFDM0R0QixPQUFPLENBQUNELFFBQVEsQ0FBUkEsSUFBSSxFQUFJLENBQUM7NEJBQ2YsRUFBaUQ7NEJBQ1QsRUFBTDs0QkFDYSxHQUEzQyxDQUFDZSxXQUFXLEdBQUdmLElBQUksQ0FBQ2dCLFNBQVMsQ0FBQ0MsUUFBUSxDQUFSQSxHQUFHO3VDQUFJQSxHQUFHLENBQUNKLEVBQUUsS0FBS1UsVUFBVSxHQUFHLENBQUU7OzRCQUNwRSxFQUFFLEVBQUVSLFdBQVcsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDZixJQUFJOzRCQUVoQyxHQUFLLENBQUNrQixPQUFPLHNCQUFPbEIsSUFBSTs0QkFDeEJrQixPQUFPLENBQUNDLE1BQU0sQ0FBQ0osV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUMvQixNQUFNLENBQUNHLE9BQU87d0JBQ2hCLENBQUMsQ0FBQyxDQUFDOzs7Ozs7UUFDTCxDQUFDO3dCQWJLSSxRQUFRLENBQVVULEVBQUU7Ozs7SUFlMUIsRUFBaUY7SUFDN0IsRUFBTjtJQUVWLEVBQTBDO0lBQ0EsRUFBcEI7SUFDWSxFQUE1QjtJQUNZLEVBQW5CO0lBRVcsRUFBMkI7SUFDSyxFQUFOO0lBQ3dCLEVBQS9CO0lBQ2pFLEdBQUssQ0FBNEI3QixJQUF5RCxHQUF6REEscURBQVEsQ0FBQ0QsNERBQWtCLEVBQUUsUUFBUTtlQUFGRCxxREFBTyxDQUFDTSwwREFBWTtRQUFoRnFDLElBQUksR0FBcUJ6QyxJQUF5RCxDQUFsRnlDLElBQUksRUFBRUMsS0FBSyxHQUFjMUMsSUFBeUQsQ0FBNUUwQyxLQUFLLEVBQUVDLE9BQU8sR0FBSzNDLElBQXlELENBQXJFMkMsT0FBTztJQUU1Qm5ELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxJQUFHaUQsSUFBSSxhQUFKQSxJQUFJLGNBQUpBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxJQUFJLENBQUVmLFFBQVEsR0FBRSxNQUFNO1FBQzNCaEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBYyxjQUFDLENBQUM7UUFDNUJNLE9BQU8sQ0FBQ3dCLElBQUksQ0FBQ2YsUUFBUSxDQUFDLENBQUM7SUFDekIsQ0FBQyxFQUFFLENBQUNlO1FBQUFBLElBQUksYUFBSkEsSUFBSSxjQUFKQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFFZixRQUFRO0lBQUEsQ0FBQztJQUVuQixFQUFFLEVBQUVpQixPQUFPLEVBQUUsQ0FBQztRQUNaakMsT0FBTyxDQUFDZ0MsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsSUFBSTtJQUNiLENBQUM7SUFFRCxHQUFLLENBQUNFLFdBQVc7Nk1BQUcsUUFBUSxXQUFJLENBQUM7Z0JBR1g1QixHQUFxQixFQURuQ2tCLE9BQU87Ozs7OzsrQkFBU3BDLHFEQUFPLENBQUMsQ0FBSyxNQUFFLENBQVcsWUFBRSxDQUFDOzRCQUNqRDBDLE1BQU0sRUFBRSxDQUFDO2dDQUFDSyxNQUFNLElBQUU3QixHQUFxQixHQUFyQkEsS0FBSSxDQUFDQSxLQUFJLENBQUM4QixNQUFNLEdBQUcsQ0FBQyxlQUFwQjlCLEdBQXFCLGNBQXJCQSxJQUFJLENBQUpBLENBQXlCLEdBQXpCQSxHQUFxQixDQUFFYSxFQUFFLEtBQUksQ0FBRTs0QkFBQyxDQUFDO3dCQUNyRCxDQUFDOzt3QkFGS0ssT0FBTyxZQTNHakIsQ0E2R007OEJBQ0VBLE9BQU8sQ0FBQ1ksTUFBTSxLQUFLLENBQUM7Ozs7d0JBQ3RCQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Ozt3QkFHcEIsRUFBb0I7d0JBQ3BCOUIsT0FBTyxDQUFDRCxRQUFRLENBQVJBLElBQUk7c0RBQVFBLElBQUksNEJBQUtrQixPQUFPOzBCQUFFLENBQUM7Ozs7OztRQUN6QyxDQUFDO3dCQVhLVSxXQUFXOzs7O0lBYWpCLEVBQW9CO0lBQ3BCLEVBQWdEO0lBQ2hELEVBQXNCO0lBRXRCLE1BQU07O1lBRUQ5QixNQUFNLGdGQUFLakIsaURBQVE7Z0JBQUMrQixNQUFNLEVBQUVELFFBQVE7Ozs7Ozt3RkFDcENxQixDQUFFO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVTswQkFDdEJqQyxLQUFJLENBQUNrQyxHQUFHLENBQUNqQixRQUNoQixDQURnQkEsR0FBRzt1R0FDVHJDLGdEQUFPLG9CQUVGcUMsR0FBRzt3QkFDUEksUUFBUSxFQUFFQSxRQUFRO3dCQUNsQkMsUUFBUSxFQUFFLFFBQVE7bUNBQUZBLFFBQVEsQ0FBQ0wsR0FBRyxDQUFDSixFQUFFOzt3QkFDL0JzQixTQUFTLEVBQUUsUUFBUTttQ0FBRmhDLFlBQVksQ0FBQ2MsR0FBRyxDQUFDSixFQUFFOzt3QkFDcEN1QixTQUFTLEVBQUVsQyxTQUFTLEtBQUtlLEdBQUcsQ0FBQ0osRUFBRTt3QkFDL0J3QixJQUFJLEVBQUV2QyxNQUFNO3dCQUNad0MsSUFBSSxFQUFFN0MsS0FBSyxDQUFDOEMsSUFBSSxDQUFDRCxRQUFRQSxDQUFSQSxJQUFJO21DQUFJQSxJQUFJLENBQUN6QixFQUFFLEtBQUtJLEdBQUcsQ0FBQ25CLE1BQU07O3dCQVAxQ21CLEdBQUcsQ0FBQ0osRUFBRTs7Ozs7Ozs7Ozs7OztBQWF2QixDQUFDO0dBbklLdEIsY0FBYzs7UUFJSEwsdURBQWM7UUFJWFAsa0RBQVM7UUFtQkVNLG9EQUFXO1FBY1hBLG9EQUFXO1FBeUNQRCxpREFBUTs7O0tBbEZyQ08sY0FBYztBQXFJcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3RHcmFwaHFsLmpzPzc3MGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XG5pbXBvcnQgeyBmZXRjaGVyLCBRdWVyeUtleXMgfSBmcm9tICcuLi9xdWVyeUNsaWVudCc7XG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgQ1JFQVRFX01FU1NBR0UsIEdFVF9NRVNTQUdFUywgVVBEQVRFX01FU1NBR0UsIERFTEVURV9NRVNTQUdFIH0gZnJvbSAnLi4vZ3JhcGhxbC9tZXNzYWdlJztcbi8vIGltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tICcuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbCc7XG5cbi8vIHNtc2dzIOuKlCBTU1Ig66GcIOq1rO2YhOuQmOyWtCDrk6TslrTsmKTripQgbWVzc2FnZXMgcHJvcHNcbmNvbnN0IE1zZ0xpc3RHcmFwaHFsID0gKHsgc21zZ3MsIHVzZXJzIH0pID0+IHtcbiAgY29uc29sZS5sb2coJ01zZ0xpc3RHcmFwaHFsIDonLCBzbXNncyk7XG4gIGNvbnNvbGUubG9nKCdNc2dMaXN0R3JhcGhxbCA6JywgdXNlcnMpO1xuXG4gIGNvbnN0IGNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cbiAgLy8gcmV0dXJuIG51bGw7XG4gIC8vIHF1ZXJ5IOulvCDthrXtlbQgdXNlcklkIOulvCDqsIDsp4Dqs6Ag7Ji0XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuICAvLyB3aW5kb3dzIOydmCDqsr3smrAg64yA66y47J6Q66W8IOyekOuPmeycvOuhnCDshozrrLjsnpDroZwg67OA7ZmY7ZWY64qUIOqyveyasOqwgCDsnojslrTshJxcbiAgLy8gdXNlcklkIOulvCB1c2VySWQsIHVzZXJpZCDrkZAg6rCA7KeAIOqyveyasOulvCDrqqjrkZAg64Sj7Ja0IOyjvOyWtOyEnFxuICAvLyB3aW5kb3dz6rCAIOyehOydmOuhnCBJZCA9PiBpZCDroZwg67CU6r6464qUIOqyveyasOuPhCDrjIDsnZFcbiAgY29uc3QgdXNlcklkID0gcXVlcnkudXNlcklkIHx8IHF1ZXJ5LnVzZXJpZCB8fCAnJztcbiAgY29uc29sZS5sb2coeyB1c2VySWQgfSk7XG4gIC8vIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncyk7XG4gIC8vIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8g7JyE7JeQ64qUIENSUyDsnbTsl4jsp4Drp4wgU1NSIOuhnCDrsJTqvrjrqbTshJwgcHJvcHMg66GcIOuwm+ydgCDrqZTsi5zsp4Drk6TsnYQgc2V0U3RhdGUg7ZW0IOykgOuLpFxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShzbXNncyk7XG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyDslYTrnpgg7IS4IOykhOydgCDrrLTtlZwg7Iqk7YGs66Gk7J2EIOychO2VnCDsmqnrj4RcbiAgLy8gY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIC8vIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpO1xuICAvLyBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7XG5cbiAgLy8gbXV0YXRpb24g7J2AIHRleHQg66W8IOyeheugpeuwm+yVhOyEnCBmZXRjaGVyIO2VqOyImOyXkCB0ZXh07JmAIHVzZXJJZCDrpbwgdmFyaWFibGVzIOuhnCDrhKPslrTshJwg64Kg66Ck7KO86rOgLFxuICAvLyDshLHqs7XtlZjrqbQg67CY7ZmY65CY64qUIOuplOyLnOyngOulvCByZWFjdC1xdWVyeSDqsIAg6rSA66as7ZWY64qUIGNhY2hlIOyXkCDsoIDsnqXtlZjrj4TroZ0g7ZWc64ukXG4gIGNvbnN0IHsgbXV0YXRlOiBvbkNyZWF0ZSB9ID0gdXNlTXV0YXRpb24oKHsgdGV4dCB9KSA9PiBmZXRjaGVyKENSRUFURV9NRVNTQUdFLCB7IHRleHQsIHVzZXJJZCB9KSwge1xuICAgIG9uU3VjY2VzczogKHsgY3JlYXRlTWVzc2FnZSB9KSA9PiB7XG4gICAgICAvLyBjbGllbnQg7JeQIOygkeq3vO2VtOyEnCBzZXRRdWVyeURhdGEg652864qUIOuplOyGjOuTnOuhnCDsoIDsnqXsnYQg7ZWY64qU642wLFxuICAgICAgLy8g7L+866as7YKkIOulvCDthrXtlbQg7Ja065akIOuNsOydtO2DgOyXkCDsoJHqt7ztlZjroKTripTsp4Ag7LC+6rOgLFxuICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIG9sZCA9PiB7XG4gICAgICAgIC8vIOyggOyepeqwkuydgCB1c2VRdWVyeSDsnZgg7J2R64u1IO2Yle2DnC4g7KaJLCBkYXRhOiB7IG1lc3NhZ2VzIDogWy4uLl0gfVxuICAgICAgICAvLyDsnbTrn7Ag7ZiV7YOc66GcIOumrO2EtO2VtCDso7zrqbQg65Cc64ukXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWVzc2FnZXM6IFsuLi5jcmVhdGVNZXNzYWdlLCAuLi5vbGQubWVzc2FnZXNdXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KTtcblxuICBjb25zdCB7IG11dGF0ZTogb25VcGRhdGUgfSA9IHVzZU11dGF0aW9uKCh7IHRleHQsIGlkIH0pID0+IGZldGNoZXIoVVBEQVRFX01FU1NBR0UsIHsgdGV4dCwgaWQgfSksIHtcbiAgICBvblN1Y2Nlc3M6ICh7IHVwZGF0ZU1lc3NhZ2UgfSkgPT4ge1xuICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIG9sZCA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gb2xkLm1lc3NhZ2VzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBvbGQ7XG4gICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ub2xkLm1lc3NhZ2VzXTtcbiAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHVwZGF0ZU1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlczogbmV3TXNncyB9O1xuICAgICAgfSlcbiAgICAgIGRvbmVFZGl0KClcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xuXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHBhcmFtczogeyB1c2VySWQgfSB9KTtcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgaWQsIHR5cGVvZiByZWNlaXZlZElkKTsgLy8gc3RyaW5nIG51bWJlclxuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICAvLyByZWNlaXZlZElkICsgJycg66W8IO2VtCDso7zripQg7J207Jyg64qUIOyEnOuyhOyXkOyEnCBpZOulvCDrsJvsnYQg65WMIO2MjOyLseuQmOuptOyEnFxuICAgICAgLy8g66y47J6Q7Je07J20IOyIq+yekOuhnCDrs4Dqsr3rkKAg7IiYIOyeiOyWtOyEnCDrrLjsnpDsl7TroZwg7Ya17J287Iuc7YKk64qUIOqygyBcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gcmVjZWl2ZWRJZCArICcnKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gIH1cblxuICAvLyByZWFjdC1xdWVyeSDsnZggdXNlUXVlcnkg66W8IOyCrOyaqe2VoCDrlYwgcXVlcnkga2V5IOulvCDsgqzsmqntlZjsp4Ag7JWK6rOgLCBvcHRpb25zIOunjOycvOuhnOuPhCDsv7zrpqzrpbwg64Kg66a0IOyImCDsnojsp4Drp4wsXG4gIC8vIGdyYXBoUUwg6rO8IOqwmeydtCDsgqzsmqntlZjroKTrqbQgcXVlcnkga2V5IOulvCDqvK0g6rCZ7J20IOyCrOyaqe2VtOyVvCDtlZzri6RcblxuICAvLyDrkZAg67KI7Ke4IOyduOyekOuKlCDshJzrsoTsmYAg7Ya17Iug7J2EIO2VmOuKlCBGRVRDSEVSIO2VqOyImOyXkCDsm5DtlZjripQg642w7J207YOAIOq1rOyhsOyduCBHRVRfTUVTU0FHRVMg66W8IOyduOyekOuhnCDri7TslYTshJwg64Kg66Ck7JW8IO2VmOuKlOuNsCxcbiAgLy8g7ZmU7IK07ZGcIO2VqOyImOulvCDsnbTsmqntlZjripQg7J207Jyg64qUIOydtOuvuCDtlajsiJjqsIAg7Iuk7ZaJ65CcIOqysOqzvOulvCB1c2VRdWVyeSDsl5Ag64Sj7Ja07KO864qUIOq8tOydtOq4sCDrlYzrrLjsl5BcbiAgLy8g7ZmU7IK07ZGcIO2VqOyImOuhnCDqsJDsi7jshJwg7ZWE7JqU7ZWgIOuVjCjqt7jrlYwg6re465WMKSDtmLjstpzsnbQg65CY64+E66GdIO2VtOyVvCDtlZzri6QuXG4gIC8vIOymiSDtlajsiJjsnZgg6rKw6rO86rCS7J20IOyVhOuLjCwg7ZWo7IiYIOyekOyytOqwgCDsoITri6zrkJjrj4TroZ0g7ZW07JW8IO2VqFxuXG4gIC8vIOyXrOq4sOyEnCBwcm9wcyDroZwg67Cb7J2AIHNtc2dzIOuKlCBTU1LsnYQg7Ya17ZW0IOuCoOyVhOyYqCDsoJXrs7TsnbTqs6AsIO2VmOydtOuTnOugiOydtOyFmCDshLjtjIXsnYQg7Ya17ZW0IOydvOuLqCDsupDsi5zsl5Ag7KCA7J6l65CY7Ja0IOyeiOuLpC5cbiAgLy8g7JWE656YIOy/vOumrOuKlCDslbHsnbQg7Iuk7ZaJ65CY66m0IOyLpO2WieuQmOyWtCDsv7zrpqzrpbwg67Cb7JWE7Jik7KeA66eMLCDsnbTrr7gg7ZWc67KIIFNTUiDsnYQg7Ya17ZW0IOy6kOyLnOyXkCDsoIDsnqXrkJjslrQg7J6I64qUIOuNsOydtO2EsOqwgCDsnojquLAg65WM66y47JeQXG4gIC8vIOuRmOydtCDruYTqtZDtlbTshJwg7LCo7J206rCAIOyXhuuLpOuptCDqtbPsnbQg7IOIIOuNsOydtO2EsOuhnCDrsJTqv5TsuZjquLAg7ZWY7KeAIOyViuqzoCwg6riw7KG07JeQIOyggOyepeuQmOyWtCDsnojripQg642w7J207YSw66W8IOuwmO2ZmO2VmOqyjCDrkJzri6RcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNFcnJvciB9ID0gdXNlUXVlcnkoUXVlcnlLZXlzLk1FU1NBR0VTLCAoKSA9PiBmZXRjaGVyKEdFVF9NRVNTQUdFUykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkYXRhPy5tZXNzYWdlcykgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKCdtc2dzIGNoYW5nZWQnKTtcbiAgICBzZXRNc2dzKGRhdGEubWVzc2FnZXMpO1xuICB9LCBbZGF0YT8ubWVzc2FnZXNdKVxuXG4gIGlmIChpc0Vycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBjb25zdCBtc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycpO1xuICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJywge1xuICAgICAgcGFyYW1zOiB7IGN1cnNvcjogbXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCAnJyB9XG4gICAgfSlcbiAgICBpZiAobmV3TXNncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEhhc05leHQoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBzZXRNc2dzKG5ld01zZ3MpO1xuICAgIHNldE1zZ3MobXNncyA9PiBbLi4ubXNncywgLi4ubmV3TXNnc10pO1xuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSBnZXRNZXNzYWdlcygpO1xuICAvLyB9LCBbaW50ZXJzZWN0aW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz59XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj57XG4gICAgICAgIG1zZ3MubWFwKG1zZyA9PlxuICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICBrZXk9e21zZy5pZH1cbiAgICAgICAgICAgIHsuLi5tc2d9XG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUobXNnLmlkKX1cbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKG1zZy5pZCl9XG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0gbXNnLmlkfVxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxuICAgICAgICAgICAgdXNlcj17dXNlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IG1zZy51c2VySWQpfVxuICAgICAgICAgIC8+KVxuICAgICAgfTwvdWw+XG4gICAgICB7LyogPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPiAqL31cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0R3JhcGhxbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZVJvdXRlciIsIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsImZldGNoZXIiLCJRdWVyeUtleXMiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwidXNlUXVlcnlDbGllbnQiLCJDUkVBVEVfTUVTU0FHRSIsIkdFVF9NRVNTQUdFUyIsIlVQREFURV9NRVNTQUdFIiwiREVMRVRFX01FU1NBR0UiLCJNc2dMaXN0R3JhcGhxbCIsInNtc2dzIiwidXNlcnMiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwicXVlcnkiLCJ1c2VySWQiLCJ1c2VyaWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsInRleHQiLCJvblN1Y2Nlc3MiLCJjcmVhdGVNZXNzYWdlIiwic2V0UXVlcnlEYXRhIiwiTUVTU0FHRVMiLCJvbGQiLCJtZXNzYWdlcyIsIm9uQ3JlYXRlIiwibXV0YXRlIiwiaWQiLCJ1cGRhdGVNZXNzYWdlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvblVwZGF0ZSIsIm9uRGVsZXRlIiwicmVjZWl2ZWRJZCIsInBhcmFtcyIsImRhdGEiLCJlcnJvciIsImlzRXJyb3IiLCJnZXRNZXNzYWdlcyIsImN1cnNvciIsImxlbmd0aCIsInNldEhhc05leHQiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiLCJ1c2VyIiwiZmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgListGraphql.js\n");

/***/ })

});