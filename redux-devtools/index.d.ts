// Type definitions for redux-devtools 3.0.0
// Project: https://github.com/gaearon/redux-devtools
// Definitions by: Petryshyn Sergii <https://github.com/mc-petry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react" />
/// <reference types="redux" />

import * as React from 'react';
import { GenericStoreEnhancer } from 'redux';

interface IDevTools {
    new (): JSX.ElementClass;
    instrument(): GenericStoreEnhancer
}

export declare function createDevTools(el: React.ReactElement<any>): IDevTools;
export declare function persistState(debugSessionKey: string): GenericStoreEnhancer;

declare const factory: { instrument(): (opts: any) => any };

export default factory;
