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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/style/main.module.scss */ \"(app-pages-browser)/./src/app/style/main.module.scss\");\n/* harmony import */ var _app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/helpers/helpers */ \"(app-pages-browser)/./src/app/helpers/helpers.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nvar parseString = (__webpack_require__(/*! xml2js */ \"(app-pages-browser)/./node_modules/xml2js/lib/xml2js.js\").parseString);\nconst Main = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFileChange = async (e)=>{\n        e.preventDefault();\n        const file = e.target.files[0];\n        if (!file) {\n            alert(\"Veuillez s\\xe9lectionner un fichier .epub.annot\");\n            return;\n        }\n        const xmlContent = await (0,_app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.convertAnnotToXml)(file);\n        parseString(xmlContent, function(err, result) {\n            setData(result.annotation.annotationSet[0].annotation);\n        });\n    };\n    const handleClick = (e)=>{\n        navigator.clipboard.writeText(e.target.innerText);\n    };\n    const handleDrag = (e)=>{\n        e.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"files\",\n                className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().DropContainer),\n                id: \"dropcontainer\",\n                onDrag: handleDrag,\n                onDrop: handleDrop,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().DropTitle),\n                        children: \"Drop file here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    \"or\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"file\",\n                        id: \"files\",\n                        type: \"file\",\n                        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().FileInput),\n                        onChange: handleFileChange,\n                        accept: \".annot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Results),\n                children: data && data.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Item),\n                        onClick: handleClick,\n                        children: item.target[0].fragment[0].text[0]\n                    }, index, false, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"r4Mei8r/vISzc+89378cYwOGDkw=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBQ1M7QUFDUztBQUMxRCxJQUFJSSxjQUFjQywwR0FBNkI7QUFDL0MsTUFBTUMsT0FBTzs7SUFDWCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTVEsbUJBQW1CLE9BQU9DO1FBQzlCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLE9BQU9GLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFDOUIsSUFBSSxDQUFDRixNQUFNO1lBQ1RHLE1BQU07WUFDTjtRQUNGO1FBRUEsTUFBTUMsYUFBYSxNQUFNYix1RUFBaUJBLENBQUNTO1FBRTNDUixZQUFZWSxZQUFZLFNBQVVDLEdBQUcsRUFBRUMsTUFBTTtZQUMzQ1YsUUFBUVUsT0FBT0MsVUFBVSxDQUFDQyxhQUFhLENBQUMsRUFBRSxDQUFDRCxVQUFVO1FBQ3ZEO0lBQ0Y7SUFFQSxNQUFNRSxjQUFjLENBQUNYO1FBQ25CWSxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ2QsRUFBRUcsTUFBTSxDQUFDWSxTQUFTO0lBQ2xEO0lBQ0EsTUFBTUMsYUFBYSxDQUFDaEI7UUFDbEJBLEVBQUVDLGNBQWM7SUFDbEI7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVcxQiw4RUFBZTs7MEJBQzdCLDhEQUFDNEI7Z0JBQ0NDLFNBQVE7Z0JBQ1JILFdBQVcxQixrRkFBbUI7Z0JBQzlCK0IsSUFBRztnQkFDSEMsUUFBUVI7Z0JBQ1JTLFFBQVFDOztrQ0FFUiw4REFBQ0M7d0JBQUtULFdBQVcxQiw4RUFBZTtrQ0FBRTs7Ozs7O29CQUFxQjtrQ0FFdkQsOERBQUNxQzt3QkFDQ0MsTUFBSzt3QkFDTFAsSUFBRzt3QkFDSFEsTUFBSzt3QkFDTGIsV0FBVzFCLDhFQUFlO3dCQUMxQnlDLFVBQVVsQzt3QkFDVm1DLFFBQU87Ozs7Ozs7Ozs7OzswQkFJWCw4REFBQ2pCO2dCQUFJQyxXQUFXMUIsNEVBQWE7MEJBQzFCSyxRQUNDQSxLQUFLdUMsR0FBRyxDQUFDLENBQUNDLE1BQU1DO29CQUNkLHFCQUNFLDhEQUFDckI7d0JBQWdCQyxXQUFXMUIseUVBQVU7d0JBQUVnRCxTQUFTN0I7a0NBQzlDMEIsS0FBS2xDLE1BQU0sQ0FBQyxFQUFFLENBQUNzQyxRQUFRLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQUMsRUFBRTt1QkFEM0JKOzs7OztnQkFJZDs7Ozs7Ozs7Ozs7O0FBSVY7R0F6RE0xQztLQUFBQTtBQTJETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCJAL2FwcC9zdHlsZS9tYWluLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBjb252ZXJ0QW5ub3RUb1htbCB9IGZyb20gXCJAL2FwcC9oZWxwZXJzL2hlbHBlcnNcIjtcbnZhciBwYXJzZVN0cmluZyA9IHJlcXVpcmUoXCJ4bWwyanNcIikucGFyc2VTdHJpbmc7XG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIGFsZXJ0KFwiVmV1aWxsZXogc8OpbGVjdGlvbm5lciB1biBmaWNoaWVyIC5lcHViLmFubm90XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHhtbENvbnRlbnQgPSBhd2FpdCBjb252ZXJ0QW5ub3RUb1htbChmaWxlKTtcblxuICAgIHBhcnNlU3RyaW5nKHhtbENvbnRlbnQsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgc2V0RGF0YShyZXN1bHQuYW5ub3RhdGlvbi5hbm5vdGF0aW9uU2V0WzBdLmFubm90YXRpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChlLnRhcmdldC5pbm5lclRleHQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVEcmFnID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ29udGFpbmVyfT5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPVwiZmlsZXNcIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLkRyb3BDb250YWluZXJ9XG4gICAgICAgIGlkPVwiZHJvcGNvbnRhaW5lclwiXG4gICAgICAgIG9uRHJhZz17aGFuZGxlRHJhZ31cbiAgICAgICAgb25Ecm9wPXtoYW5kbGVEcm9wfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLkRyb3BUaXRsZX0+RHJvcCBmaWxlIGhlcmU8L3NwYW4+XG4gICAgICAgIG9yXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJmaWxlXCJcbiAgICAgICAgICBpZD1cImZpbGVzXCJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5GaWxlSW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgICAgYWNjZXB0PVwiLmFubm90XCJcbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5SZXN1bHRzfT5cbiAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICBkYXRhLm1hcCgoaXRlbSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlLkl0ZW19IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICB7aXRlbS50YXJnZXRbMF0uZnJhZ21lbnRbMF0udGV4dFswXX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZSIsImNvbnZlcnRBbm5vdFRvWG1sIiwicGFyc2VTdHJpbmciLCJyZXF1aXJlIiwiTWFpbiIsImRhdGEiLCJzZXREYXRhIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImFsZXJ0IiwieG1sQ29udGVudCIsImVyciIsInJlc3VsdCIsImFubm90YXRpb24iLCJhbm5vdGF0aW9uU2V0IiwiaGFuZGxlQ2xpY2siLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJpbm5lclRleHQiLCJoYW5kbGVEcmFnIiwiZGl2IiwiY2xhc3NOYW1lIiwiQ29udGFpbmVyIiwibGFiZWwiLCJodG1sRm9yIiwiRHJvcENvbnRhaW5lciIsImlkIiwib25EcmFnIiwib25Ecm9wIiwiaGFuZGxlRHJvcCIsInNwYW4iLCJEcm9wVGl0bGUiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwiRmlsZUlucHV0Iiwib25DaGFuZ2UiLCJhY2NlcHQiLCJSZXN1bHRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiSXRlbSIsIm9uQ2xpY2siLCJmcmFnbWVudCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});