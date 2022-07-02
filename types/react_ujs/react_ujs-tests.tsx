import React = require('react');
import ReactRailsUJS = require('react_ujs');
import { handleMount, mountComponents, unmountComponents, useContext } from 'react_ujs';

function TestComponent() {
    return <div>Hello world</div>;
}

ReactRailsUJS.getConstructor = (className: string) => TestComponent;
// @ts-expect-error
ReactRailsUJS.getConstructor = (className: string) => <TestComponent />;
// @ts-expect-error
ReactRailsUJS.getConstructor = (className: string) => <div />;

// @ts-expect-error
ReactRailsUJS.components[''] = TestComponent;
ReactRailsUJS.components[''] = <TestComponent />;
ReactRailsUJS.components[''] = <div />;

const components = [TestComponent];

ReactRailsUJS.useContext(() => ({ default: TestComponent }));
ReactRailsUJS.useContext((id: string) => components[id.length]);
// @ts-expect-error
ReactRailsUJS.useContext((id: number) => components[id]);

// useContext, mountComponents, etc. require ReactRailsUJS as the `this` context.
ReactRailsUJS.useContext(() => ({ default: TestComponent }));
ReactRailsUJS.mountComponents();
ReactRailsUJS.unmountComponents();
// @ts-expect-error
useContext(() => ({ default: TestComponent }));
// @ts-expect-error
mountComponents();
// @ts-expect-error
unmountComponents();
const a = { mountComponents };
// @ts-expect-error
a.mountComponents();

handleMount();
handleMount({ target: undefined });
handleMount({ target: document });
// @ts-expect-error
handleMount({ target: 1 });
document.addEventListener('DOMContentLoaded', ReactRailsUJS.handleMount);
