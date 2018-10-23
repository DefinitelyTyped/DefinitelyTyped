// Type definitions for react-redux-epic 1.1
// Project: https://github.com/BerkeleyTrue/react-redux-epic#readme
// Definitions by: forabi <https://github.com/forabi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { Observable } from 'rxjs/Observable';
import { Action } from 'redux';
import { Epic } from 'redux-observable';

export interface Action {
    type: string;
}

export function wrapRootEpic<T extends Action, S, D, O extends T>(
    epic: Epic<T, S, D, O>
): Epic<T, S, D, O>;

export function renderToString(
    element: React.ReactElement<any>,
    wrappedEpic: Epic<any, any>
): Observable<{ markup: string }>;
