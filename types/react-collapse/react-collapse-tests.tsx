import * as React from 'react';
import { Collapse, UnmountClosed } from 'react-collapse';

class TestRequired extends React.Component {
    render() {
        return (
            <div>
                <Collapse
                    isOpened>
                    <div/>
                </Collapse>
                <UnmountClosed
                    isOpened>
                    <div/>
                </UnmountClosed>
            </div>
        );
    }
}

class TestAll extends React.Component {
    render() {
        const springConfig = {
            stiffness: 1,
            damping: 1,
            precision: 1,
        };

        const theme = {
            collapse: 'collapse-class',
            content: 'content-class'
        };

        const style: React.CSSProperties = {
            fontWeight: 'bold',
            fontSize: 16
        };

        const onRender = (object: { current: number; from: number; to: number; }) => {};
        const onRest = () => {};
        const onMeasure = (object: { width: number; height: number }) => {};

        return (
            <div>
                <Collapse
                    isOpened
                    springConfig={ springConfig }
                    forceInitialAnimation
                    hasNestedCollapse
                    fixedHeight={ 0 }
                    theme={ theme }
                    style={ style }
                    onRender={ onRender }
                    onRest={ onRest }
                    onMeasure={ onMeasure}>
                    <div/>
                </Collapse>
                <UnmountClosed
                    isOpened
                    springConfig={ springConfig }
                    forceInitialAnimation
                    hasNestedCollapse
                    fixedHeight={ 0 }
                    theme={ theme }
                    style={ style }
                    onRender={ onRender }
                    onRest={ onRest }
                    onMeasure={ onMeasure}>
                    <div/>
                </UnmountClosed>
            </div>
        );
    }
}
