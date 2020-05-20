// Type definitions for Rebass 4.0
// Project: https://github.com/rebassjs/rebass
// Definitions by: rhysd <https://github.com/rhysd>
//                 ryee-dev <https://github.com/ryee-dev>
//                 jamesmckenzie <https://github.com/jamesmckenzie>
//                 sara f-p <https://github.com/gretzky>
//                 angusfretwell <https://github.com/angusfretwell>
//                 orzarchi <https://github.com/orzarchi>
//                 ilaiwi <https://github.com/ilaiwi>
//                 mrkosima <https://github.com/mrkosima>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ResponsiveStyleValue, SystemStyleObject } from '@styled-system/css';
import * as React from 'react';
import * as StyledComponents from 'styled-components';
import * as StyledSystem from 'styled-system';

export {};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BaseProps extends React.RefAttributes<any> {
    as?: React.ElementType;
    css?: StyledComponents.CSSObject | StyledComponents.FlattenSimpleInterpolation | string;
}

/**
 * The `SxStyleProp` extension `SystemStyleObject` and `Emotion` [style props](https://emotion.sh/docs/object-styles)
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 */
export type SxStyleProp =
    | SystemStyleObject
    | Record<
          string,
          | SystemStyleObject
          | ResponsiveStyleValue<number | string>
          | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>
      >;

export interface SxProps {
    /**
     * The sx prop lets you style elements inline, using values from your theme.
     */
    sx?: SxStyleProp;
}

interface BoxKnownProps
    extends BaseProps,
        StyledSystem.SpaceProps,
        StyledSystem.LayoutProps,
        StyledSystem.FontSizeProps,
        StyledSystem.ColorProps,
        StyledSystem.FlexProps,
        StyledSystem.OrderProps,
        StyledSystem.AlignSelfProps,
        SxProps {
    variant?: StyledSystem.ResponsiveValue<string>;
    tx?: string;
}
export interface BoxProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {}
export const Box: React.FunctionComponent<BoxProps>;

interface ButtonKnownProps extends BoxKnownProps, StyledSystem.FontWeightProps, StyledSystem.ButtonStyleProps {}
export interface ButtonProps
    extends ButtonKnownProps,
        Omit<React.HTMLProps<HTMLButtonElement>, keyof ButtonKnownProps> {}
export const Button: React.FunctionComponent<ButtonProps>;

export interface CardProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {}
export const Card: React.FunctionComponent<BoxKnownProps>;

interface FlexKnownProps
    extends BoxKnownProps,
        StyledSystem.FlexGrowProps,
        StyledSystem.FlexShrinkProps,
        StyledSystem.FlexWrapProps,
        StyledSystem.FlexDirectionProps,
        StyledSystem.AlignItemsProps,
        StyledSystem.AlignContentProps,
        StyledSystem.AlignSelfProps,
        StyledSystem.JustifyItemsProps,
        StyledSystem.JustifyContentProps,
        StyledSystem.JustifySelfProps {}
export interface FlexProps extends FlexKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof FlexKnownProps> {}
export const Flex: React.FunctionComponent<FlexProps>;

export interface ImageProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLImageElement>, keyof BoxKnownProps> {}
export const Image: React.FunctionComponent<ImageProps>;

// tslint:disable-next-line no-empty-interface
interface LinkKnownProps extends BoxKnownProps {}
export interface LinkProps extends LinkKnownProps, Omit<React.HTMLProps<HTMLAnchorElement>, keyof LinkKnownProps> {}
export const Link: React.FunctionComponent<LinkProps>;

interface TextKnownProps
    extends BoxKnownProps,
        StyledSystem.FontFamilyProps,
        StyledSystem.FontWeightProps,
        StyledSystem.FontStyleProps,
        StyledSystem.TextAlignProps,
        StyledSystem.LineHeightProps,
        StyledSystem.LetterSpacingProps {}
export interface TextProps extends TextKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof TextKnownProps> {}
export const Text: React.FunctionComponent<TextProps>;

export interface HeadingProps extends TextKnownProps, Omit<React.HTMLProps<HTMLHeadingElement>, keyof TextKnownProps> {}
export const Heading: React.FunctionComponent<HeadingProps>;
