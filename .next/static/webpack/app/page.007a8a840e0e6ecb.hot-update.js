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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/style/main.module.scss */ \"(app-pages-browser)/./src/app/style/main.module.scss\");\n/* harmony import */ var _app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/helpers/helpers */ \"(app-pages-browser)/./src/app/helpers/helpers.ts\");\n/* harmony import */ var _components_Dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Dropzone/Dropzone */ \"(app-pages-browser)/./src/app/components/Dropzone/Dropzone.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nvar parseString = (__webpack_require__(/*! xml2js */ \"(app-pages-browser)/./node_modules/xml2js/lib/xml2js.js\").parseString);\nconst Main = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleFileChange = async (e)=>{\n        const dropzone = document.querySelector(\"#dropzone\");\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.remove((_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n        e.preventDefault();\n        setError(\"\");\n        const file = e.target.files[0];\n        if (file.type !== \"\") {\n            setError(\"Only .epub.annot files are available for upload.\");\n            setData(null);\n            return;\n        }\n        const xmlContent = await (0,_app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.convertAnnotToXml)(file);\n        parseString(xmlContent, function(err, result) {\n            setData(result.annotation.annotationSet[0].annotation);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Wrapper),\n        children: !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Container)\n        }, void 0, false, {\n            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            onFileChange: handleFileChange,\n            error: error\n        }, void 0, false, {\n            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n            lineNumber: 39,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"EOuQ+TRX/9U3Q8UifYtDEdagiUQ=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV3QztBQUVTO0FBQ1M7QUFDSjtBQUN0RCxJQUFJSyxjQUFjQywwR0FBNkI7QUFFL0MsTUFBTUMsT0FBTzs7SUFDWCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1XLG1CQUFtQixPQUFPQztRQUM5QixNQUFNQyxXQUFXQyxTQUFTQyxhQUFhLENBQUM7UUFDeENGLHFCQUFBQSwrQkFBQUEsU0FBVUcsU0FBUyxDQUFDQyxNQUFNLENBQUNoQiwyRUFBWTtRQUN2Q1csRUFBRU8sY0FBYztRQUNoQlQsU0FBUztRQUNULE1BQU1VLE9BQU9SLEVBQUVTLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFFOUIsSUFBSUYsS0FBS0csSUFBSSxLQUFLLElBQUk7WUFDcEJiLFNBQVM7WUFDVEYsUUFBUTtZQUNSO1FBQ0Y7UUFFQSxNQUFNZ0IsYUFBYSxNQUFNdEIsdUVBQWlCQSxDQUFDa0I7UUFFM0NoQixZQUFZb0IsWUFBWSxTQUFVQyxHQUFHLEVBQUVDLE1BQU07WUFDM0NsQixRQUFRa0IsT0FBT0MsVUFBVSxDQUFDQyxhQUFhLENBQUMsRUFBRSxDQUFDRCxVQUFVO1FBQ3ZEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVzdCLDRFQUFhO2tCQUMxQixDQUFDTSxxQkFDQSw4REFBQ3NCO1lBQUlDLFdBQVc3Qiw4RUFBZTs7Ozs7c0NBRS9CLDhEQUFDRSxxRUFBUUE7WUFBQzhCLGNBQWN0QjtZQUFrQkYsT0FBT0E7Ozs7Ozs7Ozs7O0FBSXpEO0dBakNNSDtLQUFBQTtBQW1DTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1b3RlIGZyb20gXCIuL2NvbXBvbmVudHMvUXVvdGUvUXVvdGVcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiQC9hcHAvc3R5bGUvbWFpbi5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY29udmVydEFubm90VG9YbWwgfSBmcm9tIFwiQC9hcHAvaGVscGVycy9oZWxwZXJzXCI7XG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcIi4vY29tcG9uZW50cy9Ecm9wem9uZS9Ecm9wem9uZVwiO1xudmFyIHBhcnNlU3RyaW5nID0gcmVxdWlyZShcInhtbDJqc1wiKS5wYXJzZVN0cmluZztcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgZHJvcHpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3B6b25lXCIpO1xuICAgIGRyb3B6b25lPy5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLkFjdGl2ZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldEVycm9yKFwiXCIpO1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuICAgIGlmIChmaWxlLnR5cGUgIT09IFwiXCIpIHtcbiAgICAgIHNldEVycm9yKFwiT25seSAuZXB1Yi5hbm5vdCBmaWxlcyBhcmUgYXZhaWxhYmxlIGZvciB1cGxvYWQuXCIpO1xuICAgICAgc2V0RGF0YShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB4bWxDb250ZW50ID0gYXdhaXQgY29udmVydEFubm90VG9YbWwoZmlsZSk7XG5cbiAgICBwYXJzZVN0cmluZyh4bWxDb250ZW50LCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgIHNldERhdGEocmVzdWx0LmFubm90YXRpb24uYW5ub3RhdGlvblNldFswXS5hbm5vdGF0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5XcmFwcGVyfT5cbiAgICAgIHshZGF0YSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkNvbnRhaW5lcn0+PC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8RHJvcHpvbmUgb25GaWxlQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGUiLCJjb252ZXJ0QW5ub3RUb1htbCIsIkRyb3B6b25lIiwicGFyc2VTdHJpbmciLCJyZXF1aXJlIiwiTWFpbiIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUZpbGVDaGFuZ2UiLCJlIiwiZHJvcHpvbmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJBY3RpdmUiLCJwcmV2ZW50RGVmYXVsdCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInR5cGUiLCJ4bWxDb250ZW50IiwiZXJyIiwicmVzdWx0IiwiYW5ub3RhdGlvbiIsImFubm90YXRpb25TZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJXcmFwcGVyIiwiQ29udGFpbmVyIiwib25GaWxlQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});