// Type definitions for redux-devtools 3.0.0
// Project: https://github.com/gaearon/redux-devtools
// Definitions by: Petryshyn Sergii <https://github.com/mc-petry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react" />

import * as React from 'react';

export interface IDevTools {
    new (): JSX.ElementClass;
    instrument(): (opts: any) => any;
}

export declare function createDevTools(el: React.ReactElement<any>): IDevTools;
export declare function persistState(debugSessionKey: string): Function;

declare const factory: { instrument(): Function };

export default factory;
