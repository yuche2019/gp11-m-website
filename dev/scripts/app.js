/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//const Name = require('./controllers/name') //commonjs的模块化\n//import{ name } from './controllers/name' //ES6的模块化\nvar indexTpl = __webpack_require__(/*! ./views/index.html */ \"./src/views/index.html\");\n\nvar renderedIndexTpl = template.render(indexTpl, {});\ndocument.querySelector('#app').innerHTML = renderedIndexTpl;\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/views/index.html":
/*!******************************!*\
  !*** ./src/views/index.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"container\\\">    <header>        <img src=\\\"../images/logo.png\\\" alt=\\\"\\\">        <a href=\\\"\\\" class=\\\"search\\\">            <div>                <img src=\\\"../images/picture/indexsearch.png\\\" alt=\\\"\\\">            </div>        </a>        <a href=\\\"\\\" class=\\\"login\\\">登陆</a>    </header>    <main>        <div class=\\\"banner\\\"></div>        <img class=\\\"line\\\" src=\\\"../images/061a732098b68f85c913833d24f70d11.png\\\" alt=\\\"\\\">        <ul class=\\\"recommend-1\\\">            <li class=\\\"imgs-1\\\"><a href=\\\"\\\"><img src=\\\"../images/picture/2a8d42fff279cce99eafbed749675dd8.jpg\\\" alt=\\\"\\\"></a></li>            <li><a href=\\\"\\\"><img src=\\\"../images/picture/91213d4e2a8fe4361947b53c7f9e30d4.png\\\" alt=\\\"\\\"></a></li>            <li><a href=\\\"\\\"><img src=\\\"../images/picture/fa4b22748b3b99be440e6ee0fdd372ac.png\\\" alt=\\\"\\\"></a></li>            <li><a href=\\\"\\\"><img src=\\\"../images/picture/9ced09fc8d5b2ad7e5612066a9c43982.gif\\\" alt=\\\"\\\"></a></li>            <li><a href=\\\"\\\"><img src=\\\"../images/picture/78682c902e0d105619ec59fbe67ad79f.jpg\\\" alt=\\\"\\\"></a></li>            <li><a href=\\\"\\\"><img src=\\\"../images/picture/2b15eb4918c616744b134c346ad7cb97.jpg\\\" alt=\\\"\\\"></a></li>            <li><a href=\\\"\\\"><img src=\\\"../images/picture/f2759323cf2f20ae14d81fdcd7cd3abc.jpg\\\" alt=\\\"\\\"></a></li>        </ul>        <img class=\\\"line\\\" src=\\\"../images/061a732098b68f85c913833d24f70d11.png\\\" alt=\\\"\\\">        <ul class=\\\"recommend-2\\\">            <li><a href=\\\"\\\"><img src=\\\"../images/picture/f92d613c472fdadfc967d7b22993076b.jpg\\\" alt=\\\"\\\"></a></li>            <li><a href=\\\"\\\"><img src=\\\"../images/picture/6ef09fe7cd2e52c8fa41c3dd23c718c5.jpg\\\" alt=\\\"\\\"></a></li>        </ul>        <ul class=\\\"recommend-3\\\">            <li><a href=\\\"\\\"><img src=\\\"../images/picture/5ff1389f4077c5b354355850f33c4eb8.jpg\\\" alt=\\\"\\\"></a></li>            <li><a href=\\\"\\\"><img src=\\\"../images/picture/5ff1389f4077c5b354355850f33c4eb8.jpg\\\" alt=\\\"\\\"></a></li>            <li><a href=\\\"\\\"><img src=\\\"../images/picture/5ff1389f4077c5b354355850f33c4eb8.jpg\\\" alt=\\\"\\\"></a></li>        </ul>        <ul class=\\\"title1\\\">            <li>精选</li>            <li>运动</li>            <li>服饰</li>            <li>鞋靴</li>            <li>全球购</li>            <li>儿童</li>        </ul>        <dl>            <dt><img src=\\\"../images/picture/b9789f2c0d638a5053904b6259449247.jpg\\\" alt=\\\"\\\"></dt>            <dd><span>29元起</span>夏装专场好货小价</dd>        </dl>    </main>    <nav>        <ul>            <li><img src=\\\"../images/5ad23fb8dfc7aa8e31c813638b20ef71.png\\\" alt=\\\"\\\"></li>            <li><img src=\\\"../images/4a5688fa10daa66e2135d6d6879abb44.png\\\" alt=\\\"\\\"></li>            <li><img src=\\\"../images/eb71058107e3fb853edec99fd5513648.png\\\" alt=\\\"\\\"></li>            <li><img src=\\\"../images/5da9837e90e63c0dbac54e7a57a0185c.png\\\" alt=\\\"\\\"></li>            <li><img src=\\\"../images/02ef4a90210a687e4b725ca0bf64dcde.png\\\" alt=\\\"\\\"></li>        </ul>    </nav></div>\"\n\n//# sourceURL=webpack:///./src/views/index.html?");

/***/ })

/******/ });