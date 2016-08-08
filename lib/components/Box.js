'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inlineStylePrefixAll = require('inline-style-prefix-all');

var _inlineStylePrefixAll2 = _interopRequireDefault(_inlineStylePrefixAll);

var _warn = require('../utils/warn');

var _warn2 = _interopRequireDefault(_warn);

var _omit = require('../utils/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Flexbox Component
 */
var Box = function (_Component) {
  _inherits(Box, _Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Box).apply(this, arguments));
  }

  _createClass(Box, [{
    key: 'render',
    value: function render() {

      var alignProps = ['order', 'justifyContent', 'alignItems', 'alignSelf', 'alignContent'];
      var sizeProps = ['width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight'];
      var flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis'];
      var boxProps = [].concat(alignProps, sizeProps);

      var layoutProps = [].concat(_toConsumableArray(boxProps), flexProps, ['column', 'row', 'wrap', 'inline', 'center', 'fit']);

      var childProps = (0, _omit2.default)(this.props, layoutProps);
      var props = this.props;
      var styles = {};

      // shortcut props
      if (props.fit) {
        styles.width = '100%';
        styles.height = '100%';
      }
      if (props.center) {
        styles.justifyContent = 'center';
        styles.alignItems = 'center';
      }

      // resolving inline-flex display style
      if (props.inline) {
        styles.display = 'inline-' + styles.display;
      }

      // resolving the flow properties flex-wrap and flex-direction
      if (props.wrap) {
        styles.flexWrap = 'wrap';
        if (props.wrap === 'reverse') {
          styles.flexWrap += '-reverse';
        }
      }
      if (props.column) {
        styles.flexDirection = 'column';
        if (props.reverse) {
          styles.flexDirection += '-reverse';
        }
      } else {
        if (props.reverse) {
          styles.flexDirection = 'row-reverse';
        }
      }

      // resolving all box properties
      boxProps.forEach(function (prop) {
        if (props[prop]) {
          styles[prop] = props[prop];
        }
      });

      // resolving flex properties and its shortcut
      flexProps.forEach(function (prop) {
        if (props[prop]) {
          if (styles.flex) {
            (0, _warn2.default)('Do not use both shortcut `flex` property and single `grow`, `shrink` or `basis`.', 'Those will overwrite the previously set `flex` value.');
          }
          styles[prop] = props[prop];
        }
      });

      // processing styles and normalizing flexbox specifications
      var prefixedStyles = (0, _inlineStylePrefixAll2.default)(styles);
      var className = (props.className || '') + ' react-layout-components--box';
      return _react2.default.createElement(
        'div',
        _extends({}, childProps, { className: className, style: _extends({}, prefixedStyles, props.style) }),
        props.children
      );
    }
  }]);

  return Box;
}(_react.Component);

exports.default = Box;
module.exports = exports['default'];