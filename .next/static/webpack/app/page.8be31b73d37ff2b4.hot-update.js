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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/style/main.module.scss */ \"(app-pages-browser)/./src/app/style/main.module.scss\");\n/* harmony import */ var _app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/helpers/helpers */ \"(app-pages-browser)/./src/app/helpers/helpers.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Main = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFileChange = async (e)=>{\n        e.preventDefault();\n        const file = e.target.files[0];\n        if (!file) {\n            alert(\"Veuillez s\\xe9lectionner un fichier .epub.annot\");\n            return;\n        }\n        const result = await (0,_app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.convertFile)(file);\n        setData(result);\n    };\n    const handleClick = (e)=>{\n        navigator.clipboard.writeText(e.target.innerText);\n    };\n    const handleDrag = (e)=>{\n        e.preventDefault();\n    };\n    const handleDrop = (e)=>{\n        e.preventDefault();\n        const fileInput = document.getElementById(\"files\");\n        fileInput.files = e.dataTransfer.files;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"files\",\n                className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().DropContainer),\n                id: \"dropcontainer\",\n                onDragOver: handleDrag,\n                onDrop: handleDrop,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().DropTitle),\n                        children: \"Drop file here\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    \"or\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"file\",\n                        id: \"files\",\n                        type: \"file\",\n                        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().FileInput),\n                        onChange: handleFileChange,\n                        accept: \".annot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Results),\n                children: data && data.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Item),\n                        onClick: handleClick,\n                        children: item.target[0].fragment[0].text[0]\n                    }, index, false, {\n                        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"r4Mei8r/vISzc+89378cYwOGDkw=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBQ1M7QUFDRztBQUVwRCxNQUFNSSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNTSxtQkFBbUIsT0FBT0M7UUFDOUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsT0FBT0YsRUFBRUcsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUM5QixJQUFJLENBQUNGLE1BQU07WUFDVEcsTUFBTTtZQUNOO1FBQ0Y7UUFFQSxNQUFNQyxTQUFTLE1BQU1YLGlFQUFXQSxDQUFDTztRQUNqQ0osUUFBUVE7SUFDVjtJQUVBLE1BQU1DLGNBQWMsQ0FBQ1A7UUFDbkJRLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDVixFQUFFRyxNQUFNLENBQUNRLFNBQVM7SUFDbEQ7SUFDQSxNQUFNQyxhQUFhLENBQUNaO1FBQ2xCQSxFQUFFQyxjQUFjO0lBQ2xCO0lBRUEsTUFBTVksYUFBYSxDQUFDYjtRQUNsQkEsRUFBRUMsY0FBYztRQUNoQixNQUFNYSxZQUFZQyxTQUFTQyxjQUFjLENBQUM7UUFDMUNGLFVBQVVWLEtBQUssR0FBR0osRUFBRWlCLFlBQVksQ0FBQ2IsS0FBSztJQUN4QztJQUVBLHFCQUNFLDhEQUFDYztRQUFJQyxXQUFXekIsOEVBQWU7OzBCQUM3Qiw4REFBQzJCO2dCQUNDQyxTQUFRO2dCQUNSSCxXQUFXekIsa0ZBQW1CO2dCQUM5QjhCLElBQUc7Z0JBQ0hDLFlBQVliO2dCQUNaYyxRQUFRYjs7a0NBRVIsOERBQUNjO3dCQUFLUixXQUFXekIsOEVBQWU7a0NBQUU7Ozs7OztvQkFBcUI7a0NBRXZELDhEQUFDbUM7d0JBQ0NDLE1BQUs7d0JBQ0xOLElBQUc7d0JBQ0hPLE1BQUs7d0JBQ0xaLFdBQVd6Qiw4RUFBZTt3QkFDMUJ1QyxVQUFVbEM7d0JBQ1ZtQyxRQUFPOzs7Ozs7Ozs7Ozs7MEJBSVgsOERBQUNoQjtnQkFBSUMsV0FBV3pCLDRFQUFhOzBCQUMxQkcsUUFDQ0EsS0FBS3VDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztvQkFDZCxxQkFDRSw4REFBQ3BCO3dCQUFnQkMsV0FBV3pCLHlFQUFVO3dCQUFFOEMsU0FBU2pDO2tDQUM5QzhCLEtBQUtsQyxNQUFNLENBQUMsRUFBRSxDQUFDc0MsUUFBUSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLEVBQUU7dUJBRDNCSjs7Ozs7Z0JBSWQ7Ozs7Ozs7Ozs7OztBQUlWO0dBNURNMUM7S0FBQUE7QUE4RE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiQC9hcHAvc3R5bGUvbWFpbi5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY29udmVydEZpbGUgfSBmcm9tIFwiQC9hcHAvaGVscGVycy9oZWxwZXJzXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGlmICghZmlsZSkge1xuICAgICAgYWxlcnQoXCJWZXVpbGxleiBzw6lsZWN0aW9ubmVyIHVuIGZpY2hpZXIgLmVwdWIuYW5ub3RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udmVydEZpbGUoZmlsZSk7XG4gICAgc2V0RGF0YShyZXN1bHQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChlLnRhcmdldC5pbm5lclRleHQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVEcmFnID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRHJvcCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZXNcIik7XG4gICAgZmlsZUlucHV0LmZpbGVzID0gZS5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ29udGFpbmVyfT5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPVwiZmlsZXNcIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLkRyb3BDb250YWluZXJ9XG4gICAgICAgIGlkPVwiZHJvcGNvbnRhaW5lclwiXG4gICAgICAgIG9uRHJhZ092ZXI9e2hhbmRsZURyYWd9XG4gICAgICAgIG9uRHJvcD17aGFuZGxlRHJvcH1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5Ecm9wVGl0bGV9PkRyb3AgZmlsZSBoZXJlPC9zcGFuPlxuICAgICAgICBvclxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwiZmlsZVwiXG4gICAgICAgICAgaWQ9XCJmaWxlc1wiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuRmlsZUlucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICAgIGFjY2VwdD1cIi5hbm5vdFwiXG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuUmVzdWx0c30+XG4gICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgZGF0YS5tYXAoKGl0ZW0sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZS5JdGVtfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAge2l0ZW0udGFyZ2V0WzBdLmZyYWdtZW50WzBdLnRleHRbMF19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGUiLCJjb252ZXJ0RmlsZSIsIk1haW4iLCJkYXRhIiwic2V0RGF0YSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJhbGVydCIsInJlc3VsdCIsImhhbmRsZUNsaWNrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiaW5uZXJUZXh0IiwiaGFuZGxlRHJhZyIsImhhbmRsZURyb3AiLCJmaWxlSW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YVRyYW5zZmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiQ29udGFpbmVyIiwibGFiZWwiLCJodG1sRm9yIiwiRHJvcENvbnRhaW5lciIsImlkIiwib25EcmFnT3ZlciIsIm9uRHJvcCIsInNwYW4iLCJEcm9wVGl0bGUiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwiRmlsZUlucHV0Iiwib25DaGFuZ2UiLCJhY2NlcHQiLCJSZXN1bHRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiSXRlbSIsIm9uQ2xpY2siLCJmcmFnbWVudCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});