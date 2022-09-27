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
// @ts-expect-error
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

const contextUsers = React.createContext(['HAL']);
const promisedUsers = Promise.resolve(['Dave']);

function useUse() {
    // @ts-expect-error Missing value
    React.experimental_use();

    // $ExpectType string[]
    const users = React.experimental_use(promisedUsers);
    // @ts-expect-error incompatible type. Mainly to potentially inspect TypeScript error message
    React.experimental_use({});

    // $ExpectType string[]
    const contextValue = React.experimental_use(contextUsers);
}
