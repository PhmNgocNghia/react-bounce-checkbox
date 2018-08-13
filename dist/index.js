var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: ', 'px;\n  height: ', 'px ;\n\n  & > label {\n    width: ', 'px;\n    height: ', 'px;\n    border: 2px solid ', '\n\n    &::before {\n      width: ', 'px;\n      height: ', 'px;\n      bottom: ', 'px;\n      left: ', 'px;\n    }\n\n    @keyframes CheckAnimation {\n      0% {\n        width: 0px;\n        height: 0px\n      }\n\n      50% {\n        width: ', 'px;\n        height: 0px\n      }\n\n      100% {\n        width: ', 'px;\n        height: ', 'px;\n      }\n    }\n\n  }\n'], ['\n  width: ', 'px;\n  height: ', 'px ;\n\n  & > label {\n    width: ', 'px;\n    height: ', 'px;\n    border: 2px solid ', '\n\n    &::before {\n      width: ', 'px;\n      height: ', 'px;\n      bottom: ', 'px;\n      left: ', 'px;\n    }\n\n    @keyframes CheckAnimation {\n      0% {\n        width: 0px;\n        height: 0px\n      }\n\n      50% {\n        width: ', 'px;\n        height: 0px\n      }\n\n      100% {\n        width: ', 'px;\n        height: ', 'px;\n      }\n    }\n\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './checkbox.css';
import './checkbox_theme.css';

var CheckboxWrapper = styled.div(_templateObject, function (props) {
  return props.size;
}, function (props) {
  return props.size + 5;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.borderColor;
}, function (props) {
  return props.size / 4;
}, function (props) {
  return props.size / 2;
}, function (props) {
  return props.size / 2;
}, function (props) {
  return props.size / 6;
}, function (props) {
  return props.size / 4;
}, function (props) {
  return props.size / 4;
}, function (props) {
  return props.size / 2;
});

var BouncyCheckbox = function (_Component) {
  _inherits(BouncyCheckbox, _Component);

  function BouncyCheckbox() {
    _classCallCheck(this, BouncyCheckbox);

    return _possibleConstructorReturn(this, (BouncyCheckbox.__proto__ || Object.getPrototypeOf(BouncyCheckbox)).apply(this, arguments));
  }

  _createClass(BouncyCheckbox, [{
    key: 'makeid',
    value: function makeid() {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          onChange = _props.onChange,
          checked = _props.checked,
          size = _props.size,
          modifierClass = _props.modifierClass,
          text = _props.text,
          textClassName = _props.textClassName,
          className = _props.className;

      var _id = id || this.makeid();
      var _size = size || 20;
      var _modifierClass = modifierClass || 'blue';

      return React.createElement(
        'div',
        { className: 'bouncechk ' + (className || '') },
        React.createElement(
          CheckboxWrapper,
          { size: _size, className: 'bouncechk__wrapper' },
          React.createElement('input', { onChange: onChange, checked: checked, type: 'checkbox', className: 'bouncechk__input', id: _id }),
          React.createElement('label', { className: 'bouncechk__label bouncechk__label--' + _modifierClass, htmlFor: _id })
        ),
        React.createElement(
          'span',
          { className: textClassName },
          text
        )
      );
    }
  }]);

  return BouncyCheckbox;
}(Component);

BouncyCheckbox.propTypes = {
  id: PropTypes.string,
  size: PropTypes.number,
  modifierClass: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  modifier: PropTypes.string,
  textClassName: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string
};
export default BouncyCheckbox;