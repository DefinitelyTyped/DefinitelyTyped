// Type definitions for Rebass 0.3.7
// Project: https://github.com/jxnblk/rebass
// Definitions by: rhysd <https://rhysd.github.io>
//                 ryee-dev <https://github.com/ryee-dev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface BaseProps<C> extends React.ClassAttributes<C> {
  className?: string;
  m?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  mx?: number;
  my?: number;
  p?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  px?: number;
  py?: number;
}

export interface BoxProps extends BaseProps<BoxClass> {
    className?: string;
    width?: number | number[];
    fontSize?: number | number[];
    css?: Object;
    color?: string;
    bg?: string;
}
type BoxClass = React.StatelessComponent<BoxProps>;
export declare const Box: BoxClass;

export interface ButtonProps extends BaseProps<ButtonClass> {
  fontWeight?: string;
  border?: number;
  borderColor?: string;
  borderRadius?: number;
  variant?: string;
  bg?: string;
  color?: string;
}
type ButtonClass = React.StatelessComponent<ButtonProps>;
export declare const Button: ButtonClass;

export interface CardProps extends BaseProps<CardClass> {
  border?: number;
  borderColor?: string;
  borderRadius?: number;
  boxShadow?: string;
  bg?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  opacity?: number;
  fontSize?: number | number[];
  fontWeight?: string;
  width?: number | number[];
}
type CardClass = React.StatelessComponent<CardProps>;
export declare const Card: CardClass;

export interface FlexProps extends BaseProps<FlexClass> {
  alignItems?: string;
  justifyContent?: string,
  flexDirection?: string,
  flexWrap?: string,
  width?: number | number[];
}
type FlexClass = React.StatelessComponent<FlexProps>
export declare const Flex: FlexClass;

export interface HeadingProps extends BaseProps<ImageClass> {
  fontSize?: number | number[];
  fontWeight?: string;
  color?: string;
  fontFamily?: string;
  textAlign?: string;
  lineHeight?: number;
  letterSpacing?: number;
}
type HeadingClass = React.StatelessComponent<HeadingProps>
export declare const Heading: HeadingClass;

export interface ImageProps extends BaseProps<ImageClass> {
    height?: number;
    borderRadius?: number;
    src?: string;
    alt?: string;
    width?: number | number[];
}
type ImageClass = React.StatelessComponent<ImageProps>
export declare const Image: ImageClass;

export interface LinkProps extends BaseProps<LinkClass> {
  href?: string;
}
type LinkClass = React.StatelessComponent<LinkProps>
export declare const Link: LinkClass;

export interface TextProps extends BaseProps<ImageClass> {
  fontSize?: number | number[];
  fontWeight?: string;
  color?: string;
  fontFamily?: string;
  textAlign?: string;
  lineHeight?: number;
  letterSpacing?: number;
}
type TextClass = React.StatelessComponent<TextProps>
export declare const Text: TextClass;
