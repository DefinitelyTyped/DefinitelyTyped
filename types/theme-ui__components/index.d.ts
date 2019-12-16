// Type definitions for @theme-ui/components 0.2
// Project: https://github.com/system-ui/theme-ui
// Definitions by: Piotr Monwid-Olechnowicz <https://github.com/hasparus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as React from 'react';
import { StyledComponent } from '@emotion/styled';
import { Interpolation } from '@emotion/core';
import { SxStyleProp } from 'theme-ui';
import { SpaceProps, ColorProps, ResponsiveValue, MarginProps } from 'styled-system';

export {};

type Assign<T, U> = {
    [P in keyof (T & U)]: P extends keyof U ? U[P] : P extends keyof T ? T[P] : never;
};

type ForwardRef<T, P> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;

export interface BoxStyleProps extends SpaceProps, ColorProps {
    variant?: string;
    sx?: SxStyleProp;
    css?: Interpolation;
}
export interface BoxProps extends Assign<React.ComponentProps<'div'>, BoxStyleProps> {}
export const Box: StyledComponent<React.ComponentProps<'div'>, BoxStyleProps, {}>;

export type FlexStyleProps = BoxStyleProps;
export const Flex: StyledComponent<React.ComponentProps<'div'>, FlexStyleProps, {}>;

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
export const Grid: ForwardRef<HTMLDivElement, GridProps>;

export interface ButtonProps extends Assign<React.ComponentPropsWithRef<'button'>, BoxStyleProps> {}
export const Button: ForwardRef<HTMLButtonElement, BoxProps>;

export interface LinkProps extends Assign<React.ComponentPropsWithRef<'a'>, BoxStyleProps> {}
export const Link: ForwardRef<HTMLAnchorElement, LinkProps>;

export type TextProps = BoxProps;
export const Text: ForwardRef<HTMLDivElement, BoxProps>;

export interface HeadingProps extends Assign<React.ComponentPropsWithRef<'h2'>, BoxStyleProps> {}
export const Heading: ForwardRef<HTMLHeadingElement, HeadingProps>;

export interface ImageProps extends Assign<React.ComponentProps<'img'>, BoxStyleProps> {}
export const Image: ForwardRef<HTMLImageElement, ImageProps>;

export type CardProps = BoxProps;
export const Card: ForwardRef<HTMLDivElement, CardProps>;

export interface LabelProps extends Assign<React.ComponentProps<'label'>, BoxStyleProps> {}
export const Label: ForwardRef<HTMLLabelElement, LabelProps>;

export interface InputProps extends Assign<React.ComponentProps<'input'>, BoxStyleProps> {}
export const Input: ForwardRef<HTMLInputElement, InputProps>;

export interface SelectProps extends Assign<React.ComponentProps<'select'>, BoxStyleProps> {}
export const Select: ForwardRef<HTMLSelectElement, SelectProps>;

export interface TextareaProps extends Assign<React.ComponentProps<'textarea'>, BoxStyleProps> {}
export const Textarea: ForwardRef<HTMLTextAreaElement, TextareaProps>;

export interface RadioProps extends Assign<React.ComponentProps<'input'>, BoxStyleProps> {}
export const Radio: ForwardRef<HTMLInputElement, RadioProps>;

export interface CheckboxProps extends Assign<React.ComponentProps<'input'>, BoxStyleProps> {}
export const Checkbox: ForwardRef<HTMLInputElement, CheckboxProps>;

export interface SliderProps extends Assign<React.ComponentProps<'input'>, BoxStyleProps> {}
export const Slider: ForwardRef<HTMLInputElement, SliderProps>;

export interface FieldOwnProps extends MarginProps {
    /**
     * Text for Label component
     */
    label: string;
    /**
     * Used for the for, id, and name attributes
     */
    name: string;
}
export type FieldProps<T extends React.ElementType> = FieldOwnProps &
    Omit<React.ComponentProps<T>, 'as' | keyof FieldOwnProps> & {
        /**
         * form control to render, default Input
         */
        as?: T;
    };

// `T` is far from unnecessary. We derive component props from it.
// tslint:disable-next-line no-unnecessary-generics
export function Field<T extends React.ElementType = React.ElementType<InputProps>>(props: FieldProps<T>): JSX.Element;

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
