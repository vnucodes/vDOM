/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./src/vnode.js\");\n\r\n\r\n;\r\n\r\n// '$$' for real dom element\r\n// '__' for virtual dom element\r\n\r\nconst __root = _vnode__WEBPACK_IMPORTED_MODULE_0__.VNode.create( \r\n                'div', \r\n                {\r\n                    class: 'position-relative',\r\n                    id: 'wrapper'\r\n                },\r\n                [\r\n                    _vnode__WEBPACK_IMPORTED_MODULE_0__.VNode.create( 'p', {}, 'Paragraph text 1' ),\r\n                    _vnode__WEBPACK_IMPORTED_MODULE_0__.VNode.create( 'p', {}, 'Paragraph text 2' )\r\n                ]\r\n            ) \r\n\r\n_vnode__WEBPACK_IMPORTED_MODULE_0__.VNode.render( __root )\r\n\n\n//# sourceURL=webpack://vdom/./src/app.js?");

/***/ }),

/***/ "./src/vnode.js":
/*!**********************!*\
  !*** ./src/vnode.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VNode\": () => (/* binding */ VNode)\n/* harmony export */ });\nclass VNode {\r\n\r\n    // create virtual nodes/elements\r\n    static create ( type, props = null, children = [] ) {\r\n\r\n        // update props\r\n        props = typeof props === 'null' || typeof props === 'undefined'\r\n                ? Object.create( null )\r\n                : Object.assign( Object.create( null ), {...props} )\r\n\r\n        return {\r\n            type,\r\n            props,\r\n            children\r\n        }\r\n    }\r\n\r\n    // render virtual node/s\r\n    static render ( {type, props, children} ) {\r\n\r\n        let $$elm\r\n\r\n        // create dom element\r\n        $$elm = document.createElement( type )\r\n\r\n        // create props for the element\r\n        for ( const [propName, propVal] of Object.entries(props)  ) {\r\n            $$elm.setAttribute( propName, propVal )\r\n        }\r\n\r\n        // create and append children\r\n        if ( typeof children === 'string' ) {\r\n            // create text node and append to elem/parent\r\n            $$elm.appendChild( document.createTextNode( children ) )\r\n\r\n        } else {\r\n            // create and append element child node\r\n            for (const child of children) {                     \r\n                $$elm.appendChild( VNode.render(child) )\r\n            }\r\n        }\r\n        \r\n        // return\r\n        return $$elm\r\n    }\r\n}\n\n//# sourceURL=webpack://vdom/./src/vnode.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;