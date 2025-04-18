/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ICAL = factory());
})(this, (function () { 'use strict';

  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
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
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
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
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeFunction(fn) {
    try {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
      return typeof fn === "function";
    }
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
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
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
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
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
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

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/.
   * Portions Copyright (C) Philipp Kewisch */
  /**
   * Represents the BINARY value type, which contains extra methods for encoding and decoding.
   *
   * @memberof ICAL
   */
  var Binary = /*#__PURE__*/function () {
    /**
     * Creates a new ICAL.Binary instance
     *
     * @param {String} aValue     The binary data for this value
     */
    function Binary(aValue) {
      _classCallCheck(this, Binary);
      /**
       * The type name, to be used in the jCal object.
       * @default "binary"
       * @constant
       */
      _defineProperty(this, "icaltype", "binary");
      this.value = aValue;
    }
    return _createClass(Binary, [{
      key: "decodeValue",
      value:
      /**
       * Base64 decode the current value
       *
       * @return {String}         The base64-decoded value
       */
      function decodeValue() {
        return this._b64_decode(this.value);
      }

      /**
       * Encodes the passed parameter with base64 and sets the internal
       * value to the result.
       *
       * @param {String} aValue      The raw binary value to encode
       */
    }, {
      key: "setEncodedValue",
      value: function setEncodedValue(aValue) {
        this.value = this._b64_encode(aValue);
      }
    }, {
      key: "_b64_encode",
      value: function _b64_encode(data) {
        // http://kevin.vanzonneveld.net
        // +   original by: Tyler Akins (http://rumkin.com)
        // +   improved by: Bayron Guevara
        // +   improved by: Thunder.m
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   bugfixed by: Pellentesque Malesuada
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   improved by: Rafał Kukawski (http://kukawski.pl)
        // *     example 1: base64_encode('Kevin van Zonneveld');
        // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
        // mozilla has this native
        // - but breaks in 2.0.0.12!
        //if (typeof this.window['atob'] == 'function') {
        //    return atob(data);
        //}
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1,
          o2,
          o3,
          h1,
          h2,
          h3,
          h4,
          bits,
          i = 0,
          ac = 0,
          enc = "",
          tmp_arr = [];
        if (!data) {
          return data;
        }
        do {
          // pack three octets into four hexets
          o1 = data.charCodeAt(i++);
          o2 = data.charCodeAt(i++);
          o3 = data.charCodeAt(i++);
          bits = o1 << 16 | o2 << 8 | o3;
          h1 = bits >> 18 & 0x3f;
          h2 = bits >> 12 & 0x3f;
          h3 = bits >> 6 & 0x3f;
          h4 = bits & 0x3f;

          // use hexets to index into b64, and append result to encoded string
          tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);
        enc = tmp_arr.join('');
        var r = data.length % 3;
        return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
      }
    }, {
      key: "_b64_decode",
      value: function _b64_decode(data) {
        // http://kevin.vanzonneveld.net
        // +   original by: Tyler Akins (http://rumkin.com)
        // +   improved by: Thunder.m
        // +      input by: Aman Gupta
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   bugfixed by: Onno Marsman
        // +   bugfixed by: Pellentesque Malesuada
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +      input by: Brett Zamir (http://brett-zamir.me)
        // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
        // *     returns 1: 'Kevin van Zonneveld'
        // mozilla has this native
        // - but breaks in 2.0.0.12!
        //if (typeof this.window['btoa'] == 'function') {
        //    return btoa(data);
        //}
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1,
          o2,
          o3,
          h1,
          h2,
          h3,
          h4,
          bits,
          i = 0,
          ac = 0,
          dec = "",
          tmp_arr = [];
        if (!data) {
          return data;
        }
        data += '';
        do {
          // unpack four hexets into three octets using index points in b64
          h1 = b64.indexOf(data.charAt(i++));
          h2 = b64.indexOf(data.charAt(i++));
          h3 = b64.indexOf(data.charAt(i++));
          h4 = b64.indexOf(data.charAt(i++));
          bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
          o1 = bits >> 16 & 0xff;
          o2 = bits >> 8 & 0xff;
          o3 = bits & 0xff;
          if (h3 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1);
          } else if (h4 == 64) {
            tmp_arr[ac++] = String.fromCharCode(o1, o2);
          } else {
            tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
          }
        } while (i < data.length);
        dec = tmp_arr.join('');
        return dec;
      }

      /**
       * The string representation of this value
       * @return {String}
       */
    }, {
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }], [{
      key: "fromString",
      value:
      /**
       * Creates a binary value from the given string.
       *
       * @param {String} aString        The binary value string
       * @return {Binary}               The binary value instance
       */
      function fromString(aString) {
        return new Binary(aString);
      }
    }]);
  }();

  var DURATION_LETTERS = /([PDWHMTS]{1,1})/;
  var DATA_PROPS_TO_COPY = ["weeks", "days", "hours", "minutes", "seconds", "isNegative"];

  /**
   * This class represents the "duration" value type, with various calculation
   * and manipulation methods.
   *
   * @memberof ICAL
   */
  var Duration = /*#__PURE__*/function () {
    /**
     * Creates a new ICAL.Duration instance.
     *
     * @param {Object} data                 An object with members of the duration
     * @param {Number=} data.weeks          Duration in weeks
     * @param {Number=} data.days           Duration in days
     * @param {Number=} data.hours          Duration in hours
     * @param {Number=} data.minutes        Duration in minutes
     * @param {Number=} data.seconds        Duration in seconds
     * @param {Boolean=} data.isNegative    If true, the duration is negative
     */
    function Duration(data) {
      _classCallCheck(this, Duration);
      /**
       * The weeks in this duration
       * @type {Number}
       * @default 0
       */
      _defineProperty(this, "weeks", 0);
      /**
       * The days in this duration
       * @type {Number}
       * @default 0
       */
      _defineProperty(this, "days", 0);
      /**
       * The days in this duration
       * @type {Number}
       * @default 0
       */
      _defineProperty(this, "hours", 0);
      /**
       * The minutes in this duration
       * @type {Number}
       * @default 0
       */
      _defineProperty(this, "minutes", 0);
      /**
       * The seconds in this duration
       * @type {Number}
       * @default 0
       */
      _defineProperty(this, "seconds", 0);
      /**
       * The seconds in this duration
       * @type {Boolean}
       * @default false
       */
      _defineProperty(this, "isNegative", false);
      /**
       * The class identifier.
       * @constant
       * @type {String}
       * @default "icalduration"
       */
      _defineProperty(this, "icalclass", "icalduration");
      /**
       * The type name, to be used in the jCal object.
       * @constant
       * @type {String}
       * @default "duration"
       */
      _defineProperty(this, "icaltype", "duration");
      this.wrappedJSObject = this;
      this.fromData(data);
    }
    return _createClass(Duration, [{
      key: "clone",
      value:
      /**
       * Returns a clone of the duration object.
       *
       * @return {Duration}      The cloned object
       */
      function clone() {
        return Duration.fromData(this);
      }

      /**
       * The duration value expressed as a number of seconds.
       *
       * @return {Number}             The duration value in seconds
       */
    }, {
      key: "toSeconds",
      value: function toSeconds() {
        var seconds = this.seconds + 60 * this.minutes + 3600 * this.hours + 86400 * this.days + 7 * 86400 * this.weeks;
        return this.isNegative ? -seconds : seconds;
      }

      /**
       * Reads the passed seconds value into this duration object. Afterwards,
       * members like {@link ICAL.Duration#days days} and {@link ICAL.Duration#weeks weeks} will be set up
       * accordingly.
       *
       * @param {Number} aSeconds     The duration value in seconds
       * @return {Duration}           Returns this instance
       */
    }, {
      key: "fromSeconds",
      value: function fromSeconds(aSeconds) {
        var secs = Math.abs(aSeconds);
        this.isNegative = aSeconds < 0;
        this.days = trunc(secs / 86400);

        // If we have a flat number of weeks, use them.
        if (this.days % 7 == 0) {
          this.weeks = this.days / 7;
          this.days = 0;
        } else {
          this.weeks = 0;
        }
        secs -= (this.days + 7 * this.weeks) * 86400;
        this.hours = trunc(secs / 3600);
        secs -= this.hours * 3600;
        this.minutes = trunc(secs / 60);
        secs -= this.minutes * 60;
        this.seconds = secs;
        return this;
      }

      /**
       * Sets up the current instance using members from the passed data object.
       *
       * @param {Object} aData                An object with members of the duration
       * @param {Number=} aData.weeks         Duration in weeks
       * @param {Number=} aData.days          Duration in days
       * @param {Number=} aData.hours         Duration in hours
       * @param {Number=} aData.minutes       Duration in minutes
       * @param {Number=} aData.seconds       Duration in seconds
       * @param {Boolean=} aData.isNegative   If true, the duration is negative
       */
    }, {
      key: "fromData",
      value: function fromData(aData) {
        for (var _i = 0, _DATA_PROPS_TO_COPY = DATA_PROPS_TO_COPY; _i < _DATA_PROPS_TO_COPY.length; _i++) {
          var prop = _DATA_PROPS_TO_COPY[_i];
          if (aData && prop in aData) {
            this[prop] = aData[prop];
          } else {
            this[prop] = 0;
          }
        }
      }

      /**
       * Resets the duration instance to the default values, i.e. PT0S
       */
    }, {
      key: "reset",
      value: function reset() {
        this.isNegative = false;
        this.weeks = 0;
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }

      /**
       * Compares the duration instance with another one.
       *
       * @param {Duration} aOther             The instance to compare with
       * @return {Number}                     -1, 0 or 1 for less/equal/greater
       */
    }, {
      key: "compare",
      value: function compare(aOther) {
        var thisSeconds = this.toSeconds();
        var otherSeconds = aOther.toSeconds();
        return (thisSeconds > otherSeconds) - (thisSeconds < otherSeconds);
      }

      /**
       * Normalizes the duration instance. For example, a duration with a value
       * of 61 seconds will be normalized to 1 minute and 1 second.
       */
    }, {
      key: "normalize",
      value: function normalize() {
        this.fromSeconds(this.toSeconds());
      }

      /**
       * The string representation of this duration.
       * @return {String}
       */
    }, {
      key: "toString",
      value: function toString() {
        if (this.toSeconds() == 0) {
          return "PT0S";
        } else {
          var str = "";
          if (this.isNegative) str += "-";
          str += "P";
          if (this.weeks) str += this.weeks + "W";
          if (this.days) str += this.days + "D";
          if (this.hours || this.minutes || this.seconds) {
            str += "T";
            if (this.hours) str += this.hours + "H";
            if (this.minutes) str += this.minutes + "M";
            if (this.seconds) str += this.seconds + "S";
          }
          return str;
        }
      }

      /**
       * The iCalendar string representation of this duration.
       * @return {String}
       */
    }, {
      key: "toICALString",
      value: function toICALString() {
        return this.toString();
      }
    }], [{
      key: "fromSeconds",
      value:
      /**
       * Returns a new ICAL.Duration instance from the passed seconds value.
       *
       * @param {Number} aSeconds       The seconds to create the instance from
       * @return {Duration}             The newly created duration instance
       */
      function fromSeconds(aSeconds) {
        return new Duration().fromSeconds(aSeconds);
      }

      /**
       * Checks if the given string is an iCalendar duration value.
       *
       * @param {String} value      The raw ical value
       * @return {Boolean}          True, if the given value is of the
       *                              duration ical type
       */
    }, {
      key: "isValueString",
      value: function isValueString(string) {
        return string[0] === 'P' || string[1] === 'P';
      }

      /**
       * Creates a new {@link ICAL.Duration} instance from the passed string.
       *
       * @param {String} aStr       The string to parse
       * @return {Duration}         The created duration instance
       */
    }, {
      key: "fromString",
      value: function fromString(aStr) {
        var pos = 0;
        var dict = Object.create(null);
        var chunks = 0;
        while ((pos = aStr.search(DURATION_LETTERS)) !== -1) {
          var type = aStr[pos];
          var numeric = aStr.slice(0, Math.max(0, pos));
          aStr = aStr.slice(pos + 1);
          chunks += parseDurationChunk(type, numeric, dict);
        }
        if (chunks < 2) {
          // There must be at least a chunk with "P" and some unit chunk
          throw new Error('invalid duration value: Not enough duration components in "' + aStr + '"');
        }
        return new Duration(dict);
      }

      /**
       * Creates a new ICAL.Duration instance from the given data object.
       *
       * @param {Object} aData                An object with members of the duration
       * @param {Number=} aData.weeks         Duration in weeks
       * @param {Number=} aData.days          Duration in days
       * @param {Number=} aData.hours         Duration in hours
       * @param {Number=} aData.minutes       Duration in minutes
       * @param {Number=} aData.seconds       Duration in seconds
       * @param {Boolean=} aData.isNegative   If true, the duration is negative
       * @return {Duration}                   The createad duration instance
       */
    }, {
      key: "fromData",
      value: function fromData(aData) {
        return new Duration(aData);
      }
    }]);
  }();

  /**
   * Internal helper function to handle a chunk of a duration.
   *
   * @private
   * @param {String} letter type of duration chunk
   * @param {String} number numeric value or -/+
   * @param {Object} dict target to assign values to
   */
  function parseDurationChunk(letter, number, object) {
    var type;
    switch (letter) {
      case 'P':
        if (number && number === '-') {
          object.isNegative = true;
        } else {
          object.isNegative = false;
        }
        // period
        break;
      case 'D':
        type = 'days';
        break;
      case 'W':
        type = 'weeks';
        break;
      case 'H':
        type = 'hours';
        break;
      case 'M':
        type = 'minutes';
        break;
      case 'S':
        type = 'seconds';
        break;
      default:
        // Not a valid chunk
        return 0;
    }
    if (type) {
      if (!number && number !== 0) {
        throw new Error('invalid duration value: Missing number before "' + letter + '"');
      }
      var num = parseInt(number, 10);
      if (isStrictlyNaN(num)) {
        throw new Error('invalid duration value: Invalid number "' + number + '" before "' + letter + '"');
      }
      object[type] = num;
    }
    return 1;
  }

  var _Time;

  /**
   * This lets typescript resolve our custom types in the
   * generated d.ts files (jsdoc typedefs are converted to typescript types).
   * Ignore prevents the typedefs from being documented more than once.
   *
   * @ignore
   * @typedef {import("./types.js").weekDay} weekDay
   * Imports the 'weekDay' type from the "types.js" module
   */

  /**
   * @classdesc
   * iCalendar Time representation (similar to JS Date object).  Fully
   * independent of system (OS) timezone / time.  Unlike JS Date, the month
   * January is 1, not zero.
   *
   * @example
   * var time = new ICAL.Time({
   *   year: 2012,
   *   month: 10,
   *   day: 11
   *   minute: 0,
   *   second: 0,
   *   isDate: false
   * });
   *
   *
   * @memberof ICAL
  */
  var Time = /*#__PURE__*/function () {
    // MONDAY

    /**
     * Creates a new ICAL.Time instance.
     *
     * @param {Object} data           Time initialization
     * @param {Number=} data.year     The year for this date
     * @param {Number=} data.month    The month for this date
     * @param {Number=} data.day      The day for this date
     * @param {Number=} data.hour     The hour for this date
     * @param {Number=} data.minute   The minute for this date
     * @param {Number=} data.second   The second for this date
     * @param {Boolean=} data.isDate  If true, the instance represents a date (as
     *                                  opposed to a date-time)
     * @param {Timezone} zone         timezone this position occurs in
     */
    function Time(data, zone) {
      _classCallCheck(this, Time);
      /**
       * The class identifier.
       * @constant
       * @type {String}
       * @default "icaltime"
       */
      _defineProperty(this, "icalclass", "icaltime");
      _defineProperty(this, "_cachedUnixTime", null);
      /**
       * The timezone for this time.
       * @type {Timezone}
       */
      _defineProperty(this, "zone", null);
      /**
       * Internal uses to indicate that a change has been made and the next read
       * operation must attempt to normalize the value (for example changing the
       * day to 33).
       *
       * @type {Boolean}
       * @private
       */
      _defineProperty(this, "_pendingNormalization", false);
      this.wrappedJSObject = this;
      var time = this._time = Object.create(null);

      /* time defaults */
      time.year = 0;
      time.month = 1;
      time.day = 1;
      time.hour = 0;
      time.minute = 0;
      time.second = 0;
      time.isDate = false;
      this.fromData(data, zone);
    }
    return _createClass(Time, [{
      key: "icaltype",
      get:
      /**
       * The type name, to be used in the jCal object. This value may change and
       * is strictly defined by the {@link ICAL.Time#isDate isDate} member.
       * @type {String}
       * @default "date-time"
       */
      function get() {
        return this.isDate ? 'date' : 'date-time';
      }
    }, {
      key: "clone",
      value:
      /**
       * Returns a clone of the time object.
       *
       * @return {Time}              The cloned object
       */
      function clone() {
        return new Time(this._time, this.zone);
      }

      /**
       * Reset the time instance to epoch time
       */
    }, {
      key: "reset",
      value: function reset() {
        this.fromData(Time.epochTime);
        this.zone = Timezone.utcTimezone;
      }

      /**
       * Reset the time instance to the given date/time values.
       *
       * @param {Number} year             The year to set
       * @param {Number} month            The month to set
       * @param {Number} day              The day to set
       * @param {Number} hour             The hour to set
       * @param {Number} minute           The minute to set
       * @param {Number} second           The second to set
       * @param {Timezone} timezone       The timezone to set
       */
    }, {
      key: "resetTo",
      value: function resetTo(year, month, day, hour, minute, second, timezone) {
        this.fromData({
          year: year,
          month: month,
          day: day,
          hour: hour,
          minute: minute,
          second: second,
          zone: timezone
        });
      }

      /**
       * Set up the current instance from the Javascript date value.
       *
       * @param {?Date} aDate             The Javascript Date to read, or null to reset
       * @param {Boolean} [useUTC=false]  If true, the UTC values of the date will be used
       */
    }, {
      key: "fromJSDate",
      value: function fromJSDate(aDate, useUTC) {
        if (!aDate) {
          this.reset();
        } else {
          if (useUTC) {
            this.zone = Timezone.utcTimezone;
            this.year = aDate.getUTCFullYear();
            this.month = aDate.getUTCMonth() + 1;
            this.day = aDate.getUTCDate();
            this.hour = aDate.getUTCHours();
            this.minute = aDate.getUTCMinutes();
            this.second = aDate.getUTCSeconds();
          } else {
            this.zone = Timezone.localTimezone;
            this.year = aDate.getFullYear();
            this.month = aDate.getMonth() + 1;
            this.day = aDate.getDate();
            this.hour = aDate.getHours();
            this.minute = aDate.getMinutes();
            this.second = aDate.getSeconds();
          }
        }
        this._cachedUnixTime = null;
        return this;
      }

      /**
       * Sets up the current instance using members from the passed data object.
       *
       * @param {Object} aData            Time initialization
       * @param {Number=} aData.year      The year for this date
       * @param {Number=} aData.month     The month for this date
       * @param {Number=} aData.day       The day for this date
       * @param {Number=} aData.hour      The hour for this date
       * @param {Number=} aData.minute    The minute for this date
       * @param {Number=} aData.second    The second for this date
       * @param {Boolean=} aData.isDate   If true, the instance represents a date
       *                                    (as opposed to a date-time)
       * @param {Timezone=} aZone         Timezone this position occurs in
       */
    }, {
      key: "fromData",
      value: function fromData(aData, aZone) {
        if (aData) {
          for (var _i = 0, _Object$entries = Object.entries(aData); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            // ical type cannot be set
            if (key === 'icaltype') continue;
            this[key] = value;
          }
        }
        if (aZone) {
          this.zone = aZone;
        }
        if (aData && !("isDate" in aData)) {
          this.isDate = !("hour" in aData);
        } else if (aData && "isDate" in aData) {
          this.isDate = aData.isDate;
        }
        if (aData && "timezone" in aData) {
          var zone = TimezoneService.get(aData.timezone);
          this.zone = zone || Timezone.localTimezone;
        }
        if (aData && "zone" in aData) {
          this.zone = aData.zone;
        }
        if (!this.zone) {
          this.zone = Timezone.localTimezone;
        }
        this._cachedUnixTime = null;
        return this;
      }

      /**
       * Calculate the day of week.
       * @param {weekDay=} aWeekStart
       *        The week start weekday, defaults to SUNDAY
       * @return {weekDay}
       */
    }, {
      key: "dayOfWeek",
      value: function dayOfWeek(aWeekStart) {
        var firstDow = aWeekStart || Time.SUNDAY;
        var dowCacheKey = (this.year << 12) + (this.month << 8) + (this.day << 3) + firstDow;
        if (dowCacheKey in Time._dowCache) {
          return Time._dowCache[dowCacheKey];
        }

        // Using Zeller's algorithm
        var q = this.day;
        var m = this.month + (this.month < 3 ? 12 : 0);
        var Y = this.year - (this.month < 3 ? 1 : 0);
        var h = q + Y + trunc((m + 1) * 26 / 10) + trunc(Y / 4);
        {
          // eslint-disable-line no-constant-condition
          h += trunc(Y / 100) * 6 + trunc(Y / 400);
        }

        // Normalize to 1 = wkst
        h = (h + 7 - firstDow) % 7 + 1;
        Time._dowCache[dowCacheKey] = h;
        return h;
      }

      /**
       * Calculate the day of year.
       * @return {Number}
       */
    }, {
      key: "dayOfYear",
      value: function dayOfYear() {
        var is_leap = Time.isLeapYear(this.year) ? 1 : 0;
        var diypm = Time.daysInYearPassedMonth;
        return diypm[is_leap][this.month - 1] + this.day;
      }

      /**
       * Returns a copy of the current date/time, rewound to the start of the
       * week. The resulting ICAL.Time instance is of icaltype date, even if this
       * is a date-time.
       *
       * @param {weekDay=} aWeekStart
       *        The week start weekday, defaults to SUNDAY
       * @return {Time}      The start of the week (cloned)
       */
    }, {
      key: "startOfWeek",
      value: function startOfWeek(aWeekStart) {
        var firstDow = aWeekStart || Time.SUNDAY;
        var result = this.clone();
        result.day -= (this.dayOfWeek() + 7 - firstDow) % 7;
        result.isDate = true;
        result.hour = 0;
        result.minute = 0;
        result.second = 0;
        return result;
      }

      /**
       * Returns a copy of the current date/time, shifted to the end of the week.
       * The resulting ICAL.Time instance is of icaltype date, even if this is a
       * date-time.
       *
       * @param {weekDay=} aWeekStart
       *        The week start weekday, defaults to SUNDAY
       * @return {Time}      The end of the week (cloned)
       */
    }, {
      key: "endOfWeek",
      value: function endOfWeek(aWeekStart) {
        var firstDow = aWeekStart || Time.SUNDAY;
        var result = this.clone();
        result.day += (7 - this.dayOfWeek() + firstDow - Time.SUNDAY) % 7;
        result.isDate = true;
        result.hour = 0;
        result.minute = 0;
        result.second = 0;
        return result;
      }

      /**
       * Returns a copy of the current date/time, rewound to the start of the
       * month. The resulting ICAL.Time instance is of icaltype date, even if
       * this is a date-time.
       *
       * @return {Time}      The start of the month (cloned)
       */
    }, {
      key: "startOfMonth",
      value: function startOfMonth() {
        var result = this.clone();
        result.day = 1;
        result.isDate = true;
        result.hour = 0;
        result.minute = 0;
        result.second = 0;
        return result;
      }

      /**
       * Returns a copy of the current date/time, shifted to the end of the
       * month.  The resulting ICAL.Time instance is of icaltype date, even if
       * this is a date-time.
       *
       * @return {Time}      The end of the month (cloned)
       */
    }, {
      key: "endOfMonth",
      value: function endOfMonth() {
        var result = this.clone();
        result.day = Time.daysInMonth(result.month, result.year);
        result.isDate = true;
        result.hour = 0;
        result.minute = 0;
        result.second = 0;
        return result;
      }

      /**
       * Returns a copy of the current date/time, rewound to the start of the
       * year. The resulting ICAL.Time instance is of icaltype date, even if
       * this is a date-time.
       *
       * @return {Time}      The start of the year (cloned)
       */
    }, {
      key: "startOfYear",
      value: function startOfYear() {
        var result = this.clone();
        result.day = 1;
        result.month = 1;
        result.isDate = true;
        result.hour = 0;
        result.minute = 0;
        result.second = 0;
        return result;
      }

      /**
       * Returns a copy of the current date/time, shifted to the end of the
       * year.  The resulting ICAL.Time instance is of icaltype date, even if
       * this is a date-time.
       *
       * @return {Time}      The end of the year (cloned)
       */
    }, {
      key: "endOfYear",
      value: function endOfYear() {
        var result = this.clone();
        result.day = 31;
        result.month = 12;
        result.isDate = true;
        result.hour = 0;
        result.minute = 0;
        result.second = 0;
        return result;
      }

      /**
       * First calculates the start of the week, then returns the day of year for
       * this date. If the day falls into the previous year, the day is zero or negative.
       *
       * @param {weekDay=} aFirstDayOfWeek
       *        The week start weekday, defaults to SUNDAY
       * @return {Number}     The calculated day of year
       */
    }, {
      key: "startDoyWeek",
      value: function startDoyWeek(aFirstDayOfWeek) {
        var firstDow = aFirstDayOfWeek || Time.SUNDAY;
        var delta = this.dayOfWeek() - firstDow;
        if (delta < 0) delta += 7;
        return this.dayOfYear() - delta;
      }

      /**
       * Get the dominical letter for the current year. Letters range from A - G
       * for common years, and AG to GF for leap years.
       *
       * @param {Number} yr           The year to retrieve the letter for
       * @return {String}             The dominical letter.
       */
    }, {
      key: "getDominicalLetter",
      value: function getDominicalLetter() {
        return Time.getDominicalLetter(this.year);
      }

      /**
       * Finds the nthWeekDay relative to the current month (not day).  The
       * returned value is a day relative the month that this month belongs to so
       * 1 would indicate the first of the month and 40 would indicate a day in
       * the following month.
       *
       * @param {Number} aDayOfWeek   Day of the week see the day name constants
       * @param {Number} aPos         Nth occurrence of a given week day values
       *        of 1 and 0 both indicate the first weekday of that type. aPos may
       *        be either positive or negative
       *
       * @return {Number} numeric value indicating a day relative
       *                   to the current month of this time object
       */
    }, {
      key: "nthWeekDay",
      value: function nthWeekDay(aDayOfWeek, aPos) {
        var daysInMonth = Time.daysInMonth(this.month, this.year);
        var weekday;
        var pos = aPos;
        var start = 0;
        var otherDay = this.clone();
        if (pos >= 0) {
          otherDay.day = 1;

          // because 0 means no position has been given
          // 1 and 0 indicate the same day.
          if (pos != 0) {
            // remove the extra numeric value
            pos--;
          }

          // set current start offset to current day.
          start = otherDay.day;

          // find the current day of week
          var startDow = otherDay.dayOfWeek();

          // calculate the difference between current
          // day of the week and desired day of the week
          var offset = aDayOfWeek - startDow;

          // if the offset goes into the past
          // week we add 7 so it goes into the next
          // week. We only want to go forward in time here.
          if (offset < 0)
            // this is really important otherwise we would
            // end up with dates from in the past.
            offset += 7;

          // add offset to start so start is the same
          // day of the week as the desired day of week.
          start += offset;

          // because we are going to add (and multiply)
          // the numeric value of the day we subtract it
          // from the start position so not to add it twice.
          start -= aDayOfWeek;

          // set week day
          weekday = aDayOfWeek;
        } else {
          // then we set it to the last day in the current month
          otherDay.day = daysInMonth;

          // find the ends weekday
          var endDow = otherDay.dayOfWeek();
          pos++;
          weekday = endDow - aDayOfWeek;
          if (weekday < 0) {
            weekday += 7;
          }
          weekday = daysInMonth - weekday;
        }
        weekday += pos * 7;
        return start + weekday;
      }

      /**
       * Checks if current time is the nth weekday, relative to the current
       * month.  Will always return false when rule resolves outside of current
       * month.
       *
       * @param {weekDay} aDayOfWeek                 Day of week to check
       * @param {Number} aPos                        Relative position
       * @return {Boolean}                           True, if it is the nth weekday
       */
    }, {
      key: "isNthWeekDay",
      value: function isNthWeekDay(aDayOfWeek, aPos) {
        var dow = this.dayOfWeek();
        if (aPos === 0 && dow === aDayOfWeek) {
          return true;
        }

        // get pos
        var day = this.nthWeekDay(aDayOfWeek, aPos);
        if (day === this.day) {
          return true;
        }
        return false;
      }

      /**
       * Calculates the ISO 8601 week number. The first week of a year is the
       * week that contains the first Thursday. The year can have 53 weeks, if
       * January 1st is a Friday.
       *
       * Note there are regions where the first week of the year is the one that
       * starts on January 1st, which may offset the week number. Also, if a
       * different week start is specified, this will also affect the week
       * number.
       *
       * @see Time.weekOneStarts
       * @param {weekDay} aWeekStart                  The weekday the week starts with
       * @return {Number}                             The ISO week number
       */
    }, {
      key: "weekNumber",
      value: function weekNumber(aWeekStart) {
        var wnCacheKey = (this.year << 12) + (this.month << 8) + (this.day << 3) + aWeekStart;
        if (wnCacheKey in Time._wnCache) {
          return Time._wnCache[wnCacheKey];
        }
        // This function courtesty of Julian Bucknall, published under the MIT license
        // http://www.boyet.com/articles/publishedarticles/calculatingtheisoweeknumb.html
        // plus some fixes to be able to use different week starts.
        var week1;
        var dt = this.clone();
        dt.isDate = true;
        var isoyear = this.year;
        if (dt.month == 12 && dt.day > 25) {
          week1 = Time.weekOneStarts(isoyear + 1, aWeekStart);
          if (dt.compare(week1) < 0) {
            week1 = Time.weekOneStarts(isoyear, aWeekStart);
          } else {
            isoyear++;
          }
        } else {
          week1 = Time.weekOneStarts(isoyear, aWeekStart);
          if (dt.compare(week1) < 0) {
            week1 = Time.weekOneStarts(--isoyear, aWeekStart);
          }
        }
        var daysBetween = dt.subtractDate(week1).toSeconds() / 86400;
        var answer = trunc(daysBetween / 7) + 1;
        Time._wnCache[wnCacheKey] = answer;
        return answer;
      }

      /**
       * Adds the duration to the current time. The instance is modified in
       * place.
       *
       * @param {Duration} aDuration         The duration to add
       */
    }, {
      key: "addDuration",
      value: function addDuration(aDuration) {
        var mult = aDuration.isNegative ? -1 : 1;

        // because of the duration optimizations it is much
        // more efficient to grab all the values up front
        // then set them directly (which will avoid a normalization call).
        // So we don't actually normalize until we need it.
        var second = this.second;
        var minute = this.minute;
        var hour = this.hour;
        var day = this.day;
        second += mult * aDuration.seconds;
        minute += mult * aDuration.minutes;
        hour += mult * aDuration.hours;
        day += mult * aDuration.days;
        day += mult * 7 * aDuration.weeks;
        this.second = second;
        this.minute = minute;
        this.hour = hour;
        this.day = day;
        this._cachedUnixTime = null;
      }

      /**
       * Subtract the date details (_excluding_ timezone).  Useful for finding
       * the relative difference between two time objects excluding their
       * timezone differences.
       *
       * @param {Time} aDate     The date to subtract
       * @return {Duration}      The difference as a duration
       */
    }, {
      key: "subtractDate",
      value: function subtractDate(aDate) {
        var unixTime = this.toUnixTime() + this.utcOffset();
        var other = aDate.toUnixTime() + aDate.utcOffset();
        return Duration.fromSeconds(unixTime - other);
      }

      /**
       * Subtract the date details, taking timezones into account.
       *
       * @param {Time} aDate  The date to subtract
       * @return {Duration}   The difference in duration
       */
    }, {
      key: "subtractDateTz",
      value: function subtractDateTz(aDate) {
        var unixTime = this.toUnixTime();
        var other = aDate.toUnixTime();
        return Duration.fromSeconds(unixTime - other);
      }

      /**
       * Compares the ICAL.Time instance with another one.
       *
       * @param {Duration} aOther        The instance to compare with
       * @return {Number}                     -1, 0 or 1 for less/equal/greater
       */
    }, {
      key: "compare",
      value: function compare(other) {
        var a = this.toUnixTime();
        var b = other.toUnixTime();
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
      }

      /**
       * Compares only the date part of this instance with another one.
       *
       * @param {Duration} other              The instance to compare with
       * @param {Timezone} tz                 The timezone to compare in
       * @return {Number}                     -1, 0 or 1 for less/equal/greater
       */
    }, {
      key: "compareDateOnlyTz",
      value: function compareDateOnlyTz(other, tz) {
        var a = this.convertToZone(tz);
        var b = other.convertToZone(tz);
        var rc = 0;
        if ((rc = Time._cmp_attr(a, b, "year")) != 0) return rc;
        if ((rc = Time._cmp_attr(a, b, "month")) != 0) return rc;
        if ((rc = Time._cmp_attr(a, b, "day")) != 0) return rc;
        return rc;
      }

      /**
       * Convert the instance into another timezone. The returned ICAL.Time
       * instance is always a copy.
       *
       * @param {Timezone} zone      The zone to convert to
       * @return {Time}              The copy, converted to the zone
       */
    }, {
      key: "convertToZone",
      value: function convertToZone(zone) {
        var copy = this.clone();
        var zone_equals = this.zone.tzid == zone.tzid;
        if (!this.isDate && !zone_equals) {
          Timezone.convert_time(copy, this.zone, zone);
        }
        copy.zone = zone;
        return copy;
      }

      /**
       * Calculates the UTC offset of the current date/time in the timezone it is
       * in.
       *
       * @return {Number}     UTC offset in seconds
       */
    }, {
      key: "utcOffset",
      value: function utcOffset() {
        if (this.zone == Timezone.localTimezone || this.zone == Timezone.utcTimezone) {
          return 0;
        } else {
          return this.zone.utcOffset(this);
        }
      }

      /**
       * Returns an RFC 5545 compliant ical representation of this object.
       *
       * @return {String} ical date/date-time
       */
    }, {
      key: "toICALString",
      value: function toICALString() {
        var string = this.toString();
        if (string.length > 10) {
          return design.icalendar.value['date-time'].toICAL(string);
        } else {
          return design.icalendar.value.date.toICAL(string);
        }
      }

      /**
       * The string representation of this date/time, in jCal form
       * (including : and - separators).
       * @return {String}
       */
    }, {
      key: "toString",
      value: function toString() {
        var result = this.year + '-' + pad2(this.month) + '-' + pad2(this.day);
        if (!this.isDate) {
          result += 'T' + pad2(this.hour) + ':' + pad2(this.minute) + ':' + pad2(this.second);
          if (this.zone === Timezone.utcTimezone) {
            result += 'Z';
          }
        }
        return result;
      }

      /**
       * Converts the current instance to a Javascript date
       * @return {Date}
       */
    }, {
      key: "toJSDate",
      value: function toJSDate() {
        if (this.zone == Timezone.localTimezone) {
          if (this.isDate) {
            return new Date(this.year, this.month - 1, this.day);
          } else {
            return new Date(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, 0);
          }
        } else {
          return new Date(this.toUnixTime() * 1000);
        }
      }
    }, {
      key: "_normalize",
      value: function _normalize() {
        if (this._time.isDate) {
          this._time.hour = 0;
          this._time.minute = 0;
          this._time.second = 0;
        }
        this.adjust(0, 0, 0, 0);
        return this;
      }

      /**
       * Adjust the date/time by the given offset
       *
       * @param {Number} aExtraDays       The extra amount of days
       * @param {Number} aExtraHours      The extra amount of hours
       * @param {Number} aExtraMinutes    The extra amount of minutes
       * @param {Number} aExtraSeconds    The extra amount of seconds
       * @param {Number=} aTime           The time to adjust, defaults to the
       *                                    current instance.
       */
    }, {
      key: "adjust",
      value: function adjust(aExtraDays, aExtraHours, aExtraMinutes, aExtraSeconds, aTime) {
        var minutesOverflow,
          hoursOverflow,
          daysOverflow = 0,
          yearsOverflow = 0;
        var second, minute, hour, day;
        var daysInMonth;
        var time = aTime || this._time;
        if (!time.isDate) {
          second = time.second + aExtraSeconds;
          time.second = second % 60;
          minutesOverflow = trunc(second / 60);
          if (time.second < 0) {
            time.second += 60;
            minutesOverflow--;
          }
          minute = time.minute + aExtraMinutes + minutesOverflow;
          time.minute = minute % 60;
          hoursOverflow = trunc(minute / 60);
          if (time.minute < 0) {
            time.minute += 60;
            hoursOverflow--;
          }
          hour = time.hour + aExtraHours + hoursOverflow;
          time.hour = hour % 24;
          daysOverflow = trunc(hour / 24);
          if (time.hour < 0) {
            time.hour += 24;
            daysOverflow--;
          }
        }

        // Adjust month and year first, because we need to know what month the day
        // is in before adjusting it.
        if (time.month > 12) {
          yearsOverflow = trunc((time.month - 1) / 12);
        } else if (time.month < 1) {
          yearsOverflow = trunc(time.month / 12) - 1;
        }
        time.year += yearsOverflow;
        time.month -= 12 * yearsOverflow;

        // Now take care of the days (and adjust month if needed)
        day = time.day + aExtraDays + daysOverflow;
        if (day > 0) {
          for (;;) {
            daysInMonth = Time.daysInMonth(time.month, time.year);
            if (day <= daysInMonth) {
              break;
            }
            time.month++;
            if (time.month > 12) {
              time.year++;
              time.month = 1;
            }
            day -= daysInMonth;
          }
        } else {
          while (day <= 0) {
            if (time.month == 1) {
              time.year--;
              time.month = 12;
            } else {
              time.month--;
            }
            day += Time.daysInMonth(time.month, time.year);
          }
        }
        time.day = day;
        this._cachedUnixTime = null;
        return this;
      }

      /**
       * Sets up the current instance from unix time, the number of seconds since
       * January 1st, 1970.
       *
       * @param {Number} seconds      The seconds to set up with
       */
    }, {
      key: "fromUnixTime",
      value: function fromUnixTime(seconds) {
        this.zone = Timezone.utcTimezone;
        // We could use `fromJSDate` here, but this is about twice as fast.
        // We could also clone `epochTime` and use `adjust` for a more
        // ical.js-centric approach, but this is about 100 times as fast.
        var date = new Date(seconds * 1000);
        this.year = date.getUTCFullYear();
        this.month = date.getUTCMonth() + 1;
        this.day = date.getUTCDate();
        if (this._time.isDate) {
          this.hour = 0;
          this.minute = 0;
          this.second = 0;
        } else {
          this.hour = date.getUTCHours();
          this.minute = date.getUTCMinutes();
          this.second = date.getUTCSeconds();
        }
        this._cachedUnixTime = null;
      }

      /**
       * Converts the current instance to seconds since January 1st 1970.
       *
       * @return {Number}         Seconds since 1970
       */
    }, {
      key: "toUnixTime",
      value: function toUnixTime() {
        if (this._cachedUnixTime !== null) {
          return this._cachedUnixTime;
        }
        var offset = this.utcOffset();

        // we use the offset trick to ensure
        // that we are getting the actual UTC time
        var ms = Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second - offset);

        // seconds
        this._cachedUnixTime = ms / 1000;
        return this._cachedUnixTime;
      }

      /**
       * Converts time to into Object which can be serialized then re-created
       * using the constructor.
       *
       * @example
       * // toJSON will automatically be called
       * var json = JSON.stringify(mytime);
       *
       * var deserialized = JSON.parse(json);
       *
       * var time = new ICAL.Time(deserialized);
       *
       * @return {Object}
       */
    }, {
      key: "toJSON",
      value: function toJSON() {
        var copy = ['year', 'month', 'day', 'hour', 'minute', 'second', 'isDate'];
        var result = Object.create(null);
        var i = 0;
        var len = copy.length;
        var prop;
        for (; i < len; i++) {
          prop = copy[i];
          result[prop] = this[prop];
        }
        if (this.zone) {
          result.timezone = this.zone.tzid;
        }
        return result;
      }
    }], [{
      key: "daysInMonth",
      value:
      /**
       * Returns the days in the given month
       *
       * @param {Number} month      The month to check
       * @param {Number} year       The year to check
       * @return {Number}           The number of days in the month
       */
      function daysInMonth(month, year) {
        var _daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var days = 30;
        if (month < 1 || month > 12) return days;
        days = _daysInMonth[month];
        if (month == 2) {
          days += Time.isLeapYear(year);
        }
        return days;
      }

      /**
       * Checks if the year is a leap year
       *
       * @param {Number} year       The year to check
       * @return {Boolean}          True, if the year is a leap year
       */
    }, {
      key: "isLeapYear",
      value: function isLeapYear(year) {
        if (year <= 1752) {
          return year % 4 == 0;
        } else {
          return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
        }
      }

      /**
       * Create a new ICAL.Time from the day of year and year. The date is returned
       * in floating timezone.
       *
       * @param {Number} aDayOfYear     The day of year
       * @param {Number} aYear          The year to create the instance in
       * @return {Time}                 The created instance with the calculated date
       */
    }, {
      key: "fromDayOfYear",
      value: function fromDayOfYear(aDayOfYear, aYear) {
        var year = aYear;
        var doy = aDayOfYear;
        var tt = new Time();
        tt.auto_normalize = false;
        var is_leap = Time.isLeapYear(year) ? 1 : 0;
        if (doy < 1) {
          year--;
          is_leap = Time.isLeapYear(year) ? 1 : 0;
          doy += Time.daysInYearPassedMonth[is_leap][12];
          return Time.fromDayOfYear(doy, year);
        } else if (doy > Time.daysInYearPassedMonth[is_leap][12]) {
          is_leap = Time.isLeapYear(year) ? 1 : 0;
          doy -= Time.daysInYearPassedMonth[is_leap][12];
          year++;
          return Time.fromDayOfYear(doy, year);
        }
        tt.year = year;
        tt.isDate = true;
        for (var month = 11; month >= 0; month--) {
          if (doy > Time.daysInYearPassedMonth[is_leap][month]) {
            tt.month = month + 1;
            tt.day = doy - Time.daysInYearPassedMonth[is_leap][month];
            break;
          }
        }
        tt.auto_normalize = true;
        return tt;
      }

      /**
       * Returns a new ICAL.Time instance from a date string, e.g 2015-01-02.
       *
       * @deprecated                Use {@link ICAL.Time.fromDateString} instead
       * @param {String} str        The string to create from
       * @return {Time}             The date/time instance
       */
    }, {
      key: "fromStringv2",
      value: function fromStringv2(str) {
        return new Time({
          year: parseInt(str.slice(0, 4), 10),
          month: parseInt(str.slice(5, 7), 10),
          day: parseInt(str.slice(8, 10), 10),
          isDate: true
        });
      }

      /**
       * Returns a new ICAL.Time instance from a date string, e.g 2015-01-02.
       *
       * @param {String} aValue     The string to create from
       * @return {Time}             The date/time instance
       */
    }, {
      key: "fromDateString",
      value: function fromDateString(aValue) {
        // Dates should have no timezone.
        // Google likes to sometimes specify Z on dates
        // we specifically ignore that to avoid issues.

        // YYYY-MM-DD
        // 2012-10-10
        return new Time({
          year: strictParseInt(aValue.slice(0, 4)),
          month: strictParseInt(aValue.slice(5, 7)),
          day: strictParseInt(aValue.slice(8, 10)),
          isDate: true
        });
      }

      /**
       * Returns a new ICAL.Time instance from a date-time string, e.g
       * 2015-01-02T03:04:05. If a property is specified, the timezone is set up
       * from the property's TZID parameter.
       *
       * @param {String} aValue         The string to create from
       * @param {Property=} prop        The property the date belongs to
       * @return {Time}                 The date/time instance
       */
    }, {
      key: "fromDateTimeString",
      value: function fromDateTimeString(aValue, prop) {
        if (aValue.length < 19) {
          throw new Error('invalid date-time value: "' + aValue + '"');
        }
        var zone;
        var zoneId;
        if (aValue[19] && aValue[19] === 'Z') {
          zone = Timezone.utcTimezone;
        } else if (prop) {
          zoneId = prop.getParameter('tzid');
          if (prop.parent) {
            if (prop.parent.name === 'standard' || prop.parent.name === 'daylight') {
              // Per RFC 5545 3.8.2.4 and 3.8.2.2, start/end date-times within
              // these components MUST be specified in local time.
              zone = Timezone.localTimezone;
            } else if (zoneId) {
              // If the desired time zone is defined within the component tree,
              // fetch its definition and prefer that.
              zone = prop.parent.getTimeZoneByID(zoneId);
            }
          }
        }
        var timeData = {
          year: strictParseInt(aValue.slice(0, 4)),
          month: strictParseInt(aValue.slice(5, 7)),
          day: strictParseInt(aValue.slice(8, 10)),
          hour: strictParseInt(aValue.slice(11, 13)),
          minute: strictParseInt(aValue.slice(14, 16)),
          second: strictParseInt(aValue.slice(17, 19))
        };

        // Although RFC 5545 requires that all TZIDs used within a file have a
        // corresponding time zone definition, we may not be parsing the full file
        // or we may be dealing with a non-compliant file; in either case, we can
        // check our own time zone service for the TZID in a last-ditch effort.
        if (zoneId && !zone) {
          timeData.timezone = zoneId;
        }

        // 2012-10-10T10:10:10(Z)?
        return new Time(timeData, zone);
      }

      /**
       * Returns a new ICAL.Time instance from a date or date-time string,
       *
       * @param {String} aValue         The string to create from
       * @param {Property=} prop        The property the date belongs to
       * @return {Time}                 The date/time instance
       */
    }, {
      key: "fromString",
      value: function fromString(aValue, aProperty) {
        if (aValue.length > 10) {
          return Time.fromDateTimeString(aValue, aProperty);
        } else {
          return Time.fromDateString(aValue);
        }
      }

      /**
       * Creates a new ICAL.Time instance from the given Javascript Date.
       *
       * @param {?Date} aDate             The Javascript Date to read, or null to reset
       * @param {Boolean} [useUTC=false]  If true, the UTC values of the date will be used
       */
    }, {
      key: "fromJSDate",
      value: function fromJSDate(aDate, useUTC) {
        var tt = new Time();
        return tt.fromJSDate(aDate, useUTC);
      }

      /**
       * Creates a new ICAL.Time instance from the the passed data object.
       *
       * @param {Object} aData            Time initialization
       * @param {Number=} aData.year      The year for this date
       * @param {Number=} aData.month     The month for this date
       * @param {Number=} aData.day       The day for this date
       * @param {Number=} aData.hour      The hour for this date
       * @param {Number=} aData.minute    The minute for this date
       * @param {Number=} aData.second    The second for this date
       * @param {Boolean=} aData.isDate   If true, the instance represents a date
       *                                    (as opposed to a date-time)
       * @param {Timezone=} aZone         Timezone this position occurs in
       */
    }, {
      key: "now",
      value:
      /**
       * Creates a new ICAL.Time instance from the current moment.
       * The instance is “floating” - has no timezone relation.
       * To create an instance considering the time zone, call
       * ICAL.Time.fromJSDate(new Date(), true)
       * @return {Time}
       */
      function now() {
        return Time.fromJSDate(new Date(), false);
      }

      /**
       * Returns the date on which ISO week number 1 starts.
       *
       * @see Time#weekNumber
       * @param {Number} aYear                  The year to search in
       * @param {weekDay=} aWeekStart           The week start weekday, used for calculation.
       * @return {Time}                         The date on which week number 1 starts
       */
    }, {
      key: "weekOneStarts",
      value: function weekOneStarts(aYear, aWeekStart) {
        var t = Time.fromData({
          year: aYear,
          month: 1,
          day: 1,
          isDate: true
        });
        var dow = t.dayOfWeek();
        var wkst = aWeekStart || Time.DEFAULT_WEEK_START;
        if (dow > Time.THURSDAY) {
          t.day += 7;
        }
        if (wkst > Time.THURSDAY) {
          t.day -= 7;
        }
        t.day -= dow - wkst;
        return t;
      }

      /**
       * Get the dominical letter for the given year. Letters range from A - G for
       * common years, and AG to GF for leap years.
       *
       * @param {Number} yr           The year to retrieve the letter for
       * @return {String}             The dominical letter.
       */
    }, {
      key: "getDominicalLetter",
      value: function getDominicalLetter(yr) {
        var LTRS = "GFEDCBA";
        var dom = (yr + (yr / 4 | 0) + (yr / 400 | 0) - (yr / 100 | 0) - 1) % 7;
        var isLeap = Time.isLeapYear(yr);
        if (isLeap) {
          return LTRS[(dom + 6) % 7] + LTRS[dom];
        } else {
          return LTRS[dom];
        }
      }
    }, {
      key: "epochTime",
      get:
      /**
       * January 1st, 1970 as an ICAL.Time.
       * @type {Time}
       * @constant
       * @instance
       */
      function get() {
        if (!_assertClassBrand(Time, this, _epochTime)._) {
          _epochTime._ = _assertClassBrand(Time, this, Time.fromData({
            year: 1970,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            isDate: false,
            timezone: "Z"
          }));
        }
        return _assertClassBrand(Time, this, _epochTime)._;
      }
    }, {
      key: "_cmp_attr",
      value: function _cmp_attr(a, b, attr) {
        if (a[attr] > b[attr]) return 1;
        if (a[attr] < b[attr]) return -1;
        return 0;
      }

      /**
       * The days that have passed in the year after a given month. The array has
       * two members, one being an array of passed days for non-leap years, the
       * other analog for leap years.
       * @example
       * var isLeapYear = ICAL.Time.isLeapYear(year);
       * var passedDays = ICAL.Time.daysInYearPassedMonth[isLeapYear][month];
       * @type {Array.<Array.<Number>>}
       */
    }]);
  }();
  _Time = Time;
  _defineProperty(Time, "_dowCache", {});
  _defineProperty(Time, "_wnCache", {});
  _defineProperty(Time, "fromData", function fromData(aData, aZone) {
    var t = new _Time();
    return t.fromData(aData, aZone);
  });
  var _epochTime = {
    _: null
  };
  _defineProperty(Time, "daysInYearPassedMonth", [[0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]]);
  _defineProperty(Time, "SUNDAY", 1);
  _defineProperty(Time, "MONDAY", 2);
  _defineProperty(Time, "TUESDAY", 3);
  _defineProperty(Time, "WEDNESDAY", 4);
  _defineProperty(Time, "THURSDAY", 5);
  _defineProperty(Time, "FRIDAY", 6);
  _defineProperty(Time, "SATURDAY", 7);
  /**
   * The default weekday for the WKST part.
   * @constant
   * @default ICAL.Time.MONDAY
   */
  _defineProperty(Time, "DEFAULT_WEEK_START", 2);
  (function setupNormalizeAttributes() {
    // This needs to run before any instances are created!
    function defineAttr(attr) {
      Object.defineProperty(Time.prototype, attr, {
        get: function getTimeAttr() {
          if (this._pendingNormalization) {
            this._normalize();
            this._pendingNormalization = false;
          }
          return this._time[attr];
        },
        set: function setTimeAttr(val) {
          // Check if isDate will be set and if was not set to normalize date.
          // This avoids losing days when seconds, minutes and hours are zeroed
          // what normalize will do when time is a date.
          if (attr === "isDate" && val && !this._time.isDate) {
            this.adjust(0, 0, 0, 0);
          }
          this._cachedUnixTime = null;
          this._pendingNormalization = true;
          this._time[attr] = val;
        }
      });
    }
    defineAttr("year");
    defineAttr("month");
    defineAttr("day");
    defineAttr("hour");
    defineAttr("minute");
    defineAttr("second");
    defineAttr("isDate");
  })();

  /**
   * This lets typescript resolve our custom types in the
   * generated d.ts files (jsdoc typedefs are converted to typescript types).
   * Ignore prevents the typedefs from being documented more than once.
   *
   * @ignore
   * @typedef {import("./types.js").parserState} parserState
   * Imports the 'parserState' type from the "types.js" module
   * @typedef {import("./types.js").designSet} designSet
   * Imports the 'designSet' type from the "types.js" module
   */

  var CHAR = /[^ \t]/;
  var VALUE_DELIMITER = ':';
  var PARAM_DELIMITER = ';';
  var PARAM_NAME_DELIMITER = '=';
  var DEFAULT_VALUE_TYPE$1 = 'unknown';
  var DEFAULT_PARAM_TYPE = 'text';
  var RFC6868_REPLACE_MAP$1 = {
    "^'": '"',
    "^n": "\n",
    "^^": "^"
  };

  /**
   * Parses iCalendar or vCard data into a raw jCal object. Consult
   * documentation on the {@tutorial layers|layers of parsing} for more
   * details.
   *
   * @function ICAL.parse
   * @memberof ICAL
   * @variation function
   * @todo Fix the API to be more clear on the return type
   * @param {String} input      The string data to parse
   * @return {Object|Object[]}  A single jCal object, or an array thereof
   */
  function parse(input) {
    var state = {};
    var root = state.component = [];
    state.stack = [root];
    parse._eachLine(input, function (err, line) {
      parse._handleContentLine(line, state);
    });

    // when there are still items on the stack
    // throw a fatal error, a component was not closed
    // correctly in that case.
    if (state.stack.length > 1) {
      throw new ParserError('invalid ical body. component began but did not end');
    }
    state = null;
    return root.length == 1 ? root[0] : root;
  }

  /**
   * Parse an iCalendar property value into the jCal for a single property
   *
   * @function ICAL.parse.property
   * @param {String} str
   *   The iCalendar property string to parse
   * @param {designSet=} designSet
   *   The design data to use for this property
   * @return {Object}
   *   The jCal Object containing the property
   */
  parse.property = function (str, designSet) {
    var state = {
      component: [[], []],
      designSet: designSet || design.defaultSet
    };
    parse._handleContentLine(str, state);
    return state.component[1][0];
  };

  /**
   * Convenience method to parse a component. You can use ICAL.parse() directly
   * instead.
   *
   * @function ICAL.parse.component
   * @see ICAL.parse(function)
   * @param {String} str    The iCalendar component string to parse
   * @return {Object}       The jCal Object containing the component
   */
  parse.component = function (str) {
    return parse(str);
  };

  /**
   * An error that occurred during parsing.
   *
   * @param {String} message        The error message
   * @memberof ICAL.parse
   * @extends {Error}
   */
  var ParserError = /*#__PURE__*/function (_Error) {
    function ParserError() {
      var _this;
      _classCallCheck(this, ParserError);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _callSuper(this, ParserError, [].concat(args));
      _defineProperty(_this, "name", _this.constructor.name);
      return _this;
    }
    _inherits(ParserError, _Error);
    return _createClass(ParserError);
  }( /*#__PURE__*/_wrapNativeSuper(Error)); // classes & constants
  parse.ParserError = ParserError;

  /**
   * Handles a single line of iCalendar/vCard, updating the state.
   *
   * @private
   * @function ICAL.parse._handleContentLine
   * @param {String} line          The content line to process
   * @param {parserState} state    The current state of the line parsing
   */
  parse._handleContentLine = function (line, state) {
    // break up the parts of the line
    var valuePos = line.indexOf(VALUE_DELIMITER);
    var paramPos = line.indexOf(PARAM_DELIMITER);
    var lastParamIndex;
    var lastValuePos;

    // name of property or begin/end
    var name;
    var value;
    // params is only overridden if paramPos !== -1.
    // we can't do params = params || {} later on
    // because it sacrifices ops.
    var params = {};

    /**
     * Different property cases
     *
     *
     * 1. RRULE:FREQ=foo
     *    // FREQ= is not a param but the value
     *
     * 2. ATTENDEE;ROLE=REQ-PARTICIPANT;
     *    // ROLE= is a param because : has not happened yet
     */
    // when the parameter delimiter is after the
    // value delimiter then it is not a parameter.

    if (paramPos !== -1 && valuePos !== -1) {
      // when the parameter delimiter is after the
      // value delimiter then it is not a parameter.
      if (paramPos > valuePos) {
        paramPos = -1;
      }
    }
    var parsedParams;
    if (paramPos !== -1) {
      name = line.slice(0, Math.max(0, paramPos)).toLowerCase();
      parsedParams = parse._parseParameters(line.slice(Math.max(0, paramPos)), 0, state.designSet);
      if (parsedParams[2] == -1) {
        throw new ParserError("Invalid parameters in '" + line + "'");
      }
      params = parsedParams[0];
      lastParamIndex = parsedParams[1].length + parsedParams[2] + paramPos;
      if ((lastValuePos = line.slice(Math.max(0, lastParamIndex)).indexOf(VALUE_DELIMITER)) !== -1) {
        value = line.slice(Math.max(0, lastParamIndex + lastValuePos + 1));
      } else {
        throw new ParserError("Missing parameter value in '" + line + "'");
      }
    } else if (valuePos !== -1) {
      // without parmeters (BEGIN:VCAENDAR, CLASS:PUBLIC)
      name = line.slice(0, Math.max(0, valuePos)).toLowerCase();
      value = line.slice(Math.max(0, valuePos + 1));
      if (name === 'begin') {
        var newComponent = [value.toLowerCase(), [], []];
        if (state.stack.length === 1) {
          state.component.push(newComponent);
        } else {
          state.component[2].push(newComponent);
        }
        state.stack.push(state.component);
        state.component = newComponent;
        if (!state.designSet) {
          state.designSet = design.getDesignSet(state.component[0]);
        }
        return;
      } else if (name === 'end') {
        state.component = state.stack.pop();
        return;
      }
      // If it is not begin/end, then this is a property with an empty value,
      // which should be considered valid.
    } else {
      /**
       * Invalid line.
       * The rational to throw an error is we will
       * never be certain that the rest of the file
       * is sane and it is unlikely that we can serialize
       * the result correctly either.
       */
      throw new ParserError('invalid line (no token ";" or ":") "' + line + '"');
    }
    var valueType;
    var multiValue = false;
    var structuredValue = false;
    var propertyDetails;
    var splitName;
    var ungroupedName;

    // fetch the ungrouped part of the name
    if (state.designSet.propertyGroups && name.indexOf('.') !== -1) {
      splitName = name.split('.');
      params.group = splitName[0];
      ungroupedName = splitName[1];
    } else {
      ungroupedName = name;
    }
    if (ungroupedName in state.designSet.property) {
      propertyDetails = state.designSet.property[ungroupedName];
      if ('multiValue' in propertyDetails) {
        multiValue = propertyDetails.multiValue;
      }
      if ('structuredValue' in propertyDetails) {
        structuredValue = propertyDetails.structuredValue;
      }
      if (value && 'detectType' in propertyDetails) {
        valueType = propertyDetails.detectType(value);
      }
    }

    // attempt to determine value
    if (!valueType) {
      if (!('value' in params)) {
        if (propertyDetails) {
          valueType = propertyDetails.defaultType;
        } else {
          valueType = DEFAULT_VALUE_TYPE$1;
        }
      } else {
        // possible to avoid this?
        valueType = params.value.toLowerCase();
      }
    }
    delete params.value;

    /**
     * Note on `var result` juggling:
     *
     * I observed that building the array in pieces has adverse
     * effects on performance, so where possible we inline the creation.
     * It is a little ugly but resulted in ~2000 additional ops/sec.
     */

    var result;
    if (multiValue && structuredValue) {
      value = parse._parseMultiValue(value, structuredValue, valueType, [], multiValue, state.designSet, structuredValue);
      result = [ungroupedName, params, valueType, value];
    } else if (multiValue) {
      result = [ungroupedName, params, valueType];
      parse._parseMultiValue(value, multiValue, valueType, result, null, state.designSet, false);
    } else if (structuredValue) {
      value = parse._parseMultiValue(value, structuredValue, valueType, [], null, state.designSet, structuredValue);
      result = [ungroupedName, params, valueType, value];
    } else {
      value = parse._parseValue(value, valueType, state.designSet, false);
      result = [ungroupedName, params, valueType, value];
    }
    // rfc6350 requires that in vCard 4.0 the first component is the VERSION
    // component with as value 4.0, note that 3.0 does not have this requirement.
    if (state.component[0] === 'vcard' && state.component[1].length === 0 && !(name === 'version' && value === '4.0')) {
      state.designSet = design.getDesignSet("vcard3");
    }
    state.component[1].push(result);
  };

  /**
   * Parse a value from the raw value into the jCard/jCal value.
   *
   * @private
   * @function ICAL.parse._parseValue
   * @param {String} value          Original value
   * @param {String} type           Type of value
   * @param {Object} designSet      The design data to use for this value
   * @return {Object} varies on type
   */
  parse._parseValue = function (value, type, designSet, structuredValue) {
    if (type in designSet.value && 'fromICAL' in designSet.value[type]) {
      return designSet.value[type].fromICAL(value, structuredValue);
    }
    return value;
  };

  /**
   * Parse parameters from a string to object.
   *
   * @function ICAL.parse._parseParameters
   * @private
   * @param {String} line           A single unfolded line
   * @param {Number} start         Position to start looking for properties
   * @param {Object} designSet      The design data to use for this property
   * @return {Object} key/value pairs
   */
  parse._parseParameters = function (line, start, designSet) {
    var lastParam = start;
    var pos = 0;
    var delim = PARAM_NAME_DELIMITER;
    var result = {};
    var name, lcname;
    var value,
      valuePos = -1;
    var type, multiValue, mvdelim;

    // find the next '=' sign
    // use lastParam and pos to find name
    // check if " is used if so get value from "->"
    // then increment pos to find next ;

    while (pos !== false && (pos = line.indexOf(delim, pos + 1)) !== -1) {
      name = line.slice(lastParam + 1, pos);
      if (name.length == 0) {
        throw new ParserError("Empty parameter name in '" + line + "'");
      }
      lcname = name.toLowerCase();
      mvdelim = false;
      multiValue = false;
      if (lcname in designSet.param && designSet.param[lcname].valueType) {
        type = designSet.param[lcname].valueType;
      } else {
        type = DEFAULT_PARAM_TYPE;
      }
      if (lcname in designSet.param) {
        multiValue = designSet.param[lcname].multiValue;
        if (designSet.param[lcname].multiValueSeparateDQuote) {
          mvdelim = parse._rfc6868Escape('"' + multiValue + '"');
        }
      }
      var nextChar = line[pos + 1];
      if (nextChar === '"') {
        valuePos = pos + 2;
        pos = line.indexOf('"', valuePos);
        if (multiValue && pos != -1) {
          var extendedValue = true;
          while (extendedValue) {
            if (line[pos + 1] == multiValue && line[pos + 2] == '"') {
              pos = line.indexOf('"', pos + 3);
            } else {
              extendedValue = false;
            }
          }
        }
        if (pos === -1) {
          throw new ParserError('invalid line (no matching double quote) "' + line + '"');
        }
        value = line.slice(valuePos, pos);
        lastParam = line.indexOf(PARAM_DELIMITER, pos);
        var propValuePos = line.indexOf(VALUE_DELIMITER, pos);
        // if either no next parameter or delimeter in property value, let's stop here
        if (lastParam === -1 || propValuePos !== -1 && lastParam > propValuePos) {
          pos = false;
        }
      } else {
        valuePos = pos + 1;

        // move to next ";"
        var nextPos = line.indexOf(PARAM_DELIMITER, valuePos);
        var _propValuePos = line.indexOf(VALUE_DELIMITER, valuePos);
        if (_propValuePos !== -1 && nextPos > _propValuePos) {
          // this is a delimiter in the property value, let's stop here
          nextPos = _propValuePos;
          pos = false;
        } else if (nextPos === -1) {
          // no ";"
          if (_propValuePos === -1) {
            nextPos = line.length;
          } else {
            nextPos = _propValuePos;
          }
          pos = false;
        } else {
          lastParam = nextPos;
          pos = nextPos;
        }
        value = line.slice(valuePos, nextPos);
      }
      var length_before = value.length;
      value = parse._rfc6868Escape(value);
      valuePos += length_before - value.length;
      if (multiValue) {
        var delimiter = mvdelim || multiValue;
        value = parse._parseMultiValue(value, delimiter, type, [], null, designSet);
      } else {
        value = parse._parseValue(value, type, designSet);
      }
      if (multiValue && lcname in result) {
        if (Array.isArray(result[lcname])) {
          result[lcname].push(value);
        } else {
          result[lcname] = [result[lcname], value];
        }
      } else {
        result[lcname] = value;
      }
    }
    return [result, value, valuePos];
  };

  /**
   * Internal helper for rfc6868. Exposing this on ICAL.parse so that
   * hackers can disable the rfc6868 parsing if the really need to.
   *
   * @function ICAL.parse._rfc6868Escape
   * @param {String} val        The value to escape
   * @return {String}           The escaped value
   */
  parse._rfc6868Escape = function (val) {
    return val.replace(/\^['n^]/g, function (x) {
      return RFC6868_REPLACE_MAP$1[x];
    });
  };

  /**
   * Parse a multi value string. This function is used either for parsing
   * actual multi-value property's values, or for handling parameter values. It
   * can be used for both multi-value properties and structured value properties.
   *
   * @private
   * @function ICAL.parse._parseMultiValue
   * @param {String} buffer           The buffer containing the full value
   * @param {String} delim            The multi-value delimiter
   * @param {String} type             The value type to be parsed
   * @param {Array.<?>} result        The array to append results to, varies on value type
   * @param {String} innerMulti       The inner delimiter to split each value with
   * @param {designSet} designSet     The design data for this value
   * @return {?|Array.<?>}            Either an array of results, or the first result
   */
  parse._parseMultiValue = function (buffer, delim, type, result, innerMulti, designSet, structuredValue) {
    var pos = 0;
    var lastPos = 0;
    var value;
    if (delim.length === 0) {
      return buffer;
    }

    // split each piece
    while ((pos = unescapedIndexOf(buffer, delim, lastPos)) !== -1) {
      value = buffer.slice(lastPos, pos);
      if (innerMulti) {
        value = parse._parseMultiValue(value, innerMulti, type, [], null, designSet, structuredValue);
      } else {
        value = parse._parseValue(value, type, designSet, structuredValue);
      }
      result.push(value);
      lastPos = pos + delim.length;
    }

    // on the last piece take the rest of string
    value = buffer.slice(lastPos);
    if (innerMulti) {
      value = parse._parseMultiValue(value, innerMulti, type, [], null, designSet, structuredValue);
    } else {
      value = parse._parseValue(value, type, designSet, structuredValue);
    }
    result.push(value);
    return result.length == 1 ? result[0] : result;
  };

  /**
   * Process a complete buffer of iCalendar/vCard data line by line, correctly
   * unfolding content. Each line will be processed with the given callback
   *
   * @private
   * @function ICAL.parse._eachLine
   * @param {String} buffer                         The buffer to process
   * @param {function(?String, String)} callback    The callback for each line
   */
  parse._eachLine = function (buffer, callback) {
    var len = buffer.length;
    var lastPos = buffer.search(CHAR);
    var pos = lastPos;
    var line;
    var firstChar;
    var newlineOffset;
    do {
      pos = buffer.indexOf('\n', lastPos) + 1;
      if (pos > 1 && buffer[pos - 2] === '\r') {
        newlineOffset = 2;
      } else {
        newlineOffset = 1;
      }
      if (pos === 0) {
        pos = len;
        newlineOffset = 0;
      }
      firstChar = buffer[lastPos];
      if (firstChar === ' ' || firstChar === '\t') {
        // add to line
        line += buffer.slice(lastPos + 1, pos - newlineOffset);
      } else {
        if (line) callback(null, line);
        // push line
        line = buffer.slice(lastPos, pos - newlineOffset);
      }
      lastPos = pos;
    } while (pos !== len);

    // extra ending line
    line = line.trim();
    if (line.length) callback(null, line);
  };

  var OPTIONS = ["tzid", "location", "tznames", "latitude", "longitude"];

  /**
   * Timezone representation.
   *
   * @example
   * var vcalendar;
   * var timezoneComp = vcalendar.getFirstSubcomponent('vtimezone');
   * var tzid = timezoneComp.getFirstPropertyValue('tzid');
   *
   * var timezone = new ICAL.Timezone({
   *   component: timezoneComp,
   *   tzid
   * });
   *
   * @memberof ICAL
   */
  var Timezone = /*#__PURE__*/function () {
    /**
     * Creates a new ICAL.Timezone instance, by passing in a tzid and component.
     *
     * @param {Component|Object} data options for class
     * @param {String|Component} data.component
     *        If data is a simple object, then this member can be set to either a
     *        string containing the component data, or an already parsed
     *        ICAL.Component
     * @param {String} data.tzid      The timezone identifier
     * @param {String} data.location  The timezone locationw
     * @param {String} data.tznames   An alternative string representation of the
     *                                  timezone
     * @param {Number} data.latitude  The latitude of the timezone
     * @param {Number} data.longitude The longitude of the timezone
     */
    function Timezone(data) {
      _classCallCheck(this, Timezone);
      /**
       * Timezone identifier
       * @type {String}
       */
      _defineProperty(this, "tzid", "");
      /**
       * Timezone location
       * @type {String}
       */
      _defineProperty(this, "location", "");
      /**
       * Alternative timezone name, for the string representation
       * @type {String}
       */
      _defineProperty(this, "tznames", "");
      /**
       * The primary latitude for the timezone.
       * @type {Number}
       */
      _defineProperty(this, "latitude", 0.0);
      /**
       * The primary longitude for the timezone.
       * @type {Number}
       */
      _defineProperty(this, "longitude", 0.0);
      /**
       * The vtimezone component for this timezone.
       * @type {Component}
       */
      _defineProperty(this, "component", null);
      /**
       * The year this timezone has been expanded to. All timezone transition
       * dates until this year are known and can be used for calculation
       *
       * @private
       * @type {Number}
       */
      _defineProperty(this, "expandedUntilYear", 0);
      /**
       * The class identifier.
       * @constant
       * @type {String}
       * @default "icaltimezone"
       */
      _defineProperty(this, "icalclass", "icaltimezone");
      this.wrappedJSObject = this;
      this.fromData(data);
    }
    return _createClass(Timezone, [{
      key: "fromData",
      value:
      /**
       * Sets up the current instance using members from the passed data object.
       *
       * @param {Component|Object} aData options for class
       * @param {String|Component} aData.component
       *        If aData is a simple object, then this member can be set to either a
       *        string containing the component data, or an already parsed
       *        ICAL.Component
       * @param {String} aData.tzid      The timezone identifier
       * @param {String} aData.location  The timezone locationw
       * @param {String} aData.tznames   An alternative string representation of the
       *                                  timezone
       * @param {Number} aData.latitude  The latitude of the timezone
       * @param {Number} aData.longitude The longitude of the timezone
       */
      function fromData(aData) {
        this.expandedUntilYear = 0;
        this.changes = [];
        if (aData instanceof Component) {
          // Either a component is passed directly
          this.component = aData;
        } else {
          // Otherwise the component may be in the data object
          if (aData && "component" in aData) {
            if (typeof aData.component == "string") {
              // If a string was passed, parse it as a component
              var jCal = parse(aData.component);
              this.component = new Component(jCal);
            } else if (aData.component instanceof Component) {
              // If it was a component already, then just set it
              this.component = aData.component;
            } else {
              // Otherwise just null out the component
              this.component = null;
            }
          }

          // Copy remaining passed properties
          for (var _i = 0, _OPTIONS = OPTIONS; _i < _OPTIONS.length; _i++) {
            var prop = _OPTIONS[_i];
            if (aData && prop in aData) {
              this[prop] = aData[prop];
            }
          }
        }

        // If we have a component but no TZID, attempt to get it from the
        // component's properties.
        if (this.component instanceof Component && !this.tzid) {
          this.tzid = this.component.getFirstPropertyValue('tzid');
        }
        return this;
      }

      /**
       * Finds the utcOffset the given time would occur in this timezone.
       *
       * @param {Time} tt         The time to check for
       * @return {Number}         utc offset in seconds
       */
    }, {
      key: "utcOffset",
      value: function utcOffset(tt) {
        if (this == Timezone.utcTimezone || this == Timezone.localTimezone) {
          return 0;
        }
        this._ensureCoverage(tt.year);
        if (!this.changes.length) {
          return 0;
        }
        var tt_change = {
          year: tt.year,
          month: tt.month,
          day: tt.day,
          hour: tt.hour,
          minute: tt.minute,
          second: tt.second
        };
        var change_num = this._findNearbyChange(tt_change);
        var change_num_to_use = -1;
        var step = 1;

        // TODO: replace with bin search?
        for (;;) {
          var change = clone(this.changes[change_num], true);
          if (change.utcOffset < change.prevUtcOffset) {
            Timezone.adjust_change(change, 0, 0, 0, change.utcOffset);
          } else {
            Timezone.adjust_change(change, 0, 0, 0, change.prevUtcOffset);
          }
          var cmp = Timezone._compare_change_fn(tt_change, change);
          if (cmp >= 0) {
            change_num_to_use = change_num;
          } else {
            step = -1;
          }
          if (step == -1 && change_num_to_use != -1) {
            break;
          }
          change_num += step;
          if (change_num < 0) {
            return 0;
          }
          if (change_num >= this.changes.length) {
            break;
          }
        }
        var zone_change = this.changes[change_num_to_use];
        var utcOffset_change = zone_change.utcOffset - zone_change.prevUtcOffset;
        if (utcOffset_change < 0 && change_num_to_use > 0) {
          var tmp_change = clone(zone_change, true);
          Timezone.adjust_change(tmp_change, 0, 0, 0, tmp_change.prevUtcOffset);
          if (Timezone._compare_change_fn(tt_change, tmp_change) < 0) {
            var prev_zone_change = this.changes[change_num_to_use - 1];
            var want_daylight = false; // TODO

            if (zone_change.is_daylight != want_daylight && prev_zone_change.is_daylight == want_daylight) {
              zone_change = prev_zone_change;
            }
          }
        }

        // TODO return is_daylight?
        return zone_change.utcOffset;
      }
    }, {
      key: "_findNearbyChange",
      value: function _findNearbyChange(change) {
        // find the closest match
        var idx = binsearchInsert(this.changes, change, Timezone._compare_change_fn);
        if (idx >= this.changes.length) {
          return this.changes.length - 1;
        }
        return idx;
      }
    }, {
      key: "_ensureCoverage",
      value: function _ensureCoverage(aYear) {
        if (Timezone._minimumExpansionYear == -1) {
          var today = Time.now();
          Timezone._minimumExpansionYear = today.year;
        }
        var changesEndYear = aYear;
        if (changesEndYear < Timezone._minimumExpansionYear) {
          changesEndYear = Timezone._minimumExpansionYear;
        }
        changesEndYear += Timezone.EXTRA_COVERAGE;
        if (!this.changes.length || this.expandedUntilYear < aYear) {
          var subcomps = this.component.getAllSubcomponents();
          var compLen = subcomps.length;
          var compIdx = 0;
          for (; compIdx < compLen; compIdx++) {
            this._expandComponent(subcomps[compIdx], changesEndYear, this.changes);
          }
          this.changes.sort(Timezone._compare_change_fn);
          this.expandedUntilYear = changesEndYear;
        }
      }
    }, {
      key: "_expandComponent",
      value: function _expandComponent(aComponent, aYear, changes) {
        if (!aComponent.hasProperty("dtstart") || !aComponent.hasProperty("tzoffsetto") || !aComponent.hasProperty("tzoffsetfrom")) {
          return null;
        }
        var dtstart = aComponent.getFirstProperty("dtstart").getFirstValue();
        var change;
        function convert_tzoffset(offset) {
          return offset.factor * (offset.hours * 3600 + offset.minutes * 60);
        }
        function init_changes() {
          var changebase = {};
          changebase.is_daylight = aComponent.name == "daylight";
          changebase.utcOffset = convert_tzoffset(aComponent.getFirstProperty("tzoffsetto").getFirstValue());
          changebase.prevUtcOffset = convert_tzoffset(aComponent.getFirstProperty("tzoffsetfrom").getFirstValue());
          return changebase;
        }
        if (!aComponent.hasProperty("rrule") && !aComponent.hasProperty("rdate")) {
          change = init_changes();
          change.year = dtstart.year;
          change.month = dtstart.month;
          change.day = dtstart.day;
          change.hour = dtstart.hour;
          change.minute = dtstart.minute;
          change.second = dtstart.second;
          Timezone.adjust_change(change, 0, 0, 0, -change.prevUtcOffset);
          changes.push(change);
        } else {
          var props = aComponent.getAllProperties("rdate");
          var _iterator = _createForOfIteratorHelper(props),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var rdate = _step.value;
              var time = rdate.getFirstValue();
              change = init_changes();
              change.year = time.year;
              change.month = time.month;
              change.day = time.day;
              if (time.isDate) {
                change.hour = dtstart.hour;
                change.minute = dtstart.minute;
                change.second = dtstart.second;
                if (dtstart.zone != Timezone.utcTimezone) {
                  Timezone.adjust_change(change, 0, 0, 0, -change.prevUtcOffset);
                }
              } else {
                change.hour = time.hour;
                change.minute = time.minute;
                change.second = time.second;
                if (time.zone != Timezone.utcTimezone) {
                  Timezone.adjust_change(change, 0, 0, 0, -change.prevUtcOffset);
                }
              }
              changes.push(change);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var rrule = aComponent.getFirstProperty("rrule");
          if (rrule) {
            rrule = rrule.getFirstValue();
            change = init_changes();
            if (rrule.until && rrule.until.zone == Timezone.utcTimezone) {
              rrule.until.adjust(0, 0, 0, change.prevUtcOffset);
              rrule.until.zone = Timezone.localTimezone;
            }
            var iterator = rrule.iterator(dtstart);
            var occ;
            while (occ = iterator.next()) {
              change = init_changes();
              if (occ.year > aYear || !occ) {
                break;
              }
              change.year = occ.year;
              change.month = occ.month;
              change.day = occ.day;
              change.hour = occ.hour;
              change.minute = occ.minute;
              change.second = occ.second;
              change.isDate = occ.isDate;
              Timezone.adjust_change(change, 0, 0, 0, -change.prevUtcOffset);
              changes.push(change);
            }
          }
        }
        return changes;
      }

      /**
       * The string representation of this timezone.
       * @return {String}
       */
    }, {
      key: "toString",
      value: function toString() {
        return this.tznames ? this.tznames : this.tzid;
      }
    }], [{
      key: "_compare_change_fn",
      value: function _compare_change_fn(a, b) {
        if (a.year < b.year) return -1;else if (a.year > b.year) return 1;
        if (a.month < b.month) return -1;else if (a.month > b.month) return 1;
        if (a.day < b.day) return -1;else if (a.day > b.day) return 1;
        if (a.hour < b.hour) return -1;else if (a.hour > b.hour) return 1;
        if (a.minute < b.minute) return -1;else if (a.minute > b.minute) return 1;
        if (a.second < b.second) return -1;else if (a.second > b.second) return 1;
        return 0;
      }

      /**
       * Convert the date/time from one zone to the next.
       *
       * @param {Time} tt                  The time to convert
       * @param {Timezone} from_zone       The source zone to convert from
       * @param {Timezone} to_zone         The target zone to convert to
       * @return {Time}                    The converted date/time object
       */
    }, {
      key: "convert_time",
      value: function convert_time(tt, from_zone, to_zone) {
        if (tt.isDate || from_zone.tzid == to_zone.tzid || from_zone == Timezone.localTimezone || to_zone == Timezone.localTimezone) {
          tt.zone = to_zone;
          return tt;
        }
        var utcOffset = from_zone.utcOffset(tt);
        tt.adjust(0, 0, 0, -utcOffset);
        utcOffset = to_zone.utcOffset(tt);
        tt.adjust(0, 0, 0, utcOffset);
        return null;
      }

      /**
       * Creates a new ICAL.Timezone instance from the passed data object.
       *
       * @param {Component|Object} aData options for class
       * @param {String|Component} aData.component
       *        If aData is a simple object, then this member can be set to either a
       *        string containing the component data, or an already parsed
       *        ICAL.Component
       * @param {String} aData.tzid      The timezone identifier
       * @param {String} aData.location  The timezone locationw
       * @param {String} aData.tznames   An alternative string representation of the
       *                                  timezone
       * @param {Number} aData.latitude  The latitude of the timezone
       * @param {Number} aData.longitude The longitude of the timezone
       */
    }, {
      key: "fromData",
      value: function fromData(aData) {
        var tt = new Timezone();
        return tt.fromData(aData);
      }

      /**
       * The instance describing the UTC timezone
       * @type {Timezone}
       * @constant
       * @instance
       */
    }, {
      key: "utcTimezone",
      get: function get() {
        if (!_assertClassBrand(Timezone, this, _utcTimezone)._) {
          _utcTimezone._ = _assertClassBrand(Timezone, this, Timezone.fromData({
            tzid: "UTC"
          }));
        }
        return _assertClassBrand(Timezone, this, _utcTimezone)._;
      }

      /**
       * The instance describing the local timezone
       * @type {Timezone}
       * @constant
       * @instance
       */
    }, {
      key: "localTimezone",
      get: function get() {
        if (!_assertClassBrand(Timezone, this, _localTimezone)._) {
          _localTimezone._ = _assertClassBrand(Timezone, this, Timezone.fromData({
            tzid: "floating"
          }));
        }
        return _assertClassBrand(Timezone, this, _localTimezone)._;
      }

      /**
       * Adjust a timezone change object.
       * @private
       * @param {Object} change     The timezone change object
       * @param {Number} days       The extra amount of days
       * @param {Number} hours      The extra amount of hours
       * @param {Number} minutes    The extra amount of minutes
       * @param {Number} seconds    The extra amount of seconds
       */
    }, {
      key: "adjust_change",
      value: function adjust_change(change, days, hours, minutes, seconds) {
        return Time.prototype.adjust.call(change, days, hours, minutes, seconds, change);
      }
    }]);
  }();
  var _utcTimezone = {
    _: null
  };
  var _localTimezone = {
    _: null
  };
  _defineProperty(Timezone, "_minimumExpansionYear", -1);
  _defineProperty(Timezone, "EXTRA_COVERAGE", 5);

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/.
   * Portions Copyright (C) Philipp Kewisch */
  var zones = null;

  /**
   * @classdesc
   * Singleton class to contain timezones.  Right now it is all manual registry in
   * the future we may use this class to download timezone information or handle
   * loading pre-expanded timezones.
   *
   * @exports module:ICAL.TimezoneService
   * @memberof ICAL
   */
  var TimezoneService = {
    get count() {
      if (zones === null) {
        return 0;
      }
      return Object.keys(zones).length;
    },
    reset: function reset() {
      zones = Object.create(null);
      var utc = Timezone.utcTimezone;
      zones.Z = utc;
      zones.UTC = utc;
      zones.GMT = utc;
    },
    _hard_reset: function _hard_reset() {
      zones = null;
    },
    /**
     * Checks if timezone id has been registered.
     *
     * @param {String} tzid     Timezone identifier (e.g. America/Los_Angeles)
     * @return {Boolean}        False, when not present
     */
    has: function has(tzid) {
      if (zones === null) {
        return false;
      }
      return !!zones[tzid];
    },
    /**
     * Returns a timezone by its tzid if present.
     *
     * @param {String} tzid               Timezone identifier (e.g. America/Los_Angeles)
     * @return {Timezone | undefined}     The timezone, or undefined if not found
     */
    get: function get(tzid) {
      if (zones === null) {
        this.reset();
      }
      return zones[tzid];
    },
    /**
     * Registers a timezone object or component.
     *
     * @param {Component|Timezone} timezone
     *        The initialized zone or vtimezone.
     *
     * @param {String=} name
     *        The name of the timezone. Defaults to the component's TZID if not
     *        passed.
     */
    register: function register(timezone, name) {
      if (zones === null) {
        this.reset();
      }

      // This avoids a breaking change by the change of argument order
      // TODO remove in v3
      if (typeof timezone === "string" && name instanceof Timezone) {
        var _ref = [name, timezone];
        timezone = _ref[0];
        name = _ref[1];
      }
      if (!name) {
        if (timezone instanceof Timezone) {
          name = timezone.tzid;
        } else {
          if (timezone.name === 'vtimezone') {
            timezone = new Timezone(timezone);
            name = timezone.tzid;
          }
        }
      }
      if (!name) {
        throw new TypeError("Neither a timezone nor a name was passed");
      }
      if (timezone instanceof Timezone) {
        zones[name] = timezone;
      } else {
        throw new TypeError('timezone must be ICAL.Timezone or ICAL.Component');
      }
    },
    /**
     * Removes a timezone by its tzid from the list.
     *
     * @param {String} tzid     Timezone identifier (e.g. America/Los_Angeles)
     * @return {?Timezone}      The removed timezone, or null if not registered
     */
    remove: function remove(tzid) {
      if (zones === null) {
        return null;
      }
      return delete zones[tzid];
    }
  };

  /**
   * Helper functions used in various places within ical.js
   * @module ICAL.helpers
   */

  /**
   * Compiles a list of all referenced TZIDs in all subcomponents and
   * removes any extra VTIMEZONE subcomponents. In addition, if any TZIDs
   * are referenced by a component, but a VTIMEZONE does not exist,
   * an attempt will be made to generate a VTIMEZONE using ICAL.TimezoneService.
   *
   * @param {Component} vcal     The top-level VCALENDAR component.
   * @return {Component}         The ICAL.Component that was passed in.
   */
  function updateTimezones(vcal) {
    var allsubs, properties, vtimezones, reqTzid, i;
    if (!vcal || vcal.name !== "vcalendar") {
      //not a top-level vcalendar component
      return vcal;
    }

    //Store vtimezone subcomponents in an object reference by tzid.
    //Store properties from everything else in another array
    allsubs = vcal.getAllSubcomponents();
    properties = [];
    vtimezones = {};
    for (i = 0; i < allsubs.length; i++) {
      if (allsubs[i].name === "vtimezone") {
        var tzid = allsubs[i].getFirstProperty("tzid").getFirstValue();
        vtimezones[tzid] = allsubs[i];
      } else {
        properties = properties.concat(allsubs[i].getAllProperties());
      }
    }

    //create an object with one entry for each required tz
    reqTzid = {};
    for (i = 0; i < properties.length; i++) {
      var _tzid = properties[i].getParameter("tzid");
      if (_tzid) {
        reqTzid[_tzid] = true;
      }
    }

    //delete any vtimezones that are not on the reqTzid list.
    for (var _i = 0, _Object$entries = Object.entries(vtimezones); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        _tzid2 = _Object$entries$_i[0],
        comp = _Object$entries$_i[1];
      if (!reqTzid[_tzid2]) {
        vcal.removeSubcomponent(comp);
      }
    }

    //create any missing, but registered timezones
    for (var _i2 = 0, _Object$keys = Object.keys(reqTzid); _i2 < _Object$keys.length; _i2++) {
      var _tzid3 = _Object$keys[_i2];
      if (!vtimezones[_tzid3] && TimezoneService.has(_tzid3)) {
        vcal.addSubcomponent(TimezoneService.get(_tzid3).component);
      }
    }
    return vcal;
  }

  /**
   * Checks if the given type is of the number type and also NaN.
   *
   * @param {Number} number     The number to check
   * @return {Boolean}          True, if the number is strictly NaN
   */
  function isStrictlyNaN(number) {
    return typeof number === 'number' && isNaN(number);
  }

  /**
   * Parses a string value that is expected to be an integer, when the valid is
   * not an integer throws a decoration error.
   *
   * @param {String} string     Raw string input
   * @return {Number}           Parsed integer
   */
  function strictParseInt(string) {
    var result = parseInt(string, 10);
    if (isStrictlyNaN(result)) {
      throw new Error('Could not extract integer from "' + string + '"');
    }
    return result;
  }

  /**
   * Creates or returns a class instance of a given type with the initialization
   * data if the data is not already an instance of the given type.
   *
   * @example
   * var time = new ICAL.Time(...);
   * var result = ICAL.helpers.formatClassType(time, ICAL.Time);
   *
   * (result instanceof ICAL.Time)
   * // => true
   *
   * result = ICAL.helpers.formatClassType({}, ICAL.Time);
   * (result isntanceof ICAL.Time)
   * // => true
   *
   *
   * @param {Object} data       object initialization data
   * @param {Object} type       object type (like ICAL.Time)
   * @return {?}                An instance of the found type.
   */
  function formatClassType(data, type) {
    if (typeof data === 'undefined') {
      return undefined;
    }
    if (data instanceof type) {
      return data;
    }
    return new type(data);
  }

  /**
   * Identical to indexOf but will only match values when they are not preceded
   * by a backslash character.
   *
   * @param {String} buffer         String to search
   * @param {String} search         Value to look for
   * @param {Number} pos            Start position
   * @return {Number}               The position, or -1 if not found
   */
  function unescapedIndexOf(buffer, search, pos) {
    while ((pos = buffer.indexOf(search, pos)) !== -1) {
      if (pos > 0 && buffer[pos - 1] === '\\') {
        pos += 1;
      } else {
        return pos;
      }
    }
    return -1;
  }

  /**
   * Find the index for insertion using binary search.
   *
   * @param {Array} list            The list to search
   * @param {?} seekVal             The value to insert
   * @param {function(?,?)} cmpfunc The comparison func, that can
   *                                  compare two seekVals
   * @return {Number}               The insert position
   */
  function binsearchInsert(list, seekVal, cmpfunc) {
    if (!list.length) return 0;
    var low = 0,
      high = list.length - 1,
      mid,
      cmpval;
    while (low <= high) {
      mid = low + Math.floor((high - low) / 2);
      cmpval = cmpfunc(seekVal, list[mid]);
      if (cmpval < 0) high = mid - 1;else if (cmpval > 0) low = mid + 1;else break;
    }
    if (cmpval < 0) return mid; // insertion is displacing, so use mid outright.
    else if (cmpval > 0) return mid + 1;else return mid;
  }

  /**
   * Clone the passed object or primitive. By default a shallow clone will be
   * executed.
   *
   * @param {*} aSrc            The thing to clone
   * @param {Boolean=} aDeep    If true, a deep clone will be performed
   * @return {*}                The copy of the thing
   */
  function clone(aSrc, aDeep) {
    if (!aSrc || _typeof(aSrc) != "object") {
      return aSrc;
    } else if (aSrc instanceof Date) {
      return new Date(aSrc.getTime());
    } else if ("clone" in aSrc) {
      return aSrc.clone();
    } else if (Array.isArray(aSrc)) {
      var arr = [];
      for (var i = 0; i < aSrc.length; i++) {
        arr.push(aDeep ? clone(aSrc[i], true) : aSrc[i]);
      }
      return arr;
    } else {
      var obj = {};
      for (var _i3 = 0, _Object$entries2 = Object.entries(aSrc); _i3 < _Object$entries2.length; _i3++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
          name = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        if (aDeep) {
          obj[name] = clone(value, true);
        } else {
          obj[name] = value;
        }
      }
      return obj;
    }
  }

  /**
   * Performs iCalendar line folding. A line ending character is inserted and
   * the next line begins with a whitespace.
   *
   * @example
   * SUMMARY:This line will be fold
   *  ed right in the middle of a word.
   *
   * @param {String} aLine      The line to fold
   * @return {String}           The folded line
   */
  function foldline(aLine) {
    var result = "";
    var line = aLine || "",
      pos = 0,
      line_length = 0;
    //pos counts position in line for the UTF-16 presentation
    //line_length counts the bytes for the UTF-8 presentation
    while (line.length) {
      var cp = line.codePointAt(pos);
      if (cp < 128) ++line_length;else if (cp < 2048) line_length += 2; //needs 2 UTF-8 bytes
      else if (cp < 65536) line_length += 3;else line_length += 4; //cp is less than 1114112
      if (line_length < ICALmodule.foldLength + 1) pos += cp > 65535 ? 2 : 1;else {
        result += ICALmodule.newLineChar + " " + line.slice(0, Math.max(0, pos));
        line = line.slice(Math.max(0, pos));
        pos = line_length = 0;
      }
    }
    return result.slice(ICALmodule.newLineChar.length + 1);
  }

  /**
   * Pads the given string or number with zeros so it will have at least two
   * characters.
   *
   * @param {String|Number} data    The string or number to pad
   * @return {String}               The number padded as a string
   */
  function pad2(data) {
    if (typeof data !== 'string') {
      // handle fractions.
      if (typeof data === 'number') {
        data = parseInt(data);
      }
      data = String(data);
    }
    var len = data.length;
    switch (len) {
      case 0:
        return '00';
      case 1:
        return '0' + data;
      default:
        return data;
    }
  }

  /**
   * Truncates the given number, correctly handling negative numbers.
   *
   * @param {Number} number     The number to truncate
   * @return {Number}           The truncated number
   */
  function trunc(number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }

  /**
   * Poor-man's cross-browser object extension. Doesn't support all the
   * features, but enough for our usage. Note that the target's properties are
   * not overwritten with the source properties.
   *
   * @example
   * var child = ICAL.helpers.extend(parent, {
   *   "bar": 123
   * });
   *
   * @param {Object} source     The object to extend
   * @param {Object} target     The object to extend with
   * @return {Object}           Returns the target.
   */
  function extend(source, target) {
    for (var key in source) {
      var descr = Object.getOwnPropertyDescriptor(source, key);
      if (descr && !Object.getOwnPropertyDescriptor(target, key)) {
        Object.defineProperty(target, key, descr);
      }
    }
    return target;
  }

  var helpers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    updateTimezones: updateTimezones,
    isStrictlyNaN: isStrictlyNaN,
    strictParseInt: strictParseInt,
    formatClassType: formatClassType,
    unescapedIndexOf: unescapedIndexOf,
    binsearchInsert: binsearchInsert,
    clone: clone,
    foldline: foldline,
    pad2: pad2,
    trunc: trunc,
    extend: extend
  });

  /**
   * This class represents the "utc-offset" value type, with various calculation and manipulation
   * methods.
   *
   * @memberof ICAL
   */
  var UtcOffset = /*#__PURE__*/function () {
    /**
     * Creates a new ICAL.UtcOffset instance.
     *
     * @param {Object} aData          An object with members of the utc offset
     * @param {Number=} aData.hours   The hours for the utc offset
     * @param {Number=} aData.minutes The minutes in the utc offset
     * @param {Number=} aData.factor  The factor for the utc-offset, either -1 or 1
     */
    function UtcOffset(aData) {
      _classCallCheck(this, UtcOffset);
      /**
       * The hours in the utc-offset
       * @type {Number}
       */
      _defineProperty(this, "hours", 0);
      /**
       * The minutes in the utc-offset
       * @type {Number}
       */
      _defineProperty(this, "minutes", 0);
      /**
       * The sign of the utc offset, 1 for positive offset, -1 for negative
       * offsets.
       * @type {Number}
       */
      _defineProperty(this, "factor", 1);
      /**
       * The type name, to be used in the jCal object.
       * @constant
       * @type {String}
       * @default "utc-offset"
       */
      _defineProperty(this, "icaltype", "utc-offset");
      this.fromData(aData);
    }
    return _createClass(UtcOffset, [{
      key: "clone",
      value:
      /**
       * Returns a clone of the utc offset object.
       *
       * @return {UtcOffset}     The cloned object
       */
      function clone() {
        return UtcOffset.fromSeconds(this.toSeconds());
      }

      /**
       * Sets up the current instance using members from the passed data object.
       *
       * @param {Object} aData          An object with members of the utc offset
       * @param {Number=} aData.hours   The hours for the utc offset
       * @param {Number=} aData.minutes The minutes in the utc offset
       * @param {Number=} aData.factor  The factor for the utc-offset, either -1 or 1
       */
    }, {
      key: "fromData",
      value: function fromData(aData) {
        if (aData) {
          for (var _i = 0, _Object$entries = Object.entries(aData); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            this[key] = value;
          }
        }
        this._normalize();
      }

      /**
       * Sets up the current instance from the given seconds value. The seconds
       * value is truncated to the minute. Offsets are wrapped when the world
       * ends, the hour after UTC+14:00 is UTC-12:00.
       *
       * @param {Number} aSeconds         The seconds to convert into an offset
       */
    }, {
      key: "fromSeconds",
      value: function fromSeconds(aSeconds) {
        var secs = Math.abs(aSeconds);
        this.factor = aSeconds < 0 ? -1 : 1;
        this.hours = trunc(secs / 3600);
        secs -= this.hours * 3600;
        this.minutes = trunc(secs / 60);
        return this;
      }

      /**
       * Convert the current offset to a value in seconds
       *
       * @return {Number}                 The offset in seconds
       */
    }, {
      key: "toSeconds",
      value: function toSeconds() {
        return this.factor * (60 * this.minutes + 3600 * this.hours);
      }

      /**
       * Compare this utc offset with another one.
       *
       * @param {UtcOffset} other             The other offset to compare with
       * @return {Number}                     -1, 0 or 1 for less/equal/greater
       */
    }, {
      key: "compare",
      value: function compare(other) {
        var a = this.toSeconds();
        var b = other.toSeconds();
        return (a > b) - (b > a);
      }
    }, {
      key: "_normalize",
      value: function _normalize() {
        // Range: 97200 seconds (with 1 hour inbetween)
        var secs = this.toSeconds();
        var factor = this.factor;
        while (secs < -43200) {
          // = UTC-12:00
          secs += 97200;
        }
        while (secs > 50400) {
          // = UTC+14:00
          secs -= 97200;
        }
        this.fromSeconds(secs);

        // Avoid changing the factor when on zero seconds
        if (secs == 0) {
          this.factor = factor;
        }
      }

      /**
       * The iCalendar string representation of this utc-offset.
       * @return {String}
       */
    }, {
      key: "toICALString",
      value: function toICALString() {
        return design.icalendar.value['utc-offset'].toICAL(this.toString());
      }

      /**
       * The string representation of this utc-offset.
       * @return {String}
       */
    }, {
      key: "toString",
      value: function toString() {
        return (this.factor == 1 ? "+" : "-") + pad2(this.hours) + ':' + pad2(this.minutes);
      }
    }], [{
      key: "fromString",
      value:
      /**
       * Creates a new {@link ICAL.UtcOffset} instance from the passed string.
       *
       * @param {String} aString    The string to parse
       * @return {Duration}         The created utc-offset instance
       */
      function fromString(aString) {
        // -05:00
        var options = {};
        //TODO: support seconds per rfc5545 ?
        options.factor = aString[0] === '+' ? 1 : -1;
        options.hours = strictParseInt(aString.slice(1, 3));
        options.minutes = strictParseInt(aString.slice(4, 6));
        return new UtcOffset(options);
      }

      /**
       * Creates a new {@link ICAL.UtcOffset} instance from the passed seconds
       * value.
       *
       * @param {Number} aSeconds       The number of seconds to convert
       */
    }, {
      key: "fromSeconds",
      value: function fromSeconds(aSeconds) {
        var instance = new UtcOffset();
        instance.fromSeconds(aSeconds);
        return instance;
      }
    }]);
  }();

  /**
   * Describes a vCard time, which has slight differences to the ICAL.Time.
   * Properties can be null if not specified, for example for dates with
   * reduced accuracy or truncation.
   *
   * Note that currently not all methods are correctly re-implemented for
   * VCardTime. For example, comparison will have undefined results when some
   * members are null.
   *
   * Also, normalization is not yet implemented for this class!
   *
   * @memberof ICAL
   * @extends {ICAL.Time}
   */
  var VCardTime = /*#__PURE__*/function (_Time) {
    /**
     * Creates a new ICAL.VCardTime instance.
     *
     * @param {Object} data                           The data for the time instance
     * @param {Number=} data.year                     The year for this date
     * @param {Number=} data.month                    The month for this date
     * @param {Number=} data.day                      The day for this date
     * @param {Number=} data.hour                     The hour for this date
     * @param {Number=} data.minute                   The minute for this date
     * @param {Number=} data.second                   The second for this date
     * @param {Timezone|UtcOffset} zone               The timezone to use
     * @param {String} icaltype                       The type for this date/time object
     */
    function VCardTime(data, zone, icaltype) {
      var _this;
      _classCallCheck(this, VCardTime);
      _this = _callSuper(this, VCardTime, [data, zone]);
      /**
       * The class identifier.
       * @constant
       * @type {String}
       * @default "vcardtime"
       */
      _defineProperty(_this, "icalclass", "vcardtime");
      /**
       * The type name, to be used in the jCal object.
       * @type {String}
       * @default "date-and-or-time"
       */
      _defineProperty(_this, "icaltype", "date-and-or-time");
      _this.icaltype = icaltype || "date-and-or-time";
      return _this;
    }
    _inherits(VCardTime, _Time);
    return _createClass(VCardTime, [{
      key: "clone",
      value:
      /**
       * Returns a clone of the vcard date/time object.
       *
       * @return {VCardTime}     The cloned object
       */
      function clone() {
        return new VCardTime(this._time, this.zone, this.icaltype);
      }
    }, {
      key: "_normalize",
      value: function _normalize() {
        return this;
      }

      /**
       * @inheritdoc
       */
    }, {
      key: "utcOffset",
      value: function utcOffset() {
        if (this.zone instanceof UtcOffset) {
          return this.zone.toSeconds();
        } else {
          return Time.prototype.utcOffset.apply(this, arguments);
        }
      }

      /**
       * Returns an RFC 6350 compliant representation of this object.
       *
       * @return {String}         vcard date/time string
       */
    }, {
      key: "toICALString",
      value: function toICALString() {
        return design.vcard.value[this.icaltype].toICAL(this.toString());
      }

      /**
       * The string representation of this date/time, in jCard form
       * (including : and - separators).
       * @return {String}
       */
    }, {
      key: "toString",
      value: function toString() {
        var y = this.year,
          m = this.month,
          d = this.day;
        var h = this.hour,
          mm = this.minute,
          s = this.second;
        var hasYear = y !== null,
          hasMonth = m !== null,
          hasDay = d !== null;
        var hasHour = h !== null,
          hasMinute = mm !== null,
          hasSecond = s !== null;
        var datepart = (hasYear ? pad2(y) + (hasMonth || hasDay ? '-' : '') : hasMonth || hasDay ? '--' : '') + (hasMonth ? pad2(m) : '') + (hasDay ? '-' + pad2(d) : '');
        var timepart = (hasHour ? pad2(h) : '-') + (hasHour && hasMinute ? ':' : '') + (hasMinute ? pad2(mm) : '') + (!hasHour && !hasMinute ? '-' : '') + (hasMinute && hasSecond ? ':' : '') + (hasSecond ? pad2(s) : '');
        var zone;
        if (this.zone === Timezone.utcTimezone) {
          zone = 'Z';
        } else if (this.zone instanceof UtcOffset) {
          zone = this.zone.toString();
        } else if (this.zone === Timezone.localTimezone) {
          zone = '';
        } else if (this.zone instanceof Timezone) {
          var offset = UtcOffset.fromSeconds(this.zone.utcOffset(this));
          zone = offset.toString();
        } else {
          zone = '';
        }
        switch (this.icaltype) {
          case "time":
            return timepart + zone;
          case "date-and-or-time":
          case "date-time":
            return datepart + (timepart == '--' ? '' : 'T' + timepart + zone);
          case "date":
            return datepart;
        }
        return null;
      }
    }], [{
      key: "fromDateAndOrTimeString",
      value:
      /**
       * Returns a new ICAL.VCardTime instance from a date and/or time string.
       *
       * @param {String} aValue     The string to create from
       * @param {String} aIcalType  The type for this instance, e.g. date-and-or-time
       * @return {VCardTime}        The date/time instance
       */
      function fromDateAndOrTimeString(aValue, aIcalType) {
        function part(v, s, e) {
          return v ? strictParseInt(v.slice(s, s + e)) : null;
        }
        var parts = aValue.split('T');
        var dt = parts[0],
          tmz = parts[1];
        var splitzone = tmz ? design.vcard.value.time._splitZone(tmz) : [];
        var zone = splitzone[0],
          tm = splitzone[1];
        var dtlen = dt ? dt.length : 0;
        var tmlen = tm ? tm.length : 0;
        var hasDashDate = dt && dt[0] == '-' && dt[1] == '-';
        var hasDashTime = tm && tm[0] == '-';
        var o = {
          year: hasDashDate ? null : part(dt, 0, 4),
          month: hasDashDate && (dtlen == 4 || dtlen == 7) ? part(dt, 2, 2) : dtlen == 7 ? part(dt, 5, 2) : dtlen == 10 ? part(dt, 5, 2) : null,
          day: dtlen == 5 ? part(dt, 3, 2) : dtlen == 7 && hasDashDate ? part(dt, 5, 2) : dtlen == 10 ? part(dt, 8, 2) : null,
          hour: hasDashTime ? null : part(tm, 0, 2),
          minute: hasDashTime && tmlen == 3 ? part(tm, 1, 2) : tmlen > 4 ? hasDashTime ? part(tm, 1, 2) : part(tm, 3, 2) : null,
          second: tmlen == 4 ? part(tm, 2, 2) : tmlen == 6 ? part(tm, 4, 2) : tmlen == 8 ? part(tm, 6, 2) : null
        };
        if (zone == 'Z') {
          zone = Timezone.utcTimezone;
        } else if (zone && zone[3] == ':') {
          zone = UtcOffset.fromString(zone);
        } else {
          zone = null;
        }
        return new VCardTime(o, zone, aIcalType);
      }
    }]);
  }(Time);

  /**
   * This lets typescript resolve our custom types in the
   * generated d.ts files (jsdoc typedefs are converted to typescript types).
   * Ignore prevents the typedefs from being documented more than once.
   *
   * @ignore
   * @typedef {import("./types.js").weekDay} weekDay
   * Imports the 'weekDay' type from the "types.js" module
   */

  /**
   * An iterator for a single recurrence rule. This class usually doesn't have to be instanciated
   * directly, the convenience method {@link ICAL.Recur#iterator} can be used.
   *
   * @memberof ICAL
   */
  var RecurIterator = /*#__PURE__*/function () {
    /**
     * Creates a new ICAL.RecurIterator instance. The options object may contain additional members
     * when resuming iteration from a previous run.
     *
     * @param {Object} options                The iterator options
     * @param {Recur} options.rule            The rule to iterate.
     * @param {Time} options.dtstart          The start date of the event.
     * @param {Boolean=} options.initialized  When true, assume that options are
     *        from a previously constructed iterator. Initialization will not be
     *        repeated.
     */
    function RecurIterator(options) {
      _classCallCheck(this, RecurIterator);
      /**
       * True when iteration is finished.
       * @type {Boolean}
       */
      _defineProperty(this, "completed", false);
      /**
       * The rule that is being iterated
       * @type {Recur}
       */
      _defineProperty(this, "rule", null);
      /**
       * The start date of the event being iterated.
       * @type {Time}
       */
      _defineProperty(this, "dtstart", null);
      /**
       * The last occurrence that was returned from the
       * {@link RecurIterator#next} method.
       * @type {Time}
       */
      _defineProperty(this, "last", null);
      /**
       * The sequence number from the occurrence
       * @type {Number}
       */
      _defineProperty(this, "occurrence_number", 0);
      /**
       * The indices used for the {@link ICAL.RecurIterator#by_data} object.
       * @type {Object}
       * @private
       */
      _defineProperty(this, "by_indices", null);
      /**
       * If true, the iterator has already been initialized
       * @type {Boolean}
       * @private
       */
      _defineProperty(this, "initialized", false);
      /**
       * The initializd by-data.
       * @type {Object}
       * @private
       */
      _defineProperty(this, "by_data", null);
      /**
       * The expanded yeardays
       * @type {Array}
       * @private
       */
      _defineProperty(this, "days", null);
      /**
       * The index in the {@link ICAL.RecurIterator#days} array.
       * @type {Number}
       * @private
       */
      _defineProperty(this, "days_index", 0);
      this.fromData(options);
    }
    return _createClass(RecurIterator, [{
      key: "fromData",
      value:
      /**
       * Initialize the recurrence iterator from the passed data object. This
       * method is usually not called directly, you can initialize the iterator
       * through the constructor.
       *
       * @param {Object} options                The iterator options
       * @param {Recur} options.rule            The rule to iterate.
       * @param {Time} options.dtstart          The start date of the event.
       * @param {Boolean=} options.initialized  When true, assume that options are
       *        from a previously constructed iterator. Initialization will not be
       *        repeated.
       */
      function fromData(options) {
        this.rule = formatClassType(options.rule, Recur);
        if (!this.rule) {
          throw new Error('iterator requires a (ICAL.Recur) rule');
        }
        this.dtstart = formatClassType(options.dtstart, Time);
        if (!this.dtstart) {
          throw new Error('iterator requires a (ICAL.Time) dtstart');
        }
        if (options.by_data) {
          this.by_data = options.by_data;
        } else {
          this.by_data = clone(this.rule.parts, true);
        }
        if (options.occurrence_number) this.occurrence_number = options.occurrence_number;
        this.days = options.days || [];
        if (options.last) {
          this.last = formatClassType(options.last, Time);
        }
        this.by_indices = options.by_indices;
        if (!this.by_indices) {
          this.by_indices = {
            "BYSECOND": 0,
            "BYMINUTE": 0,
            "BYHOUR": 0,
            "BYDAY": 0,
            "BYMONTH": 0,
            "BYWEEKNO": 0,
            "BYMONTHDAY": 0
          };
        }
        this.initialized = options.initialized || false;
        if (!this.initialized) {
          try {
            this.init();
          } catch (e) {
            if (e instanceof InvalidRecurrenceRuleError) {
              // Init may error if there are no possible recurrence instances from
              // the rule, but we don't want to bubble this error up. Instead, we
              // create an empty iterator.
              this.completed = true;
            } else {
              // Propagate other errors to consumers.
              throw e;
            }
          }
        }
      }

      /**
       * Initialize the iterator
       * @private
       */
    }, {
      key: "init",
      value: function init() {
        var _this = this;
        this.initialized = true;
        this.last = this.dtstart.clone();
        var parts = this.by_data;
        if ("BYDAY" in parts) {
          // libical does this earlier when the rule is loaded, but we postpone to
          // now so we can preserve the original order.
          this.sort_byday_rules(parts.BYDAY);
        }

        // If the BYYEARDAY appares, no other date rule part may appear
        if ("BYYEARDAY" in parts) {
          if ("BYMONTH" in parts || "BYWEEKNO" in parts || "BYMONTHDAY" in parts || "BYDAY" in parts) {
            throw new Error("Invalid BYYEARDAY rule");
          }
        }

        // BYWEEKNO and BYMONTHDAY rule parts may not both appear
        if ("BYWEEKNO" in parts && "BYMONTHDAY" in parts) {
          throw new Error("BYWEEKNO does not fit to BYMONTHDAY");
        }

        // For MONTHLY recurrences (FREQ=MONTHLY) neither BYYEARDAY nor
        // BYWEEKNO may appear.
        if (this.rule.freq == "MONTHLY" && ("BYYEARDAY" in parts || "BYWEEKNO" in parts)) {
          throw new Error("For MONTHLY recurrences neither BYYEARDAY nor BYWEEKNO may appear");
        }

        // For WEEKLY recurrences (FREQ=WEEKLY) neither BYMONTHDAY nor
        // BYYEARDAY may appear.
        if (this.rule.freq == "WEEKLY" && ("BYYEARDAY" in parts || "BYMONTHDAY" in parts)) {
          throw new Error("For WEEKLY recurrences neither BYMONTHDAY nor BYYEARDAY may appear");
        }

        // BYYEARDAY may only appear in YEARLY rules
        if (this.rule.freq != "YEARLY" && "BYYEARDAY" in parts) {
          throw new Error("BYYEARDAY may only appear in YEARLY rules");
        }
        this.last.second = this.setup_defaults("BYSECOND", "SECONDLY", this.dtstart.second);
        this.last.minute = this.setup_defaults("BYMINUTE", "MINUTELY", this.dtstart.minute);
        this.last.hour = this.setup_defaults("BYHOUR", "HOURLY", this.dtstart.hour);
        this.last.day = this.setup_defaults("BYMONTHDAY", "DAILY", this.dtstart.day);
        this.last.month = this.setup_defaults("BYMONTH", "MONTHLY", this.dtstart.month);
        if (this.rule.freq == "WEEKLY") {
          if ("BYDAY" in parts) {
            var _this$ruleDayOfWeek = this.ruleDayOfWeek(parts.BYDAY[0], this.rule.wkst),
              _this$ruleDayOfWeek2 = _slicedToArray(_this$ruleDayOfWeek, 2),
              dow = _this$ruleDayOfWeek2[1];
            var wkdy = dow - this.last.dayOfWeek(this.rule.wkst);
            if (this.last.dayOfWeek(this.rule.wkst) < dow && wkdy >= 0 || wkdy < 0) {
              // Initial time is after first day of BYDAY data
              this.last.day += wkdy;
            }
          } else {
            var dayName = Recur.numericDayToIcalDay(this.dtstart.dayOfWeek());
            parts.BYDAY = [dayName];
          }
        }
        if (this.rule.freq == "YEARLY") {
          // Some yearly recurrence rules may be specific enough to not actually
          // occur on a yearly basis, e.g. the 29th day of February or the fifth
          // Monday of a given month. The standard isn't clear on the intended
          // behavior in these cases, but `libical` at least will iterate until it
          // finds a matching year.
          // CAREFUL: Some rules may specify an occurrence that can never happen,
          // e.g. the first Monday of April so long as it falls on the 15th
          // through the 21st. Detecting these is non-trivial, so ensure that we
          // stop iterating at some point.
          var untilYear = this.rule.until ? this.rule.until.year : 20000;
          while (this.last.year <= untilYear) {
            this.expand_year_days(this.last.year);
            if (this.days.length > 0) {
              break;
            }
            this.increment_year(this.rule.interval);
          }
          if (this.days.length == 0) {
            throw new InvalidRecurrenceRuleError();
          }
          this._nextByYearDay();
        }
        if (this.rule.freq == "MONTHLY") {
          if (this.has_by_data("BYDAY")) {
            var tempLast = null;
            var initLast = this.last.clone();
            var daysInMonth = Time.daysInMonth(this.last.month, this.last.year);

            // Check every weekday in BYDAY with relative dow and pos.
            var _iterator = _createForOfIteratorHelper(this.by_data.BYDAY),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var bydow = _step.value;
                this.last = initLast.clone();
                var _this$ruleDayOfWeek3 = this.ruleDayOfWeek(bydow),
                  _this$ruleDayOfWeek4 = _slicedToArray(_this$ruleDayOfWeek3, 2),
                  pos = _this$ruleDayOfWeek4[0],
                  _dow = _this$ruleDayOfWeek4[1];
                var dayOfMonth = this.last.nthWeekDay(_dow, pos);

                // If |pos| >= 6, the byday is invalid for a monthly rule.
                if (pos >= 6 || pos <= -6) {
                  throw new Error("Malformed values in BYDAY part");
                }

                // If a Byday with pos=+/-5 is not in the current month it
                // must be searched in the next months.
                if (dayOfMonth > daysInMonth || dayOfMonth <= 0) {
                  // Skip if we have already found a "last" in this month.
                  if (tempLast && tempLast.month == initLast.month) {
                    continue;
                  }
                  while (dayOfMonth > daysInMonth || dayOfMonth <= 0) {
                    this.increment_month();
                    daysInMonth = Time.daysInMonth(this.last.month, this.last.year);
                    dayOfMonth = this.last.nthWeekDay(_dow, pos);
                  }
                }
                this.last.day = dayOfMonth;
                if (!tempLast || this.last.compare(tempLast) < 0) {
                  tempLast = this.last.clone();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            this.last = tempLast.clone();

            //XXX: This feels like a hack, but we need to initialize
            //     the BYMONTHDAY case correctly and byDayAndMonthDay handles
            //     this case. It accepts a special flag which will avoid incrementing
            //     the initial value without the flag days that match the start time
            //     would be missed.
            if (this.has_by_data('BYMONTHDAY')) {
              this._byDayAndMonthDay(true);
            }
            if (this.last.day > daysInMonth || this.last.day == 0) {
              throw new Error("Malformed values in BYDAY part");
            }
          } else if (this.has_by_data("BYMONTHDAY")) {
            // Change the day value so that normalisation won't change the month.
            this.last.day = 1;

            // Get a sorted list of days in the starting month that match the rule.
            var normalized = this.normalizeByMonthDayRules(this.last.year, this.last.month, this.rule.parts.BYMONTHDAY).filter(function (d) {
              return d >= _this.last.day;
            });
            if (normalized.length) {
              // There's at least one valid day, use it.
              this.last.day = normalized[0];
              this.by_data.BYMONTHDAY = normalized;
            } else {
              // There's no occurrence in this month, find the next valid month.
              // The longest possible sequence of skipped months is February-April-June,
              // so we might need to call next_month up to three times.
              if (!this.next_month() && !this.next_month() && !this.next_month()) {
                throw new Error("No possible occurrences");
              }
            }
          }
        }
      }

      /**
       * Retrieve the next occurrence from the iterator.
       * @return {Time}
       */
    }, {
      key: "next",
      value: function next() {
        var again = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var before = this.last ? this.last.clone() : null;
        if (this.rule.count && this.occurrence_number >= this.rule.count || this.rule.until && this.last.compare(this.rule.until) > 0) {
          this.completed = true;
        }
        if (this.completed) {
          return null;
        }
        if (this.occurrence_number == 0 && this.last.compare(this.dtstart) >= 0) {
          // First of all, give the instance that was initialized
          this.occurrence_number++;
          return this.last;
        }
        var valid;
        do {
          valid = 1;
          switch (this.rule.freq) {
            case "SECONDLY":
              this.next_second();
              break;
            case "MINUTELY":
              this.next_minute();
              break;
            case "HOURLY":
              this.next_hour();
              break;
            case "DAILY":
              this.next_day();
              break;
            case "WEEKLY":
              this.next_week();
              break;
            case "MONTHLY":
              valid = this.next_month();
              break;
            case "YEARLY":
              this.next_year();
              break;
            default:
              return null;
          }
        } while (!this.check_contracting_rules() || this.last.compare(this.dtstart) < 0 || !valid);
        if (this.last.compare(before) == 0) {
          if (again) {
            throw new Error("Same occurrence found twice, protecting you from death by recursion");
          }
          this.next(true);
        }
        if (this.rule.until && this.last.compare(this.rule.until) > 0) {
          this.completed = true;
          return null;
        } else {
          this.occurrence_number++;
          return this.last;
        }
      }
    }, {
      key: "next_second",
      value: function next_second() {
        return this.next_generic("BYSECOND", "SECONDLY", "second", "minute");
      }
    }, {
      key: "increment_second",
      value: function increment_second(inc) {
        return this.increment_generic(inc, "second", 60, "minute");
      }
    }, {
      key: "next_minute",
      value: function next_minute() {
        return this.next_generic("BYMINUTE", "MINUTELY", "minute", "hour", "next_second");
      }
    }, {
      key: "increment_minute",
      value: function increment_minute(inc) {
        return this.increment_generic(inc, "minute", 60, "hour");
      }
    }, {
      key: "next_hour",
      value: function next_hour() {
        return this.next_generic("BYHOUR", "HOURLY", "hour", "monthday", "next_minute");
      }
    }, {
      key: "increment_hour",
      value: function increment_hour(inc) {
        this.increment_generic(inc, "hour", 24, "monthday");
      }
    }, {
      key: "next_day",
      value: function next_day() {
        var this_freq = this.rule.freq == "DAILY";
        if (this.next_hour() == 0) {
          return 0;
        }
        if (this_freq) {
          this.increment_monthday(this.rule.interval);
        } else {
          this.increment_monthday(1);
        }
        return 0;
      }
    }, {
      key: "next_week",
      value: function next_week() {
        var end_of_data = 0;
        if (this.next_weekday_by_week() == 0) {
          return end_of_data;
        }
        if (this.has_by_data("BYWEEKNO")) {
          this.by_indices.BYWEEKNO++;
          if (this.by_indices.BYWEEKNO == this.by_data.BYWEEKNO.length) {
            this.by_indices.BYWEEKNO = 0;
            end_of_data = 1;
          }

          // HACK should be first month of the year
          this.last.month = 1;
          this.last.day = 1;
          var week_no = this.by_data.BYWEEKNO[this.by_indices.BYWEEKNO];
          this.last.day += 7 * week_no;
          if (end_of_data) {
            this.increment_year(1);
          }
        } else {
          // Jump to the next week
          this.increment_monthday(7 * this.rule.interval);
        }
        return end_of_data;
      }

      /**
       * Normalize each by day rule for a given year/month.
       * Takes into account ordering and negative rules
       *
       * @private
       * @param {Number} year         Current year.
       * @param {Number} month        Current month.
       * @param {Array}  rules        Array of rules.
       *
       * @return {Array} sorted and normalized rules.
       *                 Negative rules will be expanded to their
       *                 correct positive values for easier processing.
       */
    }, {
      key: "normalizeByMonthDayRules",
      value: function normalizeByMonthDayRules(year, month, rules) {
        var daysInMonth = Time.daysInMonth(month, year);

        // XXX: This is probably bad for performance to allocate
        //      a new array for each month we scan, if possible
        //      we should try to optimize this...
        var newRules = [];
        var ruleIdx = 0;
        var len = rules.length;
        var rule;
        for (; ruleIdx < len; ruleIdx++) {
          rule = parseInt(rules[ruleIdx], 10);
          if (isNaN(rule)) {
            throw new Error('Invalid BYMONTHDAY value');
          }

          // if this rule falls outside of given
          // month discard it.
          if (Math.abs(rule) > daysInMonth) {
            continue;
          }

          // negative case
          if (rule < 0) {
            // we add (not subtract it is a negative number)
            // one from the rule because 1 === last day of month
            rule = daysInMonth + (rule + 1);
          } else if (rule === 0) {
            // skip zero: it is invalid.
            continue;
          }

          // only add unique items...
          if (newRules.indexOf(rule) === -1) {
            newRules.push(rule);
          }
        }

        // unique and sort
        return newRules.sort(function (a, b) {
          return a - b;
        });
      }

      /**
       * NOTES:
       * We are given a list of dates in the month (BYMONTHDAY) (23, etc..)
       * Also we are given a list of days (BYDAY) (MO, 2SU, etc..) when
       * both conditions match a given date (this.last.day) iteration stops.
       *
       * @private
       * @param {Boolean=} isInit     When given true will not increment the
       *                                current day (this.last).
       */
    }, {
      key: "_byDayAndMonthDay",
      value: function _byDayAndMonthDay(isInit) {
        var byMonthDay; // setup in initMonth
        var byDay = this.by_data.BYDAY;
        var date;
        var dateIdx = 0;
        var dateLen; // setup in initMonth
        var dayLen = byDay.length;

        // we are not valid by default
        var dataIsValid = 0;
        var daysInMonth;
        var self = this;
        // we need a copy of this, because a DateTime gets normalized
        // automatically if the day is out of range. At some points we
        // set the last day to 0 to start counting.
        var lastDay = this.last.day;
        function initMonth() {
          daysInMonth = Time.daysInMonth(self.last.month, self.last.year);
          byMonthDay = self.normalizeByMonthDayRules(self.last.year, self.last.month, self.by_data.BYMONTHDAY);
          dateLen = byMonthDay.length;

          // For the case of more than one occurrence in one month
          // we have to be sure to start searching after the last
          // found date or at the last BYMONTHDAY, unless we are
          // initializing the iterator because in this case we have
          // to consider the last found date too.
          while (byMonthDay[dateIdx] <= lastDay && !(isInit && byMonthDay[dateIdx] == lastDay) && dateIdx < dateLen - 1) {
            dateIdx++;
          }
        }
        function nextMonth() {
          // since the day is incremented at the start
          // of the loop below, we need to start at 0
          lastDay = 0;
          self.increment_month();
          dateIdx = 0;
          initMonth();
        }
        initMonth();

        // should come after initMonth
        if (isInit) {
          lastDay -= 1;
        }

        // Use a counter to avoid an infinite loop with malformed rules.
        // Stop checking after 4 years so we consider also a leap year.
        var monthsCounter = 48;
        while (!dataIsValid && monthsCounter) {
          monthsCounter--;
          // increment the current date. This is really
          // important otherwise we may fall into the infinite
          // loop trap. The initial date takes care of the case
          // where the current date is the date we are looking
          // for.
          date = lastDay + 1;
          if (date > daysInMonth) {
            nextMonth();
            continue;
          }

          // find next date
          var next = byMonthDay[dateIdx++];

          // this logic is dependent on the BYMONTHDAYS
          // being in order (which is done by #normalizeByMonthDayRules)
          if (next >= date) {
            // if the next month day is in the future jump to it.
            lastDay = next;
          } else {
            // in this case the 'next' monthday has past
            // we must move to the month.
            nextMonth();
            continue;
          }

          // Now we can loop through the day rules to see
          // if one matches the current month date.
          for (var dayIdx = 0; dayIdx < dayLen; dayIdx++) {
            var parts = this.ruleDayOfWeek(byDay[dayIdx]);
            var pos = parts[0];
            var dow = parts[1];
            this.last.day = lastDay;
            if (this.last.isNthWeekDay(dow, pos)) {
              // when we find the valid one we can mark
              // the conditions as met and break the loop.
              // (Because we have this condition above
              //  it will also break the parent loop).
              dataIsValid = 1;
              break;
            }
          }

          // It is completely possible that the combination
          // cannot be matched in the current month.
          // When we reach the end of possible combinations
          // in the current month we iterate to the next one.
          // since dateIdx is incremented right after getting
          // "next", we don't need dateLen -1 here.
          if (!dataIsValid && dateIdx === dateLen) {
            nextMonth();
            continue;
          }
        }
        if (monthsCounter <= 0) {
          // Checked 4 years without finding a Byday that matches
          // a Bymonthday. Maybe the rule is not correct.
          throw new Error("Malformed values in BYDAY combined with BYMONTHDAY parts");
        }
        return dataIsValid;
      }
    }, {
      key: "next_month",
      value: function next_month() {
        var data_valid = 1;
        if (this.next_hour() == 0) {
          return data_valid;
        }
        if (this.has_by_data("BYDAY") && this.has_by_data("BYMONTHDAY")) {
          data_valid = this._byDayAndMonthDay();
        } else if (this.has_by_data("BYDAY")) {
          var daysInMonth = Time.daysInMonth(this.last.month, this.last.year);
          var setpos = 0;
          var setpos_total = 0;
          if (this.has_by_data("BYSETPOS")) {
            var last_day = this.last.day;
            for (var _day = 1; _day <= daysInMonth; _day++) {
              this.last.day = _day;
              if (this.is_day_in_byday(this.last)) {
                setpos_total++;
                if (_day <= last_day) {
                  setpos++;
                }
              }
            }
            this.last.day = last_day;
          }
          data_valid = 0;
          var day;
          for (day = this.last.day + 1; day <= daysInMonth; day++) {
            this.last.day = day;
            if (this.is_day_in_byday(this.last)) {
              if (!this.has_by_data("BYSETPOS") || this.check_set_position(++setpos) || this.check_set_position(setpos - setpos_total - 1)) {
                data_valid = 1;
                break;
              }
            }
          }
          if (day > daysInMonth) {
            this.last.day = 1;
            this.increment_month();
            if (this.is_day_in_byday(this.last)) {
              if (!this.has_by_data("BYSETPOS") || this.check_set_position(1)) {
                data_valid = 1;
              }
            } else {
              data_valid = 0;
            }
          }
        } else if (this.has_by_data("BYMONTHDAY")) {
          this.by_indices.BYMONTHDAY++;
          if (this.by_indices.BYMONTHDAY >= this.by_data.BYMONTHDAY.length) {
            this.by_indices.BYMONTHDAY = 0;
            this.increment_month();
            if (this.by_indices.BYMONTHDAY >= this.by_data.BYMONTHDAY.length) {
              return 0;
            }
          }
          var _daysInMonth = Time.daysInMonth(this.last.month, this.last.year);
          var _day2 = this.by_data.BYMONTHDAY[this.by_indices.BYMONTHDAY];
          if (_day2 < 0) {
            _day2 = _daysInMonth + _day2 + 1;
          }
          if (_day2 > _daysInMonth) {
            this.last.day = 1;
            data_valid = this.is_day_in_byday(this.last);
          } else {
            this.last.day = _day2;
          }
        } else {
          this.increment_month();
          var _daysInMonth2 = Time.daysInMonth(this.last.month, this.last.year);
          if (this.by_data.BYMONTHDAY[0] > _daysInMonth2) {
            data_valid = 0;
          } else {
            this.last.day = this.by_data.BYMONTHDAY[0];
          }
        }
        return data_valid;
      }
    }, {
      key: "next_weekday_by_week",
      value: function next_weekday_by_week() {
        var end_of_data = 0;
        if (this.next_hour() == 0) {
          return end_of_data;
        }
        if (!this.has_by_data("BYDAY")) {
          return 1;
        }
        for (;;) {
          var tt = new Time();
          this.by_indices.BYDAY++;
          if (this.by_indices.BYDAY == Object.keys(this.by_data.BYDAY).length) {
            this.by_indices.BYDAY = 0;
            end_of_data = 1;
          }
          var coded_day = this.by_data.BYDAY[this.by_indices.BYDAY];
          var parts = this.ruleDayOfWeek(coded_day);
          var dow = parts[1];
          dow -= this.rule.wkst;
          if (dow < 0) {
            dow += 7;
          }
          tt.year = this.last.year;
          tt.month = this.last.month;
          tt.day = this.last.day;
          var startOfWeek = tt.startDoyWeek(this.rule.wkst);
          if (dow + startOfWeek < 1) {
            // The selected date is in the previous year
            if (!end_of_data) {
              continue;
            }
          }
          var next = Time.fromDayOfYear(startOfWeek + dow, this.last.year);

          /**
           * The normalization horrors below are due to
           * the fact that when the year/month/day changes
           * it can effect the other operations that come after.
           */
          this.last.year = next.year;
          this.last.month = next.month;
          this.last.day = next.day;
          return end_of_data;
        }
      }
    }, {
      key: "next_year",
      value: function next_year() {
        if (this.next_hour() == 0) {
          return 0;
        }
        if (++this.days_index == this.days.length) {
          this.days_index = 0;
          do {
            this.increment_year(this.rule.interval);
            if (this.has_by_data("BYMONTHDAY")) {
              this.by_data.BYMONTHDAY = this.normalizeByMonthDayRules(this.last.year, this.last.month, this.rule.parts.BYMONTHDAY);
            }
            this.expand_year_days(this.last.year);
          } while (this.days.length == 0);
        }
        this._nextByYearDay();
        return 1;
      }
    }, {
      key: "_nextByYearDay",
      value: function _nextByYearDay() {
        var doy = this.days[this.days_index];
        var year = this.last.year;
        if (doy < 1) {
          // Time.fromDayOfYear(doy, year) indexes relative to the
          // start of the given year. That is different from the
          // semantics of BYYEARDAY where negative indexes are an
          // offset from the end of the given year.
          doy += 1;
          year += 1;
        }
        var next = Time.fromDayOfYear(doy, year);
        this.last.day = next.day;
        this.last.month = next.month;
      }

      /**
       * @param dow (eg: '1TU', '-1MO')
       * @param {weekDay=} aWeekStart The week start weekday
       * @return [pos, numericDow] (eg: [1, 3]) numericDow is relative to aWeekStart
       */
    }, {
      key: "ruleDayOfWeek",
      value: function ruleDayOfWeek(dow, aWeekStart) {
        var matches = dow.match(/([+-]?[0-9])?(MO|TU|WE|TH|FR|SA|SU)/);
        if (matches) {
          var pos = parseInt(matches[1] || 0, 10);
          dow = Recur.icalDayToNumericDay(matches[2], aWeekStart);
          return [pos, dow];
        } else {
          return [0, 0];
        }
      }
    }, {
      key: "next_generic",
      value: function next_generic(aRuleType, aInterval, aDateAttr, aFollowingAttr, aPreviousIncr) {
        var has_by_rule = aRuleType in this.by_data;
        var this_freq = this.rule.freq == aInterval;
        var end_of_data = 0;
        if (aPreviousIncr && this[aPreviousIncr]() == 0) {
          return end_of_data;
        }
        if (has_by_rule) {
          this.by_indices[aRuleType]++;
          var dta = this.by_data[aRuleType];
          if (this.by_indices[aRuleType] == dta.length) {
            this.by_indices[aRuleType] = 0;
            end_of_data = 1;
          }
          this.last[aDateAttr] = dta[this.by_indices[aRuleType]];
        } else if (this_freq) {
          this["increment_" + aDateAttr](this.rule.interval);
        }
        if (has_by_rule && end_of_data && this_freq) {
          this["increment_" + aFollowingAttr](1);
        }
        return end_of_data;
      }
    }, {
      key: "increment_monthday",
      value: function increment_monthday(inc) {
        for (var i = 0; i < inc; i++) {
          var daysInMonth = Time.daysInMonth(this.last.month, this.last.year);
          this.last.day++;
          if (this.last.day > daysInMonth) {
            this.last.day -= daysInMonth;
            this.increment_month();
          }
        }
      }
    }, {
      key: "increment_month",
      value: function increment_month() {
        this.last.day = 1;
        if (this.has_by_data("BYMONTH")) {
          this.by_indices.BYMONTH++;
          if (this.by_indices.BYMONTH == this.by_data.BYMONTH.length) {
            this.by_indices.BYMONTH = 0;
            this.increment_year(1);
          }
          this.last.month = this.by_data.BYMONTH[this.by_indices.BYMONTH];
        } else {
          if (this.rule.freq == "MONTHLY") {
            this.last.month += this.rule.interval;
          } else {
            this.last.month++;
          }
          this.last.month--;
          var years = trunc(this.last.month / 12);
          this.last.month %= 12;
          this.last.month++;
          if (years != 0) {
            this.increment_year(years);
          }
        }
        if (this.has_by_data("BYMONTHDAY")) {
          this.by_data.BYMONTHDAY = this.normalizeByMonthDayRules(this.last.year, this.last.month, this.rule.parts.BYMONTHDAY);
        }
      }
    }, {
      key: "increment_year",
      value: function increment_year(inc) {
        // Don't jump into the next month if this.last is Feb 29.
        this.last.day = 1;
        this.last.year += inc;
      }
    }, {
      key: "increment_generic",
      value: function increment_generic(inc, aDateAttr, aFactor, aNextIncrement) {
        this.last[aDateAttr] += inc;
        var nextunit = trunc(this.last[aDateAttr] / aFactor);
        this.last[aDateAttr] %= aFactor;
        if (nextunit != 0) {
          this["increment_" + aNextIncrement](nextunit);
        }
      }
    }, {
      key: "has_by_data",
      value: function has_by_data(aRuleType) {
        return aRuleType in this.rule.parts;
      }
    }, {
      key: "expand_year_days",
      value: function expand_year_days(aYear) {
        var t = new Time();
        this.days = [];

        // We need our own copy with a few keys set
        var parts = {};
        var rules = ["BYDAY", "BYWEEKNO", "BYMONTHDAY", "BYMONTH", "BYYEARDAY"];
        for (var _i = 0, _rules = rules; _i < _rules.length; _i++) {
          var part = _rules[_i];
          if (part in this.rule.parts) {
            parts[part] = this.rule.parts[part];
          }
        }
        if ("BYMONTH" in parts && "BYWEEKNO" in parts) {
          var valid = 1;
          var validWeeks = {};
          t.year = aYear;
          t.isDate = true;
          for (var monthIdx = 0; monthIdx < this.by_data.BYMONTH.length; monthIdx++) {
            var month = this.by_data.BYMONTH[monthIdx];
            t.month = month;
            t.day = 1;
            var first_week = t.weekNumber(this.rule.wkst);
            t.day = Time.daysInMonth(month, aYear);
            var last_week = t.weekNumber(this.rule.wkst);
            for (monthIdx = first_week; monthIdx < last_week; monthIdx++) {
              validWeeks[monthIdx] = 1;
            }
          }
          for (var weekIdx = 0; weekIdx < this.by_data.BYWEEKNO.length && valid; weekIdx++) {
            var weekno = this.by_data.BYWEEKNO[weekIdx];
            if (weekno < 52) {
              valid &= validWeeks[weekIdx];
            } else {
              valid = 0;
            }
          }
          if (valid) {
            delete parts.BYMONTH;
          } else {
            delete parts.BYWEEKNO;
          }
        }
        var partCount = Object.keys(parts).length;
        if (partCount == 0) {
          var t1 = this.dtstart.clone();
          t1.year = this.last.year;
          this.days.push(t1.dayOfYear());
        } else if (partCount == 1 && "BYMONTH" in parts) {
          var _iterator2 = _createForOfIteratorHelper(this.by_data.BYMONTH),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _month = _step2.value;
              var t2 = this.dtstart.clone();
              t2.year = aYear;
              t2.month = _month;
              t2.isDate = true;
              this.days.push(t2.dayOfYear());
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else if (partCount == 1 && "BYMONTHDAY" in parts) {
          var _iterator3 = _createForOfIteratorHelper(this.by_data.BYMONTHDAY),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var monthday = _step3.value;
              var t3 = this.dtstart.clone();
              if (monthday < 0) {
                var daysInMonth = Time.daysInMonth(t3.month, aYear);
                monthday = monthday + daysInMonth + 1;
              }
              t3.day = monthday;
              t3.year = aYear;
              t3.isDate = true;
              this.days.push(t3.dayOfYear());
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else if (partCount == 2 && "BYMONTHDAY" in parts && "BYMONTH" in parts) {
          var _iterator4 = _createForOfIteratorHelper(this.by_data.BYMONTH),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _month2 = _step4.value;
              var _daysInMonth3 = Time.daysInMonth(_month2, aYear);
              var _iterator5 = _createForOfIteratorHelper(this.by_data.BYMONTHDAY),
                _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _monthday = _step5.value;
                  if (_monthday < 0) {
                    _monthday = _monthday + _daysInMonth3 + 1;
                  }
                  t.day = _monthday;
                  t.month = _month2;
                  t.year = aYear;
                  t.isDate = true;
                  this.days.push(t.dayOfYear());
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        } else if (partCount == 1 && "BYWEEKNO" in parts) ; else if (partCount == 2 && "BYWEEKNO" in parts && "BYMONTHDAY" in parts) ; else if (partCount == 1 && "BYDAY" in parts) {
          this.days = this.days.concat(this.expand_by_day(aYear));
        } else if (partCount == 2 && "BYDAY" in parts && "BYMONTH" in parts) {
          var _iterator6 = _createForOfIteratorHelper(this.by_data.BYMONTH),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _month3 = _step6.value;
              var _daysInMonth4 = Time.daysInMonth(_month3, aYear);
              t.year = aYear;
              t.month = _month3;
              t.day = 1;
              t.isDate = true;
              var first_dow = t.dayOfWeek();
              var doy_offset = t.dayOfYear() - 1;
              t.day = _daysInMonth4;
              var last_dow = t.dayOfWeek();
              if (this.has_by_data("BYSETPOS")) {
                var by_month_day = [];
                for (var day = 1; day <= _daysInMonth4; day++) {
                  t.day = day;
                  if (this.is_day_in_byday(t)) {
                    by_month_day.push(day);
                  }
                }
                for (var spIndex = 0; spIndex < by_month_day.length; spIndex++) {
                  if (this.check_set_position(spIndex + 1) || this.check_set_position(spIndex - by_month_day.length)) {
                    this.days.push(doy_offset + by_month_day[spIndex]);
                  }
                }
              } else {
                var _iterator7 = _createForOfIteratorHelper(this.by_data.BYDAY),
                  _step7;
                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var coded_day = _step7.value;
                    var bydayParts = this.ruleDayOfWeek(coded_day);
                    var pos = bydayParts[0];
                    var dow = bydayParts[1];
                    var month_day = void 0;
                    var first_matching_day = (dow + 7 - first_dow) % 7 + 1;
                    var last_matching_day = _daysInMonth4 - (last_dow + 7 - dow) % 7;
                    if (pos == 0) {
                      for (var _day3 = first_matching_day; _day3 <= _daysInMonth4; _day3 += 7) {
                        this.days.push(doy_offset + _day3);
                      }
                    } else if (pos > 0) {
                      month_day = first_matching_day + (pos - 1) * 7;
                      if (month_day <= _daysInMonth4) {
                        this.days.push(doy_offset + month_day);
                      }
                    } else {
                      month_day = last_matching_day + (pos + 1) * 7;
                      if (month_day > 0) {
                        this.days.push(doy_offset + month_day);
                      }
                    }
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }
            }
            // Return dates in order of occurrence (1,2,3,...) instead
            // of by groups of weekdays (1,8,15,...,2,9,16,...).
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          this.days.sort(function (a, b) {
            return a - b;
          }); // Comparator function allows to sort numbers.
        } else if (partCount == 2 && "BYDAY" in parts && "BYMONTHDAY" in parts) {
          var expandedDays = this.expand_by_day(aYear);
          var _iterator8 = _createForOfIteratorHelper(expandedDays),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _day4 = _step8.value;
              var tt = Time.fromDayOfYear(_day4, aYear);
              if (this.by_data.BYMONTHDAY.indexOf(tt.day) >= 0) {
                this.days.push(_day4);
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        } else if (partCount == 3 && "BYDAY" in parts && "BYMONTHDAY" in parts && "BYMONTH" in parts) {
          var _expandedDays = this.expand_by_day(aYear);
          var _iterator9 = _createForOfIteratorHelper(_expandedDays),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _day5 = _step9.value;
              var _tt = Time.fromDayOfYear(_day5, aYear);
              if (this.by_data.BYMONTH.indexOf(_tt.month) >= 0 && this.by_data.BYMONTHDAY.indexOf(_tt.day) >= 0) {
                this.days.push(_day5);
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        } else if (partCount == 2 && "BYDAY" in parts && "BYWEEKNO" in parts) {
          var _expandedDays2 = this.expand_by_day(aYear);
          var _iterator10 = _createForOfIteratorHelper(_expandedDays2),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _day6 = _step10.value;
              var _tt2 = Time.fromDayOfYear(_day6, aYear);
              var _weekno = _tt2.weekNumber(this.rule.wkst);
              if (this.by_data.BYWEEKNO.indexOf(_weekno)) {
                this.days.push(_day6);
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        } else if (partCount == 3 && "BYDAY" in parts && "BYWEEKNO" in parts && "BYMONTHDAY" in parts) ; else if (partCount == 1 && "BYYEARDAY" in parts) {
          this.days = this.days.concat(this.by_data.BYYEARDAY);
        } else {
          this.days = [];
        }
        var daysInYear = Time.isLeapYear(aYear) ? 366 : 365;
        this.days.sort(function (a, b) {
          if (a < 0) a += daysInYear + 1;
          if (b < 0) b += daysInYear + 1;
          return a - b;
        });
        return 0;
      }
    }, {
      key: "expand_by_day",
      value: function expand_by_day(aYear) {
        var days_list = [];
        var tmp = this.last.clone();
        tmp.year = aYear;
        tmp.month = 1;
        tmp.day = 1;
        tmp.isDate = true;
        var start_dow = tmp.dayOfWeek();
        tmp.month = 12;
        tmp.day = 31;
        tmp.isDate = true;
        var end_dow = tmp.dayOfWeek();
        var end_year_day = tmp.dayOfYear();
        var _iterator11 = _createForOfIteratorHelper(this.by_data.BYDAY),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var day = _step11.value;
            var parts = this.ruleDayOfWeek(day);
            var pos = parts[0];
            var dow = parts[1];
            if (pos == 0) {
              var tmp_start_doy = (dow + 7 - start_dow) % 7 + 1;
              for (var doy = tmp_start_doy; doy <= end_year_day; doy += 7) {
                days_list.push(doy);
              }
            } else if (pos > 0) {
              var first = void 0;
              if (dow >= start_dow) {
                first = dow - start_dow + 1;
              } else {
                first = dow - start_dow + 8;
              }
              days_list.push(first + (pos - 1) * 7);
            } else {
              var last = void 0;
              pos = -pos;
              if (dow <= end_dow) {
                last = end_year_day - end_dow + dow;
              } else {
                last = end_year_day - end_dow + dow - 7;
              }
              days_list.push(last - (pos - 1) * 7);
            }
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        return days_list;
      }
    }, {
      key: "is_day_in_byday",
      value: function is_day_in_byday(tt) {
        if (this.by_data.BYDAY) {
          var _iterator12 = _createForOfIteratorHelper(this.by_data.BYDAY),
            _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var day = _step12.value;
              var parts = this.ruleDayOfWeek(day);
              var pos = parts[0];
              var dow = parts[1];
              var this_dow = tt.dayOfWeek();
              if (pos == 0 && dow == this_dow || tt.nthWeekDay(dow, pos) == tt.day) {
                return 1;
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }
        return 0;
      }

      /**
       * Checks if given value is in BYSETPOS.
       *
       * @private
       * @param {Numeric} aPos position to check for.
       * @return {Boolean} false unless BYSETPOS rules exist
       *                   and the given value is present in rules.
       */
    }, {
      key: "check_set_position",
      value: function check_set_position(aPos) {
        if (this.has_by_data('BYSETPOS')) {
          var idx = this.by_data.BYSETPOS.indexOf(aPos);
          // negative numbers are not false-y
          return idx !== -1;
        }
        return false;
      }
    }, {
      key: "sort_byday_rules",
      value: function sort_byday_rules(aRules) {
        for (var i = 0; i < aRules.length; i++) {
          for (var j = 0; j < i; j++) {
            var one = this.ruleDayOfWeek(aRules[j], this.rule.wkst)[1];
            var two = this.ruleDayOfWeek(aRules[i], this.rule.wkst)[1];
            if (one > two) {
              var tmp = aRules[i];
              aRules[i] = aRules[j];
              aRules[j] = tmp;
            }
          }
        }
      }
    }, {
      key: "check_contract_restriction",
      value: function check_contract_restriction(aRuleType, v) {
        var indexMapValue = RecurIterator._indexMap[aRuleType];
        var ruleMapValue = RecurIterator._expandMap[this.rule.freq][indexMapValue];
        var pass = false;
        if (aRuleType in this.by_data && ruleMapValue == RecurIterator.CONTRACT) {
          var ruleType = this.by_data[aRuleType];
          var _iterator13 = _createForOfIteratorHelper(ruleType),
            _step13;
          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var bydata = _step13.value;
              if (bydata == v) {
                pass = true;
                break;
              }
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        } else {
          // Not a contracting byrule or has no data, test passes
          pass = true;
        }
        return pass;
      }
    }, {
      key: "check_contracting_rules",
      value: function check_contracting_rules() {
        var dow = this.last.dayOfWeek();
        var weekNo = this.last.weekNumber(this.rule.wkst);
        var doy = this.last.dayOfYear();
        return this.check_contract_restriction("BYSECOND", this.last.second) && this.check_contract_restriction("BYMINUTE", this.last.minute) && this.check_contract_restriction("BYHOUR", this.last.hour) && this.check_contract_restriction("BYDAY", Recur.numericDayToIcalDay(dow)) && this.check_contract_restriction("BYWEEKNO", weekNo) && this.check_contract_restriction("BYMONTHDAY", this.last.day) && this.check_contract_restriction("BYMONTH", this.last.month) && this.check_contract_restriction("BYYEARDAY", doy);
      }
    }, {
      key: "setup_defaults",
      value: function setup_defaults(aRuleType, req, deftime) {
        var indexMapValue = RecurIterator._indexMap[aRuleType];
        var ruleMapValue = RecurIterator._expandMap[this.rule.freq][indexMapValue];
        if (ruleMapValue != RecurIterator.CONTRACT) {
          if (!(aRuleType in this.by_data)) {
            this.by_data[aRuleType] = [deftime];
          }
          if (this.rule.freq != req) {
            return this.by_data[aRuleType][0];
          }
        }
        return deftime;
      }

      /**
       * Convert iterator into a serialize-able object.  Will preserve current
       * iteration sequence to ensure the seamless continuation of the recurrence
       * rule.
       * @return {Object}
       */
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = Object.create(null);
        result.initialized = this.initialized;
        result.rule = this.rule.toJSON();
        result.dtstart = this.dtstart.toJSON();
        result.by_data = this.by_data;
        result.days = this.days;
        result.last = this.last.toJSON();
        result.by_indices = this.by_indices;
        result.occurrence_number = this.occurrence_number;
        return result;
      }
    }]);
  }();
  /**
   * An error indicating that a recurrence rule is invalid and produces no
   * occurrences.
   *
   * @extends {Error}
   * @class
   */
  _defineProperty(RecurIterator, "_indexMap", {
    "BYSECOND": 0,
    "BYMINUTE": 1,
    "BYHOUR": 2,
    "BYDAY": 3,
    "BYMONTHDAY": 4,
    "BYYEARDAY": 5,
    "BYWEEKNO": 6,
    "BYMONTH": 7,
    "BYSETPOS": 8
  });
  _defineProperty(RecurIterator, "_expandMap", {
    "SECONDLY": [1, 1, 1, 1, 1, 1, 1, 1],
    "MINUTELY": [2, 1, 1, 1, 1, 1, 1, 1],
    "HOURLY": [2, 2, 1, 1, 1, 1, 1, 1],
    "DAILY": [2, 2, 2, 1, 1, 1, 1, 1],
    "WEEKLY": [2, 2, 2, 2, 3, 3, 1, 1],
    "MONTHLY": [2, 2, 2, 2, 2, 3, 3, 1],
    "YEARLY": [2, 2, 2, 2, 2, 2, 2, 2]
  });
  _defineProperty(RecurIterator, "UNKNOWN", 0);
  _defineProperty(RecurIterator, "CONTRACT", 1);
  _defineProperty(RecurIterator, "EXPAND", 2);
  _defineProperty(RecurIterator, "ILLEGAL", 3);
  var InvalidRecurrenceRuleError = /*#__PURE__*/function (_Error) {
    function InvalidRecurrenceRuleError() {
      _classCallCheck(this, InvalidRecurrenceRuleError);
      return _callSuper(this, InvalidRecurrenceRuleError, ["Recurrence rule has no valid occurrences"]);
    }
    _inherits(InvalidRecurrenceRuleError, _Error);
    return _createClass(InvalidRecurrenceRuleError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  /**
   * This lets typescript resolve our custom types in the
   * generated d.ts files (jsdoc typedefs are converted to typescript types).
   * Ignore prevents the typedefs from being documented more than once.
   *
   * @ignore
   * @typedef {import("./types.js").weekDay} weekDay
   * Imports the 'weekDay' type from the "types.js" module
   * @typedef {import("./types.js").frequencyValues} frequencyValues
   * Imports the 'frequencyValues' type from the "types.js" module
   */

  var VALID_DAY_NAMES = /^(SU|MO|TU|WE|TH|FR|SA)$/;
  var VALID_BYDAY_PART = /^([+-])?(5[0-3]|[1-4][0-9]|[1-9])?(SU|MO|TU|WE|TH|FR|SA)$/;
  var DOW_MAP = {
    SU: Time.SUNDAY,
    MO: Time.MONDAY,
    TU: Time.TUESDAY,
    WE: Time.WEDNESDAY,
    TH: Time.THURSDAY,
    FR: Time.FRIDAY,
    SA: Time.SATURDAY
  };
  var REVERSE_DOW_MAP = Object.fromEntries(Object.entries(DOW_MAP).map(function (entry) {
    return entry.reverse();
  }));
  var ALLOWED_FREQ = ['SECONDLY', 'MINUTELY', 'HOURLY', 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'];

  /**
   * This class represents the "recur" value type, used for example by RRULE. It provides methods to
   * calculate occurrences among others.
   *
   * @memberof ICAL
   */
  var Recur = /*#__PURE__*/function () {
    /**
     * Create a new instance of the Recur class.
     *
     * @param {Object} data                               An object with members of the recurrence
     * @param {frequencyValues=} data.freq                The frequency value
     * @param {Number=} data.interval                     The INTERVAL value
     * @param {weekDay=} data.wkst                        The week start value
     * @param {Time=} data.until                          The end of the recurrence set
     * @param {Number=} data.count                        The number of occurrences
     * @param {Array.<Number>=} data.bysecond             The seconds for the BYSECOND part
     * @param {Array.<Number>=} data.byminute             The minutes for the BYMINUTE part
     * @param {Array.<Number>=} data.byhour               The hours for the BYHOUR part
     * @param {Array.<String>=} data.byday                The BYDAY values
     * @param {Array.<Number>=} data.bymonthday           The days for the BYMONTHDAY part
     * @param {Array.<Number>=} data.byyearday            The days for the BYYEARDAY part
     * @param {Array.<Number>=} data.byweekno             The weeks for the BYWEEKNO part
     * @param {Array.<Number>=} data.bymonth              The month for the BYMONTH part
     * @param {Array.<Number>=} data.bysetpos             The positionals for the BYSETPOS part
     */
    function Recur(data) {
      _classCallCheck(this, Recur);
      /**
       * An object holding the BY-parts of the recurrence rule
       * @memberof ICAL.Recur
       * @typedef {Object} byParts
       * @property {Array.<Number>=} BYSECOND            The seconds for the BYSECOND part
       * @property {Array.<Number>=} BYMINUTE            The minutes for the BYMINUTE part
       * @property {Array.<Number>=} BYHOUR              The hours for the BYHOUR part
       * @property {Array.<String>=} BYDAY               The BYDAY values
       * @property {Array.<Number>=} BYMONTHDAY          The days for the BYMONTHDAY part
       * @property {Array.<Number>=} BYYEARDAY           The days for the BYYEARDAY part
       * @property {Array.<Number>=} BYWEEKNO            The weeks for the BYWEEKNO part
       * @property {Array.<Number>=} BYMONTH             The month for the BYMONTH part
       * @property {Array.<Number>=} BYSETPOS            The positionals for the BYSETPOS part
       */
      /**
       * An object holding the BY-parts of the recurrence rule
       * @type {byParts}
       */
      _defineProperty(this, "parts", null);
      /**
       * The interval value for the recurrence rule.
       * @type {Number}
       */
      _defineProperty(this, "interval", 1);
      /**
       * The week start day
       *
       * @type {weekDay}
       * @default ICAL.Time.MONDAY
       */
      _defineProperty(this, "wkst", Time.MONDAY);
      /**
       * The end of the recurrence
       * @type {?Time}
       */
      _defineProperty(this, "until", null);
      /**
       * The maximum number of occurrences
       * @type {?Number}
       */
      _defineProperty(this, "count", null);
      /**
       * The frequency value.
       * @type {frequencyValues}
       */
      _defineProperty(this, "freq", null);
      /**
       * The class identifier.
       * @constant
       * @type {String}
       * @default "icalrecur"
       */
      _defineProperty(this, "icalclass", "icalrecur");
      /**
       * The type name, to be used in the jCal object.
       * @constant
       * @type {String}
       * @default "recur"
       */
      _defineProperty(this, "icaltype", "recur");
      this.wrappedJSObject = this;
      this.parts = {};
      if (data && _typeof(data) === 'object') {
        this.fromData(data);
      }
    }
    return _createClass(Recur, [{
      key: "iterator",
      value:
      /**
       * Create a new iterator for this recurrence rule. The passed start date
       * must be the start date of the event, not the start of the range to
       * search in.
       *
       * @example
       * let recur = comp.getFirstPropertyValue('rrule');
       * let dtstart = comp.getFirstPropertyValue('dtstart');
       * let iter = recur.iterator(dtstart);
       * for (let next = iter.next(); next; next = iter.next()) {
       *   if (next.compare(rangeStart) < 0) {
       *     continue;
       *   }
       *   console.log(next.toString());
       * }
       *
       * @param {Time} aStart        The item's start date
       * @return {RecurIterator}     The recurrence iterator
       */
      function iterator(aStart) {
        return new RecurIterator({
          rule: this,
          dtstart: aStart
        });
      }

      /**
       * Returns a clone of the recurrence object.
       *
       * @return {Recur}      The cloned object
       */
    }, {
      key: "clone",
      value: function clone() {
        return new Recur(this.toJSON());
      }

      /**
       * Checks if the current rule is finite, i.e. has a count or until part.
       *
       * @return {Boolean}        True, if the rule is finite
       */
    }, {
      key: "isFinite",
      value: function isFinite() {
        return !!(this.count || this.until);
      }

      /**
       * Checks if the current rule has a count part, and not limited by an until
       * part.
       *
       * @return {Boolean}        True, if the rule is by count
       */
    }, {
      key: "isByCount",
      value: function isByCount() {
        return !!(this.count && !this.until);
      }

      /**
       * Adds a component (part) to the recurrence rule. This is not a component
       * in the sense of {@link ICAL.Component}, but a part of the recurrence
       * rule, i.e. BYMONTH.
       *
       * @param {String} aType            The name of the component part
       * @param {Array|String} aValue     The component value
       */
    }, {
      key: "addComponent",
      value: function addComponent(aType, aValue) {
        var ucname = aType.toUpperCase();
        if (ucname in this.parts) {
          this.parts[ucname].push(aValue);
        } else {
          this.parts[ucname] = [aValue];
        }
      }

      /**
       * Sets the component value for the given by-part.
       *
       * @param {String} aType        The component part name
       * @param {Array} aValues       The component values
       */
    }, {
      key: "setComponent",
      value: function setComponent(aType, aValues) {
        this.parts[aType.toUpperCase()] = aValues.slice();
      }

      /**
       * Gets (a copy) of the requested component value.
       *
       * @param {String} aType        The component part name
       * @return {Array}              The component part value
       */
    }, {
      key: "getComponent",
      value: function getComponent(aType) {
        var ucname = aType.toUpperCase();
        return ucname in this.parts ? this.parts[ucname].slice() : [];
      }

      /**
       * Retrieves the next occurrence after the given recurrence id. See the
       * guide on {@tutorial terminology} for more details.
       *
       * NOTE: Currently, this method iterates all occurrences from the start
       * date. It should not be called in a loop for performance reasons. If you
       * would like to get more than one occurrence, you can iterate the
       * occurrences manually, see the example on the
       * {@link ICAL.Recur#iterator iterator} method.
       *
       * @param {Time} aStartTime        The start of the event series
       * @param {Time} aRecurrenceId     The date of the last occurrence
       * @return {Time}                  The next occurrence after
       */
    }, {
      key: "getNextOccurrence",
      value: function getNextOccurrence(aStartTime, aRecurrenceId) {
        var iter = this.iterator(aStartTime);
        var next;
        do {
          next = iter.next();
        } while (next && next.compare(aRecurrenceId) <= 0);
        if (next && aRecurrenceId.zone) {
          next.zone = aRecurrenceId.zone;
        }
        return next;
      }

      /**
       * Sets up the current instance using members from the passed data object.
       *
       * @param {Object} data                               An object with members of the recurrence
       * @param {frequencyValues=} data.freq                The frequency value
       * @param {Number=} data.interval                     The INTERVAL value
       * @param {weekDay=} data.wkst                        The week start value
       * @param {Time=} data.until                          The end of the recurrence set
       * @param {Number=} data.count                        The number of occurrences
       * @param {Array.<Number>=} data.bysecond             The seconds for the BYSECOND part
       * @param {Array.<Number>=} data.byminute             The minutes for the BYMINUTE part
       * @param {Array.<Number>=} data.byhour               The hours for the BYHOUR part
       * @param {Array.<String>=} data.byday                The BYDAY values
       * @param {Array.<Number>=} data.bymonthday           The days for the BYMONTHDAY part
       * @param {Array.<Number>=} data.byyearday            The days for the BYYEARDAY part
       * @param {Array.<Number>=} data.byweekno             The weeks for the BYWEEKNO part
       * @param {Array.<Number>=} data.bymonth              The month for the BYMONTH part
       * @param {Array.<Number>=} data.bysetpos             The positionals for the BYSETPOS part
       */
    }, {
      key: "fromData",
      value: function fromData(data) {
        for (var key in data) {
          var uckey = key.toUpperCase();
          if (uckey in partDesign) {
            if (Array.isArray(data[key])) {
              this.parts[uckey] = data[key];
            } else {
              this.parts[uckey] = [data[key]];
            }
          } else {
            this[key] = data[key];
          }
        }
        if (this.interval && typeof this.interval != "number") {
          optionDesign.INTERVAL(this.interval, this);
        }
        if (this.wkst && typeof this.wkst != "number") {
          this.wkst = Recur.icalDayToNumericDay(this.wkst);
        }
        if (this.until && !(this.until instanceof Time)) {
          this.until = Time.fromString(this.until);
        }
      }

      /**
       * The jCal representation of this recurrence type.
       * @return {Object}
       */
    }, {
      key: "toJSON",
      value: function toJSON() {
        var res = Object.create(null);
        res.freq = this.freq;
        if (this.count) {
          res.count = this.count;
        }
        if (this.interval > 1) {
          res.interval = this.interval;
        }
        for (var _i = 0, _Object$entries = Object.entries(this.parts); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            k = _Object$entries$_i[0],
            kparts = _Object$entries$_i[1];
          if (Array.isArray(kparts) && kparts.length == 1) {
            res[k.toLowerCase()] = kparts[0];
          } else {
            res[k.toLowerCase()] = clone(kparts);
          }
        }
        if (this.until) {
          res.until = this.until.toString();
        }
        if ('wkst' in this && this.wkst !== Time.DEFAULT_WEEK_START) {
          res.wkst = Recur.numericDayToIcalDay(this.wkst);
        }
        return res;
      }

      /**
       * The string representation of this recurrence rule.
       * @return {String}
       */
    }, {
      key: "toString",
      value: function toString() {
        // TODO retain order
        var str = "FREQ=" + this.freq;
        if (this.count) {
          str += ";COUNT=" + this.count;
        }
        if (this.interval > 1) {
          str += ";INTERVAL=" + this.interval;
        }
        for (var _i2 = 0, _Object$entries2 = Object.entries(this.parts); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            k = _Object$entries2$_i[0],
            v = _Object$entries2$_i[1];
          str += ";" + k + "=" + v;
        }
        if (this.until) {
          str += ';UNTIL=' + this.until.toICALString();
        }
        if ('wkst' in this && this.wkst !== Time.DEFAULT_WEEK_START) {
          str += ';WKST=' + Recur.numericDayToIcalDay(this.wkst);
        }
        return str;
      }
    }], [{
      key: "fromString",
      value:
      /**
       * Creates a new {@link ICAL.Recur} instance from the passed string.
       *
       * @param {String} string         The string to parse
       * @return {Recur}                The created recurrence instance
       */
      function fromString(string) {
        var data = this._stringToData(string, false);
        return new Recur(data);
      }

      /**
       * Creates a new {@link ICAL.Recur} instance using members from the passed
       * data object.
       *
       * @param {Object} aData                              An object with members of the recurrence
       * @param {frequencyValues=} aData.freq               The frequency value
       * @param {Number=} aData.interval                    The INTERVAL value
       * @param {weekDay=} aData.wkst                       The week start value
       * @param {Time=} aData.until                         The end of the recurrence set
       * @param {Number=} aData.count                       The number of occurrences
       * @param {Array.<Number>=} aData.bysecond            The seconds for the BYSECOND part
       * @param {Array.<Number>=} aData.byminute            The minutes for the BYMINUTE part
       * @param {Array.<Number>=} aData.byhour              The hours for the BYHOUR part
       * @param {Array.<String>=} aData.byday               The BYDAY values
       * @param {Array.<Number>=} aData.bymonthday          The days for the BYMONTHDAY part
       * @param {Array.<Number>=} aData.byyearday           The days for the BYYEARDAY part
       * @param {Array.<Number>=} aData.byweekno            The weeks for the BYWEEKNO part
       * @param {Array.<Number>=} aData.bymonth             The month for the BYMONTH part
       * @param {Array.<Number>=} aData.bysetpos            The positionals for the BYSETPOS part
       */
    }, {
      key: "fromData",
      value: function fromData(aData) {
        return new Recur(aData);
      }

      /**
       * Converts a recurrence string to a data object, suitable for the fromData
       * method.
       *
       * @private
       * @param {String} string     The string to parse
       * @param {Boolean} fmtIcal   If true, the string is considered to be an
       *                              iCalendar string
       * @return {Recur}            The recurrence instance
       */
    }, {
      key: "_stringToData",
      value: function _stringToData(string, fmtIcal) {
        var dict = Object.create(null);

        // split is slower in FF but fast enough.
        // v8 however this is faster then manual split?
        var values = string.split(';');
        var len = values.length;
        for (var i = 0; i < len; i++) {
          var parts = values[i].split('=');
          var ucname = parts[0].toUpperCase();
          var lcname = parts[0].toLowerCase();
          var name = fmtIcal ? lcname : ucname;
          var value = parts[1];
          if (ucname in partDesign) {
            var partArr = value.split(',');
            var partSet = new Set();
            var _iterator = _createForOfIteratorHelper(partArr),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var part = _step.value;
                partSet.add(partDesign[ucname](part));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            partArr = _toConsumableArray(partSet);
            dict[name] = partArr.length == 1 ? partArr[0] : partArr;
          } else if (ucname in optionDesign) {
            optionDesign[ucname](value, dict, fmtIcal);
          } else {
            // Don't swallow unknown values. Just set them as they are.
            dict[lcname] = value;
          }
        }
        return dict;
      }

      /**
       * Convert an ical representation of a day (SU, MO, etc..)
       * into a numeric value of that day.
       *
       * @param {String} string     The iCalendar day name
       * @param {weekDay=} aWeekStart
       *        The week start weekday, defaults to SUNDAY
       * @return {Number}           Numeric value of given day
       */
    }, {
      key: "icalDayToNumericDay",
      value: function icalDayToNumericDay(string, aWeekStart) {
        //XXX: this is here so we can deal
        //     with possibly invalid string values.
        var firstDow = aWeekStart || Time.SUNDAY;
        return (DOW_MAP[string] - firstDow + 7) % 7 + 1;
      }

      /**
       * Convert a numeric day value into its ical representation (SU, MO, etc..)
       *
       * @param {Number} num        Numeric value of given day
       * @param {weekDay=} aWeekStart
       *        The week start weekday, defaults to SUNDAY
       * @return {String}           The ICAL day value, e.g SU,MO,...
       */
    }, {
      key: "numericDayToIcalDay",
      value: function numericDayToIcalDay(num, aWeekStart) {
        //XXX: this is here so we can deal with possibly invalid number values.
        //     Also, this allows consistent mapping between day numbers and day
        //     names for external users.
        var firstDow = aWeekStart || Time.SUNDAY;
        var dow = num + firstDow - Time.SUNDAY;
        if (dow > 7) {
          dow -= 7;
        }
        return REVERSE_DOW_MAP[dow];
      }
    }]);
  }();
  function parseNumericValue(type, min, max, value) {
    var result = value;
    if (value[0] === '+') {
      result = value.slice(1);
    }
    result = strictParseInt(result);
    if (min !== undefined && value < min) {
      throw new Error(type + ': invalid value "' + value + '" must be > ' + min);
    }
    if (max !== undefined && value > max) {
      throw new Error(type + ': invalid value "' + value + '" must be < ' + min);
    }
    return result;
  }
  var optionDesign = {
    FREQ: function FREQ(value, dict, fmtIcal) {
      // yes this is actually equal or faster then regex.
      // upside here is we can enumerate the valid values.
      if (ALLOWED_FREQ.indexOf(value) !== -1) {
        dict.freq = value;
      } else {
        throw new Error('invalid frequency "' + value + '" expected: "' + ALLOWED_FREQ.join(', ') + '"');
      }
    },
    COUNT: function COUNT(value, dict, fmtIcal) {
      dict.count = strictParseInt(value);
    },
    INTERVAL: function INTERVAL(value, dict, fmtIcal) {
      dict.interval = strictParseInt(value);
      if (dict.interval < 1) {
        // 0 or negative values are not allowed, some engines seem to generate
        // it though. Assume 1 instead.
        dict.interval = 1;
      }
    },
    UNTIL: function UNTIL(value, dict, fmtIcal) {
      if (value.length > 10) {
        dict.until = design.icalendar.value['date-time'].fromICAL(value);
      } else {
        dict.until = design.icalendar.value.date.fromICAL(value);
      }
      if (!fmtIcal) {
        dict.until = Time.fromString(dict.until);
      }
    },
    WKST: function WKST(value, dict, fmtIcal) {
      if (VALID_DAY_NAMES.test(value)) {
        dict.wkst = Recur.icalDayToNumericDay(value);
      } else {
        throw new Error('invalid WKST value "' + value + '"');
      }
    }
  };
  var partDesign = {
    BYSECOND: parseNumericValue.bind(undefined, 'BYSECOND', 0, 60),
    BYMINUTE: parseNumericValue.bind(undefined, 'BYMINUTE', 0, 59),
    BYHOUR: parseNumericValue.bind(undefined, 'BYHOUR', 0, 23),
    BYDAY: function BYDAY(value) {
      if (VALID_BYDAY_PART.test(value)) {
        return value;
      } else {
        throw new Error('invalid BYDAY value "' + value + '"');
      }
    },
    BYMONTHDAY: parseNumericValue.bind(undefined, 'BYMONTHDAY', -31, 31),
    BYYEARDAY: parseNumericValue.bind(undefined, 'BYYEARDAY', -366, 366),
    BYWEEKNO: parseNumericValue.bind(undefined, 'BYWEEKNO', -53, 53),
    BYMONTH: parseNumericValue.bind(undefined, 'BYMONTH', 1, 12),
    BYSETPOS: parseNumericValue.bind(undefined, 'BYSETPOS', -366, 366)
  };

  /**
   * This lets typescript resolve our custom types in the
   * generated d.ts files (jsdoc typedefs are converted to typescript types).
   * Ignore prevents the typedefs from being documented more than once.
   * @ignore
   * @typedef {import("./types.js").jCalComponent} jCalComponent
   * Imports the 'occurrenceDetails' type from the "types.js" module
   */

  /**
   * This class represents the "period" value type, with various calculation and manipulation methods.
   *
   * @memberof ICAL
   */
  var Period = /*#__PURE__*/function () {
    /**
     * Creates a new ICAL.Period instance. The passed data object cannot contain both and end date and
     * a duration.
     *
     * @param {Object} aData                  An object with members of the period
     * @param {Time=} aData.start             The start of the period
     * @param {Time=} aData.end               The end of the period
     * @param {Duration=} aData.duration      The duration of the period
     */
    function Period(aData) {
      _classCallCheck(this, Period);
      /**
       * The start of the period
       * @type {Time}
       */
      _defineProperty(this, "start", null);
      /**
       * The end of the period
       * @type {Time}
       */
      _defineProperty(this, "end", null);
      /**
       * The duration of the period
       * @type {Duration}
       */
      _defineProperty(this, "duration", null);
      /**
       * The class identifier.
       * @constant
       * @type {String}
       * @default "icalperiod"
       */
      _defineProperty(this, "icalclass", "icalperiod");
      /**
       * The type name, to be used in the jCal object.
       * @constant
       * @type {String}
       * @default "period"
       */
      _defineProperty(this, "icaltype", "period");
      this.wrappedJSObject = this;
      if (aData && 'start' in aData) {
        if (aData.start && !(aData.start instanceof Time)) {
          throw new TypeError('.start must be an instance of ICAL.Time');
        }
        this.start = aData.start;
      }
      if (aData && aData.end && aData.duration) {
        throw new Error('cannot accept both end and duration');
      }
      if (aData && 'end' in aData) {
        if (aData.end && !(aData.end instanceof Time)) {
          throw new TypeError('.end must be an instance of ICAL.Time');
        }
        this.end = aData.end;
      }
      if (aData && 'duration' in aData) {
        if (aData.duration && !(aData.duration instanceof Duration)) {
          throw new TypeError('.duration must be an instance of ICAL.Duration');
        }
        this.duration = aData.duration;
      }
    }
    return _createClass(Period, [{
      key: "clone",
      value:
      /**
       * Returns a clone of the duration object.
       *
       * @return {Period}      The cloned object
       */
      function clone() {
        return Period.fromData({
          start: this.start ? this.start.clone() : null,
          end: this.end ? this.end.clone() : null,
          duration: this.duration ? this.duration.clone() : null
        });
      }

      /**
       * Calculates the duration of the period, either directly or by subtracting
       * start from end date.
       *
       * @return {Duration}      The calculated duration
       */
    }, {
      key: "getDuration",
      value: function getDuration() {
        if (this.duration) {
          return this.duration;
        } else {
          return this.end.subtractDate(this.start);
        }
      }

      /**
       * Calculates the end date of the period, either directly or by adding
       * duration to start date.
       *
       * @return {Time}          The calculated end date
       */
    }, {
      key: "getEnd",
      value: function getEnd() {
        if (this.end) {
          return this.end;
        } else {
          var end = this.start.clone();
          end.addDuration(this.duration);
          return end;
        }
      }

      /**
       * The string representation of this period.
       * @return {String}
       */
    }, {
      key: "toString",
      value: function toString() {
        return this.start + "/" + (this.end || this.duration);
      }

      /**
       * The jCal representation of this period type.
       * @return {Object}
       */
    }, {
      key: "toJSON",
      value: function toJSON() {
        return [this.start.toString(), (this.end || this.duration).toString()];
      }

      /**
       * The iCalendar string representation of this period.
       * @return {String}
       */
    }, {
      key: "toICALString",
      value: function toICALString() {
        return this.start.toICALString() + "/" + (this.end || this.duration).toICALString();
      }
    }], [{
      key: "fromString",
      value:
      /**
       * Creates a new {@link ICAL.Period} instance from the passed string.
       *
       * @param {String} str            The string to parse
       * @param {Property} prop         The property this period will be on
       * @return {Period}               The created period instance
       */
      function fromString(str, prop) {
        var parts = str.split('/');
        if (parts.length !== 2) {
          throw new Error('Invalid string value: "' + str + '" must contain a "/" char.');
        }
        var options = {
          start: Time.fromDateTimeString(parts[0], prop)
        };
        var end = parts[1];
        if (Duration.isValueString(end)) {
          options.duration = Duration.fromString(end);
        } else {
          options.end = Time.fromDateTimeString(end, prop);
        }
        return new Period(options);
      }

      /**
       * Creates a new {@link ICAL.Period} instance from the given data object.
       * The passed data object cannot contain both and end date and a duration.
       *
       * @param {Object} aData                  An object with members of the period
       * @param {Time=} aData.start             The start of the period
       * @param {Time=} aData.end               The end of the period
       * @param {Duration=} aData.duration      The duration of the period
       * @return {Period}                       The period instance
       */
    }, {
      key: "fromData",
      value: function fromData(aData) {
        return new Period(aData);
      }

      /**
       * Returns a new period instance from the given jCal data array. The first
       * member is always the start date string, the second member is either a
       * duration or end date string.
       *
       * @param {jCalComponent} aData           The jCal data array
       * @param {Property} aProp                The property this jCal data is on
       * @param {Boolean} aLenient              If true, data value can be both date and date-time
       * @return {Period}                       The period instance
       */
    }, {
      key: "fromJSON",
      value: function fromJSON(aData, aProp, aLenient) {
        function fromDateOrDateTimeString(aValue, dateProp) {
          if (aLenient) {
            return Time.fromString(aValue, dateProp);
          } else {
            return Time.fromDateTimeString(aValue, dateProp);
          }
        }
        if (Duration.isValueString(aData[1])) {
          return Period.fromData({
            start: fromDateOrDateTimeString(aData[0], aProp),
            duration: Duration.fromString(aData[1])
          });
        } else {
          return Period.fromData({
            start: fromDateOrDateTimeString(aData[0], aProp),
            end: fromDateOrDateTimeString(aData[1], aProp)
          });
        }
      }
    }]);
  }();

  /**
   * This lets typescript resolve our custom types in the
   * generated d.ts files (jsdoc typedefs are converted to typescript types).
   * Ignore prevents the typedefs from being documented more than once.
   * @ignore
   * @typedef {import("./types.js").designSet} designSet
   * Imports the 'designSet' type from the "types.js" module
   */

  /** @module ICAL.design */

  var FROM_ICAL_NEWLINE = /\\\\|\\;|\\,|\\[Nn]/g;
  var TO_ICAL_NEWLINE = /\\|;|,|\n/g;
  var FROM_VCARD_NEWLINE = /\\\\|\\,|\\[Nn]/g;
  var TO_VCARD_NEWLINE = /\\|,|\n/g;
  function createTextType(fromNewline, toNewline) {
    var result = {
      matches: /.*/,
      fromICAL: function fromICAL(aValue, structuredEscape) {
        return replaceNewline(aValue, fromNewline, structuredEscape);
      },
      toICAL: function toICAL(aValue, structuredEscape) {
        var regEx = toNewline;
        if (structuredEscape) regEx = new RegExp(regEx.source + '|' + structuredEscape, regEx.flags);
        return aValue.replace(regEx, function (str) {
          switch (str) {
            case "\\":
              return "\\\\";
            case ";":
              return "\\;";
            case ",":
              return "\\,";
            case "\n":
              return "\\n";
            /* c8 ignore next 2 */
            default:
              return str;
          }
        });
      }
    };
    return result;
  }

  // default types used multiple times
  var DEFAULT_TYPE_TEXT = {
    defaultType: "text"
  };
  var DEFAULT_TYPE_TEXT_MULTI = {
    defaultType: "text",
    multiValue: ","
  };
  var DEFAULT_TYPE_TEXT_STRUCTURED = {
    defaultType: "text",
    structuredValue: ";"
  };
  var DEFAULT_TYPE_INTEGER = {
    defaultType: "integer"
  };
  var DEFAULT_TYPE_DATETIME_DATE = {
    defaultType: "date-time",
    allowedTypes: ["date-time", "date"]
  };
  var DEFAULT_TYPE_DATETIME = {
    defaultType: "date-time"
  };
  var DEFAULT_TYPE_URI = {
    defaultType: "uri"
  };
  var DEFAULT_TYPE_UTCOFFSET = {
    defaultType: "utc-offset"
  };
  var DEFAULT_TYPE_RECUR = {
    defaultType: "recur"
  };
  var DEFAULT_TYPE_DATE_ANDOR_TIME = {
    defaultType: "date-and-or-time",
    allowedTypes: ["date-time", "date", "text"]
  };
  function replaceNewlineReplace(string) {
    switch (string) {
      case "\\\\":
        return "\\";
      case "\\;":
        return ";";
      case "\\,":
        return ",";
      case "\\n":
      case "\\N":
        return "\n";
      /* c8 ignore next 2 */
      default:
        return string;
    }
  }
  function replaceNewline(value, newline, structuredEscape) {
    // avoid regex when possible.
    if (value.indexOf('\\') === -1) {
      return value;
    }
    if (structuredEscape) newline = new RegExp(newline.source + '|\\\\' + structuredEscape, newline.flags);
    return value.replace(newline, replaceNewlineReplace);
  }
  var commonProperties = {
    "categories": DEFAULT_TYPE_TEXT_MULTI,
    "url": DEFAULT_TYPE_URI,
    "version": DEFAULT_TYPE_TEXT,
    "uid": DEFAULT_TYPE_TEXT
  };
  var commonValues = {
    "boolean": {
      values: ["TRUE", "FALSE"],
      fromICAL: function fromICAL(aValue) {
        switch (aValue) {
          case 'TRUE':
            return true;
          case 'FALSE':
            return false;
          default:
            //TODO: parser warning
            return false;
        }
      },
      toICAL: function toICAL(aValue) {
        if (aValue) {
          return 'TRUE';
        }
        return 'FALSE';
      }
    },
    "float": {
      matches: /^[+-]?\d+\.\d+$/,
      fromICAL: function fromICAL(aValue) {
        var parsed = parseFloat(aValue);
        if (isStrictlyNaN(parsed)) {
          // TODO: parser warning
          return 0.0;
        }
        return parsed;
      },
      toICAL: function toICAL(aValue) {
        return String(aValue);
      }
    },
    integer: {
      fromICAL: function fromICAL(aValue) {
        var parsed = parseInt(aValue);
        if (isStrictlyNaN(parsed)) {
          return 0;
        }
        return parsed;
      },
      toICAL: function toICAL(aValue) {
        return String(aValue);
      }
    },
    "utc-offset": {
      toICAL: function toICAL(aValue) {
        if (aValue.length < 7) {
          // no seconds
          // -0500
          return aValue.slice(0, 3) + aValue.slice(4, 6);
        } else {
          // seconds
          // -050000
          return aValue.slice(0, 3) + aValue.slice(4, 6) + aValue.slice(7, 9);
        }
      },
      fromICAL: function fromICAL(aValue) {
        if (aValue.length < 6) {
          // no seconds
          // -05:00
          return aValue.slice(0, 3) + ':' + aValue.slice(3, 5);
        } else {
          // seconds
          // -05:00:00
          return aValue.slice(0, 3) + ':' + aValue.slice(3, 5) + ':' + aValue.slice(5, 7);
        }
      },
      decorate: function decorate(aValue) {
        return UtcOffset.fromString(aValue);
      },
      undecorate: function undecorate(aValue) {
        return aValue.toString();
      }
    }
  };
  var icalParams = {
    // Although the syntax is DQUOTE uri DQUOTE, I don't think we should
    // enforce anything aside from it being a valid content line.
    //
    // At least some params require - if multi values are used - DQUOTEs
    // for each of its values - e.g. delegated-from="uri1","uri2"
    // To indicate this, I introduced the new k/v pair
    // multiValueSeparateDQuote: true
    //
    // "ALTREP": { ... },

    // CN just wants a param-value
    // "CN": { ... }

    "cutype": {
      values: ["INDIVIDUAL", "GROUP", "RESOURCE", "ROOM", "UNKNOWN"],
      allowXName: true,
      allowIanaToken: true
    },
    "delegated-from": {
      valueType: "cal-address",
      multiValue: ",",
      multiValueSeparateDQuote: true
    },
    "delegated-to": {
      valueType: "cal-address",
      multiValue: ",",
      multiValueSeparateDQuote: true
    },
    // "DIR": { ... }, // See ALTREP
    "encoding": {
      values: ["8BIT", "BASE64"]
    },
    // "FMTTYPE": { ... }, // See ALTREP
    "fbtype": {
      values: ["FREE", "BUSY", "BUSY-UNAVAILABLE", "BUSY-TENTATIVE"],
      allowXName: true,
      allowIanaToken: true
    },
    // "LANGUAGE": { ... }, // See ALTREP
    "member": {
      valueType: "cal-address",
      multiValue: ",",
      multiValueSeparateDQuote: true
    },
    "partstat": {
      // TODO These values are actually different per-component
      values: ["NEEDS-ACTION", "ACCEPTED", "DECLINED", "TENTATIVE", "DELEGATED", "COMPLETED", "IN-PROCESS"],
      allowXName: true,
      allowIanaToken: true
    },
    "range": {
      values: ["THISANDFUTURE"]
    },
    "related": {
      values: ["START", "END"]
    },
    "reltype": {
      values: ["PARENT", "CHILD", "SIBLING"],
      allowXName: true,
      allowIanaToken: true
    },
    "role": {
      values: ["REQ-PARTICIPANT", "CHAIR", "OPT-PARTICIPANT", "NON-PARTICIPANT"],
      allowXName: true,
      allowIanaToken: true
    },
    "rsvp": {
      values: ["TRUE", "FALSE"]
    },
    "sent-by": {
      valueType: "cal-address"
    },
    "tzid": {
      matches: /^\//
    },
    "value": {
      // since the value here is a 'type' lowercase is used.
      values: ["binary", "boolean", "cal-address", "date", "date-time", "duration", "float", "integer", "period", "recur", "text", "time", "uri", "utc-offset"],
      allowXName: true,
      allowIanaToken: true
    }
  };

  // When adding a value here, be sure to add it to the parameter types!
  var icalValues = extend(commonValues, {
    text: createTextType(FROM_ICAL_NEWLINE, TO_ICAL_NEWLINE),
    uri: {
      // TODO
      /* ... */
    },
    "binary": {
      decorate: function decorate(aString) {
        return Binary.fromString(aString);
      },
      undecorate: function undecorate(aBinary) {
        return aBinary.toString();
      }
    },
    "cal-address": {
      // needs to be an uri
    },
    "date": {
      decorate: function decorate(aValue, aProp) {
        if (design.strict) {
          return Time.fromDateString(aValue, aProp);
        } else {
          return Time.fromString(aValue, aProp);
        }
      },
      /**
       * undecorates a time object.
       */
      undecorate: function undecorate(aValue) {
        return aValue.toString();
      },
      fromICAL: function fromICAL(aValue) {
        // from: 20120901
        // to: 2012-09-01
        if (!design.strict && aValue.length >= 15) {
          // This is probably a date-time, e.g. 20120901T130000Z
          return icalValues["date-time"].fromICAL(aValue);
        } else {
          return aValue.slice(0, 4) + '-' + aValue.slice(4, 6) + '-' + aValue.slice(6, 8);
        }
      },
      toICAL: function toICAL(aValue) {
        // from: 2012-09-01
        // to: 20120901
        var len = aValue.length;
        if (len == 10) {
          return aValue.slice(0, 4) + aValue.slice(5, 7) + aValue.slice(8, 10);
        } else if (len >= 19) {
          return icalValues["date-time"].toICAL(aValue);
        } else {
          //TODO: serialize warning?
          return aValue;
        }
      }
    },
    "date-time": {
      fromICAL: function fromICAL(aValue) {
        // from: 20120901T130000
        // to: 2012-09-01T13:00:00
        if (!design.strict && aValue.length == 8) {
          // This is probably a date, e.g. 20120901
          return icalValues.date.fromICAL(aValue);
        } else {
          var result = aValue.slice(0, 4) + '-' + aValue.slice(4, 6) + '-' + aValue.slice(6, 8) + 'T' + aValue.slice(9, 11) + ':' + aValue.slice(11, 13) + ':' + aValue.slice(13, 15);
          if (aValue[15] && aValue[15] === 'Z') {
            result += 'Z';
          }
          return result;
        }
      },
      toICAL: function toICAL(aValue) {
        // from: 2012-09-01T13:00:00
        // to: 20120901T130000
        var len = aValue.length;
        if (len == 10 && !design.strict) {
          return icalValues.date.toICAL(aValue);
        } else if (len >= 19) {
          var result = aValue.slice(0, 4) + aValue.slice(5, 7) +
          // grab the (DDTHH) segment
          aValue.slice(8, 13) +
          // MM
          aValue.slice(14, 16) +
          // SS
          aValue.slice(17, 19);
          if (aValue[19] && aValue[19] === 'Z') {
            result += 'Z';
          }
          return result;
        } else {
          // TODO: error
          return aValue;
        }
      },
      decorate: function decorate(aValue, aProp) {
        if (design.strict) {
          return Time.fromDateTimeString(aValue, aProp);
        } else {
          return Time.fromString(aValue, aProp);
        }
      },
      undecorate: function undecorate(aValue) {
        return aValue.toString();
      }
    },
    duration: {
      decorate: function decorate(aValue) {
        return Duration.fromString(aValue);
      },
      undecorate: function undecorate(aValue) {
        return aValue.toString();
      }
    },
    period: {
      fromICAL: function fromICAL(string) {
        var parts = string.split('/');
        parts[0] = icalValues['date-time'].fromICAL(parts[0]);
        if (!Duration.isValueString(parts[1])) {
          parts[1] = icalValues['date-time'].fromICAL(parts[1]);
        }
        return parts;
      },
      toICAL: function toICAL(parts) {
        parts = parts.slice();
        if (!design.strict && parts[0].length == 10) {
          parts[0] = icalValues.date.toICAL(parts[0]);
        } else {
          parts[0] = icalValues['date-time'].toICAL(parts[0]);
        }
        if (!Duration.isValueString(parts[1])) {
          if (!design.strict && parts[1].length == 10) {
            parts[1] = icalValues.date.toICAL(parts[1]);
          } else {
            parts[1] = icalValues['date-time'].toICAL(parts[1]);
          }
        }
        return parts.join("/");
      },
      decorate: function decorate(aValue, aProp) {
        return Period.fromJSON(aValue, aProp, !design.strict);
      },
      undecorate: function undecorate(aValue) {
        return aValue.toJSON();
      }
    },
    recur: {
      fromICAL: function fromICAL(string) {
        return Recur._stringToData(string, true);
      },
      toICAL: function toICAL(data) {
        var str = "";
        for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            k = _Object$entries$_i[0],
            val = _Object$entries$_i[1];
          if (k == "until") {
            if (val.length > 10) {
              val = icalValues['date-time'].toICAL(val);
            } else {
              val = icalValues.date.toICAL(val);
            }
          } else if (k == "wkst") {
            if (typeof val === 'number') {
              val = Recur.numericDayToIcalDay(val);
            }
          } else if (Array.isArray(val)) {
            val = val.join(",");
          }
          str += k.toUpperCase() + "=" + val + ";";
        }
        return str.slice(0, Math.max(0, str.length - 1));
      },
      decorate: function decorate(aValue) {
        return Recur.fromData(aValue);
      },
      undecorate: function undecorate(aRecur) {
        return aRecur.toJSON();
      }
    },
    time: {
      fromICAL: function fromICAL(aValue) {
        // from: MMHHSS(Z)?
        // to: HH:MM:SS(Z)?
        if (aValue.length < 6) {
          // TODO: parser exception?
          return aValue;
        }

        // HH::MM::SSZ?
        var result = aValue.slice(0, 2) + ':' + aValue.slice(2, 4) + ':' + aValue.slice(4, 6);
        if (aValue[6] === 'Z') {
          result += 'Z';
        }
        return result;
      },
      toICAL: function toICAL(aValue) {
        // from: HH:MM:SS(Z)?
        // to: MMHHSS(Z)?
        if (aValue.length < 8) {
          //TODO: error
          return aValue;
        }
        var result = aValue.slice(0, 2) + aValue.slice(3, 5) + aValue.slice(6, 8);
        if (aValue[8] === 'Z') {
          result += 'Z';
        }
        return result;
      }
    }
  });
  var icalProperties = extend(commonProperties, {
    "action": DEFAULT_TYPE_TEXT,
    "attach": {
      defaultType: "uri"
    },
    "attendee": {
      defaultType: "cal-address"
    },
    "calscale": DEFAULT_TYPE_TEXT,
    "class": DEFAULT_TYPE_TEXT,
    "comment": DEFAULT_TYPE_TEXT,
    "completed": DEFAULT_TYPE_DATETIME,
    "contact": DEFAULT_TYPE_TEXT,
    "created": DEFAULT_TYPE_DATETIME,
    "description": DEFAULT_TYPE_TEXT,
    "dtend": DEFAULT_TYPE_DATETIME_DATE,
    "dtstamp": DEFAULT_TYPE_DATETIME,
    "dtstart": DEFAULT_TYPE_DATETIME_DATE,
    "due": DEFAULT_TYPE_DATETIME_DATE,
    "duration": {
      defaultType: "duration"
    },
    "exdate": {
      defaultType: "date-time",
      allowedTypes: ["date-time", "date"],
      multiValue: ','
    },
    "exrule": DEFAULT_TYPE_RECUR,
    "freebusy": {
      defaultType: "period",
      multiValue: ","
    },
    "geo": {
      defaultType: "float",
      structuredValue: ";"
    },
    "last-modified": DEFAULT_TYPE_DATETIME,
    "location": DEFAULT_TYPE_TEXT,
    "method": DEFAULT_TYPE_TEXT,
    "organizer": {
      defaultType: "cal-address"
    },
    "percent-complete": DEFAULT_TYPE_INTEGER,
    "priority": DEFAULT_TYPE_INTEGER,
    "prodid": DEFAULT_TYPE_TEXT,
    "related-to": DEFAULT_TYPE_TEXT,
    "repeat": DEFAULT_TYPE_INTEGER,
    "rdate": {
      defaultType: "date-time",
      allowedTypes: ["date-time", "date", "period"],
      multiValue: ',',
      detectType: function detectType(string) {
        if (string.indexOf('/') !== -1) {
          return 'period';
        }
        return string.indexOf('T') === -1 ? 'date' : 'date-time';
      }
    },
    "recurrence-id": DEFAULT_TYPE_DATETIME_DATE,
    "resources": DEFAULT_TYPE_TEXT_MULTI,
    "request-status": DEFAULT_TYPE_TEXT_STRUCTURED,
    "rrule": DEFAULT_TYPE_RECUR,
    "sequence": DEFAULT_TYPE_INTEGER,
    "status": DEFAULT_TYPE_TEXT,
    "summary": DEFAULT_TYPE_TEXT,
    "transp": DEFAULT_TYPE_TEXT,
    "trigger": {
      defaultType: "duration",
      allowedTypes: ["duration", "date-time"]
    },
    "tzoffsetfrom": DEFAULT_TYPE_UTCOFFSET,
    "tzoffsetto": DEFAULT_TYPE_UTCOFFSET,
    "tzurl": DEFAULT_TYPE_URI,
    "tzid": DEFAULT_TYPE_TEXT,
    "tzname": DEFAULT_TYPE_TEXT
  });

  // When adding a value here, be sure to add it to the parameter types!
  var vcardValues = extend(commonValues, {
    text: createTextType(FROM_VCARD_NEWLINE, TO_VCARD_NEWLINE),
    uri: createTextType(FROM_VCARD_NEWLINE, TO_VCARD_NEWLINE),
    date: {
      decorate: function decorate(aValue) {
        return VCardTime.fromDateAndOrTimeString(aValue, "date");
      },
      undecorate: function undecorate(aValue) {
        return aValue.toString();
      },
      fromICAL: function fromICAL(aValue) {
        if (aValue.length == 8) {
          return icalValues.date.fromICAL(aValue);
        } else if (aValue[0] == '-' && aValue.length == 6) {
          return aValue.slice(0, 4) + '-' + aValue.slice(4);
        } else {
          return aValue;
        }
      },
      toICAL: function toICAL(aValue) {
        if (aValue.length == 10) {
          return icalValues.date.toICAL(aValue);
        } else if (aValue[0] == '-' && aValue.length == 7) {
          return aValue.slice(0, 4) + aValue.slice(5);
        } else {
          return aValue;
        }
      }
    },
    time: {
      decorate: function decorate(aValue) {
        return VCardTime.fromDateAndOrTimeString("T" + aValue, "time");
      },
      undecorate: function undecorate(aValue) {
        return aValue.toString();
      },
      fromICAL: function fromICAL(aValue) {
        var splitzone = vcardValues.time._splitZone(aValue, true);
        var zone = splitzone[0],
          value = splitzone[1];

        //console.log("SPLIT: ",splitzone);

        if (value.length == 6) {
          value = value.slice(0, 2) + ':' + value.slice(2, 4) + ':' + value.slice(4, 6);
        } else if (value.length == 4 && value[0] != '-') {
          value = value.slice(0, 2) + ':' + value.slice(2, 4);
        } else if (value.length == 5) {
          value = value.slice(0, 3) + ':' + value.slice(3, 5);
        }
        if (zone.length == 5 && (zone[0] == '-' || zone[0] == '+')) {
          zone = zone.slice(0, 3) + ':' + zone.slice(3);
        }
        return value + zone;
      },
      toICAL: function toICAL(aValue) {
        var splitzone = vcardValues.time._splitZone(aValue);
        var zone = splitzone[0],
          value = splitzone[1];
        if (value.length == 8) {
          value = value.slice(0, 2) + value.slice(3, 5) + value.slice(6, 8);
        } else if (value.length == 5 && value[0] != '-') {
          value = value.slice(0, 2) + value.slice(3, 5);
        } else if (value.length == 6) {
          value = value.slice(0, 3) + value.slice(4, 6);
        }
        if (zone.length == 6 && (zone[0] == '-' || zone[0] == '+')) {
          zone = zone.slice(0, 3) + zone.slice(4);
        }
        return value + zone;
      },
      _splitZone: function _splitZone(aValue, isFromIcal) {
        var lastChar = aValue.length - 1;
        var signChar = aValue.length - (isFromIcal ? 5 : 6);
        var sign = aValue[signChar];
        var zone, value;
        if (aValue[lastChar] == 'Z') {
          zone = aValue[lastChar];
          value = aValue.slice(0, Math.max(0, lastChar));
        } else if (aValue.length > 6 && (sign == '-' || sign == '+')) {
          zone = aValue.slice(signChar);
          value = aValue.slice(0, Math.max(0, signChar));
        } else {
          zone = "";
          value = aValue;
        }
        return [zone, value];
      }
    },
    "date-time": {
      decorate: function decorate(aValue) {
        return VCardTime.fromDateAndOrTimeString(aValue, "date-time");
      },
      undecorate: function undecorate(aValue) {
        return aValue.toString();
      },
      fromICAL: function fromICAL(aValue) {
        return vcardValues['date-and-or-time'].fromICAL(aValue);
      },
      toICAL: function toICAL(aValue) {
        return vcardValues['date-and-or-time'].toICAL(aValue);
      }
    },
    "date-and-or-time": {
      decorate: function decorate(aValue) {
        return VCardTime.fromDateAndOrTimeString(aValue, "date-and-or-time");
      },
      undecorate: function undecorate(aValue) {
        return aValue.toString();
      },
      fromICAL: function fromICAL(aValue) {
        var parts = aValue.split('T');
        return (parts[0] ? vcardValues.date.fromICAL(parts[0]) : '') + (parts[1] ? 'T' + vcardValues.time.fromICAL(parts[1]) : '');
      },
      toICAL: function toICAL(aValue) {
        var parts = aValue.split('T');
        return vcardValues.date.toICAL(parts[0]) + (parts[1] ? 'T' + vcardValues.time.toICAL(parts[1]) : '');
      }
    },
    timestamp: icalValues['date-time'],
    "language-tag": {
      matches: /^[a-zA-Z0-9-]+$/ // Could go with a more strict regex here
    },
    "phone-number": {
      fromICAL: function fromICAL(aValue) {
        return Array.from(aValue).filter(function (c) {
          return c === '\\' ? undefined : c;
        }).join('');
      },
      toICAL: function toICAL(aValue) {
        return Array.from(aValue).map(function (c) {
          return c === ',' || c === ";" ? '\\' + c : c;
        }).join('');
      }
    }
  });
  var vcardParams = {
    "type": {
      valueType: "text",
      multiValue: ","
    },
    "value": {
      // since the value here is a 'type' lowercase is used.
      values: ["text", "uri", "date", "time", "date-time", "date-and-or-time", "timestamp", "boolean", "integer", "float", "utc-offset", "language-tag"],
      allowXName: true,
      allowIanaToken: true
    }
  };
  var vcardProperties = extend(commonProperties, {
    "adr": {
      defaultType: "text",
      structuredValue: ";",
      multiValue: ","
    },
    "anniversary": DEFAULT_TYPE_DATE_ANDOR_TIME,
    "bday": DEFAULT_TYPE_DATE_ANDOR_TIME,
    "caladruri": DEFAULT_TYPE_URI,
    "caluri": DEFAULT_TYPE_URI,
    "clientpidmap": DEFAULT_TYPE_TEXT_STRUCTURED,
    "email": DEFAULT_TYPE_TEXT,
    "fburl": DEFAULT_TYPE_URI,
    "fn": DEFAULT_TYPE_TEXT,
    "gender": DEFAULT_TYPE_TEXT_STRUCTURED,
    "geo": DEFAULT_TYPE_URI,
    "impp": DEFAULT_TYPE_URI,
    "key": DEFAULT_TYPE_URI,
    "kind": DEFAULT_TYPE_TEXT,
    "lang": {
      defaultType: "language-tag"
    },
    "logo": DEFAULT_TYPE_URI,
    "member": DEFAULT_TYPE_URI,
    "n": {
      defaultType: "text",
      structuredValue: ";",
      multiValue: ","
    },
    "nickname": DEFAULT_TYPE_TEXT_MULTI,
    "note": DEFAULT_TYPE_TEXT,
    "org": {
      defaultType: "text",
      structuredValue: ";"
    },
    "photo": DEFAULT_TYPE_URI,
    "related": DEFAULT_TYPE_URI,
    "rev": {
      defaultType: "timestamp"
    },
    "role": DEFAULT_TYPE_TEXT,
    "sound": DEFAULT_TYPE_URI,
    "source": DEFAULT_TYPE_URI,
    "tel": {
      defaultType: "uri",
      allowedTypes: ["uri", "text"]
    },
    "title": DEFAULT_TYPE_TEXT,
    "tz": {
      defaultType: "text",
      allowedTypes: ["text", "utc-offset", "uri"]
    },
    "xml": DEFAULT_TYPE_TEXT
  });
  var vcard3Values = extend(commonValues, {
    binary: icalValues.binary,
    date: vcardValues.date,
    "date-time": vcardValues["date-time"],
    "phone-number": vcardValues["phone-number"],
    uri: icalValues.uri,
    text: icalValues.text,
    time: icalValues.time,
    vcard: icalValues.text,
    "utc-offset": {
      toICAL: function toICAL(aValue) {
        return aValue.slice(0, 7);
      },
      fromICAL: function fromICAL(aValue) {
        return aValue.slice(0, 7);
      },
      decorate: function decorate(aValue) {
        return UtcOffset.fromString(aValue);
      },
      undecorate: function undecorate(aValue) {
        return aValue.toString();
      }
    }
  });
  var vcard3Params = {
    "type": {
      valueType: "text",
      multiValue: ","
    },
    "value": {
      // since the value here is a 'type' lowercase is used.
      values: ["text", "uri", "date", "date-time", "phone-number", "time", "boolean", "integer", "float", "utc-offset", "vcard", "binary"],
      allowXName: true,
      allowIanaToken: true
    }
  };
  var vcard3Properties = extend(commonProperties, {
    fn: DEFAULT_TYPE_TEXT,
    n: {
      defaultType: "text",
      structuredValue: ";",
      multiValue: ","
    },
    nickname: DEFAULT_TYPE_TEXT_MULTI,
    photo: {
      defaultType: "binary",
      allowedTypes: ["binary", "uri"]
    },
    bday: {
      defaultType: "date-time",
      allowedTypes: ["date-time", "date"],
      detectType: function detectType(string) {
        return string.indexOf('T') === -1 ? 'date' : 'date-time';
      }
    },
    adr: {
      defaultType: "text",
      structuredValue: ";",
      multiValue: ","
    },
    label: DEFAULT_TYPE_TEXT,
    tel: {
      defaultType: "phone-number"
    },
    email: DEFAULT_TYPE_TEXT,
    mailer: DEFAULT_TYPE_TEXT,
    tz: {
      defaultType: "utc-offset",
      allowedTypes: ["utc-offset", "text"]
    },
    geo: {
      defaultType: "float",
      structuredValue: ";"
    },
    title: DEFAULT_TYPE_TEXT,
    role: DEFAULT_TYPE_TEXT,
    logo: {
      defaultType: "binary",
      allowedTypes: ["binary", "uri"]
    },
    agent: {
      defaultType: "vcard",
      allowedTypes: ["vcard", "text", "uri"]
    },
    org: DEFAULT_TYPE_TEXT_STRUCTURED,
    note: DEFAULT_TYPE_TEXT_MULTI,
    prodid: DEFAULT_TYPE_TEXT,
    rev: {
      defaultType: "date-time",
      allowedTypes: ["date-time", "date"],
      detectType: function detectType(string) {
        return string.indexOf('T') === -1 ? 'date' : 'date-time';
      }
    },
    "sort-string": DEFAULT_TYPE_TEXT,
    sound: {
      defaultType: "binary",
      allowedTypes: ["binary", "uri"]
    },
    "class": DEFAULT_TYPE_TEXT,
    key: {
      defaultType: "binary",
      allowedTypes: ["binary", "text"]
    }
  });

  /**
   * iCalendar design set
   * @type {designSet}
   */
  var icalSet = {
    value: icalValues,
    param: icalParams,
    property: icalProperties,
    propertyGroups: false
  };

  /**
   * vCard 4.0 design set
   * @type {designSet}
   */
  var vcardSet = {
    value: vcardValues,
    param: vcardParams,
    property: vcardProperties,
    propertyGroups: true
  };

  /**
   * vCard 3.0 design set
   * @type {designSet}
   */
  var vcard3Set = {
    value: vcard3Values,
    param: vcard3Params,
    property: vcard3Properties,
    propertyGroups: true
  };

  /**
   * The design data, used by the parser to determine types for properties and
   * other metadata needed to produce correct jCard/jCal data.
   *
   * @alias ICAL.design
   * @exports module:ICAL.design
   */
  var design = {
    /**
     * Can be set to false to make the parser more lenient.
     */
    strict: true,
    /**
     * The default set for new properties and components if none is specified.
     * @type {designSet}
     */
    defaultSet: icalSet,
    /**
     * The default type for unknown properties
     * @type {String}
     */
    defaultType: 'unknown',
    /**
     * Holds the design set for known top-level components
     *
     * @type {Object}
     * @property {designSet} vcard       vCard VCARD
     * @property {designSet} vevent      iCalendar VEVENT
     * @property {designSet} vtodo       iCalendar VTODO
     * @property {designSet} vjournal    iCalendar VJOURNAL
     * @property {designSet} valarm      iCalendar VALARM
     * @property {designSet} vtimezone   iCalendar VTIMEZONE
     * @property {designSet} daylight    iCalendar DAYLIGHT
     * @property {designSet} standard    iCalendar STANDARD
     *
     * @example
     * let propertyName = 'fn';
     * let componentDesign = ICAL.design.components.vcard;
     * let propertyDetails = componentDesign.property[propertyName];
     * if (propertyDetails.defaultType == 'text') {
     *   // Yep, sure is...
     * }
     */
    components: {
      vcard: vcardSet,
      vcard3: vcard3Set,
      vevent: icalSet,
      vtodo: icalSet,
      vjournal: icalSet,
      valarm: icalSet,
      vtimezone: icalSet,
      daylight: icalSet,
      standard: icalSet
    },
    /**
     * The design set for iCalendar (rfc5545/rfc7265) components.
     * @type {designSet}
     */
    icalendar: icalSet,
    /**
     * The design set for vCard (rfc6350/rfc7095) components.
     * @type {designSet}
     */
    vcard: vcardSet,
    /**
     * The design set for vCard (rfc2425/rfc2426/rfc7095) components.
     * @type {designSet}
     */
    vcard3: vcard3Set,
    /**
     * Gets the design set for the given component name.
     *
     * @param {String} componentName        The name of the component
     * @return {designSet}      The design set for the component
     */
    getDesignSet: function getDesignSet(componentName) {
      var isInDesign = componentName && componentName in design.components;
      return isInDesign ? design.components[componentName] : design.defaultSet;
    }
  };

  /**
   * This lets typescript resolve our custom types in the
   * generated d.ts files (jsdoc typedefs are converted to typescript types).
   * Ignore prevents the typedefs from being documented more than once.
   *
   * @ignore
   * @typedef {import("./types.js").designSet} designSet
   * Imports the 'designSet' type from the "types.js" module
   */

  var LINE_ENDING = '\r\n';
  var DEFAULT_VALUE_TYPE = 'unknown';
  var RFC6868_REPLACE_MAP = {
    '"': "^'",
    "\n": "^n",
    "^": "^^"
  };

  /**
   * Convert a full jCal/jCard array into a iCalendar/vCard string.
   *
   * @function ICAL.stringify
   * @variation function
   * @param {Array} jCal    The jCal/jCard document
   * @return {String}       The stringified iCalendar/vCard document
   */
  function stringify(jCal) {
    if (typeof jCal[0] == "string") {
      // This is a single component
      jCal = [jCal];
    }
    var i = 0;
    var len = jCal.length;
    var result = '';
    for (; i < len; i++) {
      result += stringify.component(jCal[i]) + LINE_ENDING;
    }
    return result;
  }

  /**
   * Converts an jCal component array into a ICAL string.
   * Recursive will resolve sub-components.
   *
   * Exact component/property order is not saved all
   * properties will come before subcomponents.
   *
   * @function ICAL.stringify.component
   * @param {Array} component
   *        jCal/jCard fragment of a component
   * @param {designSet} designSet
   *        The design data to use for this component
   * @return {String}       The iCalendar/vCard string
   */
  stringify.component = function (component, designSet) {
    var name = component[0].toUpperCase();
    var result = 'BEGIN:' + name + LINE_ENDING;
    var props = component[1];
    var propIdx = 0;
    var propLen = props.length;
    var designSetName = component[0];
    // rfc6350 requires that in vCard 4.0 the first component is the VERSION
    // component with as value 4.0, note that 3.0 does not have this requirement.
    if (designSetName === 'vcard' && component[1].length > 0 && !(component[1][0][0] === "version" && component[1][0][3] === "4.0")) {
      designSetName = "vcard3";
    }
    designSet = designSet || design.getDesignSet(designSetName);
    for (; propIdx < propLen; propIdx++) {
      result += stringify.property(props[propIdx], designSet) + LINE_ENDING;
    }

    // Ignore subcomponents if none exist, e.g. in vCard.
    var comps = component[2] || [];
    var compIdx = 0;
    var compLen = comps.length;
    for (; compIdx < compLen; compIdx++) {
      result += stringify.component(comps[compIdx], designSet) + LINE_ENDING;
    }
    result += 'END:' + name;
    return result;
  };

  /**
   * Converts a single jCal/jCard property to a iCalendar/vCard string.
   *
   * @function ICAL.stringify.property
   * @param {Array} property
   *        jCal/jCard property array
   * @param {designSet} designSet
   *        The design data to use for this property
   * @param {Boolean} noFold
   *        If true, the line is not folded
   * @return {String}       The iCalendar/vCard string
   */
  stringify.property = function (property, designSet, noFold) {
    var name = property[0].toUpperCase();
    var jsName = property[0];
    var params = property[1];
    if (!designSet) {
      designSet = design.defaultSet;
    }
    var groupName = params.group;
    var line;
    if (designSet.propertyGroups && groupName) {
      line = groupName.toUpperCase() + "." + name;
    } else {
      line = name;
    }
    var _loop = function _loop() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        paramName = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      if (designSet.propertyGroups && paramName == 'group') {
        return 1; // continue
      }
      var paramDesign = designSet.param[paramName];
      var multiValue = paramDesign && paramDesign.multiValue;
      if (multiValue && Array.isArray(value)) {
        value = value.map(function (val) {
          val = stringify._rfc6868Unescape(val);
          val = stringify.paramPropertyValue(val, paramDesign.multiValueSeparateDQuote);
          return val;
        });
        value = stringify.multiValue(value, multiValue, "unknown", null, designSet);
      } else {
        value = stringify._rfc6868Unescape(value);
        value = stringify.paramPropertyValue(value);
      }
      line += ';' + paramName.toUpperCase() + '=' + value;
    };
    for (var _i = 0, _Object$entries = Object.entries(params); _i < _Object$entries.length; _i++) {
      if (_loop()) continue;
    }
    if (property.length === 3) {
      // If there are no values, we must assume a blank value
      return line + ':';
    }
    var valueType = property[2];
    var propDetails;
    var multiValue = false;
    var structuredValue = false;
    var isDefault = false;
    if (jsName in designSet.property) {
      propDetails = designSet.property[jsName];
      if ('multiValue' in propDetails) {
        multiValue = propDetails.multiValue;
      }
      if ('structuredValue' in propDetails && Array.isArray(property[3])) {
        structuredValue = propDetails.structuredValue;
      }
      if ('defaultType' in propDetails) {
        if (valueType === propDetails.defaultType) {
          isDefault = true;
        }
      } else {
        if (valueType === DEFAULT_VALUE_TYPE) {
          isDefault = true;
        }
      }
    } else {
      if (valueType === DEFAULT_VALUE_TYPE) {
        isDefault = true;
      }
    }

    // push the VALUE property if type is not the default
    // for the current property.
    if (!isDefault) {
      // value will never contain ;/:/, so we don't escape it here.
      line += ';VALUE=' + valueType.toUpperCase();
    }
    line += ':';
    if (multiValue && structuredValue) {
      line += stringify.multiValue(property[3], structuredValue, valueType, multiValue, designSet, structuredValue);
    } else if (multiValue) {
      line += stringify.multiValue(property.slice(3), multiValue, valueType, null, designSet, false);
    } else if (structuredValue) {
      line += stringify.multiValue(property[3], structuredValue, valueType, null, designSet, structuredValue);
    } else {
      line += stringify.value(property[3], valueType, designSet, false);
    }
    return noFold ? line : foldline(line);
  };

  /**
   * Handles escaping of property values that may contain:
   *
   *    COLON (:), SEMICOLON (;), or COMMA (,)
   *
   * If any of the above are present the result is wrapped
   * in double quotes.
   *
   * @function ICAL.stringify.paramPropertyValue
   * @param {String} value      Raw property value
   * @param {boolean} force     If value should be escaped even when unnecessary
   * @return {String}           Given or escaped value when needed
   */
  stringify.paramPropertyValue = function (value, force) {
    if (!force && value.indexOf(',') === -1 && value.indexOf(':') === -1 && value.indexOf(';') === -1) {
      return value;
    }
    return '"' + value + '"';
  };

  /**
   * Converts an array of ical values into a single
   * string based on a type and a delimiter value (like ",").
   *
   * @function ICAL.stringify.multiValue
   * @param {Array} values      List of values to convert
   * @param {String} delim      Used to join the values (",", ";", ":")
   * @param {String} type       Lowecase ical value type
   *        (like boolean, date-time, etc..)
   * @param {?String} innerMulti If set, each value will again be processed
   *        Used for structured values
   * @param {designSet} designSet
   *        The design data to use for this property
   *
   * @return {String}           iCalendar/vCard string for value
   */
  stringify.multiValue = function (values, delim, type, innerMulti, designSet, structuredValue) {
    var result = '';
    var len = values.length;
    var i = 0;
    for (; i < len; i++) {
      if (innerMulti && Array.isArray(values[i])) {
        result += stringify.multiValue(values[i], innerMulti, type, null, designSet, structuredValue);
      } else {
        result += stringify.value(values[i], type, designSet, structuredValue);
      }
      if (i !== len - 1) {
        result += delim;
      }
    }
    return result;
  };

  /**
   * Processes a single ical value runs the associated "toICAL" method from the
   * design value type if available to convert the value.
   *
   * @function ICAL.stringify.value
   * @param {String|Number} value       A formatted value
   * @param {String} type               Lowercase iCalendar/vCard value type
   *  (like boolean, date-time, etc..)
   * @return {String}                   iCalendar/vCard value for single value
   */
  stringify.value = function (value, type, designSet, structuredValue) {
    if (type in designSet.value && 'toICAL' in designSet.value[type]) {
      return designSet.value[type].toICAL(value, structuredValue);
    }
    return value;
  };

  /**
   * Internal helper for rfc6868. Exposing this on ICAL.stringify so that
   * hackers can disable the rfc6868 parsing if the really need to.
   *
   * @param {String} val        The value to unescape
   * @return {String}           The escaped value
   */
  stringify._rfc6868Unescape = function (val) {
    return val.replace(/[\n^"]/g, function (x) {
      return RFC6868_REPLACE_MAP[x];
    });
  };

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/.
   * Portions Copyright (C) Philipp Kewisch */

  var NAME_INDEX$1 = 0;
  var PROP_INDEX = 1;
  var TYPE_INDEX = 2;
  var VALUE_INDEX = 3;

  /**
   * This lets typescript resolve our custom types in the
   * generated d.ts files (jsdoc typedefs are converted to typescript types).
   * Ignore prevents the typedefs from being documented more than once.
   * @ignore
   * @typedef {import("./types.js").designSet} designSet
   * Imports the 'designSet' type from the "types.js" module
   * @typedef {import("./types.js").Geo} Geo
   * Imports the 'Geo' type from the "types.js" module
   */

  /**
   * Provides a layer on top of the raw jCal object for manipulating a single property, with its
   * parameters and value.
   *
   * @memberof ICAL
   */
  var Property = /*#__PURE__*/function () {
    /**
     * Creates a new ICAL.Property instance.
     *
     * It is important to note that mutations done in the wrapper directly mutate the jCal object used
     * to initialize.
     *
     * Can also be used to create new properties by passing the name of the property (as a String).
     *
     * @param {Array|String} jCal         Raw jCal representation OR the new name of the property
     * @param {Component=} parent         Parent component
     */
    function Property(jCal, parent) {
      _classCallCheck(this, Property);
      this._parent = parent || null;
      if (typeof jCal === 'string') {
        // We are creating the property by name and need to detect the type
        this.jCal = [jCal, {}, design.defaultType];
        this.jCal[TYPE_INDEX] = this.getDefaultType();
      } else {
        this.jCal = jCal;
      }
      this._updateType();
    }

    /**
     * The value type for this property
     * @type {String}
     */
    return _createClass(Property, [{
      key: "type",
      get: function get() {
        return this.jCal[TYPE_INDEX];
      }

      /**
       * The name of this property, in lowercase.
       * @type {String}
       */
    }, {
      key: "name",
      get: function get() {
        return this.jCal[NAME_INDEX$1];
      }

      /**
       * The parent component for this property.
       * @type {Component}
       */
    }, {
      key: "parent",
      get: function get() {
        return this._parent;
      },
      set: function set(p) {
        // Before setting the parent, check if the design set has changed. If it
        // has, we later need to update the type if it was unknown before.
        var designSetChanged = !this._parent || p && p._designSet != this._parent._designSet;
        this._parent = p;
        if (this.type == design.defaultType && designSetChanged) {
          this.jCal[TYPE_INDEX] = this.getDefaultType();
          this._updateType();
        }
      }

      /**
       * The design set for this property, e.g. icalendar vs vcard
       *
       * @type {designSet}
       * @private
       */
    }, {
      key: "_designSet",
      get: function get() {
        return this.parent ? this.parent._designSet : design.defaultSet;
      }

      /**
       * Updates the type metadata from the current jCal type and design set.
       *
       * @private
       */
    }, {
      key: "_updateType",
      value: function _updateType() {
        var designSet = this._designSet;
        if (this.type in designSet.value) {
          if ('decorate' in designSet.value[this.type]) {
            this.isDecorated = true;
          } else {
            this.isDecorated = false;
          }
          if (this.name in designSet.property) {
            this.isMultiValue = 'multiValue' in designSet.property[this.name];
            this.isStructuredValue = 'structuredValue' in designSet.property[this.name];
          }
        }
      }

      /**
       * Hydrate a single value. The act of hydrating means turning the raw jCal
       * value into a potentially wrapped object, for example {@link ICAL.Time}.
       *
       * @private
       * @param {Number} index        The index of the value to hydrate
       * @return {?Object}             The decorated value.
       */
    }, {
      key: "_hydrateValue",
      value: function _hydrateValue(index) {
        if (this._values && this._values[index]) {
          return this._values[index];
        }

        // for the case where there is no value.
        if (this.jCal.length <= VALUE_INDEX + index) {
          return null;
        }
        if (this.isDecorated) {
          if (!this._values) {
            this._values = [];
          }
          return this._values[index] = this._decorate(this.jCal[VALUE_INDEX + index]);
        } else {
          return this.jCal[VALUE_INDEX + index];
        }
      }

      /**
       * Decorate a single value, returning its wrapped object. This is used by
       * the hydrate function to actually wrap the value.
       *
       * @private
       * @param {?} value         The value to decorate
       * @return {Object}         The decorated value
       */
    }, {
      key: "_decorate",
      value: function _decorate(value) {
        return this._designSet.value[this.type].decorate(value, this);
      }

      /**
       * Undecorate a single value, returning its raw jCal data.
       *
       * @private
       * @param {Object} value         The value to undecorate
       * @return {?}                   The undecorated value
       */
    }, {
      key: "_undecorate",
      value: function _undecorate(value) {
        return this._designSet.value[this.type].undecorate(value, this);
      }

      /**
       * Sets the value at the given index while also hydrating it. The passed
       * value can either be a decorated or undecorated value.
       *
       * @private
       * @param {?} value             The value to set
       * @param {Number} index        The index to set it at
       */
    }, {
      key: "_setDecoratedValue",
      value: function _setDecoratedValue(value, index) {
        if (!this._values) {
          this._values = [];
        }
        if (_typeof(value) === 'object' && 'icaltype' in value) {
          // decorated value
          this.jCal[VALUE_INDEX + index] = this._undecorate(value);
          this._values[index] = value;
        } else {
          // undecorated value
          this.jCal[VALUE_INDEX + index] = value;
          this._values[index] = this._decorate(value);
        }
      }

      /**
       * Gets a parameter on the property.
       *
       * @param {String}        name   Parameter name (lowercase)
       * @return {Array|String}        Parameter value
       */
    }, {
      key: "getParameter",
      value: function getParameter(name) {
        if (name in this.jCal[PROP_INDEX]) {
          return this.jCal[PROP_INDEX][name];
        } else {
          return undefined;
        }
      }

      /**
       * Gets first parameter on the property.
       *
       * @param {String}        name   Parameter name (lowercase)
       * @return {String}        Parameter value
       */
    }, {
      key: "getFirstParameter",
      value: function getFirstParameter(name) {
        var parameters = this.getParameter(name);
        if (Array.isArray(parameters)) {
          return parameters[0];
        }
        return parameters;
      }

      /**
       * Sets a parameter on the property.
       *
       * @param {String}       name     The parameter name
       * @param {Array|String} value    The parameter value
       */
    }, {
      key: "setParameter",
      value: function setParameter(name, value) {
        var lcname = name.toLowerCase();
        if (typeof value === "string" && lcname in this._designSet.param && 'multiValue' in this._designSet.param[lcname]) {
          value = [value];
        }
        this.jCal[PROP_INDEX][name] = value;
      }

      /**
       * Removes a parameter
       *
       * @param {String} name     The parameter name
       */
    }, {
      key: "removeParameter",
      value: function removeParameter(name) {
        delete this.jCal[PROP_INDEX][name];
      }

      /**
       * Get the default type based on this property's name.
       *
       * @return {String}     The default type for this property
       */
    }, {
      key: "getDefaultType",
      value: function getDefaultType() {
        var name = this.jCal[NAME_INDEX$1];
        var designSet = this._designSet;
        if (name in designSet.property) {
          var details = designSet.property[name];
          if ('defaultType' in details) {
            return details.defaultType;
          }
        }
        return design.defaultType;
      }

      /**
       * Sets type of property and clears out any existing values of the current
       * type.
       *
       * @param {String} type     New iCAL type (see design.*.values)
       */
    }, {
      key: "resetType",
      value: function resetType(type) {
        this.removeAllValues();
        this.jCal[TYPE_INDEX] = type;
        this._updateType();
      }

      /**
       * Finds the first property value.
       *
       * @return {Binary | Duration | Period |
       * Recur | Time | UtcOffset | Geo | string | null}         First property value
       */
    }, {
      key: "getFirstValue",
      value: function getFirstValue() {
        return this._hydrateValue(0);
      }

      /**
       * Gets all values on the property.
       *
       * NOTE: this creates an array during each call.
       *
       * @return {Array}          List of values
       */
    }, {
      key: "getValues",
      value: function getValues() {
        var len = this.jCal.length - VALUE_INDEX;
        if (len < 1) {
          // it is possible for a property to have no value.
          return [];
        }
        var i = 0;
        var result = [];
        for (; i < len; i++) {
          result[i] = this._hydrateValue(i);
        }
        return result;
      }

      /**
       * Removes all values from this property
       */
    }, {
      key: "removeAllValues",
      value: function removeAllValues() {
        if (this._values) {
          this._values.length = 0;
        }
        this.jCal.length = 3;
      }

      /**
       * Sets the values of the property.  Will overwrite the existing values.
       * This can only be used for multi-value properties.
       *
       * @param {Array} values    An array of values
       */
    }, {
      key: "setValues",
      value: function setValues(values) {
        if (!this.isMultiValue) {
          throw new Error(this.name + ': does not not support mulitValue.\n' + 'override isMultiValue');
        }
        var len = values.length;
        var i = 0;
        this.removeAllValues();
        if (len > 0 && _typeof(values[0]) === 'object' && 'icaltype' in values[0]) {
          this.resetType(values[0].icaltype);
        }
        if (this.isDecorated) {
          for (; i < len; i++) {
            this._setDecoratedValue(values[i], i);
          }
        } else {
          for (; i < len; i++) {
            this.jCal[VALUE_INDEX + i] = values[i];
          }
        }
      }

      /**
       * Sets the current value of the property. If this is a multi-value
       * property, all other values will be removed.
       *
       * @param {String|Object} value     New property value.
       */
    }, {
      key: "setValue",
      value: function setValue(value) {
        this.removeAllValues();
        if (_typeof(value) === 'object' && 'icaltype' in value) {
          this.resetType(value.icaltype);
        }
        if (this.isDecorated) {
          this._setDecoratedValue(value, 0);
        } else {
          this.jCal[VALUE_INDEX] = value;
        }
      }

      /**
       * Returns the Object representation of this component. The returned object
       * is a live jCal object and should be cloned if modified.
       * @return {Object}
       */
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.jCal;
      }

      /**
       * The string representation of this component.
       * @return {String}
       */
    }, {
      key: "toICALString",
      value: function toICALString() {
        return stringify.property(this.jCal, this._designSet, true);
      }
    }], [{
      key: "fromString",
      value:
      /**
       * Create an {@link ICAL.Property} by parsing the passed iCalendar string.
       *
       * @param {String} str            The iCalendar string to parse
       * @param {designSet=} designSet  The design data to use for this property
       * @return {Property}             The created iCalendar property
       */
      function fromString(str, designSet) {
        return new Property(parse.property(str, designSet));
      }
    }]);
  }();

  /**
   * This lets typescript resolve our custom types in the
   * generated d.ts files (jsdoc typedefs are converted to typescript types).
   * Ignore prevents the typedefs from being documented more than once.
   * @ignore
   * @typedef {import("./types.js").designSet} designSet
   * Imports the 'designSet' type from the "types.js" module
   * @typedef {import("./types.js").Geo} Geo
   * Imports the 'Geo' type from the "types.js" module
   */

  var NAME_INDEX = 0;
  var PROPERTY_INDEX = 1;
  var COMPONENT_INDEX = 2;

  /**
   * Wraps a jCal component, adding convenience methods to add, remove and update subcomponents and
   * properties.
   *
   * @memberof ICAL
   */
  var Component = /*#__PURE__*/function () {
    /**
     * Creates a new Component instance.
     *
     * @param {Array|String} jCal         Raw jCal component data OR name of new
     *                                      component
     * @param {Component=} parent     Parent component to associate
     */
    function Component(jCal, parent) {
      _classCallCheck(this, Component);
      /**
       * Hydrated properties are inserted into the _properties array at the same
       * position as in the jCal array, so it is possible that the array contains
       * undefined values for unhydrdated properties. To avoid iterating the
       * array when checking if all properties have been hydrated, we save the
       * count here.
       *
       * @type {Number}
       * @private
       */
      _defineProperty(this, "_hydratedPropertyCount", 0);
      /**
       * The same count as for _hydratedPropertyCount, but for subcomponents
       *
       * @type {Number}
       * @private
       */
      _defineProperty(this, "_hydratedComponentCount", 0);
      /**
       * A cache of hydrated time zone objects which may be used by consumers, keyed
       * by time zone ID.
       *
       * @type {Map}
       * @private
       */
      _defineProperty(this, "_timezoneCache", null);
      /**
       * @private
       */
      _defineProperty(this, "_components", null);
      /**
       * @private
       */
      _defineProperty(this, "_properties", null);
      if (typeof jCal === 'string') {
        // jCal spec (name, properties, components)
        jCal = [jCal, [], []];
      }

      // mostly for legacy reasons.
      this.jCal = jCal;
      this.parent = parent || null;
      if (!this.parent && this.name === 'vcalendar') {
        this._timezoneCache = new Map();
      }
    }
    return _createClass(Component, [{
      key: "name",
      get:
      /**
       * The name of this component
       *
       * @type {String}
       */
      function get() {
        return this.jCal[NAME_INDEX];
      }

      /**
       * The design set for this component, e.g. icalendar vs vcard
       *
       * @type {designSet}
       * @private
       */
    }, {
      key: "_designSet",
      get: function get() {
        var parentDesign = this.parent && this.parent._designSet;
        return parentDesign || design.getDesignSet(this.name);
      }

      /**
       * @private
       */
    }, {
      key: "_hydrateComponent",
      value: function _hydrateComponent(index) {
        if (!this._components) {
          this._components = [];
          this._hydratedComponentCount = 0;
        }
        if (this._components[index]) {
          return this._components[index];
        }
        var comp = new Component(this.jCal[COMPONENT_INDEX][index], this);
        this._hydratedComponentCount++;
        return this._components[index] = comp;
      }

      /**
       * @private
       */
    }, {
      key: "_hydrateProperty",
      value: function _hydrateProperty(index) {
        if (!this._properties) {
          this._properties = [];
          this._hydratedPropertyCount = 0;
        }
        if (this._properties[index]) {
          return this._properties[index];
        }
        var prop = new Property(this.jCal[PROPERTY_INDEX][index], this);
        this._hydratedPropertyCount++;
        return this._properties[index] = prop;
      }

      /**
       * Finds first sub component, optionally filtered by name.
       *
       * @param {String=} name        Optional name to filter by
       * @return {?Component}     The found subcomponent
       */
    }, {
      key: "getFirstSubcomponent",
      value: function getFirstSubcomponent(name) {
        if (name) {
          var i = 0;
          var comps = this.jCal[COMPONENT_INDEX];
          var len = comps.length;
          for (; i < len; i++) {
            if (comps[i][NAME_INDEX] === name) {
              var result = this._hydrateComponent(i);
              return result;
            }
          }
        } else {
          if (this.jCal[COMPONENT_INDEX].length) {
            return this._hydrateComponent(0);
          }
        }

        // ensure we return a value (strict mode)
        return null;
      }

      /**
       * Finds all sub components, optionally filtering by name.
       *
       * @param {String=} name            Optional name to filter by
       * @return {Component[]}       The found sub components
       */
    }, {
      key: "getAllSubcomponents",
      value: function getAllSubcomponents(name) {
        var jCalLen = this.jCal[COMPONENT_INDEX].length;
        var i = 0;
        if (name) {
          var comps = this.jCal[COMPONENT_INDEX];
          var result = [];
          for (; i < jCalLen; i++) {
            if (name === comps[i][NAME_INDEX]) {
              result.push(this._hydrateComponent(i));
            }
          }
          return result;
        } else {
          if (!this._components || this._hydratedComponentCount !== jCalLen) {
            for (; i < jCalLen; i++) {
              this._hydrateComponent(i);
            }
          }
          return this._components || [];
        }
      }

      /**
       * Returns true when a named property exists.
       *
       * @param {String} name     The property name
       * @return {Boolean}        True, when property is found
       */
    }, {
      key: "hasProperty",
      value: function hasProperty(name) {
        var props = this.jCal[PROPERTY_INDEX];
        var len = props.length;
        var i = 0;
        for (; i < len; i++) {
          // 0 is property name
          if (props[i][NAME_INDEX] === name) {
            return true;
          }
        }
        return false;
      }

      /**
       * Finds the first property, optionally with the given name.
       *
       * @param {String=} name        Lowercase property name
       * @return {?Property}     The found property
       */
    }, {
      key: "getFirstProperty",
      value: function getFirstProperty(name) {
        if (name) {
          var i = 0;
          var props = this.jCal[PROPERTY_INDEX];
          var len = props.length;
          for (; i < len; i++) {
            if (props[i][NAME_INDEX] === name) {
              var result = this._hydrateProperty(i);
              return result;
            }
          }
        } else {
          if (this.jCal[PROPERTY_INDEX].length) {
            return this._hydrateProperty(0);
          }
        }
        return null;
      }

      /**
       * Returns first property's value, if available.
       *
       * @param {String=} name                    Lowercase property name
       * @return {Binary | Duration | Period |
       * Recur | Time | UtcOffset | Geo | string | null}         The found property value.
       */
    }, {
      key: "getFirstPropertyValue",
      value: function getFirstPropertyValue(name) {
        var prop = this.getFirstProperty(name);
        if (prop) {
          return prop.getFirstValue();
        }
        return null;
      }

      /**
       * Get all properties in the component, optionally filtered by name.
       *
       * @param {String=} name        Lowercase property name
       * @return {Property[]}    List of properties
       */
    }, {
      key: "getAllProperties",
      value: function getAllProperties(name) {
        var jCalLen = this.jCal[PROPERTY_INDEX].length;
        var i = 0;
        if (name) {
          var props = this.jCal[PROPERTY_INDEX];
          var result = [];
          for (; i < jCalLen; i++) {
            if (name === props[i][NAME_INDEX]) {
              result.push(this._hydrateProperty(i));
            }
          }
          return result;
        } else {
          if (!this._properties || this._hydratedPropertyCount !== jCalLen) {
            for (; i < jCalLen; i++) {
              this._hydrateProperty(i);
            }
          }
          return this._properties || [];
        }
      }

      /**
       * @private
       */
    }, {
      key: "_removeObjectByIndex",
      value: function _removeObjectByIndex(jCalIndex, cache, index) {
        cache = cache || [];
        // remove cached version
        if (cache[index]) {
          var obj = cache[index];
          if ("parent" in obj) {
            obj.parent = null;
          }
        }
        cache.splice(index, 1);

        // remove it from the jCal
        this.jCal[jCalIndex].splice(index, 1);
      }

      /**
       * @private
       */
    }, {
      key: "_removeObject",
      value: function _removeObject(jCalIndex, cache, nameOrObject) {
        var i = 0;
        var objects = this.jCal[jCalIndex];
        var len = objects.length;
        var cached = this[cache];
        if (typeof nameOrObject === 'string') {
          for (; i < len; i++) {
            if (objects[i][NAME_INDEX] === nameOrObject) {
              this._removeObjectByIndex(jCalIndex, cached, i);
              return true;
            }
          }
        } else if (cached) {
          for (; i < len; i++) {
            if (cached[i] && cached[i] === nameOrObject) {
              this._removeObjectByIndex(jCalIndex, cached, i);
              return true;
            }
          }
        }
        return false;
      }

      /**
       * @private
       */
    }, {
      key: "_removeAllObjects",
      value: function _removeAllObjects(jCalIndex, cache, name) {
        var cached = this[cache];

        // Unfortunately we have to run through all children to reset their
        // parent property.
        var objects = this.jCal[jCalIndex];
        var i = objects.length - 1;

        // descending search required because splice
        // is used and will effect the indices.
        for (; i >= 0; i--) {
          if (!name || objects[i][NAME_INDEX] === name) {
            this._removeObjectByIndex(jCalIndex, cached, i);
          }
        }
      }

      /**
       * Adds a single sub component.
       *
       * @param {Component} component        The component to add
       * @return {Component}                 The passed in component
       */
    }, {
      key: "addSubcomponent",
      value: function addSubcomponent(component) {
        if (!this._components) {
          this._components = [];
          this._hydratedComponentCount = 0;
        }
        if (component.parent) {
          component.parent.removeSubcomponent(component);
        }
        var idx = this.jCal[COMPONENT_INDEX].push(component.jCal);
        this._components[idx - 1] = component;
        this._hydratedComponentCount++;
        component.parent = this;
        return component;
      }

      /**
       * Removes a single component by name or the instance of a specific
       * component.
       *
       * @param {Component|String} nameOrComp    Name of component, or component
       * @return {Boolean}                            True when comp is removed
       */
    }, {
      key: "removeSubcomponent",
      value: function removeSubcomponent(nameOrComp) {
        var removed = this._removeObject(COMPONENT_INDEX, '_components', nameOrComp);
        if (removed) {
          this._hydratedComponentCount--;
        }
        return removed;
      }

      /**
       * Removes all components or (if given) all components by a particular
       * name.
       *
       * @param {String=} name            Lowercase component name
       */
    }, {
      key: "removeAllSubcomponents",
      value: function removeAllSubcomponents(name) {
        var removed = this._removeAllObjects(COMPONENT_INDEX, '_components', name);
        this._hydratedComponentCount = 0;
        return removed;
      }

      /**
       * Adds an {@link ICAL.Property} to the component.
       *
       * @param {Property} property      The property to add
       * @return {Property}              The passed in property
       */
    }, {
      key: "addProperty",
      value: function addProperty(property) {
        if (!(property instanceof Property)) {
          throw new TypeError('must be instance of ICAL.Property');
        }
        if (!this._properties) {
          this._properties = [];
          this._hydratedPropertyCount = 0;
        }
        if (property.parent) {
          property.parent.removeProperty(property);
        }
        var idx = this.jCal[PROPERTY_INDEX].push(property.jCal);
        this._properties[idx - 1] = property;
        this._hydratedPropertyCount++;
        property.parent = this;
        return property;
      }

      /**
       * Helper method to add a property with a value to the component.
       *
       * @param {String}               name         Property name to add
       * @param {String|Number|Object} value        Property value
       * @return {Property}                    The created property
       */
    }, {
      key: "addPropertyWithValue",
      value: function addPropertyWithValue(name, value) {
        var prop = new Property(name);
        prop.setValue(value);
        this.addProperty(prop);
        return prop;
      }

      /**
       * Helper method that will update or create a property of the given name
       * and sets its value. If multiple properties with the given name exist,
       * only the first is updated.
       *
       * @param {String}               name         Property name to update
       * @param {String|Number|Object} value        Property value
       * @return {Property}                    The created property
       */
    }, {
      key: "updatePropertyWithValue",
      value: function updatePropertyWithValue(name, value) {
        var prop = this.getFirstProperty(name);
        if (prop) {
          prop.setValue(value);
        } else {
          prop = this.addPropertyWithValue(name, value);
        }
        return prop;
      }

      /**
       * Removes a single property by name or the instance of the specific
       * property.
       *
       * @param {String|Property} nameOrProp     Property name or instance to remove
       * @return {Boolean}                            True, when deleted
       */
    }, {
      key: "removeProperty",
      value: function removeProperty(nameOrProp) {
        var removed = this._removeObject(PROPERTY_INDEX, '_properties', nameOrProp);
        if (removed) {
          this._hydratedPropertyCount--;
        }
        return removed;
      }

      /**
       * Removes all properties associated with this component, optionally
       * filtered by name.
       *
       * @param {String=} name        Lowercase property name
       * @return {Boolean}            True, when deleted
       */
    }, {
      key: "removeAllProperties",
      value: function removeAllProperties(name) {
        var removed = this._removeAllObjects(PROPERTY_INDEX, '_properties', name);
        this._hydratedPropertyCount = 0;
        return removed;
      }

      /**
       * Returns the Object representation of this component. The returned object
       * is a live jCal object and should be cloned if modified.
       * @return {Object}
       */
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.jCal;
      }

      /**
       * The string representation of this component.
       * @return {String}
       */
    }, {
      key: "toString",
      value: function toString() {
        return stringify.component(this.jCal, this._designSet);
      }

      /**
       * Retrieve a time zone definition from the component tree, if any is present.
       * If the tree contains no time zone definitions or the TZID cannot be
       * matched, returns null.
       *
       * @param {String} tzid     The ID of the time zone to retrieve
       * @return {Timezone}  The time zone corresponding to the ID, or null
       */
    }, {
      key: "getTimeZoneByID",
      value: function getTimeZoneByID(tzid) {
        // VTIMEZONE components can only appear as a child of the VCALENDAR
        // component; walk the tree if we're not the root.
        if (this.parent) {
          return this.parent.getTimeZoneByID(tzid);
        }

        // If there is no time zone cache, we are probably parsing an incomplete
        // file and will have no time zone definitions.
        if (!this._timezoneCache) {
          return null;
        }
        if (this._timezoneCache.has(tzid)) {
          return this._timezoneCache.get(tzid);
        }

        // If the time zone is not already cached, hydrate it from the
        // subcomponents.
        var zones = this.getAllSubcomponents('vtimezone');
        var _iterator = _createForOfIteratorHelper(zones),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var zone = _step.value;
            if (zone.getFirstProperty('tzid').getFirstValue() === tzid) {
              var hydratedZone = new Timezone({
                component: zone,
                tzid: tzid
              });
              this._timezoneCache.set(tzid, hydratedZone);
              return hydratedZone;
            }
          }

          // Per the standard, we should always have a time zone defined in a file
          // for any referenced TZID, but don't blow up if the file is invalid.
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return null;
      }
    }], [{
      key: "fromString",
      value:
      /**
       * Create an {@link ICAL.Component} by parsing the passed iCalendar string.
       *
       * @param {String} str        The iCalendar string to parse
       */
      function fromString(str) {
        return new Component(parse.component(str));
      }
    }]);
  }();

  /**
   * Primary class for expanding recurring rules.  Can take multiple rrules, rdates, exdate(s) and
   * iterate (in order) over each next occurrence.
   *
   * Once initialized this class can also be serialized saved and continue iteration from the last
   * point.
   *
   * NOTE: it is intended that this class is to be used with {@link ICAL.Event} which handles recurrence
   * exceptions.
   *
   * @example
   * // assuming event is a parsed ical component
   * var event;
   *
   * var expand = new ICAL.RecurExpansion({
   *   component: event,
   *   dtstart: event.getFirstPropertyValue('dtstart')
   * });
   *
   * // remember there are infinite rules so it is a good idea to limit the scope of the iterations
   * // then resume later on.
   *
   * // next is always an ICAL.Time or null
   * var next;
   *
   * while (someCondition && (next = expand.next())) {
   *   // do something with next
   * }
   *
   * // save instance for later
   * var json = JSON.stringify(expand);
   *
   * //...
   *
   * // NOTE: if the component's properties have changed you will need to rebuild the class and start
   * // over. This only works when the component's recurrence info is the same.
   * var expand = new ICAL.RecurExpansion(JSON.parse(json));
   *
   * @memberof ICAL
   */
  var RecurExpansion = /*#__PURE__*/function () {
    /**
     * Creates a new ICAL.RecurExpansion instance.
     *
     * The options object can be filled with the specified initial values. It can also contain
     * additional members, as a result of serializing a previous expansion state, as shown in the
     * example.
     *
     * @param {Object} options
     *        Recurrence expansion options
     * @param {Time} options.dtstart
     *        Start time of the event
     * @param {Component=} options.component
     *        Component for expansion, required if not resuming.
     */
    function RecurExpansion(options) {
      _classCallCheck(this, RecurExpansion);
      /**
       * True when iteration is fully completed.
       * @type {Boolean}
       */
      _defineProperty(this, "complete", false);
      /**
       * Array of rrule iterators.
       *
       * @type {RecurIterator[]}
       * @private
       */
      _defineProperty(this, "ruleIterators", null);
      /**
       * Array of rdate instances.
       *
       * @type {Time[]}
       * @private
       */
      _defineProperty(this, "ruleDates", null);
      /**
       * Array of exdate instances.
       *
       * @type {Time[]}
       * @private
       */
      _defineProperty(this, "exDates", null);
      /**
       * Current position in ruleDates array.
       * @type {Number}
       * @private
       */
      _defineProperty(this, "ruleDateInc", 0);
      /**
       * Current position in exDates array
       * @type {Number}
       * @private
       */
      _defineProperty(this, "exDateInc", 0);
      /**
       * Current negative date.
       *
       * @type {Time}
       * @private
       */
      _defineProperty(this, "exDate", null);
      /**
       * Current additional date.
       *
       * @type {Time}
       * @private
       */
      _defineProperty(this, "ruleDate", null);
      /**
       * Start date of recurring rules.
       *
       * @type {Time}
       */
      _defineProperty(this, "dtstart", null);
      /**
       * Last expanded time
       *
       * @type {Time}
       */
      _defineProperty(this, "last", null);
      this.ruleDates = [];
      this.exDates = [];
      this.fromData(options);
    }
    return _createClass(RecurExpansion, [{
      key: "fromData",
      value:
      /**
       * Initialize the recurrence expansion from the data object. The options
       * object may also contain additional members, see the
       * {@link ICAL.RecurExpansion constructor} for more details.
       *
       * @param {Object} options
       *        Recurrence expansion options
       * @param {Time} options.dtstart
       *        Start time of the event
       * @param {Component=} options.component
       *        Component for expansion, required if not resuming.
       */
      function fromData(options) {
        var start = formatClassType(options.dtstart, Time);
        if (!start) {
          throw new Error('.dtstart (ICAL.Time) must be given');
        } else {
          this.dtstart = start;
        }
        if (options.component) {
          this._init(options.component);
        } else {
          this.last = formatClassType(options.last, Time) || start.clone();
          if (!options.ruleIterators) {
            throw new Error('.ruleIterators or .component must be given');
          }
          this.ruleIterators = options.ruleIterators.map(function (item) {
            return formatClassType(item, RecurIterator);
          });
          this.ruleDateInc = options.ruleDateInc;
          this.exDateInc = options.exDateInc;
          if (options.ruleDates) {
            this.ruleDates = options.ruleDates.map(function (item) {
              return formatClassType(item, Time);
            });
            this.ruleDate = this.ruleDates[this.ruleDateInc];
          }
          if (options.exDates) {
            this.exDates = options.exDates.map(function (item) {
              return formatClassType(item, Time);
            });
            this.exDate = this.exDates[this.exDateInc];
          }
          if (typeof options.complete !== 'undefined') {
            this.complete = options.complete;
          }
        }
      }

      /**
       * Retrieve the next occurrence in the series.
       * @return {Time}
       */
    }, {
      key: "next",
      value: function next() {
        var iter;
        var next;
        var compare;
        var maxTries = 500;
        var currentTry = 0;
        while (true) {
          if (currentTry++ > maxTries) {
            throw new Error('max tries have occurred, rule may be impossible to fulfill.');
          }
          next = this.ruleDate;
          iter = this._nextRecurrenceIter(this.last);

          // no more matches
          // because we increment the rule day or rule
          // _after_ we choose a value this should be
          // the only spot where we need to worry about the
          // end of events.
          if (!next && !iter) {
            // there are no more iterators or rdates
            this.complete = true;
            break;
          }

          // no next rule day or recurrence rule is first.
          if (!next || iter && next.compare(iter.last) > 0) {
            // must be cloned, recur will reuse the time element.
            next = iter.last.clone();
            // move to next so we can continue
            iter.next();
          }

          // if the ruleDate is still next increment it.
          if (this.ruleDate === next) {
            this._nextRuleDay();
          }
          this.last = next;

          // check the negative rules
          if (this.exDate) {
            compare = this.exDate.compare(this.last);
            if (compare < 0) {
              this._nextExDay();
            }

            // if the current rule is excluded skip it.
            if (compare === 0) {
              this._nextExDay();
              continue;
            }
          }

          //XXX: The spec states that after we resolve the final
          //     list of dates we execute exdate this seems somewhat counter
          //     intuitive to what I have seen most servers do so for now
          //     I exclude based on the original date not the one that may
          //     have been modified by the exception.
          return this.last;
        }
      }

      /**
       * Converts object into a serialize-able format. This format can be passed
       * back into the expansion to resume iteration.
       * @return {Object}
       */
    }, {
      key: "toJSON",
      value: function toJSON() {
        function toJSON(item) {
          return item.toJSON();
        }
        var result = Object.create(null);
        result.ruleIterators = this.ruleIterators.map(toJSON);
        if (this.ruleDates) {
          result.ruleDates = this.ruleDates.map(toJSON);
        }
        if (this.exDates) {
          result.exDates = this.exDates.map(toJSON);
        }
        result.ruleDateInc = this.ruleDateInc;
        result.exDateInc = this.exDateInc;
        result.last = this.last.toJSON();
        result.dtstart = this.dtstart.toJSON();
        result.complete = this.complete;
        return result;
      }

      /**
       * Extract all dates from the properties in the given component. The
       * properties will be filtered by the property name.
       *
       * @private
       * @param {Component} component             The component to search in
       * @param {String} propertyName             The property name to search for
       * @return {Time[]}                         The extracted dates.
       */
    }, {
      key: "_extractDates",
      value: function _extractDates(component, propertyName) {
        var result = [];
        var props = component.getAllProperties(propertyName);
        for (var i = 0, len = props.length; i < len; i++) {
          var _iterator = _createForOfIteratorHelper(props[i].getValues()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var prop = _step.value;
              var idx = binsearchInsert(result, prop, function (a, b) {
                return a.compare(b);
              });

              // ordered insert
              result.splice(idx, 0, prop);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return result;
      }

      /**
       * Initialize the recurrence expansion.
       *
       * @private
       * @param {Component} component    The component to initialize from.
       */
    }, {
      key: "_init",
      value: function _init(component) {
        this.ruleIterators = [];
        this.last = this.dtstart.clone();

        // to provide api consistency non-recurring
        // events can also use the iterator though it will
        // only return a single time.
        if (!component.hasProperty('rdate') && !component.hasProperty('rrule') && !component.hasProperty('recurrence-id')) {
          this.ruleDate = this.last.clone();
          this.complete = true;
          return;
        }
        if (component.hasProperty('rdate')) {
          this.ruleDates = this._extractDates(component, 'rdate');

          // special hack for cases where first rdate is prior
          // to the start date. We only check for the first rdate.
          // This is mostly for google's crazy recurring date logic
          // (contacts birthdays).
          if (this.ruleDates[0] && this.ruleDates[0].compare(this.dtstart) < 0) {
            this.ruleDateInc = 0;
            this.last = this.ruleDates[0].clone();
          } else {
            this.ruleDateInc = binsearchInsert(this.ruleDates, this.last, function (a, b) {
              return a.compare(b);
            });
          }
          this.ruleDate = this.ruleDates[this.ruleDateInc];
        }
        if (component.hasProperty('rrule')) {
          var rules = component.getAllProperties('rrule');
          var i = 0;
          var len = rules.length;
          var rule;
          var iter;
          for (; i < len; i++) {
            rule = rules[i].getFirstValue();
            iter = rule.iterator(this.dtstart);
            this.ruleIterators.push(iter);

            // increment to the next occurrence so future
            // calls to next return times beyond the initial iteration.
            // XXX: I find this suspicious might be a bug?
            iter.next();
          }
        }
        if (component.hasProperty('exdate')) {
          this.exDates = this._extractDates(component, 'exdate');
          // if we have a .last day we increment the index to beyond it.
          this.exDateInc = binsearchInsert(this.exDates, this.last, function (a, b) {
            return a.compare(b);
          });
          this.exDate = this.exDates[this.exDateInc];
        }
      }

      /**
       * Advance to the next exdate
       * @private
       */
    }, {
      key: "_nextExDay",
      value: function _nextExDay() {
        this.exDate = this.exDates[++this.exDateInc];
      }

      /**
       * Advance to the next rule date
       * @private
       */
    }, {
      key: "_nextRuleDay",
      value: function _nextRuleDay() {
        this.ruleDate = this.ruleDates[++this.ruleDateInc];
      }

      /**
       * Find and return the recurrence rule with the most recent event and
       * return it.
       *
       * @private
       * @return {?RecurIterator}    Found iterator.
       */
    }, {
      key: "_nextRecurrenceIter",
      value: function _nextRecurrenceIter() {
        var iters = this.ruleIterators;
        if (iters.length === 0) {
          return null;
        }
        var len = iters.length;
        var iter;
        var iterTime;
        var iterIdx = 0;
        var chosenIter;

        // loop through each iterator
        for (; iterIdx < len; iterIdx++) {
          iter = iters[iterIdx];
          iterTime = iter.last;

          // if iteration is complete
          // then we must exclude it from
          // the search and remove it.
          if (iter.completed) {
            len--;
            if (iterIdx !== 0) {
              iterIdx--;
            }
            iters.splice(iterIdx, 1);
            continue;
          }

          // find the most recent possible choice
          if (!chosenIter || chosenIter.last.compare(iterTime) > 0) {
            // that iterator is saved
            chosenIter = iter;
          }
        }

        // the chosen iterator is returned but not mutated
        // this iterator contains the most recent event.
        return chosenIter;
      }
    }]);
  }();

  /**
   * This lets typescript resolve our custom types in the
   * generated d.ts files (jsdoc typedefs are converted to typescript types).
   * Ignore prevents the typedefs from being documented more than once.
   * @ignore
   * @typedef {import("./types.js").frequencyValues} frequencyValues
   * Imports the 'frequencyValues' type from the "types.js" module
   * @typedef {import("./types.js").occurrenceDetails} occurrenceDetails
   * Imports the 'occurrenceDetails' type from the "types.js" module
   */

  /**
   * ICAL.js is organized into multiple layers. The bottom layer is a raw jCal
   * object, followed by the component/property layer. The highest level is the
   * event representation, which this class is part of. See the
   * {@tutorial layers} guide for more details.
   *
   * @memberof ICAL
   */
  var Event = /*#__PURE__*/function () {
    /**
     * Creates a new ICAL.Event instance.
     *
     * @param {Component=} component              The ICAL.Component to base this event on
     * @param {Object} [options]                  Options for this event
     * @param {Boolean=} options.strictExceptions  When true, will verify exceptions are related by
     *                                              their UUID
     * @param {Array<Component|Event>=} options.exceptions
     *          Exceptions to this event, either as components or events. If not
     *            specified exceptions will automatically be set in relation of
     *            component's parent
     */
    function Event(component, options) {
      _classCallCheck(this, Event);
      /**
       * List of related event exceptions.
       *
       * @type {Event[]}
       */
      _defineProperty(this, "exceptions", null);
      /**
       * When true, will verify exceptions are related by their UUID.
       *
       * @type {Boolean}
       */
      _defineProperty(this, "strictExceptions", false);
      if (!(component instanceof Component)) {
        options = component;
        component = null;
      }
      if (component) {
        this.component = component;
      } else {
        this.component = new Component('vevent');
      }
      this._rangeExceptionCache = Object.create(null);
      this.exceptions = Object.create(null);
      this.rangeExceptions = [];
      if (options && options.strictExceptions) {
        this.strictExceptions = options.strictExceptions;
      }
      if (options && options.exceptions) {
        options.exceptions.forEach(this.relateException, this);
      } else if (this.component.parent && !this.isRecurrenceException()) {
        this.component.parent.getAllSubcomponents('vevent').forEach(function (event) {
          if (event.hasProperty('recurrence-id')) {
            this.relateException(event);
          }
        }, this);
      }
    }
    return _createClass(Event, [{
      key: "relateException",
      value:
      /**
       * Relates a given event exception to this object.  If the given component
       * does not share the UID of this event it cannot be related and will throw
       * an exception.
       *
       * If this component is an exception it cannot have other exceptions
       * related to it.
       *
       * @param {Component|Event} obj       Component or event
       */
      function relateException(obj) {
        if (this.isRecurrenceException()) {
          throw new Error('cannot relate exception to exceptions');
        }
        if (obj instanceof Component) {
          obj = new Event(obj);
        }
        if (this.strictExceptions && obj.uid !== this.uid) {
          throw new Error('attempted to relate unrelated exception');
        }
        var id = obj.recurrenceId.toString();

        // we don't sort or manage exceptions directly
        // here the recurrence expander handles that.
        this.exceptions[id] = obj;

        // index RANGE=THISANDFUTURE exceptions so we can
        // look them up later in getOccurrenceDetails.
        if (obj.modifiesFuture()) {
          var item = [obj.recurrenceId.toUnixTime(), id];

          // we keep them sorted so we can find the nearest
          // value later on...
          var idx = binsearchInsert(this.rangeExceptions, item, compareRangeException);
          this.rangeExceptions.splice(idx, 0, item);
        }
      }

      /**
       * Checks if this record is an exception and has the RANGE=THISANDFUTURE
       * value.
       *
       * @return {Boolean}        True, when exception is within range
       */
    }, {
      key: "modifiesFuture",
      value: function modifiesFuture() {
        if (!this.component.hasProperty('recurrence-id')) {
          return false;
        }
        var range = this.component.getFirstProperty('recurrence-id').getParameter('range');
        return range === Event.THISANDFUTURE;
      }

      /**
       * Finds the range exception nearest to the given date.
       *
       * @param {Time} time   usually an occurrence time of an event
       * @return {?Event}     the related event/exception or null
       */
    }, {
      key: "findRangeException",
      value: function findRangeException(time) {
        if (!this.rangeExceptions.length) {
          return null;
        }
        var utc = time.toUnixTime();
        var idx = binsearchInsert(this.rangeExceptions, [utc], compareRangeException);
        idx -= 1;

        // occurs before
        if (idx < 0) {
          return null;
        }
        var rangeItem = this.rangeExceptions[idx];

        /* c8 ignore next 4 */
        if (utc < rangeItem[0]) {
          // sanity check only
          return null;
        }
        return rangeItem[1];
      }

      /**
       * Returns the occurrence details based on its start time.  If the
       * occurrence has an exception will return the details for that exception.
       *
       * NOTE: this method is intend to be used in conjunction
       *       with the {@link ICAL.Event#iterator iterator} method.
       *
       * @param {Time} occurrence               time occurrence
       * @return {occurrenceDetails}            Information about the occurrence
       */
    }, {
      key: "getOccurrenceDetails",
      value: function getOccurrenceDetails(occurrence) {
        var id = occurrence.toString();
        var utcId = occurrence.convertToZone(Timezone.utcTimezone).toString();
        var item;
        var result = {
          //XXX: Clone?
          recurrenceId: occurrence
        };
        if (id in this.exceptions) {
          item = result.item = this.exceptions[id];
          result.startDate = item.startDate;
          result.endDate = item.endDate;
          result.item = item;
        } else if (utcId in this.exceptions) {
          item = this.exceptions[utcId];
          result.startDate = item.startDate;
          result.endDate = item.endDate;
          result.item = item;
        } else {
          // range exceptions (RANGE=THISANDFUTURE) have a
          // lower priority then direct exceptions but
          // must be accounted for first. Their item is
          // always the first exception with the range prop.
          var rangeExceptionId = this.findRangeException(occurrence);
          var end;
          if (rangeExceptionId) {
            var exception = this.exceptions[rangeExceptionId];

            // range exception must modify standard time
            // by the difference (if any) in start/end times.
            result.item = exception;
            var startDiff = this._rangeExceptionCache[rangeExceptionId];
            if (!startDiff) {
              var original = exception.recurrenceId.clone();
              var newStart = exception.startDate.clone();

              // zones must be same otherwise subtract may be incorrect.
              original.zone = newStart.zone;
              startDiff = newStart.subtractDate(original);
              this._rangeExceptionCache[rangeExceptionId] = startDiff;
            }
            var start = occurrence.clone();
            start.zone = exception.startDate.zone;
            start.addDuration(startDiff);
            end = start.clone();
            end.addDuration(exception.duration);
            result.startDate = start;
            result.endDate = end;
          } else {
            // no range exception standard expansion
            end = occurrence.clone();
            end.addDuration(this.duration);
            result.endDate = end;
            result.startDate = occurrence;
            result.item = this;
          }
        }
        return result;
      }

      /**
       * Builds a recur expansion instance for a specific point in time (defaults
       * to startDate).
       *
       * @param {Time=} startTime     Starting point for expansion
       * @return {RecurExpansion}    Expansion object
       */
    }, {
      key: "iterator",
      value: function iterator(startTime) {
        return new RecurExpansion({
          component: this.component,
          dtstart: startTime || this.startDate
        });
      }

      /**
       * Checks if the event is recurring
       *
       * @return {Boolean}        True, if event is recurring
       */
    }, {
      key: "isRecurring",
      value: function isRecurring() {
        var comp = this.component;
        return comp.hasProperty('rrule') || comp.hasProperty('rdate');
      }

      /**
       * Checks if the event describes a recurrence exception. See
       * {@tutorial terminology} for details.
       *
       * @return {Boolean}    True, if the event describes a recurrence exception
       */
    }, {
      key: "isRecurrenceException",
      value: function isRecurrenceException() {
        return this.component.hasProperty('recurrence-id');
      }

      /**
       * Returns the types of recurrences this event may have.
       *
       * Returned as an object with the following possible keys:
       *
       *    - YEARLY
       *    - MONTHLY
       *    - WEEKLY
       *    - DAILY
       *    - MINUTELY
       *    - SECONDLY
       *
       * @return {Object.<frequencyValues, Boolean>}
       *          Object of recurrence flags
       */
    }, {
      key: "getRecurrenceTypes",
      value: function getRecurrenceTypes() {
        var rules = this.component.getAllProperties('rrule');
        var i = 0;
        var len = rules.length;
        var result = Object.create(null);
        for (; i < len; i++) {
          var value = rules[i].getFirstValue();
          result[value.freq] = true;
        }
        return result;
      }

      /**
       * The uid of this event
       * @type {String}
       */
    }, {
      key: "uid",
      get: function get() {
        return this._firstProp('uid');
      },
      set: function set(value) {
        this._setProp('uid', value);
      }

      /**
       * The start date
       * @type {Time}
       */
    }, {
      key: "startDate",
      get: function get() {
        return this._firstProp('dtstart');
      },
      set: function set(value) {
        this._setTime('dtstart', value);
      }

      /**
       * The end date. This can be the result directly from the property, or the
       * end date calculated from start date and duration. Setting the property
       * will remove any duration properties.
       * @type {Time}
       */
    }, {
      key: "endDate",
      get: function get() {
        var endDate = this._firstProp('dtend');
        if (!endDate) {
          var duration = this._firstProp('duration');
          endDate = this.startDate.clone();
          if (duration) {
            endDate.addDuration(duration);
          } else if (endDate.isDate) {
            endDate.day += 1;
          }
        }
        return endDate;
      },
      set: function set(value) {
        if (this.component.hasProperty('duration')) {
          this.component.removeProperty('duration');
        }
        this._setTime('dtend', value);
      }

      /**
       * The duration. This can be the result directly from the property, or the
       * duration calculated from start date and end date. Setting the property
       * will remove any `dtend` properties.
       * @type {Duration}
       */
    }, {
      key: "duration",
      get: function get() {
        var duration = this._firstProp('duration');
        if (!duration) {
          return this.endDate.subtractDateTz(this.startDate);
        }
        return duration;
      },
      set: function set(value) {
        if (this.component.hasProperty('dtend')) {
          this.component.removeProperty('dtend');
        }
        this._setProp('duration', value);
      }

      /**
       * The location of the event.
       * @type {String}
       */
    }, {
      key: "location",
      get: function get() {
        return this._firstProp('location');
      },
      set: function set(value) {
        this._setProp('location', value);
      }

      /**
       * The attendees in the event
       * @type {Property[]}
       */
    }, {
      key: "attendees",
      get: function get() {
        //XXX: This is way lame we should have a better
        //     data structure for this later.
        return this.component.getAllProperties('attendee');
      }

      /**
       * The event summary
       * @type {String}
       */
    }, {
      key: "summary",
      get: function get() {
        return this._firstProp('summary');
      },
      set: function set(value) {
        this._setProp('summary', value);
      }

      /**
       * The event description.
       * @type {String}
       */
    }, {
      key: "description",
      get: function get() {
        return this._firstProp('description');
      },
      set: function set(value) {
        this._setProp('description', value);
      }

      /**
       * The event color from [rfc7986](https://datatracker.ietf.org/doc/html/rfc7986)
       * @type {String}
       */
    }, {
      key: "color",
      get: function get() {
        return this._firstProp('color');
      },
      set: function set(value) {
        this._setProp('color', value);
      }

      /**
       * The organizer value as an uri. In most cases this is a mailto: uri, but
       * it can also be something else, like urn:uuid:...
       * @type {String}
       */
    }, {
      key: "organizer",
      get: function get() {
        return this._firstProp('organizer');
      },
      set: function set(value) {
        this._setProp('organizer', value);
      }

      /**
       * The sequence value for this event. Used for scheduling
       * see {@tutorial terminology}.
       * @type {Number}
       */
    }, {
      key: "sequence",
      get: function get() {
        return this._firstProp('sequence');
      },
      set: function set(value) {
        this._setProp('sequence', value);
      }

      /**
       * The recurrence id for this event. See {@tutorial terminology} for details.
       * @type {Time}
       */
    }, {
      key: "recurrenceId",
      get: function get() {
        return this._firstProp('recurrence-id');
      },
      set: function set(value) {
        this._setTime('recurrence-id', value);
      }

      /**
       * Set/update a time property's value.
       * This will also update the TZID of the property.
       *
       * TODO: this method handles the case where we are switching
       * from a known timezone to an implied timezone (one without TZID).
       * This does _not_ handle the case of moving between a known
       *  (by TimezoneService) timezone to an unknown timezone...
       *
       * We will not add/remove/update the VTIMEZONE subcomponents
       *  leading to invalid ICAL data...
       * @private
       * @param {String} propName     The property name
       * @param {Time} time           The time to set
       */
    }, {
      key: "_setTime",
      value: function _setTime(propName, time) {
        var prop = this.component.getFirstProperty(propName);
        if (!prop) {
          prop = new Property(propName);
          this.component.addProperty(prop);
        }

        // utc and local don't get a tzid
        if (time.zone === Timezone.localTimezone || time.zone === Timezone.utcTimezone) {
          // remove the tzid
          prop.removeParameter('tzid');
        } else {
          prop.setParameter('tzid', time.zone.tzid);
        }
        prop.setValue(time);
      }
    }, {
      key: "_setProp",
      value: function _setProp(name, value) {
        this.component.updatePropertyWithValue(name, value);
      }
    }, {
      key: "_firstProp",
      value: function _firstProp(name) {
        return this.component.getFirstPropertyValue(name);
      }

      /**
       * The string representation of this event.
       * @return {String}
       */
    }, {
      key: "toString",
      value: function toString() {
        return this.component.toString();
      }
    }]);
  }();
  _defineProperty(Event, "THISANDFUTURE", 'THISANDFUTURE');
  function compareRangeException(a, b) {
    if (a[0] > b[0]) return 1;
    if (b[0] > a[0]) return -1;
    return 0;
  }

  /**
   * The ComponentParser is used to process a String or jCal Object,
   * firing callbacks for various found components, as well as completion.
   *
   * @example
   * var options = {
   *   // when false no events will be emitted for type
   *   parseEvent: true,
   *   parseTimezone: true
   * };
   *
   * var parser = new ICAL.ComponentParser(options);
   *
   * parser.onevent(eventComponent) {
   *   //...
   * }
   *
   * // ontimezone, etc...
   *
   * parser.oncomplete = function() {
   *
   * };
   *
   * parser.process(stringOrComponent);
   *
   * @memberof ICAL
   */
  var ComponentParser = /*#__PURE__*/function () {
    /**
     * Creates a new ICAL.ComponentParser instance.
     *
     * @param {Object=} options                   Component parser options
     * @param {Boolean} options.parseEvent        Whether events should be parsed
     * @param {Boolean} options.parseTimezeone    Whether timezones should be parsed
     */
    function ComponentParser(options) {
      _classCallCheck(this, ComponentParser);
      /**
       * When true, parse events
       *
       * @type {Boolean}
       */
      _defineProperty(this, "parseEvent", true);
      /**
       * When true, parse timezones
       *
       * @type {Boolean}
       */
      _defineProperty(this, "parseTimezone", true);
      /* SAX like events here for reference */
      /**
       * Fired when parsing is complete
       * @callback
       */
      _defineProperty(this, "oncomplete", /* c8 ignore next */function () {});
      /**
       * Fired if an error occurs during parsing.
       *
       * @callback
       * @param {Error} err details of error
       */
      _defineProperty(this, "onerror", /* c8 ignore next */function (err) {});
      /**
       * Fired when a top level component (VTIMEZONE) is found
       *
       * @callback
       * @param {Timezone} component     Timezone object
       */
      _defineProperty(this, "ontimezone", /* c8 ignore next */function (component) {});
      /**
       * Fired when a top level component (VEVENT) is found.
       *
       * @callback
       * @param {Event} component    Top level component
       */
      _defineProperty(this, "onevent", /* c8 ignore next */function (component) {});
      if (typeof options === 'undefined') {
        options = {};
      }
      for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        this[key] = value;
      }
    }
    return _createClass(ComponentParser, [{
      key: "process",
      value:
      /**
       * Process a string or parse ical object.  This function itself will return
       * nothing but will start the parsing process.
       *
       * Events must be registered prior to calling this method.
       *
       * @param {Component|String|Object} ical      The component to process,
       *        either in its final form, as a jCal Object, or string representation
       */
      function process(ical) {
        //TODO: this is sync now in the future we will have a incremental parser.
        if (typeof ical === 'string') {
          ical = parse(ical);
        }
        if (!(ical instanceof Component)) {
          ical = new Component(ical);
        }
        var components = ical.getAllSubcomponents();
        var i = 0;
        var len = components.length;
        var component;
        for (; i < len; i++) {
          component = components[i];
          switch (component.name) {
            case 'vtimezone':
              if (this.parseTimezone) {
                var tzid = component.getFirstPropertyValue('tzid');
                if (tzid) {
                  this.ontimezone(new Timezone({
                    tzid: tzid,
                    component: component
                  }));
                }
              }
              break;
            case 'vevent':
              if (this.parseEvent) {
                this.onevent(new Event(component));
              }
              break;
            default:
              continue;
          }
        }

        //XXX: ideally we should do a "nextTick" here
        //     so in all cases this is actually async.
        this.oncomplete();
      }
    }]);
  }();

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/.
   * Portions Copyright (C) Philipp Kewisch */

  /**
   * The main ICAL module. Provides access to everything else.
   *
   * @alias ICAL
   * @namespace ICAL
   * @property {ICAL.design} design
   * @property {ICAL.helpers} helpers
   */
  var ICALmodule = {
    /**
     * The number of characters before iCalendar line folding should occur
     * @type {Number}
     * @default 75
     */
    foldLength: 75,
    debug: false,
    /**
     * The character(s) to be used for a newline. The default value is provided by
     * rfc5545.
     * @type {String}
     * @default "\r\n"
     */
    newLineChar: '\r\n',
    Binary: Binary,
    Component: Component,
    ComponentParser: ComponentParser,
    Duration: Duration,
    Event: Event,
    Period: Period,
    Property: Property,
    Recur: Recur,
    RecurExpansion: RecurExpansion,
    RecurIterator: RecurIterator,
    Time: Time,
    Timezone: Timezone,
    TimezoneService: TimezoneService,
    UtcOffset: UtcOffset,
    VCardTime: VCardTime,
    parse: parse,
    stringify: stringify,
    design: design,
    helpers: helpers
  };

  return ICALmodule;

}));
