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

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
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


var Player =
/*#__PURE__*/
function (_Body) {
  _inherits(Player, _Body);

  function Player(control) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, {
      imageName: "player",
      speed: 70
    }));
    _this.control = control;
    _this.arrow = false;
    return _this;
  }

  _createClass(Player, [{
    key: "addArrow",
    value: function addArrow(arrow) {
      this.arrow = arrow;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.control.fire) {
        if (this.arrow) this.shoot(this.arrow);
      } else if (this.control.up) {
        this.walk("up");
      } else if (this.control.down) {
        this.walk("down");
      } else if (this.control.left) {
        this.walk("left");
      } else if (this.control.right) {
        this.walk("right");
      } else {
        this.stand(this.velocity.direction);
      }

      _get(_getPrototypeOf(Player.prototype), "update", this).call(this, time);
    }
  }]);

  return Player;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/*! exports provided: AI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AI", function() { return AI; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AI =
/*#__PURE__*/
function () {
  function AI() {
    _classCallCheck(this, AI);

    this.body = null;
  }

  _createClass(AI, [{
    key: "control",
    value: function control(body) {
      this.body = body;
    }
  }, {
    key: "update",
    value: function update(time) {}
  }]);

  return AI;
}();

/***/ }),

/***/ "./src/ais/dummy.js":
/*!**************************!*\
  !*** ./src/ais/dummy.js ***!
  \**************************/
/*! exports provided: Dummy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dummy", function() { return Dummy; });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ai */ "./src/ai.js");
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


var Dummy =
/*#__PURE__*/
function (_AI) {
  _inherits(Dummy, _AI);

  function Dummy() {
    var _this;

    _classCallCheck(this, Dummy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dummy).call(this));
    _this.duration = 1000;
    _this.direction = "down";
    _this.lastTime = 0;
    return _this;
  }

  _createClass(Dummy, [{
    key: "changeDirection",
    value: function changeDirection() {
      this.direction = "down,up,left,right".split(',')[Math.floor(Math.random() * 4)];
    }
  }, {
    key: "update",
    value: function update(time) {
      if (time - this.lastTime > this.duration) {
        this.changeDirection();
        this.lastTime = time;
      }

      this.body.walk(this.direction);

      _get(_getPrototypeOf(Dummy.prototype), "update", this).call(this, time);
    }
  }]);

  return Dummy;
}(_ai__WEBPACK_IMPORTED_MODULE_0__["AI"]);

/***/ }),

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Animation =
/*#__PURE__*/
function (_Sprite) {
  _inherits(Animation, _Sprite);

  function Animation(_ref) {
    var _this;

    var imageName = _ref.imageName,
        frames = _ref.frames,
        speed = _ref.speed,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? true : _ref$autorun,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, {
      imageName: imageName,
      sourceX: frames[0].sx,
      sourceY: frames[0].sy,
      width: width,
      height: height
    }));
    _this.frames = frames;
    _this.speed = speed;
    _this.repeat = repeat;
    _this.running = autorun;
    _this.lastTime = 0;
    _this.currentFrame = 0;
    _this.totalFrames = _this.frames.length;
    _this.onEnd = null;
    return _this;
  }

  _createClass(Animation, [{
    key: "setFrame",
    value: function setFrame(index) {
      this.currentFrame = index;
      this.sourceX = this.frames[index].sx;
      this.sourceY = this.frames[index].sy;
    }
  }, {
    key: "run",
    value: function run() {
      if (!this.running) {
        this.setFrame(0);
        this.running = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    }
  }, {
    key: "nexFrame",
    value: function nexFrame() {
      if (this.currentFrame + 1 == this.totalFrames) {
        if (this.onEnd) {
          this.onEnd();
        }

        if (this.repeat) {
          this.setFrame(0);
          return;
        }

        this.stop();
        return;
      }

      this.setFrame(this.currentFrame + 1);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (!this.running) {
        return;
      }

      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      }

      if (time - this.lastTime > this.speed) {
        this.nexFrame();
        this.lastTime = time;
      }
    }
  }]);

  return Animation;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _character_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-sheet */ "./src/character-sheet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Body =
/*#__PURE__*/
function () {
  function Body(_ref) {
    var _this = this;

    var imageName = _ref.imageName,
        speed = _ref.speed;

    _classCallCheck(this, Body);

    this.x = 0;
    this.y = 0;
    this.speed = speed;
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]("down", 0);
    this.lastTime = 0;
    this.animations = {};
    this.collisionShape = {
      x: 19,
      y: 44,
      width: 25,
      height: 19
    };
    this.isShooting = false;
    var animationSheet = new _character_sheet__WEBPACK_IMPORTED_MODULE_1__["CharacterSheet"]({
      imageName: imageName
    });
    "walk_down,walk_up,walk_left,walk_right".split(",").forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name);
    });
    "shoot_down,shoot_up,shoot_left,shoot_right".split(",").forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 20, false);
    });
    this.stand("down");
  }

  _createClass(Body, [{
    key: "shoot",
    value: function shoot(arrow) {
      var _this2 = this;

      if (!this.isShooting) {
        this.isShooting = true;
        this.view = this.animations["shoot_" + this.velocity.direction];

        this.view.onEnd = function () {
          _this2.isShooting = false;
          arrow.fly(_this2.x, _this2.y, _this2.velocity.direction);
        };

        this.view.run();
      }
    }
  }, {
    key: "walk",
    value: function walk(direction) {
      if (this.isShooting) return;
      this.velocity.setDirection(direction, this.speed);
      this.view = this.animations["walk_" + direction];
      this.view.run();
    }
  }, {
    key: "stand",
    value: function stand(direction) {
      if (this.isShooting) return;
      this.velocity.setDirection(direction, 0);
      this.view = this.animations["walk_" + direction];
      this.view.stop();
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      }

      if (!this.isShooting) {
        this.velocity.move(this, time - this.lastTime);
      }

      this.velocity.move(this, time - this.lastTime);
      this.lastTime = time;
      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y));
      this.view.update(time);
    }
  }]);

  return Body;
}();

/***/ }),

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Camera =
/*#__PURE__*/
function () {
  function Camera() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height,
        _ref$limitX = _ref.limitX,
        limitX = _ref$limitX === void 0 ? 500000 : _ref$limitX,
        _ref$limitY = _ref.limitY,
        limitY = _ref$limitY === void 0 ? 500000 : _ref$limitY,
        _ref$scrollEdge = _ref.scrollEdge,
        scrollEdge = _ref$scrollEdge === void 0 ? 200 : _ref$scrollEdge;

    _classCallCheck(this, Camera);

    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.limitX = limitX;
    this.limitY = limitY;
    this.watchObject = false;
    this.obj = null;
    this.scrollEdge = scrollEdge;
  }

  _createClass(Camera, [{
    key: "watch",
    value: function watch(obj) {
      this.watchObject = true;
      this.obj = obj;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.watchObject) {
        if (this.obj.x > this.x + this.width - this.scrollEdge) {
          this.x = Math.min(this.limitX, this.obj.x - this.width + this.scrollEdge);
        }

        if (this.obj.x < this.x + this.scrollEdge) {
          this.x = Math.max(0, this.obj.x - this.scrollEdge);
        }

        if (this.obj.y > this.y + this.height - this.scrollEdge) {
          this.y = Math.min(this.limitY, this.obj.y - this.height + this.scrollEdge);
        }

        if (this.obj.y < this.y + this.scrollEdge) {
          this.y = Math.max(0, this.obj.y - this.scrollEdge);
        }
      }
    }
  }]);

  return Camera;
}();

/***/ }),

/***/ "./src/cat-black.js":
/*!**************************!*\
  !*** ./src/cat-black.js ***!
  \**************************/
/*! exports provided: CatBlack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatBlack", function() { return CatBlack; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _ais_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ais/dummy */ "./src/ais/dummy.js");
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



var CatBlack =
/*#__PURE__*/
function (_Body) {
  _inherits(CatBlack, _Body);

  function CatBlack() {
    var _this;

    _classCallCheck(this, CatBlack);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CatBlack).call(this, {
      imageName: "catBlack",
      speed: 7
    }));
    _this.ai = new _ais_dummy__WEBPACK_IMPORTED_MODULE_1__["Dummy"]();

    _this.ai.control(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(CatBlack, [{
    key: "update",
    value: function update(time) {
      this.ai.update(time);
      return _get(_getPrototypeOf(CatBlack.prototype), "update", this).call(this, time);
    }
  }]);

  return CatBlack;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/character-sheet.js":
/*!********************************!*\
  !*** ./src/character-sheet.js ***!
  \********************************/
/*! exports provided: CharacterSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheet", function() { return CharacterSheet; });
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite-sheet */ "./src/sprite-sheet.js");
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


var CharacterSheet =
/*#__PURE__*/
function (_SpriteSheet) {
  _inherits(CharacterSheet, _SpriteSheet);

  function CharacterSheet(_ref) {
    var _this;

    var imageName = _ref.imageName;

    _classCallCheck(this, CharacterSheet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterSheet).call(this, {
      imageName: imageName,
      imageWidth: 832,
      imageHeight: 1344
    }));
    _this.sequences = _this.getSequences();
    return _this;
  }

  _createClass(CharacterSheet, [{
    key: "getSequences",
    value: function getSequences() {
      var data = __webpack_require__(/*! ./maps/animations.json */ "./src/maps/animations.json");

      var sequences = {};
      data.layers.forEach(function (layer) {
        sequences[layer.name] = layer.data.filter(function (i) {
          return i > 0;
        });
      });
      return sequences;
    }
  }, {
    key: "getAnimation",
    value: function getAnimation(name) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return _get(_getPrototypeOf(CharacterSheet.prototype), "getAnimation", this).call(this, this.sequences[name], speed, repeat, autorun);
    }
  }]);

  return CharacterSheet;
}(_sprite_sheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"]);

/***/ }),

/***/ "./src/collider.js":
/*!*************************!*\
  !*** ./src/collider.js ***!
  \*************************/
/*! exports provided: Collider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collider", function() { return Collider; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Collider =
/*#__PURE__*/
function () {
  function Collider() {
    _classCallCheck(this, Collider);

    this.staticShapes = [];
    this.bodies = [];
  }

  _createClass(Collider, [{
    key: "addStaticShapes",
    value: function addStaticShapes(data) {
      var _this = this;

      data.layers.forEach(function (layer) {
        if (layer.type == "objectgroup") {
          var _this$staticShapes;

          (_this$staticShapes = _this.staticShapes).push.apply(_this$staticShapes, _toConsumableArray(layer.objects));
        }
      });
    }
  }, {
    key: "addKinematicBody",
    value: function addKinematicBody(body) {
      this.bodies.push({
        x: body.x,
        y: body.y,
        obj: body
      });
    }
  }, {
    key: "update",
    value: function update(time) {
      this.checkStatic(time);
    }
  }, {
    key: "checkStatic",
    value: function checkStatic(time) {
      var _this2 = this;

      this.bodies.forEach(function (body) {
        var oldX = body.x;
        var oldY = body.y;
        var x = body.obj.x;
        var y = body.obj.y; //moving right

        if (x > oldX) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldX - 1 + body.obj.collisionShape.x + body.obj.collisionShape.width < shape.x && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.x) - body.obj.collisionShape.x - body.obj.collisionShape.width;
            }
          });
        } //moving left


        if (x < oldX) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldX + 1 + body.obj.collisionShape.x > shape.x + shape.width && x + body.obj.collisionShape.x < shape.x + shape.width && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              x = Math.max(x + body.obj.collisionShape.x, shape.x + shape.width) - body.obj.collisionShape.x;
            }
          });
        } //moving down


        if (y > oldY) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height < shape.y && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, shape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;
            }
          });
        } //moving up


        if (y < oldY) {
          _this2.staticShapes.forEach(function (shape) {
            if (oldY + 1 + body.obj.collisionShape.y > shape.y + shape.height && y + body.obj.collisionShape.y < shape.y + shape.height && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.max(y + body.obj.collisionShape.y, shape.y + shape.height) - body.obj.collisionShape.y;
            }
          });
        }

        body.x = x;
        body.y = y;
        body.obj.x = x;
        body.obj.y = y;
      });
    }
  }]);

  return Collider;
}();

/***/ }),

/***/ "./src/control-state.js":
/*!******************************!*\
  !*** ./src/control-state.js ***!
  \******************************/
/*! exports provided: ControlState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlState", function() { return ControlState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ControlState =
/*#__PURE__*/
function () {
  function ControlState() {
    var _this = this;

    _classCallCheck(this, ControlState);

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.fire = false;
    this.keyMap = new Map([[37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'fire']]);
    document.addEventListener('keydown', function (event) {
      return _this.update(event, true);
    });
    document.addEventListener('keyup', function (event) {
      return _this.update(event, false);
    });
  }

  _createClass(ControlState, [{
    key: "update",
    value: function update(event, pressed) {
      if (this.keyMap.has(event.keyCode)) {
        event.preventDefault();
        event.stopPropagation();
        this[this.keyMap.get(event.keyCode)] = pressed;
        console.log(this);
      }
    }
  }]);

  return ControlState;
}();

/***/ }),

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
/* harmony import */ var _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/game-level */ "./src/scenes/game-level.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _control_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-state */ "./src/control-state.js");
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
      //orc: '../img/orc.png',
      ghost: '../img/ghost.png',
      player: '../img/player.png',
      catBlack: '../img/CatBlack.png',
      title: '../img/title.png',
      tiles: '../img/tiles.png'
    });
    this.control = new _control_state__WEBPACK_IMPORTED_MODULE_5__["ControlState"]();
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this),
      gameLevel: new _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__["GameLevel"](this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].LOADED:
          return this.scenes.menu;

        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].START_GAME:
          return this.scenes.gameLevel;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].WORKING) {
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

/***/ "./src/ghost.js":
/*!**********************!*\
  !*** ./src/ghost.js ***!
  \**********************/
/*! exports provided: Ghost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ghost", function() { return Ghost; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _ais_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ais/dummy */ "./src/ais/dummy.js");
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



var Ghost =
/*#__PURE__*/
function (_Body) {
  _inherits(Ghost, _Body);

  function Ghost() {
    var _this;

    _classCallCheck(this, Ghost);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ghost).call(this, {
      imageName: "ghost",
      speed: 20
    }));
    _this.ai = new _ais_dummy__WEBPACK_IMPORTED_MODULE_1__["Dummy"]();

    _this.ai.control(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(Ghost, [{
    key: "update",
    value: function update(time) {
      this.ai.update(time);
      return _get(_getPrototypeOf(Ghost.prototype), "update", this).call(this, time);
    }
  }]);

  return Ghost;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

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

/***/ "./src/maps/animations.json":
/*!**********************************!*\
  !*** ./src/maps/animations.json ***!
  \**********************************/
/*! exports provided: compressionlevel, height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"compressionlevel\":-1,\"height\":1,\"infinite\":false,\"layers\":[{\"data\":[1,2,3,4,5,6,7,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":1,\"name\":\"spell_up\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[14,15,16,17,18,19,20,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":4,\"name\":\"spell_left\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[27,28,29,30,31,32,33,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":5,\"name\":\"spell_down\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[40,41,42,43,44,45,46,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":6,\"name\":\"spell_right\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[53,54,55,56,57,58,59,60,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":7,\"name\":\"stab_up\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[66,67,68,69,70,71,72,73,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":8,\"name\":\"stab_left\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[79,80,81,82,83,84,85,86,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":9,\"name\":\"stab_down\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[92,93,94,95,96,97,98,99,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":10,\"name\":\"stab_right\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[105,106,107,108,109,110,111,112,113,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":11,\"name\":\"walk_up\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[118,119,120,121,122,123,124,125,126,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":12,\"name\":\"walk_left\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[131,132,133,134,135,136,137,138,139,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":13,\"name\":\"walk_down\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[144,145,146,147,148,149,150,151,152,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":14,\"name\":\"walk_right\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[157,158,159,160,161,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":15,\"name\":\"cut_up\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[170,171,172,173,174,175,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":16,\"name\":\"cut_left\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[183,184,185,186,187,188,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":17,\"name\":\"cut_down\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[196,197,198,199,200,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":18,\"name\":\"cut_right\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[209,210,211,212,213,214,215,216,217,218,219,220,221,0,0,0,0,0,0,0],\"height\":1,\"id\":19,\"name\":\"shoot_up\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[222,223,224,225,226,227,228,229,230,231,232,233,234,0,0,0,0,0,0,0],\"height\":1,\"id\":20,\"name\":\"shoot_left\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[235,236,237,238,239,240,241,242,243,244,245,246,247,0,0,0,0,0,0,0],\"height\":1,\"id\":21,\"name\":\"shoot_down\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[248,249,250,251,252,253,254,255,256,257,258,259,260,0,0,0,0,0,0,0],\"height\":1,\"id\":22,\"name\":\"shoot_right\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[261,262,263,264,265,266,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"id\":23,\"name\":\"death\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0}],\"nextlayerid\":24,\"nextobjectid\":1,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.0\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"../../resources/playertiles.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":20}");

/***/ }),

/***/ "./src/maps/level1.json":
/*!******************************!*\
  !*** ./src/maps/level1.json ***!
  \******************************/
/*! exports provided: compressionlevel, editorsettings, height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"compressionlevel\":0,\"editorsettings\":{\"export\":{\"format\":\"json\"}},\"height\":20,\"infinite\":false,\"layers\":[{\"data\":[88,88,89,88,88,88,88,88,88,88,88,88,88,88,88,20,88,88,88,88,88,88,89,88,88,88,88,88,88,88,88,88,88,88,88,20,48,49,49,49,88,88,89,88,88,88,88,88,88,88,88,88,88,88,88,20,70,88,88,88,88,88,89,88,88,88,88,88,88,88,88,88,88,88,88,20,70,88,88,88,88,88,79,49,49,49,50,88,88,88,88,88,88,88,88,20,70,88,88,88,88,88,88,88,88,88,57,88,88,88,88,88,88,88,88,20,70,88,88,88,88,88,88,88,88,88,57,88,88,88,88,88,88,88,88,20,79,49,49,47,88,88,88,88,88,88,57,88,88,88,88,88,88,88,88,20,88,88,88,77,88,88,48,49,49,49,80,88,88,88,88,88,88,88,88,20,88,88,88,77,88,88,58,88,88,88,88,88,88,48,49,49,49,49,49,92,49,50,88,77,88,88,58,88,88,88,88,88,88,77,88,88,88,88,88,20,88,70,88,77,88,88,58,88,88,88,88,88,88,77,88,88,88,88,88,20,88,70,88,77,88,88,68,86,86,86,86,86,86,87,88,88,88,88,88,20,88,70,88,77,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,20,88,70,88,77,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,20,48,80,88,77,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,20,58,88,88,77,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,20,58,88,88,77,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,20,68,86,86,87,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,20,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,39,40,38,88,88,88],\"height\":20,\"id\":7,\"name\":\"layer1\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[1,0,0,94,94,94,94,94,1,1,93,93,93,0,0,0,93,94,94,93,11,0,0,2,0,0,0,0,11,11,0,0,0,0,0,0,0,0,0,0,1,0,0,12,3,62,2,3,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,13,72,12,13,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,83,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,93,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,0,12,0,0,0,0,0,0,0,0,83,0,0,0,0,0,0,0,13,14,0,0,0,0,3,61,0,0,84,0,93,0,0,0,0,0,6,0,0,0,0,1,0,0,13,71,0,0,94,0,0,0,0,0,45,3,0,0,0,0,0,11,0,0,0,0,0,0,0,0,84,0,0,0,55,13,0,0,3,44,1,0,0,0,8,84,83,83,0,0,94,0,0,0,0,0,0,0,13,54,11,0,10,0,0,94,93,93,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,0,73,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,94,0,0,0,1,0,0,0,84,0,0,0,0,0,83,0,0,0,0,0,0,0,0,0,11,0,0,0,94,0,1,2,2,2,93,0,0,0,1,0,1,0,0,0,0,0,0,3,44,0,11,12,12,12,2,0,0,0,11,0,11,0,0,0,1,0,0,13,54,0,1,73,0,0,12,0,0,0,0,0,0,0,0,84,11,0,0,0,84,0,11,0,0,0,0,0,0,0,0,0,0,0,0,94,0,0,0,84,94,84,1,1,1,2,1,83,83,84,0,0,0,0,0,0,0,0,0,94,0,94],\"height\":20,\"id\":8,\"name\":\"layer 2\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[84,0,0,0,83,0,0,0,0,0,0,0,84,84,0,0,0,0,0,0,94,0,0,0,93,0,0,0,0,83,73,0,94,94,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,93,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,83,83,83,0,0,0,0,0,0,0,0,0,0,84,0,0,0,0,0,0,93,93,93,0,0,0,0,0,0,0,0,0,0,94,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,83,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,93,0,0,0,0,0,0,0,84,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,94,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,84,83,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,94,93,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],\"height\":20,\"id\":9,\"name\":\"layer 3\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,83,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,93,93,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,84,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,94,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":20,\"id\":10,\"name\":\"layer 4\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,19,0,0,0,0,19,37,0,21,0,21,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,42,0,0,0,0,0,83,0,0,0,0,0,0,33,0,51,0,0,0,0,0,0,0,33,0,0,21,0,0,23,0,35,0,23,0,0,43,0,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0,6,0,0,0,7,0,0,0,21,21,0,0,0,0,0,0,0,42,23,0,0,0,0,33,0,23,19,0,0,0,0,81,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,37,0,0,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,0,23,0,0,18,0,0,0,0,53,0,0,0,0,0,0,0,0,26,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,53,0,0,0,0,18,0,0,0,0,0,0,0,35,0,82,15,0,22,36,0,0,31,0,0,21,0,21,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,27,0,16,0,0,21,0,0,0,0,0,37,0,0,0,0,0,82,0,0,0,0,0,0,0,0,0,15,0,23,0,33,0,0,0,0,0,0,0,0,0,34,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,21,0,19,0,0,0,0,43,0,21,0,0,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,33,0,0,0,0,0,32,0,0,0,0,0,31,0,0,0,33,0,0,0,0,0,0,0,0,0,0,37,0,0,0,0,21,0,0,0,0,0,0,0,37,81,81,81,81,37,0,0,31,0,0,0],\"height\":20,\"id\":11,\"name\":\"layer 5\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,81,81,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,31,0,0,0,0,0,0,0,0,0,0,0,25,0,0,0,0,43,0,0,0,0,0,0,0,0,0,0,0,0,0,53,0,0,0,0,0,0,0,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,51,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,81,81,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,0],\"height\":20,\"id\":12,\"name\":\"layer 6\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":14,\"name\":\"hitboxes\",\"objects\":[{\"height\":114,\"id\":274,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":41,\"x\":2,\"y\":1},{\"height\":97,\"id\":275,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":40,\"x\":3,\"y\":114},{\"height\":0,\"id\":276,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":0,\"x\":43,\"y\":211},{\"height\":83,\"id\":277,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":35,\"x\":3,\"y\":254},{\"height\":1,\"id\":278,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":3,\"x\":40,\"y\":338},{\"height\":32,\"id\":280,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":625,\"x\":205,\"y\":15},{\"height\":70,\"id\":282,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":31,\"x\":273,\"y\":48},{\"height\":48,\"id\":283,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23,\"x\":214,\"y\":101},{\"height\":63,\"id\":284,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":128,\"x\":257,\"y\":159},{\"height\":60,\"id\":286,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":26,\"x\":402,\"y\":157},{\"height\":55,\"id\":287,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":60,\"x\":450,\"y\":166},{\"height\":44,\"id\":288,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":533,\"y\":46},{\"height\":260,\"id\":289,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":16,\"x\":601,\"y\":46},{\"height\":24,\"id\":290,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":141,\"x\":615,\"y\":280},{\"height\":99,\"id\":291,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":26,\"x\":725,\"y\":246},{\"height\":67,\"id\":292,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22,\"x\":791,\"y\":46},{\"height\":42,\"id\":293,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":132,\"x\":809,\"y\":69},{\"height\":68,\"id\":294,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":25,\"x\":854,\"y\":108},{\"height\":66,\"id\":295,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":26,\"x\":917,\"y\":110},{\"height\":583,\"id\":301,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":28,\"x\":978,\"y\":-8},{\"height\":36,\"id\":302,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":237,\"x\":1030,\"y\":15},{\"height\":48,\"id\":303,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":32,\"x\":1039,\"y\":450},{\"height\":56,\"id\":304,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":17,\"x\":920,\"y\":503},{\"height\":58,\"id\":305,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":124,\"x\":641,\"y\":484},{\"height\":61,\"id\":306,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":21,\"x\":471,\"y\":344},{\"height\":57,\"id\":307,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":126,\"x\":257,\"y\":414},{\"height\":66,\"id\":308,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":20,\"x\":213,\"y\":301},{\"height\":65,\"id\":309,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":150,\"y\":305},{\"height\":58,\"id\":310,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":25,\"x\":22,\"y\":375},{\"height\":16,\"id\":311,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1239,\"x\":40,\"y\":-4},{\"height\":1,\"id\":312,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1,\"x\":1278,\"y\":11},{\"height\":54,\"id\":313,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":7,\"x\":-1,\"y\":206},{\"height\":937,\"id\":314,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":9,\"x\":-2,\"y\":336},{\"height\":67,\"id\":315,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":14,\"x\":1265,\"y\":11},{\"height\":1178,\"id\":316,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":10,\"x\":1268,\"y\":100},{\"height\":71,\"id\":317,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":12,\"x\":1115,\"y\":1208},{\"height\":23,\"id\":318,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":509,\"x\":0,\"y\":1255},{\"height\":6,\"id\":319,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":771,\"x\":508,\"y\":1272},{\"height\":46,\"id\":320,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":84,\"x\":951,\"y\":1233},{\"height\":609,\"id\":322,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":33,\"x\":978,\"y\":626},{\"height\":30,\"id\":323,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":19,\"x\":23,\"y\":530},{\"height\":24,\"id\":324,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":8,\"x\":11,\"y\":598},{\"height\":53,\"id\":325,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":60,\"x\":65,\"y\":617},{\"height\":52,\"id\":326,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":62,\"x\":4,\"y\":621},{\"height\":61,\"id\":327,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":122,\"x\":261,\"y\":679},{\"height\":64,\"id\":330,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":23,\"x\":405,\"y\":665},{\"height\":56,\"id\":331,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":25,\"x\":467,\"y\":543},{\"height\":59,\"id\":332,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":26,\"x\":530,\"y\":563},{\"height\":51,\"id\":333,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":53,\"x\":518,\"y\":709},{\"height\":52,\"id\":334,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":296,\"x\":4,\"y\":986},{\"height\":34,\"id\":335,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":91,\"x\":22,\"y\":1039},{\"height\":162,\"id\":336,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":20,\"x\":275,\"y\":950},{\"height\":57,\"id\":337,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":22,\"x\":342,\"y\":1057},{\"height\":54,\"id\":338,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":19,\"x\":22,\"y\":1122},{\"height\":60,\"id\":339,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":534,\"y\":993},{\"height\":51,\"id\":340,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":20,\"x\":662,\"y\":994},{\"height\":53,\"id\":341,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":26,\"x\":658,\"y\":831},{\"height\":53,\"id\":342,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":21,\"x\":661,\"y\":734},{\"height\":32,\"id\":343,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":55,\"x\":645,\"y\":657},{\"height\":50,\"id\":348,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":157,\"x\":728,\"y\":703},{\"height\":58,\"id\":349,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":100,\"x\":850,\"y\":733},{\"height\":176,\"id\":350,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":20,\"x\":919,\"y\":743},{\"height\":24,\"id\":351,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":28,\"x\":786,\"y\":768},{\"height\":50,\"id\":352,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":14,\"x\":857,\"y\":1147},{\"height\":56,\"id\":353,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":14,\"x\":922,\"y\":1059},{\"height\":97,\"id\":354,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":34,\"x\":1039,\"y\":629},{\"height\":38,\"id\":355,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":20,\"x\":1158,\"y\":456},{\"height\":14,\"id\":356,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":21,\"x\":1189,\"y\":254},{\"height\":61,\"id\":357,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":120,\"x\":1092,\"y\":996},{\"height\":61,\"id\":358,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":21,\"x\":1175,\"y\":883},{\"height\":54,\"id\":359,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":24,\"x\":1173,\"y\":1147}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0}],\"nextlayerid\":15,\"nextobjectid\":360,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.3.0\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"../../resources/tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1.2,\"width\":20}");

/***/ }),

/***/ "./src/projectile.js":
/*!***************************!*\
  !*** ./src/projectile.js ***!
  \***************************/
/*! exports provided: Projectile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projectile", function() { return Projectile; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Projectile =
/*#__PURE__*/
function () {
  function Projectile(direction, speed) {
    _classCallCheck(this, Projectile);

    this.x = 0;
    this.y = 0;
    this.speed = speed;
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](direction, speed);
    this.lastTime = 0;
    this.active = false;
  }

  _createClass(Projectile, [{
    key: "fly",
    value: function fly(x, y, direction) {
      this.x = x;
      this.y = y;
      this.velocity.setDirection(direction, this.speed);
      this.active = true;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      }

      this.velocity.move(this, time - this.lastTime);
      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y));
      this.lastTime = time;
    }
  }]);

  return Projectile;
}();

/***/ }),

/***/ "./src/projectiles/arrow.js":
/*!**********************************!*\
  !*** ./src/projectiles/arrow.js ***!
  \**********************************/
/*! exports provided: Arrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectile */ "./src/projectile.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
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



var Arrow =
/*#__PURE__*/
function (_Projectile) {
  _inherits(Arrow, _Projectile);

  function Arrow(direction, speed) {
    var _this;

    _classCallCheck(this, Arrow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Arrow).call(this, direction, speed));
    _this.sprites = {};
    var tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    _this.sprites["left"] = tiles.getSprite(95);
    _this.sprites["right"] = tiles.getSprite(96);
    _this.sprites["down"] = tiles.getSprite(97);
    _this.sprites["up"] = tiles.getSprite(98);
    _this.view = _this.sprites[direction];
    return _this;
  }

  _createClass(Arrow, [{
    key: "fly",
    value: function fly(x, y, direction) {
      _get(_getPrototypeOf(Arrow.prototype), "fly", this).call(this, x, y, direction);

      this.view = this.sprites[direction];
    }
  }]);

  return Arrow;
}(_projectile__WEBPACK_IMPORTED_MODULE_0__["Projectile"]);

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

/***/ "./src/scenes/game-level.js":
/*!**********************************!*\
  !*** ./src/scenes/game-level.js ***!
  \**********************************/
/*! exports provided: GameLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLevel", function() { return GameLevel; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
/* harmony import */ var _character_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../character-sheet */ "./src/character-sheet.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Player */ "./src/Player.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../camera */ "./src/camera.js");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../collider */ "./src/collider.js");
/* harmony import */ var _ghost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ghost */ "./src/ghost.js");
/* harmony import */ var _cat_black__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cat-black */ "./src/cat-black.js");
/* harmony import */ var _projectiles_arrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../projectiles/arrow */ "./src/projectiles/arrow.js");
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










var GameLevel =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameLevel, _Scene);

  function GameLevel(game) {
    var _this;

    _classCallCheck(this, GameLevel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameLevel).call(this, game));
    _this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    _this.tree = _this.tiles.getSprite(7);

    _this.tree.setXY(10, 10); //this.orcTiles = new CharacterSheet({imageName: "orc"});


    _this.ghost = new _ghost__WEBPACK_IMPORTED_MODULE_6__["Ghost"]();
    _this.ghost.x = 320;
    _this.ghost.y = 100;
    _this.catBlack = new _cat_black__WEBPACK_IMPORTED_MODULE_7__["CatBlack"]();
    _this.catBlack.x = 210;
    _this.catBlack.y = 210;
    _this.arrow = new _projectiles_arrow__WEBPACK_IMPORTED_MODULE_8__["Arrow"]("down", 200);
    _this.player = new _Player__WEBPACK_IMPORTED_MODULE_3__["Player"](_this.game.control);
    _this.player.x = 100;
    _this.player.y = 100;

    _this.player.addArrow(_this.arrow);

    _this.collider = new _collider__WEBPACK_IMPORTED_MODULE_5__["Collider"]();
    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      var mapData = __webpack_require__(/*! ../maps/level1.json */ "./src/maps/level1.json");

      this.map = this.game.screen.createMap("level1", mapData, this.tiles);
      this.mainCamera = new _camera__WEBPACK_IMPORTED_MODULE_4__["Camera"]({
        width: this.game.screen.width,
        height: this.game.screen.height,
        limitX: this.map.width - this.game.screen.width,
        limitY: this.map.height - this.game.screen.height
      });
      this.mainCamera.watch(this.player);
      this.game.screen.setCamera(this.mainCamera);
      this.collider.addStaticShapes(mapData);
      this.collider.addKinematicBody(this.player);
      this.collider.addKinematicBody(this.ghost);
      this.collider.addKinematicBody(this.catBlack);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.ghost.update(time);
      this.catBlack.update(time);
      this.player.update(time);
      this.collider.update(time);
      this.mainCamera.update(time);
      this.arrow.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map); // this.game.screen.drawSprite(this.tree);
      // this.game.screen.drawSprite(this.orc);

      this.game.screen.drawSprite(this.ghost.view);
      this.game.screen.drawSprite(this.catBlack.view);
      this.game.screen.drawSprite(this.player.view);

      if (this.arrow.active) {
        this.game.screen.drawSprite(this.arrow.view);
      }

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);
    }
  }]);

  return GameLevel;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

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
    key: "update",
    value: function update(time) {
      if (this.game.control.fire) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.drawImage(0, 0, 'title');
      this.game.screen.print(360, 580, "Нажмите пробел");

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
/* harmony import */ var _tile_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile-map */ "./src/tile-map.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
    this.camera = null;
    this.isCameraSet = false;
  }

  _createClass(Screen, [{
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
      this.isCameraSet = true;
    }
  }, {
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
    key: "createMap",
    value: function createMap(name, mapData, tileset) {
      var _this2 = this;

      var mapImage = document.createElement('canvas');
      mapImage.width = mapData.width * mapData.tilewidth;
      mapImage.height = mapData.height * mapData.tileheight;
      var mapContext = mapImage.getContext('2d');
      var hitboxes = [];
      var row, col;
      mapData.layers.forEach(function (layer) {
        if (layer.type == "tilelayer") {
          row = 0;
          col = 0;
          layer.data.forEach(function (index) {
            if (index > 0) {
              mapContext.drawImage(_this2.images[tileset.imageName], tileset.getSourceX(index), tileset.getSourceY(index), mapData.tilewidth, mapData.tileheight, col * mapData.tilewidth, row * mapData.tileheight, mapData.tilewidth, mapData.tileheight);
            }

            col++;

            if (col > mapData.width - 1) {
              col = 0;
              row++;
            }
          });
        }

        if (layer.type == "objectgroup") {
          hitboxes.push.apply(hitboxes, _toConsumableArray(layer.objects.map(function (obj) {
            return {
              x1: obj.x,
              x2: obj.x + obj.width,
              y1: obj.y,
              y2: obj.y + obj.height
            };
          })));
        }
      });
      this.images[name] = mapImage;
      return new _tile_map__WEBPACK_IMPORTED_MODULE_1__["TileMap"]({
        imageName: name,
        sourceX: 0,
        sourceY: 0,
        width: mapImage.width,
        height: mapImage.height,
        hitboxes: hitboxes
      });
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
      this.context.font = "38px Hangyaboly";
      this.context.fillText(text, x, y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(x, y, imageName) {
      this.context.drawImage(this.images[imageName], x, y);
    }
  }, {
    key: "drawSprite",
    value: function drawSprite(sprite) {
      var spriteX = sprite.x;
      var spriteY = sprite.y;

      if (this.isCameraSet) {
        spriteX -= this.camera.x;
        spriteY -= this.camera.y;
      }

      if (spriteX >= this.width || spriteY >= this.height || spriteX + sprite.width <= 0 || spriteY + sprite.height <= 0) {
        return;
      }

      var sourceX = sprite.sourceX + Math.abs(Math.min(0, spriteX));
      var sourceY = sprite.sourceY + Math.abs(Math.min(0, spriteY));
      var width = Math.min(this.width, spriteX + sprite.width) - Math.max(0, spriteX);
      var height = Math.min(this.height, spriteY + sprite.height) - Math.max(0, spriteY);
      this.context.drawImage(this.images[sprite.imageName], sourceX, sourceY, width, height, Math.max(0, spriteX), Math.max(0, spriteY), width, height);
    }
  }]);

  return Screen;
}();

/***/ }),

/***/ "./src/sprite-sheet.js":
/*!*****************************!*\
  !*** ./src/sprite-sheet.js ***!
  \*****************************/
/*! exports provided: SpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return SpriteSheet; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SpriteSheet =
/*#__PURE__*/
function () {
  function SpriteSheet(_ref) {
    var imageName = _ref.imageName,
        imageWidth = _ref.imageWidth,
        imageHeight = _ref.imageHeight,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, SpriteSheet);

    this.imageName = imageName;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }

  _createClass(SpriteSheet, [{
    key: "getAnimation",
    value: function getAnimation(indexes, speed) {
      var _this = this;

      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return new _animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]({
        imageName: this.imageName,
        frames: indexes.map(function (index) {
          return {
            sx: _this.getSourceX(index),
            sy: _this.getSourceY(index)
          };
        }),
        speed: speed,
        repeat: repeat,
        autorun: autorun,
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSprite",
    value: function getSprite(index) {
      return new _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
        imageName: this.imageName,
        sourceX: this.getSourceX(index),
        sourceY: this.getSourceY(index),
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSourceX",
    value: function getSourceX(index) {
      return --index * this.spriteWidth % this.imageWidth;
    }
  }, {
    key: "getSourceY",
    value: function getSourceY(index) {
      return Math.trunc(--index * this.spriteWidth / this.imageWidth) * this.spriteHeight;
    }
  }]);

  return SpriteSheet;
}();

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(_ref) {
    var imageName = _ref.imageName,
        sourceX = _ref.sourceX,
        sourceY = _ref.sourceY,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Sprite);

    this.imageName = imageName;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  }

  _createClass(Sprite, [{
    key: "setXY",
    value: function setXY(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Sprite;
}();

/***/ }),

/***/ "./src/tile-map.js":
/*!*************************!*\
  !*** ./src/tile-map.js ***!
  \*************************/
/*! exports provided: TileMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMap", function() { return TileMap; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TileMap =
/*#__PURE__*/
function (_Sprite) {
  _inherits(TileMap, _Sprite);

  function TileMap(props) {
    var _this;

    _classCallCheck(this, TileMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TileMap).call(this, props));
    _this.hitboxes = props.hitboxes || [];
    return _this;
  }

  return TileMap;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector =
/*#__PURE__*/
function () {
  function Vector(direction, speed) {
    _classCallCheck(this, Vector);

    this.setDirection(direction, speed);
  }

  _createClass(Vector, [{
    key: "setDirection",
    value: function setDirection(direction, speed) {
      this.direction = direction;
      this.speed = speed;
      this.x = 0;
      this.y = 0;

      switch (direction) {
        case "up":
          this.y = -speed;
          break;

        case "down":
          this.y = speed;
          break;

        case "right":
          this.x = speed;
          break;

        case "left":
          this.x = -speed;
          break;
      }
    }
  }, {
    key: "move",
    value: function move(object, dt) {
      object.x += dt * (this.x / 1000);
      object.y += dt * (this.y / 1000);
    }
  }]);

  return Vector;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9kdW1teS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW1lcmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdC1ibGFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RpbGVzL2Fycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUtc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGlsZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci5qcyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJjb250cm9sIiwiaW1hZ2VOYW1lIiwic3BlZWQiLCJhcnJvdyIsInRpbWUiLCJmaXJlIiwic2hvb3QiLCJ1cCIsIndhbGsiLCJkb3duIiwibGVmdCIsInJpZ2h0Iiwic3RhbmQiLCJ2ZWxvY2l0eSIsImRpcmVjdGlvbiIsIkJvZHkiLCJBSSIsImJvZHkiLCJEdW1teSIsImR1cmF0aW9uIiwibGFzdFRpbWUiLCJzcGxpdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNoYW5nZURpcmVjdGlvbiIsIkFuaW1hdGlvbiIsImZyYW1lcyIsInJlcGVhdCIsImF1dG9ydW4iLCJ3aWR0aCIsImhlaWdodCIsInNvdXJjZVgiLCJzeCIsInNvdXJjZVkiLCJzeSIsInJ1bm5pbmciLCJjdXJyZW50RnJhbWUiLCJ0b3RhbEZyYW1lcyIsImxlbmd0aCIsIm9uRW5kIiwiaW5kZXgiLCJzZXRGcmFtZSIsInN0b3AiLCJuZXhGcmFtZSIsIlNwcml0ZSIsIngiLCJ5IiwiVmVjdG9yIiwiYW5pbWF0aW9ucyIsImNvbGxpc2lvblNoYXBlIiwiaXNTaG9vdGluZyIsImFuaW1hdGlvblNoZWV0IiwiQ2hhcmFjdGVyU2hlZXQiLCJmb3JFYWNoIiwibmFtZSIsImdldEFuaW1hdGlvbiIsInZpZXciLCJmbHkiLCJydW4iLCJzZXREaXJlY3Rpb24iLCJtb3ZlIiwic2V0WFkiLCJ0cnVuYyIsInVwZGF0ZSIsIkNhbWVyYSIsImxpbWl0WCIsImxpbWl0WSIsInNjcm9sbEVkZ2UiLCJ3YXRjaE9iamVjdCIsIm9iaiIsIm1pbiIsIm1heCIsIkNhdEJsYWNrIiwiYWkiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJzZXF1ZW5jZXMiLCJnZXRTZXF1ZW5jZXMiLCJkYXRhIiwicmVxdWlyZSIsImxheWVycyIsImxheWVyIiwiZmlsdGVyIiwiaSIsIlNwcml0ZVNoZWV0IiwiQ29sbGlkZXIiLCJzdGF0aWNTaGFwZXMiLCJib2RpZXMiLCJ0eXBlIiwicHVzaCIsIm9iamVjdHMiLCJjaGVja1N0YXRpYyIsIm9sZFgiLCJvbGRZIiwic2hhcGUiLCJDb250cm9sU3RhdGUiLCJrZXlNYXAiLCJNYXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXNzZWQiLCJoYXMiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiR2FtZSIsInNjcmVlbiIsIlNjcmVlbiIsImxvYWRJbWFnZXMiLCJnaG9zdCIsInBsYXllciIsImNhdEJsYWNrIiwidGl0bGUiLCJ0aWxlcyIsInNjZW5lcyIsImxvYWRpbmciLCJMb2FkaW5nIiwibWVudSIsIk1lbnUiLCJnYW1lTGV2ZWwiLCJHYW1lTGV2ZWwiLCJjdXJyZW50U2NlbmUiLCJpbml0Iiwic3RhdHVzIiwiU2NlbmUiLCJMT0FERUQiLCJTVEFSVF9HQU1FIiwiV09SS0lORyIsImNoYW5nZVNjZW5lIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJHaG9zdCIsIkltYWdlTG9hZGVyIiwiaW1hZ2VGaWxlcyIsImltYWdlcyIsInByb21pc2VzIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwid2luZG93IiwibWluaUZhbnRhc3kiLCJQcm9qZWN0aWxlIiwiYWN0aXZlIiwiQXJyb3ciLCJzcHJpdGVzIiwiZ2V0U3ByaXRlIiwiZ2FtZSIsImNvbnN0cnVjdG9yIiwidHJlZSIsImFkZEFycm93IiwiY29sbGlkZXIiLCJtYXBEYXRhIiwibWFwIiwiY3JlYXRlTWFwIiwibWFpbkNhbWVyYSIsIndhdGNoIiwic2V0Q2FtZXJhIiwiYWRkU3RhdGljU2hhcGVzIiwiYWRkS2luZW1hdGljQm9keSIsImZpbGwiLCJkcmF3U3ByaXRlIiwibG9hZGVkQXQiLCJpc0ltYWdlc0xvYWRlZCIsImZpbmlzaCIsInByaW50IiwiZHJhd0ltYWdlIiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJjYW1lcmEiLCJpc0NhbWVyYVNldCIsImxvYWRlciIsImxvYWQiLCJ0aGVuIiwibmFtZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJlbGVtZW50cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwidGlsZXNldCIsIm1hcEltYWdlIiwidGlsZXdpZHRoIiwidGlsZWhlaWdodCIsIm1hcENvbnRleHQiLCJoaXRib3hlcyIsInJvdyIsImNvbCIsImdldFNvdXJjZVgiLCJnZXRTb3VyY2VZIiwieDEiLCJ4MiIsInkxIiwieTIiLCJUaWxlTWFwIiwiY29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInRleHQiLCJmb250IiwiZmlsbFRleHQiLCJzcHJpdGUiLCJzcHJpdGVYIiwic3ByaXRlWSIsImFicyIsInNwcml0ZVdpZHRoIiwic3ByaXRlSGVpZ2h0IiwiaW5kZXhlcyIsInByb3BzIiwib2JqZWN0IiwiZHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7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S0FBVDtBQUNKOztBQUVBLGFBQUssTUFBTDtBQUNJLGVBQUs0QyxDQUFMLEdBQVMsQ0FBQzVDLEtBQVY7QUFDSjtBQWZKO0FBaUJIO0FBM0JMO0FBQUE7QUFBQSx5QkE2QlM0TixNQTdCVCxFQTZCaUJDLEVBN0JqQixFQTZCcUI7QUFDYkQsWUFBTSxDQUFDaEwsQ0FBUCxJQUFZaUwsRUFBRSxJQUFJLEtBQUtqTCxDQUFMLEdBQVMsSUFBYixDQUFkO0FBQ0FnTCxZQUFNLENBQUMvSyxDQUFQLElBQVlnTCxFQUFFLElBQUksS0FBS2hMLENBQUwsR0FBUyxJQUFiLENBQWQ7QUFDSDtBQWhDTDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoianMvbWluaS1mYW50YXN5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSBcIi4vYm9keVwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQm9keXtcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sKSB7XG4gICAgICAgIHN1cGVyKHtpbWFnZU5hbWU6IFwicGxheWVyXCIsIHNwZWVkOiA3MH0pO1xuICAgICAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xuICAgICAgICB0aGlzLmFycm93ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkQXJyb3coYXJyb3cpIHtcbiAgICAgICAgdGhpcy5hcnJvdyA9IGFycm93O1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wuZmlyZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXJyb3cpIHRoaXMuc2hvb3QodGhpcy5hcnJvdyk7XG4gICAgICAgIH1lbHNlIGlmICh0aGlzLmNvbnRyb2wudXApIHtcbiAgICAgICAgICAgIHRoaXMud2FsayhcInVwXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5kb3duKSB7XG4gICAgICAgICAgICB0aGlzLndhbGsoXCJkb3duXCIpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250cm9sLmxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMud2FsayhcImxlZnRcIik7XG4gICAgICAgIH1lbHNlIGlmICh0aGlzLmNvbnRyb2wucmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMud2FsayhcInJpZ2h0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFuZCh0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQUkge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcbiAgICB9XG4gICAgY29udHJvbCAoYm9keSkge1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG5cbiAgICB9XG59IiwiaW1wb3J0IHsgQUkgfSBmcm9tIFwiLi4vYWlcIjtcblxuZXhwb3J0IGNsYXNzIER1bW15IGV4dGVuZHMgQUkge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDEwMDA7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIH1cblxuICAgIGNoYW5nZURpcmVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd24sdXAsbGVmdCxyaWdodFwiLnNwbGl0KCcsJylbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQpXTtcbiAgICB9XG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYgKCh0aW1lIC0gdGhpcy5sYXN0VGltZSkgPiB0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2R5LndhbGsodGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICBzdXBlci51cGRhdGUodGltZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIGV4dGVuZHMgU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3RvciAoe2ltYWdlTmFtZSwgZnJhbWVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUsIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0fSkge1xuICAgICAgICBzdXBlciAoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiBpbWFnZU5hbWUsXG4gICAgICAgICAgICBzb3VyY2VYOiBmcmFtZXNbMF0uc3gsXG4gICAgICAgICAgICBzb3VyY2VZOiBmcmFtZXNbMF0uc3ksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gYXV0b3J1bjtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy50b3RhbEZyYW1lcyA9IHRoaXMuZnJhbWVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5vbkVuZCA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0RnJhbWUoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSBpbmRleDtcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN4O1xuICAgICAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1tpbmRleF0uc3k7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgaWYoIXRoaXMucnVubmluZyl7XG4gICAgICAgICAgICB0aGlzLnNldEZyYW1lKDApO1xuICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5leEZyYW1lKCkge1xuICAgICAgICBpZiAoKHRoaXMuY3VycmVudEZyYW1lICsgMSkgPT0gdGhpcy50b3RhbEZyYW1lcykge1xuICAgICAgICAgICAgaWYgKHRoaXMub25FbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yZXBlYXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZyYW1lKDApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RnJhbWUodGhpcy5jdXJyZW50RnJhbWUgKyAxKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodGltZSAtIHRoaXMubGFzdFRpbWUpID4gdGhpcy5zcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5uZXhGcmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdmVjdG9yXCI7XG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gXCIuL2NoYXJhY3Rlci1zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgQm9keSB7XG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc3BlZWR9KSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoXCJkb3duXCIsIDApO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0ge307XG4gICAgICAgIHRoaXMuY29sbGlzaW9uU2hhcGUgPSB7eDogMTksIHk6IDQ0LCB3aWR0aDogMjUsIGhlaWdodDogMTl9O1xuICAgICAgICB0aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBhbmltYXRpb25TaGVldCA9IG5ldyBDaGFyYWN0ZXJTaGVldCh7aW1hZ2VOYW1lOiBpbWFnZU5hbWV9KTtcbiAgICAgICAgXCJ3YWxrX2Rvd24sd2Fsa191cCx3YWxrX2xlZnQsd2Fsa19yaWdodFwiLnNwbGl0KFwiLFwiKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXCJzaG9vdF9kb3duLHNob290X3VwLHNob290X2xlZnQsc2hvb3RfcmlnaHRcIi5zcGxpdChcIixcIikuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IGFuaW1hdGlvblNoZWV0LmdldEFuaW1hdGlvbihuYW1lLCAyMCwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGFuZChcImRvd25cIik7XG4gICAgfVxuXG4gICAgc2hvb3QoYXJyb3cpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2hvb3RpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTaG9vdGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbXCJzaG9vdF9cIiArIHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uXTtcbiAgICAgICAgICAgIHRoaXMudmlldy5vbkVuZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBhcnJvdy5mbHkodGhpcy54LCB0aGlzLnksIHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlldy5ydW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdhbGsoZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2hvb3RpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLnNwZWVkKTtcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW1wid2Fsa19cIiArIGRpcmVjdGlvbl07XG4gICAgICAgIHRoaXMudmlldy5ydW4oKTtcbiAgICB9XG5cbiAgICBzdGFuZChkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTaG9vdGluZykgcmV0dXJuO1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIDApO1xuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbXCJ3YWxrX1wiICsgZGlyZWN0aW9uXTtcbiAgICAgICAgdGhpcy52aWV3LnN0b3AoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNTaG9vdGluZykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5Lm1vdmUodGhpcywgdGltZSAtIHRoaXMubGFzdFRpbWUpO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICAgICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSxNYXRoLnRydW5jKHRoaXMueSkpO1xuICAgICAgICB0aGlzLnZpZXcudXBkYXRlKHRpbWUpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQ2FtZXJhIHtcbiAgICBjb25zdHJ1Y3RvciAoe3dpZHRoID0gNjQwLCBoZWlnaHQgPSA2NDAsIGxpbWl0WCA9IDUwMDAwMCwgbGltaXRZID0gNTAwMDAwLCBzY3JvbGxFZGdlID0gMjAwfSA9IHt9KSB7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMubGltaXRYID0gbGltaXRYO1xuICAgICAgICB0aGlzLmxpbWl0WSA9IGxpbWl0WTtcbiAgICAgICAgdGhpcy53YXRjaE9iamVjdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9iaiA9IG51bGw7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWRnZSA9IHNjcm9sbEVkZ2U7XG4gICAgfVxuXG4gICAgd2F0Y2gob2JqKSB7XG4gICAgICAgIHRoaXMud2F0Y2hPYmplY3QgPSB0cnVlO1xuICAgICAgICB0aGlzLm9iaiA9IG9iajtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBpZih0aGlzLndhdGNoT2JqZWN0KSB7XG4gICAgICAgICAgICBpZih0aGlzLm9iai54ID4gKHRoaXMueCArIHRoaXMud2lkdGggLSB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5taW4odGhpcy5saW1pdFgsIHRoaXMub2JqLnggLSB0aGlzLndpZHRoICsgdGhpcy5zY3JvbGxFZGdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5vYmoueCA8ICh0aGlzLnggKyB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5tYXgoMCwgdGhpcy5vYmoueCAtIHRoaXMuc2Nyb2xsRWRnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnkgPiAodGhpcy55ICsgdGhpcy5oZWlnaHQgLSB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5taW4odGhpcy5saW1pdFksIHRoaXMub2JqLnkgLSB0aGlzLmhlaWdodCArIHRoaXMuc2Nyb2xsRWRnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnkgPCAodGhpcy55ICsgdGhpcy5zY3JvbGxFZGdlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IE1hdGgubWF4KDAsIHRoaXMub2JqLnkgLSB0aGlzLnNjcm9sbEVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEJvZHkgfSBmcm9tIFwiLi9ib2R5XCI7XG5pbXBvcnQgeyBEdW1teSB9IGZyb20gXCIuL2Fpcy9kdW1teVwiO1xuXG5leHBvcnQgY2xhc3MgQ2F0QmxhY2sgZXh0ZW5kcyBCb2R5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe2ltYWdlTmFtZTogXCJjYXRCbGFja1wiLCBzcGVlZDogN30pO1xuICAgICAgICB0aGlzLmFpID0gbmV3IER1bW15KCk7XG4gICAgICAgIHRoaXMuYWkuY29udHJvbCh0aGlzKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIHRoaXMuYWkudXBkYXRlKHRpbWUpO1xuICAgICAgICByZXR1cm4gc3VwZXIudXBkYXRlKHRpbWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCIuL3Nwcml0ZS1zaGVldFwiO1xuXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2hlZXQgZXh0ZW5kcyBTcHJpdGVTaGVldCB7XG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZX0pIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiBpbWFnZU5hbWUsXG4gICAgICAgICAgICBpbWFnZVdpZHRoOiA4MzIsXG4gICAgICAgICAgICBpbWFnZUhlaWdodDogMTM0NFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZXMgPSB0aGlzLmdldFNlcXVlbmNlcygpO1xuICAgIH1cblxuICAgIGdldFNlcXVlbmNlcygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoJy4vbWFwcy9hbmltYXRpb25zLmpzb24nKTtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0ge307XG4gICAgICAgIGRhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgc2VxdWVuY2VzW2xheWVyLm5hbWVdID0gbGF5ZXIuZGF0YS5maWx0ZXIoaSA9PiBpID4gMCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VxdWVuY2VzO1xuICAgIH1cblxuICAgIGdldEFuaW1hdGlvbihuYW1lLCBzcGVlZCA9IDEwMCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldEFuaW1hdGlvbih0aGlzLnNlcXVlbmNlc1tuYW1lXSwgc3BlZWQsIHJlcGVhdCwgYXV0b3J1bik7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBDb2xsaWRlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcyA9IFtdO1xuICAgICAgICB0aGlzLmJvZGllcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFN0YXRpY1NoYXBlcyhkYXRhKSB7XG4gICAgICAgIGRhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMucHVzaCguLi5sYXllci5vYmplY3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkS2luZW1hdGljQm9keShib2R5KSB7XG4gICAgICAgIHRoaXMuYm9kaWVzLnB1c2goe1xuICAgICAgICAgICAgeDogYm9keS54LFxuICAgICAgICAgICAgeTogYm9keS55LFxuICAgICAgICAgICAgb2JqOiBib2R5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIHRoaXMuY2hlY2tTdGF0aWModGltZSk7XG4gICAgfVxuXG4gICAgY2hlY2tTdGF0aWModGltZSkge1xuICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xuICAgICAgICAgICAgbGV0IG9sZFggPSBib2R5Lng7XG4gICAgICAgICAgICBsZXQgb2xkWSA9IGJvZHkueTtcbiAgICAgICAgICAgIGxldCB4ID0gYm9keS5vYmoueDtcbiAgICAgICAgICAgIGxldCB5ID0gYm9keS5vYmoueTtcbiAgICAgICAgICAgIC8vbW92aW5nIHJpZ2h0XG4gICAgICAgICAgICBpZiAoeCA+IG9sZFgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKHNoYXBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgKChvbGRYIC0gMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPCBzaGFwZS54KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLngpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUueSlcbiAgICAgICAgICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLm1pbih4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoLCBzaGFwZS54KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vbW92aW5nIGxlZnRcbiAgICAgICAgICAgIGlmKHggPCBvbGRYKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaChzaGFwZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgICAgICAgICAgKChvbGRYICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpID4gKHNoYXBlLnggKyBzaGFwZS53aWR0aCkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUueSArIHNoYXBlLmhlaWdodCkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IE1hdGgubWF4KHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICwgc2hhcGUueCArIHNoYXBlLndpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL21vdmluZyBkb3duXG4gICAgICAgICAgICBpZih5ID4gb2xkWSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goIHNoYXBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgICAgICAgICAoKG9sZFkgLSAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPCBzaGFwZS55KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUueCArIHNoYXBlLndpZHRoKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBNYXRoLm1pbih5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCwgc2hhcGUueSkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55IC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9tb3ZpbmcgdXBcbiAgICAgICAgICAgIGlmKHkgPCBvbGRZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaCggc2hhcGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICAgICAgICAgICgob2xkWSArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA+IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUueCArIHNoYXBlLndpZHRoKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBNYXRoLm1heCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSwgc2hhcGUueSArIHNoYXBlLmhlaWdodCkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkueCA9IHg7XG4gICAgICAgICAgICBib2R5LnkgPSB5O1xuICAgICAgICAgICAgYm9keS5vYmoueCA9IHg7XG4gICAgICAgICAgICBib2R5Lm9iai55ID0geTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBDb250cm9sU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5rZXlNYXAgPSBuZXcgTWFwKFtcbiAgICAgICAgICAgIFszNywnbGVmdCddLFszOSwncmlnaHQnXSxbMzgsJ3VwJ10sWzQwLCdkb3duJ10sWzMyLCdmaXJlJ11cbiAgICAgICAgXSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCB0cnVlKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgZmFsc2UpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZXZlbnQsIHByZXNzZWQpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5TWFwLmhhcyhldmVudC5rZXlDb2RlKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpc1t0aGlzLmtleU1hcC5nZXQoZXZlbnQua2V5Q29kZSldID0gcHJlc3NlZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gXCIuL3NjcmVlblwiO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCIuL3NjZW5lcy9sb2FkaW5nXCI7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4vc2NlbmVzL21lbnVcIjtcbmltcG9ydCB7IEdhbWVMZXZlbCB9IGZyb20gXCIuL3NjZW5lcy9nYW1lLWxldmVsXCI7XG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuL3NjZW5lXCJcbmltcG9ydCB7IENvbnRyb2xTdGF0ZSB9IGZyb20gXCIuL2NvbnRyb2wtc3RhdGVcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yICh7d2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MH0gPSB7fSkge1xuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4od2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuc2NyZWVuLmxvYWRJbWFnZXMoe1xuICAgICAgICAgICAgLy9vcmM6ICcuLi9pbWcvb3JjLnBuZycsXG4gICAgICAgICAgICBnaG9zdDogJy4uL2ltZy9naG9zdC5wbmcnLFxuICAgICAgICAgICAgcGxheWVyOiAnLi4vaW1nL3BsYXllci5wbmcnLFxuICAgICAgICAgICAgY2F0QmxhY2s6ICcuLi9pbWcvQ2F0QmxhY2sucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAnLi4vaW1nL3RpdGxlLnBuZycsXG4gICAgICAgICAgICB0aWxlczogJy4uL2ltZy90aWxlcy5wbmcnXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbFN0YXRlKCk7XG4gICAgICAgIHRoaXMuc2NlbmVzID0ge1xuICAgICAgICAgICAgbG9hZGluZzogbmV3IExvYWRpbmcodGhpcyksXG4gICAgICAgICAgICBtZW51OiBuZXcgTWVudSh0aGlzKSxcbiAgICAgICAgICAgIGdhbWVMZXZlbDogbmV3IEdhbWVMZXZlbCh0aGlzKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzLmxvYWRpbmc7XG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTY2VuZShzdGF0dXMpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuTE9BREVEOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xuICAgICAgICAgICAgY2FzZSBTY2VuZS5TVEFSVF9HQU1FOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5nYW1lTGV2ZWw7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnJhbWUodGltZSkge1xuICAgICAgICBpZih0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgIT0gU2NlbmUuV09SS0lORykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLmNoYW5nZVNjZW5lKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUucmVuZGVyKHRpbWUpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XG4gICAgfVxufSIsImltcG9ydCB7IEJvZHkgfSBmcm9tIFwiLi9ib2R5XCI7XG5pbXBvcnQgeyBEdW1teSB9IGZyb20gXCIuL2Fpcy9kdW1teVwiO1xuXG5leHBvcnQgY2xhc3MgR2hvc3QgZXh0ZW5kcyBCb2R5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe2ltYWdlTmFtZTogXCJnaG9zdFwiLCBzcGVlZDogMjB9KTtcbiAgICAgICAgdGhpcy5haSA9IG5ldyBEdW1teSgpO1xuICAgICAgICB0aGlzLmFpLmNvbnRyb2wodGhpcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgdGhpcy5haS51cGRhdGUodGltZSk7XG4gICAgICAgIHJldHVybiBzdXBlci51cGRhdGUodGltZSk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihpbWFnZUZpbGVzKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlcyA9IGltYWdlRmlsZXM7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0ge307XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmltYWdlRmlsZXMpIHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkSW1hZ2UobmFtZSwgdGhpcy5pbWFnZUZpbGVzW25hbWVdKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG5cbiAgICBsb2FkSW1hZ2UobmFtZSwgc3JjKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT57XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBpbWFnZTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobmFtZSk7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IG1pbmlGYW50YXN5ID0gbmV3IEdhbWUoKTtcbiAgICBtaW5pRmFudGFzeS5ydW4oKTtcbn07XG5cbmNvbnNvbGUubG9nKFwi0Jgg0YHQtdC50YfQsNGBINGA0LDQsdC+0YLQsNC10YIg0Lgg0YHQtdC50YfQsNGBXCIpOyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCIuL3ZlY3RvclwiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZSB7XG4gICAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCkge1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yIChkaXJlY3Rpb24sIHNwZWVkKTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZmx5KHgsIHksIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuc3BlZWQpO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbWUgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcbiAgICAgICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSxNYXRoLnRydW5jKHRoaXMueSkpO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB9XG59IiwiaW1wb3J0IHtQcm9qZWN0aWxlfSBmcm9tIFwiLi4vcHJvamVjdGlsZVwiO1xuaW1wb3J0IHtTcHJpdGVTaGVldH0gZnJvbSBcIi4uL3Nwcml0ZS1zaGVldFwiO1xuXG5cbmV4cG9ydCBjbGFzcyBBcnJvdyBleHRlbmRzIFByb2plY3RpbGUge1xuICAgIGNvbnN0cnVjdG9yIChkaXJlY3Rpb24sIHNwZWVkKSB7XG4gICAgICAgIHN1cGVyKGRpcmVjdGlvbiwgc3BlZWQpO1xuICAgICAgICB0aGlzLnNwcml0ZXMgPSB7fTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxuICAgICAgICAgICAgaW1hZ2VXaWR0aDogNjQwLFxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6IDY0MFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zcHJpdGVzW1wibGVmdFwiXSA9IHRpbGVzLmdldFNwcml0ZSg5NSk7XG4gICAgICAgIHRoaXMuc3ByaXRlc1tcInJpZ2h0XCJdID0gdGlsZXMuZ2V0U3ByaXRlKDk2KTtcbiAgICAgICAgdGhpcy5zcHJpdGVzW1wiZG93blwiXSA9IHRpbGVzLmdldFNwcml0ZSg5Nyk7XG4gICAgICAgIHRoaXMuc3ByaXRlc1tcInVwXCJdID0gdGlsZXMuZ2V0U3ByaXRlKDk4KTtcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5zcHJpdGVzW2RpcmVjdGlvbl07XG4gICAgfVxuXG4gICAgZmx5KHgsIHksIGRpcmVjdGlvbikge1xuICAgICAgICBzdXBlci5mbHkoeCwgeSwgZGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5zcHJpdGVzW2RpcmVjdGlvbl07XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFdPUktJTkcoKSB7IHJldHVybiAnV09SS0lORyc7IH1cbiAgICBzdGF0aWMgZ2V0IExPQURFRCgpIHsgcmV0dXJuICdMT0FERUQnOyB9XG4gICAgc3RhdGljIGdldCBTVEFSVF9HQU1FKCkgeyByZXR1cm4gJ1NUQVJUX0dBTUUnOyB9XG4gICAgc3RhdGljIGdldCBHQU1FX09WRVIoKSB7IHJldHVybiAnR0FNRV9PVkVSJzsgfVxuICAgIHN0YXRpYyBnZXQgR0FNRV9XSU4oKSB7IHJldHVybiAnR0FNRV9XSU4nOyB9XG4gICAgc3RhdGljIGdldCBGSU5JU0hFRCgpIHsgcmV0dXJuICdGSU5JU0hFRCc7IH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xuICAgIH1cbiAgICBmaW5pc2goc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cblxuICAgIHJlbmRlcih0aW1lKSB7XG5cbiAgICB9XG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSdcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4uL3Nwcml0ZS1zaGVldFwiO1xuaW1wb3J0IHsgQ2hhcmFjdGVyU2hlZXQgfSBmcm9tIFwiLi4vY2hhcmFjdGVyLXNoZWV0XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vUGxheWVyXCI7XG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi4vY2FtZXJhXCI7XG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gXCIuLi9jb2xsaWRlclwiO1xuaW1wb3J0IHsgR2hvc3QgfSBmcm9tIFwiLi4vZ2hvc3RcIjtcbmltcG9ydCB7IENhdEJsYWNrIH0gZnJvbSBcIi4uL2NhdC1ibGFja1wiO1xuaW1wb3J0IHsgQXJyb3cgfSBmcm9tIFwiLi4vcHJvamVjdGlsZXMvYXJyb3dcIjtcblxuXG5leHBvcnQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxuICAgICAgICAgICAgaW1hZ2VXaWR0aDogNjQwLFxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6IDY0MFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmVlID0gdGhpcy50aWxlcy5nZXRTcHJpdGUoNyk7XG4gICAgICAgIHRoaXMudHJlZS5zZXRYWSgxMCwxMCk7XG4gICAgICAgIC8vdGhpcy5vcmNUaWxlcyA9IG5ldyBDaGFyYWN0ZXJTaGVldCh7aW1hZ2VOYW1lOiBcIm9yY1wifSk7XG4gICAgICAgIHRoaXMuZ2hvc3QgPSBuZXcgR2hvc3QoKTtcbiAgICAgICAgdGhpcy5naG9zdC54ID0gMzIwO1xuICAgICAgICB0aGlzLmdob3N0LnkgPSAxMDA7XG5cbiAgICAgICAgdGhpcy5jYXRCbGFjayA9IG5ldyBDYXRCbGFjaygpO1xuICAgICAgICB0aGlzLmNhdEJsYWNrLnggPSAyMTA7XG4gICAgICAgIHRoaXMuY2F0QmxhY2sueSA9IDIxMDtcblxuICAgICAgICB0aGlzLmFycm93ID0gbmV3IEFycm93IChcImRvd25cIiwgMjAwKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZ2FtZS5jb250cm9sKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIueCA9IDEwMDtcbiAgICAgICAgdGhpcy5wbGF5ZXIueSA9IDEwMDtcbiAgICAgICAgdGhpcy5wbGF5ZXIuYWRkQXJyb3codGhpcy5hcnJvdyk7XG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgICAgICBjb25zdCBtYXBEYXRhID0gcmVxdWlyZSgnLi4vbWFwcy9sZXZlbDEuanNvbicpO1xuICAgICAgICB0aGlzLm1hcCA9IHRoaXMuZ2FtZS5zY3JlZW4uY3JlYXRlTWFwKFwibGV2ZWwxXCIsIG1hcERhdGEsIHRoaXMudGlsZXMpO1xuICAgICAgICB0aGlzLm1haW5DYW1lcmEgPSBuZXcgQ2FtZXJhKHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmdhbWUuc2NyZWVuLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodCxcbiAgICAgICAgICAgIGxpbWl0WDogdGhpcy5tYXAud2lkdGggLSB0aGlzLmdhbWUuc2NyZWVuLndpZHRoLFxuICAgICAgICAgICAgbGltaXRZOiB0aGlzLm1hcC5oZWlnaHQgLSB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLndhdGNoKHRoaXMucGxheWVyKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5zZXRDYW1lcmEodGhpcy5tYWluQ2FtZXJhKTtcblxuICAgICAgICB0aGlzLmNvbGxpZGVyLmFkZFN0YXRpY1NoYXBlcyhtYXBEYXRhKTtcbiAgICAgICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KHRoaXMucGxheWVyKTtcbiAgICAgICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KHRoaXMuZ2hvc3QpO1xuICAgICAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5jYXRCbGFjayk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgdGhpcy5naG9zdC51cGRhdGUodGltZSk7XG4gICAgICAgIHRoaXMuY2F0QmxhY2sudXBkYXRlKHRpbWUpO1xuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUodGltZSk7XG4gICAgICAgIHRoaXMuY29sbGlkZXIudXBkYXRlKHRpbWUpO1xuICAgICAgICB0aGlzLm1haW5DYW1lcmEudXBkYXRlKHRpbWUpO1xuICAgICAgICB0aGlzLmFycm93LnVwZGF0ZSh0aW1lKTtcbiAgICB9XG5cbiAgICByZW5kZXIodGltZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJyk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm1hcCk7XG4gICAgICAgIC8vIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnRyZWUpO1xuICAgICAgICAvLyB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5vcmMpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5naG9zdC52aWV3KTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMuY2F0QmxhY2sudmlldyk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnBsYXllci52aWV3KTtcbiAgICAgICAgaWYgKHRoaXMuYXJyb3cuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5hcnJvdy52aWV3KTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSk7XG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUpIHtcbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCA9PSAwICYmIHRoaXMuZ2FtZS5zY3JlZW4uaXNJbWFnZXNMb2FkZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkZWRBdCA9IHRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubG9hZGVkQXQgIT0gMCAmJiAodGltZSAtIHRoaXMubG9hZGVkQXQpID4gNTAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKHRpbWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbChcIiMwMDAwMDBcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoNTAsNzAsIFwiTG9hZGluZy4uLlwiKTtcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvciAoZ2FtZSkge1xuICAgICAgICBzdXBlcihnYW1lKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgfVxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuY29udHJvbC5maXJlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcih0aW1lKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGUnKTtcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCgzNjAsIDU4MCwgXCLQndCw0LbQvNC40YLQtSDQv9GA0L7QsdC10LtcIik7XG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL2ltYWdlLWxvYWRlcidcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tIFwiLi90aWxlLW1hcFwiO1xuXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3RvciAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmltYWdlcyA9IHt9O1xuICAgICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0NhbWVyYVNldCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldENhbWVyYShjYW1lcmEpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgICAgIHRoaXMuaXNDYW1lcmFTZXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxvYWRJbWFnZXMoaW1hZ2VGaWxlcykge1xuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VGaWxlcyk7XG4gICAgICAgIGxvYWRlci5sb2FkKCkudGhlbigobmFtZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzID0gT2JqZWN0LmFzc2lnbih0aGlzLmltYWdlcywgbG9hZGVyLmltYWdlcyk7XG4gICAgICAgICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5hbWVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpO1xuICAgICAgICBsZXQgY2FudmFzID0gZWxlbWVudHNbMF0gfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfVxuXG4gICAgY3JlYXRlTWFwKG5hbWUsIG1hcERhdGEsIHRpbGVzZXQpIHtcbiAgICAgICAgY29uc3QgbWFwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgbWFwSW1hZ2Uud2lkdGggPSBtYXBEYXRhLndpZHRoICogbWFwRGF0YS50aWxld2lkdGg7XG4gICAgICAgIG1hcEltYWdlLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0ICogbWFwRGF0YS50aWxlaGVpZ2h0O1xuICAgICAgICBjb25zdCBtYXBDb250ZXh0ID0gbWFwSW1hZ2UuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29uc3QgaGl0Ym94ZXMgPSBbXTtcbiAgICAgICAgbGV0IHJvdywgY29sO1xuICAgICAgICBtYXBEYXRhLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgIGlmKGxheWVyLnR5cGUgPT0gXCJ0aWxlbGF5ZXJcIikge1xuICAgICAgICAgICAgICAgIHJvdyA9IDA7XG4gICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICBsYXllci5kYXRhLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3RpbGVzZXQuaW1hZ2VOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlc2V0LmdldFNvdXJjZVgoaW5kZXgpLCB0aWxlc2V0LmdldFNvdXJjZVkoaW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sICogbWFwRGF0YS50aWxld2lkdGgsIHJvdyAqIG1hcERhdGEudGlsZWhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbCsrO1xuICAgICAgICAgICAgICAgICAgICBpZihjb2wgPiAobWFwRGF0YS53aWR0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGxheWVyLnR5cGUgPT0gXCJvYmplY3Rncm91cFwiKSB7XG4gICAgICAgICAgICAgICAgaGl0Ym94ZXMucHVzaCguLi5sYXllci5vYmplY3RzLm1hcChvYmogPT4gKHt4MTogb2JqLngsIHgyOiBvYmoueCArIG9iai53aWR0aCwgeTE6IG9iai55LCB5Mjogb2JqLnkgKyBvYmouaGVpZ2h0fSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBtYXBJbWFnZTtcbiAgICAgICAgcmV0dXJuIG5ldyBUaWxlTWFwKHtcbiAgICAgICAgICAgIGltYWdlTmFtZTogbmFtZSxcbiAgICAgICAgICAgIHNvdXJjZVg6IDAsXG4gICAgICAgICAgICBzb3VyY2VZOiAwLFxuICAgICAgICAgICAgd2lkdGg6IG1hcEltYWdlLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBtYXBJbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICBoaXRib3hlczogaGl0Ym94ZXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmlsbChjb2xvcikge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLDAsdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbiAgICBwcmludCh4LCB5LCB0ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIiNGRkZGRkZcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBcIjM4cHggSGFuZ3lhYm9seVwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQodGV4dCwgeCwgeSk7XG4gICAgfVxuXG4gICAgZHJhd0ltYWdlKHgsIHksIGltYWdlTmFtZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW2ltYWdlTmFtZV0sIHgsIHkpO1xuICAgIH1cblxuICAgIGRyYXdTcHJpdGUoc3ByaXRlKSB7XG5cbiAgICAgICAgbGV0IHNwcml0ZVggPSBzcHJpdGUueDtcbiAgICAgICAgbGV0IHNwcml0ZVkgPSBzcHJpdGUueTtcblxuICAgICAgICBpZiAodGhpcy5pc0NhbWVyYVNldCkge1xuICAgICAgICAgICAgc3ByaXRlWCAtPSB0aGlzLmNhbWVyYS54O1xuICAgICAgICAgICAgc3ByaXRlWSAtPSB0aGlzLmNhbWVyYS55O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHNwcml0ZVggPj0gdGhpcy53aWR0aCkgfHxcbiAgICAgICAgICAgIChzcHJpdGVZID49IHRoaXMuaGVpZ2h0KSB8fFxuICAgICAgICAgICAgKChzcHJpdGVYICsgc3ByaXRlLndpZHRoKSA8PSAwKSB8fFxuICAgICAgICAgICAgKChzcHJpdGVZICsgc3ByaXRlLmhlaWdodCkgPD0gMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc291cmNlWCA9IHNwcml0ZS5zb3VyY2VYICsgTWF0aC5hYnMgKE1hdGgubWluKDAsIHNwcml0ZVgpKTtcbiAgICAgICAgbGV0IHNvdXJjZVkgPSBzcHJpdGUuc291cmNlWSArIE1hdGguYWJzIChNYXRoLm1pbigwLHNwcml0ZVkpKTtcbiAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5taW4odGhpcy53aWR0aCwgc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgLSBNYXRoLm1heCgwLCBzcHJpdGVYKTtcbiAgICAgICAgbGV0IGhlaWdodCA9IE1hdGgubWluKHRoaXMuaGVpZ2h0LCBzcHJpdGVZICsgc3ByaXRlLmhlaWdodCkgLSBNYXRoLm1heCgwLCBzcHJpdGVZKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxuICAgICAgICAgICAgc291cmNlWCxcbiAgICAgICAgICAgIHNvdXJjZVksXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIE1hdGgubWF4KDAsIHNwcml0ZVgpLFxuICAgICAgICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWSksXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCk7XG4gICAgfVxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcIi4vYW5pbWF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIHNwcml0ZVdpZHRoID0gNjQsIHNwcml0ZUhlaWdodCA9IDY0fSkge1xuICAgICAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgICAgICAgdGhpcy5pbWFnZVdpZHRoID0gaW1hZ2VXaWR0aDtcbiAgICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0O1xuICAgICAgICB0aGlzLnNwcml0ZVdpZHRoID0gc3ByaXRlV2lkdGg7XG4gICAgICAgIHRoaXMuc3ByaXRlSGVpZ2h0ID0gc3ByaXRlSGVpZ2h0O1xuICAgIH1cblxuICAgIGdldEFuaW1hdGlvbihpbmRleGVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYXRpb24oe1xuICAgICAgICAgICAgaW1hZ2VOYW1lOiB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIGZyYW1lczogaW5kZXhlcy5tYXAoaW5kZXggPT4gKHtzeDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSwgc3k6IHRoaXMuZ2V0U291cmNlWShpbmRleCl9KSksXG4gICAgICAgICAgICBzcGVlZDogc3BlZWQsXG4gICAgICAgICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgICAgICAgIGF1dG9ydW46IGF1dG9ydW4sXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0U3ByaXRlKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgU3ByaXRlKHtcbiAgICAgICAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICBzb3VyY2VYOiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLFxuICAgICAgICAgICAgc291cmNlWTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KSxcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0U291cmNlWChpbmRleCkge1xuICAgICAgICByZXR1cm4gKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAlIHRoaXMuaW1hZ2VXaWR0aDtcbiAgICB9XG4gICAgZ2V0U291cmNlWShpbmRleCkge1xuICAgICAgICByZXR1cm4gTWF0aC50cnVuYygoLS1pbmRleCAqIHRoaXMuc3ByaXRlV2lkdGgpIC8gdGhpcy5pbWFnZVdpZHRoKSAqIHRoaXMuc3ByaXRlSGVpZ2h0O1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3RvciAoe2ltYWdlTmFtZSwgc291cmNlWCwgc291cmNlWSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjQgfSkge1xuICAgICAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gc291cmNlWDtcbiAgICAgICAgdGhpcy5zb3VyY2VZID0gc291cmNlWTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICB9XG5cbiAgICBzZXRYWSh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWxlTWFwIGV4dGVuZHMgU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaGl0Ym94ZXMgPSBwcm9wcy5oaXRib3hlcyB8fCBbXTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCkge1xuICAgICAgICB0aGlzLnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHNwZWVkKTtcbiAgICB9XG5cbiAgICBzZXREaXJlY3Rpb24oZGlyZWN0aW9uLCBzcGVlZCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gLXNwZWVkO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gc3BlZWQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gc3BlZWQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnggPSAtc3BlZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmUob2JqZWN0LCBkdCkge1xuICAgICAgICBvYmplY3QueCArPSBkdCAqICh0aGlzLnggLyAxMDAwKTtcbiAgICAgICAgb2JqZWN0LnkgKz0gZHQgKiAodGhpcy55IC8gMTAwMCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=