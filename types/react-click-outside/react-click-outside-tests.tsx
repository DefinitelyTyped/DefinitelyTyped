import * as React from 'react';
import { render } from 'react-dom';
import enhanceWithClickOutside = require('react-click-outside');

interface Props {
    text: string;
}

interface State {
    isOpened: boolean;
}

class StatefulComponent extends React.Component<Props, State> {
    state = { isOpened: true };

    handleClickOutside() {
        this.setState({ isOpened: false });
    }

  render() {
        return <div>{this.props.text}</div>;
    }
}

@enhanceWithClickOutside
class ComponentWithDecorator extends React.Component<Props, State> {
    state = { isOpened: true };

    handleClickOutside() {
        this.setState({ isOpened: false });
    }

  render() {
      return <div>{this.props.text}</div>;
    }
}

const ClickOutsideStatefulComponent = enhanceWithClickOutside(StatefulComponent);

render(<ClickOutsideStatefulComponent text="" />, document.getElementById('test'));
render(<ComponentWithDecorator text="" />, document.getElementById('test'));
