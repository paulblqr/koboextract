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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropzone; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropzone.module.scss */ \"(app-pages-browser)/./src/app/components/Dropzone/Dropzone.module.scss\");\n/* harmony import */ var _Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Dropzone(param) {\n    let { error, onFileChange } = param;\n    const handleDragEnter = (e)=>{\n        console.log(\"dragover\");\n        e.preventDefault();\n        e.stopPropagation();\n        const dropzone = document.querySelector(\"#dropzone\");\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.add((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    };\n    const handleDragLeave = (e)=>{\n        console.log(\"gravleave\");\n        e.preventDefault();\n        e.stopPropagation();\n        const dropzone = document.querySelector(\"#dropzone\");\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.remove((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Wrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Container),\n            id: \"dropzone\",\n            onDragEnter: handleDragEnter,\n            onDragLeave: handleDragLeave,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().DragTitle),\n                    onClick: onFileChange,\n                    children: \"[ Drag your file here ]\"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Error),\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 19\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().FileInput),\n                    onChange: handleFileChange,\n                    accept: \".annot\",\n                    title: \" \"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Dropzone;\nvar _c;\n$RefreshReg$(_c, \"Dropzone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ecm9wem9uZS9Ecm9wem9uZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUM1QixTQUFTRSxTQUFTLEtBQXVCO1FBQXZCLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFLEdBQXZCO0lBQy9CLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1pGLEVBQUVHLGNBQWM7UUFDaEJILEVBQUVJLGVBQWU7UUFDakIsTUFBTUMsV0FBV0MsU0FBU0MsYUFBYSxDQUFDO1FBQ3hDRixxQkFBQUEsK0JBQUFBLFNBQVVHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDZCxxRUFBWTtJQUN0QztJQUVBLE1BQU1nQixrQkFBa0IsQ0FBQ1g7UUFDdkJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaRixFQUFFRyxjQUFjO1FBQ2hCSCxFQUFFSSxlQUFlO1FBQ2pCLE1BQU1DLFdBQVdDLFNBQVNDLGFBQWEsQ0FBQztRQUN4Q0YscUJBQUFBLCtCQUFBQSxTQUFVRyxTQUFTLENBQUNJLE1BQU0sQ0FBQ2pCLHFFQUFZO0lBQ3pDO0lBRUEscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFXbkIsc0VBQWE7a0JBQzNCLDRFQUFDa0I7WUFDQ0MsV0FBV25CLHdFQUFlO1lBQzFCc0IsSUFBRztZQUNIQyxhQUFhbkI7WUFDYm9CLGFBQWFSOzs4QkFFYiw4REFBQ1M7b0JBQUdOLFdBQVduQix3RUFBZTtvQkFBRTJCLFNBQVN4Qjs4QkFBYzs7Ozs7O2dCQUd0REQsdUJBQVMsOERBQUNnQjtvQkFBSUMsV0FBV25CLG9FQUFXOzhCQUFHRTs7Ozs7OzhCQUN4Qyw4REFBQzJCO29CQUNDQyxNQUFLO29CQUNMWCxXQUFXbkIsd0VBQWU7b0JBQzFCZ0MsVUFBVUM7b0JBQ1ZDLFFBQU87b0JBQ1BDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0tBdkN3QmxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ecm9wem9uZS9Ecm9wem9uZS50c3g/ZjMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vRHJvcHpvbmUubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3B6b25lKHsgZXJyb3IsIG9uRmlsZUNoYW5nZSB9KSB7XG4gIGNvbnN0IGhhbmRsZURyYWdFbnRlciA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkcmFnb3ZlclwiKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBkcm9wem9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcHpvbmVcIik7XG4gICAgZHJvcHpvbmU/LmNsYXNzTGlzdC5hZGQoc3R5bGUuQWN0aXZlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEcmFnTGVhdmUgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZ3JhdmxlYXZlXCIpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGRyb3B6b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wem9uZVwiKTtcbiAgICBkcm9wem9uZT8uY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5BY3RpdmUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLldyYXBwZXJ9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLkNvbnRhaW5lcn1cbiAgICAgICAgaWQ9XCJkcm9wem9uZVwiXG4gICAgICAgIG9uRHJhZ0VudGVyPXtoYW5kbGVEcmFnRW50ZXJ9XG4gICAgICAgIG9uRHJhZ0xlYXZlPXtoYW5kbGVEcmFnTGVhdmV9XG4gICAgICA+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlLkRyYWdUaXRsZX0gb25DbGljaz17b25GaWxlQ2hhbmdlfT5cbiAgICAgICAgICBbIERyYWcgeW91ciBmaWxlIGhlcmUgXVxuICAgICAgICA8L2gxPlxuICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkVycm9yfT57ZXJyb3J9PC9kaXY+fVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5GaWxlSW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgICAgYWNjZXB0PVwiLmFubm90XCJcbiAgICAgICAgICB0aXRsZT1cIiBcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZSIsIkRyb3B6b25lIiwiZXJyb3IiLCJvbkZpbGVDaGFuZ2UiLCJoYW5kbGVEcmFnRW50ZXIiLCJlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZHJvcHpvbmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJBY3RpdmUiLCJoYW5kbGVEcmFnTGVhdmUiLCJyZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJXcmFwcGVyIiwiQ29udGFpbmVyIiwiaWQiLCJvbkRyYWdFbnRlciIsIm9uRHJhZ0xlYXZlIiwiaDEiLCJEcmFnVGl0bGUiLCJvbkNsaWNrIiwiRXJyb3IiLCJpbnB1dCIsInR5cGUiLCJGaWxlSW5wdXQiLCJvbkNoYW5nZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJhY2NlcHQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Dropzone/Dropzone.tsx\n"));

/***/ })

});