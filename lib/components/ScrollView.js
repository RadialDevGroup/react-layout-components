'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Scrollable Container
 */
var ScrollView = function (_Component) {
  _inherits(ScrollView, _Component);

  function ScrollView(props) {
    _classCallCheck(this, ScrollView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollView).apply(this, arguments));

    _this._onScroll = function (event) {
      var scrollPos = _this.props.horizontal ? event.currentTarget.scrollLeft : event.currentTarget.scrollTop;

      // fire a custom onScroll if provided
      if (_this.props.onScroll) {
        _this.props.onScroll(scrollPos);
      }

      _this.setState({ scrollPos: scrollPos });
    };

    _this.scrollToStart = function () {
      _this.setState({ scrollPos: 'start' });
    };

    _this.scrollToEnd = function () {
      _this.setState({ scrollPos: 'end' });
    };

    _this.getScrollPosition = function () {
      return _this.state.scrollPos;
    };

    _this.scrollTo = function (scrollPosition) {
      _this.setState({ scrollPos: scrollPosition });
    };

    _this.componentWillUpdate = function () {
      if (_this.state.scrollPos === 'end') {
        var DOMNode = (0, _reactDom.findDOMNode)(_this);

        if (_this.props.horizontal) {
          DOMNode.scrollLeft = DOMNode.scrollWidth - DOMNode.offsetWidth;
          _this.setState({ scrollPos: DOMNode.scrollLeft });
        } else {
          DOMNode.scrollTop = DOMNode.scrollHeight - DOMNode.offsetHeight;
          _this.setState({ scrollPos: DOMNode.scrollTop });
        }
      } else if (_this.state.scrollPos === 'start') {
        var _DOMNode = (0, _reactDom.findDOMNode)(_this);

        if (_this.props.horizontal) {
          _DOMNode.scrollLeft = 0;
        } else {
          _DOMNode.scrollTop = 0;
        }

        _this.setState({ scrollPos: 0 });
      }
    };

    _this.state = { scrollPos: props.initialScrollPos };
    return _this;
  }

  _createClass(ScrollView, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      var styles = {
        overflowY: props.horizontal ? 'hidden' : 'auto',
        overflowX: props.horizontal ? 'auto' : 'hidden'
      };
      return _react2.default.createElement(_Box2.default, _extends({}, props, { column: !props.horizontal, style: _extends({}, styles, props.style), onScroll: this._onScroll }));
    }
  }]);

  return ScrollView;
}(_react.Component);

ScrollView.defaultProps = {
  horizontal: false,
  initialScrollPos: 0
};
ScrollView.propTypes = {
  width: _react.PropTypes.any,
  height: _react.PropTypes.any,
  horizontal: _react.PropTypes.bool,
  initialScrollPos: _react.PropTypes.number
};
exports.default = ScrollView;
module.exports = exports['default'];