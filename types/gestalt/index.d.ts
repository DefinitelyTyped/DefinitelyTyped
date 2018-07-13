// Type definitions for gestalt 0.75
// Project: https://pinterest.github.io/gestalt
// Definitions by: Nicolás Serrano Arévalo <https://github.com/serranoarevalo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

type colorOptions =
    | "blue"
    | "darkGray"
    | "darkWash"
    | "eggplant"
    | "gray"
    | "green"
    | "lightGray"
    | "lightWash"
    | "maroon"
    | "midnight"
    | "navy"
    | "olive"
    | "orange"
    | "orchid"
    | "pine"
    | "purple"
    | "red"
    | "transparent"
    | "watermelon"
    | "white";
type plusTwelve = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type minusTwelve =
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 0;
type plusMinusTwelve = plusTwelve & minusTwelve;
interface inlineStyle {
    __style: {
        [key: string]: any;
    };
}
type directionOptions = "row" | "column";
type displayOptions =
    | "none"
    | "flex"
    | "block"
    | "inlineBlock"
    | "visuallyHidden";
type alignContentOptions =
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "stretch";
type alignItemsOptions = "start" | "end" | "center" | "baseline" | "stretch";
type alignSelfOptions =
    | "auto"
    | "start"
    | "end"
    | "center"
    | "baseline"
    | "stretch";
type flexOptions = "grow" | "shrink" | "none";
type justifyContentOptions = "start" | "end" | "center" | "between" | "around";
type overflowOptions =
    | "visible"
    | "hidden"
    | "scroll"
    | "scrollX"
    | "scrollY"
    | "auto";
type positionOptions = "static" | "absolute" | "relative" | "fixed";
type shapeOptions =
    | "square"
    | "rounded"
    | "pill"
    | "circle"
    | "roundedTop"
    | "roundedBottom"
    | "roundedLeft"
    | "roundedRight";
type sizeOptions = "sm" | "md" | "lg";
/*
Avatar Props Interface
https://pinterest.github.io/gestalt/#/Avatar
*/

interface AvatarProps {
    name: string;
    outline?: boolean;
    size?: "sm" | "md" | "lg";
    src?: string;
    verified?: boolean;
}

/*
Box Props Interface
https://pinterest.github.io/gestalt/#/Box
*/

interface BoxProps {
    alignContent?: alignContentOptions;
    alignItems?: alignItemsOptions;
    alignSelf?: alignSelfOptions;
    bottom?: boolean;
    children?: React.ReactNode;
    color?: colorOptions;
    column?: plusTwelve;
    smColumn?: plusTwelve;
    mdColumn?: plusTwelve;
    lgColumn?: plusTwelve;
    dangerouslySetInlineStyle?: inlineStyle;
    direction?: directionOptions;
    smDirection?: directionOptions;
    mdDirection?: directionOptions;
    lgDirection?: directionOptions;
    display?: displayOptions;
    smDisplay?: displayOptions;
    mdDisplay?: displayOptions;
    lgDisplay?: displayOptions;
    fit?: boolean;
    flex?: flexOptions;
    height?: number | string;
    justifyContent?: justifyContentOptions;
    left?: boolean;
    margin?: plusMinusTwelve;
    smMargin?: plusMinusTwelve;
    mdMargin?: plusMinusTwelve;
    lgMargin?: plusMinusTwelve;
    marginBottom?: plusMinusTwelve;
    smMarginBottom?: plusMinusTwelve;
    mdMarginBottom?: plusMinusTwelve;
    lgMarginBottom?: plusMinusTwelve;
    marginEnd?: plusMinusTwelve;
    smMarginEnd?: plusMinusTwelve;
    mdMarginEnd?: plusMinusTwelve;
    lgMarginEnd?: plusMinusTwelve;
    marginLeft?: plusMinusTwelve;
    smMarginLeft?: plusMinusTwelve;
    mdMarginLeft?: plusMinusTwelve;
    lgMarginLeft?: plusMinusTwelve;
    marginRight?: plusMinusTwelve;
    smMarginRight?: plusMinusTwelve;
    mdMarginRight?: plusMinusTwelve;
    lgMarginRight?: plusMinusTwelve;
    marginStart?: plusMinusTwelve;
    smMarginStart?: plusMinusTwelve;
    mdMarginStart?: plusMinusTwelve;
    lgMarginStart?: plusMinusTwelve;
    marginTop?: plusMinusTwelve;
    smMarginTop?: plusMinusTwelve;
    mdMarginTop?: plusMinusTwelve;
    lgMarginTop?: plusMinusTwelve;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    overflow?: overflowOptions;
    padding?: plusTwelve;
    smPadding?: plusTwelve;
    mdPadding?: plusTwelve;
    lgPadding?: plusTwelve;
    paddingX?: plusTwelve;
    smPaddingX?: plusTwelve;
    mdPaddingX?: plusTwelve;
    lgPaddingX?: plusTwelve;
    paddingY?: plusTwelve;
    smPaddingY?: plusTwelve;
    mdPaddingY?: plusTwelve;
    lgPaddingY?: plusTwelve;
    position?: positionOptions;
    right?: boolean;
    shape?: shapeOptions;
    top?: boolean;
    width?: number | string;
    wrap?: boolean;
}

/*
Button Props Interface
https://pinterest.github.io/gestalt/#/Button
*/

interface ButtonProps {
    text: string;
    accessibilityExpanded?: boolean;
    accessibilityHaspopup?: boolean;
    accessibilityLabel?: string;
    color?: "blue" | "gray" | "red" | "transparent" | "white";
    disabled?: boolean;
    inline?: boolean;
    name?: string;
    onClick?: (event: React.SyntheticEvent) => void;
    size?: sizeOptions;
    type?: "submit" | "button";
}

declare module "gestalt" {
    class Avatar extends React.Component<AvatarProps, any> {}
    class Box extends React.Component<BoxProps, any> {}
    class Button extends React.Component<ButtonProps, any> {}
}
