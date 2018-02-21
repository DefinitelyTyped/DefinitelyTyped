import * as React from 'react';
import { Observable } from 'rxjs/Observable';

export function render<P>(
    element: React.ReactElement<P>,
    container: Element
): Observable<undefined>;
