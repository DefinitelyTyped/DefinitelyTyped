import * as React from "react";
import {
    ReactButtonAttr,
    FCReturn,
    JSXIntrinsicElementProps,
    ReactAnchorAttr,
    ForwardRefProps,
    TooltipAlignment,
    TooltipPosition,
    ReactComponentConstructor,
} from "../../../typings/shared";

export type ButtonKind = "danger" | "danger--ghost" | "danger--primary" | "danger--tertiary" | "ghost" | "primary" | "secondary" | "tertiary";
export type ButtonSize = "default" | "field" | "lg" | "md" | "sm" | "small" | "xl" | "2xl";

export interface ButtonRenderIconRenderProps {
    "aria-hidden"?: boolean | undefined;
    "aria-label"?: string | undefined;
    className?: string | undefined;
}

// this is split due to a typing issue with the specialized buttons (SecondaryButton, etc)
export interface ButtonKindProps {
    kind?: ButtonKind | undefined;  // required by has default value
}

// these props are not passed to the general createElement call
interface ButtonBaseIsolatedProps {
    dangerDescription?: string | undefined;
    hasIconOnly?: boolean | undefined;
    iconDescription?: string | undefined;
    isExpressive?: boolean | undefined;
    isSelected?: boolean | undefined;
    // trying to type this just causes problems around inference, overload selection, and anon fn vs typed component references.
    // if anon render props type is desired, import ButtonRenderIconRenderProps.
    renderIcon?: any;
    size?: ButtonSize | undefined;
    /**
     * @deprecated
     */
    small?: boolean | undefined;
    tooltipAlignment?: TooltipAlignment | undefined;
    tooltipPosition?: TooltipPosition | undefined;
}
type SafeProps<P> = Omit<P, 'as' | keyof ButtonBaseIsolatedProps>;

interface ButtonBaseProps extends ButtonBaseIsolatedProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    disabled?: boolean | undefined;
}

export interface ButtonDefaultProps extends ButtonBaseProps, ReactButtonAttr {
    as?: undefined;
    href?: undefined;
}
// alias for old type that used to be exported
export type ButtonProps = ButtonDefaultProps;

export interface ButtonAnchorProps extends ButtonBaseProps, Omit<ReactAnchorAttr, "href"> {
    as?: undefined;
    href: string;
}

export type ButtonIntrinsicProps<K extends keyof JSX.IntrinsicElements> = ButtonBaseProps &
    SafeProps<JSXIntrinsicElementProps<K>> & {
        as: K;
    };

export type ButtonCustomComponentProps<
    C extends ReactComponentConstructor<never>
> = C extends ReactComponentConstructor<infer P>
    ? ButtonBaseProps &
            SafeProps<P> & {
                as: C;
            }
    : never;

//
// Note: TypeScript will try to select the best overload but this is not always easily predictable the more freedom the
// generic types have or the more they overlap. If you're having difficulty with these types you can try reexporting the
// component casted to your desired type.
// ex:
// import { Button } from "carbon-components-react"
// export const DefaultButton = Button as React.FC<ButtonDefaultProps>;
// export const AnchorButton = Button as React.FC<ButtonAnchorProps>;
//
// or just create a wrapper component.
//
declare function Button(props: ForwardRefProps<HTMLButtonElement, ButtonDefaultProps & ButtonKindProps>): FCReturn;
// tslint:disable:unified-signatures breaks certain usages
declare function Button(props: ForwardRefProps<HTMLAnchorElement, ButtonAnchorProps & ButtonKindProps>): FCReturn;
declare function Button<T extends keyof JSX.IntrinsicElements, R extends HTMLElement = HTMLElement>(props: ForwardRefProps<R, ButtonIntrinsicProps<T> & ButtonKindProps>): FCReturn;
declare function Button<T extends ReactComponentConstructor<never>, R = unknown>(props: ForwardRefProps<R, ButtonCustomComponentProps<T> & ButtonKindProps>): FCReturn;

export default Button;
