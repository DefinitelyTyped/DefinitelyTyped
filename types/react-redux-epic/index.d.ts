// Type definitions for react-redux-epic 1.1
// Project: https://github.com/BerkeleyTrue/react-redux-epic#readme
// Definitions by: forabi <https://github.com/forabi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { Observable } from 'rxjs/Observable';
import { Epic } from 'redux-observable';

export interface Action {
    type: string;
}

export function wrapRootEpic<T extends Action, S, D = any>(
    epic: Epic<T, S, D>
): typeof epic;

export function renderToString<P, T extends Action, S, D = any>(
    element: React.ReactElement<P>,
    wrappedEpic: Epic<T, S, D>
): Observable<{ markup: string }>;
