import * as React from 'react';
import { Observable } from 'rxjs/Observable';

export function render(
    element: React.ReactElement,
    container: Element
): Observable<undefined>;
