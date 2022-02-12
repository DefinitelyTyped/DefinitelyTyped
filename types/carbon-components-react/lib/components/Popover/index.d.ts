import * as React from 'react';
import {
    ReactAttr,
    JSXIntrinsicElementProps,
    FCReturn,
    ForwardRefProps,
    ReactComponentConstructor,
} from '../../../typings/shared';

/*
 * Popover
 */

interface PopoverBaseIsolatedProps {
    // props not given to the component specified by "as"
    caret?: boolean | undefined;
    align?:
        | 'top'
        | 'top-left'
        | 'top-right'
        | 'bottom'
        | 'bottom-left'
        | 'bottom-right'
        | 'left'
        | 'left-bottom'
        | 'left-top'
        | 'right'
        | 'right-bottom'
        | 'right-top'
        | undefined;
    dropShadow?: boolean | undefined;
    highContrast?: boolean | undefined;
    light?: boolean | undefined;
    open: boolean;
}
type SafePopoverProps<P> = Omit<P, 'as' | keyof PopoverBaseIsolatedProps>;

interface PopoverBaseProps extends PopoverBaseIsolatedProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
}

export type PopoverDefaultProps = PopoverBaseProps &
    ReactAttr<HTMLSpanElement> & {
        as?: undefined;
    };

export type PopoverIntrinsicProps<K extends keyof JSX.IntrinsicElements> = PopoverBaseProps &
    SafePopoverProps<JSXIntrinsicElementProps<K>> & {
        as: K;
    };

export type PopoverCustomComponentProps<
    C extends ReactComponentConstructor<never>
> = C extends ReactComponentConstructor<infer P>
    ? PopoverBaseProps &
          SafePopoverProps<P> & {
              as: C;
          }
    : never;

declare function Popover(props: ForwardRefProps<HTMLSpanElement, PopoverDefaultProps>): FCReturn;
declare function Popover<T extends keyof JSX.IntrinsicElements, R = HTMLElement>(
    props: ForwardRefProps<R, PopoverIntrinsicProps<T>>,
): FCReturn;
declare function Popover<T extends ReactComponentConstructor<never>, R = unknown>(
    props: ForwardRefProps<R, PopoverCustomComponentProps<T>>,
): FCReturn;

/*
 * PopoverContent
 */

export interface PopoverContentProps extends ReactAttr<HTMLSpanElement> { }

declare function PopoverContent(props: ForwardRefProps<HTMLSpanElement, PopoverContentProps>): FCReturn;

export { Popover, PopoverContent };
