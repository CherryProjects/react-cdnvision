import { Component, PropTypes, Children } from 'react';
import Client from 'cdnvision';

export default class Provider extends Component {
  static propTypes = {
    protocol: PropTypes.string,
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  static childContextTypes = {
    cdnVisionClient: PropTypes.object.isRequired,
  };

  getChildContext() {
    const { name, protocol } = this.props;
    const client = new Client({
      name,
      protocol,
    });

    return {
      cdnVisionClient: client,
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}
