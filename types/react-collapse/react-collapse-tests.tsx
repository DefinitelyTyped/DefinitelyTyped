import * as React from 'react';
import { Collapse, UnmountClosed } from 'react-collapse';

class TestRequired extends React.Component {
    render() {
        return (
            <div>
                <Collapse isOpened>
                    <div />
                </Collapse>
                <UnmountClosed isOpened>
                    <div />
                </UnmountClosed>
            </div>
        );
    }
}

class TestAll extends React.Component {
    render() {
        const theme = {
            collapse: 'collapse-class',
            content: 'content-class',
        };

        const onRest = () => {};
        const onWork = () => {};

        const initialStyle = {
            height: 200,
            overflow: 'auto',
        };

        return (
            <div>
                <Collapse isOpened initialStyle={initialStyle} theme={theme} onRest={onRest} onWork={onWork}>
                    <div />
                </Collapse>
                <UnmountClosed isOpened initialStyle={initialStyle} theme={theme} onRest={onRest} onWork={onWork}>
                    <div />
                </UnmountClosed>
            </div>
        );
    }
}
