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

/***/ "(app-pages-browser)/./src/app/components/Dropzone/Dropzone.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/Dropzone/Dropzone.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropzone; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropzone.module.scss */ \"(app-pages-browser)/./src/app/components/Dropzone/Dropzone.module.scss\");\n/* harmony import */ var _Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Dropzone(param) {\n    let { error, onFileChange } = param;\n    _s();\n    const dropzone = document.querySelector(\"#dropzone\");\n    const handleDragEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        event.preventDefault();\n        event.stopPropagation();\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.add((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    }, [\n        dropzone\n    ]);\n    const handleDragLeave = (event)=>{\n        event.preventDefault();\n        event.stopPropagation();\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.remove((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    };\n    const onDrop = (event)=>{\n        event.preventDefault();\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.remove((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n        const files = event.dataTransfer.files;\n        onFileChange(files);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Wrapper),\n        id: \"dropzone\",\n        onDragEnter: handleDragEnter,\n        onDragLeave: handleDragLeave,\n        onDrop: onDrop,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().DragTitle),\n                    onClick: onFileChange,\n                    children: \"[ Drag your file here ]\"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Error),\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 19\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().FileInput),\n                    onChange: onFileChange,\n                    accept: \".annot\",\n                    title: \" \"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Dropzone, \"Ti9krWCEeGbYfZfo5Z6PNeoWpJg=\");\n_c = Dropzone;\nvar _c;\n$RefreshReg$(_c, \"Dropzone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ecm9wem9uZS9Ecm9wem9uZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDWDtBQUM1QixTQUFTRyxTQUFTLEtBQXVCO1FBQXZCLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFLEdBQXZCOztJQUMvQixNQUFNQyxXQUFXQyxTQUFTQyxhQUFhLENBQUM7SUFFeEMsTUFBTUMsa0JBQWtCUixrREFBV0EsQ0FDakMsQ0FBQ1M7UUFDQ0EsTUFBTUMsY0FBYztRQUNwQkQsTUFBTUUsZUFBZTtRQUVyQk4scUJBQUFBLCtCQUFBQSxTQUFVTyxTQUFTLENBQUNDLEdBQUcsQ0FBQ1oscUVBQVk7SUFDdEMsR0FDQTtRQUFDSTtLQUFTO0lBR1osTUFBTVUsa0JBQWtCLENBQUNOO1FBQ3ZCQSxNQUFNQyxjQUFjO1FBQ3BCRCxNQUFNRSxlQUFlO1FBRXJCTixxQkFBQUEsK0JBQUFBLFNBQVVPLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDZixxRUFBWTtJQUN6QztJQUVBLE1BQU1nQixTQUFTLENBQUNSO1FBQ2RBLE1BQU1DLGNBQWM7UUFFcEJMLHFCQUFBQSwrQkFBQUEsU0FBVU8sU0FBUyxDQUFDSSxNQUFNLENBQUNmLHFFQUFZO1FBQ3ZDLE1BQU1pQixRQUFRVCxNQUFNVSxZQUFZLENBQUNELEtBQUs7UUFDdENkLGFBQWFjO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFDQ0MsV0FBV3BCLHNFQUFhO1FBQ3hCc0IsSUFBRztRQUNIQyxhQUFhaEI7UUFDYmlCLGFBQWFWO1FBQ2JFLFFBQVFBO2tCQUVSLDRFQUFDRztZQUFJQyxXQUFXcEIsd0VBQWU7OzhCQUM3Qiw4REFBQzBCO29CQUFHTixXQUFXcEIsd0VBQWU7b0JBQUU0QixTQUFTekI7OEJBQWM7Ozs7OztnQkFHdERELHVCQUFTLDhEQUFDaUI7b0JBQUlDLFdBQVdwQixvRUFBVzs4QkFBR0U7Ozs7Ozs4QkFDeEMsOERBQUM0QjtvQkFDQ0MsTUFBSztvQkFDTFgsV0FBV3BCLHdFQUFlO29CQUMxQmlDLFVBQVU5QjtvQkFDVitCLFFBQU87b0JBQ1BDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0dBbkR3QmxDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ecm9wem9uZS9Ecm9wem9uZS50c3g/ZjMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IERyYWdFdmVudCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9Ecm9wem9uZS5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmUoeyBlcnJvciwgb25GaWxlQ2hhbmdlIH0pIHtcbiAgY29uc3QgZHJvcHpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3B6b25lXCIpO1xuXG4gIGNvbnN0IGhhbmRsZURyYWdFbnRlciA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBkcm9wem9uZT8uY2xhc3NMaXN0LmFkZChzdHlsZS5BY3RpdmUpO1xuICAgIH0sXG4gICAgW2Ryb3B6b25lXVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZURyYWdMZWF2ZSA9IChldmVudDogRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBkcm9wem9uZT8uY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5BY3RpdmUpO1xuICB9O1xuXG4gIGNvbnN0IG9uRHJvcCA9IChldmVudDogRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkcm9wem9uZT8uY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5BY3RpdmUpO1xuICAgIGNvbnN0IGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgIG9uRmlsZUNoYW5nZShmaWxlcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlLldyYXBwZXJ9XG4gICAgICBpZD1cImRyb3B6b25lXCJcbiAgICAgIG9uRHJhZ0VudGVyPXtoYW5kbGVEcmFnRW50ZXJ9XG4gICAgICBvbkRyYWdMZWF2ZT17aGFuZGxlRHJhZ0xlYXZlfVxuICAgICAgb25Ecm9wPXtvbkRyb3B9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkNvbnRhaW5lcn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlLkRyYWdUaXRsZX0gb25DbGljaz17b25GaWxlQ2hhbmdlfT5cbiAgICAgICAgICBbIERyYWcgeW91ciBmaWxlIGhlcmUgXVxuICAgICAgICA8L2gxPlxuICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkVycm9yfT57ZXJyb3J9PC9kaXY+fVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5GaWxlSW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX1cbiAgICAgICAgICBhY2NlcHQ9XCIuYW5ub3RcIlxuICAgICAgICAgIHRpdGxlPVwiIFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwic3R5bGUiLCJEcm9wem9uZSIsImVycm9yIiwib25GaWxlQ2hhbmdlIiwiZHJvcHpvbmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVEcmFnRW50ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwiQWN0aXZlIiwiaGFuZGxlRHJhZ0xlYXZlIiwicmVtb3ZlIiwib25Ecm9wIiwiZmlsZXMiLCJkYXRhVHJhbnNmZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJXcmFwcGVyIiwiaWQiLCJvbkRyYWdFbnRlciIsIm9uRHJhZ0xlYXZlIiwiQ29udGFpbmVyIiwiaDEiLCJEcmFnVGl0bGUiLCJvbkNsaWNrIiwiRXJyb3IiLCJpbnB1dCIsInR5cGUiLCJGaWxlSW5wdXQiLCJvbkNoYW5nZSIsImFjY2VwdCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Dropzone/Dropzone.tsx\n"));

/***/ })

});