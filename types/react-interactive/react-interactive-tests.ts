import * as React from "react";
import Interactive from 'react-interactive';

class InteractiveDiv extends React.Component {
    
    private handleInteractiveStateChange(e: Event) => {}
    
    private handleClick(e: Event) => {}

    public render() {
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