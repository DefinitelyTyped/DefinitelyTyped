import { ResponsiveStyleValue, SystemStyleObject } from "@styled-system/css";
import * as React from "react";
import * as StyledComponents from "styled-components";
import * as StyledSystem from "styled-system";

export {};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BaseProps extends React.RefAttributes<any> {
    as?: React.ElementType | undefined;
    css?: StyledComponents.CSSObject | StyledComponents.FlattenSimpleInterpolation | string | undefined;
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
    sx?: SxStyleProp | undefined;
}

interface BoxKnownProps
    extends
        BaseProps,
        StyledSystem.SpaceProps,
        StyledSystem.LayoutProps,
        StyledSystem.TypographyProps,
        StyledSystem.ColorProps,
        StyledSystem.FlexboxProps,
        SxProps
{
    variant?: StyledSystem.ResponsiveValue<string> | undefined;
    tx?: string | undefined;
}
export interface BoxProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {}
export const Box: React.FunctionComponent<BoxProps>;

interface ButtonKnownProps extends BoxKnownProps, StyledSystem.FontWeightProps, StyledSystem.ButtonStyleProps {}
export interface ButtonProps
    extends ButtonKnownProps, Omit<React.HTMLProps<HTMLButtonElement>, keyof ButtonKnownProps>
{}
export const Button: React.FunctionComponent<ButtonProps>;

export interface CardProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {}
export const Card: React.FunctionComponent<CardProps>;

// tslint:disable-next-line no-empty-interface
interface FlexKnownProps extends BoxKnownProps {}
export interface FlexProps extends FlexKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof FlexKnownProps> {}
export const Flex: React.FunctionComponent<FlexProps>;

export interface ImageProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLImageElement>, keyof BoxKnownProps> {}
export const Image: React.FunctionComponent<ImageProps>;

// tslint:disable-next-line no-empty-interface
interface LinkKnownProps extends BoxKnownProps {}
export interface LinkProps extends LinkKnownProps, Omit<React.HTMLProps<HTMLAnchorElement>, keyof LinkKnownProps> {}
export const Link: React.FunctionComponent<LinkProps>;

// tslint:disable-next-line no-empty-interface
interface TextKnownProps extends BoxKnownProps {}
export interface TextProps extends TextKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof TextKnownProps> {}
export const Text: React.FunctionComponent<TextProps>;

export interface HeadingProps extends TextKnownProps, Omit<React.HTMLProps<HTMLHeadingElement>, keyof TextKnownProps> {}
export const Heading: React.FunctionComponent<HeadingProps>;
