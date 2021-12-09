/// <reference types="../experimental"/>

import React = require('react');

function useExperimentalHooks() {
    const [toggle, setToggle] = React.useState(false);

    React.unstable_useInsertionEffect(() => {});
    React.unstable_useInsertionEffect(() => {}, []);
    React.unstable_useInsertionEffect(() => {
        return () => {};
    }, [toggle]);
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
