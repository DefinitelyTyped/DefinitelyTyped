import * as React from 'react';
import Popover = require('react-popover');

class Test extends React.Component {
    render() {
        return (
            <Popover
                body={<div>body</div>}
                isOpen
                preferPlace="above"
                place="below"
                onOuterAction={event => console.log(event)}
                refreshIntervalMs={10}
                enterExitTransitionDurationMs={10}
                tipSize={10}
                className="xxx"
                style={{ display: 'block' }}
                target={<div>target</div>}
                appendTarget={document.createElement('div')}
            />
        );
    }
}
