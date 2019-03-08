// Type definitions for Rebass 3.0
// Project: https://github.com/rebassjs/rebass
// Definitions by: rhysd <https://github.com/rhysd>
//                 ryee-dev <https://github.com/ryee-dev>
//                 jamesmckenzie <https://github.com/jamesmckenzie>
//                 sara f-p <https://github.com/gretzky>
//                 angusfretwell <https://github.com/angusfretwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from "react";
import * as StyledComponents from "styled-components";
import * as StyledSystem from "styled-system";

export {};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BaseProps extends React.Props<any> {
    as?: React.ReactType;
    css?: StyledComponents.CSSObject;
}

interface BoxKnownProps
    extends BaseProps,
        StyledSystem.SpaceProps,
        StyledSystem.WidthProps,
        StyledSystem.FontSizeProps,
        StyledSystem.ColorProps,
        StyledSystem.FlexProps,
        StyledSystem.OrderProps,
        StyledSystem.AlignSelfProps {}
export interface BoxProps
    extends BoxKnownProps,
        Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {}
export const Box: React.FunctionComponent<BoxProps>;

interface ButtonKnownProps
    extends BoxKnownProps,
        StyledSystem.FontWeightProps,
        StyledSystem.BorderProps,
        StyledSystem.BordersProps,
        StyledSystem.BorderColorProps,
        StyledSystem.BorderRadiusProps,
        StyledSystem.ButtonStyleProps {}
export interface ButtonProps
    extends ButtonKnownProps,
        Omit<React.HTMLProps<HTMLButtonElement>, keyof ButtonKnownProps> {}
export const Button: React.FunctionComponent<ButtonProps>;

interface CardKnownProps
    extends BoxKnownProps,
        StyledSystem.BorderProps,
        StyledSystem.BordersProps,
        StyledSystem.BorderColorProps,
        StyledSystem.BorderRadiusProps,
        StyledSystem.BoxShadowProps,
        StyledSystem.BackgroundImageProps,
        StyledSystem.BackgroundSizeProps,
        StyledSystem.BackgroundPositionProps,
        StyledSystem.BackgroundRepeatProps,
        StyledSystem.OpacityProps {
    variant?: StyledSystem.ResponsiveValue<string>;
}
export interface CardProps
    extends CardKnownProps,
        Omit<React.HTMLProps<HTMLDivElement>, keyof CardKnownProps> {}
export const Card: React.FunctionComponent<CardProps>;

interface FlexKnownProps
    extends BoxKnownProps,
        StyledSystem.FlexWrapProps,
        StyledSystem.FlexDirectionProps,
        StyledSystem.AlignItemsProps,
        StyledSystem.JustifyContentProps {}
export interface FlexProps
    extends FlexKnownProps,
        Omit<React.HTMLProps<HTMLDivElement>, keyof FlexKnownProps> {}
export const Flex: React.FunctionComponent<FlexProps>;

interface ImageKnownProps
    extends BoxKnownProps,
        StyledSystem.HeightProps,
        StyledSystem.BorderRadiusProps {}
export interface ImageProps
    extends ImageKnownProps,
        Omit<React.HTMLProps<HTMLImageElement>, keyof ImageKnownProps> {}
export const Image: React.FunctionComponent<ImageProps>;

// tslint:disable-next-line no-empty-interface
interface LinkKnownProps extends BoxKnownProps {}
export interface LinkProps
    extends LinkKnownProps,
        Omit<React.HTMLProps<HTMLAnchorElement>, keyof LinkKnownProps> {}
export const Link: React.FunctionComponent<LinkProps>;

interface TextKnownProps
    extends BoxKnownProps,
        StyledSystem.FontFamilyProps,
        StyledSystem.FontWeightProps,
        StyledSystem.TextAlignProps,
        StyledSystem.LineHeightProps,
        StyledSystem.LetterSpacingProps {}
export interface TextProps
    extends TextKnownProps,
        Omit<React.HTMLProps<HTMLDivElement>, keyof TextKnownProps> {}
export const Text: React.FunctionComponent<TextProps>;

// tslint:disable-next-line no-empty-interface
interface HeadingKnownProps extends TextKnownProps {}
export interface HeadingProps
    extends HeadingKnownProps,
        Omit<React.HTMLProps<HTMLHeadingElement>, keyof HeadingKnownProps> {}
export const Heading: React.FunctionComponent<HeadingProps>;
