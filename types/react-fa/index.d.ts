import { Component, ComponentClass, FunctionComponent, HTMLProps, ReactElement } from "react";

// fake intermediate interface to remove typing on size, as the typing
// is overrided by react-fa
interface SizeOverrideHTMLProps<T> extends HTMLProps<T> {
    size?: any;
}

export type IconSize = "lg" | "2x" | "3x" | "4x" | "5x";
export type IconRotation = "45" | "90" | "135" | "180" | "225" | "270" | "315";
export type IconFlip = "horizontal" | "vertical";
export type IconStackSize = "1x" | "2x";

type CustomComponent = string | ComponentClass<any> | FunctionComponent<any>;

export interface IconProps extends SizeOverrideHTMLProps<Icon> {
    name: string;
    size?: IconSize | undefined;
    spin?: boolean | undefined;
    rotate?: IconRotation | undefined;
    flip?: IconFlip | undefined;
    fixedWidth?: boolean | undefined;
    pulse?: boolean | undefined;
    stack?: IconStackSize | undefined;
    inverse?: boolean | undefined;
    Component?: CustomComponent | undefined;
}

export type Icon = Component<IconProps>;
export const Icon: ComponentClass<IconProps>;

export interface IconStackProps extends SizeOverrideHTMLProps<IconStack> {
    size?: IconSize | undefined;
    children?: ReactElement<IconProps> | Array<ReactElement<IconProps>> | undefined;
}

export type IconStack = Component<IconStackProps>;
export const IconStack: ComponentClass<IconStackProps>;

export default Icon;
