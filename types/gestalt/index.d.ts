// Type definitions for gestalt 27.2
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
// TypeScript Version: 3.5

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
    target?: null | 'self' | 'blank' | undefined;
}

export type OnNavigationType = (args: OnNavigationArgs) => EventHandlerType | null | undefined;
export type UnsignedUpTo12 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type SignedUpTo12 = -12 | -11 | -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | UnsignedUpTo12;

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
    } | undefined;
    link?: {
        accessibilityLabel: string;
        href: string;
        label: string;
        onClick?: AbstractEventHandler<
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLButtonElement>,
            { disableOnNavigation?: (() => void) | undefined }
        > | undefined;
        rel?: 'none' | 'nofollow' | undefined;
        target?: null | 'self' | 'blank' | undefined;
    } | undefined;
}

/**
 * Avatar Props Interface
 * https://gestalt.netlify.app/Avatar
 */
export interface AvatarProps {
    name: string;
    accessibilityLabel?: string | undefined;
    outline?: boolean | undefined;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fit' | undefined;
    src?: string | undefined;
    verified?: boolean | undefined;
}

/**
 * AvatarGroup Props Interface
 * https://gestalt.netlify.app/AvatarGroup
 */
export interface AvatarGroupProps {
    accessibilityLabel: string;
    collaborators: ReadonlyArray<{ name: string; src?: string | undefined }>;

    accessibilityControls?: string | undefined;
    accessibilityExpanded?: boolean | undefined;
    accessibilityHaspopup?: boolean | undefined;
    addCollaborators?: boolean | undefined;
    href?: string | undefined;
    onClick?: AbstractEventHandler<
        | React.MouseEvent<HTMLButtonElement>
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLButtonElement>,
        { disableOnNavigation?: (() => void) | undefined }
    > | undefined;
    role?: 'button' | 'link' | undefined;
    size?: 'xs' | 'sm' | 'md' | 'fit' | undefined;
}

/**
 * AvatarPair Props Interface
 * https://gestalt.netlify.app/AvatarPair
 */
export interface AvatarPairProps {
    collaborators: ReadonlyArray<{
        name: string;
        src?: string | undefined;
    }>;
    size?: 'md' | 'lg' | 'fit' | undefined;
}

/**
 * Badge Props Interface
 * https://gestalt.netlify.app/Badge
 */
export interface BadgeProps {
    text: string;
    position?: 'middle' | 'top' | undefined;
}

export type BoxPassthroughProps = Omit<React.ComponentProps<'div'>, 'onClick' | 'className' | 'style' | 'ref'> &
    React.RefAttributes<HTMLDivElement>;

/**
 * Box Props Interface
 * https://gestalt.netlify.app/Box
 */
export interface BoxProps extends BoxPassthroughProps {
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch' | undefined;
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined;
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined;
    /**
     * Changes the underlying DOM element when needed for accessibility or SEO reasons. Note that currently only block-level elements are available.
     *
     * @default 'div'
     */
    as?:
        | 'article'
        | 'aside'
        | 'details'
        | 'div'
        | 'figcaption'
        | 'figure'
        | 'footer'
        | 'header'
        | 'main'
        | 'nav'
        | 'section'
        | 'summary' | undefined;
    borderStyle?: 'sm' | 'lg' | 'shadow' | 'none' | undefined;
    bottom?: boolean | undefined;
    children?: React.ReactNode | undefined;
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
        | 'white' | undefined;
    column?: UnsignedUpTo12 | undefined;
    smColumn?: UnsignedUpTo12 | undefined;
    mdColumn?: UnsignedUpTo12 | undefined;
    lgColumn?: UnsignedUpTo12 | undefined;
    dangerouslySetInlineStyle?: {
        __style: {
            [key: string]: string | number | undefined;
        };
    } | undefined;
    direction?: 'row' | 'column' | undefined;
    smDirection?: 'row' | 'column' | undefined;
    mdDirection?: 'row' | 'column' | undefined;
    lgDirection?: 'row' | 'column' | undefined;
    display?: 'none' | 'flex' | 'block' | 'inlineBlock' | 'visuallyHidden' | undefined;
    smDisplay?: 'none' | 'flex' | 'block' | 'inlineBlock' | 'visuallyHidden' | undefined;
    mdDisplay?: 'none' | 'flex' | 'block' | 'inlineBlock' | 'visuallyHidden' | undefined;
    lgDisplay?: 'none' | 'flex' | 'block' | 'inlineBlock' | 'visuallyHidden' | undefined;
    fit?: boolean | undefined;
    flex?: 'grow' | 'shrink' | 'none' | undefined;
    height?: number | string | undefined;
    justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | undefined;
    left?: boolean | undefined;
    margin?: SignedUpTo12 | 'auto' | undefined;
    smMargin?: SignedUpTo12 | 'auto' | undefined;
    mdMargin?: SignedUpTo12 | 'auto' | undefined;
    lgMargin?: SignedUpTo12 | 'auto' | undefined;
    marginBottom?: SignedUpTo12 | 'auto' | undefined;
    smMarginBottom?: SignedUpTo12 | 'auto' | undefined;
    mdMarginBottom?: SignedUpTo12 | 'auto' | undefined;
    lgMarginBottom?: SignedUpTo12 | 'auto' | undefined;
    marginEnd?: SignedUpTo12 | 'auto' | undefined;
    smMarginEnd?: SignedUpTo12 | 'auto' | undefined;
    mdMarginEnd?: SignedUpTo12 | 'auto' | undefined;
    lgMarginEnd?: SignedUpTo12 | 'auto' | undefined;
    marginStart?: SignedUpTo12 | 'auto' | undefined;
    smMarginStart?: SignedUpTo12 | 'auto' | undefined;
    mdMarginStart?: SignedUpTo12 | 'auto' | undefined;
    lgMarginStart?: SignedUpTo12 | 'auto' | undefined;
    marginTop?: SignedUpTo12 | 'auto' | undefined;
    smMarginTop?: SignedUpTo12 | 'auto' | undefined;
    mdMarginTop?: SignedUpTo12 | 'auto' | undefined;
    lgMarginTop?: SignedUpTo12 | 'auto' | undefined;
    maxHeight?: number | string | undefined;
    maxWidth?: number | string | undefined;
    minHeight?: number | string | undefined;
    minWidth?: number | string | undefined;
    opacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1 | undefined;
    overflow?: 'visible' | 'hidden' | 'scroll' | 'scrollX' | 'scrollY' | 'auto' | undefined;
    padding?: UnsignedUpTo12 | undefined;
    smPadding?: UnsignedUpTo12 | undefined;
    mdPadding?: UnsignedUpTo12 | undefined;
    lgPadding?: UnsignedUpTo12 | undefined;
    paddingX?: UnsignedUpTo12 | undefined;
    smPaddingX?: UnsignedUpTo12 | undefined;
    mdPaddingX?: UnsignedUpTo12 | undefined;
    lgPaddingX?: UnsignedUpTo12 | undefined;
    paddingY?: UnsignedUpTo12 | undefined;
    smPaddingY?: UnsignedUpTo12 | undefined;
    mdPaddingY?: UnsignedUpTo12 | undefined;
    lgPaddingY?: UnsignedUpTo12 | undefined;
    position?: 'static' | 'absolute' | 'relative' | 'fixed' | undefined;
    right?: boolean | undefined;
    role?: string | undefined;
    rounding?: 'pill' | 'circle' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined;
    top?: boolean | undefined;
    userSelect?: 'auto' | 'none' | undefined;
    width?: number | string | undefined;
    wrap?: boolean | undefined;
    zIndex?: Indexable | undefined;
}

/**
 * Button Props Interface
 * https://gestalt.netlify.app/Button
 */
export interface ButtonProps {
    text: string;
    accessibilityControls?: string | undefined;
    accessibilityExpanded?: boolean | undefined;
    accessibilityHaspopup?: boolean | undefined;
    accessibilityLabel?: string | undefined;
    color?: 'gray' | 'red' | 'blue' | 'transparent' | 'semiTransparentWhite' | 'transparentWhiteText' | 'white' | undefined;
    disabled?: boolean | undefined;
    href?: string | undefined;
    iconEnd?: Icons | undefined;
    inline?: boolean | undefined;
    name?: string | undefined;
    onClick?: AbstractEventHandler<
        | React.MouseEvent<HTMLButtonElement>
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLButtonElement>,
        { disableOnNavigation?: (() => void) | undefined }
    > | undefined;
    rel?: 'none' | 'nofollow' | undefined;
    role?: 'button' | 'link' | undefined;
    selected?: boolean | undefined;
    size?: 'sm' | 'md' | 'lg' | undefined;
    tabIndex?: -1 | 0 | undefined;
    target?: null | 'self' | 'blank' | undefined;
    type?: 'submit' | 'button' | undefined;
}

/**
 * ButtonGroup Props Interface
 * https://gestalt.netlify.app/ButtonGroup
 */
export interface ButtonGroupProps {
    children?: React.ReactNode | undefined;
}

export interface ActionData {
    accessibilityLabel: string;
    href?: string | undefined;
    label: string;
    onClick?: AbstractEventHandler<
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLButtonElement>,
        { disableOnNavigation?: (() => void) | undefined }
    > | undefined;
    rel?: 'none' | 'nofollow' | undefined;
    target?: null | 'self' | 'blank' | undefined;
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
    } | undefined;
    primaryAction?: ActionData | undefined;
    secondaryAction?: ActionData | undefined;
    title?: string | undefined;
}

/**
 * Card Props Interface
 * https://gestalt.netlify.app/Card
 */
export interface CardProps {
    active?: boolean | undefined;
    children?: React.ReactNode | undefined;
    image?: React.ReactNode | undefined;
    onMouseEnter?: ((args: { event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>> }) => void) | undefined;
    onMouseLeave?: ((args: { event: React.SyntheticEvent<React.MouseEvent<HTMLDivElement>> }) => void) | undefined;
}

/**
 * Checkbox Props Interface
 * https://gestalt.netlify.app/Checkbox
 */
export interface CheckboxProps {
    id: string;
    onChange: AbstractEventHandler<React.SyntheticEvent<HTMLInputElement>, { checked: boolean }>;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    hasError?: boolean | undefined;
    image?: React.ReactNode | undefined;
    indeterminate?: boolean | undefined;
    label?: string | undefined;
    name?: string | undefined;

    onClick?: AbstractEventHandler<React.SyntheticEvent<HTMLInputElement>, { checked: boolean }> | undefined;
    size?: 'sm' | 'md' | undefined;
    subtext?: string | undefined;
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
    cover?: boolean | undefined;
    gutter?: number | undefined;
    layoutKey?: number | undefined;
}

/**
 * ColorSchemeProvider Props Interface
 * https://gestalt.netlify.app/ColorSchemeProvider
 */
export interface ColorSchemeProviderProps {
    colorScheme: 'light' | 'dark' | 'userPreference';
    id?: string | undefined;
}

/**
 * Column Props Interface
 * https://gestalt.netlify.app/Column
 */
export interface ColumnProps {
    span: UnsignedUpTo12;
    smSpan?: UnsignedUpTo12 | undefined;
    mdSpan?: UnsignedUpTo12 | undefined;
    lgSpan?: UnsignedUpTo12 | undefined;
    children?: React.ReactNode | undefined;
}

/**
 * Container Props Interface
 * https://gestalt.netlify.app/Container
 */
export interface ContainerProps {
    children?: React.ReactNode | undefined;
}

/**
 * ScrollBoundaryContainer Props Interface
 * https://gestalt.netlify.app/ScrollBoundaryContainer
 */
export interface ScrollBoundaryContainerProps {
    height?: number | string | undefined;
    overflow?: 'scroll' | 'scrollX' | 'scrollY' | 'auto' | undefined;
}

export interface DropdownOption {
    label: string;
    value: string;
    subtext?: string | undefined;
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
    anchor?: HTMLElement | undefined;
    headerContent?: React.ReactNode | undefined;
    /**
     * Preferred direction for the Dropdown to open
     *
     * @default "down"
     */
    idealDirection?: FourDirections | undefined;
    zIndex?: Indexable | undefined;
}

export interface DropdownItemProps {
    onSelect: AbstractEventHandler<
        React.FocusEvent<HTMLInputElement>,
        {
            item: DropdownOption;
        }
    >;
    option: DropdownOption;

    /**
     * When supplied, will display a Badge next to the item's label.
     */
    badgeText?: string | undefined;

    /**
     * Either the selected item info or an array of selected items,
     * used to determine when the "selected" icon appears on an item
     */
    selected?: DropdownOption | ReadonlyArray<DropdownOption> | undefined;
}

export interface DropdownLinkProps {
    /**
     * Directs users to the url when item is selected. See the Types of items variant to learn more.
     */
    href: string;
    option: DropdownOption;
    /**
     * When supplied, will display a Badge next to the item's label.
     */
    badgeText?: string | undefined;
    /**
     * When true, adds an arrow icon to the end of the item to signal this item takes users to an external source
     * and opens the link in a new tab.
     * Do not add if the item navigates users within the app. See the Best practices for more info.
     */
    isExternal?: boolean | undefined;
    onClick?: AbstractEventHandler<
        | React.MouseEvent<HTMLButtonElement>
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLAnchorElement>,
        { disableOnNavigation?: (() => void) | undefined }
    > | undefined;
}

export interface DropdownSectionProps {
    children: React.ReactElement<DropdownItemProps> | ReadonlyArray<React.ReactElement<DropdownItemProps>>;
    label: string;
}

/**
 * Fieldset Props Interface
 * https://gestalt.netlify.app/Fieldset
 */
export interface FieldsetProps {
    children: React.ReactNode;
    legend: string;
    legendDisplay?: 'visible' | 'hidden' | undefined;
}

/**
 * Flex Props Interface
 * https://gestalt.netlify.app/Flex
 */
export interface FlexProps {
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch' | undefined;
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined;
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined;
    children?: React.ReactNode | undefined;
    direction?: 'row' | 'column' | undefined;
    flex?: 'grow' | 'shrink' | 'none' | undefined;
    gap?: UnsignedUpTo12 | undefined;
    height?: number | string | undefined;
    justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | undefined;
    maxHeight?: number | string | undefined;
    maxWidth?: number | string | undefined;
    minHeight?: number | string | undefined;
    minWidth?: number | string | undefined;
    width?: number | string | undefined;
    wrap?: boolean | undefined;
}

export interface FlexItemProps {
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined;
    children?: React.ReactNode | undefined;
    flex?: 'grow' | 'shrink' | 'none' | undefined;
    minWidth?: number | string | undefined;
}

/**
 * Heading Props Interface
 * https://gestalt.netlify.app/Heading
 */
export interface HeaderProps {
    accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6 | 'none' | undefined;
    align?: 'start' | 'end' | 'center' | 'justify' | 'forceLeft' | 'forceRight' | undefined;
    children?: React.ReactNode | undefined;
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
        | 'white' | undefined;
    id?: string | undefined;
    overflow?: 'normal' | 'breakWord' | undefined;
    size?: 'sm' | 'md' | 'lg' | undefined;
    truncate?: boolean | undefined;
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
    | 'history'
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
    | 'visit'
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
        | 'white' | undefined;
    dangerouslySetSvgPath?: { __path: string } | undefined;
    icon?: Icons | undefined;
    inline?: boolean | undefined;
    size?: number | string | undefined;
}

/**
 * IconButton Props Interface
 * https://gestalt.netlify.app/IconButton
 */
export interface IconButtonProps {
    bgColor?: 'transparent' | 'darkGray' | 'transparentDarkGray' | 'gray' | 'lightGray' | 'white' | 'red' | undefined;
    accessibilityControls?: string | undefined;
    accessibilityExpanded?: boolean | undefined;
    accessibilityHaspopup?: boolean | undefined;
    accessibilityLabel: string;

    dangerouslySetSvgPath?: { __path: string } | undefined;
    disabled?: boolean | undefined;
    href?: string | undefined;
    icon?: Icons | undefined;
    iconColor?: 'gray' | 'darkGray' | 'red' | 'white' | undefined;
    onClick?: AbstractEventHandler<
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLButtonElement>,
        { disableOnNavigation?: (() => void) | undefined }
    > | undefined;
    padding?: 1 | 2 | 3 | 4 | 5 | undefined;
    rel?: 'none' | 'nofollow' | undefined;
    role?: 'button' | 'link' | undefined;
    selected?: boolean | undefined;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
    tabIndex?: -1 | 0 | undefined;
    target?: null | 'self' | 'blank' | undefined;
}

/**
 * Image Props Interface
 * https://gestalt.netlify.app/Image
 */
export interface ImageProps {
    alt: string;
    color: string;
    elementTiming?: string | undefined;
    naturalHeight: number;
    naturalWidth: number;
    src: string;
    children?: React.ReactNode | undefined;
    fit?: 'cover' | 'contain' | 'none' | undefined;
    importance?: 'high' | 'low' | 'auto' | undefined;
    loading?: 'eager' | 'lazy' | 'auto' | undefined;
    onError?: (() => void) | undefined;
    onLoad?: (() => void) | undefined;
    role?: 'img' | 'presentation' | undefined;
    sizes?: string | undefined;
    srcSet?: string | undefined;
}

/**
 * Label Props Interface
 * https://gestalt.netlify.app/Label
 */
export interface LabelProps {
    htmlFor: string;
    children?: React.ReactNode | undefined;
}

/**
 * Layer Props Interface
 * https://gestalt.netlify.app/Layer
 */
export interface LayerProps {
    children: React.ReactNode;
    zIndex?: Indexable | undefined;
}

/**
 * Letterbox Props Interface
 * https://gestalt.netlify.app/Letterbox
 */
export interface LetterboxProps {
    contentAspectRatio: number;
    height: number;
    width: number;
    children?: React.ReactNode | undefined;
}

/**
 * Link Props Interface
 * https://gestalt.netlify.app/Link
 */
export interface LinkProps {
    href: string;
    accessibilityLabel?: string | undefined;
    accessibilitySelected?: boolean | undefined;
    children?: React.ReactNode | undefined;
    hoverStyle?: 'none' | 'underline' | undefined;
    id?: string | undefined;
    inline?: boolean | undefined;
    onBlur?: AbstractEventHandler<React.FocusEvent<HTMLAnchorElement>> | undefined;
    onClick?: AbstractEventHandler<
        React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>,
        { disableOnNavigation?: (() => void) | undefined }
    > | undefined;
    onFocus?: AbstractEventHandler<React.FocusEvent<HTMLAnchorElement>> | undefined;
    rel?: 'none' | 'nofollow' | undefined;
    role?: 'tab' | undefined;
    rounding?: 'pill' | 'circle' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined;
    tapStyle?: 'none' | 'compress' | undefined;
    target?: null | 'self' | 'blank' | undefined;
}

/**
 * Mask Props Interface
 * https://gestalt.netlify.app/Mask
 */
export interface MaskProps {
    children?: React.ReactNode | undefined;
    height?: number | string | undefined;
    rounding?: 'circle' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined;
    wash?: boolean | undefined;
    width?: number | string | undefined;
    willChangeTransform?: boolean | undefined;
}

/**
 * Masonry Props Interface
 * https://gestalt.netlify.app/Masonry
 */
export interface MasonryProps<T = any> {
    comp: React.ComponentType<{ data: T; itemIdx?: number | undefined; isMeasuring?: boolean | undefined }>;
    items: T[];
    columnWidth?: number | undefined;
    flexible?: boolean | undefined;
    gutterWidth?: number | undefined;
    layout?: 'MasonryDefaultLayout' | 'MasonryUniformRowLayout' | undefined;
    loadItems?: (() => void) | undefined;
    measurementStore?: any;
    minCols?: number | undefined;
    scrollContainer?: (() => HTMLElement) | undefined;
    virtualBoundsBottom?: number | undefined;
    virtualBoundsTop?: number | undefined;
    virtualize?: boolean | undefined;
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
    align?: 'center' | 'left' | undefined;
    children?: React.ReactNode | undefined;
    /**
     * Close the modal when you click outside of it
     *
     * @default true
     */
    closeOnOutsideClick?: boolean | undefined;
    footer?: React.ReactNode | undefined;
    heading?: React.ReactNode | undefined;
    role?: 'alertdialog' | 'dialog' | undefined;
    size?: 'sm' | 'md' | 'lg' | number | undefined;
    /**
     * Only renders with `heading` strings
     */
    subHeading?: string | undefined;
}

/**
 * Module Props Interface
 * https://gestalt.netlify.app/Module
 */
export interface ModuleProps {
    id: string;
    icon?: Icons | undefined;
    iconAccessibilityLabel?: string | undefined;
    title?: string | undefined;
    type?: 'error' | 'info' | undefined;
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
        icon?: Icons | undefined;
        summary?: ReadonlyArray<string> | undefined;
        type?: 'info' | 'error' | undefined;
        iconAccessibilityLabel?: string | undefined;
        children?: React.ReactNode | undefined;
    }>;
    expandedIndex?: number | null | undefined;
    onExpandedChange?: ((expandedIndex: number | null) => void) | undefined;
}

/**
 * ColorSchemeProvider Props Interface
 * https://gestalt.netlify.app/OnLinkNavigationProvider
 */
export interface OnLinkNavigationProviderProps {
    onNavigation?: OnNavigationType | undefined;
}

/**
 * PageHeader Props Interface
 * https://gestalt.netlify.app/PageHeader
 */
export interface PageHeaderProps {
    title: string;
    maxWidth?: number | string | undefined;
    primaryAction?: React.ReactElement<typeof Button | typeof IconButton | typeof Link | typeof Tooltip> | undefined;
    secondaryAction?: React.ReactElement<typeof Button | typeof IconButton | typeof Link | typeof Tooltip> | undefined;
    subtext?: string | undefined;
}

/**
 * Pog Props Interface
 * https://gestalt.netlify.app/Pog
 */
export interface PogProps {
    accessibilityLabel?: string | undefined;
    active?: boolean | undefined;
    bgColor?: 'transparent' | 'darkGray' | 'transparentDarkGray' | 'gray' | 'lightGray' | 'white' | 'red' | undefined;
    dangerouslySetSvgPath?: { __path: string } | undefined;
    focused?: boolean | undefined;
    hovered?: boolean | undefined;
    icon?: Icons | undefined;
    iconColor?: 'gray' | 'darkGray' | 'red' | 'white' | undefined;
    padding?: 1 | 2 | 3 | 4 | 5 | undefined;
    selected?: boolean | undefined;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
}

/**
 * Popover Props Interface
 * https://gestalt.netlify.app/Popover
 */
export interface PopoverProps {
    anchor: HTMLElement; // ideally a HTMLAnchorElement
    onDismiss: () => void;
    children?: React.ReactNode | undefined;
    color?: 'blue' | 'orange' | 'red' | 'white' | 'darkGray' | undefined;
    id?: string | undefined;
    idealDirection?: FourDirections | undefined;
    positionRelativeToAnchor?: boolean | undefined;
    shouldFocus?: boolean | undefined;
    showCaret?: boolean | undefined;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'flexible' | number | undefined;
}

/**
 * Pulsar Props Interface
 * https://gestalt.netlify.app/Pulsar
 */
export interface PulsarProps {
    paused?: boolean | undefined;
    size?: number | undefined;
}

/**
 * RadioButton Props Interface
 * https://gestalt.netlify.app/RadioButton
 */
export interface RadioButtonProps {
    id: string;
    onChange: AbstractEventHandler<React.SyntheticEvent<HTMLInputElement>, { checked: boolean }>;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    image?: React.ReactNode | undefined;
    label?: string | undefined;
    name?: string | undefined;
    size?: 'sm' | 'md' | undefined;
    subtext?: string | undefined;
    value?: string | undefined;
}

/**
 * Row Props Interface
 * https://gestalt.netlify.app/Row
 */
export interface RowProps {
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch' | undefined;
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined;
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined;
    children?: React.ReactNode | undefined;
    fit?: boolean | undefined;
    flex?: 'grow' | 'shrink' | 'none' | undefined;
    gap?: UnsignedUpTo12 | undefined;
    height?: number | string | undefined;
    justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | undefined;
    maxHeight?: number | string | undefined;
    maxWidth?: number | string | undefined;
    minHeight?: number | string | undefined;
    minWidth?: number | string | undefined;
    width?: number | string | undefined;
    wrap?: boolean | undefined;
}

/**
 * SearchField Props Interface
 * https://gestalt.netlify.app/SearchField
 */
export interface SearchFieldProps {
    accessibilityLabel: string;
    id: string;
    onChange: (args: { value: string; syntheticEvent: React.SyntheticEvent<HTMLInputElement> }) => void;
    autoComplete?: 'on' | 'off' | 'username' | 'name' | undefined;
    errorMessage?: string | undefined;
    onBlur?: ((args: { event: React.SyntheticEvent<HTMLInputElement> }) => void) | undefined;
    onFocus?: ((args: { value: string; syntheticEvent: React.SyntheticEvent<HTMLInputElement> }) => void) | undefined;
    onKeyDown?: ((args: { event: React.SyntheticEvent<HTMLInputElement>; value: string }) => void) | undefined;
    placeholder?: string | undefined;
    size?: 'md' | 'lg' | undefined;
    value?: string | undefined;
    label?: string | undefined;
}

/**
 * SegmentedControl Props Interface
 * https://gestalt.netlify.app/SegmentedControl
 */
export interface SegmentedControlProps {
    items: React.ReactNode[];
    onChange: (args: { event: React.SyntheticEvent<React.MouseEvent>; activeIndex: number }) => void;
    selectedItemIndex: number;
    responsive?: boolean | undefined;
    size?: 'md' | 'lg' | undefined;
}

/**
 * SelectList Props Interface
 * https://gestalt.netlify.app/SelectList
 */
export interface SelectListProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLElement>; value: string }) => void;
    options: ReadonlyArray<{ label: string; value: string }>;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    helperText?: string | undefined;
    label?: string | undefined;
    name?: string | undefined;
    placeholder?: string | undefined;
    size?: 'md' | 'lg' | undefined;
    value?: string | undefined;
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
    children?: SheetNodeOrRenderProp | undefined;
    closeOnOutsideClick?: boolean | undefined;
    footer?: SheetNodeOrRenderProp | undefined;
    heading?: string | undefined;
    size?: 'sm' | 'md' | 'lg' | undefined;
    subHeading?: SheetNodeOrRenderProp | undefined;
}

/**
 * Spinner Props Interface
 * https://gestalt.netlify.app/Spinner
 */
export interface SpinnerProps {
    accessibilityLabel: string;
    show: boolean;
    delay?: boolean | undefined;
    size?: 'sm' | 'md' | undefined;
}

/**
 * Stack Props Interface
 * https://gestalt.netlify.app/Stack
 */
export interface StackProps {
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch' | undefined;
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined;
    alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined;
    children?: React.ReactNode | undefined;
    fit?: boolean | undefined;
    flex?: 'grow' | 'shrink' | 'none' | undefined;
    gap?: UnsignedUpTo12 | undefined;
    height?: number | string | undefined;
    justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | undefined;
    maxHeight?: number | string | undefined;
    maxWidth?: number | string | undefined;
    minHeight?: number | string | undefined;
    minWidth?: number | string | undefined;
    width?: number | string | undefined;
    wrap?: boolean | undefined;
}

/**
 * Sticky Props Interface
 * https://gestalt.netlify.app/Sticky
 */
export interface StickyProps {
    bottom?: number | string | undefined;
    children?: React.ReactNode | undefined;
    height?: number | undefined;
    left?: number | string | undefined;
    right?: number | string | undefined;
    top?: number | string | undefined;
    zIndex?: Indexable | undefined;
}

/**
 * Switch Props Interface
 * https://gestalt.netlify.app/Switch
 */
export interface SwitchProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: boolean }) => void;
    disabled?: boolean | undefined;
    name?: string | undefined;
    switched?: boolean | undefined;
}

/**
 * Table Props Interface
 * https://gestalt.netlify.app/Table
 */
export interface TableProps {
    borderStyle?: 'sm' | 'none' | undefined;
    children?: React.ReactNode | undefined;
    maxHeight?: number | string | undefined;
}

export interface TableBodyProps {
    children?: React.ReactNode | undefined;
}

export interface TableCellProps {
    children?: React.ReactNode | undefined;
    colSpan?: number | undefined;
    rowSpan?: number | undefined;
}

export interface TableFooterProps {
    children?: React.ReactNode | undefined;
}

export interface TableHeaderProps {
    children?: React.ReactNode | undefined;
    sticky?: boolean | undefined;
}

export interface TableHeaderCellProps extends TableCellProps {
    scope?: 'col' | 'row' | 'colgroup' | 'rowgroup' | undefined;
}

export interface TableRowProps {
    children?: React.ReactNode | undefined;
}

export interface TableRowExpandableProps {
    accessibilityCollapseLabel: string;
    accessibilityExpandLabel: string;
    expandedContents: React.ReactNode;
    id: string;
    children?: React.ReactNode | undefined;
    hoverStyle?: 'none' | 'gray' | undefined;
    onExpand?: AbstractEventHandler<
        | React.MouseEvent<HTMLButtonElement>
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLButtonElement>
    > | undefined;
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
    onChange: (args: {
        event: React.SyntheticEvent<React.MouseEvent>;
        activeTabIndex: number;
        disableOnNavigation: () => void;
    }) => void;
    tabs: ReadonlyArray<{
        href: string;
        text: React.ReactNode;
        id?: string | undefined;
        indicator?: 'dot' | number | undefined;
        ref?: { current?: HTMLElement | undefined } | undefined;
    }>;
    wrap?: boolean | undefined;
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
    disabled?: boolean | undefined;
    /**
     * Set an error state on the tag. The message is used as an accessibility label for the error icon.
     * Keep it short so it doesn't overwhelm the user.
     */
    errorMessage?: string | undefined;
    /**
     * Callback fired when the tag is removed. Should handle state updates to stop rendering the component.
     * Required unless the tag is in a disabled state.
     */
    onRemove?: AbstractEventHandler<React.MouseEvent<HTMLButtonElement>> | undefined;
    /**
     * Accessibility label for the icon button to remove the tag, ideally something like "Remove [Tag Name] Tag".
     * Required unless the tag is in a disabled state.
     */
    removeIconAccessibilityLabel?: string | undefined;
}

/**
 * TabArea Props Interface
 * https://gestalt.netlify.app/TapArea
 */
export interface TapAreaProps {
    accessibilityControls?: string | undefined;
    accessibilityExpanded?: boolean | undefined;
    accessibilityHaspopup?: boolean | undefined;
    accessibilityLabel?: string | undefined;
    children?: React.ReactNode | undefined;
    disabled?: boolean | undefined;
    fullHeight?: boolean | undefined;
    fullWidth?: boolean | undefined;
    href?: string | undefined;
    mouseCursor?: 'copy' | 'grab' | 'grabbing' | 'move' | 'noDrop' | 'pointer' | 'zoomIn' | 'zoomOut' | undefined;
    onBlur?: AbstractEventHandler<React.FocusEvent<HTMLDivElement | HTMLAnchorElement>> | undefined;
    onFocus?: AbstractEventHandler<React.FocusEvent<HTMLDivElement | HTMLAnchorElement>> | undefined;
    onMouseDown?: AbstractEventHandler<React.MouseEvent<HTMLDivElement | HTMLAnchorElement>> | undefined;
    onMouseEnter?: AbstractEventHandler<React.MouseEvent<HTMLDivElement | HTMLAnchorElement>> | undefined;
    onMouseLeave?: AbstractEventHandler<React.MouseEvent<HTMLDivElement | HTMLAnchorElement>> | undefined;
    onTap?: AbstractEventHandler<
        | React.MouseEvent<HTMLDivElement>
        | React.KeyboardEvent<HTMLDivElement>
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>,
        { disableOnNavigation?: (() => void) | undefined }
    > | undefined;
    rel?: 'none' | 'nofollow' | undefined;
    role?: 'button' | 'link' | undefined;
    rounding?: 'pill' | 'circle' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined;
    tabIndex?: -1 | 0 | undefined;
    tapStyle?: 'none' | 'compress' | undefined;
    target?: null | 'self' | 'blank' | undefined;
}

/**
 * Text Props Interface
 * https://gestalt.netlify.app/Text
 */
export interface TextProps {
    align?: 'start' | 'end' | 'center' | 'justify' | 'forceLeft' | 'forceRight' | undefined;
    children?: React.ReactNode | undefined;
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
        | 'white' | undefined;
    inline?: boolean | undefined;
    italic?: boolean | undefined;
    overflow?: 'normal' | 'breakWord' | 'noWrap' | undefined;
    size?: 'sm' | 'md' | 'lg' | undefined;
    truncate?: boolean | undefined;
    underline?: boolean | undefined;
    weight?: 'bold' | 'normal' | undefined;
}

/**
 * TextArea Props Interface
 * https://gestalt.netlify.app/TextArea
 */
export interface TextAreaProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLTextAreaElement>; value: string }) => void;
    disabled?: boolean | undefined;
    errorMessage?: React.ReactNode | undefined;
    helperText?: string | undefined;
    label?: string | undefined;
    name?: string | undefined;
    onBlur?: ((args: { event: React.SyntheticEvent<HTMLTextAreaElement>; value: string }) => void) | undefined;
    onFocus?: ((args: { event: React.SyntheticEvent<HTMLTextAreaElement>; value: string }) => void) | undefined;
    onKeyDown?: ((args: { event: React.SyntheticEvent<HTMLTextAreaElement>; value: string }) => void) | undefined;
    placeholder?: string | undefined;
    /**
     * Number of text rows to display.
     * Note that tags take up more space, and will show fewer rows than specified.
     */
    rows?: number | undefined;
    /**
     * List of tags to display in the component
     */
    tags?: ReadonlyArray<React.ReactElement<TagProps, typeof Tag>> | undefined;
    value?: string | undefined;
}

/**
 * TextField Props Interface
 * https://gestalt.netlify.app/TextField
 */
export interface TextFieldProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: string }) => void;
    autoComplete?: 'current-password' | 'on' | 'off' | 'username' | 'new-password' | 'email' | undefined;
    /**
     * @default false
     */
    disabled?: boolean | undefined;
    errorMessage?: React.ReactNode | undefined;
    /**
     * More information about how to complete the form field
     */
    helperText?: string | undefined;
    label?: string | undefined;
    name?: string | undefined;
    onBlur?: ((args: { event: React.SyntheticEvent<React.FocusEvent<HTMLInputElement>>; value: string }) => void) | undefined;
    onFocus?: ((args: { event: React.SyntheticEvent<React.FocusEvent<HTMLInputElement>>; value: string }) => void) | undefined;
    onKeyDown?: ((args: { event: React.SyntheticEvent<React.KeyboardEvent<HTMLInputElement>>; value: string }) => void) | undefined;
    placeholder?: string | undefined;
    /**
     * md: 40px, lg: 48px
     *
     * @default "md"
     */
    size?: 'md' | 'lg' | undefined;
    /**
     * List of tags to display in the component
     */
    tags?: ReadonlyArray<React.ReactElement<TagProps, typeof Tag>> | undefined;
    /**
     * @default "text"
     */
    type?: 'date' | 'email' | 'number' | 'password' | 'text' | 'url' | undefined;
    value?: string | undefined;
}

/**
 * Toast Props Interface
 * https://gestalt.netlify.app/Toast
 */
export interface ToastProps {
    button?: React.ReactNode | undefined;
    color?: 'white' | 'red' | undefined;
    text?: string | React.ReactNode | undefined;
    thumbnail?: React.ReactNode | undefined;
    thumbnailShape?: 'circle' | 'rectangle' | 'square' | undefined;
}

/**
 * Tooltip Props Interface
 * https://gestalt.netlify.app/Tooltip
 */
export interface TooltipProps {
    children: React.ReactNode;
    text: string;
    idealDirection?: FourDirections | undefined;
    inline?: boolean | undefined;
    link?: React.ReactNode | undefined;
    zIndex?: Indexable | undefined;
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
    label?: string | undefined;
    onBlur?: ((args: {
        event: React.FocusEvent<HTMLInputElement> | React.SyntheticEvent<HTMLInputElement>;
        value: string;
    }) => void) | undefined;
    onChange?: ((args: { event: React.SyntheticEvent<HTMLInputElement>; value: string }) => void) | undefined;
    onFocus?: ((args: { event: React.FocusEvent<HTMLInputElement>; value: string }) => void) | undefined;
    onSelect?: ((args: {
        event: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>;
        item:
            | {
                  label: string;
                  value: string;
              }
            | null
            | undefined;
    }) => void) | undefined;
    placeholder?: string | undefined;
    size?: 'md' | 'lg' | undefined;
    /**
     * List of tags to display in the component
     */
    tags?: ReadonlyArray<React.ReactElement<TagProps, typeof Tag>> | undefined;
    value?: string | undefined;
    zIndex?: Indexable | undefined;
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
    } | undefined;
    imageData?: {
        component: React.ReactElement<any, typeof Image | typeof Icon>;
        width?: number | undefined;
        mask?: {
            rounding: 'circle' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
            wash: boolean;
        } | undefined;
    } | undefined;
    primaryAction?: ActionData | undefined;
    secondaryAction?: ActionData | undefined;
    title?: string | undefined;
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
    submitButtonDisabled?: boolean | undefined;
}

/**
 * Video Props Interface
 * https://gestalt.netlify.app/Video
 */
export interface VideoProps {
    accessibilityMaximizeLabel?: string | undefined;
    accessibilityMinimizeLabel?: string | undefined;
    accessibilityMuteLabel?: string | undefined;
    accessibilityPauseLabel?: string | undefined;
    accessibilityPlayLabel?: string | undefined;
    accessibilityUnmuteLabel?: string | undefined;
    aspectRatio: number;
    captions: string;
    playbackRate?: number | undefined;
    playing?: boolean | undefined;
    preload?: 'auto' | 'metadata' | 'none' | undefined;
    src: string | ReadonlyArray<{ type: 'video/m3u8' | 'video/mp4' | 'video/ogg'; src: string }>;
    volume?: number | undefined;
    children?: Node | undefined;
    controls?: boolean | undefined;
    crossOrigin?: 'anonymous' | 'use-credentials' | undefined;
    loop?: boolean | undefined;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | undefined;
    onDurationChange?: ((args: { event: React.SyntheticEvent<HTMLVideoElement>; duration: number }) => void) | undefined;
    onEnded?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>> | undefined;
    onFullscreenChange?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>, { fullscreen: boolean }> | undefined;
    onLoadedChange?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>, { loaded: number }> | undefined;
    onPlay?: AbstractEventHandler<React.SyntheticEvent<HTMLDivElement>> | undefined;
    onPlayheadDown?: AbstractEventHandler<React.MouseEvent<HTMLDivElement>> | undefined;
    onPlayheadUp?: AbstractEventHandler<React.MouseEvent<HTMLDivElement>> | undefined;
    onPause?: AbstractEventHandler<React.SyntheticEvent<HTMLDivElement>> | undefined;
    onReady?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>> | undefined;
    onSeek?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>> | undefined;
    onTimeChange?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>, { time: number }> | undefined;
    onVolumeChange?: AbstractEventHandler<React.SyntheticEvent<HTMLDivElement>, { volume: number }> | undefined;
    onError?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>> | undefined;
    onLoadStart?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>> | undefined;
    onPlaying?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>> | undefined;
    onSeeking?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>> | undefined;
    onStalled?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>> | undefined;
    onWaiting?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>> | undefined;
    playsInline?: boolean | undefined;
    poster?: string | undefined;
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
export class AvatarGroup extends React.Component<AvatarGroupProps, any> {}
export class AvatarPair extends React.Component<AvatarPairProps, any> {}
export class Badge extends React.Component<BadgeProps, any> {}
export const Box: ReactForwardRef<HTMLDivElement, BoxProps>;
export const Button: ReactForwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>;
export class ButtonGroup extends React.Component<ButtonGroupProps, any> {}
export class Callout extends React.Component<CalloutProps, any> {}
export class Card extends React.Component<CardProps, any> {}
export const Checkbox: ReactForwardRef<HTMLInputElement, CheckboxProps>;
export class Collage extends React.Component<CollageProps, any> {}
export class ColorSchemeProvider extends React.Component<ColorSchemeProviderProps, any> {}
export class Column extends React.Component<ColumnProps, any> {}
export class Container extends React.Component<ContainerProps, any> {}
export class ScrollBoundaryContainer extends React.Component<ScrollBoundaryContainerProps, any> {}
export class Divider extends React.Component<{}, any> {}
export class Dropdown extends React.Component<DropdownProps, any> {
    static Item: React.FC<DropdownItemProps>;
    static Link: React.FC<DropdownLinkProps>;
    static Section: React.FC<DropdownSectionProps>;
}
export class Fieldset extends React.Component<FieldsetProps, any> {}
export class Flex extends React.Component<FlexProps, any> {
    static Item: React.FC<FlexItemProps>;
}
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
export class OnLinkNavigationProvider extends React.Component<OnLinkNavigationProviderProps, any> {}
export class PageHeader extends React.Component<PageHeaderProps, any> {}
export class Pog extends React.Component<PogProps, any> {}
export class Popover extends React.Component<PopoverProps, any> {}
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
