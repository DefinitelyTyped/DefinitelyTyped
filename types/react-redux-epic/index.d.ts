import * as React from "react";
import { Epic } from "redux-observable";
import { Observable } from "rxjs/Observable";

export interface Action {
    type: string;
}

export function wrapRootEpic<T extends Action, S, D, O extends T>(
    epic: Epic<T, S, D, O>,
): Epic<T, S, D, O>;

export function renderToString(
    element: React.ReactElement,
    wrappedEpic: Epic<any, any>,
): Observable<{ markup: string }>;
