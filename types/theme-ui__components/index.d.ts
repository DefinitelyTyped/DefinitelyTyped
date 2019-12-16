// Type definitions for @theme-ui/components 0.2
// Project: https://github.com/system-ui/theme-ui
// Definitions by: Piotr Monwid-Olechnowicz <https://github.com/hasparus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as React from 'react';
import { StyledComponent } from '@emotion/styled';
import { Interpolation } from '@emotion/core';
import { SxStyleProp } from 'theme-ui';
import { SpaceProps, ColorProps, ResponsiveValue } from 'styled-system';

export {};

type Assign<T, U> = {
    [P in keyof (T & U)]: P extends keyof U ? U[P] : P extends keyof T ? T[P] : never;
};

export interface BoxStyleProps extends SpaceProps, ColorProps {
    variant?: string;
    sx?: SxStyleProp;
    css?: Interpolation;
}
export interface BoxProps extends Assign<React.ComponentProps<'div'>, BoxStyleProps> {}
export const Box: StyledComponent<React.ComponentProps<'div'>, BoxStyleProps, {}>;

export type FlexStyleProps = BoxStyleProps;
export const Flex: React.FC<FlexStyleProps>;

export interface GridProps extends BoxProps {
    /**
     * Minimum width of child elements
     */
    width?: ResponsiveValue<string | number>;
    /**
     * 	Number of columns to use for the layout (cannot be used in conjunction with the width prop)
     */
    columns?: ResponsiveValue<number>;
    /**
     * Space between child elements
     */
    gap?: ResponsiveValue<string | number>;
}
export const Grid: React.RefForwardingComponent<'div', GridProps>;

export interface ButtonProps extends Assign<React.ComponentPropsWithRef<'button'>, BoxStyleProps> {}
export const Button: React.RefForwardingComponent<'button', BoxProps>;

export interface LinkProps extends Assign<React.ComponentPropsWithRef<'a'>, BoxStyleProps> {}
export const Link: React.RefForwardingComponent<'a', LinkProps>;

export type TextProps = BoxProps;
export const Text: React.RefForwardingComponent<'div', BoxProps>;

export interface HeadingProps extends Assign<React.ComponentPropsWithRef<'h2'>, BoxStyleProps> {}
export const Heading: React.RefForwardingComponent<'h2', HeadingProps>;
export const Image: React.FC;
export const Card: React.FC;
export const Label: React.FC;
export const Input: React.FC;
export const Select: React.FC;
export const Textarea: React.FC;
export const Radio: React.FC;
export const Checkbox: React.FC;
export const Slider: React.FC;
export const Field: React.FC;
export const Progress: React.FC;
export const Donut: React.FC;
export const Spinner: React.FC;
export const Avatar: React.FC;
export const Badge: React.FC;
export const Close: React.FC;
export const Alert: React.FC;
export const Divider: React.FC;
export const Embed: React.FC;
export const AspectRatio: React.FC;
export const AspectImage: React.FC;
export const Container: React.FC;
export const NavLink: React.FC;
export const Message: React.FC;
export const IconButton: React.FC;
export const MenuButton: React.FC;
