// Type definitions for react-fa 4.1
// Project: https://github.com/andreypopp/react-fa
// Definitions by: Frank Laub <https://github.com/flaub>, Pat Sissons <http://github.com/patsissons>, Karol Janyst <http://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Component, ComponentClass, HTMLProps, StatelessComponent } from "react";

// fake intermediate interface to remove typing on size, as the typing
// is overrided by react-fa
interface SizeOverrideHTMLProps<T> extends HTMLProps<T> {
    size?: any;
}

export type IconSize = "lg" | "2x" | "3x" | "4x" | "5x";
export type IconRotation = "45" | "90" | "135" | "180" | "225" | "270" | "315";
export type IconFlip = "horizontal" | "vertical";
export type IconStackSize = "1x" | "2x";

type CustomComponent = string | ComponentClass<any> | StatelessComponent<any>;

export interface IconProps extends SizeOverrideHTMLProps<Icon> {
    name: string;
    size?: IconSize;
    spin?: boolean;
    rotate?: IconRotation;
    flip?: IconFlip;
    fixedWidth?: boolean;
    pulse?: boolean;
    stack?: IconStackSize;
    inverse?: boolean;
    Component?: CustomComponent;
}

export type Icon = Component<IconProps, any>;
export const Icon: ComponentClass<IconProps>;

export interface IconStackProps extends SizeOverrideHTMLProps<IconStack> {
    size?: IconSize;
    children?: IconProps[];
}

export type IconStack = Component<IconStackProps, any>;
export const IconStack: ComponentClass<IconStackProps>;

export default Icon;
