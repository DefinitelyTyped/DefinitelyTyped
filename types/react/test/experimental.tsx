/// <reference types="../experimental"/>

import React = require('react');

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
