import { StyledComponent } from "@emotion/styled/types/index";
import * as React from "react";
import * as StyledSystem from "styled-system";

export interface BoxProps
    extends
        StyledSystem.SpaceProps,
        StyledSystem.LayoutProps,
        StyledSystem.TypographyProps,
        StyledSystem.ColorProps,
        StyledSystem.FlexboxProps
{
    as?: React.ElementType | undefined;
}

export type BoxType = StyledComponent<
    JSX.IntrinsicElements["div"],
    Omit<JSX.IntrinsicElements["div"] & BoxProps, keyof React.ClassAttributes<any>>
>;

export const Box: BoxType;

export const Flex: BoxType;
