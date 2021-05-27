/// <reference types="../experimental"/>

import React = require('react');

function Dialog() {
    const nameId = React.unstable_useOpaqueIdentifier();

    return (
        <div role="dialog" aria-labelledby={nameId}>
            <h2 id={nameId}></h2>
        </div>
    );
}

function InvalidOpaqueIdentifierUsage() {
    const id = React.unstable_useOpaqueIdentifier();
    // undesired, would warn in React should not type-check
    const stringified1: string = id.toString();
    // undesired, would warn in React should not type-check
    const stringified2: string = id + '';

    return null;
}
