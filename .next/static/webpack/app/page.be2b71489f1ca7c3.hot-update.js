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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropzone; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropzone.module.scss */ \"(app-pages-browser)/./src/app/components/Dropzone/Dropzone.module.scss\");\n/* harmony import */ var _Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Dropzone(param) {\n    let { error, onFileChange } = param;\n    _s();\n    const dropZoneRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    console.log(\"render\");\n    const handleDragEnter = (event)=>{\n        var _dropZoneRef_current;\n        console.log(\"drag enter\");\n        event.preventDefault();\n        event.stopPropagation();\n        (_dropZoneRef_current = dropZoneRef.current) === null || _dropZoneRef_current === void 0 ? void 0 : _dropZoneRef_current.classList.add((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    };\n    const handleDragLeave = (event)=>{\n        var _dropZoneRef_current;\n        console.log(\"drag leave\");\n        event.preventDefault();\n        event.stopPropagation();\n        (_dropZoneRef_current = dropZoneRef.current) === null || _dropZoneRef_current === void 0 ? void 0 : _dropZoneRef_current.classList.remove((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    };\n    const onDrop = (event)=>{\n        var _dropZoneRef_current;\n        event.preventDefault();\n        event.stopPropagation();\n        (_dropZoneRef_current = dropZoneRef.current) === null || _dropZoneRef_current === void 0 ? void 0 : _dropZoneRef_current.classList.remove((_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n        const files = event.dataTransfer.files;\n        console.log(files, \"ondrop\");\n        onFileChange(files);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Wrapper),\n        onDragEnter: handleDragEnter,\n        onDragLeave: handleDragLeave,\n        onDrop: onDrop,\n        ref: dropZoneRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"files\",\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().DragTitle),\n                    children: \"[ Drag your file here ]\"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Error),\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 19\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    id: \"files\",\n                    className: (_Dropzone_module_scss__WEBPACK_IMPORTED_MODULE_2___default().FileInput),\n                    onChange: onFileChange,\n                    accept: \".annot\",\n                    title: \" \"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/components/Dropzone/Dropzone.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Dropzone, \"6MJCP7+GLEG8pdArf1cpsVLA5KM=\");\n_c = Dropzone;\nvar _c;\n$RefreshReg$(_c, \"Dropzone\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ecm9wem9uZS9Ecm9wem9uZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNEQ7QUFDakI7QUFDNUIsU0FBU0csU0FBUyxLQUF1QjtRQUF2QixFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRSxHQUF2Qjs7SUFDL0IsTUFBTUMsY0FBY0wsNkNBQU1BLENBQWlCO0lBQzNDTSxRQUFRQyxHQUFHLENBQUM7SUFFWixNQUFNQyxrQkFBa0IsQ0FBQ0M7WUFJdkJKO1FBSEFDLFFBQVFDLEdBQUcsQ0FBQztRQUNaRSxNQUFNQyxjQUFjO1FBQ3BCRCxNQUFNRSxlQUFlO1NBQ3JCTix1QkFBQUEsWUFBWU8sT0FBTyxjQUFuQlAsMkNBQUFBLHFCQUFxQlEsU0FBUyxDQUFDQyxHQUFHLENBQUNiLHFFQUFZO0lBQ2pEO0lBRUEsTUFBTWUsa0JBQWtCLENBQUNQO1lBSXZCSjtRQUhBQyxRQUFRQyxHQUFHLENBQUM7UUFDWkUsTUFBTUMsY0FBYztRQUNwQkQsTUFBTUUsZUFBZTtTQUNyQk4sdUJBQUFBLFlBQVlPLE9BQU8sY0FBbkJQLDJDQUFBQSxxQkFBcUJRLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDaEIscUVBQVk7SUFDcEQ7SUFFQSxNQUFNaUIsU0FBUyxDQUFDVDtZQUdkSjtRQUZBSSxNQUFNQyxjQUFjO1FBQ3BCRCxNQUFNRSxlQUFlO1NBQ3JCTix1QkFBQUEsWUFBWU8sT0FBTyxjQUFuQlAsMkNBQUFBLHFCQUFxQlEsU0FBUyxDQUFDSSxNQUFNLENBQUNoQixxRUFBWTtRQUNsRCxNQUFNa0IsUUFBUVYsTUFBTVcsWUFBWSxDQUFDRCxLQUFLO1FBQ3RDYixRQUFRQyxHQUFHLENBQUNZLE9BQU87UUFDbkJmLGFBQWFlO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFDQ0MsV0FBV3JCLHNFQUFhO1FBQ3hCdUIsYUFBYWhCO1FBQ2JpQixhQUFhVDtRQUNiRSxRQUFRQTtRQUNSUSxLQUFLckI7a0JBRUwsNEVBQUNnQjtZQUFJQyxXQUFXckIsd0VBQWU7OzhCQUM3Qiw4REFBQzJCO29CQUFNQyxTQUFRO29CQUFRUCxXQUFXckIsd0VBQWU7OEJBQUU7Ozs7OztnQkFHbERFLHVCQUFTLDhEQUFDa0I7b0JBQUlDLFdBQVdyQixvRUFBVzs4QkFBR0U7Ozs7Ozs4QkFDeEMsOERBQUM2QjtvQkFDQ0MsTUFBSztvQkFDTEMsSUFBRztvQkFDSFosV0FBV3JCLHdFQUFlO29CQUMxQm1DLFVBQVVoQztvQkFDVmlDLFFBQU87b0JBQ1BDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0dBbkR3QnBDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ecm9wem9uZS9Ecm9wem9uZS50c3g/ZjMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IERyYWdFdmVudCwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9Ecm9wem9uZS5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmUoeyBlcnJvciwgb25GaWxlQ2hhbmdlIH0pIHtcbiAgY29uc3QgZHJvcFpvbmVSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zb2xlLmxvZyhcInJlbmRlclwiKTtcblxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZXZlbnQ6IERyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRyYWcgZW50ZXJcIik7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBkcm9wWm9uZVJlZi5jdXJyZW50Py5jbGFzc0xpc3QuYWRkKHN0eWxlLkFjdGl2ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRHJhZ0xlYXZlID0gKGV2ZW50OiBEcmFnRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkcmFnIGxlYXZlXCIpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZHJvcFpvbmVSZWYuY3VycmVudD8uY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5BY3RpdmUpO1xuICB9O1xuXG4gIGNvbnN0IG9uRHJvcCA9IChldmVudDogRHJhZ0V2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZHJvcFpvbmVSZWYuY3VycmVudD8uY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5BY3RpdmUpO1xuICAgIGNvbnN0IGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgIGNvbnNvbGUubG9nKGZpbGVzLCBcIm9uZHJvcFwiKTtcbiAgICBvbkZpbGVDaGFuZ2UoZmlsZXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZS5XcmFwcGVyfVxuICAgICAgb25EcmFnRW50ZXI9e2hhbmRsZURyYWdFbnRlcn1cbiAgICAgIG9uRHJhZ0xlYXZlPXtoYW5kbGVEcmFnTGVhdmV9XG4gICAgICBvbkRyb3A9e29uRHJvcH1cbiAgICAgIHJlZj17ZHJvcFpvbmVSZWZ9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkNvbnRhaW5lcn0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZXNcIiBjbGFzc05hbWU9e3N0eWxlLkRyYWdUaXRsZX0+XG4gICAgICAgICAgWyBEcmFnIHlvdXIgZmlsZSBoZXJlIF1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5FcnJvcn0+e2Vycm9yfTwvZGl2Pn1cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGlkPVwiZmlsZXNcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuRmlsZUlucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9XG4gICAgICAgICAgYWNjZXB0PVwiLmFubm90XCJcbiAgICAgICAgICB0aXRsZT1cIiBcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJzdHlsZSIsIkRyb3B6b25lIiwiZXJyb3IiLCJvbkZpbGVDaGFuZ2UiLCJkcm9wWm9uZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEcmFnRW50ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsIkFjdGl2ZSIsImhhbmRsZURyYWdMZWF2ZSIsInJlbW92ZSIsIm9uRHJvcCIsImZpbGVzIiwiZGF0YVRyYW5zZmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiV3JhcHBlciIsIm9uRHJhZ0VudGVyIiwib25EcmFnTGVhdmUiLCJyZWYiLCJDb250YWluZXIiLCJsYWJlbCIsImh0bWxGb3IiLCJEcmFnVGl0bGUiLCJFcnJvciIsImlucHV0IiwidHlwZSIsImlkIiwiRmlsZUlucHV0Iiwib25DaGFuZ2UiLCJhY2NlcHQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Dropzone/Dropzone.tsx\n"));

/***/ })

});