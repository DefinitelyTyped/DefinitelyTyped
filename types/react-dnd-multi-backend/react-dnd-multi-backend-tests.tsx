import * as React from 'react';
import { createDragDropManager } from 'dnd-core';
import MultiBackend, { createTransition, TouchTransition, Backends, Preview } from 'react-dnd-multi-backend';
import HTML5ToTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
import TouchBackend from 'react-dnd-touch-backend';

const context = {};

/**
 * Most common use case - using the default HTML5 with Touch as a fallback.
 */
const multiDndComponent = createDragDropManager(MultiBackend(HTML5ToTouch), context);

/**
 * Creating a custom list of backends, including creating a touch transition.
 */
const CustomBackends: Backends = {
    backends: [
    {
        backend: TouchBackend({ enableMouseEvents: false }),
        preview: true,
        transition: createTransition('touchstart', (event: TouchEvent) => {
            return event.touches != null;
        })
    },
    {
        backend: TouchBackend({}),
        transition: TouchTransition
    }]
};
const multiCustomBackendsComponent = createDragDropManager(MultiBackend(CustomBackends), context);

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
