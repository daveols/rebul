import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Image = ({ alt, className, size, src, ...props }) => (
  <figure className={classNames('image', size ? `is-${size}x${size}` : '', className || '')} {...props}>
    <img src={src} alt={alt} />
  </figure>
);

Image.propTypes = {
  /** Image alt text */
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  /** Size of image. Available values: `16`, `24`, `32`, `48`, `64`, `96`, `128` */
  size: PropTypes.oneOf(['16', '24', '32', '48', '64', '96', '128']).isRequired,
  /** Image source URL */
  src: PropTypes.string.isRequired
};

Image.defaultProps = {
  className: null
};

export default Image;
