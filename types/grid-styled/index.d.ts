// Type definitions for grid-styled 3.2
// Project: https://github.com/jxnblk/grid-styled
// Definitions by: Anton Vasin <https://github.com/antonvasin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export type Diff<T extends string, U extends string> = ({ [P in T]: P } &
    { [P in U]: never } & { [x: string]: never })[T];

export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

import { ComponentClass } from "react";
import { StyledComponentClass } from "styled-components";

export type ResponsiveProp = number | string | Array<string | number>;

export interface CommonProps {
    width: ResponsiveProp;
    fontSize: ResponsiveProp;
    color: ResponsiveProp;
    bg: ResponsiveProp;
    m: ResponsiveProp;
    mt: ResponsiveProp;
    mr: ResponsiveProp;
    mb: ResponsiveProp;
    ml: ResponsiveProp;
    mx: ResponsiveProp;
    my: ResponsiveProp;
    p: ResponsiveProp;
    pt: ResponsiveProp;
    pr: ResponsiveProp;
    pb: ResponsiveProp;
    pl: ResponsiveProp;
    px: ResponsiveProp;
    py: ResponsiveProp;
    theme: any;
}

export interface BoxProps
    extends Omit<React.HTMLProps<HTMLDivElement>, "width" | "wrap" | "is"> {
    flex: ResponsiveProp;
    order: ResponsiveProp;
    is: string | ComponentClass<any>;
}

export interface FlexProps extends BoxProps {
    alignItems: ResponsiveProp;
    justifyContent: ResponsiveProp;
    flexDirection: ResponsiveProp;
    flexWrap: ResponsiveProp;

    // legacy aliases https://github.com/jxnblk/styled-system/releases/tag/v2.0.0
    justify: ResponsiveProp;
    align: ResponsiveProp;
    wrap: ResponsiveProp | boolean;
}

export type BoxComponent = StyledComponentClass<
    Partial<CommonProps & BoxProps>,
    any
>;

export type FlexComponent = StyledComponentClass<
    Partial<CommonProps & FlexProps>,
    any
>;

export interface Theme {
    breakpoints: string[];
    space: number[];
    fontSizes: number[];
}

export const Box: BoxComponent;
export const Flex: FlexComponent;
export const theme: Theme;
export type DivProps = Omit<React.HTMLProps<HTMLDivElement>, "ref"> & {
    innerRef: (el: HTMLDivElement) => any;
};
export const div: ComponentClass<DivProps>;
