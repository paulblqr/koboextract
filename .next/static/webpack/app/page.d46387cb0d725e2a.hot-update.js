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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/style/main.module.css */ \"(app-pages-browser)/./src/app/style/main.module.css\");\n/* harmony import */ var _app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/helpers/helpers */ \"(app-pages-browser)/./src/app/helpers/helpers.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nvar parseString = (__webpack_require__(/*! xml2js */ \"(app-pages-browser)/./node_modules/xml2js/lib/xml2js.js\").parseString);\nconst Main = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFileChange = async (e)=>{\n        const file = e.target.files[0];\n        if (!file) {\n            alert(\"Veuillez s\\xe9lectionner un fichier .epub.annot\");\n            return;\n        }\n        const xmlContent = await (0,_app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.convertAnnotToXml)(file);\n        parseString(xmlContent, function(err, result) {\n            setData(result.annotation.annotationSet[0].annotation);\n        });\n    };\n    const handleClick = (e)=>{\n        navigator.clipboard.writeText(e.target.innerText);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().Container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"files\",\n                className: (_app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().DropContainer),\n                id: \"dropcontainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().DropTitle),\n                        children: \"Drop files here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    \"or\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"file\",\n                        id: \"files\",\n                        className: (_app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().FileInput),\n                        onChange: handleFileChange,\n                        accept: \".annot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().Results),\n                children: data && data.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().Item),\n                        onClick: handleClick,\n                        children: item.target[0].fragment[0].text[0]\n                    }, index, false, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"r4Mei8r/vISzc+89378cYwOGDkw=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBQ1E7QUFDVTtBQUMxRCxJQUFJSSxjQUFjQywwR0FBNkI7QUFDL0MsTUFBTUMsT0FBTzs7SUFDWCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTVEsbUJBQW1CLE9BQU9DO1FBQzlCLE1BQU1DLE9BQU9ELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFDOUIsSUFBSSxDQUFDRixNQUFNO1lBQ1RHLE1BQU07WUFDTjtRQUNGO1FBRUEsTUFBTUMsYUFBYSxNQUFNWix1RUFBaUJBLENBQUNRO1FBRTNDUCxZQUFZVyxZQUFZLFNBQVVDLEdBQUcsRUFBRUMsTUFBTTtZQUMzQ1QsUUFBUVMsT0FBT0MsVUFBVSxDQUFDQyxhQUFhLENBQUMsRUFBRSxDQUFDRCxVQUFVO1FBQ3ZEO0lBQ0Y7SUFFQSxNQUFNRSxjQUFjLENBQUNWO1FBQ25CVyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ2IsRUFBRUUsTUFBTSxDQUFDWSxTQUFTO0lBQ2xEO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVd4Qiw2RUFBZTs7MEJBQzdCLDhEQUFDMEI7Z0JBQU1DLFNBQVE7Z0JBQVFILFdBQVd4QixpRkFBbUI7Z0JBQUU2QixJQUFHOztrQ0FDeEQsOERBQUNDO3dCQUFLTixXQUFXeEIsNkVBQWU7a0NBQUU7Ozs7OztvQkFBc0I7a0NBRXhELDhEQUFDZ0M7d0JBQ0NDLE1BQUs7d0JBQ0xKLElBQUc7d0JBQ0hMLFdBQVd4Qiw2RUFBZTt3QkFDMUJtQyxVQUFVNUI7d0JBQ1Y2QixRQUFPOzs7Ozs7Ozs7Ozs7MEJBSVgsOERBQUNiO2dCQUFJQyxXQUFXeEIsMkVBQWE7MEJBQzFCSyxRQUNDQSxLQUFLaUMsR0FBRyxDQUFDLENBQUNDLE1BQU1DO29CQUNkLHFCQUNFLDhEQUFDakI7d0JBQWdCQyxXQUFXeEIsd0VBQVU7d0JBQUUwQyxTQUFTeEI7a0NBQzlDcUIsS0FBSzdCLE1BQU0sQ0FBQyxFQUFFLENBQUNpQyxRQUFRLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQUMsRUFBRTt1QkFEM0JKOzs7OztnQkFJZDs7Ozs7Ozs7Ozs7O0FBSVY7R0E5Q01wQztLQUFBQTtBQWdETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCJAL2FwcC9zdHlsZS9tYWluLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGNvbnZlcnRBbm5vdFRvWG1sIH0gZnJvbSBcIkAvYXBwL2hlbHBlcnMvaGVscGVyc1wiO1xudmFyIHBhcnNlU3RyaW5nID0gcmVxdWlyZShcInhtbDJqc1wiKS5wYXJzZVN0cmluZztcbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICBhbGVydChcIlZldWlsbGV6IHPDqWxlY3Rpb25uZXIgdW4gZmljaGllciAuZXB1Yi5hbm5vdFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB4bWxDb250ZW50ID0gYXdhaXQgY29udmVydEFubm90VG9YbWwoZmlsZSk7XG5cbiAgICBwYXJzZVN0cmluZyh4bWxDb250ZW50LCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgIHNldERhdGEocmVzdWx0LmFubm90YXRpb24uYW5ub3RhdGlvblNldFswXS5hbm5vdGF0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Db250YWluZXJ9PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlc1wiIGNsYXNzTmFtZT17c3R5bGUuRHJvcENvbnRhaW5lcn0gaWQ9XCJkcm9wY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuRHJvcFRpdGxlfT5Ecm9wIGZpbGVzIGhlcmU8L3NwYW4+XG4gICAgICAgIG9yXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJmaWxlXCJcbiAgICAgICAgICBpZD1cImZpbGVzXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLkZpbGVJbnB1dH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cbiAgICAgICAgICBhY2NlcHQ9XCIuYW5ub3RcIlxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlJlc3VsdHN9PlxuICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgIGRhdGEubWFwKChpdGVtLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGUuSXRlbX0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgIHtpdGVtLnRhcmdldFswXS5mcmFnbWVudFswXS50ZXh0WzBdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiY29udmVydEFubm90VG9YbWwiLCJwYXJzZVN0cmluZyIsInJlcXVpcmUiLCJNYWluIiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImFsZXJ0IiwieG1sQ29udGVudCIsImVyciIsInJlc3VsdCIsImFubm90YXRpb24iLCJhbm5vdGF0aW9uU2V0IiwiaGFuZGxlQ2xpY2siLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJpbm5lclRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJDb250YWluZXIiLCJsYWJlbCIsImh0bWxGb3IiLCJEcm9wQ29udGFpbmVyIiwiaWQiLCJzcGFuIiwiRHJvcFRpdGxlIiwiaW5wdXQiLCJuYW1lIiwiRmlsZUlucHV0Iiwib25DaGFuZ2UiLCJhY2NlcHQiLCJSZXN1bHRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiSXRlbSIsIm9uQ2xpY2siLCJmcmFnbWVudCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});