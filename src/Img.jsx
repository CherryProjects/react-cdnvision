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
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    options: PropTypes.object,

    gravity: PropTypes.string,
    fit: PropTypes.string,
    limit: PropTypes.string,

    name: PropTypes.string,
    protocol: PropTypes.string,
  };

  render() {
    const { src, alt, options = {}, width, height, name, protocol, gravity, fit, limit } = this.props;

    const cdnVisionClient = name
      ? new Client({ name, protocol })
      : this.context.cdnVisionClient;

    const url = cdnVisionClient.getImageURL({
      width,
      height,
      gravity,
      fit,
      limit,
      ...options,
      path: src,
    });

    const imgProps = {
      ...this.props,
      width: void 0,
      height: void 0,
      options: void 0,
      name: void 0,
      gravity: void 0,
      fit: void 0,
      limit: void 0,
    };

    return <img {...imgProps} src={url} alt={alt} />;
  }
}
