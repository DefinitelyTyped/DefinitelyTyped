import * as React from "react";
import * as StyledSystem from "styled-system";

export {};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BaseProps extends React.RefAttributes<any> {
    children?: React.ReactNode;
    as?: React.ElementType | undefined;
}

interface BoxKnownProps
    extends
        BaseProps,
        StyledSystem.SpaceProps,
        StyledSystem.WidthProps,
        StyledSystem.FontSizeProps,
        StyledSystem.ColorProps,
        StyledSystem.FlexProps,
        StyledSystem.OrderProps,
        StyledSystem.AlignSelfProps
{}
export interface BoxProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {}
export const Box: React.FunctionComponent<BoxProps>;

interface FlexKnownProps
    extends
        BoxKnownProps,
        StyledSystem.FlexWrapProps,
        StyledSystem.FlexDirectionProps,
        StyledSystem.AlignItemsProps,
        StyledSystem.JustifyContentProps
{}
export interface FlexProps extends FlexKnownProps, Omit<React.HTMLProps<HTMLDivElement>, keyof FlexKnownProps> {}
export const Flex: React.FunctionComponent<FlexProps>;
