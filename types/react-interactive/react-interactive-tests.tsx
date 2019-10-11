import * as React from "react";
import Interactive, { State } from 'react-interactive';

class InteractiveDiv extends React.Component {
    private handleInteractiveStateChange(arg0: {prevState: State, nextState: State, event: React.SyntheticEvent}): void {}
    private handleClick(e: React.SyntheticEvent): void {}

    render() {
        return (<Interactive
            as="div"
            hover={{ color: 'green' }}
            active={{ color: 'blue' }}
            focus={{ outline: '2px solid green' }}
            onStateChange={this.handleInteractiveStateChange}
            onClick={this.handleClick}
            style={{ fontSize: '16px', padding: '3px', color: 'black' }}
        >This is an interactive and focusable div</Interactive>);
    }
}

export default InteractiveDiv;
