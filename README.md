# React CDN Vision

Resize, crop, and process images in the cloud, simply by changing their URLs.

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-cdnvision.svg?style=flat-square
[npm-url]: https://www.npmjs.com/react-cdnvision
[github-url]: https://github.com/CherryProjects/react-cdnvision


## Install
```sh
npm install react-cdnvision
```

# Support us

Star this project on [GitHub][github-url].

## Usage

### Basic example

```js
import { Component } from 'react';
import CDNVisionProvider, { Img } from 'react-cdnvision';

export default class Example extends Component {
  render() {
    return (
      <CDNVisionProvider name="your-name">
        <Img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Cirrus_sky_panorama.jpg" alt="my image" width="200" />
      </CDNVisionProvider>
    );
  }
}
```

will render

```html
<img src="http://image.cdnvision.com/your-name/https://upload.wikimedia.org/wikipedia/commons/3/36/Cirrus_sky_panorama.jpg?width=200" width="200" alt="my image" />
```

### Cover example

```js
import { Component } from 'react';
import CDNVisionProvider, { Cover } from 'react-cdnvision';

export default class Example extends Component {
  render() {
    return (
      <CDNVisionProvider name="your-name">
        <Cover src="https://upload.wikimedia.org/wikipedia/commons/3/36/Cirrus_sky_panorama.jpg" width="1600">
          <h1>This is text inside cover image</h1>
        </Cover>
      </CDNVisionProvider>
    );
  }
}
```

will render

```html
<div style="background-size: cover; background-position: center;background-image: http://image.cdnvision.com/your-name/https://upload.wikimedia.org/wikipedia/commons/3/36/Cirrus_sky_panorama.jpg?width=1600;">
  <h1>This is text inside cover image</h1>
</div>
```
