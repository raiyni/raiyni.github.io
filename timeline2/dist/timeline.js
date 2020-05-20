var Timeline = (function () {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var it,
        normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  SVGElement.prototype.getX = function () {
    return +this.getAttribute('x');
  };

  SVGElement.prototype.getY = function () {
    return +this.getAttribute('y');
  };

  SVGElement.prototype.getWidth = function () {
    return +this.getAttribute('width');
  };

  SVGElement.prototype.getHeight = function () {
    return +this.getAttribute('height');
  };

  SVGElement.prototype.getEndX = function () {
    return this.getX() + this.getWidth();
  };
  /*
   * classList.js: Cross-browser full element.classList implementation.
   * 1.2.20171210
   *
   * By Eli Grey, http://eligrey.com
   * License: Dedicated to the public domain.
   *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
   */

  /*global self, document, DOMException */

  /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */


  if ('document' in self) {
    // Full polyfill for browsers with no classList support
    // Including IE < Edge missing SVGElement.classList
    if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {

      (function (view) {

        if (!('Element' in view)) return;

        var classListProp = 'classList',
            protoProp = 'prototype',
            elemCtrProto = view.Element[protoProp],
            objCtr = Object,
            strTrim = String[protoProp].trim || function () {
          return this.replace(/^\s+|\s+$/g, '');
        },
            arrIndexOf = Array[protoProp].indexOf || function (item) {
          var i = 0,
              len = this.length;

          for (; i < len; i++) {
            if (i in this && this[i] === item) {
              return i;
            }
          }

          return -1;
        },
            // Vendors: please allow content code to instantiate DOMExceptions
        DOMEx = function DOMEx(type, message) {
          this.name = type;
          this.code = DOMException[type];
          this.message = message;
        },
            checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
          if (token === '') {
            throw new DOMEx('SYNTAX_ERR', 'The token must not be empty.');
          }

          if (/\s/.test(token)) {
            throw new DOMEx('INVALID_CHARACTER_ERR', 'The token must not contain space characters.');
          }

          return arrIndexOf.call(classList, token);
        },
            ClassList = function ClassList(elem) {
          var trimmedClasses = strTrim.call(elem.getAttribute('class') || ''),
              classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
              i = 0,
              len = classes.length;

          for (; i < len; i++) {
            this.push(classes[i]);
          }

          this._updateClassName = function () {
            elem.setAttribute('class', this.toString());
          };
        },
            classListProto = ClassList[protoProp] = [],
            classListGetter = function classListGetter() {
          return new ClassList(this);
        }; // Most DOMException implementations don't allow calling DOMException's toString()
        // on non-DOMExceptions. Error's toString() is sufficient here.


        DOMEx[protoProp] = Error[protoProp];

        classListProto.item = function (i) {
          return this[i] || null;
        };

        classListProto.contains = function (token) {
          return ~checkTokenAndGetIndex(this, token + '');
        };

        classListProto.add = function () {
          var tokens = arguments,
              i = 0,
              l = tokens.length,
              token,
              updated = false;

          do {
            token = tokens[i] + '';

            if (!~checkTokenAndGetIndex(this, token)) {
              this.push(token);
              updated = true;
            }
          } while (++i < l);

          if (updated) {
            this._updateClassName();
          }
        };

        classListProto.remove = function () {
          var tokens = arguments,
              i = 0,
              l = tokens.length,
              token,
              updated = false,
              index;

          do {
            token = tokens[i] + '';
            index = checkTokenAndGetIndex(this, token);

            while (~index) {
              this.splice(index, 1);
              updated = true;
              index = checkTokenAndGetIndex(this, token);
            }
          } while (++i < l);

          if (updated) {
            this._updateClassName();
          }
        };

        classListProto.toggle = function (token, force) {
          var result = this.contains(token),
              method = result ? force !== true && 'remove' : force !== false && 'add';

          if (method) {
            this[method](token);
          }

          if (force === true || force === false) {
            return force;
          } else {
            return !result;
          }
        };

        classListProto.replace = function (token, replacement_token) {
          var index = checkTokenAndGetIndex(token + '');

          if (~index) {
            this.splice(index, 1, replacement_token);

            this._updateClassName();
          }
        };

        classListProto.toString = function () {
          return this.join(' ');
        };

        if (objCtr.defineProperty) {
          var classListPropDesc = {
            get: classListGetter,
            enumerable: true,
            configurable: true
          };

          try {
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
          } catch (ex) {
            // IE 8 doesn't support enumerable:true
            // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
            // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
            if (ex.number === undefined || ex.number === -0x7ff5ec54) {
              classListPropDesc.enumerable = false;
              objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
            }
          }
        } else if (objCtr[protoProp].__defineGetter__) {
          elemCtrProto.__defineGetter__(classListProp, classListGetter);
        }
      })(self);
    } // There is full or partial native classList support, so just check if we need

    (function () {

      var testElement = document.createElement('_');
      testElement.classList.add('c1', 'c2'); // Polyfill for IE 10/11 and Firefox <26, where classList.add and
      // classList.remove exist but support only one argument at a time.

      if (!testElement.classList.contains('c2')) {
        var createMethod = function createMethod(method) {
          var original = DOMTokenList.prototype[method];

          DOMTokenList.prototype[method] = function (token) {
            var i,
                len = arguments.length;

            for (i = 0; i < len; i++) {
              token = arguments[i];
              original.call(this, token);
            }
          };
        };

        createMethod('add');
        createMethod('remove');
      }

      testElement.classList.toggle('c3', false); // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
      // support the second argument.

      if (testElement.classList.contains('c3')) {
        var _toggle = DOMTokenList.prototype.toggle;

        DOMTokenList.prototype.toggle = function (token, force) {
          if (1 in arguments && !this.contains(token) === !force) {
            return force;
          } else {
            return _toggle.call(this, token);
          }
        };
      } // replace() polyfill


      if (!('replace' in document.createElement('_').classList)) {
        DOMTokenList.prototype.replace = function (token, replacement_token) {
          var tokens = this.toString().split(' '),
              index = tokens.indexOf(token + '');

          if (~index) {
            tokens = tokens.slice(index);
            this.remove.apply(this, tokens);
            this.add(replacement_token);
            this.add.apply(this, tokens.slice(1));
          }
        };
      }

      testElement = null;
    })();
  }

  /**
   * @this {Promise}
   */
  function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then(
      function(value) {
        // @ts-ignore
        return constructor.resolve(callback()).then(function() {
          return value;
        });
      },
      function(reason) {
        // @ts-ignore
        return constructor.resolve(callback()).then(function() {
          // @ts-ignore
          return constructor.reject(reason);
        });
      }
    );
  }

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function isArray(x) {
    return Boolean(x && typeof x.length !== 'undefined');
  }

  function noop() {}

  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function() {
      fn.apply(thisArg, arguments);
    };
  }

  /**
   * @constructor
   * @param {Function} fn
   */
  function Promise$1(fn) {
    if (!(this instanceof Promise$1))
      throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    /** @type {!number} */
    this._state = 0;
    /** @type {!boolean} */
    this._handled = false;
    /** @type {Promise|undefined} */
    this._value = undefined;
    /** @type {!Array<!Function>} */
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise$1._immediateFn(function() {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self)
        throw new TypeError('A promise cannot be resolved with itself.');
      if (
        newValue &&
        (typeof newValue === 'object' || typeof newValue === 'function')
      ) {
        var then = newValue.then;
        if (newValue instanceof Promise$1) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise$1._immediateFn(function() {
        if (!self._handled) {
          Promise$1._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  /**
   * @constructor
   */
  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(
        function(value) {
          if (done) return;
          done = true;
          resolve(self, value);
        },
        function(reason) {
          if (done) return;
          done = true;
          reject(self, reason);
        }
      );
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise$1.prototype['catch'] = function(onRejected) {
    return this.then(null, onRejected);
  };

  Promise$1.prototype.then = function(onFulfilled, onRejected) {
    // @ts-ignore
    var prom = new this.constructor(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise$1.prototype['finally'] = finallyConstructor;

  Promise$1.all = function(arr) {
    return new Promise$1(function(resolve, reject) {
      if (!isArray(arr)) {
        return reject(new TypeError('Promise.all accepts an array'));
      }

      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(
                val,
                function(val) {
                  res(i, val);
                },
                reject
              );
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise$1.resolve = function(value) {
    if (value && typeof value === 'object' && value.constructor === Promise$1) {
      return value;
    }

    return new Promise$1(function(resolve) {
      resolve(value);
    });
  };

  Promise$1.reject = function(value) {
    return new Promise$1(function(resolve, reject) {
      reject(value);
    });
  };

  Promise$1.race = function(arr) {
    return new Promise$1(function(resolve, reject) {
      if (!isArray(arr)) {
        return reject(new TypeError('Promise.race accepts an array'));
      }

      for (var i = 0, len = arr.length; i < len; i++) {
        Promise$1.resolve(arr[i]).then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise$1._immediateFn =
    // @ts-ignore
    (typeof setImmediate === 'function' &&
      function(fn) {
        // @ts-ignore
        setImmediate(fn);
      }) ||
    function(fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /** @suppress {undefinedVars} */
  var globalNS = (function() {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') {
      return self;
    }
    if (typeof window !== 'undefined') {
      return window;
    }
    if (typeof global !== 'undefined') {
      return global;
    }
    throw new Error('unable to locate global object');
  })();

  if (!('Promise' in globalNS)) {
    globalNS['Promise'] = Promise$1;
  } else if (!globalNS.Promise.prototype['finally']) {
    globalNS.Promise.prototype['finally'] = finallyConstructor;
  }

  var svg = function svg(tag, attrs) {
    var elem = document.createElementNS('http://www.w3.org/2000/svg', tag);

    for (var attr in attrs) {
      if (attr === 'append_to') {
        var parent = attrs.append_to;
        parent.appendChild(elem);
      } else if (attr === 'prepend_to') {
        var _parent = attrs.prepend_to;

        _parent.prepend(elem);
      } else if (attr === 'innerHTML') {
        elem.innerHTML = attrs.innerHTML;
      } else {
        elem.setAttribute(attr, attrs[attr]);
      }
    }

    return elem;
  };
  var toTextFragment = function toTextFragment(text) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = text;

    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }

    return frag;
  };
  var toDom = function toDom(html) {
    var frag = document.createRange().createContextualFragment(html);
    return frag.firstChild;
  };
  var delegate = function delegate(element, event, selector, listener) {
    element.addEventListener(event, function (e) {
      var delegatedTarget = e.target.closest(selector);

      if (delegatedTarget) {
        var delegateEvent = _objectSpread2(_objectSpread2({}, e), {}, {
          target: delegatedTarget
        });

        listener.call(this, delegateEvent);
      }
    });
  };

  var Popup = /*#__PURE__*/function () {
    function Popup(options, parent) {
      _classCallCheck(this, Popup);

      _defineProperty(this, "options", void 0);

      _defineProperty(this, "parent", void 0);

      _defineProperty(this, "title", void 0);

      _defineProperty(this, "subtitle", void 0);

      _defineProperty(this, "pointer", void 0);

      this.options = options;
      this.parent = parent;
      this.title = toDom('<div class="title"></div>');
      this.subtitle = toDom('<div class="subtitle"></div>');
      this.pointer = toDom('<div class="pointer"></div>');
      parent.appendChild(this.title);
      parent.appendChild(this.subtitle);
      parent.appendChild(this.pointer);
    }

    _createClass(Popup, [{
      key: "show",
      value: function show(config) {
        if (!config.positionTarget) throw new Error('target is required to show popup');

        if (!config.position) {
          config.position = 'left';
        }

        if (this.options.popupProducer) {
          this.parent.innerHTML = this.options.popupProducer(config.eventTarget);
          this.pointer = toDom('<div class="pointer"></div>');
          this.parent.appendChild(this.pointer);
        } else {
          this.title.innerHTML = config.title;
          this.subtitle.innerHTML = config.subtitle;
          this.parent.style.width = this.parent.clientWidth + 'px';
        }

        var pos = config.positionTarget.getBBox();

        if (config.position == 'left') {
          this.parent.style.left = pos.x + (pos.width + 10) + 'px';
          this.parent.style.top = pos.y + 'px';
          this.pointer.style.transform = 'rotateZ(90deg)';
          this.pointer.style.left = '-7px';
          this.pointer.style.top = '2px';
        }

        this.parent.style.opacity = '1';
      }
    }, {
      key: "hide",
      value: function hide() {
        this.parent.style.opacity = '0';
      }
    }, {
      key: "isVisible",
      value: function isVisible() {
        return this.parent.style.opacity == '0';
      }
    }]);

    return Popup;
  }();

  var EVENT;

  (function (EVENT) {
    EVENT[EVENT["SHOW_POPUP"] = 0] = "SHOW_POPUP";
    EVENT[EVENT["HIDE_POPUP"] = 1] = "HIDE_POPUP";
    EVENT[EVENT["TOGGLE_POPUP"] = 2] = "TOGGLE_POPUP";
  })(EVENT || (EVENT = {}));

  var Column = /*#__PURE__*/function () {
    function Column(options, config, tasks) {
      _classCallCheck(this, Column);

      _defineProperty(this, "options", void 0);

      _defineProperty(this, "config", void 0);

      _defineProperty(this, "tasks", void 0);

      _defineProperty(this, "container", void 0);

      this.options = options;
      this.config = config;
      this.tasks = tasks;
    }

    _createClass(Column, [{
      key: "render",
      value: function render(layer, offset) {
        var _this = this;

        this.container = svg('g', {
          append_to: layer,
          "class": 'column-wrapper',
          x: offset.x
        });
        offset.y = this.options.headerHeight;
        var title = svg('text', {
          append_to: this.container,
          "class": 'column-wrapper',
          y: offset.y,
          x: offset.x
        });
        var text = toTextFragment(this.config.text);
        title.appendChild(text);
        offset.y += this.options.padding + 6;
        this.tasks.forEach(function (t) {
          var label = svg('text', {
            append_to: _this.container,
            "class": 'column-wrapper',
            y: offset.y,
            x: offset.x
          });
          var text = toTextFragment(t.get(_this.config.field));
          label.appendChild(text);
          offset.y += t.get('height') + _this.options.padding;
        });
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.container.getBBox().width;
      }
    }]);

    return Column;
  }();

  var Prop = /*#__PURE__*/function () {
    function Prop() {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Prop);

      _defineProperty(this, "_properties", {});

      this.properties = o;
    }

    _createClass(Prop, [{
      key: "set",
      value: function set(key, value) {
        this._properties[key] = value;
      }
    }, {
      key: "get",
      value: function get(key) {
        return this._properties[key];
      }
    }, {
      key: "unset",
      value: function unset(key) {
        delete this._properties[key];
      }
    }, {
      key: "properties",
      get: function get() {
        return _objectSpread2({}, this._properties);
      },
      set: function set(o) {
        this._properties = _objectSpread2(_objectSpread2({}, this._properties), o);
      }
    }]);

    return Prop;
  }();

  var VIEW_MODE;

  (function (VIEW_MODE) {
    VIEW_MODE["QUARTER_DAY"] = "Quarter Day";
    VIEW_MODE["HALF_DAY"] = "Half Day";
    VIEW_MODE["DAY"] = "Day";
    VIEW_MODE["WEEK"] = "Week";
    VIEW_MODE["MONTH"] = "Month";
    VIEW_MODE["YEAR"] = "Year";
  })(VIEW_MODE || (VIEW_MODE = {}));

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var dayjs_min = createCommonjsModule(function (module, exports) {
  !function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d={s:c,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:a,w:s,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,e,n){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else {var i=t.name;m[i]=t,r=i;}return !n&&r&&(l=r),r||!n&&l},g=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},D=d;D.l=M,D.i=y,D.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t);}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init();},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},d.$utils=function(){return D},d.isValid=function(){return !("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return g(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<g(t)},d.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",n)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,e){var n=D.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return f?n:n.endOf(i)},$=function(t,e){return D.w(h.toDate()[t].apply(h.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case n:return $(M+"Seconds",2);case e:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[n]=c+"Minutes",h[e]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate();}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(e){var n=g(f);return D.w(n.date(n.date()+Math.round(e*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[n]=6e4,h[r]=36e5,h[e]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:c(h,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return n.replace(f,function(t,e){return e||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[n]=m/6e4,c[e]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,e){return t(e,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});
  });

  var Bar = /*#__PURE__*/function (_Prop) {
    _inherits(Bar, _Prop);

    var _super = _createSuper(Bar);

    _createClass(Bar, [{
      key: "end",
      get: function get() {
        return this._end;
      }
    }, {
      key: "start",
      get: function get() {
        return this._start;
      }
    }, {
      key: "height",
      get: function get() {
        return this._height;
      }
    }]);

    function Bar(options, config, task) {
      var _config$cornerRadius, _config$progress, _config$y;

      var _this;

      _classCallCheck(this, Bar);

      _this = _super.call(this, config);

      _defineProperty(_assertThisInitialized(_this), "options", void 0);

      _defineProperty(_assertThisInitialized(_this), "config", void 0);

      _defineProperty(_assertThisInitialized(_this), "task", void 0);

      _defineProperty(_assertThisInitialized(_this), "width", void 0);

      _defineProperty(_assertThisInitialized(_this), "x", void 0);

      _defineProperty(_assertThisInitialized(_this), "y", void 0);

      _defineProperty(_assertThisInitialized(_this), "bar", void 0);

      _defineProperty(_assertThisInitialized(_this), "label", void 0);

      _defineProperty(_assertThisInitialized(_this), "group", void 0);

      _defineProperty(_assertThisInitialized(_this), "_end", void 0);

      _defineProperty(_assertThisInitialized(_this), "_start", void 0);

      _defineProperty(_assertThisInitialized(_this), "_height", void 0);

      _this.options = options;
      _this.config = _objectSpread2({}, config);
      _this.config.cornerRadius = (_config$cornerRadius = config.cornerRadius) !== null && _config$cornerRadius !== void 0 ? _config$cornerRadius : 0;
      _this.task = task;
      _this._height = config.height || options.barHeight;
      _this._start = dayjs_min(config.start);
      _this._end = dayjs_min(config.end);
      _this.config.progress = (_config$progress = config.progress) !== null && _config$progress !== void 0 ? _config$progress : 100;
      _this.config.y = (_config$y = config.y) !== null && _config$y !== void 0 ? _config$y : 0; // // make task invalid if duration too large

      if (_this._end.diff(_this._start, 'year') > 10) {
        _this._end = null;
      } // invalid dates


      if (!_this._start && !_this._end) {
        _this._start = dayjs_min().startOf('day');
        _this._end = _this._start.add(2, 'day');
      }

      if (!_this._start && _this._end) {
        _this._start = _this._end.subtract(2, 'day');
      }

      if (_this._start && !_this._end) {
        _this._end = _this._start.add(2, 'day');
      } // if hours is not set, assume the last day is full day
      // e.g: 2018-09-09 becomes 2018-09-09 23:59:59


      if (_this._end.isSame(_this._end.startOf('day'))) {
        _this._end = _this._end.add(24, 'hour');
      }

      _this.set('start', _this._start);

      _this.set('end', _this._end);

      var duration = _this.end.diff(_this.start, 'hour') / _this.options.step;

      _this.width = duration * _this.options.columnWidth;
      return _this;
    }

    _createClass(Bar, [{
      key: "computeX",
      value: function computeX(startDate) {
        if (VIEW_MODE.MONTH == this.options.viewMode) {
          return this.start.diff(startDate, 'day') * this.options.columnWidth / 30;
        }

        return this.start.diff(startDate, 'hour') / this.options.step * this.options.columnWidth;
      }
    }, {
      key: "render",
      value: function render(layer, startDate, offset) {
        this.x = this.computeX(startDate) + offset.x;
        this.y = this.config.y + offset.y;
        this.group = svg('g', {
          "class": 'bar-wrapper',
          'data-id': this.task.get('id'),
          append_to: layer
        });
        var barGroup = svg('g', {
          "class": 'bar-group',
          append_to: this.group
        });

        if (this.options.popup) {
          barGroup.addEventListener('click', this, false);
        }

        this.drawBar(barGroup);
        this.drawProgressBar(barGroup);
        this.drawLabel(barGroup);
      }
    }, {
      key: "drawBar",
      value: function drawBar(layer) {
        console.log(this.x, this.y);
        this.bar = svg('rect', {
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
          rx: this.config.cornerRadius,
          ry: this.config.cornerRadius,
          "class": 'bar',
          append_to: layer
        });
      }
    }, {
      key: "drawProgressBar",
      value: function drawProgressBar(layer) {
        var _this2 = this;

        var rect = svg('rect', {
          x: this.x,
          y: this.y,
          width: this.width * (this.config.progress / 100) || 0,
          height: this.height,
          rx: this.config.cornerRadius,
          ry: this.config.cornerRadius,
          "class": 'bar-progress',
          append_to: layer
        });

        if (this.config.style) {
          Object.keys(this.config.style).forEach(function (k) {
            return rect.style[k] = _this2.config.style[k];
          });
        }
      }
    }, {
      key: "drawLabel",
      value: function drawLabel(layer) {
        var _this3 = this;

        if (!this.config.text) return;
        this.label = svg('text', {
          x: this.x + this.width / 2,
          y: this.y + this.height / 2,
          "class": 'bar-label',
          append_to: layer
        });
        this.label.appendChild(toTextFragment(this.config.text));
        requestAnimationFrame(function () {
          return _this3.updateLabelPosition();
        });
      }
    }, {
      key: "updateLabelPosition",
      value: function updateLabelPosition() {
        if (this.label.getBBox().width > this.bar.getWidth()) {
          this.label.classList.add('big');
          this.label.setAttribute('x', this.bar.getX() + this.bar.getWidth() + 5 + '');
        } else {
          this.label.classList.remove('big');
          this.label.setAttribute('x', this.bar.getX() + this.bar.getWidth() / 2 + '');
        }
      } // TODO: Support events better

    }, {
      key: "handleEvent",
      value: function handleEvent(evt) {
        var key = evt.type;

        if (key == 'click' && this.options.popup) {
          this.options.dispatch(EVENT.SHOW_POPUP, {
            eventTarget: this,
            positionTarget: this.group,
            title: this.task.get('name'),
            subtitle: this.get('start').format('MMM DD') + ' - ' + this.get('end').format('MMM DD')
          });
          return;
        }

        if (!this.options.events || !this.options.events[key]) throw new Error('Event not implemented.');
        this.options.events[key].call(this, evt);
      }
    }]);

    return Bar;
  }(Prop);

  var Milestone = /*#__PURE__*/function () {
    _createClass(Milestone, [{
      key: "date",
      get: function get() {
        return this._date;
      }
    }]);

    function Milestone(options, config) {
      var _config$y;

      _classCallCheck(this, Milestone);

      _defineProperty(this, "href", void 0);

      _defineProperty(this, "height", void 0);

      _defineProperty(this, "width", void 0);

      _defineProperty(this, "_date", void 0);

      _defineProperty(this, "options", void 0);

      _defineProperty(this, "config", void 0);

      this.options = options;
      this.config = _objectSpread2({}, config);
      this.config.y = (_config$y = config.y) !== null && _config$y !== void 0 ? _config$y : 0;
      this.href = config.href;
      this.height = config.height || 16;
      this.width = config.width || 16;
      this._date = dayjs_min(config.date);
    }

    _createClass(Milestone, [{
      key: "computeX",
      value: function computeX(startDate) {
        if (VIEW_MODE.MONTH == this.options.viewMode) {
          return this.date.diff(startDate, 'day') * this.options.columnWidth / 30;
        }

        return this.date.diff(startDate, 'hour') / this.options.step * this.options.columnWidth;
      }
    }, {
      key: "render",
      value: function render(layer, startDate, offset) {
        svg('image', {
          x: this.computeX(startDate) + offset.x,
          y: this.config.y + offset.y,
          width: this.width,
          height: this.height,
          href: this.href,
          append_to: layer
        });
      }
    }]);

    return Milestone;
  }();

  function generate_id(task) {
    return 'task_' + Math.random().toString(36).slice(2, 12);
  }

  function isSingle(options) {
    return 'plan' in options;
  }

  var Task = /*#__PURE__*/function (_Prop) {
    _inherits(Task, _Prop);

    var _super = _createSuper(Task);

    function Task(options, config) {
      var _this;

      _classCallCheck(this, Task);

      _this = _super.call(this);

      _defineProperty(_assertThisInitialized(_this), "options", void 0);

      _defineProperty(_assertThisInitialized(_this), "_plans", []);

      _defineProperty(_assertThisInitialized(_this), "_milestones", []);

      _this.options = options;
      _this.properties = _objectSpread2(_objectSpread2({}, config), {}, {
        height: 0,
        id: generate_id(_assertThisInitialized(_this))
      });

      if (isSingle(config)) {
        _this._plans = [[new Bar(options, config.plan, _assertThisInitialized(_this))]];
        _this._milestones = [config.milestones.map(function (m) {
          return new Milestone(options, m);
        })];
      } else {
        var rowOffsets = [];
        _this._plans = config.plans.map(function (bo, idx) {
          var arr = bo.map(function (b) {
            if (idx > 0) b.y = rowOffsets[idx - 1];
            return new Bar(options, b, _assertThisInitialized(_this));
          });
          var max = Math.max.apply(Math, _toConsumableArray(arr.map(function (b) {
            return b.height;
          })));
          rowOffsets.push((idx > 0 ? rowOffsets[idx - 1] : 0) + max);
          return arr;
        });
        console.log(rowOffsets);
        _this._milestones = config.milestones.map(function (m, idx) {
          return m.map(function (m2) {
            if (idx > 0 && rowOffsets[idx - 1]) m2.y = rowOffsets[idx - 1];
            return new Milestone(options, m2);
          });
        });
      }

      _this.computeHeight();

      _this.computeBoundingDates();

      return _this;
    }

    _createClass(Task, [{
      key: "computeHeight",
      value: function computeHeight() {
        this.set('height', this._plans.map(function (a) {
          return Math.max.apply(Math, _toConsumableArray(a.map(function (p) {
            return p.height;
          })));
        }).reduce(function (a, b) {
          return a + b;
        }, 0));
      }
    }, {
      key: "computeBoundingDates",
      value: function computeBoundingDates() {
        var _this2 = this;

        if (!this.get('start')) {
          this.set('start', this._plans[0][0].start.clone());
        }

        if (!this.get('end')) {
          this.set('end', this._plans[0][0].end.clone());
        }

        this._plans.forEach(function (a) {
          return a.forEach(function (p) {
            if (!_this2.get('start') || p.start.isBefore(_this2.get('start'))) {
              _this2.set('start', p.start.clone());
            }

            if (!_this2.get('end') || p.end.isAfter(_this2.get('end'))) {
              _this2.set('end', p.end.clone());
            }
          });
        });

        this._milestones.forEach(function (a) {
          return a.forEach(function (p) {
            if (!_this2.get('start') || p.date.isBefore(_this2.get('start'))) {
              _this2.set('start', p.date.clone());
            }

            if (!_this2.get('end') || p.date.isAfter(_this2.get('end'))) {
              _this2.set('end', p.date.clone());
            }
          });
        });
      }
    }, {
      key: "render",
      value: function render(layer, startDate, offset) {
        var barGroup = svg('g', {
          "class": 'bar',
          append_to: layer
        });
        var milestoneGroup = svg('g', {
          "class": "milestone-wrapper",
          'data-id': this.get('id'),
          append_to: layer
        });

        this._plans.forEach(function (row) {
          return row.forEach(function (p) {
            return p.render(barGroup, startDate, offset);
          });
        });

        this._milestones.forEach(function (row) {
          return row.forEach(function (m) {
            return m.render(milestoneGroup, startDate, offset);
          });
        });
      }
    }]);

    return Task;
  }(Prop);

  var Tasks = /*#__PURE__*/function () {
    function Tasks(options, config) {
      _classCallCheck(this, Tasks);

      _defineProperty(this, "options", void 0);

      _defineProperty(this, "_tasks", void 0);

      this.options = options;
      this._tasks = config.map(function (c) {
        return new Task(options, c);
      });
    }

    _createClass(Tasks, [{
      key: "forEach",
      value: function forEach(callable) {
        this._tasks.forEach(callable);
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        var _this = this;

        return this._tasks.map(function (t) {
          return t.get('height');
        }).reduce(function (a, b) {
          return a + b + _this.options.padding;
        });
      }
    }]);

    return Tasks;
  }();

  var Grid = /*#__PURE__*/function () {
    function Grid(options, taskOptions) {
      var _this = this;

      _classCallCheck(this, Grid);

      _defineProperty(this, "options", void 0);

      _defineProperty(this, "_start", void 0);

      _defineProperty(this, "_end", void 0);

      _defineProperty(this, "dates", void 0);

      _defineProperty(this, "tasks", void 0);

      _defineProperty(this, "columns", []);

      this.options = options;
      this.updateViewScale();
      this.tasks = new Tasks(this.options, taskOptions);
      this.columns = options.columns.map(function (c) {
        return new Column(_this.options, c, _this.tasks);
      });
      this.setupDates();
    }

    _createClass(Grid, [{
      key: "setupDates",
      value: function setupDates() {
        this.setBoundingDates();
        this.convertDates();
        this.fillDates();
      }
    }, {
      key: "fillDates",
      value: function fillDates() {
        this.dates = [];
        var d = null;

        do {
          if (!d) {
            d = dayjs_min(this.start);
          } else if (VIEW_MODE.YEAR == this.options.viewMode) {
            d = d.add(1, 'year');
          } else if (VIEW_MODE.MONTH == this.options.viewMode) {
            d = d.add(1, 'month');
          } else {
            d = d.add(this.options.step, 'hour');
          }

          this.dates.push(d);
        } while (d.isBefore(this._end));
      }
    }, {
      key: "updateViewScale",
      value: function updateViewScale() {
        var mode = this.options.viewMode;

        if (mode === VIEW_MODE.DAY) {
          this.options.step = 24;
          this.options.columnWidth = 38;
        } else if (mode === VIEW_MODE.HALF_DAY) {
          this.options.step = 24 / 2;
          this.options.columnWidth = 38;
        } else if (mode === VIEW_MODE.QUARTER_DAY) {
          this.options.step = 24 / 4;
          this.options.columnWidth = 38;
        } else if (mode === VIEW_MODE.WEEK) {
          this.options.step = 24 * 7;
          this.options.columnWidth = 140;
        } else if (mode === VIEW_MODE.MONTH) {
          this.options.step = 24 * 30;
          this.options.columnWidth = 120;
        } else if (mode === VIEW_MODE.YEAR) {
          this.options.step = 24 * 365;
          this.options.columnWidth = 120;
        }
      }
    }, {
      key: "convertDates",
      value: function convertDates() {
        var _this2 = this;

        this._start = this._start.startOf('day');
        this._end = this._end.startOf('day');

        if ([VIEW_MODE.QUARTER_DAY, VIEW_MODE.HALF_DAY].some(function (k) {
          return k == _this2.options.viewMode;
        })) {
          this._start = this._start.subtract(7, 'day');
          this._end = this._end.add(7, 'day');
        } else if (VIEW_MODE.MONTH == this.options.viewMode) {
          this._start = this._start.subtract(1, 'year');
          this._end = this._end.add(1, 'year');
        } else if (VIEW_MODE.YEAR == this.options.viewMode) {
          this._start = this._start.subtract(2, 'year');
          this._end = this._end.add(2, 'year');
        } else {
          this._start = this._start.subtract(1, 'month');
          this._end = this._end.add(1, 'month');
        }
      }
    }, {
      key: "setBoundingDates",
      value: function setBoundingDates() {
        var _this3 = this;

        this.tasks.forEach(function (task) {
          if (!_this3._start || task.get('start').isBefore(_this3._start)) {
            _this3._start = task.get('start').clone();
          }

          if (!_this3._end || task.get('end').isAfter(_this3._end)) {
            _this3._end = task.get('end').clone();
          }
        });
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.dates.length * this.options.columnWidth;
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return this.options.headerHeight + this.tasks.getHeight() + this.options.padding;
      }
    }, {
      key: "render",
      value: function render(parent) {
        var _this4 = this;

        parent.setAttribute('width', "".concat(this.getWidth()));
        parent.setAttribute('height', "".concat(this.getHeight()));
        var columnLayer = svg('g', {
          "class": 'columns'
        });
        this.drawColumns(columnLayer).then(function () {
          return _this4.renderStage2(parent, columnLayer.getBBox().width + _this4.options.padding * _this4.columns.length);
        });
        parent.appendChild(columnLayer);
      }
    }, {
      key: "renderStage2",
      value: function renderStage2(parent, width) {
        var _this5 = this;

        var taskLayer = svg('g', {
          "class": 'bar',
          prepend_to: parent
        });
        var dateLayer = svg('g', {
          "class": 'date',
          prepend_to: parent
        });
        var gridLayer = svg('g', {
          "class": 'grid',
          prepend_to: parent
        });
        var offset = {
          x: width,
          y: 0
        };
        this.drawBackground(gridLayer, offset);
        this.drawRows(gridLayer, offset);
        this.drawHeader(gridLayer, offset);
        this.drawTicks(gridLayer, offset);
        this.highlightCurrentDay(gridLayer, offset);
        this.drawDates(dateLayer, offset);
        offset.y = this.options.headerHeight + this.options.padding;
        this.tasks.forEach(function (t) {
          t.render(taskLayer, _this5._start, offset);
          offset.y += t.get('height') + _this5.options.padding;
        });
      }
    }, {
      key: "drawColumns",
      value: function drawColumns(layer) {
        var columnsLayer = svg('g', {
          append_to: layer
        });
        var offset = {
          x: this.options.padding,
          y: 0
        };
        var idx = 0,
            len = this.columns.length,
            padding = this.options.padding;
        var renderers = this.columns.map(function (col) {
          return function (resolve, reject) {
            col.render(columnsLayer, offset);
            window.requestAnimationFrame(function () {
              offset.x += col.getWidth() + padding;
              resolve();
            });
          };
        });
        return new Promise(function (resolve, reject) {

          (function recurse(idx) {
            if (idx >= len) {
              resolve();
              return;
            }

            new Promise(renderers[idx]).then(function () {
              return recurse(++idx);
            });
          })(idx);
        });
      }
    }, {
      key: "drawBackground",
      value: function drawBackground(layer, offset) {
        svg('rect', {
          x: 0,
          y: 0,
          width: this.getWidth() + offset.x,
          height: this.getHeight(),
          "class": 'grid-background',
          append_to: layer
        });
      }
    }, {
      key: "drawRows",
      value: function drawRows(layer, offset) {
        var _this6 = this;

        var rowsLayer = svg('g', {
          append_to: layer
        });
        var linesLayer = svg('g', {
          append_to: layer
        });
        var rowWidth = this.getWidth() + offset.x;
        var y = this.options.headerHeight + this.options.padding / 2;
        this.tasks.forEach(function (task) {
          var rowHeight = task.get('height') + _this6.options.padding;

          svg('rect', {
            x: 0,
            y: y,
            width: rowWidth,
            height: rowHeight,
            "class": 'grid-row',
            append_to: rowsLayer
          });
          svg('line', {
            x1: 0,
            y1: y + rowHeight,
            x2: rowWidth,
            y2: y + rowHeight,
            "class": 'row-line',
            append_to: linesLayer
          });
          y += rowHeight;
        });
      }
    }, {
      key: "drawHeader",
      value: function drawHeader(layer, offset) {
        svg('rect', {
          x: offset.x,
          y: 0,
          width: this.getWidth(),
          height: this.options.headerHeight + 10,
          "class": 'grid-header',
          append_to: layer
        });
      }
    }, {
      key: "drawTicks",
      value: function drawTicks(layer, offset) {
        var x = offset.x;
        var y = this.options.headerHeight + this.options.padding / 2,
            height = this.tasks.getHeight();

        var _iterator = _createForOfIteratorHelper(this.dates),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var date = _step.value;
            var clazz = 'tick';

            if (VIEW_MODE.DAY == this.options.viewMode && date.date() == 1 || VIEW_MODE.WEEK == this.options.viewMode && date.date() >= 1 && date.date() < 8 || VIEW_MODE.MONTH == this.options.viewMode && (date.month() + 1) % 3 === 0) {
              clazz += ' thick';
            }

            svg('path', {
              d: "M ".concat(x, " ").concat(y, " v ").concat(height),
              "class": clazz,
              append_to: layer
            });

            if (VIEW_MODE.MONTH == this.options.viewMode) {
              x += date.daysInMonth() * this.options.columnWidth / 30;
            } else {
              x += this.options.columnWidth;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "highlightCurrentDay",
      value: function highlightCurrentDay(layer, offset) {
        if (VIEW_MODE.DAY == this.options.viewMode) {
          var x = dayjs_min().diff(this.start, 'hour') / this.options.step * this.options.columnWidth;
          svg('rect', {
            x: x + offset.x,
            y: 0,
            width: this.options.columnWidth,
            height: this.getHeight(),
            "class": 'today-highlight',
            append_to: layer
          });
        }
      }
    }, {
      key: "drawDates",
      value: function drawDates(layer, offset) {
        var lastDate = null;
        var i = 0;

        var _iterator2 = _createForOfIteratorHelper(this.dates),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var d = _step2.value;
            var date = this.getDateInfo(d, lastDate, i++);
            lastDate = d;
            var lowerText = svg('text', {
              x: date.lower_x + offset.x,
              y: date.lower_y,
              "class": 'lower-text',
              append_to: layer
            });
            lowerText.appendChild(toTextFragment(date.lower_text));

            if (date.upper_text) {
              var upperText = svg('text', {
                x: date.upper_x + offset.x,
                y: date.upper_y,
                "class": 'upper-text',
                append_to: layer
              });
              upperText.appendChild(toTextFragment(date.upper_text)); // remove out-of-bound dates
              // if ($upper_text.getBBox().x2 > this.getLayer('grid').getBBox().width) {
              //   $upper_text.remove()
              // }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }, {
      key: "getDateInfo",
      value: function getDateInfo(date, last_date, i) {
        if (!last_date) {
          last_date = date.add(1, 'year');
        }

        var date_text = {
          'Quarter Day_lower': date.format('HH'),
          'Half Day_lower': date.format('HH'),
          Day_lower: date.date() !== last_date.date() ? date.format('D') : '',
          Week_lower: date.month() !== last_date.month() ? date.format('D MMM') : date.format('D'),
          Month_lower: date.format('MMMM'),
          Year_lower: date.format('YYYY'),
          'Quarter Day_upper': date.date() !== last_date.date() ? date.format('D MMM') : '',
          'Half Day_upper': // eslint-disable-next-line no-nested-ternary
          date.date() !== last_date.date() ? date.month() !== last_date.month() ? date.format('D MMM') : date.format('D') : '',
          Day_upper: date.month() !== last_date.month() ? date.format('MMMM') : '',
          Week_upper: date.month() !== last_date.month() ? date.format('MMMM') : '',
          Month_upper: date.year() !== last_date.year() ? date.format('YYYY') : '',
          Year_upper: date.year() !== last_date.year() ? date.format('YYYY') : ''
        };
        var base_pos = {
          x: i * this.options.columnWidth,
          lower_y: this.options.headerHeight,
          upper_y: this.options.headerHeight - 25
        };
        var x_pos = {
          'Quarter Day_lower': this.options.columnWidth * 4 / 2,
          'Quarter Day_upper': 0,
          'Half Day_lower': this.options.columnWidth * 2 / 2,
          'Half Day_upper': 0,
          Day_lower: this.options.columnWidth / 2,
          Day_upper: this.options.columnWidth * 30 / 2,
          Week_lower: 0,
          Week_upper: this.options.columnWidth * 4 / 2,
          Month_lower: this.options.columnWidth / 2,
          Month_upper: this.options.columnWidth * 12 / 2,
          Year_lower: this.options.columnWidth / 2,
          Year_upper: this.options.columnWidth * 30 / 2
        };
        return {
          upper_text: date_text["".concat(this.options.viewMode, "_upper")],
          lower_text: date_text["".concat(this.options.viewMode, "_lower")],
          upper_x: base_pos.x + x_pos["".concat(this.options.viewMode, "_upper")],
          upper_y: base_pos.upper_y,
          lower_x: base_pos.x + x_pos["".concat(this.options.viewMode, "_lower")],
          lower_y: base_pos.lower_y
        };
      }
    }, {
      key: "start",
      get: function get() {
        return this._start;
      },
      set: function set(start) {
        this._start = start;
      }
    }, {
      key: "end",
      get: function get() {
        return this._end;
      },
      set: function set(end) {
        this._end = end;
      }
    }]);

    return Grid;
  }();

  var Timeline = /*#__PURE__*/function () {
    function Timeline(selector, tasks, options) {
      var _this = this;

      _classCallCheck(this, Timeline);

      _defineProperty(this, "options", {
        headerHeight: 50,
        columnWidth: 30,
        step: 24,
        barHeight: 20,
        padding: 18,
        viewMode: VIEW_MODE.DAY,
        dateFormat: 'YYYY-MM-DD',
        popup: true,
        popupProducer: null,
        events: null,
        columns: []
      });

      _defineProperty(this, "svg", void 0);

      _defineProperty(this, "container", void 0);

      _defineProperty(this, "grid", void 0);

      _defineProperty(this, "popup", void 0);

      this.options = _objectSpread2(_objectSpread2({}, this.options), options);
      this.options.dispatch = this.dispatch.bind(this);
      var parent = document.querySelector(selector);
      this.container = document.createElement('div');
      this.container.style.overflow = 'auto';
      this.container.style.position = 'relative';
      this.container.style.paddingBottom = '100px';
      this.svg = svg('svg', {
        "class": 'gantt'
      });
      parent.appendChild(this.container);
      this.container.appendChild(this.svg);
      this.grid = new Grid(this.options, tasks);
      this.render();
      var popupContainer = document.createElement('div');
      popupContainer.classList.add('popup-wrapper');
      popupContainer.style.opacity = '0';
      this.container.appendChild(popupContainer);
      this.popup = new Popup(this.options, popupContainer);
      delegate(this.svg, 'click', '.grid-row, .grid-header', function () {
        _this.popup.hide();
      });
    }

    _createClass(Timeline, [{
      key: "render",
      value: function render() {
        this.grid.render(this.svg);
      }
    }, {
      key: "dispatch",
      value: function dispatch(key, payload) {
        switch (key) {
          case EVENT.SHOW_POPUP:
            this.popup.show(payload);
            break;

          case EVENT.HIDE_POPUP:
            this.popup.hide();
            break;
        }
      }
    }]);

    return Timeline;
  }();

  return Timeline;

}());
