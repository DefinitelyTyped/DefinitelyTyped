// Type definitions for react-hyperscript 3.0
// Project: https://github.com/mlmorg/react-hyperscript
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentClass, FunctionComponent, ReactElement } from 'react';

declare namespace h {}

type Element = ReactElement | string | number | null;

declare function h(
    children?: ReadonlyArray<Element> | Element
): ReactElement;

declare function h(
    componentOrTag: ComponentClass | FunctionComponent | string,
    children?: ReadonlyArray<Element> | Element
): ReactElement;

declare function h<P extends {[attr: string]: any}>(
    componentOrTag: ComponentClass<P> | FunctionComponent<P> | string,
    properties: P,
    children?: ReadonlyArray<Element> | Element
): ReactElement<P>;

export = h;
