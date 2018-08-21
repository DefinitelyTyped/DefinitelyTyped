import * as React from 'react';
import { Observable } from 'rxjs/Observable';

export function render(
    element: React.ReactElement<any>,
    container: Element
): Observable<undefined>;
