'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _windowControls = require('./window-controls');

var _menu = require('./menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TitleBar = exports.TitleBar = ({ icon, menu, disableMinimize, disableMaximize, className }) => _react2.default.createElement(
  'div',
  { id: 'electron-app-title-bar', className: `electron-app-title-bar ${className || ''}` },
  _react2.default.createElement('link', { href: __dirname + "/../assets/style.css", rel: 'stylesheet' }),
  _react2.default.createElement('div', { className: 'resize-handle resize-handle-top' }),
  _react2.default.createElement('div', { className: 'resize-handle resize-handle-left' }),
  _react2.default.createElement('img', { className: 'icon', src: icon }),
  _react2.default.createElement(_menu.MenuBar, { menu: menu }),
  _react2.default.createElement(_windowControls.WindowControls, { disableMinimize: disableMinimize, disableMaximize: disableMaximize })
);

TitleBar.propTypes = {
  icon: _propTypes2.default.string,
  disableMinimize: _propTypes2.default.bool,
  disableMaximize: _propTypes2.default.bool,
  menu: _propTypes2.default.array
};