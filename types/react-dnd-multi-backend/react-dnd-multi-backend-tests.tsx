// Examples based on documentation at https://github.com/LouisBrunner/react-dnd-multi-backend

import * as React from 'react';
import * as ReactDnd from 'react-dnd';
import MultiBackend, { Backends, createTransition, Preview, TouchTransition, HTML5DragTransition } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';

const component = () => null;

/**
 * Most common use case - using the default HTML5 with Touch as a fallback.
 */
const multiDndComponent = ReactDnd.DragDropContext(MultiBackend(HTML5toTouch))(component);

/**
 * Creating a custom list of backends, including creating a touch transition.
 */
const CustomBackends: Backends = {
    backends: [{
        backend: HTML5Backend
    },
    {
        backend: TouchBackend({ enableMouseEvents: false }),
        preview: true,
        transition: createTransition('touchstart', (event: TouchEvent) => {
            return event.touches != null;
        })
    },
    {
        backend: HTML5Backend,
        transition: HTML5DragTransition,
        preview: true
    },
    {
        backend: TouchBackend({}),
        transition: TouchTransition
    }]
};
const multiCustomBackendsComponent = ReactDnd.DragDropContext(MultiBackend(CustomBackends))(component);

/**
 * Testing the Preview component.
 */
class App extends React.Component {
    generator = (type: string, item: any, style: React.CSSProperties) =>
        (type === 'card')
            ? <div style={style}>{item.label}</div>
            : <div />

    render() {
        return (
            <div>
                <Preview generator={this.generator} />
                <div>A page of text</div>
            </div>
        );
    }
}
