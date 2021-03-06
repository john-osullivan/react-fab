'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FabButton = require('./FabButton');

var _FabButton2 = _interopRequireDefault(_FabButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var node = _react.PropTypes.node;
var Fab = (_temp2 = _class = function (_Component) {
  _inherits(Fab, _Component);

  function Fab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fab.__proto__ || Object.getPrototypeOf(Fab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false
    }, _this.handleToggle = function () {
      _this.setState({
        active: !_this.state.active
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fab, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['children']);

      var active = this.state.active;


      if (children === null || typeof children === 'undefined' || children.length === 0) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        _extends({ className: 'fab-container' }, props),
        _react2.default.Children.map(children, function (element, index) {
          var options = {
            active: active,
            key: index
          };

          if (element && element.type === _FabButton2.default) {
            options.onClick = _this2.handleToggle;
          }

          if (_react2.default.isValidElement(element)) {
            return _react2.default.cloneElement(element, options);
          } else {
            return element;
          }
        })
      );
    }
  }]);

  return Fab;
}(_react.Component), _class.propTypes = {
  children: node
}, _temp2);
exports.default = Fab;