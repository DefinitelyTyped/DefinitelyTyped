// Type definitions for gestalt 12.13
// Project: https://github.com/pinterest/gestalt, https://pinterest.github.io/gestalt
// Definitions by: Nicolás Serrano Arévalo <https://github.com/serranoarevalo>
//                 Josh Gachnang <https://github.com/joshgachnang>
//                 Calvin Chhour <https://github.com/calvinchhour>
//                 Muhammed Hafiz <https://github.com/zifahm>
//                 Kyle Hensel <https://github.com/k-yle>
//                 Francisco Jimenez <https://github.com/jimenezff>
//                 Charlie Gu <https://github.com/czgu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type AbstractEventHandler<T extends React.SyntheticEvent<HTMLElement> | Event, U = {}> = (
    arg: U & {
        readonly event: T;
    },
) => void;

/*
Avatar Props Interface
https://gestalt.netlify.app/Avatar
*/

export interface AvatarProps {
    name: string;
    accessibilityLabel?: string;
    outline?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fit';
    src?: string;
    verified?: boolean;
}

export type UnsignedUpTo12 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type SignedUpTo12 = -12 | -11 | -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | UnsignedUpTo12;

/*
AvatarPair Props Interface
https://gestalt.netlify.app/AvatarPair
*/

export interface AvatarPairProps {
    collaborators: ReadonlyArray<{
        name: string;
        src?: string;
    }>;
    size?: 'md' | 'lg' | 'fit';
}

/*
Badge Props Interface
https://gestalt.netlify.app/Badge
*/

export interface BadgeProps {
    text: string;
    position?: 'middle' | 'top';
}

/*
Box Props Interface
https://gestalt.netlify.app/Box
*/

export interface BoxProps {
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    borderSize?: 'sm' | 'lg' | 'none';
    bottom?: boolean;
    children?: React.ReactNode;
    color?:
        | 'blue'
        | 'darkGray'
        | 'darkWash'
        | 'eggplant'
        | 'gray'
        | 'green'
        | 'lightGray'
        | 'lightWash'
        | 'maroon'
        | 'midnight'
        | 'navy'
        | 'olive'
        | 'orange'
        | 'orchid'
        | 'pine'
        | 'purple'
        | 'red'
        | 'transparent'
        | 'transparentDarkGray'
        | 'watermelon'
        | 'white';
    column?: UnsignedUpTo12;
    smColumn?: UnsignedUpTo12;
    mdColumn?: UnsignedUpTo12;
    lgColumn?: UnsignedUpTo12;
    dangerouslySetInlineStyle?: {
        __style: {
            [key: string]: string | number | undefined;
        };
    };
    direction?: 'row' | 'column';
    smDirection?: 'row' | 'column';
    mdDirection?: 'row' | 'column';
    lgDirection?: 'row' | 'column';
    display?: 'none' | 'flex' | 'block' | 'inlineBlock' | 'visuallyHidden';
    smDisplay?: 'none' | 'flex' | 'block' | 'inlineBlock' | 'visuallyHidden';
    mdDisplay?: 'none' | 'flex' | 'block' | 'inlineBlock' | 'visuallyHidden';
    lgDisplay?: 'none' | 'flex' | 'block' | 'inlineBlock' | 'visuallyHidden';
    fit?: boolean;
    flex?: 'grow' | 'shrink' | 'none';
    height?: number | string;
    justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    left?: boolean;
    margin?: SignedUpTo12 | 'auto';
    smMargin?: SignedUpTo12 | 'auto';
    mdMargin?: SignedUpTo12 | 'auto';
    lgMargin?: SignedUpTo12 | 'auto';
    marginBottom?: SignedUpTo12 | 'auto';
    smMarginBottom?: SignedUpTo12 | 'auto';
    mdMarginBottom?: SignedUpTo12 | 'auto';
    lgMarginBottom?: SignedUpTo12 | 'auto';
    marginEnd?: SignedUpTo12 | 'auto';
    smMarginEnd?: SignedUpTo12 | 'auto';
    mdMarginEnd?: SignedUpTo12 | 'auto';
    lgMarginEnd?: SignedUpTo12 | 'auto';
    marginLeft?: SignedUpTo12 | 'auto';
    smMarginLeft?: SignedUpTo12 | 'auto';
    mdMarginLeft?: SignedUpTo12 | 'auto';
    lgMarginLeft?: SignedUpTo12 | 'auto';
    marginRight?: SignedUpTo12 | 'auto';
    smMarginRight?: SignedUpTo12 | 'auto';
    mdMarginRight?: SignedUpTo12 | 'auto';
    lgMarginRight?: SignedUpTo12 | 'auto';
    marginStart?: SignedUpTo12 | 'auto';
    smMarginStart?: SignedUpTo12 | 'auto';
    mdMarginStart?: SignedUpTo12 | 'auto';
    lgMarginStart?: SignedUpTo12 | 'auto';
    marginTop?: SignedUpTo12 | 'auto';
    smMarginTop?: SignedUpTo12 | 'auto';
    mdMarginTop?: SignedUpTo12 | 'auto';
    lgMarginTop?: SignedUpTo12 | 'auto';
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    opacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
    overflow?: 'visible' | 'hidden' | 'scroll' | 'scrollX' | 'scrollY' | 'auto';
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
    position?: 'static' | 'absolute' | 'relative' | 'fixed';
    ref?: React.Ref<'div'>;
    right?: boolean;
    role?: string;
    rounding?: 'pill' | 'circle' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    top?: boolean;
    userSelect?: 'auto' | 'none';
    width?: number | string;
    wrap?: boolean;
    zIndex?: {
        index(): number;
    };
}

/*
Button Props Interface
https://gestalt.netlify.app/Button
*/

export interface ButtonProps {
    text: string;
    accessibilityControls?: string;
    accessibilityExpanded?: boolean;
    accessibilityHaspopup?: boolean;
    accessibilityLabel?: string;
    color?: 'gray' | 'red' | 'blue' | 'transparent' | 'transparentWhiteText' | 'white';
    disabled?: boolean;
    href?: string;
    iconEnd?: Icons;
    inline?: boolean;
    name?: string;
    onClick?: AbstractEventHandler<
        | React.MouseEvent<HTMLButtonElement>
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLButtonElement>
    >;
    ref?: React.Ref<'button'> | React.Ref<'a'>;
    rel?: 'none' | 'nofollow';
    role?: 'button' | 'link';
    selected?: boolean;
    size?: 'sm' | 'md' | 'lg';
    target?: null | 'self' | 'blank';
    type?: 'submit' | 'button';
}

/*
ButtonGroup Props Interface
https://gestalt.netlify.app/ButtonGroup
*/

export interface ButtonGroupProps {
    children?: React.ReactNode;
}

/*
Callout Props Interface
https://gestalt.netlify.app/Callout
*/

export interface LinkData {
    href: string;
    label: string;
    onClick?: AbstractEventHandler<React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>>;
}

export interface CalloutProps {
    iconAccessibilityLabel: string;
    message: string;
    type: 'error' | 'info' | 'warning';
    dismissButton?: {
        accessibilityLabel: string;
        onDismiss: () => void;
    };
    primaryLink?: LinkData;
    secondaryLink?: LinkData;
    title?: string;
}

/*
Card Props Interface
https://gestalt.netlify.app/Card
*/

export interface CardProps {
    active?: boolean;
    children?: React.ReactNode;
    image?: React.ReactNode;
    onMouseEnter?: (args: { event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>> }) => void;
    onMouseLeave?: (args: { event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>> }) => void;
}

/*
Checkbox Props Interface
https://gestalt.netlify.app/Checkbox
*/

export interface CheckboxProps {
    id: string;
    onChange: AbstractEventHandler<React.SyntheticEvent<HTMLInputElement>, { checked: boolean }>;
    checked?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    hasError?: boolean;
    indeterminate?: boolean;
    label?: string;
    name?: string;

    onClick?: AbstractEventHandler<React.SyntheticEvent<HTMLInputElement>, { checked: boolean }>;
    ref?: React.Ref<'input'>;
    size?: 'sm' | 'md';
}
/*
Collage Props Interface
https://gestalt.netlify.app/Column
*/

export interface CollageProps {
    columns: number;
    height: number;
    renderImage: (args: { width: number; height: number; index: number }) => React.ReactNode;
    width: number;
    cover?: boolean;
    gutter?: number;
    layoutKey?: number;
}

/*
Column Props Interface
https://gestalt.netlify.app/Column
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
https://gestalt.netlify.app/Container
*/

export interface ContainerProps {
    children?: React.ReactNode;
}

/*
Flyout Props Interface
https://gestalt.netlify.app/Flyout
*/

export interface FlyoutProps {
    anchor: HTMLElement; // ideally a HTMLAnchorElement
    onDismiss: () => void;
    children?: React.ReactNode;
    color?: 'blue' | 'orange' | 'red' | 'white' | 'darkGray';
    idealDirection?: 'up' | 'right' | 'down' | 'left';
    positionRelativeToAnchor?: boolean;
    shouldFocus?: boolean;
    showCaret?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'flexible' | number;
}

/*
GroupAvatar Props Interface
https://gestalt.netlify.app/GroupAvatar
*/

export interface GroupAvatarProps {
    collaborators: ReadonlyArray<{ name: string; src?: string }>;
    outline?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fit';
}

/*
Heading Props Interface
https://gestalt.netlify.app/Heading
*/

export interface HeaderProps {
    accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    align?: 'left' | 'right' | 'center' | 'justify';
    children?: React.ReactNode;
    color?:
        | 'blue'
        | 'darkGray'
        | 'eggplant'
        | 'gray'
        | 'green'
        | 'lightGray'
        | 'maroon'
        | 'midnight'
        | 'navy'
        | 'olive'
        | 'orange'
        | 'orchid'
        | 'pine'
        | 'purple'
        | 'red'
        | 'watermelon'
        | 'white';
    id?: string;
    overflow?: 'normal' | 'breakWord';
    size?: 'sm' | 'md' | 'lg';
    truncate?: boolean;
}

/*
Icon Props Interface
https://gestalt.netlify.app/Icon
*/

export type Icons =
    | 'ad'
    | 'ad-group'
    | 'add'
    | 'add-circle'
    | 'add-layout'
    | 'add-pin'
    | 'ads-stats'
    | 'ads-overview'
    | 'alert'
    | 'align-bottom-center'
    | 'align-bottom-left'
    | 'align-bottom-right'
    | 'align-bottom'
    | 'align-middle'
    | 'align-top-center'
    | 'align-top-left'
    | 'align-top-right'
    | 'align-top'
    | 'android-share'
    | 'angled-pin'
    | 'apps'
    | 'arrow-back'
    | 'arrow-circle-down'
    | 'arrow-circle-forward'
    | 'arrow-circle-up'
    | 'arrow-down'
    | 'arrow-end'
    | 'arrow-forward'
    | 'arrow-start'
    | 'arrow-up'
    | 'arrow-up-right'
    | 'bell'
    | 'calendar'
    | 'camera'
    | 'camera-roll'
    | 'cancel'
    | 'canonical-pin'
    | 'color-picker'
    | 'check'
    | 'check-circle'
    | 'circle-outline'
    | 'clear'
    | 'clock'
    | 'code'
    | 'cog'
    | 'compass'
    | 'compose'
    | 'crop'
    | 'dash'
    | 'conversion-tag'
    | 'credit-card'
    | 'directional-arrow-left'
    | 'directional-arrow-right'
    | 'download'
    | 'drag-drop'
    | 'duplicate'
    | 'edit'
    | 'ellipsis'
    | 'ellipsis-circle-outline'
    | 'envelope'
    | 'eye'
    | 'facebook'
    | 'face-happy'
    | 'face-sad'
    | 'face-smiley'
    | 'file-unknown'
    | 'fill-opaque'
    | 'fill-transparent'
    | 'filter'
    | 'flag'
    | 'flash'
    | 'flashlight'
    | 'flipHorizontal'
    | 'flipVertical'
    | 'folder'
    | 'gif'
    | 'globe'
    | 'globe-checked'
    | 'gmail'
    | 'google-plus'
    | 'graph-bar'
    | 'handle'
    | 'hand-pointing'
    | 'heart'
    | 'heart-outline'
    | 'heart-broken'
    | 'impressum'
    | 'info-circle'
    | 'key'
    | 'knoop'
    | 'lightbulb'
    | 'lightning-bolt-circle'
    | 'link'
    | 'location'
    | 'lock'
    | 'logo-large'
    | 'logo-small'
    | 'logout'
    | 'margins-large'
    | 'margins-medium'
    | 'margins-small'
    | 'maximize'
    | 'megaphone'
    | 'menu'
    | 'minimize'
    | 'move'
    | 'mute'
    | 'overlay-text'
    | 'pause'
    | 'people'
    | 'person'
    | 'person-add'
    | 'phone'
    | 'pin'
    | 'pin-hide'
    | 'pinterest'
    | 'play'
    | 'protect'
    | 'refresh'
    | 'question-mark'
    | 'remove'
    | 'reorder-images'
    | 'replace'
    | 'report'
    | 'rotate'
    | 'scale'
    | 'search'
    | 'security'
    | 'shopping-bag'
    | 'smiley'
    | 'smiley-outline'
    | 'send'
    | 'share'
    | 'sound'
    | 'sort-ascending'
    | 'sort-descending'
    | 'sparkle'
    | 'speech'
    | 'speech-ellipsis'
    | 'star'
    | 'star-half'
    | 'story-pin'
    | 'switch-account'
    | 'tag'
    | 'terms'
    | 'text-align-left'
    | 'text-align-center'
    | 'text-align-right'
    | 'text-all-caps'
    | 'text-extra-small'
    | 'text-large'
    | 'text-line-height'
    | 'text-medium'
    | 'text-sentence-case'
    | 'text-size'
    | 'text-small'
    | 'text-spacing'
    | 'trash-can'
    | 'twitter'
    | 'video-camera'
    | 'view-type-default'
    | 'view-type-dense'
    | 'view-type-list'
    | 'workflow-status-all'
    | 'workflow-status-halted'
    | 'workflow-status-in-progress'
    | 'workflow-status-ok'
    | 'workflow-status-problem'
    | 'workflow-status-unstarted'
    | 'workflow-status-warning';

export interface IconProps {
    accessibilityLabel: string;

    color?:
        | 'blue'
        | 'darkGray'
        | 'eggplant'
        | 'gray'
        | 'green'
        | 'lightGray'
        | 'maroon'
        | 'midnight'
        | 'navy'
        | 'olive'
        | 'orange'
        | 'orchid'
        | 'pine'
        | 'purple'
        | 'red'
        | 'watermelon'
        | 'white';
    dangerouslySetSvgPath?: { __path: string };
    icon?: Icons;
    inline?: boolean;
    size?: number | string;
}

/*
IconButton Props Interface
https://gestalt.netlify.app/IconButton
*/

export interface IconButtonProps {
    bgColor?: 'transparent' | 'darkGray' | 'transparentDarkGray' | 'gray' | 'lightGray' | 'white' | 'red';
    accessibilityControls?: string;
    accessibilityExpanded?: boolean;
    accessibilityHaspopup?: boolean;
    accessibilityLabel: string;

    dangerouslySetSvgPath?: { __path: string };
    disabled?: boolean;
    icon?: Icons;
    iconColor?: 'gray' | 'darkGray' | 'red' | 'white';
    onClick?: AbstractEventHandler<React.MouseEvent<HTMLButtonElement>>;
    padding?: 1 | 2 | 3 | 4 | 5;
    ref?: React.Ref<'button'>;
    selected?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

/*
Image Props Interface
https://gestalt.netlify.app/Image
*/

export interface ImageProps {
    alt: string;
    color: string;
    naturalHeight: number;
    naturalWidth: number;
    src: string;
    children?: React.ReactNode;
    fit?: 'cover' | 'contain' | 'none';
    importance?: 'high' | 'low' | 'auto';
    loading?: 'eager' | 'lazy' | 'auto';
    onError?: () => void;
    onLoad?: () => void;
    sizes?: string;
    srcSet?: string;
}

/*
Label Props Interface
https://gestalt.netlify.app/Label
*/

export interface LabelProps {
    htmlFor: string;
    children?: React.ReactNode;
}
/*
Layer Interface
https://gestalt.netlify.app/Layer
*/

export interface LayerProps {
    children: React.ReactNode;
}

/*
Letterbox Props Interface
https://gestalt.netlify.app/Letterbox
*/

export interface LetterboxProps {
    contentAspectRatio: number;
    height: number;
    width: number;
    children?: React.ReactNode;
}

/*
Link Props Interface
https://gestalt.netlify.app/Link
*/

export interface LinkProps {
    href: string;
    accessibilityLabel?: string;
    accessibilitySelected?: boolean;
    children?: React.ReactNode;
    hoverStyle?: 'none' | 'underline';
    id?: string;
    inline?: boolean;
    onBlur?: AbstractEventHandler<React.FocusEvent<HTMLAnchorElement>>;
    onClick?: AbstractEventHandler<React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>>;
    onFocus?: AbstractEventHandler<React.FocusEvent<HTMLAnchorElement>>;
    rel?: 'none' | 'nofollow';
    role?: 'tab';
    rounding?: 'pill' | 'circle' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    tapStyle?: 'none' | 'compress';
    target?: null | 'self' | 'blank';
}

/*
Mask Props Interface
https://gestalt.netlify.app/Mask
*/

export interface MaskProps {
    children?: React.ReactNode;
    height?: number | string;
    rounding?: 'circle' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    wash?: boolean;
    width?: number | string;
    willChangeTransform?: boolean;
}

/*
Masonry Props Interface
https://gestalt.netlify.app/Masonry
*/

export interface MasonryProps<T = any> {
    comp: React.ComponentType<{ data: T; itemIdx?: number; isMeasuring?: boolean }>;
    items: T[];
    columnWidth?: number;
    flexible?: boolean;
    gutterWidth?: number;
    layout?: 'MasonryDefaultLayout' | 'MasonryUniformRowLayout';
    loadItems?: () => void;
    measurementStore?: any;
    minCols?: number;
    scrollContainer?: () => HTMLElement;
    virtualBoundsBottom?: number;
    virtualBoundsTop?: number;
    virtualize?: boolean;
}

/*
Modal Props Interface
https://gestalt.netlify.app/Modal
*/

export interface ModalProps {
    accessibilityModalLabel: string;
    onDismiss: () => void;
    children?: React.ReactNode;
    closeOnOutsideClick?: boolean;
    footer?: React.ReactNode;
    heading?: string | React.ReactNode;
    ref?: React.Ref<'div'>;
    role?: 'alertdialog' | 'dialog';
    size?: 'sm' | 'md' | 'lg' | number;
}

/*
Pog Props Interface
https://gestalt.netlify.app/Pog
*/

export interface PogProps {
    accessibilityLabel?: string;
    active?: boolean;
    bgColor?: 'transparent' | 'darkGray' | 'transparentDarkGray' | 'gray' | 'lightGray' | 'white' | 'red';
    dangerouslySetSvgPath?: { __path: string };
    focused?: boolean;
    hovered?: boolean;
    icon?: Icons;
    iconColor?: 'gray' | 'darkGray' | 'red' | 'white';
    padding?: 1 | 2 | 3 | 4 | 5;
    selected?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

/*
Provider Props Interface
https://gestalt.netlify.app/ProviderProps
*/

export interface ProviderProps {
    colorScheme?: 'light' | 'dark' | 'userPreference';
    id?: string;
}

/*
Pulsar Props Interface
https://gestalt.netlify.app/Pulsar
*/

export interface PulsarProps {
    paused?: boolean;
    size?: number;
}

/*
RadioButton Props Interface
https://gestalt.netlify.app/RadioButton
*/

export interface RadioButtonProps {
    id: string;
    onChange: AbstractEventHandler<React.SyntheticEvent<HTMLInputElement>, { checked: boolean }>;
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    name?: string;
    value?: string;
    size?: 'sm' | 'md';
}

/*
Row Props Interface
https://gestalt.netlify.app/Row
*/

export interface RowProps {
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    children?: React.ReactNode;
    fit?: boolean;
    flex?: 'grow' | 'shrink' | 'none';
    gap?: UnsignedUpTo12;
    height?: number | string;
    justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    width?: number | string;
    wrap?: boolean;
}

/*
SearchField Props Interface
https://gestalt.netlify.app/SearchField
*/

export interface SearchFieldProps {
    accessibilityLabel: string;
    id: string;
    onChange: (args: { value: string; syntheticEvent: React.SyntheticEvent<HTMLInputElement> }) => void;
    autoComplete?: 'on' | 'off' | 'username' | 'name';
    errorMessage?: string;
    onBlur?: (args: { event: React.SyntheticEvent<HTMLInputElement> }) => void;
    onFocus?: (args: { value: string; syntheticEvent: React.SyntheticEvent<HTMLInputElement> }) => void;
    placeholder?: string;
    ref?: React.Ref<'input'>;
    size?: 'md' | 'lg';
    value?: string;
}

/*
SegmentedControl Props Interface
https://gestalt.netlify.app/SegmentedControl
*/

export interface SegmentedControlProps {
    items: React.ReactNode[];
    onChange: (args: { event: React.SyntheticEvent<React.MouseEvent>; activeIndex: number }) => void;
    selectedItemIndex: number;
    responsive?: boolean;
    size?: 'md' | 'lg';
}

/*
SelectList Props Interface
https://gestalt.netlify.app/SelectList
*/

export interface SelectListProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLElement>; value: string }) => void;
    options: ReadonlyArray<{ label: string; value: string }>;
    disabled?: boolean;
    errorMessage?: string;
    helperText?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    size?: 'md' | 'lg';
    value?: string;
}

/*
Spinner Props Interface
https://gestalt.netlify.app/Spinner
*/

export interface SpinnerProps {
    accessibilityLabel: string;
    show: boolean;
    delay?: boolean;
    size?: 'sm' | 'md';
}

/*
Stack Props Interface
https://gestalt.netlify.app/Stack
*/

export interface StackProps {
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    children?: React.ReactNode;
    fit?: boolean;
    flex?: 'grow' | 'shrink' | 'none';
    gap?: UnsignedUpTo12;
    height?: number | string;
    justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    width?: number | string;
    wrap?: boolean;
}

/*
Sticky Props Interface
https://gestalt.netlify.app/Sticky
*/

export interface StickyProps {
    bottom?: number | string;
    children?: React.ReactNode;
    height?: number;
    left?: number | string;
    right?: number | string;
    top?: number | string;
    zIndex?: { index(): number };
}

/*
Switch Props Interface
https://gestalt.netlify.app/Switch
*/

export interface SwitchProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: boolean }) => void;
    disabled?: boolean;
    name?: string;
    switched?: boolean;
}

/*
Table Props Interface
https://gestalt.netlify.app/Table
*/

export interface TableProps {
    borderSize?: 'sm' | 'none';
    children?: React.ReactNode;
    maxHeight?: 'number' | 'string';
}

export interface TableBodyProps {
    children?: React.ReactNode;
}

export interface TableCellProps {
    children?: React.ReactNode;
    colSpan?: number;
    rowSpan?: number;
}

export interface TableFooterProps {
    children?: React.ReactNode;
}

export interface TableHeaderProps {
    children?: React.ReactNode;
    sticky?: boolean;
}

export interface TableHeaderCellProps extends TableCellProps {
    scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
}

export interface TableRowProps {
    children?: React.ReactNode;
}

export interface TableSortableHeaderCellProps extends TableHeaderCellProps {
    onSortChange: AbstractEventHandler<
        React.MouseEvent<HTMLTableCellElement> | React.KeyboardEvent<HTMLTableCellElement>
    >;
    sortOrder: 'asc' | 'desc';
    status: 'active' | 'inactive';
}

/*
Tabs Props Interface
https://gestalt.netlify.app/Tabs
*/

export interface TabsProps {
    activeTabIndex: number;
    onChange: (args: { event: React.SyntheticEvent<React.MouseEvent>; activeTabIndex: number }) => void;
    tabs: ReadonlyArray<{ text: any; href: string }>;
    size?: 'md' | 'lg';
    wrap?: boolean;
}

/*
TabArea Props Interface
https://gestalt.netlify.app/TapArea
*/

export interface TapAreaProps {
    accessibilityControls?: string;
    accessibilityExpanded?: boolean;
    accessibilityHaspopup?: boolean;
    accessibilityLabel?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    fullHeight?: boolean;
    fullWidth?: boolean;
    mouseCursor?: 'copy' | 'grab' | 'grabbing' | 'move' | 'noDrop' | 'pointer' | 'zoomIn' | 'zoomOut';
    onBlur?: AbstractEventHandler<React.FocusEvent<HTMLDivElement>>;
    onFocus?: AbstractEventHandler<React.FocusEvent<HTMLDivElement>>;
    onMouseEnter?: AbstractEventHandler<React.MouseEvent<HTMLDivElement>>;
    onMouseLeave?: AbstractEventHandler<React.MouseEvent<HTMLDivElement>>;
    onTap?: AbstractEventHandler<React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>>;
    ref?: React.Ref<'div'>;
    tapStyle?: 'none' | 'compress';
    rounding?: 'pill' | 'circule' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

/*
Text Props Interface
https://gestalt.netlify.app/Text
*/

export interface TextProps {
    align?: 'left' | 'right' | 'center' | 'justify';
    children?: React.ReactNode;
    color?:
        | 'blue'
        | 'darkGray'
        | 'eggplant'
        | 'gray'
        | 'green'
        | 'lightGray'
        | 'maroon'
        | 'midnight'
        | 'navy'
        | 'olive'
        | 'orange'
        | 'orchid'
        | 'pine'
        | 'purple'
        | 'red'
        | 'watermelon'
        | 'white';
    inline?: boolean;
    italic?: boolean;
    overflow?: 'normal' | 'breakWord';
    size?: 'sm' | 'md' | 'lg';
    truncate?: boolean;
    weight?: 'bold' | 'normal';
}

/*
TextArea Interface Props
https://gestalt.netlify.app/TextArea
*/

export interface TextAreaProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLTextAreaElement>; value: string }) => void;
    disabled?: boolean;
    errorMessage?: string;
    helperText?: string;
    label?: string;
    name?: string;
    onBlur?: (args: { event: React.SyntheticEvent<HTMLTextAreaElement>; value: string }) => void;
    onFocus?: (args: { event: React.SyntheticEvent<HTMLTextAreaElement>; value: string }) => void;
    onKeyDown?: (args: { event: React.SyntheticEvent<HTMLTextAreaElement>; value: string }) => void;
    placeholder?: string;
    rows?: number;
    value?: string;
}

/*
TextField Interface Props
https://gestalt.netlify.app/TextField
*/

export interface TextFieldProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: string }) => void;
    autoComplete?: 'current-password' | 'on' | 'off' | 'username' | 'new-password';
    disabled?: boolean;
    errorMessage?: string;
    helperText?: string;
    label?: string;
    name?: string;
    onBlur?: (args: { event: React.SyntheticEvent<React.FocusEvent<HTMLInputElement>>; value: string }) => void;
    onFocus?: (args: { event: React.SyntheticEvent<React.FocusEvent<HTMLInputElement>>; value: string }) => void;
    onKeyDown?: (args: { event: React.SyntheticEvent<React.KeyboardEvent<HTMLInputElement>>; value: string }) => void;
    placeholder?: string;
    ref?: React.Ref<'input'>;
    size?: 'md' | 'lg';
    type?: 'date' | 'email' | 'number' | 'password' | 'text' | 'url';
    value?: string;
}

/*
Toast Interface Props
https://gestalt.netlify.app/Toast
*/

export interface ToastProps {
    button?: React.ReactNode;
    color?: 'darkGray' | 'red';
    text?: string | React.ReactElement;
    thumbnail?: React.ReactNode;
    thumbnailShape?: 'circle' | 'rectangle' | 'square';
}

/*
Tooltip Interface Props
https://gestalt.netlify.app/Tooltip
*/

export interface TooltipProps {
    children: React.ReactNode;
    text: string;
    idealDirection?: 'up' | 'right' | 'down' | 'left';
    inline?: boolean;
    link?: React.ReactNode;
}

/*
Typeahead Interface Props
https://gestalt.netlify.app/Typeahead
*/

export interface TypeaheadProps {
    id: string;
    noResultText: string;
    options: ReadonlyArray<{
        label: string;
        value: string;
    }>;
    label?: string;
    onBlur?: (args: {
        event: React.FocusEvent<HTMLInputElement> | React.SyntheticEvent<HTMLInputElement>;
        value: string;
    }) => void;
    onChange?: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: string }) => void;
    onFocus?: (args: { event: React.FocusEvent<HTMLInputElement>; value: string }) => void;
    onSelect?: (args: {
        event: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>;
        item:
            | {
                  label: string;
                  value: string;
              }
            | null
            | undefined;
    }) => void;
    placeholder?: string;
    ref?: React.Ref<'input'>;
    size?: 'md' | 'lg';
    value?: string;
}

/*
Video Props Interface
https://gestalt.netlify.app/Video
*/

export interface VideoProps {
    accessibilityMaximizeLabel?: string;
    accessibilityMinimizeLabel?: string;
    accessibilityMuteLabel?: string;
    accessibilityPauseLabel?: string;
    accessibilityPlayLabel?: string;
    accessibilityUnmuteLabel?: string;
    aspectRatio: number;
    captions: string;
    playbackRate?: number;
    playing?: boolean;
    preload?: 'auto' | 'metadata' | 'none';
    src: string | ReadonlyArray<{ type: 'video/m3u8' | 'video/mp4' | 'video/ogg'; src: string }>;
    volume?: number;
    children?: Node;
    controls?: boolean;
    crossOrigin?: 'anonymous' | 'use-credentials';
    loop?: boolean;
    onDurationChange?: (args: { event: React.SyntheticEvent<HTMLVideoElement>; duration: number }) => void;
    onEnded?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>>;
    onFullscreenChange?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>, { fullscreen: boolean }>;
    onLoadedChange?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>, { loaded: number }>;
    onPlay?: AbstractEventHandler<React.SyntheticEvent<HTMLDivElement>>;
    onPlayheadDown?: AbstractEventHandler<React.MouseEvent<HTMLDivElement>>;
    onPlayheadUp?: AbstractEventHandler<React.MouseEvent<HTMLDivElement>>;
    onPause?: AbstractEventHandler<React.SyntheticEvent<HTMLDivElement>>;
    onReady?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>>;
    onSeek?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>>;
    onTimeChange?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>, { time: number }>;
    onVolumeChange?: AbstractEventHandler<React.SyntheticEvent<HTMLDivElement>, { volume: number }>;

    playsInline?: boolean;
    poster?: string;
}

export class Avatar extends React.Component<AvatarProps, any> {}
export class AvatarPair extends React.Component<AvatarPairProps, any> {}
export class Badge extends React.Component<BadgeProps, any> {}
export class Box extends React.Component<BoxProps, any> {}
export class Button extends React.Component<ButtonProps, any> {}
export class ButtonGroup extends React.Component<ButtonGroupProps, any> {}
export class Callout extends React.Component<CalloutProps, any> {}
export class Card extends React.Component<CardProps, any> {}
export class Checkbox extends React.Component<CheckboxProps, any> {}
export class Collage extends React.Component<CollageProps, any> {}
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
export class Layer extends React.Component<LayerProps, any> {}
export class Letterbox extends React.Component<LetterboxProps, any> {}
export class Link extends React.Component<LinkProps, any> {}
export class Mask extends React.Component<MaskProps, any> {}
export class Masonry extends React.Component<MasonryProps, any> {}
export class Modal extends React.Component<ModalProps, any> {}
export class Pog extends React.Component<PogProps, any> {}
export class Provider extends React.Component<ProviderProps, any> {}
export class Pulsar extends React.Component<PulsarProps, any> {}
export class RadioButton extends React.Component<RadioButtonProps, any> {}
export class Row extends React.Component<RowProps, any> {}
export class SearchField extends React.Component<SearchFieldProps, any> {}
export class SegmentedControl extends React.Component<SegmentedControlProps, any> {}
export class SelectList extends React.Component<SelectListProps, any> {}
export class Spinner extends React.Component<SpinnerProps, any> {}
export class Stack extends React.Component<StackProps, any> {}
export class Sticky extends React.Component<StickyProps, any> {}
export class Switch extends React.Component<SwitchProps, any> {}
export class Table extends React.Component<TableProps, any> {
    static Body: React.FC<TableBodyProps>;
    static Cell: React.FC<TableCellProps>;
    static Footer: React.FC<TableFooterProps>;
    static Header: React.FC<TableHeaderProps>;
    static HeaderCell: React.FC<TableHeaderCellProps>;
    static Row: React.FC<TableRowProps>;
    static SortableHeaderCell: React.FC<TableSortableHeaderCellProps>;
}
export class Tabs extends React.Component<TabsProps, any> {}
export class TapArea extends React.Component<TapAreaProps, any> {}
export class Text extends React.Component<TextProps, any> {}
export class TextArea extends React.Component<TextAreaProps, any> {}
export class TextField extends React.Component<TextFieldProps, any> {}
export class Toast extends React.Component<ToastProps, any> {}
export class Tooltip extends React.Component<TooltipProps, any> {}
export class Typeahead extends React.Component<TypeaheadProps, any> {}
export class Video extends React.Component<VideoProps, any> {}
