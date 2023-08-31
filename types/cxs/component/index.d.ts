import * as React from 'react';
import { CSSObject } from '../index';

type ApparentComponentProps<
     
    C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
    ? JSX.LibraryManagedAttributes<C, P>
    : React.ComponentPropsWithRef<C>;

declare const cxsComponent: {
    <
        Component extends
            | keyof JSX.IntrinsicElements
             
            | React.JSXElementConstructor<any>,
        PropsType extends object & ApparentComponentProps<Component>
    >(
        component: Component,
    ): (arg: CSSObject | ((arg: PropsType) => CSSObject)) => React.JSXElementConstructor<PropsType>;
};

export = cxsComponent;
