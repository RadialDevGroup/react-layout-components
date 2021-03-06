'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warn = require('../utils/warn');

var _warn2 = _interopRequireDefault(_warn);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Container Component
 */
var Container = function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var styles = {};

      if (props.fixed) {
        styles.position = 'fixed';
      }
      if (props.absolute) {
        styles.position = 'absolute';
      }

      var paddingProps = ['padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'];
      var marginProps = ['margin', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom'];
      var borderProps = ['border', 'borderWidth', 'borderColor', 'borderStyle', 'borderLeft', 'borderRight', 'borderTop', 'borderBottom'];
      var positionProps = ['top', 'left', 'bottom', 'right'];
      var overflowProps = ['overflow', 'overflowX', 'overflowY', 'textOverflow', 'whiteSpace'];
      var containerProps = ['boxSizing'].concat(paddingProps, marginProps, borderProps, positionProps, overflowProps);

      // resolving all container properties
      containerProps.forEach(function (prop) {
        if (props[prop]) {
          styles[prop] = props[prop];
        }
      });

      // resolving the border shortcuts
      var borderShortcutProps = ['borderTop', 'borderWidth', 'borderRight', 'borderLeft'];
      borderShortcutProps.forEach(function (prop) {
        if (props[prop] === true) {
          if (props.borderWidth) {
            styles[prop + 'Width'] = props.borderWidth;
          } else {
            (0, _warn2.default)('Using border shortcuts such as borderTop={true} requires a borderWidth to be set. There will be no special border added.');
          }
        }
      });

      return _react2.default.createElement(_Box2.default, _extends({}, props, { style: _extends({}, styles, props.style) }));
    }
  }]);

  return Container;
}(_react.Component);

exports.default = Container;
module.exports = exports['default'];