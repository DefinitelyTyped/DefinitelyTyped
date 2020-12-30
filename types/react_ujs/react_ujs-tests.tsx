import React = require('react');
import ReactRailsUJS = require('react_ujs');
import { handleMount, mountComponents, unmountComponents, useContext } from 'react_ujs';

function TestComponent() {
    return <div>Hello world</div>;
}

ReactRailsUJS.getConstructor = (className: string) => TestComponent;
ReactRailsUJS.getConstructor = (className: string) => <TestComponent />; // $ExpectError
ReactRailsUJS.getConstructor = (className: string) => <div />; // $ExpectError

ReactRailsUJS.components[''] = TestComponent; // $ExpectError
ReactRailsUJS.components[''] = <TestComponent />;
ReactRailsUJS.components[''] = <div />;

const components = [TestComponent];

ReactRailsUJS.useContext(() => ({ default: TestComponent }));
ReactRailsUJS.useContext((id: string) => components[id.length]);
ReactRailsUJS.useContext((id: number) => components[id]); // $ExpectError

// useContext, mountComponents, etc. require ReactRailsUJS as the `this` context.
ReactRailsUJS.useContext(() => ({ default: TestComponent }));
ReactRailsUJS.mountComponents();
ReactRailsUJS.unmountComponents();
useContext(() => ({ default: TestComponent })); // $ExpectError
mountComponents(); // $ExpectError
unmountComponents(); // $ExpectError
const a = { mountComponents };
a.mountComponents(); // $ExpectError

handleMount();
handleMount({ target: undefined });
handleMount({ target: document });
handleMount({ target: 1 }); // $ExpectError
document.addEventListener('DOMContentLoaded', ReactRailsUJS.handleMount);
