import React, { Component, PropTypes } from 'react';
import Provider from './Provider';
import Client from 'cdnvision';

export default class Img extends Component {
  static contextTypes = {
    cdnVisionClient: PropTypes.object,
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    options: PropTypes.object,

    name: PropTypes.string,
    protocol: PropTypes.string,
  };

  render() {
    const { src, alt, options = {}, width, height, name, protocol } = this.props;

    const cdnVisionClient = name
      ? new Client({ name, protocol })
      : this.context.cdnVisionClient;

    const url = cdnVisionClient.getImageURL({
      width,
      height,
      ...options,
      path: src,
    });

    const imgProps = {
      ...this.props,
      options: void 0,
      name: void 0,
    };

    return <img {...imgProps} src={url} alt={alt} />;
  }
}
