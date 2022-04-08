// Type definitions for redux-devtools 3.0.0
// Project: https://github.com/gaearon/redux-devtools
// Definitions by: Petryshyn Sergii <https://github.com/mc-petry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';
import { StoreEnhancer } from 'redux';

export interface IDevTools {
    new (): JSX.ElementClass;
    instrument(): StoreEnhancer
}

export declare function createDevTools(el: React.ReactElement): IDevTools;
export declare function persistState(debugSessionKey: string): StoreEnhancer;

declare const factory: { instrument(): (opts: any) => any };

export default factory;
