import React, { PropTypes } from 'react';
import Provider from './Provider';

export default class Img {
  static contextTypes = {
    ...Provider.childContextTypes,
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    options: PropTypes.object,
  };

  render() {
    const { src, alt, options = {}, width, height } = this.props;

    const { cdnVisionClient } = this.context;
    const url = cdnVisionClient.getImageURL({
      width,
      height,
      ...options,
      path: src,
    });

    const imgProps = {
      ...this.props,
      options: void 0,
    };

    return <img {...imgProps} src={url} alt={alt} />;
  }
}
