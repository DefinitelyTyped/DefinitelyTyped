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
    column?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    smColumn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    mdColumn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lgColumn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
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
    margin?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    smMargin?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    mdMargin?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    lgMargin?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    marginBottom?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    smMarginBottom?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    mdMarginBottom?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    lgMarginBottom?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    marginEnd?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    smMarginEnd?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    mdMarginEnd?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    lgMarginEnd?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    marginLeft?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    smMarginLeft?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    mdMarginLeft?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    lgMarginLeft?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    marginRight?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    smMarginRight?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    mdMarginRight?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    lgMarginRight?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    marginStart?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    smMarginStart?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    mdMarginStart?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    lgMarginStart?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    marginTop?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    smMarginTop?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    mdMarginTop?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    lgMarginTop?:
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
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    overflow?: overflowOptions;
    padding?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    smPadding?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    mdPadding?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lgPadding?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    paddingX?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    smPaddingX?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    mdPaddingX?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lgPaddingX?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    paddingY?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    smPaddingY?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    mdPaddingY?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lgPaddingY?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
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
    size?: "sm" | "md" | "lg";
    type?: "submit" | "button";
}

/*
Card Props Interface
https://pinterest.github.io/gestalt/#/Card
*/

interface CardProps {
    active?: boolean;
    children?: React.ReactNode;
    image?: React.ReactNode;
    onMouseEnter?: (event: React.SyntheticEvent) => void;
    onMouseLeave?: (event: React.SyntheticEvent) => void;
}

/*
Checkbox Props Interface
https://pinterest.github.io/gestalt/#/Checkbox
*/

interface CheckBoxProps {
    id: string;
    onChange: (event: React.SyntheticEvent) => void;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    name?: string;
    size?: "sm" | "md";
}

/*
Column Props Interface
https://pinterest.github.io/gestalt/#/Column
*/

interface ColumnProps {
    span: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    smSpan?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    mdSpan?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lgSpan?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    children?: React.ReactNode;
}

/*
Container Props Interface
https://pinterest.github.io/gestalt/#/Container
*/

interface ContainerProps {
    children?: React.ReactNode;
}

/*
Flyout Props Interface
https://pinterest.github.io/gestalt/#/Flyout
*/

interface FlayoutProps {
    anchor: React.RefObject<any>;
    onDismiss: () => void;
    children?: React.ReactNode;
    color?: "blue" | "orange" | "white";
    idealDirection?: "up" | "right" | "down" | "left";
    positionRelativeToAnchor?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
}

/*
GroupAvatar Props Interface
https://pinterest.github.io/gestalt/#/GroupAvatar
*/

interface GroupAvatarProps {
    collaborators: ReadonlyArray<{ name: string; src?: string }>;
    outline?: boolean;
    size?: "sm" | "md" | "lg";
}

declare module "gestalt" {
    class Avatar extends React.Component<AvatarProps, any> {}
    class Box extends React.Component<BoxProps, any> {}
    class Button extends React.Component<ButtonProps, any> {}
    class Card extends React.Component<CardProps, any> {}
    class Checkbox extends React.Component<CheckBoxProps, any> {}
    class Column extends React.Component<ColumnProps, any> {}
    class Container extends React.Component<ContainerProps, any> {}
    class Divider extends React.Component<{}, any> {}
    class Flyout extends React.Component<FlayoutProps, any> {}
    class GroupAvatar extends React.Component<GroupAvatarProps, any> {}
}
