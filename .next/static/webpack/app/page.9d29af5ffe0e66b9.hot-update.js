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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/style/main.module.scss */ \"(app-pages-browser)/./src/app/style/main.module.scss\");\n/* harmony import */ var _app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/helpers/helpers */ \"(app-pages-browser)/./src/app/helpers/helpers.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Main = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFileChange = async (e)=>{\n        e.preventDefault();\n        const file = e.target.files[0];\n        if (!file) {\n            alert(\"Veuillez s\\xe9lectionner un fichier .epub.annot\");\n            return;\n        }\n        const result = await (0,_app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.convertFile)(file);\n        console.log(result, \"result\");\n        setData(result);\n    };\n    const handleClick = (e)=>{\n        navigator.clipboard.writeText(e.target.innerText);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"file\",\n                id: \"files\",\n                type: \"file\",\n                className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().FileInput),\n                onChange: handleFileChange,\n                accept: \".annot\"\n            }, void 0, false, {\n                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Results),\n                children: data && data.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Item),\n                        onClick: handleClick,\n                        children: item.target[0].fragment[0].text[0]\n                    }, index, false, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"r4Mei8r/vISzc+89378cYwOGDkw=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBQ1M7QUFDRztBQUVwRCxNQUFNSSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNTSxtQkFBbUIsT0FBT0M7UUFDOUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsT0FBT0YsRUFBRUcsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUM5QixJQUFJLENBQUNGLE1BQU07WUFDVEcsTUFBTTtZQUNOO1FBQ0Y7UUFFQSxNQUFNQyxTQUFTLE1BQU1YLGlFQUFXQSxDQUFDTztRQUNqQ0ssUUFBUUMsR0FBRyxDQUFDRixRQUFRO1FBQ3BCUixRQUFRUTtJQUNWO0lBRUEsTUFBTUcsY0FBYyxDQUFDVDtRQUNuQlUsVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNaLEVBQUVHLE1BQU0sQ0FBQ1UsU0FBUztJQUNsRDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXckIsOEVBQWU7OzBCQUM3Qiw4REFBQ3VCO2dCQUNDQyxNQUFLO2dCQUNMQyxJQUFHO2dCQUNIQyxNQUFLO2dCQUNMTCxXQUFXckIsOEVBQWU7Z0JBQzFCNEIsVUFBVXZCO2dCQUNWd0IsUUFBTzs7Ozs7OzBCQUdULDhEQUFDVDtnQkFBSUMsV0FBV3JCLDRFQUFhOzBCQUMxQkcsUUFDQ0EsS0FBSzRCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztvQkFDZCxxQkFDRSw4REFBQ2I7d0JBQWdCQyxXQUFXckIseUVBQVU7d0JBQUVtQyxTQUFTcEI7a0NBQzlDaUIsS0FBS3ZCLE1BQU0sQ0FBQyxFQUFFLENBQUMyQixRQUFRLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQUMsRUFBRTt1QkFEM0JKOzs7OztnQkFJZDs7Ozs7Ozs7Ozs7O0FBSVY7R0ExQ00vQjtLQUFBQTtBQTRDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCJAL2FwcC9zdHlsZS9tYWluLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBjb252ZXJ0RmlsZSB9IGZyb20gXCJAL2FwcC9oZWxwZXJzL2hlbHBlcnNcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICBhbGVydChcIlZldWlsbGV6IHPDqWxlY3Rpb25uZXIgdW4gZmljaGllciAuZXB1Yi5hbm5vdFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb252ZXJ0RmlsZShmaWxlKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQsIFwicmVzdWx0XCIpO1xuICAgIHNldERhdGEocmVzdWx0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Db250YWluZXJ9PlxuICAgICAgPGlucHV0XG4gICAgICAgIG5hbWU9XCJmaWxlXCJcbiAgICAgICAgaWQ9XCJmaWxlc1wiXG4gICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5GaWxlSW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICBhY2NlcHQ9XCIuYW5ub3RcIlxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlJlc3VsdHN9PlxuICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgIGRhdGEubWFwKChpdGVtLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGUuSXRlbX0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgIHtpdGVtLnRhcmdldFswXS5mcmFnbWVudFswXS50ZXh0WzBdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiY29udmVydEZpbGUiLCJNYWluIiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiYWxlcnQiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJpbm5lclRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJDb250YWluZXIiLCJpbnB1dCIsIm5hbWUiLCJpZCIsInR5cGUiLCJGaWxlSW5wdXQiLCJvbkNoYW5nZSIsImFjY2VwdCIsIlJlc3VsdHMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJJdGVtIiwib25DbGljayIsImZyYWdtZW50IiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});