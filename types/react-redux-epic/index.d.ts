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

export function wrapRootEpic<T extends Action, S, D = any>(
    epic: Epic<T, S, D> // tslint:disable-line no-unnecessary-generics
): typeof epic;

export function renderToString<T extends Action, S, D = any>(
    element: React.ReactElement<any>,
    wrappedEpic: Epic<T, S, D> // tslint:disable-line no-unnecessary-generics
): Observable<{ markup: string }>;
