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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Quote_Quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Quote/Quote */ \"(app-pages-browser)/./src/app/components/Quote/Quote.tsx\");\n/* harmony import */ var _app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/style/main.module.scss */ \"(app-pages-browser)/./src/app/style/main.module.scss\");\n/* harmony import */ var _app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/helpers/helpers */ \"(app-pages-browser)/./src/app/helpers/helpers.ts\");\n/* harmony import */ var _components_Dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Dropzone/Dropzone */ \"(app-pages-browser)/./src/app/components/Dropzone/Dropzone.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nvar parseString = (__webpack_require__(/*! xml2js */ \"(app-pages-browser)/./node_modules/xml2js/lib/xml2js.js\").parseString);\nconst Main = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleFileChange = async (files)=>{\n        setError(\"\");\n        console.log(files, \"files\");\n        const file = files[0];\n        if ((file === null || file === void 0 ? void 0 : file.type) !== \"\") {\n            setError(\"Only .annot files are available for upload.\");\n            setData(null);\n            return;\n        }\n        const xmlContent = await (0,_app_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.convertAnnotToXml)(file);\n        parseString(xmlContent, function(err, result) {\n            setData(result.annotation.annotationSet[0].annotation);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Wrapper),\n        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Clear),\n                    onClick: ()=>setData(null),\n                    children: \"[ Clear ]\"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Results),\n                    children: data.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Quote_Quote__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            children: item.target[0].fragment[0].text[0]\n                        }, index, false, {\n                            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            onFileChange: handleFileChange,\n            error: error\n        }, void 0, false, {\n            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"EOuQ+TRX/9U3Q8UifYtDEdagiUQ=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFd0M7QUFDSztBQUNJO0FBQ1M7QUFDSjtBQUN0RCxJQUFJTSxjQUFjQywwR0FBNkI7QUFFL0MsTUFBTUMsT0FBTzs7SUFDWCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQVk7SUFDNUMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1ZLG1CQUFtQixPQUFPQztRQUM5QkYsU0FBUztRQUNURyxRQUFRQyxHQUFHLENBQUNGLE9BQU87UUFDbkIsTUFBTUcsT0FBT0gsS0FBSyxDQUFDLEVBQUU7UUFDckIsSUFBSUcsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNQyxJQUFJLE1BQUssSUFBSTtZQUNyQk4sU0FBUztZQUNURixRQUFRO1lBQ1I7UUFDRjtRQUVBLE1BQU1TLGFBQWEsTUFBTWYsdUVBQWlCQSxDQUFDYTtRQUUzQ1gsWUFBWWEsWUFBWSxTQUFVQyxHQUFHLEVBQUVDLE1BQU07WUFDM0NYLFFBQVFXLE9BQU9DLFVBQVUsQ0FBQ0MsYUFBYSxDQUFDLEVBQUUsQ0FBQ0QsVUFBVTtRQUN2RDtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVd0Qiw0RUFBYTtrQkFDMUJNLHFCQUNDLDhEQUFDZTtZQUFJQyxXQUFXdEIsOEVBQWU7OzhCQUM3Qiw4REFBQ3FCO29CQUFJQyxXQUFXdEIsMEVBQVc7b0JBQUUwQixTQUFTLElBQU1uQixRQUFROzhCQUFPOzs7Ozs7OEJBRzNELDhEQUFDYztvQkFBSUMsV0FBV3RCLDRFQUFhOzhCQUMxQk0sS0FBS3NCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQzt3QkFDZixxQkFDRSw4REFBQy9CLCtEQUFLQTtzQ0FBYzhCLEtBQUtFLE1BQU0sQ0FBQyxFQUFFLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUNDLElBQUksQ0FBQyxFQUFFOzJCQUExQ0g7Ozs7O29CQUVoQjs7Ozs7Ozs7Ozs7c0NBSUosOERBQUM1QixxRUFBUUE7WUFBQ2dDLGNBQWN4QjtZQUFrQkYsT0FBT0E7Ozs7Ozs7Ozs7O0FBSXpEO0dBekNNSDtLQUFBQTtBQTJDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1b3RlIGZyb20gXCIuL2NvbXBvbmVudHMvUXVvdGUvUXVvdGVcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiQC9hcHAvc3R5bGUvbWFpbi5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY29udmVydEFubm90VG9YbWwgfSBmcm9tIFwiQC9hcHAvaGVscGVycy9oZWxwZXJzXCI7XG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcIi4vY29tcG9uZW50cy9Ecm9wem9uZS9Ecm9wem9uZVwiO1xudmFyIHBhcnNlU3RyaW5nID0gcmVxdWlyZShcInhtbDJqc1wiKS5wYXJzZVN0cmluZztcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8W10gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gYXN5bmMgKGZpbGVzKSA9PiB7XG4gICAgc2V0RXJyb3IoXCJcIik7XG4gICAgY29uc29sZS5sb2coZmlsZXMsIFwiZmlsZXNcIik7XG4gICAgY29uc3QgZmlsZSA9IGZpbGVzWzBdO1xuICAgIGlmIChmaWxlPy50eXBlICE9PSBcIlwiKSB7XG4gICAgICBzZXRFcnJvcihcIk9ubHkgLmFubm90IGZpbGVzIGFyZSBhdmFpbGFibGUgZm9yIHVwbG9hZC5cIik7XG4gICAgICBzZXREYXRhKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHhtbENvbnRlbnQgPSBhd2FpdCBjb252ZXJ0QW5ub3RUb1htbChmaWxlKTtcblxuICAgIHBhcnNlU3RyaW5nKHhtbENvbnRlbnQsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgc2V0RGF0YShyZXN1bHQuYW5ub3RhdGlvbi5hbm5vdGF0aW9uU2V0WzBdLmFubm90YXRpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLldyYXBwZXJ9PlxuICAgICAge2RhdGEgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Db250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5DbGVhcn0gb25DbGljaz17KCkgPT4gc2V0RGF0YShudWxsKX0+XG4gICAgICAgICAgICBbIENsZWFyIF1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuUmVzdWx0c30+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFF1b3RlIGtleT17aW5kZXh9PntpdGVtLnRhcmdldFswXS5mcmFnbWVudFswXS50ZXh0WzBdfTwvUXVvdGU+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8RHJvcHpvbmUgb25GaWxlQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUXVvdGUiLCJzdHlsZSIsImNvbnZlcnRBbm5vdFRvWG1sIiwiRHJvcHpvbmUiLCJwYXJzZVN0cmluZyIsInJlcXVpcmUiLCJNYWluIiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlRmlsZUNoYW5nZSIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsImZpbGUiLCJ0eXBlIiwieG1sQ29udGVudCIsImVyciIsInJlc3VsdCIsImFubm90YXRpb24iLCJhbm5vdGF0aW9uU2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiV3JhcHBlciIsIkNvbnRhaW5lciIsIkNsZWFyIiwib25DbGljayIsIlJlc3VsdHMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0YXJnZXQiLCJmcmFnbWVudCIsInRleHQiLCJvbkZpbGVDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});