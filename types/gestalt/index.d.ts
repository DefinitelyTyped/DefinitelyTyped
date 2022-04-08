// Type definitions for gestalt 21.0
// Project: https://github.com/pinterest/gestalt, https://pinterest.github.io/gestalt
// Definitions by: Nicolás Serrano Arévalo <https://github.com/serranoarevalo>
//                 Josh Gachnang <https://github.com/joshgachnang>
//                 Calvin Chhour <https://github.com/calvinchhour>
//                 Muhammed Hafiz <https://github.com/zifahm>
//                 Kyle Hensel <https://github.com/k-yle>
//                 Francisco Jimenez <https://github.com/jimenezff>
//                 Charlie Gu <https://github.com/czgu>
//                 Jay Kim <https://github.com/keyworks>
//                 Vaibhav Sharma <https://github.com/v4iv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

/**
 * Helpers
 */

export type AbstractEventHandler<T extends React.SyntheticEvent<HTMLElement> | Event, U = {}> = (
    arg: U & {
        readonly event: T;
    },
) => void;
export type ReactForwardRef<T, P> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;

export type FourDirections = 'up' | 'right' | 'down' | 'left';

export type EventHandlerType = (args: { readonly event: React.SyntheticEvent }) => void;

export interface OnNavigationArgs {
    href: string;
    target?: null | 'self' | 'blank';
}

export type OnNavigationType = (args: OnNavigationArgs) => EventHandlerType | null | undefined;

/**
 * ActivationCard Props Interface
 * https://gestalt.netlify.app/ActivationCard
 */
export interface ActivationCardProps {
    message: string;
    status: 'notStarted' | 'pending' | 'needsAttention' | 'complete';
    statusMessage: string;
    title: string;
    dismissButton?: {
        accessibilityLabel: string;
        onDismiss: () => void;
    };
    link?: {
        accessibilityLabel?: string;
        href: string;
        label: string;
        onClick?: AbstractEventHandler<
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLButtonElement>,
            {disableOnNavigation?: () => void}
        >;
        rel?: 'none' | 'nofollow';
        target?: null | 'self' | 'blank';
    };
}

/**
 * Avatar Props Interface
 * https://gestalt.netlify.app/Avatar
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

/**
 * AvatarPair Props Interface
 * https://gestalt.netlify.app/AvatarPair
 */
export interface AvatarPairProps {
    collaborators: ReadonlyArray<{
        name: string;
        src?: string;
    }>;
    size?: 'md' | 'lg' | 'fit';
}

/**
 * Badge Props Interface
 * https://gestalt.netlify.app/Badge
 */
export interface BadgeProps {
    text: string;
    position?: 'middle' | 'top';
}

/**
 * Box Props Interface
 * https://gestalt.netlify.app/Box
 */
export interface BoxProps {
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    borderStyle?: 'sm' | 'lg' | 'shadow' | 'none';
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
    right?: boolean;
    role?: string;
    rounding?: 'pill' | 'circle' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    top?: boolean;
    userSelect?: 'auto' | 'none';
    width?: number | string;
    wrap?: boolean;
    zIndex?: Indexable;
}

/**
 * Button Props Interface
 * https://gestalt.netlify.app/Button
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
        | React.KeyboardEvent<HTMLButtonElement>,
        {disableOnNavigation?: () => void}
    >;
    rel?: 'none' | 'nofollow';
    role?: 'button' | 'link';
    selected?: boolean;
    size?: 'sm' | 'md' | 'lg';
    tabIndex?: -1 | 0;
    target?: null | 'self' | 'blank';
    type?: 'submit' | 'button';
}

/**
 * ButtonGroup Props Interface
 * https://gestalt.netlify.app/ButtonGroup
 */
export interface ButtonGroupProps {
    children?: React.ReactNode;
}

export interface ActionData {
    accessibilityLabel?: string;
    href?: string;
    label: string;
    onClick?: AbstractEventHandler<
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLButtonElement>,
        {disableOnNavigation?: () => void}
    >;
    rel?: 'none' | 'nofollow';
    target?: null | 'self' | 'blank';
}

/**
 * Callout Props Interface
 * https://gestalt.netlify.app/Callout
 */
export interface CalloutProps {
    iconAccessibilityLabel: string;
    message: string;
    type: 'error' | 'info' | 'warning';
    dismissButton?: {
        accessibilityLabel: string;
        onDismiss: () => void;
    };
    primaryAction?: ActionData;
    secondaryAction?: ActionData;
    title?: string;
}

/**
 * Card Props Interface
 * https://gestalt.netlify.app/Card
 */
export interface CardProps {
    active?: boolean;
    children?: React.ReactNode;
    image?: React.ReactNode;
    onMouseEnter?: (args: { event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>> }) => void;
    onMouseLeave?: (args: { event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>> }) => void;
}

/**
 * Checkbox Props Interface
 * https://gestalt.netlify.app/Checkbox
 */
export interface CheckboxProps {
    id: string;
    onChange: AbstractEventHandler<React.SyntheticEvent<HTMLInputElement>, { checked: boolean }>;
    checked?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    hasError?: boolean;
    image?: React.ReactNode;
    indeterminate?: boolean;
    label?: string;
    name?: string;

    onClick?: AbstractEventHandler<React.SyntheticEvent<HTMLInputElement>, { checked: boolean }>;
    size?: 'sm' | 'md';
    subtext?: string;
}

/**
 * Collage Props Interface
 * https://gestalt.netlify.app/Column
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

/**
 * Column Props Interface
 * https://gestalt.netlify.app/Column
 */
export interface ColumnProps {
    span: UnsignedUpTo12;
    smSpan?: UnsignedUpTo12;
    mdSpan?: UnsignedUpTo12;
    lgSpan?: UnsignedUpTo12;
    children?: React.ReactNode;
}

/**
 * Container Props Interface
 * https://gestalt.netlify.app/Container
 */
export interface ContainerProps {
    children?: React.ReactNode;
}

/**
 * ScrollBoundaryContainer Props Interface
 * https://gestalt.netlify.app/ScrollBoundaryContainer
 */
export interface ScrollBoundaryContainerProps {
    height?: number | string;
    overflow?: 'scroll' | 'scrollX' | 'scrollY' | 'auto';
}

export interface DropdownOption {
    label: string;
    value: string;
    subtext?: string;
}
/**
 * Dropdown Props Interface
 * https://gestalt.netlify.app/Dropdown
 */
export interface DropdownProps {
    children:
        | React.ReactElement<DropdownItemProps | DropdownSectionProps>
        | ReadonlyArray<React.ReactElement<DropdownItemProps | DropdownSectionProps>>;
    /**
     * Unique id to identify this Dropdown
     */
    id: string;
    onDismiss: () => void;
    /**
     * Ref for the element that the Dropdown will attach to, will most likely be a Button
     */
    anchor?: HTMLElement;
    headerContent?: React.ReactNode;
    /**
     * Preferred direction for the Dropdown to open
     *
     * @default "down"
     */
    idealDirection?: FourDirections;
    onSelect?: AbstractEventHandler<
        React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>,
        {
            item: DropdownOption | undefined | null;
        }
    >;
    zIndex?: Indexable;
}

export interface DropdownItemProps {
    handleSelect: AbstractEventHandler<
        React.FocusEvent<HTMLInputElement>,
        {
            item: DropdownOption;
        }
    >;
    option: DropdownOption;

    /**
     * When supplied, will display a Badge next to the item's label.
     */
    badgeText?: string;
    /**
     * When supplied, wraps the item in a Link, and directs users to the url when item is selected.
     */
    href?: string;
    /**
     * When true, adds an arrow icon to the end of the item to signal
     * this item takes users to an external source.
     * Do not add if the item navigates users within the app.
     */
    isExternal?: boolean;
    /**
     * Either the selected item info or an array of selected items,
     * used to determine when the "selected" icon appears on an item
     */
    selected?: DropdownOption | ReadonlyArray<DropdownOption>;
    onClick?: AbstractEventHandler<
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>,
        {disableOnNavigation?: () => void}
        >;
}

export interface DropdownSectionProps {
    children: React.ReactElement<DropdownItemProps> | ReadonlyArray<React.ReactElement<DropdownItemProps>>;
    label: string;
}

/**
 * Flex Props Interface
 * https://gestalt.netlify.app/Flex
 */
export interface FlexProps {
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    children?: React.ReactNode;
    direction?: 'row' | 'column';
    fit?: boolean;
    flex?: 'grow' | 'shrink' | 'none';
    gap?: UnsignedUpTo12;
    height?: number | string;
    justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    wrap?: boolean;
}

/**
 * GroupAvatar Props Interface
 * https://gestalt.netlify.app/GroupAvatar
 */
export interface GroupAvatarProps {
    collaborators: ReadonlyArray<{ name: string; src?: string }>;
    outline?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fit';
}

/**
 * Heading Props Interface
 * https://gestalt.netlify.app/Heading
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
    | 'eye-hide'
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
    | "history"
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
    | "visit"
    | 'workflow-status-all'
    | 'workflow-status-canceled'
    | 'workflow-status-halted'
    | 'workflow-status-in-progress'
    | 'workflow-status-ok'
    | 'workflow-status-problem'
    | 'workflow-status-unstarted'
    | 'workflow-status-warning';

/**
 * Icon Props Interface
 * https://gestalt.netlify.app/Icon
 */
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

/**
 * IconButton Props Interface
 * https://gestalt.netlify.app/IconButton
 */
export interface IconButtonProps {
    bgColor?: 'transparent' | 'darkGray' | 'transparentDarkGray' | 'gray' | 'lightGray' | 'white' | 'red';
    accessibilityControls?: string;
    accessibilityExpanded?: boolean;
    accessibilityHaspopup?: boolean;
    accessibilityLabel: string;

    dangerouslySetSvgPath?: { __path: string };
    disabled?: boolean;
    href?: string;
    icon?: Icons;
    iconColor?: 'gray' | 'darkGray' | 'red' | 'white';
    onClick?: AbstractEventHandler<
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLButtonElement>,
        {disableOnNavigation?: () => void}
        >;
    padding?: 1 | 2 | 3 | 4 | 5;
    rel?: 'none' | 'nofollow';
    role?: 'button' | 'link';
    selected?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    tabIndex?: -1 | 0;
    target?: null | 'self' | 'blank';
}

/**
 * Image Props Interface
 * https://gestalt.netlify.app/Image
 */
export interface ImageProps {
    alt: string;
    color: string;
    elementTiming?: string;
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

/**
 * Label Props Interface
 * https://gestalt.netlify.app/Label
 */
export interface LabelProps {
    htmlFor: string;
    children?: React.ReactNode;
}

/**
 * Layer Props Interface
 * https://gestalt.netlify.app/Layer
 */
export interface LayerProps {
    children: React.ReactNode;
    zIndex?: Indexable;
}

/**
 * Letterbox Props Interface
 * https://gestalt.netlify.app/Letterbox
 */
export interface LetterboxProps {
    contentAspectRatio: number;
    height: number;
    width: number;
    children?: React.ReactNode;
}

/**
 * Link Props Interface
 * https://gestalt.netlify.app/Link
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
    onClick?: AbstractEventHandler<
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>,
        {disableOnNavigation?: () => void}
        >;
    onFocus?: AbstractEventHandler<React.FocusEvent<HTMLAnchorElement>>;
    rel?: 'none' | 'nofollow';
    role?: 'tab';
    rounding?: 'pill' | 'circle' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    tapStyle?: 'none' | 'compress';
    target?: null | 'self' | 'blank';
}

/**
 * Mask Props Interface
 * https://gestalt.netlify.app/Mask
 */
export interface MaskProps {
    children?: React.ReactNode;
    height?: number | string;
    rounding?: 'circle' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    wash?: boolean;
    width?: number | string;
    willChangeTransform?: boolean;
}

/**
 * Masonry Props Interface
 * https://gestalt.netlify.app/Masonry
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

/**
 * Modal Props Interface
 * https://gestalt.netlify.app/Modal
 */
export interface ModalProps {
    accessibilityModalLabel: string;
    onDismiss: () => void;
    /**
     * Use to specify the alignment of `heading` & `subHeading` strings
     *
     * @default "center"
     */
    align?: 'center' | 'left';
    children?: React.ReactNode;
    /**
     * Close the modal when you click outside of it
     *
     * @default true
     */
    closeOnOutsideClick?: boolean;
    footer?: React.ReactNode;
    heading?: React.ReactNode;
    role?: 'alertdialog' | 'dialog';
    size?: 'sm' | 'md' | 'lg' | number;
    /**
     * Only renders with `heading` strings
     */
    subHeading?: string;
}

/**
 * Module Props Interface
 * https://gestalt.netlify.app/Module
 */
export interface ModuleProps {
    id: string;
    icon?: Icons;
    iconAccessibilityLabel?: string;
    title?: string;
    type: "error" | "info";
}

/**
 * Module.Expandable Props Interface
 * https://gestalt.netlify.app/Module
 */
export interface ModuleExpandableProps {
    accessibilityCollapseLabel: string;
    accessibilityExpandLabel: string;
    id: string;
    items: ReadonlyArray<{
        title: string;
        icon?: Icons;
        summary?: ReadonlyArray<string>;
        type?: 'info' | 'error';
        iconAccessibilityLabel?: string;
        children?: React.ReactNode;
    }>;
    expandedIndex?: number | null;
    onExpandedChange?: (expandedIndex: number | null) => void;
}

/**
 * PageHeader Props Interface
 * https://gestalt.netlify.app/PageHeader
 */
export interface PageHeaderProps {
    title: string;
    maxWidth?: number | string;
    primaryAction?: React.ReactElement<typeof Button | typeof IconButton | typeof Link | typeof Tooltip>;
    secondaryAction?: React.ReactElement<typeof Button | typeof IconButton | typeof Link | typeof Tooltip>;
    subtext?: string;
}

/**
 * Pog Props Interface
 * https://gestalt.netlify.app/Pog
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

/**
 * Popover Props Interface
 * https://gestalt.netlify.app/Popover
 */
export interface PopoverProps {
    anchor: HTMLElement; // ideally a HTMLAnchorElement
    onDismiss: () => void;
    children?: React.ReactNode;
    color?: 'blue' | 'orange' | 'red' | 'white' | 'darkGray';
    idealDirection?: FourDirections;
    positionRelativeToAnchor?: boolean;
    shouldFocus?: boolean;
    showCaret?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'flexible' | number;
}

/**
 * Provider Props Interface
 * https://gestalt.netlify.app/ProviderProps
 */
export interface ProviderProps {
    colorScheme?: 'light' | 'dark' | 'userPreference';
    id?: string;
    onNavigation?: OnNavigationType;
}

/**
 * Pulsar Props Interface
 * https://gestalt.netlify.app/Pulsar
 */
export interface PulsarProps {
    paused?: boolean;
    size?: number;
}

/**
 * RadioButton Props Interface
 * https://gestalt.netlify.app/RadioButton
 */
export interface RadioButtonProps {
    id: string;
    onChange: AbstractEventHandler<React.SyntheticEvent<HTMLInputElement>, { checked: boolean }>;
    checked?: boolean;
    disabled?: boolean;
    image?: React.ReactNode;
    label?: string;
    name?: string;
    size?: 'sm' | 'md';
    subtext?: string;
    value?: string;
}

/**
 * Row Props Interface
 * https://gestalt.netlify.app/Row
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

/**
 * SearchField Props Interface
 * https://gestalt.netlify.app/SearchField
 */
export interface SearchFieldProps {
    accessibilityLabel: string;
    id: string;
    onChange: (args: { value: string; syntheticEvent: React.SyntheticEvent<HTMLInputElement> }) => void;
    autoComplete?: 'on' | 'off' | 'username' | 'name';
    errorMessage?: string;
    onBlur?: (args: { event: React.SyntheticEvent<HTMLInputElement> }) => void;
    onFocus?: (args: { value: string; syntheticEvent: React.SyntheticEvent<HTMLInputElement> }) => void;
    onKeyDown?: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: string }) => void;
    placeholder?: string;
    size?: 'md' | 'lg';
    value?: string;
}

/**
 * SegmentedControl Props Interface
 * https://gestalt.netlify.app/SegmentedControl
 */
export interface SegmentedControlProps {
    items: React.ReactNode[];
    onChange: (args: { event: React.SyntheticEvent<React.MouseEvent>; activeIndex: number }) => void;
    selectedItemIndex: number;
    responsive?: boolean;
    size?: 'md' | 'lg';
}

/**
 * SelectList Props Interface
 * https://gestalt.netlify.app/SelectList
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

/**
 * Sheet Props Interface
 * https://gestalt.netlify.app/Sheet
 */
export type SheetNodeOrRenderProp = ((prop: { onDismissStart: () => void }) => React.ReactNode) | React.ReactNode;
export interface SheetProps {
    accessibilityDismissButtonLabel: string;
    accessibilitySheetLabel: string;
    onDismiss: () => void;
    children?: SheetNodeOrRenderProp;
    closeOnOutsideClick?: boolean;
    footer?: SheetNodeOrRenderProp;
    heading?: string;
    size?: 'sm' | 'md' | 'lg';
    subHeading?: SheetNodeOrRenderProp;
}

/**
 * Spinner Props Interface
 * https://gestalt.netlify.app/Spinner
 */
export interface SpinnerProps {
    accessibilityLabel: string;
    show: boolean;
    delay?: boolean;
    size?: 'sm' | 'md';
}

/**
 * Stack Props Interface
 * https://gestalt.netlify.app/Stack
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

/**
 * Sticky Props Interface
 * https://gestalt.netlify.app/Sticky
 */
export interface StickyProps {
    bottom?: number | string;
    children?: React.ReactNode;
    height?: number;
    left?: number | string;
    right?: number | string;
    top?: number | string;
    zIndex?: Indexable;
}

/**
 * Switch Props Interface
 * https://gestalt.netlify.app/Switch
 */
export interface SwitchProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: boolean }) => void;
    disabled?: boolean;
    name?: string;
    switched?: boolean;
}

/**
 * Table Props Interface
 * https://gestalt.netlify.app/Table
 */
export interface TableProps {
    borderStyle?: 'sm' | 'none';
    children?: React.ReactNode;
    maxHeight?: number | string;
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

export interface TableRowExpandableProps {
    accessibilityCollapseLabel: string;
    accessibilityExpandLabel: string;
    expandedContents: React.ReactNode;
    id: string;
    children?: React.ReactNode;
    hoverStyle?: 'none' | 'gray';
    onExpand?: AbstractEventHandler<
        | React.MouseEvent<HTMLButtonElement>
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLButtonElement>
    >;
}

export interface TableSortableHeaderCellProps extends TableHeaderCellProps {
    onSortChange: AbstractEventHandler<
        React.MouseEvent<HTMLTableCellElement> | React.KeyboardEvent<HTMLTableCellElement>
    >;
    sortOrder: 'asc' | 'desc';
    status: 'active' | 'inactive';
}

/**
 * Tabs Props Interface
 * https://gestalt.netlify.app/Tabs
 */
export interface TabsProps {
    activeTabIndex: number;
    onChange: (args: { event: React.SyntheticEvent<React.MouseEvent>; activeTabIndex: number }) => void;
    tabs: ReadonlyArray<{ text: any; href: string }>;
    size?: 'md' | 'lg';
    wrap?: boolean;
}

/**
 * Tag Props Interface
 * https://gestalt.netlify.app/Tag
 */
export interface TagProps {
    /**
     * Short text to render inside the tag.
     */
    text: string;
    /**
     * Set a disabled state so the tag looks inactive and cannot be interacted with.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Set an error state on the tag. The message is used as an accessibility label for the error icon.
     * Keep it short so it doesn't overwhelm the user.
     */
    errorMessage?: string;
    /**
     * Callback fired when the tag is removed. Should handle state updates to stop rendering the component.
     * Required unless the tag is in a disabled state.
     */
    onRemove?: AbstractEventHandler<React.MouseEvent<HTMLButtonElement>>;
    /**
     * Accessibility label for the icon button to remove the tag, ideally something like "Remove [Tag Name] Tag".
     * Required unless the tag is in a disabled state.
     */
    removeIconAccessibilityLabel?: string;
}

/**
 * TabArea Props Interface
 * https://gestalt.netlify.app/TapArea
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
    href?: string;
    mouseCursor?: 'copy' | 'grab' | 'grabbing' | 'move' | 'noDrop' | 'pointer' | 'zoomIn' | 'zoomOut';
    onBlur?: AbstractEventHandler<React.FocusEvent<HTMLDivElement | HTMLAnchorElement>>;
    onFocus?: AbstractEventHandler<React.FocusEvent<HTMLDivElement | HTMLAnchorElement>>;
    onMouseEnter?: AbstractEventHandler<React.MouseEvent<HTMLDivElement | HTMLAnchorElement>>;
    onMouseLeave?: AbstractEventHandler<React.MouseEvent<HTMLDivElement | HTMLAnchorElement>>;
    onTap?: AbstractEventHandler<
        | React.MouseEvent<HTMLDivElement>
        | React.KeyboardEvent<HTMLDivElement>
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>,
        {disableOnNavigation?: () => void}
    >;
    rel?: 'none' | 'nofollow';
    role?: 'button' | 'link';
    rounding?: 'pill' | 'circule' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    tabIndex?: -1 | 0;
    tapStyle?: 'none' | 'compress';
    target?: null | 'self' | 'blank';
}

/**
 * Text Props Interface
 * https://gestalt.netlify.app/Text
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
    overflow?: 'normal' | 'breakWord' | 'noWrap';
    size?: 'sm' | 'md' | 'lg';
    truncate?: boolean;
    weight?: 'bold' | 'normal';
}

/**
 * TextArea Props Interface
 * https://gestalt.netlify.app/TextArea
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
    /**
     * Number of text rows to display.
     * Note that tags take up more space, and will show fewer rows than specified.
     */
    rows?: number;
    /**
     * List of tags to display in the component
     */
    tags?: ReadonlyArray<React.ReactElement<TagProps, typeof Tag>>;
    value?: string;
}

/**
 * TextField Props Interface
 * https://gestalt.netlify.app/TextField
 */
export interface TextFieldProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: string }) => void;
    autoComplete?: 'current-password' | 'on' | 'off' | 'username' | 'new-password';
    /**
     * @default false
     */
    disabled?: boolean;
    errorMessage?: string;
    /**
     * More information about how to complete the form field
     */
    helperText?: string;
    label?: string;
    name?: string;
    onBlur?: (args: { event: React.SyntheticEvent<React.FocusEvent<HTMLInputElement>>; value: string }) => void;
    onFocus?: (args: { event: React.SyntheticEvent<React.FocusEvent<HTMLInputElement>>; value: string }) => void;
    onKeyDown?: (args: { event: React.SyntheticEvent<React.KeyboardEvent<HTMLInputElement>>; value: string }) => void;
    placeholder?: string;
    /**
     * md: 40px, lg: 48px
     *
     * @default "md"
     */
    size?: 'md' | 'lg';
    /**
     * List of tags to display in the component
     */
    tags?: ReadonlyArray<React.ReactElement<TagProps, typeof Tag>>;
    /**
     * @default "text"
     */
    type?: 'date' | 'email' | 'number' | 'password' | 'text' | 'url';
    value?: string;
}

/**
 * Toast Props Interface
 * https://gestalt.netlify.app/Toast
 */
export interface ToastProps {
    button?: React.ReactNode;
    color?: 'white' | 'red';
    text?: string | React.ReactNode;
    thumbnail?: React.ReactNode;
    thumbnailShape?: 'circle' | 'rectangle' | 'square';
}

/**
 * Tooltip Props Interface
 * https://gestalt.netlify.app/Tooltip
 */
export interface TooltipProps {
    children: React.ReactNode;
    text: string;
    idealDirection?: FourDirections;
    inline?: boolean;
    link?: React.ReactNode;
    zIndex?: Indexable;
}

/**
 * Typeahead Props Interface
 * https://gestalt.netlify.app/Typeahead
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
    size?: 'md' | 'lg';
    /**
     * List of tags to display in the component
     */
    tags?: ReadonlyArray<React.ReactElement<TagProps, typeof Tag>>;
    value?: string;
    zIndex?: Indexable;
}

/**
 * Upsell Props Interface
 * https://gestalt.netlify.app/Upsell
 */
export interface UpsellProps {
    message: string;
    dismissButton?: {
        accessibilityLabel: string;
        onDismiss: () => void;
    };
    imageData?: {
        component: React.ReactElement<any, typeof Image | typeof Icon>;
        width?: number;
        mask?: {
            rounding: 'circle' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
            wash: boolean;
        };
    };
    primaryAction?: ActionData;
    secondaryAction?: ActionData;
    title?: string;
}

export interface UpsellFormProps {
    onSubmit: AbstractEventHandler<
        | React.MouseEvent<HTMLButtonElement>
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLAnchorElement>
    >;
    submitButtonText: string;
    submitButtonAccessibilityLabel: string;
    submitButtonDisabled?: boolean;
}

/**
 * Video Props Interface
 * https://gestalt.netlify.app/Video
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
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
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

/**
 * https://gestalt.netlify.app/ZIndexClasses#zindex
 */
export interface Indexable {
    index(): number;
}

/**
 * https://gestalt.netlify.app/ZIndexClasses#FixedZIndex
 */
export class FixedZIndex implements Indexable {
    z: number;
    constructor(z: number);
    index(): number;
}

/**
 * https://gestalt.netlify.app/ZIndexClasses#CompositeZIndex
 */
export class CompositeZIndex implements Indexable {
    deps: Array<FixedZIndex | CompositeZIndex>;
    constructor(deps: Array<FixedZIndex | CompositeZIndex>);
    index(): number;
}

export class ActivationCard extends React.Component<ActivationCardProps, any> {}
export class Avatar extends React.Component<AvatarProps, any> {}
export class AvatarPair extends React.Component<AvatarPairProps, any> {}
export class Badge extends React.Component<BadgeProps, any> {}
export const Box: ReactForwardRef<HTMLDivElement, BoxProps>;
export const Button: ReactForwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>;
export class ButtonGroup extends React.Component<ButtonGroupProps, any> {}
export class Callout extends React.Component<CalloutProps, any> {}
export class Card extends React.Component<CardProps, any> {}
export const Checkbox: ReactForwardRef<HTMLInputElement, CheckboxProps>;
export class Collage extends React.Component<CollageProps, any> {}
export class Column extends React.Component<ColumnProps, any> {}
export class Container extends React.Component<ContainerProps, any> {}
export class ScrollBoundaryContainer extends React.Component<ScrollBoundaryContainerProps, any> {}
export class Divider extends React.Component<{}, any> {}
export class Dropdown extends React.Component<DropdownProps, any> {
    static Item: React.FC<DropdownItemProps>;
    static Section: React.FC<DropdownSectionProps>;
}
export class Flex extends React.Component<FlexProps, any> {}
export class GroupAvatar extends React.Component<GroupAvatarProps, any> {}
export class Heading extends React.Component<HeaderProps, any> {}
export class Icon extends React.Component<IconProps, any> {}
export const IconButton: ReactForwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>;
export class Image extends React.Component<ImageProps, any> {}
export class Label extends React.Component<LabelProps, any> {}
export class Layer extends React.Component<LayerProps, any> {}
export class Letterbox extends React.Component<LetterboxProps, any> {}
export const Link: ReactForwardRef<HTMLAnchorElement, LinkProps>;
export class Mask extends React.Component<MaskProps, any> {}
export class Masonry extends React.Component<MasonryProps, any> {}
export const Modal: ReactForwardRef<HTMLDivElement, ModalProps>;
export class Module extends React.Component<ModuleProps, any> {
    static Expandable: React.FC<ModuleExpandableProps>;
}
export class PageHeader extends React.Component<PageHeaderProps, any> {}
export class Pog extends React.Component<PogProps, any> {}
export class Popover extends React.Component<PopoverProps, any> {}
export class Provider extends React.Component<ProviderProps, any> {}
export class Pulsar extends React.Component<PulsarProps, any> {}
export const RadioButton: ReactForwardRef<HTMLInputElement, RadioButtonProps>;
export class Row extends React.Component<RowProps, any> {}
export const SearchField: ReactForwardRef<HTMLInputElement, SearchFieldProps>;
export class SegmentedControl extends React.Component<SegmentedControlProps, any> {}
export class SelectList extends React.Component<SelectListProps, any> {}
export const Sheet: ReactForwardRef<HTMLDivElement, SheetProps>;
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
    static RowExpandable: React.FC<TableRowExpandableProps>;
    static SortableHeaderCell: React.FC<TableSortableHeaderCellProps>;
}
export class Tabs extends React.Component<TabsProps, any> {}
export class Tag extends React.Component<TagProps, any> {}
export const TapArea: ReactForwardRef<HTMLButtonElement | HTMLAnchorElement, TapAreaProps>;
export class Text extends React.Component<TextProps, any> {}
export const TextArea: ReactForwardRef<HTMLTextAreaElement, TextAreaProps>;
export const TextField: ReactForwardRef<HTMLInputElement, TextFieldProps>;
export class Toast extends React.Component<ToastProps, any> {}
export class Tooltip extends React.Component<TooltipProps, any> {}
export const Typeahead: ReactForwardRef<HTMLInputElement, TypeaheadProps>;
export class Upsell extends React.Component<UpsellProps, any> {
    static Form: React.FC<UpsellFormProps>;
}
export class Video extends React.Component<VideoProps, any> {}

export function useReducedMotion(): boolean;
export function useFocusVisible(): { isFocusVisible: boolean };
