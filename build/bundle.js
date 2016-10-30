/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	var _Game = __webpack_require__(11);

	var _Game2 = _interopRequireDefault(_Game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var game = new _Game2.default('game');
	var fps = 30;

	(function gameLoop() {

		if (!game.gameOver) {
			game.update();
			game.render();
		}

		setTimeout(gameLoop, fps);
	})();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./game.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./game.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n   margin: 0;\n   padding: 0;\n   border: 0;\n   font-size: 100%;\n   font: inherit;\n   vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n   display: block;\n}\nbody {\n   line-height: 1;\n}\nol, ul {\n   list-style: none;\n}\nblockquote, q {\n   quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n   content: '';\n   content: none;\n}\ntable {\n   border-collapse: collapse;\n   border-spacing: 0;\n}\n\n/* Game Styles */\n\n@font-face {\n    font-family: 'PressStart2P Web';\n    src: url(" + __webpack_require__(5) + ");\n    src: url(" + __webpack_require__(5) + "?#iefix) format('embedded-opentype'),\n         url(" + __webpack_require__(6) + ") format('woff2'),\n         url(" + __webpack_require__(7) + ") format('woff'),\n         url(" + __webpack_require__(8) + ") format('truetype'),\n         url(" + __webpack_require__(9) + "#press_start_2pregular) format('svg');\n    font-weight: normal;\n    font-style: normal;\n}\nbody {\n   font-family: 'PressStart2P Web', monospace;\n   margin: 0 auto;\n   text-align: center;\n\n}\nh1 {\n   margin-top: 20px;\n}\n\n#game {\n   background-color: black;\n   background-size: cover;\n   display: block;\n   height: 80%;\n   margin: 20px auto;\n   width: 80%;\n}\n.players {\n   display: inline-flex;\n   justify-content: space-between;\n   text-align: center;\n   width: 512px;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/pressstart2p-webfont.eot";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/pressstart2p-webfont.woff2";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/pressstart2p-webfont.woff";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/pressstart2p-webfont.ttf";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/pressstart2p-webfont.svg";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Paddle = __webpack_require__(12);

	var _Paddle2 = _interopRequireDefault(_Paddle);

	var _Board = __webpack_require__(13);

	var _Board2 = _interopRequireDefault(_Board);

	var _Ball = __webpack_require__(14);

	var _Ball2 = _interopRequireDefault(_Ball);

	var _Scoreboard = __webpack_require__(15);

	var _Scoreboard2 = _interopRequireDefault(_Scoreboard);

	var _keys = __webpack_require__(16);

	var _variables = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function () {
	    function Game(id) {
	        var _this = this;

	        _classCallCheck(this, Game);

	        var canvas = document.getElementById(id);
	        this.context = canvas.getContext('2d');
	        this.height = canvas.height;
	        this.width = canvas.width;
	        this.gameOver = false;

	        this.keys = _keys.gameKeys;

	        this.board = new _Board2.default(this.height, this.width, _variables.boardVariables.backgrounds);
	        this.board.setBackground(id, 3);

	        this.playerArray = [];
	        this.playerArray.push(new _Paddle2.default(this.height, _variables.paddleVariables.distFromEdge, 'white', 'red', _keys.player1Keys, _variables.characterVariables.pongku));

	        this.playerArray.push(new _Paddle2.default(this.height, this.width - _variables.paddleVariables.distFromEdge, 'white', 'blue', _keys.player2Keys, _variables.characterVariables.pongolo));

	        this.ballArray = [];
	        this.ballArray.push(new _Ball2.default(this.height / 2, this.width / 2, _variables.ballVariables.radius, _variables.ballVariables.color));
	        this.scoreboard = new _Scoreboard2.default(10, this.width / 2, '#FF0');

	        document.addEventListener('keydown', function (ev) {
	            return _this.keyListener(ev, ev.keyCode, true);
	        }, false);
	        document.addEventListener('keyup', function (ev) {
	            return _this.keyListener(ev, ev.keyCode, false);
	        }, false);

	        this.previousKeys = {};
	    }

	    _createClass(Game, [{
	        key: 'keyListener',
	        value: function keyListener(ev, key, pressed) {
	            if (this.keys.reset === key) {
	                if (this.gameOver) {
	                    this.resetGame();
	                } else if (!this.previousKeys[key]) {
	                    this.spawnBall();
	                }
	            }

	            // run through all players and check if one of their event keys was pressed
	            // if it was set that input on that player to true.
	            // the action will be called in the update() for that player/
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this.playerArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var player = _step.value;

	                    if (player.keys.up === key) {
	                        player.input.up = pressed;
	                    } else if (player.keys.down === key) {
	                        player.input.down = pressed;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            this.previousKeys[key] = pressed;
	        }
	    }, {
	        key: 'resetGame',
	        value: function resetGame() {
	            this.gameOver = false;
	            this.playerArray[0].playerReset(this.height);
	            this.playerArray[1].playerReset(this.height);

	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = this.ballArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var ball = _step2.value;

	                    ball.ballReset(this.height, this.width);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'spawnBall',
	        value: function spawnBall() {
	            this.ballArray.push(new _Ball2.default(this.height / 2, this.width / 2, _variables.ballVariables.radius, _variables.ballVariables.color));
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            if (this.playerArray[0].score >= _variables.gameVariables.pointsToWin || this.playerArray[1].score >= _variables.gameVariables.pointsToWin) {
	                var winner = '';
	                if (this.playerArray[0].score >= _variables.gameVariables.pointsToWin) {
	                    winner = 'P1';
	                } else {
	                    winner = 'P2';
	                }
	                this.board.render(this.context);
	                this.scoreboard.printText(this.context, 'Game Over: ' + winner + ' wins!');
	                this.gameOver = true;
	            }

	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = this.ballArray[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var ball = _step3.value;

	                    ball.update(this.height, this.width, this.playerArray[0], this.playerArray[1]);
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            this.playerArray[0].update(this.height);
	            this.playerArray[1].update(this.height);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (!this.gameOver) {
	                this.board.render(this.context);
	                this.playerArray[0].render(this.context);
	                this.playerArray[1].render(this.context);
	                var _iteratorNormalCompletion4 = true;
	                var _didIteratorError4 = false;
	                var _iteratorError4 = undefined;

	                try {
	                    for (var _iterator4 = this.ballArray[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                        var ball = _step4.value;

	                        ball.render(this.context);
	                    }
	                } catch (err) {
	                    _didIteratorError4 = true;
	                    _iteratorError4 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                            _iterator4.return();
	                        }
	                    } finally {
	                        if (_didIteratorError4) {
	                            throw _iteratorError4;
	                        }
	                    }
	                }

	                this.scoreboard.render(this.context, this.playerArray[0], this.playerArray[1]);
	            }
	        }
	    }]);

	    return Game;
	}();

	exports.default = Game;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Paddle = function () {
	    function Paddle(boardHeight, x, color, kiColor, keys, character) {
	        _classCallCheck(this, Paddle);

	        this.height = 50;
	        this.width = 5;
	        this.x = x;
	        this.y = boardHeight / 2 - this.height / 2;
	        this.color = color;

	        this.speed = 5;
	        this.score = 0;
	        this.kiColor = character.kiColor;
	        this.keys = keys;
	        this.character = character;
	        this.input = { up: false, down: false };
	    }

	    _createClass(Paddle, [{
	        key: "setHeight",
	        value: function setHeight(array) {}
	    }, {
	        key: "moveUp",
	        value: function moveUp() {

	            if (this.y - this.speed >= 0) {
	                this.y -= this.speed;
	            }
	        }
	    }, {
	        key: "moveDown",
	        value: function moveDown(boardHeight) {
	            if (this.y + this.height + this.speed <= boardHeight) {
	                this.y += this.speed;
	            }
	        }
	    }, {
	        key: "playerReset",
	        value: function playerReset(boardHeight) {
	            this.y = boardHeight / 2 - this.height / 2;
	            this.score = 0;
	        }
	    }, {
	        key: "drawCharacter",
	        value: function drawCharacter(context) {
	            var nextSectionStart = 0;
	            var skin = this.character.skins.normal;
	            for (var section in skin) {
	                var sectionObj = skin[section];
	                context.fillStyle = sectionObj.color;
	                context.fillRect(this.x, this.y + nextSectionStart, this.width, sectionObj.height);

	                nextSectionStart += sectionObj.height;
	            }
	        }
	    }, {
	        key: "update",
	        value: function update(boardHeight) {
	            if (this.input.up) {
	                this.moveUp();
	            }
	            if (this.input.down) {
	                this.moveDown(boardHeight);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render(context) {
	            this.drawCharacter(context);
	        }
	    }]);

	    return Paddle;
	}();

	exports.default = Paddle;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Board = function () {
	    function Board(height, width, backgrounds) {
	        _classCallCheck(this, Board);

	        this.height = height;
	        this.width = width;
	        this.backgrounds = backgrounds;
	    }

	    _createClass(Board, [{
	        key: 'setBackground',
	        value: function setBackground(id, bgIndex) {
	            document.getElementById(id).style.backgroundImage = 'url(' + this.backgrounds[bgIndex];
	        }
	    }, {
	        key: 'clearBoard',
	        value: function clearBoard(context) {
	            context.clearRect(0, 0, this.width, this.height);
	        }
	    }, {
	        key: 'drawLine',
	        value: function drawLine(context) {
	            context.setLineDash([10, 10]);
	            context.strokeStyle = 'blue';
	            context.lineWidth = 2;

	            context.beginPath();
	            context.moveTo(this.width / 2, 0);
	            context.lineTo(this.width / 2, this.height);
	            context.stroke();
	        }
	    }, {
	        key: 'render',
	        value: function render(context) {
	            this.clearBoard(context);
	            this.drawLine(context);
	        }
	    }]);

	    return Board;
	}();

	exports.default = Board;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ball = function () {
	    function Ball(y, x, radius, color) {
	        var speed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;

	        _classCallCheck(this, Ball);

	        this.y = y;
	        this.x = x;
	        this.vx = Math.random() < 0.5 ? -1 : 1;
	        this.vy = Math.random() < 0.5 ? -.25 : .25;
	        this.speed = speed;
	        this.radius = radius;
	        this.color = color;
	    }

	    _createClass(Ball, [{
	        key: "playerScore",
	        value: function playerScore(player) {
	            player.score++;
	            var snd = new Audio("pong/sounds/pong-03.wav");
	            snd.play();
	        }
	    }, {
	        key: "ballReset",
	        value: function ballReset(boardHeight, boardWidth) {
	            this.x = boardWidth / 2;
	            this.y = boardHeight / 2;
	            this.vy = Math.random() < 0.5 ? -.25 : .25;
	            this.vx *= -1;
	        }
	    }, {
	        key: "update",
	        value: function update(boardHeight, boardWidth, p1, p2) {
	            if (this.x - this.radius <= 0) {
	                this.playerScore(p2);
	                this.ballReset(boardHeight, boardWidth);
	            }

	            if (this.x + this.radius >= boardWidth) {
	                this.playerScore(p1);
	                this.ballReset(boardHeight, boardWidth);
	            }

	            if (this.y - this.radius <= 0 || this.y + this.radius >= boardHeight) {
	                this.vy *= -1;

	                var _snd = new Audio("pong/sounds/pong-01.wav");
	                _snd.play();
	            }

	            if (this.x + this.radius >= p2.x && this.x + this.radius <= p2.x + p2.width) {
	                if (this.y >= p2.y && this.y <= p2.y + p2.height) {
	                    this.x = p2.x - this.radius;
	                    this.color = p2.kiColor;
	                    var _snd2 = new Audio("pong/sounds/pong-02.wav");
	                    _snd2.play();
	                    this.vx *= -1;
	                }
	            }

	            if (this.x - this.radius <= p1.x + p1.width && this.x - this.radius >= p1.x) {
	                if (this.y >= p1.y && this.y <= p1.y + p1.height) {
	                    this.x = p1.x + p1.width + this.radius;
	                    this.color = p1.kiColor;
	                    var snd = new Audio("pong/sounds/pong-02.wav");
	                    snd.play();
	                    this.vx *= -1;
	                }
	            }

	            this.x += this.vx * this.speed;
	            this.y += this.vy * this.speed;
	        }
	    }, {
	        key: "render",
	        value: function render(context) {
	            context.fillStyle = this.color;
	            context.beginPath();
	            // arc(x, y, radius, 0, Pi* 2, true)
	            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
	            context.fill();
	        }
	    }]);

	    return Ball;
	}();

	exports.default = Ball;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ScoreBoard = function () {
	    function ScoreBoard(y, x, color) {
	        _classCallCheck(this, ScoreBoard);

	        this.y = y;
	        this.x = x;
	        this.color = color;
	        this.fontSize = '12px';
	        this.font = 'Helvetica';
	    }

	    _createClass(ScoreBoard, [{
	        key: 'printText',
	        value: function printText(context, text) {
	            context.fillStyle = this.color;
	            context.font = this.fontSize + ' ' + this.font;
	            var scoreWidth = context.measureText(text).width;
	            context.fillText(text, this.x - scoreWidth / 2, this.y);
	        }
	    }, {
	        key: 'render',
	        value: function render(context, p1, p2) {
	            this.printText(context, 'P1: ' + p1.score + '     P2: ' + p2.score);
	        }
	    }]);

	    return ScoreBoard;
	}();

	exports.default = ScoreBoard;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var player1Keys = exports.player1Keys = {
	    up: 65,
	    down: 90
	};

	var player2Keys = exports.player2Keys = {
	    up: 38,
	    down: 40
	};

	var gameKeys = exports.gameKeys = {
	    reset: 32
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// Initial Game Properties

	// Ball
	var ballVariables = exports.ballVariables = {
	    radius: 5,
	    color: 'red'
	};

	var paddleVariables = exports.paddleVariables = {
	    distFromEdge: 35
	};

	var scoreboardVariables = exports.scoreboardVariables = {
	    color: 'white;'
	};

	var gameVariables = exports.gameVariables = {
	    pointsToWin: 10
	};

	var boardVariables = exports.boardVariables = {
	    backgrounds: ['assets/images/background-1.png', 'assets/images/background-2.jpg', 'assets/images/background-3.gif', 'assets/images/background-4.png']
	};

	var characterVariables = exports.characterVariables = {
	    pongku: {
	        kiColor: 'blue',
	        ballSpeedMultiplier: 1,
	        moveSpeedMultiplier: 1,
	        skins: {
	            normal: {
	                hair: {
	                    height: 7,
	                    color: 'yellow'
	                },

	                face: {
	                    height: 5,
	                    color: 'LightSalmon'
	                },

	                body: {
	                    height: 20,
	                    color: 'DarkOrange'
	                },

	                pants: {
	                    height: 20,
	                    color: 'blue'
	                },

	                feet: {
	                    height: 2,
	                    color: 'black'
	                }
	            }
	        }
	    },

	    pongolo: {
	        kiColor: 'white',
	        ballSpeedMultiplier: 1,
	        moveSpeedMultiplier: 1,
	        skins: {
	            normal: {
	                hair: {
	                    height: 7,
	                    color: 'white'
	                },

	                face: {
	                    height: 5,
	                    color: 'green'
	                },

	                body: {
	                    height: 20,
	                    color: 'white'
	                },

	                pants: {
	                    height: 20,
	                    color: 'purple'
	                },

	                feet: {
	                    height: 2,
	                    color: 'brown'
	                }
	            }
	        }
	    },

	    majinPoong: {
	        kiColor: 'darkPink',
	        ballSpeedMultiplier: 1.1,
	        moveSpeedMultiplier: 1,
	        skins: {
	            normal: {
	                hair: {
	                    height: 7,
	                    color: 'pink'
	                },

	                face: {
	                    height: 5,
	                    color: 'pink'
	                },

	                body: {
	                    height: 20,
	                    color: 'pink'
	                },

	                pants: {
	                    height: 20,
	                    color: 'white'
	                },

	                feet: {
	                    height: 2,
	                    color: 'brown'
	                }
	            }
	        }
	    },

	    pongza: {
	        kiColor: 'red',
	        ballSpeedMultiplier: 1,
	        moveSpeedMultiplier: 1.1,

	        skins: {
	            normal: {
	                hair: {
	                    height: 7,
	                    color: 'purple'
	                },

	                face: {
	                    height: 5,
	                    color: 'white'
	                },

	                body: {
	                    height: 5,
	                    color: 'purple'
	                },

	                pants: {
	                    height: 20,
	                    color: 'white'
	                },

	                feet: {
	                    height: 2,
	                    color: 'white'
	                }
	            }
	        }
	    }
	};

/***/ }
/******/ ]);