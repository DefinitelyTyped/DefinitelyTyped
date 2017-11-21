// Type definitions for react-hyperscript 3.0
// Project: https://github.com/mlmorg/react-hyperscript
// Definitions by: tock203 <https://github.com/tock203>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ComponentClass, StatelessComponent, ReactElement } from 'react';

declare namespace h {}

declare function h<P>(
    componentOrTag: ComponentClass<P> | StatelessComponent<P> | string,
    properties?: P,
    children?: ReadonlyArray<ReactElement<any>> | string
): ReactElement<P>;

export = h;
