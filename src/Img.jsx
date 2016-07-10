import React, { PropTypes } from 'react';
import Client from 'cdnvision';

function clearProps(props) {
  const newProps = {
    ...props,
  };

  delete newProps.width;
  delete newProps.height;
  delete newProps.options;
  delete newProps.name;
  delete newProps.gravity;
  delete newProps.fit;
  delete newProps.limit;
  delete newProps.quality;

  return newProps;
}

export default function Img(props, context) {
  const {
    src,
    alt,
    options = {},
    width,
    height,
    name,
    protocol,
    gravity,
    fit,
    limit,
    quality,
  } = props;

  const cdnVisionClient = name
    ? new Client({ name, protocol })
    : context.cdnVisionClient;

  const url = cdnVisionClient.getImageURL({
    width,
    height,
    gravity,
    fit,
    limit,
    quality,
    ...options,
    path: src,
  });

  return <img {...clearProps(props)} src={url} alt={alt} />;
}

Img.contextTypes = {
  cdnVisionClient: PropTypes.object,
};

Img.propTypes = {
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
  quality: PropTypes.oneOfType([
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
