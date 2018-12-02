// Type definitions for Rebass 3.0.0
// Project: https://github.com/jxnblk/rebass
// Definitions by: rhysd <https://rhysd.github.io>
//                 ryee-dev <https://github.com/ryee-dev>
//                 alexdriaguine <https://github.com/alexdriaguine>
//                 eloiqs <https://github.com/eloiqs>
//                 jamesmckenzie <https://github.com/jamesmckenzie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react'
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
    HeightProps,
    BoxShadowProps,
    BackgroundImageProps,
    BackgroundSizeProps,
    BackgroundRepeatProps,
    OpacityProps,
} from 'styled-system'
import {StyledComponent} from 'styled-components'

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
type BoxClass = StyledComponent<React.ComponentClass<BoxProps>, any>
export declare const Box: BoxClass

export interface ButtonProps
    extends BaseProps<ButtonClass>,
        FontWeightProps,
        BorderProps,
        BorderColorProps,
        BorderRadiusProps,
        RebassHTMLAttributes<HTMLButtonElement> {
    variant?: string
}
type ButtonClass = StyledComponent<React.ComponentClass<ButtonProps>, any>
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
    variant?: string
}
type CardClass = StyledComponent<React.ComponentClass<CardProps>, any>
export declare const Card: CardClass

export interface FlexProps
    extends BaseProps<FlexClass>,
        AlignItemsProps,
        JustifyContentProps,
        FlexDirectionProps,
        FlexWrapProps,
        WidthProps,
        RebassHTMLAttributes<HTMLDivElement> {}
type FlexClass = StyledComponent<React.ComponentClass<FlexProps>, any>
export declare const Flex: FlexClass

export interface HeadingProps
    extends BaseProps<HeadingClass>,
        BaseTextProps,
        RebassHTMLAttributes<HTMLHeadingElement> {}
type HeadingClass = StyledComponent<React.ComponentClass<HeadingProps>, any>
export declare const Heading: HeadingClass

export interface ImageProps
    extends BaseProps<ImageClass>,
        HeightProps,
        BorderRadiusProps,
        RebassImageHTMLAttributes<HTMLImageElement> {}
type ImageClass = StyledComponent<React.ComponentClass<ImageProps>, any>
export declare const Image: ImageClass

export interface LinkProps
    extends BaseProps<LinkClass>,
        RebassAnchorHTMLAttributes<HTMLAnchorElement> {}
type LinkClass = StyledComponent<React.ComponentClass<LinkProps>, any>
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
type TextClass = StyledComponent<React.ComponentClass<TextProps>, any>
export declare const Text: TextClass

export interface RebassComponentsModule<T extends object> {
    Box: StyledComponent<React.ComponentClass<BoxProps>, T>
    Button: StyledComponent<React.ComponentClass<ButtonProps>, T>
    Card: StyledComponent<React.ComponentClass<CardProps>, T>
    Flex: StyledComponent<React.ComponentClass<FlexProps>, T>
    Heading: StyledComponent<React.ComponentClass<HeadingProps>, T>
    Image: StyledComponent<React.ComponentClass<ImageProps>, T>
    Link: StyledComponent<React.ComponentClass<LinkProps>, T>
    Text: StyledComponent<React.ComponentClass<TextProps>, T>
}
