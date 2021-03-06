'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bool = _react.PropTypes.bool,
    node = _react.PropTypes.node,
    string = _react.PropTypes.string;
var FabAction = (_temp = _class = function (_Component) {
  _inherits(FabAction, _Component);

  function FabAction() {
    _classCallCheck(this, FabAction);

    return _possibleConstructorReturn(this, (FabAction.__proto__ || Object.getPrototypeOf(FabAction)).apply(this, arguments));
  }

  _createClass(FabAction, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          tooltip = _props.tooltip,
          props = _objectWithoutProperties(_props, ['active', 'children', 'className', 'tooltip']);

      var buttonClassName = (0, _classnames2.default)(className, 'fab-action', {
        'fab-action--active': active
      });

      var tooltipClassName = (0, _classnames2.default)('fab-action__tooltip', {
        'fab-action__tooltip--active': active
      });

      var button = _react2.default.createElement(
        'button',
        _extends({ className: buttonClassName }, props),
        _react2.default.Children.map(children, function (element, index) {
          var options = {
            active: active,
            key: index
          };

          if (_react2.default.isValidElement(element)) {
            return _react2.default.cloneElement(element, options);
          } else {
            return element;
          }
        })
      );

      if (tooltip) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: tooltipClassName },
            tooltip
          ),
          button
        );
      } else {
        return button;
      }
    }
  }]);

  return FabAction;
}(_react.Component), _class.propTypes = {
  active: bool,
  children: node,
  className: string,
  tooltip: string
}, _class.defaultProps = {
  className: ''
}, _temp);
exports.default = FabAction;