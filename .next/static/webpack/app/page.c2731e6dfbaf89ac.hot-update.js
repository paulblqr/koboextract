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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/style/main.module.scss */ \"(app-pages-browser)/./src/app/style/main.module.scss\");\n/* harmony import */ var _app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/helpers/helpers */ \"(app-pages-browser)/./src/app/helpers/helpers.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nvar parseString = (__webpack_require__(/*! xml2js */ \"(app-pages-browser)/./node_modules/xml2js/lib/xml2js.js\").parseString);\nconst dropzone = document.querySelector(\"#dropzone\");\nconst Main = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFileChange = async (e)=>{\n        e.preventDefault();\n        const file = e.target.files[0];\n        if (!file) {\n            alert(\"Only .epub.annot files are available for upload.\");\n            return;\n        }\n        const xmlContent = await (0,_app_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.convertAnnotToXml)(file);\n        parseString(xmlContent, function(err, result) {\n            setData(result.annotation.annotationSet[0].annotation);\n        });\n    };\n    const handleCopyToClipBoard = (e)=>{\n        navigator.clipboard.writeText(e.target.innerText);\n    };\n    const handleDragOver = (e)=>{\n        e.preventDefault();\n        e.stopPropagation();\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.add((_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    };\n    const handleDragLeave = (e)=>{\n        e.preventDefault();\n        e.stopPropagation();\n        dropzone === null || dropzone === void 0 ? void 0 : dropzone.classList.remove((_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Active));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Wrapper),\n        id: \"dropzone\",\n        onDragOver: handleDragOver,\n        onDragLeave: handleDragLeave,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Container),\n            children: [\n                !data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().DragTitle),\n                    children: \"[ Drag your file here ]\"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 19\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().FileInput),\n                    onChange: handleFileChange,\n                    accept: \".annot\",\n                    title: \" \"\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Results),\n                    children: data.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_app_style_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Item),\n                            onClick: handleCopyToClipBoard,\n                            children: item.target[0].fragment[0].text[0]\n                        }, index, false, {\n                            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/paul/Desktop/Master/04 - Work/QX49/koboextract/src/app/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"iQX+4OAhA5+VU/aNcdxshMNE96c=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBQ1M7QUFDUztBQUMxRCxJQUFJSSxjQUFjQywwR0FBNkI7QUFDL0MsTUFBTUMsV0FBV0MsU0FBU0MsYUFBYSxDQUFDO0FBRXhDLE1BQU1DLE9BQU87O0lBQ1gsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNYSxtQkFBbUIsT0FBT0M7UUFDOUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsT0FBT0YsRUFBRUcsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUM5QixJQUFJLENBQUNGLE1BQU07WUFDVEcsTUFBTTtZQUNOO1FBQ0Y7UUFFQSxNQUFNQyxhQUFhLE1BQU1sQix1RUFBaUJBLENBQUNjO1FBRTNDYixZQUFZaUIsWUFBWSxTQUFVQyxHQUFHLEVBQUVDLE1BQU07WUFDM0NaLFFBQVFZLE9BQU9DLFVBQVUsQ0FBQ0MsYUFBYSxDQUFDLEVBQUUsQ0FBQ0QsVUFBVTtRQUN2RDtJQUNGO0lBRUEsTUFBTUUsd0JBQXdCLENBQUNYO1FBQzdCWSxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ2QsRUFBRUcsTUFBTSxDQUFDWSxTQUFTO0lBQ2xEO0lBRUEsTUFBTUMsaUJBQWlCLENBQUNoQjtRQUN0QkEsRUFBRUMsY0FBYztRQUNoQkQsRUFBRWlCLGVBQWU7UUFDakIxQixxQkFBQUEsK0JBQUFBLFNBQVUyQixTQUFTLENBQUNDLEdBQUcsQ0FBQ2hDLDJFQUFZO0lBQ3RDO0lBRUEsTUFBTWtDLGtCQUFrQixDQUFDckI7UUFDdkJBLEVBQUVDLGNBQWM7UUFDaEJELEVBQUVpQixlQUFlO1FBQ2pCMUIscUJBQUFBLCtCQUFBQSxTQUFVMkIsU0FBUyxDQUFDSSxNQUFNLENBQUNuQywyRUFBWTtJQUN6QztJQUVBLHFCQUNFLDhEQUFDb0M7UUFDQ0MsV0FBV3JDLDRFQUFhO1FBQ3hCdUMsSUFBRztRQUNIQyxZQUFZWDtRQUNaWSxhQUFhUDtrQkFFYiw0RUFBQ0U7WUFBSUMsV0FBV3JDLDhFQUFlOztnQkFDNUIsQ0FBQ1Esc0JBQVEsOERBQUNtQztvQkFBR04sV0FBV3JDLDhFQUFlOzhCQUFFOzs7Ozs7OEJBQzFDLDhEQUFDNkM7b0JBQ0NDLE1BQUs7b0JBQ0xULFdBQVdyQyw4RUFBZTtvQkFDMUJnRCxVQUFVcEM7b0JBQ1ZxQyxRQUFPO29CQUNQQyxPQUFNOzs7Ozs7Z0JBRVAxQyxzQkFDQyw4REFBQzRCO29CQUFJQyxXQUFXckMsNEVBQWE7OEJBQzFCUSxLQUFLNEMsR0FBRyxDQUFDLENBQUNDLE1BQU1DO3dCQUNmLHFCQUNFLDhEQUFDbEI7NEJBRUNDLFdBQVdyQyx5RUFBVTs0QkFDckJ3RCxTQUFTaEM7c0NBRVI2QixLQUFLckMsTUFBTSxDQUFDLEVBQUUsQ0FBQ3lDLFFBQVEsQ0FBQyxFQUFFLENBQUNDLElBQUksQ0FBQyxFQUFFOzJCQUo5Qko7Ozs7O29CQU9YOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBckVNL0M7S0FBQUE7QUF1RU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiQC9hcHAvc3R5bGUvbWFpbi5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY29udmVydEFubm90VG9YbWwgfSBmcm9tIFwiQC9hcHAvaGVscGVycy9oZWxwZXJzXCI7XG52YXIgcGFyc2VTdHJpbmcgPSByZXF1aXJlKFwieG1sMmpzXCIpLnBhcnNlU3RyaW5nO1xuY29uc3QgZHJvcHpvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3B6b25lXCIpO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGlmICghZmlsZSkge1xuICAgICAgYWxlcnQoXCJPbmx5IC5lcHViLmFubm90IGZpbGVzIGFyZSBhdmFpbGFibGUgZm9yIHVwbG9hZC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeG1sQ29udGVudCA9IGF3YWl0IGNvbnZlcnRBbm5vdFRvWG1sKGZpbGUpO1xuXG4gICAgcGFyc2VTdHJpbmcoeG1sQ29udGVudCwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gICAgICBzZXREYXRhKHJlc3VsdC5hbm5vdGF0aW9uLmFubm90YXRpb25TZXRbMF0uYW5ub3RhdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29weVRvQ2xpcEJvYXJkID0gKGUpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChlLnRhcmdldC5pbm5lclRleHQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBkcm9wem9uZT8uY2xhc3NMaXN0LmFkZChzdHlsZS5BY3RpdmUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyYWdMZWF2ZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZHJvcHpvbmU/LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUuQWN0aXZlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuV3JhcHBlcn1cbiAgICAgIGlkPVwiZHJvcHpvbmVcIlxuICAgICAgb25EcmFnT3Zlcj17aGFuZGxlRHJhZ092ZXJ9XG4gICAgICBvbkRyYWdMZWF2ZT17aGFuZGxlRHJhZ0xlYXZlfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Db250YWluZXJ9PlxuICAgICAgICB7IWRhdGEgJiYgPGgxIGNsYXNzTmFtZT17c3R5bGUuRHJhZ1RpdGxlfT5bIERyYWcgeW91ciBmaWxlIGhlcmUgXTwvaDE+fVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5GaWxlSW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgICAgYWNjZXB0PVwiLmFubm90XCJcbiAgICAgICAgICB0aXRsZT1cIiBcIlxuICAgICAgICAvPlxuICAgICAgICB7ZGF0YSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLlJlc3VsdHN9PlxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuSXRlbX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvcHlUb0NsaXBCb2FyZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS50YXJnZXRbMF0uZnJhZ21lbnRbMF0udGV4dFswXX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZSIsImNvbnZlcnRBbm5vdFRvWG1sIiwicGFyc2VTdHJpbmciLCJyZXF1aXJlIiwiZHJvcHpvbmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJNYWluIiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImFsZXJ0IiwieG1sQ29udGVudCIsImVyciIsInJlc3VsdCIsImFubm90YXRpb24iLCJhbm5vdGF0aW9uU2V0IiwiaGFuZGxlQ29weVRvQ2xpcEJvYXJkIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiaW5uZXJUZXh0IiwiaGFuZGxlRHJhZ092ZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJBY3RpdmUiLCJoYW5kbGVEcmFnTGVhdmUiLCJyZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJXcmFwcGVyIiwiaWQiLCJvbkRyYWdPdmVyIiwib25EcmFnTGVhdmUiLCJDb250YWluZXIiLCJoMSIsIkRyYWdUaXRsZSIsImlucHV0IiwidHlwZSIsIkZpbGVJbnB1dCIsIm9uQ2hhbmdlIiwiYWNjZXB0IiwidGl0bGUiLCJSZXN1bHRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiSXRlbSIsIm9uQ2xpY2siLCJmcmFnbWVudCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});