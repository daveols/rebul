(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames'], factory) :
	(factory((global['Container/index'] = {}),global.React,global.PropTypes,global.classNames));
}(this, (function (exports,React,PropTypes,classNames) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;

var CONTAINER_SIZES = ['fluid', 'desktop', 'widescreen', 'fullhd'];

var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      size = _ref.size;
  return React.createElement(
    'div',
    { className: classNames('container', size ? 'is-' + size : '', className || '') },
    children
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Available values: `fluid`, `desktop`, `widescreen`, `fullhd` */
  size: PropTypes.oneOf(CONTAINER_SIZES)
};

Container.defaultProps = {
  className: null,
  size: null
};

Container.__docgenInfo = {
  'description': '',
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    },
    'className': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    },
    'size': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '\'fluid\'',
          'computed': false
        }, {
          'value': '\'desktop\'',
          'computed': false
        }, {
          'value': '\'widescreen\'',
          'computed': false
        }, {
          'value': '\'fullhd\'',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Available values: `fluid`, `desktop`, `widescreen`, `fullhd`',
      'defaultValue': {
        'value': 'null',
        'computed': false
      }
    }
  }
};

exports.Container = Container;
exports['default'] = Container;

Object.defineProperty(exports, '__esModule', { value: true });

})));
