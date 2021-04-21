import * as React from "react";
import { ReactAttr, ReactDivAttr, JSXIntrinsicElementProps, FCReturn } from "../../../typings/shared";

/*
 * Popover
 */

interface PopoverBaseIsolatedProps {
    // props not given to the component specified by "as"
    caret?: boolean;
    align?:
        | "top"
        | "top-left"
        | "top-right"
        | "bottom"
        | "bottom-left"
        | "bottom-right"
        | "left"
        | "left-bottom"
        | "left-top"
        | "right"
        | "right-bottom"
        | "right-top";
    highConstrast?: boolean;
    light?: boolean;
    open: boolean;
    relative?: boolean;
}
type SafePopoverProps<P> = Omit<P, "as" | keyof PopoverBaseIsolatedProps>;

interface PopoverBaseProps extends PopoverBaseIsolatedProps {
    children?: React.ReactNode;
    className?: string;
}

export type PopoverDefaultProps = PopoverBaseProps &
    ReactDivAttr & {
        as?: undefined;
    };

export type PopoverIntrinsicProps<K extends keyof JSX.IntrinsicElements> = PopoverBaseProps &
    SafePopoverProps<JSXIntrinsicElementProps<K>> & {
        as: K;
    };

export type PopoverCustomComponentProps<
    C extends React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
    ? PopoverBaseProps &
          SafePopoverProps<P> & {
              as: C;
          }
    : never;

declare function Popover(props: PopoverDefaultProps): FCReturn;
declare function Popover<T extends keyof JSX.IntrinsicElements>(props: PopoverIntrinsicProps<T>): FCReturn;
declare function Popover<T extends React.JSXElementConstructor<any>>(props: PopoverCustomComponentProps<T>): FCReturn;

/*
 * PopoverContent
 */

export type PopoverContentDefaultProps = ReactAttr & {
    as?: undefined;
};

type SafePopoverContentProps<P> = Omit<P, "as">;
export type PopoverContentIntrinsicProps<K extends keyof JSX.IntrinsicElements> = SafePopoverContentProps<
    JSXIntrinsicElementProps<K>
> & {
    as: K;
};

export type PopoverContentCustomComponentProps<
    C extends React.JSXElementConstructor<any>
> = C extends React.JSXElementConstructor<infer P>
    ? SafePopoverContentProps<P> & {
          as: C;
      }
    : never;

declare function PopoverContent(props: PopoverContentDefaultProps): FCReturn;
declare function PopoverContent<T extends keyof JSX.IntrinsicElements>(
    props: PopoverContentIntrinsicProps<T>,
): FCReturn;
declare function PopoverContent<T extends React.JSXElementConstructor<any>>(
    props: PopoverContentCustomComponentProps<T>,
): FCReturn;

export { Popover, PopoverContent };
