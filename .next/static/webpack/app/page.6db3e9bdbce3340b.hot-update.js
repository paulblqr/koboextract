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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropzone; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropzone.module.scss */ \"(app-pages-browser)/./src/app/components/Dropzone/Dropzone.module.scss\");\n/* harmony import */ var _Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Dropzone(param) {\n    let { error, onFileChange } = param;\n    _s();\n    const dropZoneRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleDragEnter = (event)=>{\n        var _dropZoneRef_current;\n        console.log(\"drag enter\");\n        (_dropZoneRef_current = dropZoneRef.current) === null || _dropZoneRef_current === void 0 ? void 0 : _dropZoneRef_current.classList.add((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    };\n    const handleDragLeave = (event)=>{\n        var _dropZoneRef_current;\n        console.log(\"drag leave\");\n        (_dropZoneRef_current = dropZoneRef.current) === null || _dropZoneRef_current === void 0 ? void 0 : _dropZoneRef_current.classList.remove((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    };\n    const onDrop = (event)=>{\n        var _dropZoneRef_current;\n        (_dropZoneRef_current = dropZoneRef.current) === null || _dropZoneRef_current === void 0 ? void 0 : _dropZoneRef_current.classList.remove((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n        const files = event.dataTransfer.files;\n        console.log(files, \"ondrop\");\n        onFileChange(files);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Wrapper),\n        onDragEnter: handleDragEnter,\n        onDragLeave: handleDragLeave,\n        onDrop: onDrop,\n        ref: dropZoneRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"files\",\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().DragTitle),\n                    children: \"[ Drag your file here ]\"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Error),\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 19\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    id: \"files\",\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().FileInput),\n                    onChange: onFileChange,\n                    accept: \".annot\",\n                    title: \" \"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Dropzone, \"6MJCP7+GLEG8pdArf1cpsVLA5KM=\");\n_c = Dropzone;\nvar _c;\n$RefreshReg$(_c, \"Dropzone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ecm9wem9uZS9Ecm9wem9uZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNEQ7QUFDakI7QUFDNUIsU0FBU0csU0FBUyxLQUF1QjtRQUF2QixFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRSxHQUF2Qjs7SUFDL0IsTUFBTUMsY0FBY0wsNkNBQU1BLENBQWlCO0lBRTNDLE1BQU1NLGtCQUFrQixDQUFDQztZQUV2QkY7UUFEQUcsUUFBUUMsR0FBRyxDQUFDO1NBQ1pKLHVCQUFBQSxZQUFZSyxPQUFPLGNBQW5CTCwyQ0FBQUEscUJBQXFCTSxTQUFTLENBQUNDLEdBQUcsQ0FBQ1gscUVBQVk7SUFDakQ7SUFFQSxNQUFNYSxrQkFBa0IsQ0FBQ1A7WUFFdkJGO1FBREFHLFFBQVFDLEdBQUcsQ0FBQztTQUNaSix1QkFBQUEsWUFBWUssT0FBTyxjQUFuQkwsMkNBQUFBLHFCQUFxQk0sU0FBUyxDQUFDSSxNQUFNLENBQUNkLHFFQUFZO0lBQ3BEO0lBRUEsTUFBTWUsU0FBUyxDQUFDVDtZQUNkRjtTQUFBQSx1QkFBQUEsWUFBWUssT0FBTyxjQUFuQkwsMkNBQUFBLHFCQUFxQk0sU0FBUyxDQUFDSSxNQUFNLENBQUNkLHFFQUFZO1FBQ2xELE1BQU1nQixRQUFRVixNQUFNVyxZQUFZLENBQUNELEtBQUs7UUFDdENULFFBQVFDLEdBQUcsQ0FBQ1EsT0FBTztRQUNuQmIsYUFBYWE7SUFDZjtJQUVBLHFCQUNFLDhEQUFDRTtRQUNDQyxXQUFXbkIsc0VBQWE7UUFDeEJxQixhQUFhaEI7UUFDYmlCLGFBQWFUO1FBQ2JFLFFBQVFBO1FBQ1JRLEtBQUtuQjtrQkFFTCw0RUFBQ2M7WUFBSUMsV0FBV25CLHdFQUFlOzs4QkFDN0IsOERBQUN5QjtvQkFBTUMsU0FBUTtvQkFBUVAsV0FBV25CLHdFQUFlOzhCQUFFOzs7Ozs7Z0JBR2xERSx1QkFBUyw4REFBQ2dCO29CQUFJQyxXQUFXbkIsb0VBQVc7OEJBQUdFOzs7Ozs7OEJBQ3hDLDhEQUFDMkI7b0JBQ0NDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0haLFdBQVduQix3RUFBZTtvQkFDMUJpQyxVQUFVOUI7b0JBQ1YrQixRQUFPO29CQUNQQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQjtHQTVDd0JsQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvRHJvcHpvbmUvRHJvcHpvbmUudHN4P2YzMDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyBEcmFnRXZlbnQsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vRHJvcHpvbmUubW9kdWxlLnNjc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3B6b25lKHsgZXJyb3IsIG9uRmlsZUNoYW5nZSB9KSB7XG4gIGNvbnN0IGRyb3Bab25lUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZXZlbnQ6IERyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRyYWcgZW50ZXJcIik7XG4gICAgZHJvcFpvbmVSZWYuY3VycmVudD8uY2xhc3NMaXN0LmFkZChzdHlsZS5BY3RpdmUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyYWdMZWF2ZSA9IChldmVudDogRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZHJhZyBsZWF2ZVwiKTtcbiAgICBkcm9wWm9uZVJlZi5jdXJyZW50Py5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLkFjdGl2ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25Ecm9wID0gKGV2ZW50OiBEcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgZHJvcFpvbmVSZWYuY3VycmVudD8uY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5BY3RpdmUpO1xuICAgIGNvbnN0IGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgIGNvbnNvbGUubG9nKGZpbGVzLCBcIm9uZHJvcFwiKTtcbiAgICBvbkZpbGVDaGFuZ2UoZmlsZXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZS5XcmFwcGVyfVxuICAgICAgb25EcmFnRW50ZXI9e2hhbmRsZURyYWdFbnRlcn1cbiAgICAgIG9uRHJhZ0xlYXZlPXtoYW5kbGVEcmFnTGVhdmV9XG4gICAgICBvbkRyb3A9e29uRHJvcH1cbiAgICAgIHJlZj17ZHJvcFpvbmVSZWZ9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkNvbnRhaW5lcn0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZXNcIiBjbGFzc05hbWU9e3N0eWxlLkRyYWdUaXRsZX0+XG4gICAgICAgICAgWyBEcmFnIHlvdXIgZmlsZSBoZXJlIF1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5FcnJvcn0+e2Vycm9yfTwvZGl2Pn1cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGlkPVwiZmlsZXNcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuRmlsZUlucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9XG4gICAgICAgICAgYWNjZXB0PVwiLmFubm90XCJcbiAgICAgICAgICB0aXRsZT1cIiBcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJzdHlsZSIsIkRyb3B6b25lIiwiZXJyb3IiLCJvbkZpbGVDaGFuZ2UiLCJkcm9wWm9uZVJlZiIsImhhbmRsZURyYWdFbnRlciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJBY3RpdmUiLCJoYW5kbGVEcmFnTGVhdmUiLCJyZW1vdmUiLCJvbkRyb3AiLCJmaWxlcyIsImRhdGFUcmFuc2ZlciIsImRpdiIsImNsYXNzTmFtZSIsIldyYXBwZXIiLCJvbkRyYWdFbnRlciIsIm9uRHJhZ0xlYXZlIiwicmVmIiwiQ29udGFpbmVyIiwibGFiZWwiLCJodG1sRm9yIiwiRHJhZ1RpdGxlIiwiRXJyb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIkZpbGVJbnB1dCIsIm9uQ2hhbmdlIiwiYWNjZXB0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Dropzone/Dropzone.tsx\n"));

/***/ })

});