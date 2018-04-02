import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  children,
  color,
  element,
  isInverted,
  isLoading,
  isOutlined,
  isRounded,
  isSelected,
  isStatic,
  size,
  state,
  ...props
}) => {
  const Element = element;
  return (
    <Element
      className={`button ${classNames(
        color ? `is-${color}` : '',
        size ? `is-${size}` : '',
        isInverted ? 'is-inverted' : '',
        isLoading ? 'is-loading' : '',
        isOutlined ? 'is-outlined' : '',
        isRounded ? 'is-rounded' : '',
        isSelected ? 'is-selected' : '',
        isStatic ? 'is-static' : '',
        state ? `is-${state}` : ''
      )}`}
      {...props}
    >
      {children}
    </Element>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'white',
    'light',
    'dark',
    'black',
    'text',
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger'
  ]),
  element: PropTypes.string,
  isInverted: PropTypes.bool,
  isLoading: PropTypes.bool,
  isOutlined: PropTypes.bool,
  isRounded: PropTypes.bool,
  isSelected: PropTypes.bool,
  isStatic: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  state: PropTypes.oneOf(['hovered', 'active', 'focused'])
};

Button.defaultProps = {
  children: null,
  color: null,
  element: 'button',
  isInverted: false,
  isLoading: false,
  isOutlined: false,
  isRounded: false,
  isSelected: false,
  isStatic: false,
  size: null,
  state: null
};

export default Button;