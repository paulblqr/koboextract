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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/style/main.module.css */ \"(app-pages-browser)/./src/app/style/main.module.css\");\n/* harmony import */ var _app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/helpers/helpers */ \"(app-pages-browser)/./src/app/helpers/helpers.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nvar parseString = (__webpack_require__(/*! xml2js */ \"(app-pages-browser)/./node_modules/xml2js/lib/xml2js.js\").parseString);\nconst Main = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFileChange = async (e)=>{\n        const file = e.target.files[0];\n        if (!file) {\n            alert(\"Veuillez s\\xe9lectionner un fichier .epub.annot\");\n            return;\n        }\n        const xmlContent = await (0,_app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.convertAnnotToXml)(file);\n        parseString(xmlContent, function(err, result) {\n            setData(result.annotation.annotationSet[0].annotation);\n        });\n    };\n    const handleClick = (e)=>{\n        navigator.clipboard.writeText(e.target.innerText);\n    };\n    function dragOverHandler(ev) {\n        console.log(\"File(s) in drop zone\");\n        // Prevent default behavior (Prevent file from being opened)\n        ev.preventDefault();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().Container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"drop_zone\",\n                onDrop: handleFileChange,\n                onClick: handleFileChange,\n                className: (_app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().DropZone),\n                onDragOver: (e)=>dragOverHandler(e),\n                children: [\n                    \">\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Drag one or more files to this \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                children: \"drop zone\"\n                            }, void 0, false, {\n                                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 42\n                            }, undefined),\n                            \".\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        onChange: handleFileChange,\n                        accept: \".annot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().Results),\n                children: data && data.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_style_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().Item),\n                        onClick: handleClick,\n                        children: item.target[0].fragment[0].text[0]\n                    }, index, false, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"r4Mei8r/vISzc+89378cYwOGDkw=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBQ1E7QUFDVTtBQUMxRCxJQUFJSSxjQUFjQywwR0FBNkI7QUFDL0MsTUFBTUMsT0FBTzs7SUFDWCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTVEsbUJBQW1CLE9BQU9DO1FBQzlCLE1BQU1DLE9BQU9ELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFDOUIsSUFBSSxDQUFDRixNQUFNO1lBQ1RHLE1BQU07WUFDTjtRQUNGO1FBRUEsTUFBTUMsYUFBYSxNQUFNWix1RUFBaUJBLENBQUNRO1FBRTNDUCxZQUFZVyxZQUFZLFNBQVVDLEdBQUcsRUFBRUMsTUFBTTtZQUMzQ1QsUUFBUVMsT0FBT0MsVUFBVSxDQUFDQyxhQUFhLENBQUMsRUFBRSxDQUFDRCxVQUFVO1FBQ3ZEO0lBQ0Y7SUFFQSxNQUFNRSxjQUFjLENBQUNWO1FBQ25CVyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ2IsRUFBRUUsTUFBTSxDQUFDWSxTQUFTO0lBQ2xEO0lBRUEsU0FBU0MsZ0JBQWdCQyxFQUFFO1FBQ3pCQyxRQUFRQyxHQUFHLENBQUM7UUFFWiw0REFBNEQ7UUFDNURGLEdBQUdHLGNBQWM7SUFDbkI7SUFHQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVzdCLDZFQUFlOzswQkFDN0IsOERBQUM0QjtnQkFDQ0csSUFBRztnQkFDSEMsUUFBUXpCO2dCQUNSMEIsU0FBUzFCO2dCQUNUc0IsV0FBVzdCLDRFQUFjO2dCQUN6Qm1DLFlBQVksQ0FBQzNCLElBQU1lLGdCQUFnQmY7O29CQUFJO2tDQUV2Qyw4REFBQzRCOzs0QkFBRTswQ0FDOEIsOERBQUNDOzBDQUFFOzs7Ozs7NEJBQWE7Ozs7Ozs7a0NBRWpELDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsVUFBVWpDO3dCQUFrQmtDLFFBQU87Ozs7Ozs7Ozs7OzswQkFHeEQsOERBQUNiO2dCQUFJQyxXQUFXN0IsMkVBQWE7MEJBQzFCSyxRQUNDQSxLQUFLc0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DO29CQUNkLHFCQUNFLDhEQUFDakI7d0JBQWdCQyxXQUFXN0Isd0VBQVU7d0JBQUVpQyxTQUFTZjtrQ0FDOUMwQixLQUFLbEMsTUFBTSxDQUFDLEVBQUUsQ0FBQ3FDLFFBQVEsQ0FBQyxFQUFFLENBQUNDLElBQUksQ0FBQyxFQUFFO3VCQUQzQkg7Ozs7O2dCQUlkOzs7Ozs7Ozs7Ozs7QUFJVjtHQXZETXpDO0tBQUFBO0FBeUROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIkAvYXBwL3N0eWxlL21haW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgY29udmVydEFubm90VG9YbWwgfSBmcm9tIFwiQC9hcHAvaGVscGVycy9oZWxwZXJzXCI7XG52YXIgcGFyc2VTdHJpbmcgPSByZXF1aXJlKFwieG1sMmpzXCIpLnBhcnNlU3RyaW5nO1xuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIGFsZXJ0KFwiVmV1aWxsZXogc8OpbGVjdGlvbm5lciB1biBmaWNoaWVyIC5lcHViLmFubm90XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHhtbENvbnRlbnQgPSBhd2FpdCBjb252ZXJ0QW5ub3RUb1htbChmaWxlKTtcblxuICAgIHBhcnNlU3RyaW5nKHhtbENvbnRlbnQsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICAgICAgc2V0RGF0YShyZXN1bHQuYW5ub3RhdGlvbi5hbm5vdGF0aW9uU2V0WzBdLmFubm90YXRpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChlLnRhcmdldC5pbm5lclRleHQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRyYWdPdmVySGFuZGxlcihldikge1xuICAgIGNvbnNvbGUubG9nKFwiRmlsZShzKSBpbiBkcm9wIHpvbmVcIik7XG4gIFxuICAgIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciAoUHJldmVudCBmaWxlIGZyb20gYmVpbmcgb3BlbmVkKVxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ29udGFpbmVyfT5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJkcm9wX3pvbmVcIlxuICAgICAgICBvbkRyb3A9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUuRHJvcFpvbmV9XG4gICAgICAgIG9uRHJhZ092ZXI9eyhlKSA9PiBkcmFnT3ZlckhhbmRsZXIoZSl9PlxuICAgICAgPlxuICAgICAgICA8cD5cbiAgICAgICAgICBEcmFnIG9uZSBvciBtb3JlIGZpbGVzIHRvIHRoaXMgPGk+ZHJvcCB6b25lPC9pPi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gYWNjZXB0PVwiLmFubm90XCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuUmVzdWx0c30+XG4gICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZS5JdGVtfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAge2l0ZW0udGFyZ2V0WzBdLmZyYWdtZW50WzBdLnRleHRbMF19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGUiLCJjb252ZXJ0QW5ub3RUb1htbCIsInBhcnNlU3RyaW5nIiwicmVxdWlyZSIsIk1haW4iLCJkYXRhIiwic2V0RGF0YSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiYWxlcnQiLCJ4bWxDb250ZW50IiwiZXJyIiwicmVzdWx0IiwiYW5ub3RhdGlvbiIsImFubm90YXRpb25TZXQiLCJoYW5kbGVDbGljayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImlubmVyVGV4dCIsImRyYWdPdmVySGFuZGxlciIsImV2IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiQ29udGFpbmVyIiwiaWQiLCJvbkRyb3AiLCJvbkNsaWNrIiwiRHJvcFpvbmUiLCJvbkRyYWdPdmVyIiwicCIsImkiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImFjY2VwdCIsIlJlc3VsdHMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJJdGVtIiwiZnJhZ21lbnQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});