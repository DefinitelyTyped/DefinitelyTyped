// Type definitions for Rebass 3.0
// Project: https://github.com/jxnblk/rebass
// Definitions by: rhysd <https://github.com/rhysd>
//                 ryee-dev <https://github.com/ryee-dev>
//                 jamesmckenzie <https://github.com/jamesmckenzie>
//                 chuckdries <https://github.com/chuckdries>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface BaseProps<C> extends React.ClassAttributes<C> {
    className?: string;
    as?: string;
}

export interface SpaceProps<C> extends BaseProps<C> {
    m?: number | string | ReadonlyArray<number>;
    mt?: number | string | ReadonlyArray<number>;
    mr?: number | string | ReadonlyArray<number>;
    mb?: number | string | ReadonlyArray<number>;
    ml?: number | string | ReadonlyArray<number>;
    mx?: number | string | ReadonlyArray<number>;
    my?: number | string | ReadonlyArray<number>;
    p?: number | string | ReadonlyArray<number>;
    pt?: number | string | ReadonlyArray<number>;
    pr?: number | string | ReadonlyArray<number>;
    pb?: number | string | ReadonlyArray<number>;
    pl?: number | string | ReadonlyArray<number>;
    px?: number | string | ReadonlyArray<number>;
    py?: number | string | ReadonlyArray<number>;
}

export interface BoxProps extends SpaceProps<BoxClass> {
    className?: string;
    width?: number | string | ReadonlyArray<number>;
    fontSize?: number | ReadonlyArray<number>;
    css?: object;
    color?: string;
    bg?: string;
}
type BoxClass = React.StatelessComponent<BoxProps & React.HTMLProps<HTMLDivElement>> ;
export declare const Box: BoxClass;
// tslint:disable-next-line:strict-export-declare-modifiers
type BoxClass = React.FunctionComponent<BoxProps>;
export const Box: BoxClass;

export interface ButtonProps extends BoxProps {
    fontWeight?: string;
    border?: number | string;
    borderColor?: string;
    borderRadius?: number | string;
    variant?: string;
}
type ButtonClass = React.StatelessComponent<ButtonProps & React.HTMLProps<HTMLButtonElement>> ;
export declare const Button: ButtonClass;
export const Button: React.FunctionComponent<ButtonProps>;

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
type CardClass = React.StatelessComponent<CardProps & React.HTMLProps<HTMLDivElement>>;
export declare const Card: CardClass;
export const Card: React.FunctionComponent<CardProps>;

export interface FlexProps extends BoxProps {
    alignItems?: string;
    justifyContent?: string;
    flexDirection?: string;
    flexWrap?: string;
}
type FlexClass = React.StatelessComponent<FlexProps & React.HTMLProps<HTMLDivElement>>;
export declare const Flex: FlexClass;
export const Flex: React.FunctionComponent<FlexProps>;

export interface ImageProps extends BoxProps {
    height?: number | string;
    borderRadius?: number | string;
    src?: string;
    alt?: string;
}
type ImageClass = React.StatelessComponent<ImageProps & React.HTMLProps<HTMLImageElement>>;
export declare const Image: ImageClass;
export const Image: React.FunctionComponent<ImageProps>;

export interface LinkProps extends BoxProps {
    href?: string;
}
type LinkClass = React.StatelessComponent<LinkProps & React.HTMLProps<HTMLAnchorElement>>;
export declare const Link: LinkClass;
export const Link: React.FunctionComponent<LinkProps>;

export interface TextProps extends BoxProps {
    fontSize?: number | ReadonlyArray<number>;
    fontWeight?: string;
    color?: string;
    fontFamily?: string;
    textAlign?: string;
    lineHeight?: number | string;
    letterSpacing?: number | string;
}
type TextClass = React.StatelessComponent<TextProps & React.HTMLProps<HTMLDivElement>>;
export declare const Text: TextClass;
export const Text: React.FunctionComponent<TextProps>;

export interface HeadingProps extends TextProps {}
type HeadingClass = React.StatelessComponent<HeadingProps & React.HTMLProps<HTMLHeadingElement>>;
export declare const Heading: HeadingClass;
export type HeadingProps = TextProps;
export const Heading: React.FunctionComponent<HeadingProps>;
