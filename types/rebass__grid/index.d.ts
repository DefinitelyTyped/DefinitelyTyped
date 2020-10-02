// Type definitions for @rebass/grid 6.0
// Project: https://github.com/rebassjs/grid
// Definitions by: Anton Vasin <https://github.com/antonvasin>
//                 Victor Orlov <https://github.com/vittorio>
//                 Louis Hache <https://github.com/lhache>
//                 Adam Lavin <https://github.com/lavoaster>
//                 Erin Noe-Payne <https://github.com/autoric>
//                 akameco <https://github.com/akameco>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from "react";
import * as StyledSystem from "styled-system";

export {};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BaseProps extends React.Props<any> {
    as?: React.ElementType;
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
