// Type definitions for Rebass 0.4.0
// Project: https://github.com/jxnblk/rebass
// Definitions by: rhysd <https://rhysd.github.io>
//                 ryee-dev <https://github.com/ryee-dev>
//                 alexdriaguine <https://github.com/alexdriaguine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react'
import {StyledComponentClass} from 'styled-components'
import {
    WidthProps,
    FontSizeProps,
    SpaceProps,
    TextColorProps,
    BgColorProps,
    AlignItemsProps,
    JustifyContentProps,
    FlexDirectionProps,
    FlexWrapProps,
    FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LineHeightProps,
    LetterSpacingProps,
    BorderProps,
    BorderColorProps,
    BorderRadiusProps,
    Variant,
    HeightProps,
    BoxShadowProps,
    BackgroundImageProps,
    BackgroundSizeProps,
    BackgroundRepeatProps,
    OpacityProps,
} from 'styled-system'

// Util type to remove properties from a type
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

// Remove HTML attributes from types that are clashing with rebass own
// responsive props
type RebassHTMLAttributes<T> = Omit<React.HTMLAttributes<T>, 'color'>
type RebassAnchorHTMLAttributes<T> = Omit<
    React.AnchorHTMLAttributes<T>,
    'color'
>
type RebassImageHTMLAttributes<T> = Omit<
    React.ImgHTMLAttributes<T>,
    'color' | 'height' | 'width'
>

export interface BaseProps<C>
    extends React.ClassAttributes<C>,
        SpaceProps,
        TextColorProps,
        BgColorProps,
        WidthProps,
        FontSizeProps {
    css?: Object
}

export interface BoxProps
    extends BaseProps<BoxClass>,
        WidthProps,
        FontSizeProps,
        RebassHTMLAttributes<HTMLDivElement> {}
type BoxClass = StyledComponentClass<BoxProps, {}>
export declare const Box: BoxClass

export interface ButtonProps
    extends BaseProps<ButtonClass>,
        FontWeightProps,
        BorderProps,
        BorderColorProps,
        BorderRadiusProps,
        RebassHTMLAttributes<HTMLButtonElement> {
    variant?: Variant
}
type ButtonClass = StyledComponentClass<ButtonProps, {}>
export declare const Button: ButtonClass

export interface CardProps
    extends BaseProps<CardClass>,
        BorderProps,
        BorderColorProps,
        BorderRadiusProps,
        BoxShadowProps,
        BackgroundImageProps,
        BackgroundSizeProps,
        BackgroundRepeatProps,
        OpacityProps,
        FontWeightProps,
        RebassHTMLAttributes<HTMLDivElement> {
    variant?: Variant
}
type CardClass = StyledComponentClass<CardProps, {}>
export declare const Card: CardClass

export interface FlexProps
    extends BaseProps<FlexClass>,
        AlignItemsProps,
        JustifyContentProps,
        FlexDirectionProps,
        FlexWrapProps,
        WidthProps,
        RebassHTMLAttributes<HTMLDivElement> {}
type FlexClass = StyledComponentClass<FlexProps, {}>
export declare const Flex: FlexClass

export interface HeadingProps
    extends BaseProps<HeadingClass>,
        BaseTextProps,
        RebassHTMLAttributes<HTMLHeadingElement> {}
type HeadingClass = StyledComponentClass<HeadingProps, {}>
export declare const Heading: HeadingClass

export interface ImageProps
    extends BaseProps<ImageClass>,
        HeightProps,
        BorderRadiusProps,
        RebassImageHTMLAttributes<HTMLImageElement> {}
type ImageClass = StyledComponentClass<ImageProps, {}>
export declare const Image: ImageClass

export interface LinkProps
    extends BaseProps<LinkClass>,
        RebassAnchorHTMLAttributes<HTMLAnchorElement> {}
type LinkClass = StyledComponentClass<LinkProps, {}>
export declare const Link: LinkClass

export interface BaseTextProps
    extends FontFamilyProps,
        FontWeightProps,
        TextAlignProps,
        LineHeightProps,
        LetterSpacingProps {}
interface TextProps
    extends BaseProps<TextClass>,
        BaseTextProps,
        RebassHTMLAttributes<HTMLDivElement> {}
type TextClass = StyledComponentClass<TextProps, {}>
export declare const Text: TextClass
