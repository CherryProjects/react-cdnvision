import React, { Component, PropTypes } from 'react';
import Provider from './Provider';

const defaultStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export default class Cover extends Component {
  static contextTypes = {
    ...Provider.childContextTypes,
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    options: PropTypes.object,
    children: PropTypes.node,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  render() {
    const { style, className, src, children, options = {}, width, height } = this.props;
    const { cdnVisionClient } = this.context;
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
}
