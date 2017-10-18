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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Babel and Webpack Tutorial found here https://www.youtube.com/watch?v=X5wTsHRsbIA

// ES6 Tutorial
// https://www.youtube.com/watch?v=RBLIm5LMrmc&index=4&list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv

/* Classes and Inheritance */
var User = function () {
	function User(username, email, password) {
		_classCallCheck(this, User);

		this.username = username;
		this.email = email;
		this.password = password;
	}

	_createClass(User, [{
		key: 'register',
		value: function register() {
			console.log(this.username + ' is registered');
		}
	}], [{
		key: 'countUsers',
		value: function countUsers() {
			console.log('there are 50 users');
		}
	}]);

	return User;
}();

var NewUser = new User('Eric', 'sample@example.com', 'mypassword');

NewUser.register();
User.countUsers();

var Member = function (_User) {
	_inherits(Member, _User);

	function Member(username, email, password, myPackage) {
		_classCallCheck(this, Member);

		var _this = _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this, username, email, password));

		_this.myPackage = myPackage;
		return _this;
	}

	_createClass(Member, [{
		key: 'getPackage',
		value: function getPackage() {
			console.log(this.username + ' is subscribe to standard package');
		}
	}]);

	return Member;
}(User);

var eric = new Member('Eric', 'email@sample.com', 'mypassword', 'mypackage');

eric.register();

/* Template LIterals */

// used for concatenating long strings and assiging variables inside strings
//instead of using single qoute use `

var name = 'John';
var mystring = 'this is a long string,\n\twith strings and another strings Hello ' + name + ', and simple template';
console.log(mystring);

/***/ })
/******/ ]);