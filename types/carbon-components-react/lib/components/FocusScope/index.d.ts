import * as React from 'react';
import {
    ReactDivAttr,
    JSXIntrinsicElementProps,
    ReactComponentConstructor,
    FCReturn,
    ForwardRefProps,
} from '../../../typings/shared';

// These are the props not spread onto the component supplied from the "as" prop (aliased BaseComponent in the src).
interface FocusScopeFocusable {
    focus(): void;
}
interface FocusScopeBaseIsolatedProps {
    initialFocusRef?: React.MutableRefObject<FocusScopeFocusable> | undefined;
}
type SafeProps<P> = Omit<P, 'as' | keyof FocusScopeBaseIsolatedProps>;

interface FocusScopeBaseProps extends FocusScopeBaseIsolatedProps {
    children?: React.ReactNode | undefined;
}

export type FocusScopeDefaultProps = FocusScopeBaseProps &
    ReactDivAttr & {
        as?: undefined;
    };

export type FocusScopeIntrinsicProps<K extends keyof JSX.IntrinsicElements> = FocusScopeBaseProps &
    SafeProps<JSXIntrinsicElementProps<K>> & {
        as: K;
    };

export type FocusScopeCustomComponentProps<
    C extends ReactComponentConstructor<never>
> = C extends ReactComponentConstructor<infer P>
    ? FocusScopeBaseProps &
          SafeProps<P> & {
              as: C;
          }
    : never;

declare function FocusScope(props: ForwardRefProps<HTMLDivElement, FocusScopeDefaultProps>): FCReturn;
declare function FocusScope<T extends keyof JSX.IntrinsicElements, R extends HTMLElement = HTMLElement>(
    props: ForwardRefProps<R, FocusScopeIntrinsicProps<T>>,
): FCReturn;
declare function FocusScope<T extends ReactComponentConstructor<never>, R = unknown>(
    props: ForwardRefProps<R, FocusScopeCustomComponentProps<T>>,
): FCReturn;

export { FocusScope };
