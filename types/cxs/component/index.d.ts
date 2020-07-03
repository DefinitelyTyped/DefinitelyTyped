// Type definitions for cxs 6.2
// Project: https://github.com/cxs-css/cxs
// Definitions by: Daniel Eden <https://github.com/daneden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { CSSObject } from 'cxs';
import * as React from 'react';

type ApparentComponentProps<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
    ? JSX.LibraryManagedAttributes<C, P>
    : React.ComponentPropsWithRef<C>;

declare const cxsComponent: {
    <
        Component extends
            | keyof JSX.IntrinsicElements
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            | React.JSXElementConstructor<any>,
        PropsType extends object & ApparentComponentProps<Component>
    >(
        component: Component,
    ): (arg: CSSObject | ((arg: PropsType) => CSSObject)) => React.JSXElementConstructor<PropsType>;
};

export default cxsComponent;
