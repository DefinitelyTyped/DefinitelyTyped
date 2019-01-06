// Type definitions for Rebass 0.3.8
// Project: https://github.com/jxnblk/rebass
// Definitions by: rhysd <https://rhysd.github.io>
//                 ryee-dev <https://github.com/ryee-dev>
//                 jamesmckenzie <https://github.com/jamesmckenzie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface BaseProps<C> extends React.ClassAttributes<C> {
    className?: string;
    as?: string;
}

export interface SpaceProps<C> extends BaseProps<C> {
    m?: number | string;
    mt?: number | string;
    mr?: number | string;
    mb?: number | string;
    ml?: number | string;
    mx?: number | string;
    my?: number | string;
    p?: number | string;
    pt?: number | string;
    pr?: number | string;
    pb?: number | string;
    pl?: number | string;
    px?: number | string;
    py?: number | string;
}

export interface BoxProps extends SpaceProps<BoxClass> {
    className?: string;
    width?: number | ReadonlyArray<number>;
    fontSize?: number | ReadonlyArray<number>;
    css?: Object;
    color?: string;
    bg?: string;
}
type BoxClass = React.StatelessComponent<BoxProps>;
export declare const Box: BoxClass;

export interface ButtonProps extends BoxProps {
    fontWeight?: string;
    border?: number | string;
    borderColor?: string;
    borderRadius?: number | string;
    variant?: string;
}
type ButtonClass = React.StatelessComponent<ButtonProps>;
export declare const Button: ButtonClass;

export interface CardProps extends BoxProps {
    border?: number | string;
    borderColor?: string;
    borderRadius?: number | string;
    boxShadow?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
    opacity?: number;
    variant?: string;
}
type CardClass = React.StatelessComponent<CardProps>;
export declare const Card: CardClass;

export interface FlexProps extends BoxProps {
    alignItems?: string;
    justifyContent?: string;
    flexDirection?: string;
    flexWrap?: string;
}
type FlexClass = React.StatelessComponent<FlexProps>;
export declare const Flex: FlexClass;

export interface ImageProps extends BoxProps {
    height?: number | string;
    borderRadius?: number | string;
    src?: string;
    alt?: string;
}
type ImageClass = React.StatelessComponent<ImageProps>;
export declare const Image: ImageClass;

export interface LinkProps extends BoxProps {
    href?: string;
}
type LinkClass = React.StatelessComponent<LinkProps>;
export declare const Link: LinkClass;

export interface TextProps extends BoxProps {
    fontSize?: number | ReadonlyArray<number>;
    fontWeight?: string;
    color?: string;
    fontFamily?: string;
    textAlign?: string;
    lineHeight?: number | string;
    letterSpacing?: number | string;
}
type TextClass = React.StatelessComponent<TextProps>;
export declare const Text: TextClass;

export interface HeadingProps extends TextProps {}
type HeadingClass = React.StatelessComponent<HeadingProps>;
export declare const Heading: HeadingClass;
