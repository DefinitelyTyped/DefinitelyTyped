// Type definitions for gestalt 0.75
// Project: https://github.com/pinterest/gestalt, https://pinterest.github.io/gestalt
// Definitions by: Nicolás Serrano Arévalo <https://github.com/serranoarevalo>
//                 Josh Gachnang <https://github.com/joshgachnang>
//                 Calvin Chhour <https://github.com/calvinchhour>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

/*
Avatar Props Interface
https://pinterest.github.io/gestalt/#/Avatar
*/

export interface AvatarProps {
    name: string;
    outline?: boolean;
    size?: "sm" | "md" | "lg";
    src?: string;
    verified?: boolean;
}

export type UnsignedUpTo12 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type SignedUpTo12 = | -12 | -11 | -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | UnsignedUpTo12;

/*
Box Props Interface
https://pinterest.github.io/gestalt/#/Box
*/

export interface BoxProps {
    alignContent?:
        | "start"
        | "end"
        | "center"
        | "between"
        | "around"
        | "stretch";
    alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
    alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch";
    bottom?: boolean;
    children?: React.ReactNode;
    color?:
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
        | "transparentDarkGray"
        | "watermelon"
        | "white";
    column?: UnsignedUpTo12;
    smColumn?: UnsignedUpTo12;
    mdColumn?: UnsignedUpTo12;
    lgColumn?: UnsignedUpTo12;
    dangerouslySetInlineStyle?: {
        __style: {
            [key: string]: any;
        };
    };
    direction?: "row" | "column";
    smDirection?: "row" | "column";
    mdDirection?: "row" | "column";
    lgDirection?: "row" | "column";
    display?: "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden";
    smDisplay?: "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden";
    mdDisplay?: "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden";
    lgDisplay?: "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden";
    fit?: boolean;
    flex?: "grow" | "shrink" | "none";
    height?: number | string;
    justifyContent?: "start" | "end" | "center" | "between" | "around";
    left?: boolean;
    margin?: SignedUpTo12;
    smMargin?: SignedUpTo12;
    mdMargin?: SignedUpTo12;
    lgMargin?: SignedUpTo12;
    marginBottom?: SignedUpTo12;
    smMarginBottom?: SignedUpTo12;
    mdMarginBottom?: SignedUpTo12;
    lgMarginBottom?: SignedUpTo12;
    marginEnd?: SignedUpTo12;
    smMarginEnd?: SignedUpTo12;
    mdMarginEnd?: SignedUpTo12;
    lgMarginEnd?: SignedUpTo12;
    marginLeft?: SignedUpTo12;
    smMarginLeft?: SignedUpTo12;
    mdMarginLeft?: SignedUpTo12;
    lgMarginLeft?: SignedUpTo12;
    marginRight?: SignedUpTo12;
    smMarginRight?: SignedUpTo12;
    mdMarginRight?: SignedUpTo12;
    lgMarginRight?: SignedUpTo12;
    marginStart?: SignedUpTo12;
    smMarginStart?: SignedUpTo12;
    mdMarginStart?: SignedUpTo12;
    lgMarginStart?: SignedUpTo12;
    marginTop?: SignedUpTo12;
    smMarginTop?: SignedUpTo12;
    mdMarginTop?: SignedUpTo12;
    lgMarginTop?: SignedUpTo12;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    overflow?: "visible" | "hidden" | "scroll" | "scrollX" | "scrollY" | "auto";
    padding?: UnsignedUpTo12;
    smPadding?: UnsignedUpTo12;
    mdPadding?: UnsignedUpTo12;
    lgPadding?: UnsignedUpTo12;
    paddingX?: UnsignedUpTo12;
    smPaddingX?: UnsignedUpTo12;
    mdPaddingX?: UnsignedUpTo12;
    lgPaddingX?: UnsignedUpTo12;
    paddingY?: UnsignedUpTo12;
    smPaddingY?: UnsignedUpTo12;
    mdPaddingY?: UnsignedUpTo12;
    lgPaddingY?: UnsignedUpTo12;
    position?: "static" | "absolute" | "relative" | "fixed";
    right?: boolean;
    shape?:
        | "square"
        | "rounded"
        | "pill"
        | "circle"
        | "roundedTop"
        | "roundedBottom"
        | "roundedLeft"
        | "roundedRight";
    top?: boolean;
    width?: number | string;
    wrap?: boolean;
}

/*
Button Props Interface
https://pinterest.github.io/gestalt/#/Button
*/

export interface ButtonProps {
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

export interface CardProps {
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

export interface CheckboxProps {
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

export interface ColumnProps {
    span: UnsignedUpTo12;
    smSpan?: UnsignedUpTo12;
    mdSpan?: UnsignedUpTo12;
    lgSpan?: UnsignedUpTo12;
    children?: React.ReactNode;
}

/*
Container Props Interface
https://pinterest.github.io/gestalt/#/Container
*/

export interface ContainerProps {
    children?: React.ReactNode;
}

/*
Flyout Props Interface
https://pinterest.github.io/gestalt/#/Flyout
*/

export interface FlyoutProps {
    anchor: React.RefObject<any>;
    onDismiss: () => void;
    children?: React.ReactNode;
    color?: "blue" | "orange" | "red" | "white" | "darkGray";
    idealDirection?: "up" | "right" | "down" | "left";
    positionRelativeToAnchor?: boolean;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
}

/*
GroupAvatar Props Interface
https://pinterest.github.io/gestalt/#/GroupAvatar
*/

export interface GroupAvatarProps {
    collaborators: ReadonlyArray<{ name: string; src?: string }>;
    outline?: boolean;
    size?: "sm" | "md" | "lg";
}

/*
Heading Props Interface
https://pinterest.github.io/gestalt/#/Heading
*/

export interface HeaderProps {
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

export type Icons =
    | "ad"
    | "ad-group"
    | "add"
    | "add-circle"
    | "add-pin"
    | "alert"
    | "align-bottom-center"
    | "align-bottom-left"
    | "align-bottom-right"
    | "align-bottom"
    | "align-middle"
    | "align-top-center"
    | "align-top-left"
    | "align-top-right"
    | "align-top"
    | "angled-pin"
    | "apps"
    | "arrow-back"
    | "arrow-circle-down"
    | "arrow-circle-forward"
    | "arrow-circle-up"
    | "arrow-down"
    | "arrow-end"
    | "arrow-forward"
    | "arrow-start"
    | "arrow-up"
    | "arrow-up-right"
    | "bell"
    | "calendar"
    | "camera"
    | "camera-roll"
    | "cancel"
    | "canonical-pin"
    | "color-picker"
    | "check"
    | "check-circle"
    | "circle-outline"
    | "clear"
    | "clock"
    | "cog"
    | "compass"
    | "compose"
    | "crop"
    | "dash"
    | "download"
    | "duplicate"
    | "edit"
    | "ellipsis"
    | "ellipsis-circle-outline"
    | "envelope"
    | "eye"
    | "facebook"
    | "face-happy"
    | "face-sad"
    | "face-smiley"
    | "fill-opaque"
    | "fill-transparent"
    | "filter"
    | "flag"
    | "flashlight"
    | "flipHorizontal"
    | "flipVertical"
    | "gif"
    | "globe"
    | "globe-checked"
    | "gmail"
    | "google-plus"
    | "graph-bar"
    | "handle"
    | "hand-pointing"
    | "heart"
    | "heart-broken"
    | "impressum"
    | "key"
    | "knoop"
    | "lightbulb"
    | "lightning-bolt-circle"
    | "link"
    | "location"
    | "lock"
    | "logo-large"
    | "logo-small"
    | "logout"
    | "margins-large"
    | "margins-medium"
    | "margins-small"
    | "maximize"
    | "megaphone"
    | "menu"
    | "minimize"
    | "move"
    | "mute"
    | "overlay-text"
    | "pause"
    | "people"
    | "person"
    | "person-add"
    | "pin"
    | "pin-hide"
    | "pinterest"
    | "play"
    | "refresh"
    | "question-mark"
    | "remove"
    | "reorder-images"
    | "report"
    | "rotate"
    | "search"
    | "security"
    | "shopping-bag"
    | "smiley"
    | "smiley-outline"
    | "send"
    | "share"
    | "sound"
    | "sort-ascending"
    | "sort-descending"
    | "speech"
    | "speech-ellipsis"
    | "star"
    | "switch-account"
    | "tag"
    | "terms"
    | "text-align-left"
    | "text-align-center"
    | "text-align-right"
    | "text-all-caps"
    | "text-extra-small"
    | "text-large"
    | "text-line-height"
    | "text-medium"
    | "text-sentence-case"
    | "text-size"
    | "text-small"
    | "text-spacing"
    | "trash-can"
    | "twitter"
    | "video-camera"
    | "view-type-default"
    | "view-type-dense"
    | "view-type-list";

export interface IconProps {
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

export interface IconButtonProps {
    accessibilityLabel: string;
    accessibilityExpanded?: boolean;
    accessibilityHaspopup?: boolean;
    bgColor?: "transparent" | "transparentDarkGray" | "gray" | "lightGray" | "white" | "blue";
    dangerouslySetSvgPath?: { __path: string};
    disabled?: boolean;
    icon: Icons;
    iconColor?: "blue" | "darkGray" | "gray" | "red" | "white";
    onClick?: (args: { event: React.SyntheticEvent<React.MouseEvent> }) => void;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}

/*
Image Props Interface
https://pinterest.github.io/gestalt/#/Image
*/

export interface ImageProps {
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

export interface LabelProps {
    htmlFor: string;
    children?: React.ReactNode;
}

/*
Letterbox Props Interface
https://pinterest.github.io/gestalt/#/Letterbox
*/

export interface LetterboxProps {
    contentAspectRatio: number;
    height: number;
    width: number;
    children?: React.ReactNode;
}

/*
Link Props Interface
https://pinterest.github.io/gestalt/#/Link
*/

export interface LinkProps {
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

export interface MaskProps {
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

export interface MasonryProps {
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

export interface ModalProps {
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

export interface PogProps {
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

export interface PulsarProps {
    paused?: boolean;
    size?: number;
}

/*
RadioButton Props Interface
https://pinterest.github.io/gestalt/#/RadioButton
*/

export interface RadioButtonProps {
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

export interface SearchFieldProps {
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

export interface SegmentedControlProps {
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

export interface SelectListProps {
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

export interface SpinnerProps {
    accessibilityLabel: string;
    show: boolean;
}

/*
Sticky Props Interface
https://pinterest.github.io/gestalt/#/Sticky
*/

export interface StickyProps {
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

export interface SwitchProps {
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

export interface TabsProps {
    activeTabIndex: number;
    onChange: (
        args: {
            event: React.SyntheticEvent<React.MouseEvent>;
            activeTabIndex: number;
        }
    ) => void;
    tabs: ReadonlyArray<{ text: any; href: string }>;
    wrap?: boolean;
}

/*
Text Props Interface
https://pinterest.github.io/gestalt/#/Text
*/

export interface TextProps {
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
    leading?: "short" | "tall";
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

export interface TextAreaProps {
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

export interface TextFieldProps {
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

export interface ToastProps {
    color?: "darkGray" | "orange" | "red";
    icon?: "arrow-circle-forward";
    text?: string | ReadonlyArray<string>;
    thumbnail?: React.ReactElement;
}

/*
Tooltip Interface Props
https://pinterest.github.io/gestalt/#/Tooltip
*/

export interface TooltipProps {
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

export interface TouchableProps {
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

export interface VideoProps {
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

export class Avatar extends React.Component<AvatarProps, any> {}
export class Box extends React.Component<BoxProps, any> {}
export class Button extends React.Component<ButtonProps, any> {}
export class Card extends React.Component<CardProps, any> {}
export class Checkbox extends React.Component<CheckboxProps, any> {}
export class Column extends React.Component<ColumnProps, any> {}
export class Container extends React.Component<ContainerProps, any> {}
export class Divider extends React.Component<{}, any> {}
export class Flyout extends React.Component<FlyoutProps, any> {}
export class GroupAvatar extends React.Component<GroupAvatarProps, any> {}
export class Heading extends React.Component<HeaderProps, any> {}
export class Icon extends React.Component<IconProps, any> {}
export class IconButton extends React.Component<IconButtonProps, any> {}
export class Image extends React.Component<ImageProps, any> {}
export class Label extends React.Component<LabelProps, any> {}
export class Letterbox extends React.Component<LetterboxProps, any> {}
export class Link extends React.Component<LinkProps, any> {}
export class Mask extends React.Component<MaskProps, any> {}
export class Masonry extends React.Component<MasonryProps, any> {}
export class Modal extends React.Component<ModalProps, any> {}
export class Pog extends React.Component<PogProps, any> {}
export class Pulsar extends React.Component<PulsarProps, any> {}
export class RadioButton extends React.Component<RadioButtonProps, any> {}
export class SearchField extends React.Component<SearchFieldProps, any> {}
export class SegmentedControl extends React.Component<SegmentedControlProps, any> {}
export class SelectList extends React.Component<SelectListProps, any> {}
export class Spinner extends React.Component<SpinnerProps, any> {}
export class Sticky extends React.Component<StickyProps, any> {}
export class Switch extends React.Component<SwitchProps, any> {}
export class Tabs extends React.Component<TabsProps, any> {}
export class Text extends React.Component<TextProps, any> {}
export class TextArea extends React.Component<TextAreaProps, any> {}
export class TextField extends React.Component<TextFieldProps, any> {}
export class Toast extends React.Component<ToastProps, any> {}
export class Tooltip extends React.Component<TooltipProps, any> {}
export class Touchable extends React.Component<TouchableProps, any> {}
export class Video extends React.Component<VideoProps, any> {}
