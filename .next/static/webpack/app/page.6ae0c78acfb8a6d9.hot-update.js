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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropzone; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropzone.module.scss */ \"(app-pages-browser)/./src/app/components/Dropzone/Dropzone.module.scss\");\n/* harmony import */ var _Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Dropzone(param) {\n    let { error, onFileChange } = param;\n    _s();\n    const dropzone = document.querySelector(\"#dropzone\");\n    const handleDragEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        event.preventDefault();\n        event.stopPropagation();\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.add((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    }, [\n        dropzone\n    ]);\n    const handleDragLeave = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        event.preventDefault();\n        event.stopPropagation();\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.remove((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    }, [\n        dropzone\n    ]);\n    const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        event.preventDefault();\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.remove((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n        const files = event.dataTransfer.files;\n        onFileChange(files);\n    }, [\n        dropzone\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Wrapper),\n        id: \"dropzone\",\n        onDragEnter: handleDragEnter,\n        onDragLeave: handleDragLeave,\n        onDrop: onDrop,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().DragTitle),\n                    onClick: onFileChange,\n                    children: \"[ Drag your file here ]\"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Error),\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 19\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().FileInput),\n                    onChange: onFileChange,\n                    accept: \".annot\",\n                    title: \" \"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Dropzone, \"aQ5dlY7hkLJyG/dHncBo1HCI7aY=\");\n_c = Dropzone;\nvar _c;\n$RefreshReg$(_c, \"Dropzone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ecm9wem9uZS9Ecm9wem9uZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFc0Q7QUFDWDtBQUM1QixTQUFTRyxTQUFTLEtBQXVCO1FBQXZCLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFLEdBQXZCOztJQUMvQixNQUFNQyxXQUFXQyxTQUFTQyxhQUFhLENBQUM7SUFFeEMsTUFBTUMsa0JBQWtCUixrREFBV0EsQ0FDakMsQ0FBQ1M7UUFDQ0EsTUFBTUMsY0FBYztRQUNwQkQsTUFBTUUsZUFBZTtRQUVyQk4scUJBQUFBLCtCQUFBQSxTQUFVTyxTQUFTLENBQUNDLEdBQUcsQ0FBQ1oscUVBQVk7SUFDdEMsR0FDQTtRQUFDSTtLQUFTO0lBR1osTUFBTVUsa0JBQWtCZixrREFBV0EsQ0FDakMsQ0FBQ1M7UUFDQ0EsTUFBTUMsY0FBYztRQUNwQkQsTUFBTUUsZUFBZTtRQUNyQk4scUJBQUFBLCtCQUFBQSxTQUFVTyxTQUFTLENBQUNJLE1BQU0sQ0FBQ2YscUVBQVk7SUFDekMsR0FDQTtRQUFDSTtLQUFTO0lBR1osTUFBTVksU0FBU2pCLGtEQUFXQSxDQUN4QixDQUFDUztRQUNDQSxNQUFNQyxjQUFjO1FBRXBCTCxxQkFBQUEsK0JBQUFBLFNBQVVPLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDZixxRUFBWTtRQUN2QyxNQUFNaUIsUUFBUVQsTUFBTVUsWUFBWSxDQUFDRCxLQUFLO1FBQ3RDZCxhQUFhYztJQUNmLEdBQ0E7UUFBQ2I7S0FBUztJQUdaLHFCQUNFLDhEQUFDZTtRQUNDQyxXQUFXcEIsc0VBQWE7UUFDeEJzQixJQUFHO1FBQ0hDLGFBQWFoQjtRQUNiaUIsYUFBYVY7UUFDYkUsUUFBUUE7a0JBRVIsNEVBQUNHO1lBQUlDLFdBQVdwQix3RUFBZTs7OEJBQzdCLDhEQUFDMEI7b0JBQUdOLFdBQVdwQix3RUFBZTtvQkFBRTRCLFNBQVN6Qjs4QkFBYzs7Ozs7O2dCQUd0REQsdUJBQVMsOERBQUNpQjtvQkFBSUMsV0FBV3BCLG9FQUFXOzhCQUFHRTs7Ozs7OzhCQUN4Qyw4REFBQzRCO29CQUNDQyxNQUFLO29CQUNMWCxXQUFXcEIsd0VBQWU7b0JBQzFCaUMsVUFBVTlCO29CQUNWK0IsUUFBTztvQkFDUEMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7R0F4RHdCbEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0Ryb3B6b25lL0Ryb3B6b25lLnRzeD9mMzAyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgRHJhZ0V2ZW50LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL0Ryb3B6b25lLm1vZHVsZS5zY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wem9uZSh7IGVycm9yLCBvbkZpbGVDaGFuZ2UgfSkge1xuICBjb25zdCBkcm9wem9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcHpvbmVcIik7XG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VudGVyID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBEcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGRyb3B6b25lPy5jbGFzc0xpc3QuYWRkKHN0eWxlLkFjdGl2ZSk7XG4gICAgfSxcbiAgICBbZHJvcHpvbmVdXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZ0xlYXZlID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBEcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBkcm9wem9uZT8uY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5BY3RpdmUpO1xuICAgIH0sXG4gICAgW2Ryb3B6b25lXVxuICApO1xuXG4gIGNvbnN0IG9uRHJvcCA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgZHJvcHpvbmU/LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUuQWN0aXZlKTtcbiAgICAgIGNvbnN0IGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgb25GaWxlQ2hhbmdlKGZpbGVzKTtcbiAgICB9LFxuICAgIFtkcm9wem9uZV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuV3JhcHBlcn1cbiAgICAgIGlkPVwiZHJvcHpvbmVcIlxuICAgICAgb25EcmFnRW50ZXI9e2hhbmRsZURyYWdFbnRlcn1cbiAgICAgIG9uRHJhZ0xlYXZlPXtoYW5kbGVEcmFnTGVhdmV9XG4gICAgICBvbkRyb3A9e29uRHJvcH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ29udGFpbmVyfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUuRHJhZ1RpdGxlfSBvbkNsaWNrPXtvbkZpbGVDaGFuZ2V9PlxuICAgICAgICAgIFsgRHJhZyB5b3VyIGZpbGUgaGVyZSBdXG4gICAgICAgIDwvaDE+XG4gICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuRXJyb3J9PntlcnJvcn08L2Rpdj59XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLkZpbGVJbnB1dH1cbiAgICAgICAgICBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfVxuICAgICAgICAgIGFjY2VwdD1cIi5hbm5vdFwiXG4gICAgICAgICAgdGl0bGU9XCIgXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJzdHlsZSIsIkRyb3B6b25lIiwiZXJyb3IiLCJvbkZpbGVDaGFuZ2UiLCJkcm9wem9uZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhhbmRsZURyYWdFbnRlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJBY3RpdmUiLCJoYW5kbGVEcmFnTGVhdmUiLCJyZW1vdmUiLCJvbkRyb3AiLCJmaWxlcyIsImRhdGFUcmFuc2ZlciIsImRpdiIsImNsYXNzTmFtZSIsIldyYXBwZXIiLCJpZCIsIm9uRHJhZ0VudGVyIiwib25EcmFnTGVhdmUiLCJDb250YWluZXIiLCJoMSIsIkRyYWdUaXRsZSIsIm9uQ2xpY2siLCJFcnJvciIsImlucHV0IiwidHlwZSIsIkZpbGVJbnB1dCIsIm9uQ2hhbmdlIiwiYWNjZXB0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Dropzone/Dropzone.tsx\n"));

/***/ })

});