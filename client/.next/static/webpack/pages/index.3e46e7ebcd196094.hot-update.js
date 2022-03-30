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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// smsgs 는 SSR 로 구현되어 들어오는 messages props\nvar MsgListGraphql = function(param1) {\n    var smsgs = param1.smsgs, users = param1.users;\n    var _this1 = _this;\n    _s();\n    console.log('MsgListGraphql :', smsgs);\n    console.log('MsgListGraphql :', users);\n    var client = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQueryClient)();\n    // return null;\n    // query 를 통해 userId 를 가지고 옴\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    // windows 의 경우 대문자를 자동으로 소문자로 변환하는 경우가 있어서\n    // userId 를 userId, userid 두 가지 경우를 모두 넣어 주어서\n    // windows가 임의로 Id => id 로 바꾸는 경우도 대응\n    var userId = query.userId || query.userid || '';\n    console.log({\n        userId: userId\n    });\n    // const [msgs, setMsgs] = useState(originalMsgs);\n    // const [msgs, setMsgs] = useState([]);\n    // 위에는 CRS 이었지만 SSR 로 바꾸면서 props 로 받은 메시지들을 setState 해 준다\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(smsgs), msgs = ref6[0], setMsgs = ref6[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    // 아래 세 줄은 무한 스크롤을 위한 용도\n    // const [hasNext, setHasNext] = useState(true);\n    var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(fetchMoreEl);\n    // mutation 은 text 를 입력받아서 fetcher 함수에 text와 userId 를 variables 로 넣어서 날려주고,\n    // 성공하면 반환되는 메시지를 react-query 가 관리하는 cache 에 저장하도록 한다\n    var ref2 = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)(function(param) {\n        var text = param.text;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.CREATE_MESSAGE, {\n            text: text,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var createMessage = param.createMessage;\n            // client 에 접근해서 setQueryData 라는 메소드로 저장을 하는데,\n            // 쿼리키 를 통해 어떤 데이타에 접근하려는지 찾고,\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, function(old) {\n                // 저장값은 useQuery 의 응답 형태. 즉, data: { messages : [...] }\n                // 이런 형태로 리턴해 주면 된다\n                return {\n                    messages: _toConsumableArray(createMessage).concat(_toConsumableArray(old.messages))\n                };\n            });\n        }\n    }), onCreate = ref2.mutate;\n    var ref3 = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)(function(param) {\n        var text = param.text, id = param.id;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.UPDATE_MESSAGE, {\n            text: text,\n            id: id,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var updateMessage = param.updateMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, function(old) {\n                var targetIndex = old.messages.findIndex(function(msg) {\n                    return msg.id === updateMessage.id;\n                });\n                if (targetIndex < 0) return old;\n                var newMsgs = _toConsumableArray(old.messages);\n                newMsgs.splice(targetIndex, 1, updateMessage);\n                return {\n                    messages: newMsgs\n                };\n            });\n            doneEdit();\n        }\n    }), onUpdate = ref3.mutate;\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var ref4 = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)(function(id) {\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.UPDATE_MESSAGE, {\n            id: id,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var deletedId = param.deleteMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, function(old) {\n                var targetIndex = old.messages.findIndex(function(msg) {\n                    return msg.id === deletedId;\n                });\n                if (targetIndex < 0) return old;\n                var newMsgs = _toConsumableArray(old.messages);\n                newMsgs.splice(targetIndex, 1);\n                return {\n                    messages: newMsgs\n                };\n            });\n            doneEdit();\n        }\n    }), onDelete = ref4.mutate;\n    // react-query 의 useQuery 를 사용할 때 query key 를 사용하지 않고, options 만으로도 쿼리를 날릴 수 있지만,\n    // graphQL 과 같이 사용하려면 query key 를 꼭 같이 사용해야 한다\n    // 두 번째 인자는 서버와 통신을 하는 FETCHER 함수에 원하는 데이타 구조인 GET_MESSAGES 를 인자로 담아서 날려야 하는데,\n    // 화살표 함수를 이용하는 이유는 이미 함수가 실행된 결과를 useQuery 에 넣어주는 꼴이기 때문에\n    // 화살표 함수로 감싸서 필요할 때(그때 그때) 호출이 되도록 해야 한다.\n    // 즉 함수의 결과값이 아닌, 함수 자체가 전달되도록 해야 함\n    // 여기서 props 로 받은 smsgs 는 SSR을 통해 날아온 정보이고, 하이드레이션 세팅을 통해 일단 캐시에 저장되어 있다.\n    // 아래 쿼리는 앱이 실행되면 실행되어 쿼리를 받아오지만, 이미 한번 SSR 을 통해 캐시에 저장되어 있는 데이터가 있기 때문에\n    // 둘이 비교해서 차이가 없다면 굳이 새 데이터로 바꿔치기 하지 않고, 기존에 저장되어 있는 데이터를 반환하게 된다\n    // const { data, error, isError } = useQuery(QueryKeys.MESSAGES, () => fetcher(GET_MESSAGES));\n    var ref5 = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useInfiniteQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, function(param) {\n        var _pageParam = param.pageParam, pageParam = _pageParam === void 0 ? '' : _pageParam;\n        return(// console.log({ res });\n        // console 로 res 를 찍어보면 아래와 같다\n        // res:\n        // meta: undefined\n        // pageParam: undefined\n        // queryKey: ['MESSAGES']\n        (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.GET_MESSAGES, {\n            cursor: pageParam\n        }));\n    }, {\n        // getNextPageParam 에 들어오는 res 를 콘솔로 찍어보면 messages: [{}, {}] 이 들어온다\n        // 즉, 응답받은 messages 배열이 들어오기 때문에 리턴값은 제일 마지막 메시지의 id 를 리턴해 줌으로써\n        // 해당 id 값을 커서 로 이용할 수 있게 한다\n        // console.log({ res });\n        getNextPageParam: function(param) {\n            var messages = param.messages;\n            var ref;\n            return messages === null || messages === void 0 ? void 0 : (ref = messages[messages.length - 1]) === null || ref === void 0 ? void 0 : ref.id;\n        }\n    }), data = ref5.data, error = ref5.error, isError = ref5.isError, fetchNextPage = ref5.fetchNextPage, hasNextPage = ref5.hasNextPage;\n    // infinity scroll 적용 전\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!(data === null || data === void 0 ? void 0 : data.messages)) return;\n        console.log('msgs changed');\n        setMsgs(data.messages);\n    }, [\n        data === null || data === void 0 ? void 0 : data.messages\n    ]);\n    // infinity scroll 적용 후\n    // 왜냐하면 인피니티 스크롤은 설정한 page 단위별로 데이터가 들어오기 때문\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!(data === null || data === void 0 ? void 0 : data.pages)) return;\n        // data.pages 는 아래와 같은 구조로 들어오기 때문에 page 변화에 따라 msgs 를 업데이트 해 주려면\n        // flatten 작업이 필요하다\n        // const data.pages = [{ messages: [...]}, { messages: [...]}] => [...]\n        var mergedMsgs = data.pages.flatMap(function(page) {\n            return page.messages;\n        });\n        setMsgs(mergedMsgs);\n    }, [\n        data === null || data === void 0 ? void 0 : data.pages\n    ]);\n    if (isError) {\n        console.error(error);\n        return null;\n    }\n    ;\n    // infinity scroll 적용 전\n    // useEffect(() => {\n    //   if (intersecting && hasNext) getMessages();\n    // }, [intersecting]);\n    // infinity scroll 적용 후\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (intersecting && hasNextPage) fetchNextPage();\n    }, [\n        intersecting,\n        hasNextPage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgListGraphql.js\",\n                lineNumber: 150,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map(function(msg) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _objectSpread({}, msg, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(msg.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(msg.id);\n                        },\n                        isEditing: editingId === msg.id,\n                        myId: userId,\n                        user: users.find(function(user) {\n                            return user.id === msg.userId;\n                        })\n                    }), msg.id, false, {\n                        fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgListGraphql.js\",\n                        lineNumber: 153,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgListGraphql.js\",\n                lineNumber: 151,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"/Users/seanlee/Documents/nextjs/inflearn-fullstack-react-toy/client/components/MsgListGraphql.js\",\n                lineNumber: 164,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgListGraphql, \"do/QxDWBaQfMDWtSlYA0koyy7cM=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_6__.useQueryClient,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_6__.useInfiniteQuery\n    ];\n});\n_c = MsgListGraphql;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgListGraphql);\nvar _c;\n$RefreshReg$(_c, \"MsgListGraphql\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUUvQyxNQUFNO3dCQUNaZ0QsSUFBSSxFQUFFckQsS0FBSyxDQUFDc0QsSUFBSSxDQUFDRCxRQUFRQSxDQUFSQSxJQUFJO21DQUFJQSxJQUFJLENBQUMvQixFQUFFLEtBQUtJLEdBQUcsQ0FBQ3JCLE1BQU07O3dCQVAxQ3FCLEdBQUcsQ0FBQ0osRUFBRTs7Ozs7Ozs7Ozs7d0ZBVWhCaUMsQ0FBRztnQkFBQ0MsR0FBRyxFQUFFN0MsV0FBVzs7Ozs7Ozs7QUFHM0IsQ0FBQztHQTVKS2IsY0FBYzs7UUFJSFAsdURBQWM7UUFJWFAsa0RBQVM7UUFlTmEsZ0VBQWlCO1FBSVRQLG9EQUFXO1FBY1hBLG9EQUFXO1FBZVhBLG9EQUFXO1FBMkJxQkUseURBQWdCOzs7S0FuRnpFTSxjQUFjO0FBOEpwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdEdyYXBocWwuanM/NzcwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcbmltcG9ydCB7IGZldGNoZXIsIFF1ZXJ5S2V5cyB9IGZyb20gJy4uL3F1ZXJ5Q2xpZW50JztcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQsIHVzZUluZmluaXRlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBDUkVBVEVfTUVTU0FHRSwgR0VUX01FU1NBR0VTLCBVUERBVEVfTUVTU0FHRSwgREVMRVRFX01FU1NBR0UgfSBmcm9tICcuLi9ncmFwaHFsL21lc3NhZ2UnO1xuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJy4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsJztcblxuLy8gc21zZ3Mg64qUIFNTUiDroZwg6rWs7ZiE65CY7Ja0IOuTpOyWtOyYpOuKlCBtZXNzYWdlcyBwcm9wc1xuY29uc3QgTXNnTGlzdEdyYXBocWwgPSAoeyBzbXNncywgdXNlcnMgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnTXNnTGlzdEdyYXBocWwgOicsIHNtc2dzKTtcbiAgY29uc29sZS5sb2coJ01zZ0xpc3RHcmFwaHFsIDonLCB1c2Vycyk7XG5cbiAgY29uc3QgY2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICAvLyByZXR1cm4gbnVsbDtcbiAgLy8gcXVlcnkg66W8IO2Gte2VtCB1c2VySWQg66W8IOqwgOyngOqzoCDsmLRcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIC8vIHdpbmRvd3Mg7J2YIOqyveyasCDrjIDrrLjsnpDrpbwg7J6Q64+Z7Jy866GcIOyGjOusuOyekOuhnCDrs4DtmZjtlZjripQg6rK97Jqw6rCAIOyeiOyWtOyEnFxuICAvLyB1c2VySWQg66W8IHVzZXJJZCwgdXNlcmlkIOuRkCDqsIDsp4Ag6rK97Jqw66W8IOuqqOuRkCDrhKPslrQg7KO87Ja07IScXG4gIC8vIHdpbmRvd3PqsIAg7J6E7J2Y66GcIElkID0+IGlkIOuhnCDrsJTqvrjripQg6rK97Jqw64+EIOuMgOydkVxuICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8ICcnO1xuICBjb25zb2xlLmxvZyh7IHVzZXJJZCB9KTtcbiAgLy8gY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKTtcbiAgLy8gY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xuICAvLyDsnITsl5DripQgQ1JTIOydtOyXiOyngOunjCBTU1Ig66GcIOuwlOq+uOuptOyEnCBwcm9wcyDroZwg67Cb7J2AIOuplOyLnOyngOuTpOydhCBzZXRTdGF0ZSDtlbQg7KSA64ukXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKHNtc2dzKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIOyVhOuemCDshLgg7KSE7J2AIOustO2VnCDsiqTtgazroaTsnYQg7JyE7ZWcIOyaqeuPhFxuICAvLyBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKVxuXG4gIC8vIG11dGF0aW9uIOydgCB0ZXh0IOulvCDsnoXroKXrsJvslYTshJwgZmV0Y2hlciDtlajsiJjsl5AgdGV4dOyZgCB1c2VySWQg66W8IHZhcmlhYmxlcyDroZwg64Sj7Ja07IScIOuCoOugpOyjvOqzoCxcbiAgLy8g7ISx6rO17ZWY66m0IOuwmO2ZmOuQmOuKlCDrqZTsi5zsp4DrpbwgcmVhY3QtcXVlcnkg6rCAIOq0gOumrO2VmOuKlCBjYWNoZSDsl5Ag7KCA7J6l7ZWY64+E66GdIO2VnOuLpFxuICBjb25zdCB7IG11dGF0ZTogb25DcmVhdGUgfSA9IHVzZU11dGF0aW9uKCh7IHRleHQgfSkgPT4gZmV0Y2hlcihDUkVBVEVfTUVTU0FHRSwgeyB0ZXh0LCB1c2VySWQgfSksIHtcbiAgICBvblN1Y2Nlc3M6ICh7IGNyZWF0ZU1lc3NhZ2UgfSkgPT4ge1xuICAgICAgLy8gY2xpZW50IOyXkCDsoJHqt7ztlbTshJwgc2V0UXVlcnlEYXRhIOudvOuKlCDrqZTshozrk5zroZwg7KCA7J6l7J2EIO2VmOuKlOuNsCxcbiAgICAgIC8vIOy/vOumrO2CpCDrpbwg7Ya17ZW0IOyWtOuWpCDrjbDsnbTtg4Dsl5Ag7KCR6re87ZWY66Ck64qU7KeAIOywvuqzoCxcbiAgICAgIGNsaWVudC5zZXRRdWVyeURhdGEoUXVlcnlLZXlzLk1FU1NBR0VTLCBvbGQgPT4ge1xuICAgICAgICAvLyDsoIDsnqXqsJLsnYAgdXNlUXVlcnkg7J2YIOydkeuLtSDtmJXtg5wuIOymiSwgZGF0YTogeyBtZXNzYWdlcyA6IFsuLi5dIH1cbiAgICAgICAgLy8g7J2065+wIO2Yle2DnOuhnCDrpqzthLTtlbQg7KO866m0IOuQnOuLpFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1lc3NhZ2VzOiBbLi4uY3JlYXRlTWVzc2FnZSwgLi4ub2xkLm1lc3NhZ2VzXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgeyBtdXRhdGU6IG9uVXBkYXRlIH0gPSB1c2VNdXRhdGlvbigoeyB0ZXh0LCBpZCB9KSA9PiBmZXRjaGVyKFVQREFURV9NRVNTQUdFLCB7IHRleHQsIGlkLCB1c2VySWQgfSksIHtcbiAgICBvblN1Y2Nlc3M6ICh7IHVwZGF0ZU1lc3NhZ2UgfSkgPT4ge1xuICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIG9sZCA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gb2xkLm1lc3NhZ2VzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSB1cGRhdGVNZXNzYWdlLmlkKTtcbiAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG9sZDtcbiAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5vbGQubWVzc2FnZXNdO1xuICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgdXBkYXRlTWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2VzOiBuZXdNc2dzIH07XG4gICAgICB9KVxuICAgICAgZG9uZUVkaXQoKVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XG5cbiAgY29uc3QgeyBtdXRhdGU6IG9uRGVsZXRlIH0gPSB1c2VNdXRhdGlvbihpZCA9PiBmZXRjaGVyKFVQREFURV9NRVNTQUdFLCB7IGlkLCB1c2VySWQgfSksIHtcbiAgICBvblN1Y2Nlc3M6ICh7IGRlbGV0ZU1lc3NhZ2U6IGRlbGV0ZWRJZCB9KSA9PiB7XG4gICAgICBjbGllbnQuc2V0UXVlcnlEYXRhKFF1ZXJ5S2V5cy5NRVNTQUdFUywgb2xkID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBvbGQubWVzc2FnZXMuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGRlbGV0ZWRJZCk7XG4gICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBvbGQ7XG4gICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ub2xkLm1lc3NhZ2VzXTtcbiAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlczogbmV3TXNncyB9O1xuICAgICAgfSlcbiAgICAgIGRvbmVFZGl0KClcbiAgICB9XG4gIH0pO1xuXG4gIC8vIHJlYWN0LXF1ZXJ5IOydmCB1c2VRdWVyeSDrpbwg7IKs7Jqp7ZWgIOuVjCBxdWVyeSBrZXkg66W8IOyCrOyaqe2VmOyngCDslYrqs6AsIG9wdGlvbnMg66eM7Jy866Gc64+EIOy/vOumrOulvCDrgqDrprQg7IiYIOyeiOyngOunjCxcbiAgLy8gZ3JhcGhRTCDqs7wg6rCZ7J20IOyCrOyaqe2VmOugpOuptCBxdWVyeSBrZXkg66W8IOq8rSDqsJnsnbQg7IKs7Jqp7ZW07JW8IO2VnOuLpFxuXG4gIC8vIOuRkCDrsojsp7gg7J247J6Q64qUIOyEnOuyhOyZgCDthrXsi6DsnYQg7ZWY64qUIEZFVENIRVIg7ZWo7IiY7JeQIOybkO2VmOuKlCDrjbDsnbTtg4Ag6rWs7KGw7J24IEdFVF9NRVNTQUdFUyDrpbwg7J247J6Q66GcIOuLtOyVhOyEnCDrgqDroKTslbwg7ZWY64qU642wLFxuICAvLyDtmZTsgrTtkZwg7ZWo7IiY66W8IOydtOyaqe2VmOuKlCDsnbTsnKDripQg7J2066+4IO2VqOyImOqwgCDsi6TtlonrkJwg6rKw6rO866W8IHVzZVF1ZXJ5IOyXkCDrhKPslrTso7zripQg6ry07J206riwIOuVjOusuOyXkFxuICAvLyDtmZTsgrTtkZwg7ZWo7IiY66GcIOqwkOyLuOyEnCDtlYTsmpTtlaAg65WMKOq3uOuVjCDqt7jrlYwpIO2YuOy2nOydtCDrkJjrj4TroZ0g7ZW07JW8IO2VnOuLpC5cbiAgLy8g7KaJIO2VqOyImOydmCDqsrDqs7zqsJLsnbQg7JWE64uMLCDtlajsiJgg7J6Q7LK06rCAIOyghOuLrOuQmOuPhOuhnSDtlbTslbwg7ZWoXG5cbiAgLy8g7Jes6riw7IScIHByb3BzIOuhnCDrsJvsnYAgc21zZ3Mg64qUIFNTUuydhCDthrXtlbQg64Kg7JWE7JioIOygleuztOydtOqzoCwg7ZWY7J2065Oc66CI7J207IWYIOyEuO2MheydhCDthrXtlbQg7J2864uoIOy6kOyLnOyXkCDsoIDsnqXrkJjslrQg7J6I64ukLlxuICAvLyDslYTrnpgg7L+866as64qUIOyVseydtCDsi6TtlonrkJjrqbQg7Iuk7ZaJ65CY7Ja0IOy/vOumrOulvCDrsJvslYTsmKTsp4Drp4wsIOydtOuvuCDtlZzrsoggU1NSIOydhCDthrXtlbQg7LqQ7Iuc7JeQIOyggOyepeuQmOyWtCDsnojripQg642w7J207YSw6rCAIOyeiOq4sCDrlYzrrLjsl5BcbiAgLy8g65GY7J20IOu5hOq1kO2VtOyEnCDssKjsnbTqsIAg7JeG64uk66m0IOq1s+ydtCDsg4gg642w7J207YSw66GcIOuwlOq/lOy5mOq4sCDtlZjsp4Ag7JWK6rOgLCDquLDsobTsl5Ag7KCA7J6l65CY7Ja0IOyeiOuKlCDrjbDsnbTthLDrpbwg67CY7ZmY7ZWY6rKMIOuQnOuLpFxuICAvLyBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0Vycm9yIH0gPSB1c2VRdWVyeShRdWVyeUtleXMuTUVTU0FHRVMsICgpID0+IGZldGNoZXIoR0VUX01FU1NBR0VTKSk7XG5cblxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0Vycm9yLCBmZXRjaE5leHRQYWdlLCBoYXNOZXh0UGFnZSB9ID0gdXNlSW5maW5pdGVRdWVyeShcbiAgICBRdWVyeUtleXMuTUVTU0FHRVMsXG4gICAgKHsgcGFnZVBhcmFtID0gJycgfSkgPT5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHsgcmVzIH0pO1xuICAgICAgLy8gY29uc29sZSDroZwgcmVzIOulvCDssI3slrTrs7TrqbQg7JWE656Y7JmAIOqwmeuLpFxuICAgICAgLy8gcmVzOlxuICAgICAgLy8gbWV0YTogdW5kZWZpbmVkXG4gICAgICAvLyBwYWdlUGFyYW06IHVuZGVmaW5lZFxuICAgICAgLy8gcXVlcnlLZXk6IFsnTUVTU0FHRVMnXVxuICAgICAgZmV0Y2hlcihHRVRfTUVTU0FHRVMsIHsgY3Vyc29yOiBwYWdlUGFyYW0gfSksXG4gICAge1xuICAgICAgLy8gZ2V0TmV4dFBhZ2VQYXJhbSDsl5Ag65Ok7Ja07Jik64qUIHJlcyDrpbwg7L2Y7IaU66GcIOywjeyWtOuztOuptCBtZXNzYWdlczogW3t9LCB7fV0g7J20IOuTpOyWtOyYqOuLpFxuICAgICAgLy8g7KaJLCDsnZHri7XrsJvsnYAgbWVzc2FnZXMg67Cw7Je07J20IOuTpOyWtOyYpOq4sCDrlYzrrLjsl5Ag66as7YS06rCS7J2AIOygnOydvCDrp4jsp4Drp4kg66mU7Iuc7KeA7J2YIGlkIOulvCDrpqzthLTtlbQg7KSM7Jy866Gc7I2oXG4gICAgICAvLyDtlbTri7kgaWQg6rCS7J2EIOy7pOyEnCDroZwg7J207Jqp7ZWgIOyImCDsnojqsowg7ZWc64ukXG4gICAgICAvLyBjb25zb2xlLmxvZyh7IHJlcyB9KTtcbiAgICAgIGdldE5leHRQYWdlUGFyYW06ICh7IG1lc3NhZ2VzIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VzPy5bbWVzc2FnZXMubGVuZ3RoIC0gMV0/LmlkXG4gICAgICB9LFxuICAgIH0sXG4gICk7XG5cbiAgLy8gaW5maW5pdHkgc2Nyb2xsIOyggeyaqSDsoIRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRhdGE/Lm1lc3NhZ2VzKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coJ21zZ3MgY2hhbmdlZCcpO1xuICAgIHNldE1zZ3MoZGF0YS5tZXNzYWdlcyk7XG4gIH0sIFtkYXRhPy5tZXNzYWdlc10pO1xuXG4gIC8vIGluZmluaXR5IHNjcm9sbCDsoIHsmqkg7ZuEXG4gIC8vIOyZnOuDkO2VmOuptCDsnbjtlLzri4jti7Ag7Iqk7YGs66Gk7J2AIOyEpOygle2VnCBwYWdlIOuLqOychOuzhOuhnCDrjbDsnbTthLDqsIAg65Ok7Ja07Jik6riwIOuVjOusuFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGF0YT8ucGFnZXMpIHJldHVybjtcbiAgICAvLyBkYXRhLnBhZ2VzIOuKlCDslYTrnpjsmYAg6rCZ7J2AIOq1rOyhsOuhnCDrk6TslrTsmKTquLAg65WM66y47JeQIHBhZ2Ug67OA7ZmU7JeQIOuUsOudvCBtc2dzIOulvCDsl4XrjbDsnbTtirgg7ZW0IOyjvOugpOuptFxuICAgIC8vIGZsYXR0ZW4g7J6R7JeF7J20IO2VhOyalO2VmOuLpFxuICAgIC8vIGNvbnN0IGRhdGEucGFnZXMgPSBbeyBtZXNzYWdlczogWy4uLl19LCB7IG1lc3NhZ2VzOiBbLi4uXX1dID0+IFsuLi5dXG4gICAgY29uc3QgbWVyZ2VkTXNncyA9IGRhdGEucGFnZXMuZmxhdE1hcChwYWdlID0+IHBhZ2UubWVzc2FnZXMpO1xuICAgIHNldE1zZ3MobWVyZ2VkTXNncyk7XG4gIH0sIFtkYXRhPy5wYWdlc10pO1xuXG4gIGlmIChpc0Vycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLy8gaW5maW5pdHkgc2Nyb2xsIOyggeyaqSDsoIRcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoaW50ZXJzZWN0aW5nICYmIGhhc05leHQpIGdldE1lc3NhZ2VzKCk7XG4gIC8vIH0sIFtpbnRlcnNlY3RpbmddKTtcblxuICAvLyBpbmZpbml0eSBzY3JvbGwg7KCB7JqpIO2bhFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnRlcnNlY3RpbmcgJiYgaGFzTmV4dFBhZ2UpIGZldGNoTmV4dFBhZ2UoKTtcbiAgfSwgW2ludGVyc2VjdGluZywgaGFzTmV4dFBhZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dXNlcklkICYmIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPn1cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPntcbiAgICAgICAgbXNncy5tYXAobXNnID0+XG4gICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgIGtleT17bXNnLmlkfVxuICAgICAgICAgICAgey4uLm1zZ31cbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZShtc2cuaWQpfVxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQobXNnLmlkKX1cbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSBtc2cuaWR9XG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XG4gICAgICAgICAgICB1c2VyPXt1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gbXNnLnVzZXJJZCl9XG4gICAgICAgICAgLz4pXG4gICAgICB9PC91bD5cbiAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0R3JhcGhxbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZVJvdXRlciIsIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsImZldGNoZXIiLCJRdWVyeUtleXMiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwidXNlUXVlcnlDbGllbnQiLCJ1c2VJbmZpbml0ZVF1ZXJ5IiwiQ1JFQVRFX01FU1NBR0UiLCJHRVRfTUVTU0FHRVMiLCJVUERBVEVfTUVTU0FHRSIsIkRFTEVURV9NRVNTQUdFIiwidXNlSW5maW5pdGVTY3JvbGwiLCJNc2dMaXN0R3JhcGhxbCIsInNtc2dzIiwidXNlcnMiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwicXVlcnkiLCJ1c2VySWQiLCJ1c2VyaWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwidGV4dCIsIm9uU3VjY2VzcyIsImNyZWF0ZU1lc3NhZ2UiLCJzZXRRdWVyeURhdGEiLCJNRVNTQUdFUyIsIm9sZCIsIm1lc3NhZ2VzIiwib25DcmVhdGUiLCJtdXRhdGUiLCJpZCIsInVwZGF0ZU1lc3NhZ2UiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uVXBkYXRlIiwiZGVsZXRlZElkIiwiZGVsZXRlTWVzc2FnZSIsIm9uRGVsZXRlIiwicGFnZVBhcmFtIiwiY3Vyc29yIiwiZ2V0TmV4dFBhZ2VQYXJhbSIsImxlbmd0aCIsImRhdGEiLCJlcnJvciIsImlzRXJyb3IiLCJmZXRjaE5leHRQYWdlIiwiaGFzTmV4dFBhZ2UiLCJwYWdlcyIsIm1lcmdlZE1zZ3MiLCJmbGF0TWFwIiwicGFnZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsInVzZXIiLCJmaW5kIiwiZGl2IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgListGraphql.js\n");

/***/ })

});