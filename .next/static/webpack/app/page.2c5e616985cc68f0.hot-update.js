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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropzone; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropzone.module.scss */ \"(app-pages-browser)/./src/app/components/Dropzone/Dropzone.module.scss\");\n/* harmony import */ var _Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction Dropzone(param) {\n    let { error, onFileChange } = param;\n    const handleDragEnter = (event)=>{\n        event.preventDefault();\n        event.stopPropagation();\n        const dropzone = document.querySelector(\"#dropzone\");\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.add((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    };\n    const handleDragLeave = (event)=>{\n        event.preventDefault();\n        event.stopPropagation();\n        const dropzone = document.querySelector(\"#dropzone\");\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.remove((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    };\n    const onDrop = (event)=>{\n        event.preventDefault();\n        const dropzone = document.querySelector(\"#dropzone\");\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.remove((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n        const files = event.dataTransfer.files;\n        onFileChange(files);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Wrapper),\n        id: \"dropzone\",\n        onDragEnter: handleDragEnter,\n        onDragLeave: handleDragLeave,\n        onDrop: onDrop,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().DragTitle),\n                    onClick: onFileChange,\n                    children: \"[ Drag your file here ]\"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Error),\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 19\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().FileInput),\n                    onChange: onFileChange,\n                    accept: \".annot\",\n                    title: \" \"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_c = Dropzone;\nvar _c;\n$RefreshReg$(_c, \"Dropzone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ecm9wem9uZS9Ecm9wem9uZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV5QztBQUNFO0FBQzVCLFNBQVNFLFNBQVMsS0FBdUI7UUFBdkIsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUUsR0FBdkI7SUFDL0IsTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3ZCQSxNQUFNQyxjQUFjO1FBQ3BCRCxNQUFNRSxlQUFlO1FBQ3JCLE1BQU1DLFdBQVdDLFNBQVNDLGFBQWEsQ0FBQztRQUN4Q0YscUJBQUFBLCtCQUFBQSxTQUFVRyxTQUFTLENBQUNDLEdBQUcsQ0FBQ1oscUVBQVk7SUFDdEM7SUFFQSxNQUFNYyxrQkFBa0IsQ0FBQ1Q7UUFDdkJBLE1BQU1DLGNBQWM7UUFDcEJELE1BQU1FLGVBQWU7UUFDckIsTUFBTUMsV0FBV0MsU0FBU0MsYUFBYSxDQUFDO1FBQ3hDRixxQkFBQUEsK0JBQUFBLFNBQVVHLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDZixxRUFBWTtJQUN6QztJQUVBLE1BQU1nQixTQUFTLENBQUNYO1FBQ2RBLE1BQU1DLGNBQWM7UUFDcEIsTUFBTUUsV0FBV0MsU0FBU0MsYUFBYSxDQUFDO1FBQ3hDRixxQkFBQUEsK0JBQUFBLFNBQVVHLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDZixxRUFBWTtRQUN2QyxNQUFNaUIsUUFBUVosTUFBTWEsWUFBWSxDQUFDRCxLQUFLO1FBQ3RDZCxhQUFhYztJQUNmO0lBRUEscUJBQ0UsOERBQUNFO1FBQ0NDLFdBQVdwQixzRUFBYTtRQUN4QnNCLElBQUc7UUFDSEMsYUFBYW5CO1FBQ2JvQixhQUFhVjtRQUNiRSxRQUFRQTtrQkFFUiw0RUFBQ0c7WUFBSUMsV0FBV3BCLHdFQUFlOzs4QkFDN0IsOERBQUMwQjtvQkFBR04sV0FBV3BCLHdFQUFlO29CQUFFNEIsU0FBU3pCOzhCQUFjOzs7Ozs7Z0JBR3RERCx1QkFBUyw4REFBQ2lCO29CQUFJQyxXQUFXcEIsb0VBQVc7OEJBQUdFOzs7Ozs7OEJBQ3hDLDhEQUFDNEI7b0JBQ0NDLE1BQUs7b0JBQ0xYLFdBQVdwQix3RUFBZTtvQkFDMUJpQyxVQUFVOUI7b0JBQ1YrQixRQUFPO29CQUNQQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQjtLQTlDd0JsQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvRHJvcHpvbmUvRHJvcHpvbmUudHN4P2YzMDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyBEcmFnRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9Ecm9wem9uZS5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmUoeyBlcnJvciwgb25GaWxlQ2hhbmdlIH0pIHtcbiAgY29uc3QgaGFuZGxlRHJhZ0VudGVyID0gKGV2ZW50OiBEcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBkcm9wem9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcHpvbmVcIik7XG4gICAgZHJvcHpvbmU/LmNsYXNzTGlzdC5hZGQoc3R5bGUuQWN0aXZlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEcmFnTGVhdmUgPSAoZXZlbnQ6IERyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGRyb3B6b25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wem9uZVwiKTtcbiAgICBkcm9wem9uZT8uY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5BY3RpdmUpO1xuICB9O1xuXG4gIGNvbnN0IG9uRHJvcCA9IChldmVudDogRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZHJvcHpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3B6b25lXCIpO1xuICAgIGRyb3B6b25lPy5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLkFjdGl2ZSk7XG4gICAgY29uc3QgZmlsZXMgPSBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgb25GaWxlQ2hhbmdlKGZpbGVzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuV3JhcHBlcn1cbiAgICAgIGlkPVwiZHJvcHpvbmVcIlxuICAgICAgb25EcmFnRW50ZXI9e2hhbmRsZURyYWdFbnRlcn1cbiAgICAgIG9uRHJhZ0xlYXZlPXtoYW5kbGVEcmFnTGVhdmV9XG4gICAgICBvbkRyb3A9e29uRHJvcH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ29udGFpbmVyfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUuRHJhZ1RpdGxlfSBvbkNsaWNrPXtvbkZpbGVDaGFuZ2V9PlxuICAgICAgICAgIFsgRHJhZyB5b3VyIGZpbGUgaGVyZSBdXG4gICAgICAgIDwvaDE+XG4gICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuRXJyb3J9PntlcnJvcn08L2Rpdj59XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLkZpbGVJbnB1dH1cbiAgICAgICAgICBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfVxuICAgICAgICAgIGFjY2VwdD1cIi5hbm5vdFwiXG4gICAgICAgICAgdGl0bGU9XCIgXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGUiLCJEcm9wem9uZSIsImVycm9yIiwib25GaWxlQ2hhbmdlIiwiaGFuZGxlRHJhZ0VudGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImRyb3B6b25lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiQWN0aXZlIiwiaGFuZGxlRHJhZ0xlYXZlIiwicmVtb3ZlIiwib25Ecm9wIiwiZmlsZXMiLCJkYXRhVHJhbnNmZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJXcmFwcGVyIiwiaWQiLCJvbkRyYWdFbnRlciIsIm9uRHJhZ0xlYXZlIiwiQ29udGFpbmVyIiwiaDEiLCJEcmFnVGl0bGUiLCJvbkNsaWNrIiwiRXJyb3IiLCJpbnB1dCIsInR5cGUiLCJGaWxlSW5wdXQiLCJvbkNoYW5nZSIsImFjY2VwdCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Dropzone/Dropzone.tsx\n"));

/***/ })

});