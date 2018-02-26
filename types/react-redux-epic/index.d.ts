// Type definitions for react-redux-epic 1.1
// Project: https://github.com/BerkeleyTrue/react-redux-epic#readme
// Definitions by: forabi <https://github.com/forabi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';
import { Observable } from 'rxjs/Observable';
import { Epic } from 'redux-observable';

export interface Action {
    type: string;
}

export function wrapRootEpic<T extends Action>(
    epic: Epic<T, any, any>
): typeof epic;

export function renderToString<T extends Action>(
    element: React.ReactElement<any>,
    wrappedEpic: Epic<T, any, any>
): Observable<{ markup: string }>;
