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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/loading */ "./src/scenes/loading.js");
/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/menu */ "./src/scenes/menu.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game =
/*#__PURE__*/
function () {
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height;

    _classCallCheck(this, Game);

    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](width, height);
    this.screen.loadImages({
      orc: '../img/orc.png',
      player: '../img/player.png',
      cat: '../img/cat.png',
      title: '../img/title.png',
      tiles: '../img/tiles.png'
    });
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_3__["Scene"].LOADED:
          return this.scenes.menu;
          break;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_3__["Scene"].WORKING) {
        this.currentScene = this.changeScene(this.currentScene.status);
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/image-loader.js":
/*!*****************************!*\
  !*** ./src/image-loader.js ***!
  \*****************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoader =
/*#__PURE__*/
function () {
  function ImageLoader(imageFiles) {
    _classCallCheck(this, ImageLoader);

    this.imageFiles = imageFiles;
    this.images = {};
  }

  _createClass(ImageLoader, [{
    key: "load",
    value: function load() {
      var promises = [];

      for (var name in this.imageFiles) {
        promises.push(this.loadImage(name, this.imageFiles[name]));
      }

      return Promise.all(promises);
    }
  }, {
    key: "loadImage",
    value: function loadImage(name, src) {
      var _this = this;

      return new Promise(function (resolve) {
        var image = new Image();
        _this.images[name] = image;

        image.onload = function () {
          return resolve(name);
        };

        image.src = src;
      });
    }
  }]);

  return ImageLoader;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  var miniFantasy = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  miniFantasy.run();
};

console.log("И сейчас работает и сейчас");

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene =
/*#__PURE__*/
function () {
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
    this.status = this.constructor.WORKING;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.status = this.constructor.WORKING;
    }
  }, {
    key: "finish",
    value: function finish(status) {
      this.status = status;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }], [{
    key: "WORKING",
    get: function get() {
      return 'WORKING';
    }
  }, {
    key: "LOADED",
    get: function get() {
      return 'LOADED';
    }
  }, {
    key: "START_GAME",
    get: function get() {
      return 'START_GAME';
    }
  }, {
    key: "GAME_OVER",
    get: function get() {
      return 'GAME_OVER';
    }
  }, {
    key: "GAME_WIN",
    get: function get() {
      return 'GAME_WIN';
    }
  }, {
    key: "FINISHED",
    get: function get() {
      return 'FINISHED';
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Loading =
/*#__PURE__*/
function (_Scene) {
  _inherits(Loading, _Scene);

  function Loading(game) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, game));
    _this.loadedAt = 0;
    return _this;
  }

  _createClass(Loading, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Loading.prototype), "init", this).call(this);

      this.loadedAt = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {
        this.loadedAt = time;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].LOADED);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill("#000000");
      this.game.screen.print(50, 70, "Loading...");

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/menu.js":
/*!****************************!*\
  !*** ./src/scenes/menu.js ***!
  \****************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Menu =
/*#__PURE__*/
function (_Scene) {
  _inherits(Menu, _Scene);

  function Menu(game) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, game));
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Menu.prototype), "init", this).call(this);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.game.screen.drawImage(0, 0, 'title');

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-loader */ "./src/image-loader.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Screen =
/*#__PURE__*/
function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
    this.images = {};
    this.isImagesLoaded = false;
  }

  _createClass(Screen, [{
    key: "loadImages",
    value: function loadImages(imageFiles) {
      var _this = this;

      var loader = new _image_loader__WEBPACK_IMPORTED_MODULE_0__["ImageLoader"](imageFiles);
      loader.load().then(function (names) {
        _this.images = Object.assign(_this.images, loader.images);
        _this.isImagesLoaded = true;
        console.log(names);
      });
    }
  }, {
    key: "createCanvas",
    value: function createCanvas(width, height) {
      var elements = document.getElementsByTagName('canvas');
      var canvas = elements[0] || document.createElement('canvas');
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
      return canvas;
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "print",
    value: function print(x, y, text) {
      this.context.fillStyle = "#FFFFFF";
      this.context.font = "22px Georgia";
      this.context.fillText(text, x, y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(x, y, imageName) {
      this.context.drawImage(this.images[imageName], x, y);
    }
  }]);

  return Screen;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyJdLCJuYW1lcyI6WyJHYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwicGxheWVyIiwiY2F0IiwidGl0bGUiLCJ0aWxlcyIsInNjZW5lcyIsImxvYWRpbmciLCJMb2FkaW5nIiwibWVudSIsIk1lbnUiLCJjdXJyZW50U2NlbmUiLCJpbml0Iiwic3RhdHVzIiwiU2NlbmUiLCJMT0FERUQiLCJ0aW1lIiwiV09SS0lORyIsImNoYW5nZVNjZW5lIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJJbWFnZUxvYWRlciIsImltYWdlRmlsZXMiLCJpbWFnZXMiLCJwcm9taXNlcyIsIm5hbWUiLCJwdXNoIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwid2luZG93IiwibWluaUZhbnRhc3kiLCJydW4iLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsImNvbnN0cnVjdG9yIiwibG9hZGVkQXQiLCJpc0ltYWdlc0xvYWRlZCIsImZpbmlzaCIsInVwZGF0ZSIsImZpbGwiLCJwcmludCIsImRyYXdJbWFnZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb2xvciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieCIsInkiLCJ0ZXh0IiwiZm9udCIsImZpbGxUZXh0IiwiaW1hZ2VOYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsSUFBYjtBQUFBO0FBQUE7QUFDSSxrQkFBK0M7QUFBQSxtRkFBSixFQUFJO0FBQUEsMEJBQWpDQyxLQUFpQztBQUFBLFFBQWpDQSxLQUFpQywyQkFBekIsR0FBeUI7QUFBQSwyQkFBcEJDLE1BQW9CO0FBQUEsUUFBcEJBLE1BQW9CLDRCQUFYLEdBQVc7O0FBQUE7O0FBQzNDLFNBQUtDLE1BQUwsR0FBYyxJQUFJQyw4Q0FBSixDQUFXSCxLQUFY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QUFDRyxJQUFULENBQWNDLFdBQWQsQ0FBMEJmLE1BQTFCO0FBQ0FBLFlBQU0sQ0FBQ3RELEtBQVAsR0FBZUEsS0FBZjtBQUNBc0QsWUFBTSxDQUFDckQsTUFBUCxHQUFnQkEsTUFBaEI7QUFDQSxhQUFPcUQsTUFBUDtBQUNIO0FBMUJMO0FBQUE7QUFBQSx5QkEyQlNnQixLQTNCVCxFQTJCZ0I7QUFDUixXQUFLZCxPQUFMLENBQWFlLFNBQWIsR0FBeUJELEtBQXpCO0FBQ0EsV0FBS2QsT0FBTCxDQUFhZ0IsUUFBYixDQUFzQixDQUF0QixFQUF3QixDQUF4QixFQUEwQixLQUFLeEUsS0FBL0IsRUFBc0MsS0FBS0MsTUFBM0M7QUFDSDtBQTlCTDtBQUFBO0FBQUEsMEJBK0JVd0UsQ0EvQlYsRUErQmFDLENBL0JiLEVBK0JnQkMsSUEvQmhCLEVBK0JzQjtBQUNkLFdBQUtuQixPQUFMLENBQWFlLFNBQWIsR0FBeUIsU0FBekI7QUFDQSxXQUFLZixPQUFMLENBQWFvQixJQUFiLEdBQW9CLGNBQXBCO0FBQ0EsV0FBS3BCLE9BQUwsQ0FBYXFCLFFBQWIsQ0FBc0JGLElBQXRCLEVBQTRCRixDQUE1QixFQUErQkMsQ0FBL0I7QUFDSDtBQW5DTDtBQUFBO0FBQUEsOEJBcUNjRCxDQXJDZCxFQXFDaUJDLENBckNqQixFQXFDb0JJLFNBckNwQixFQXFDK0I7QUFDdkIsV0FBS3RCLE9BQUwsQ0FBYUgsU0FBYixDQUF1QixLQUFLekIsTUFBTCxDQUFZa0QsU0FBWixDQUF2QixFQUErQ0wsQ0FBL0MsRUFBa0RDLENBQWxEO0FBQ0g7QUF2Q0w7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL21pbmktZmFudGFzeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSBcIi4vc2NyZWVuXCI7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiLi9zY2VuZXMvbG9hZGluZ1wiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4vc2NlbmVzL21lbnVcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi9zY2VuZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoe3dpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4od2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4ubG9hZEltYWdlcyh7XHJcbiAgICAgICAgICAgIG9yYzogJy4uL2ltZy9vcmMucG5nJyxcclxuICAgICAgICAgICAgcGxheWVyOiAnLi4vaW1nL3BsYXllci5wbmcnLFxyXG4gICAgICAgICAgICBjYXQ6ICcuLi9pbWcvY2F0LnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnLi4vaW1nL3RpdGxlLnBuZycsXHJcbiAgICAgICAgICAgIHRpbGVzOiAnLi4vaW1nL3RpbGVzLnBuZydcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNjZW5lcyA9IHtcclxuICAgICAgICAgICAgbG9hZGluZzogbmV3IExvYWRpbmcodGhpcyksXHJcbiAgICAgICAgICAgIG1lbnU6IG5ldyBNZW51KHRoaXMpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzLmxvYWRpbmc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNjZW5lKHN0YXR1cykge1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuTE9BREVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnJhbWUodGltZSkge1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyAhPSBTY2VuZS5XT1JLSU5HKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihpbWFnZUZpbGVzKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZUZpbGVzID0gaW1hZ2VGaWxlcztcclxuICAgICAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuaW1hZ2VGaWxlcykge1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZEltYWdlKG5hbWUsIHRoaXMuaW1hZ2VGaWxlc1tuYW1lXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJbWFnZShuYW1lLCBzcmMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+e1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlc1tuYW1lXSA9IGltYWdlO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKG5hbWUpO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1pbmlGYW50YXN5ID0gbmV3IEdhbWUoKTtcclxuICAgIG1pbmlGYW50YXN5LnJ1bigpO1xyXG59O1xyXG5cclxuY29uc29sZS5sb2coXCLQmCDRgdC10LnRh9Cw0YEg0YDQsNCx0L7RgtCw0LXRgiDQuCDRgdC10LnRh9Cw0YFcIik7IiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgV09SS0lORygpIHsgcmV0dXJuICdXT1JLSU5HJzsgfVxyXG4gICAgc3RhdGljIGdldCBMT0FERUQoKSB7IHJldHVybiAnTE9BREVEJzsgfVxyXG4gICAgc3RhdGljIGdldCBTVEFSVF9HQU1FKCkgeyByZXR1cm4gJ1NUQVJUX0dBTUUnOyB9XHJcbiAgICBzdGF0aWMgZ2V0IEdBTUVfT1ZFUigpIHsgcmV0dXJuICdHQU1FX09WRVInOyB9XHJcbiAgICBzdGF0aWMgZ2V0IEdBTUVfV0lOKCkgeyByZXR1cm4gJ0dBTUVfV0lOJzsgfVxyXG4gICAgc3RhdGljIGdldCBGSU5JU0hFRCgpIHsgcmV0dXJuICdGSU5JU0hFRCc7IH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gICAgfVxyXG4gICAgZmluaXNoKHN0YXR1cykge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCA9PSAwICYmIHRoaXMuZ2FtZS5zY3JlZW4uaXNJbWFnZXNMb2FkZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZEF0ID0gdGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGVkQXQgIT0gMCAmJiAodGltZSAtIHRoaXMubG9hZGVkQXQpID4gNTAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkxPQURFRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKFwiIzAwMDAwMFwiKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDUwLDcwLCBcIkxvYWRpbmcuLi5cIik7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51IGV4dGVuZHMgU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IgKGdhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZScpO1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9pbWFnZS1sb2FkZXInXHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yICh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSW1hZ2VzKGltYWdlRmlsZXMpIHtcclxuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VGaWxlcyk7XHJcbiAgICAgICAgbG9hZGVyLmxvYWQoKS50aGVuKChuYW1lcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlcyA9IE9iamVjdC5hc3NpZ24odGhpcy5pbWFnZXMsIGxvYWRlci5pbWFnZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmFtZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpO1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBlbGVtZW50c1swXSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG4gICAgZmlsbChjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwwLHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHByaW50KHgsIHksIHRleHQpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCIjRkZGRkZGXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjIycHggR2VvcmdpYVwiO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SW1hZ2UoeCwgeSwgaW1hZ2VOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLCB4LCB5KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=