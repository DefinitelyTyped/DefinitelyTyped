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
    onClick?: (args: { event: React.SyntheticEvent<React.MouseEvent> }) => void;
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
    onMouseEnter?: (
        args: { event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>> }
    ) => void;
    onMouseLeave?: (
        args: { event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>> }
    ) => void;
}

/*
Checkbox Props Interface
https://pinterest.github.io/gestalt/#/Checkbox
*/

interface CheckboxProps {
    id: string;
    onChange: (
        args: {
            event: React.SyntheticEvent<HTMLInputElement>;
            checked: boolean;
        }
    ) => void;
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

interface FlyoutProps {
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

/*
Heading Props Interface
https://pinterest.github.io/gestalt/#/Heading
*/

interface HeaderProps {
    accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    children?: React.ReactNode;
    color?:
        | "blue"
        | "darkGray"
        | "eggplant"
        | "gray"
        | "green"
        | "lightGray"
        | "maroon"
        | "midnight"
        | "navy"
        | "olive"
        | "orange"
        | "orchid"
        | "pine"
        | "purple"
        | "red"
        | "watermelon"
        | "white";
    id?: string;
    overflow?: "normal" | "breakWord";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    smSize?: "xs" | "sm" | "md" | "lg" | "xl";
    mdSize?: "xs" | "sm" | "md" | "lg" | "xl";
    lgSize?: "xs" | "sm" | "md" | "lg" | "xl";
    truncate?: boolean;
}

/*
Icon Props Interface
https://pinterest.github.io/gestalt/#/Icon
*/

type Icons =
    | "add"
    | "add-circle"
    | "add-pin"
    | "angled-pin"
    | "arrow-back"
    | "arrow-circle-down"
    | "arrow-circle-forward"
    | "arrow-down"
    | "arrow-forward"
    | "arrow-up"
    | "arrow-up-right"
    | "bell"
    | "camera"
    | "cancel"
    | "check"
    | "check-circle"
    | "circle-outline"
    | "clear"
    | "clock"
    | "cog"
    | "compass"
    | "dash"
    | "edit"
    | "ellipsis"
    | "ellipsis-circle-outline"
    | "eye"
    | "facebook"
    | "face-happy"
    | "face-sad"
    | "face-smiley"
    | "filter"
    | "flag"
    | "flashlight"
    | "gif"
    | "globe"
    | "globe-checked"
    | "graph-bar"
    | "handle"
    | "hand-pointing"
    | "heart"
    | "heart-broken"
    | "knoop"
    | "lightbulb"
    | "link"
    | "location"
    | "lock"
    | "maximize"
    | "menu"
    | "minimize"
    | "move"
    | "mute"
    | "pause"
    | "people"
    | "person"
    | "person-add"
    | "pin"
    | "pin-hide"
    | "pinterest"
    | "play"
    | "question-mark"
    | "remove"
    | "report"
    | "search"
    | "shopping-bag"
    | "smiley"
    | "smiley-outline"
    | "send"
    | "share"
    | "sound"
    | "speech"
    | "speech-ellipsis"
    | "tag";

interface IconProps {
    accessibilityLabel: string;
    icon: Icons;
    color?:
        | "blue"
        | "darkGray"
        | "eggplant"
        | "gray"
        | "green"
        | "lightGray"
        | "maroon"
        | "midnight"
        | "navy"
        | "olive"
        | "orange"
        | "orchid"
        | "pine"
        | "purple"
        | "red"
        | "watermelon"
        | "white";
    dangerouslySetSvgPath?: { __path: string };
    inline?: boolean;
    size?: number | string;
}

/*
IconButton Props Interface
https://pinterest.github.io/gestalt/#/IconButton
*/

interface IconButtonProps {
    accessibilityLabel: string;
    icon: Icons;
    accessibilityExpanded?: boolean;
    accessibilityHaspopup?: boolean;
    bgColor?: "transparent" | "lightGray" | "white";
    iconColor?: "blue" | "darkGray" | "gray" | "red" | "white";
    onClick?: (args: { event: React.SyntheticEvent<React.MouseEvent> }) => void;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}

/*
Image Props Interface
https://pinterest.github.io/gestalt/#/Image
*/

interface ImageProps {
    alt: string;
    color: string;
    naturalHeight: number;
    naturalWidth: number;
    src: string;
    children?: React.ReactNode;
    fit?: "cover" | "contain" | "none";
    onError?: () => void;
    onLoad?: () => void;
    size?: string;
    srcSet?: string;
}

/*
Label Props Interface
https://pinterest.github.io/gestalt/#/Label
*/

interface LabelProps {
    htmlFor: string;
    children?: React.ReactNode;
}

/*
Letterbox Props Interface
https://pinterest.github.io/gestalt/#/Letterbox
*/

interface LetterboxProps {
    contentAspectRatio: number;
    height: number;
    width: number;
    children?: React.ReactNode;
}

/*
Link Props Interface
https://pinterest.github.io/gestalt/#/Link
*/

interface LinkProps {
    children?: React.ReactNode;
    href?: string;
    inline?: boolean;
    onClick?: (args: { event: React.SyntheticEvent<React.MouseEvent> }) => void;
    target?: "null" | "self" | "blank";
}

/*
Mask Props Interface
https://pinterest.github.io/gestalt/#/Mask
*/

interface MaskProps {
    children?: React.ReactNode;
    height?: number | string;
    shape?: "circle" | "rounded" | "square";
    wash?: boolean;
    width?: number | string;
}

/*
Masonry Props Interface
https://pinterest.github.io/gestalt/#/Masonry
*/

interface MasonryProps {
    comp: React.ComponentType;
    items: ReadonlyArray<any>;
    columnWidth?: number;
    flexible?: boolean;
    gutterWidth?: number;
    layout?: "MasonryDefaultLayout" | "MasonryUniformRowLayout";
    loadItems?: () => void;
    measurementStore?: any;
    minCols?: number;
    scrollContainer?: () => HTMLElement;
    virtualize?: boolean;
}

/*
Modal Props Interface
https://pinterest.github.io/gestalt/#/Modal
*/

interface ModalProps {
    accessibilityCloseLabel: string;
    accessibilityModalLabel: string;
    heading: string;
    onDismiss: () => void;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    role?: "alertdialog" | "dialog";
    size?: "sm" | "md" | "lg";
}

/*
Props Props Interface
https://pinterest.github.io/gestalt/#/Pog
*/

interface PogProps {
    icon: Icons;
    active?: boolean;
    bgColor?: "transparent" | "lightGray" | "white";
    focused?: boolean;
    hovered?: boolean;
    iconColor?: "blue" | "darkGray" | "gray" | "red" | "white";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}

/*
Pulsar Props Interface
https://pinterest.github.io/gestalt/#/Pulsar
*/

interface PulsarProps {
    paused?: boolean;
    size?: number;
}

/*
RadioButton Props Interface
https://pinterest.github.io/gestalt/#/RadioButton
*/

interface RadioButtonProps {
    id: string;
    onChange: (
        args: {
            event: React.SyntheticEvent<HTMLInputElement>;
            checked: boolean;
        }
    ) => void;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    size?: "sm" | "md";
    value?: string;
}

/*
SearchField Props Interface
https://pinterest.github.io/gestalt/#/SearchField
*/

interface SearchFieldProps {
    accessibilityLabel: string;
    id: string;
    onChange: (
        args: {
            value: string;
            syntheticEvent: React.SyntheticEvent<HTMLInputElement>;
        }
    ) => void;
    onBlur?: (args: { event: React.SyntheticEvent<HTMLInputElement> }) => void;
    onFocus?: (
        args: {
            value: string;
            syntheticEvent: React.SyntheticEvent<HTMLInputElement>;
        }
    ) => void;
    placeholder?: string;
    value?: string;
}

/*
SegmentedControl Props Interface
https://pinterest.github.io/gestalt/#/SegmentedControl
*/

interface SegmentedControlProps {
    items: ReadonlyArray<React.ReactNode>;
    onChange: (
        args: {
            event: React.SyntheticEvent<React.MouseEvent>;
            activeIndex: number;
        }
    ) => void;
    selectedItemIndex: number;
    size?: "md" | "lg";
}

/*
SelectList Props Interface
https://pinterest.github.io/gestalt/#/SelectList
*/

interface SelectListProps {
    id: string;
    onChange: (
        args: { event: React.SyntheticEvent<HTMLInputElement>; value: string }
    ) => void;
    options: ReadonlyArray<{ label: string; value: string }>;
    disabled?: boolean;
    errorMessage?: string;
    idealErrorDirection?: "up" | "right" | "down" | "left";
    name?: string;
    placeholder?: string;
    value?: string;
}

/*
Spinner Props Interface
https://pinterest.github.io/gestalt/#/Spinner
*/

interface SpinnerProps {
    accessibilityLabel: string;
    show: boolean;
}

/*
Sticky Props Interface
https://pinterest.github.io/gestalt/#/Sticky
*/

interface StickyProps {
    bottom?: number | string;
    children?: React.ReactNode;
    dangerouslySetZIndex?: { __zIndex: string };
    left?: number | string;
    right?: number | string;
    top?: number | string;
}

/*
Switch Props Interface
https://pinterest.github.io/gestalt/#/Switch
*/

interface SwitchProps {
    id: string;
    onChange: (
        args: { event: React.SyntheticEvent<HTMLInputElement>; value: boolean }
    ) => void;
    disabled?: boolean;
    name?: string;
    switched?: boolean;
}

/*
Tabs Props Interface
https://pinterest.github.io/gestalt/#/Tabs
*/

interface TabsProps {
    activeTabIndex: number;
    onChange: (
        args: {
            event: React.SyntheticEvent<React.MouseEvent>;
            activeTabIndex: number;
        }
    ) => void;
    tabs: ReadonlyArray<{ text: any; href: string }>;
}

/*
Text Props Interface
https://pinterest.github.io/gestalt/#/Text
*/

interface TextProps {
    align?: "left" | "right" | "center" | "justify";
    bold?: boolean;
    children?: React.ReactNode;
    color?:
        | "blue"
        | "darkGray"
        | "eggplant"
        | "gray"
        | "green"
        | "lightGray"
        | "maroon"
        | "midnight"
        | "navy"
        | "olive"
        | "orange"
        | "orchid"
        | "pine"
        | "purple"
        | "red"
        | "watermelon"
        | "white";
    inline?: boolean;
    italic?: boolean;
    overflow?: "normal" | "breakWord";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    smSize?: "xs" | "sm" | "md" | "lg" | "xl";
    mdSize?: "xs" | "sm" | "md" | "lg" | "xl";
    lgSize?: "xs" | "sm" | "md" | "lg" | "xl";
    truncate?: boolean;
}

/*
TextArea Interface Props
https://pinterest.github.io/gestalt/#/TextArea
*/

interface TextAreaProps {
    id: string;
    onChange: (
        args: { event: React.SyntheticEvent<HTMLInputElement>; value: string }
    ) => void;
    disabled?: boolean;
    errorMessage?: string;
    idealErrorDirection?: "up" | "right" | "down" | "left";
    name?: string;
    onBlur?: (
        args: {
            event: React.SyntheticEvent<React.FocusEvent>;
            value: string;
        }
    ) => void;
    onFocus?: (
        args: {
            event: React.SyntheticEvent<React.FocusEvent>;
            value: string;
        }
    ) => void;
    placeholder?: string;
    rows?: number;
    value?: string;
}

/*
TextField Interface Props
https://pinterest.github.io/gestalt/#/TextField
*/

interface TextFieldProps {
    id: string;
    onChange: (
        args: {
            event: React.SyntheticEvent<HTMLInputElement>;
            value: string;
        }
    ) => void;
    autoComplete?: "current-password" | "on" | "off" | "username";
    disabled?: boolean;
    errorMessage?: string;
    idealErrorDirection?: "up" | "right" | "down" | "left";
    name?: string;
    onBlur?: (
        args: {
            event: React.SyntheticEvent<React.FocusEvent>;
            value: string;
        }
    ) => void;
    onFocus?: (
        args: {
            event: React.SyntheticEvent<React.FocusEvent>;
            value: string;
        }
    ) => void;
    placeholder?: string;
    type?: "date" | "email" | "number" | "password" | "text" | "url";
    value?: string;
}

/*
Toast Interface Props
https://pinterest.github.io/gestalt/#/Toast
*/

interface ToastProps {
    color?: "darkGray" | "orange";
    icon?: "arrow-circle-forward";
    text?: string | ReadonlyArray<string>;
    thumbnail?: React.ReactElement<any>;
}

/*
Tooltip Interface Props
https://pinterest.github.io/gestalt/#/Tooltip
*/

interface TooltipProps {
    anchor: any;
    onDismiss: () => void;
    children?: React.ReactNode;
    idealDirection?: "up" | "right" | "down" | "left";
    positionRelativeToAnchor?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}

/*
Touchable Interface Props
https://pinterest.github.io/gestalt/#/Touchable
*/

interface TouchableProps {
    onTouch: (
        args: {
            event:
                | React.SyntheticEvent<React.MouseEvent<HTMLDivElement>>
                | React.SyntheticEvent<React.KeyboardEvent<HTMLDivElement>>;
        }
    ) => void;
    children?: React.ReactNode;
    fullHeight?: boolean;
    fullWidth?: boolean;
    mouseCursor?:
        | "copy"
        | "grab"
        | "grabbing"
        | "move"
        | "noDrop"
        | "pointer"
        | "zoomIn"
        | "zoomOut";
    onMouseEnter?: (
        args: {
            event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>>;
        }
    ) => void;
    onMouseLeave?: (
        args: {
            event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>>;
        }
    ) => void;
    shape?:
        | "square"
        | "rounded"
        | "pill"
        | "circle"
        | "roundedTop"
        | "roundedBottom"
        | "roundedLeft"
        | "roundedRight";
}

/*
Video Props Interface
https://pinterest.github.io/gestalt/#/Video
*/
interface VideoProps {
    aspectRatio: number;
    captions: string;
    src:
        | string
        | ReadonlyArray<{
              type: "video/m3u8" | "video/mp4" | "video/ogg";
              src: string;
          }>;
    accessibilityMaximizeLabel?: string;
    accessibilityMinimizeLabel?: string;
    accessibilityMuteLabel?: string;
    accessibilityPauseLabel?: string;
    accessibilityPlayLabel?: string;
    accessibilityUnmuteLabel?: string;
    controls?: boolean;
    loop?: boolean;
    onDurationChange?: (
        args: {
            event: React.SyntheticEvent<HTMLVideoElement>;
            duration: number;
        }
    ) => void;
    onEnded?: (args: { event: React.SyntheticEvent<HTMLVideoElement> }) => void;
    onFullscreenChange?: (
        args: {
            event: React.SyntheticEvent<HTMLDivElement>;
            fullscreen: boolean;
        }
    ) => void;
    onLoadedChange?: (
        args: {
            event: React.SyntheticEvent<HTMLVideoElement>;
            loaded: number;
        }
    ) => void;
    onPause?: (args: { event: React.SyntheticEvent<HTMLDivElement> }) => void;
    onPlay?: (args: { event: React.SyntheticEvent<HTMLDivElement> }) => void;
    onReady?: (args: { event: React.SyntheticEvent<HTMLVideoElement> }) => void;
    onSeek?: (args: { event: React.SyntheticEvent<HTMLVideoElement> }) => void;
    onTimeChange?: (
        args: {
            event: React.SyntheticEvent<HTMLVideoElement>;
            time: number;
        }
    ) => void;
    onVolumeChange?: (
        args: {
            event: React.SyntheticEvent<HTMLDivElement>;
            volume: number;
        }
    ) => void;
    playbackRate?: number;
    playing?: boolean;
    playsInline?: boolean;
    poster?: string;
    preload?: "auto" | "metadata" | "none";
    volume: number;
}

declare module "gestalt" {
    class Avatar extends React.Component<AvatarProps, any> {}
    class Box extends React.Component<BoxProps, any> {}
    class Button extends React.Component<ButtonProps, any> {}
    class Card extends React.Component<CardProps, any> {}
    class Checkbox extends React.Component<CheckboxProps, any> {}
    class Column extends React.Component<ColumnProps, any> {}
    class Container extends React.Component<ContainerProps, any> {}
    class Divider extends React.Component<{}, any> {}
    class Flyout extends React.Component<FlyoutProps, any> {}
    class GroupAvatar extends React.Component<GroupAvatarProps, any> {}
    class Heading extends React.Component<HeaderProps, any> {}
    class Icon extends React.Component<IconProps, any> {}
    class IconButton extends React.Component<IconButtonProps, any> {}
    class Image extends React.Component<ImageProps, any> {}
    class Label extends React.Component<LabelProps, any> {}
    class Letterbox extends React.Component<LetterboxProps, any> {}
    class Link extends React.Component<LinkProps, any> {}
    class Mask extends React.Component<MaskProps, any> {}
    class Masonry extends React.Component<MasonryProps, any> {}
    class Modal extends React.Component<ModalProps, any> {}
    class Pog extends React.Component<PogProps, any> {}
    class Pulsar extends React.Component<PulsarProps, any> {}
    class RadioButton extends React.Component<RadioButtonProps, any> {}
    class SearchField extends React.Component<SearchFieldProps, any> {}
    class SegmentedControl extends React.Component<SearchFieldProps, any> {}
    class SelectList extends React.Component<SelectListProps, any> {}
    class Spinner extends React.Component<SpinnerProps, any> {}
    class Sticky extends React.Component<StickyProps, any> {}
    class Switch extends React.Component<SwitchProps, any> {}
    class Tabs extends React.Component<TabsProps, any> {}
    class Text extends React.Component<TextProps, any> {}
    class TextArea extends React.Component<TextAreaProps, any> {}
    class TextField extends React.Component<TextFieldProps, any> {}
    class Toast extends React.Component<ToastProps, any> {}
    class Tooltip extends React.Component<TooltipProps, any> {}
    class Touchable extends React.Component<TouchableProps, any> {}
    class Video extends React.Component<VideoProps, any> {}
}
