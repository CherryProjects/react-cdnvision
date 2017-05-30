import React from 'react';
import PropTypes from 'prop-types';
import Provider from './Provider';

const defaultStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export default function Cover(props, context) {
  const { style, className, src, children, options = {}, width, height } = props;
  const { cdnVisionClient } = context;
  const url = cdnVisionClient.getImageURL({
    width,
    height,
    ...options,
    path: src,
  });

  const finallStyle = {
    ...defaultStyle,
    ...style,
    backgroundImage: url,
  };

  return (
    <div style={finallStyle} className={className}>
      {children}
    </div>
  );
}

Cover.contextTypes = {
  ...Provider.childContextTypes,
};

Cover.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.object,
  children: PropTypes.node,
  width: PropTypes.number,
  height: PropTypes.number,
};
