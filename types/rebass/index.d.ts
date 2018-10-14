// Type definitions for Rebass 0.4.0
// Project: https://github.com/jxnblk/rebass
// Definitions by: rhysd <https://rhysd.github.io>
//                 ryee-dev <https://github.com/ryee-dev>
//                 alexdriaguine <https://github.com/alexdriaguine>
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
    Variant,
    HeightProps,
    BoxShadowProps,
    BackgroundImageProps,
    BackgroundSizeProps,
    BackgroundRepeatProps,
    OpacityProps,
} from 'styled-system'

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
        FontSizeProps {}
type BoxClass = React.StatelessComponent<BoxProps>
export declare const Box: BoxClass

export interface ButtonProps
    extends BaseProps<ButtonClass>,
        FontWeightProps,
        BorderProps,
        BorderColorProps,
        BorderRadiusProps {
    variant?: Variant
}
type ButtonClass = React.StatelessComponent<ButtonProps>
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
        FontWeightProps {
    variant?: Variant
}
type CardClass = React.StatelessComponent<CardProps>
export declare const Card: CardClass

export interface FlexProps
    extends BaseProps<FlexClass>,
        AlignItemsProps,
        JustifyContentProps,
        FlexDirectionProps,
        FlexWrapProps,
        WidthProps {}
type FlexClass = React.StatelessComponent<FlexProps>
export declare const Flex: FlexClass

export interface HeadingProps extends BaseProps<HeadingClass>, TextProps {}
type HeadingClass = React.StatelessComponent<HeadingProps>
export declare const Heading: HeadingClass

export interface ImageProps
    extends BaseProps<ImageClass>,
        HeightProps,
        BorderRadiusProps {
    src: string
    alt?: string
}
type ImageClass = React.StatelessComponent<ImageProps>
export declare const Image: ImageClass

export interface LinkProps extends BaseProps<LinkClass> {
    href?: string
}
type LinkClass = React.StatelessComponent<LinkProps>
export declare const Link: LinkClass

export interface TextProps
    extends BaseProps<TextClass>,
        FontFamilyProps,
        FontWeightProps,
        TextAlignProps,
        LineHeightProps,
        LetterSpacingProps {}
type TextClass = React.StatelessComponent<TextProps>
export declare const Text: TextClass
