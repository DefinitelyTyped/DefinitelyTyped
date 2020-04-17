import * as React from 'react';
import { DndProvider } from 'react-dnd';
import MultiBackend, { createTransition, TouchTransition, Backends, Preview } from 'react-dnd-multi-backend';
import HTML5ToTouchEsm from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import HTML5ToTouchCjs from 'react-dnd-multi-backend/dist/cjs/HTML5toTouch';
import TouchBackend from 'react-dnd-touch-backend';

const context = {};

/**
 * Most common use case - using the default HTML5 with Touch as a fallback.
 */
const multiDndComponentEsm = (
    <DndProvider backend={MultiBackend} options={HTML5ToTouchEsm}>
        <div>A page of Text</div>
    </DndProvider>
);
const multiDndComponentCjs = (
    <DndProvider backend={MultiBackend} options={HTML5ToTouchCjs}>
        <div>A page of Text</div>
    </DndProvider>
);

/**
 * Creating a custom list of backends, including creating a touch transition.
 */
const CustomBackends: Backends = {
    backends: [
    {
        backend: TouchBackend,
        options: { enableMouseEvents: false },
        preview: true,
        transition: createTransition('touchstart', (event: TouchEvent) => {
            return event.touches != null;
        })
    },
    {
        backend: TouchBackend,
        transition: TouchTransition
    }]
};
const multiCustomBackendsComponent = (
    <DndProvider backend={MultiBackend} options={CustomBackends}>
        <div>A page of Text</div>
    </DndProvider>
);

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
