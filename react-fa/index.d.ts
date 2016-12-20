// Type definitions for react-fa v5.0.0
// Project: https://github.com/andreypopp/react-fa
// Definitions by: Frank Laub <https://github.com/flaub>, Pat Sissons <http://github.com/patsissons>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, ComponentClass, HTMLProps } from 'react';

// fake intermediate interface to remove typing on size, as the typing
// is overrided by react-fa
interface SizeOverrideHTMLProps<T> extends HTMLProps<T> {
    size?: any;
}

export type IconSize = 'lg' | '2x' | '3x' | '4x' | '5x';
export type IconRotation = '45' | '90' | '135' | '180' | '225' | '270' | '315';
export type IconFlip = 'horizontal' | 'vertical';
export type IconStackSize = '1x' | '2x';

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
    Component?: string | Function;
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
