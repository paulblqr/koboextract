"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Quote/Quote.tsx":
/*!********************************************!*\
  !*** ./src/app/components/Quote/Quote.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quote; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Quote_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quote.module.scss */ \"(app-pages-browser)/./src/app/components/Quote/Quote.module.scss\");\n/* harmony import */ var _Quote_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Quote_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Quote(param) {\n    let { children } = param;\n    _s();\n    const [snackBar, setSnackBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCopyToClipBoard = (e)=>{\n        setSnackBar(true);\n        navigator.clipboard.writeText(e.target.innerText);\n        setTimeout(()=>{\n            setSnackBar(false);\n        }, 2000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Quote_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Item),\n        onClick: handleCopyToClipBoard,\n        children: [\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Quote_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Background)\n            }, void 0, false, {\n                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Quote/Quote.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            snackBar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Quote_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Snackbar),\n                children: \"Copied to clipboard\"\n            }, void 0, false, {\n                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Quote/Quote.tsx\",\n                lineNumber: 18,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Quote/Quote.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Quote, \"ucvTRV0L873450qKfhT+QHmz0IM=\");\n_c = Quote;\nvar _c;\n$RefreshReg$(_c, \"Quote\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9RdW90ZS9RdW90ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTztBQUN6QixTQUFTRSxNQUFNLEtBQTJDO1FBQTNDLEVBQUVDLFFBQVEsRUFBaUMsR0FBM0M7O0lBQzVCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNTSx3QkFBd0IsQ0FBQ0M7UUFDN0JGLFlBQVk7UUFDWkcsVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNILEVBQUVJLE1BQU0sQ0FBQ0MsU0FBUztRQUNoREMsV0FBVztZQUNUUixZQUFZO1FBQ2QsR0FBRztJQUNMO0lBRUEscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVdkLGdFQUFVO1FBQUVnQixTQUFTWDs7WUFDbENIOzBCQUNELDhEQUFDVztnQkFBSUMsV0FBV2Qsc0VBQWdCOzs7Ozs7WUFDL0JHLDBCQUFZLDhEQUFDVTtnQkFBSUMsV0FBV2Qsb0VBQWM7MEJBQUU7Ozs7Ozs7Ozs7OztBQUduRDtHQWxCd0JDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9RdW90ZS9RdW90ZS50c3g/MzhkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL1F1b3RlLm1vZHVsZS5zY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdW90ZSh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtzbmFja0Jhciwgc2V0U25hY2tCYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNvcHlUb0NsaXBCb2FyZCA9IChlKSA9PiB7XG4gICAgc2V0U25hY2tCYXIodHJ1ZSk7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNuYWNrQmFyKGZhbHNlKTtcbiAgICB9LCAyMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5JdGVtfSBvbkNsaWNrPXtoYW5kbGVDb3B5VG9DbGlwQm9hcmR9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkJhY2tncm91bmR9IC8+XG4gICAgICB7c25hY2tCYXIgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlNuYWNrYmFyfT5Db3BpZWQgdG8gY2xpcGJvYXJkPC9kaXY+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGUiLCJRdW90ZSIsImNoaWxkcmVuIiwic25hY2tCYXIiLCJzZXRTbmFja0JhciIsImhhbmRsZUNvcHlUb0NsaXBCb2FyZCIsImUiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiSXRlbSIsIm9uQ2xpY2siLCJCYWNrZ3JvdW5kIiwiU25hY2tiYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Quote/Quote.tsx\n"));

/***/ })

});