/// <reference types="../experimental"/>

import React = require('react');

function suspenseTest() {
    function DisplayData() {
        return null;
    }

    function FlameChart() {
        return (
            <React.Suspense fallback="computing..." unstable_expectedLoadTime={2000}>
                <DisplayData />
            </React.Suspense>
        );
    }
}

// Unsupported `revealOrder` triggers a runtime warning
// $ExpectError
<React.SuspenseList revealOrder="something">
    <React.Suspense fallback="Loading">Content</React.Suspense>
</React.SuspenseList>;

<React.SuspenseList revealOrder="backwards">
    <React.Suspense fallback="Loading">A</React.Suspense>
    <React.Suspense fallback="Loading">B</React.Suspense>
</React.SuspenseList>;

<React.SuspenseList revealOrder="forwards">
    <React.Suspense fallback="Loading">A</React.Suspense>
    <React.Suspense fallback="Loading">B</React.Suspense>
</React.SuspenseList>;

<React.SuspenseList revealOrder="together">
    <React.Suspense fallback="Loading">A</React.Suspense>
    <React.Suspense fallback="Loading">B</React.Suspense>
</React.SuspenseList>;

// We need these Window interfaces to compile
interface Window {
    location: {
        href: string;
        pathname: string;
    };
    addEventListener(type: string, callback: () => void): void;
    removeEventListener(type: string, callback: () => void): void;
}

const noop = () => {};

const window: Window = { location: { href: '', pathname: '' }, addEventListener: noop, removeEventListener: noop };

const locationSource = React.unstable_createMutableSource(window, () => window.location.href);

const getSnapshot = (window: Window) => window.location.pathname;

const subscribe: React.MutableSourceSubscribe<Window> = (window, callback) => {
    window.addEventListener("popstate", callback);
    return () => window.removeEventListener("popstate", callback);
};
