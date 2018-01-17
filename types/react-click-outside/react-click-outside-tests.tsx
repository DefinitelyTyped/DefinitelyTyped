import * as React from 'react';
import { render } from 'react-dom';
import * as enhanceWithClickOutside from 'react-click-outside';

interface Props {
    text: string;
}

interface State {
    isOpened: boolean;
}

class StatefulComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { isOpened: true };
    }

    handleClickOutside() {
        this.setState({ isOpened: false });
    }

  render() {
        return <div>{this.props.text}</div>;
    }
}

const ClickOutsideStatefulComponent = enhanceWithClickOutside(StatefulComponent);

render(<ClickOutsideStatefulComponent text="" />, document.getElementById('test'));
