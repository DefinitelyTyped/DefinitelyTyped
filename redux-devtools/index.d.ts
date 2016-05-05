// Type definitions for redux-devtools 3.0.0
// Project: https://github.com/gaearon/redux-devtools
// Definitions by: Petryshyn Sergii <https://github.com/mc-petry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />


import * as React from 'react';

interface IDevTools {
    new (): JSX.ElementClass;
    instrument(): Function;
}

export declare function createDevTools(el: React.ReactElement<any>): IDevTools;
export declare function persistState(debugSessionKey: string): Function;

declare var factory: { instrument(): Function };

export default factory;
