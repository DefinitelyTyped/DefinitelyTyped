import React = require("react");

/**
 * Helpers
 */

export type AbstractEventHandler<T extends React.SyntheticEvent<HTMLElement> | Event, U = {}> = (
    arg: U & {
        readonly event: T;
    },
) => void;
export type ReactForwardRef<T, P> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;

export type FourDirections = "up" | "right" | "down" | "left";

export type EventHandlerType = (args: { readonly event: React.SyntheticEvent }) => void;

export interface OnNavigationArgs {
    href: string;
    target?: null | "self" | "blank" | undefined;
}

export type OnNavigationType = (args: OnNavigationArgs) => EventHandlerType | null | undefined;
export type UnsignedUpTo12 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type SignedUpTo12 = -12 | -11 | -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | UnsignedUpTo12;

export interface BadgeObject {
    text: string;
    type?: "info" | "error" | "warning" | "success" | "neutral" | "darkWash" | "lightWash" | undefined;
}

/**
 * ActivationCard Props Interface
 * https://gestalt.netlify.app/ActivationCard
 */
export interface ActivationCardProps {
    message: string;
    status: "notStarted" | "pending" | "needsAttention" | "complete";
    statusMessage: string;
    title: string;
    dismissButton?:
        | {
            accessibilityLabel: string;
            onDismiss: () => void;
        }
        | undefined;
    link?:
        | {
            accessibilityLabel: string;
            href: string;
            label: string;
            onClick?:
                | AbstractEventHandler<
                    | React.MouseEvent<HTMLButtonElement>
                    | React.MouseEvent<HTMLAnchorElement>
                    | React.KeyboardEvent<HTMLAnchorElement>
                    | React.KeyboardEvent<HTMLButtonElement>,
                    { dangerouslyDisableOnNavigation?: (() => void) | undefined }
                >
                | undefined;
            rel?: "none" | "nofollow" | undefined;
            target?: null | "self" | "blank" | undefined;
        }
        | undefined;
}

/**
 * Avatar Props Interface
 * https://gestalt.netlify.app/Avatar
 */
export interface AvatarProps {
    name: string;
    accessibilityLabel?: string | undefined;
    outline?: boolean | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "fit" | undefined;
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
    onClick?: OnTapType | undefined;
    role?: "button" | "link" | undefined;
    size?: "xs" | "sm" | "md" | "fit" | undefined;
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
    size?: "md" | "lg" | "fit" | undefined;
}

/**
 * Badge Props Interface
 * https://gestalt.netlify.app/Badge
 */
export interface BadgeProps {
    text: string;
    position?: "middle" | "top" | undefined;
    type?:
        | "info"
        | "error"
        | "warning"
        | "success"
        | "neutral"
        | "darkWash"
        | "lightWash"
        | "recommendation"
        | undefined;
}

export type BoxPassthroughProps =
    & Omit<React.ComponentProps<"div">, "onClick" | "className" | "style" | "ref">
    & React.RefAttributes<HTMLDivElement>;

/**
 * Box Props Interface
 * https://gestalt.netlify.app/Box
 */
export interface BoxProps extends BoxPassthroughProps {
    alignContent?: "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch" | undefined;
    alignItems?: "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    smAlignItems?: "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    mdAlignItems?: "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    lgAlignItems?: "start" | "end" | "center" | "baseline" | "stretch" | undefined;

    /**
     * Changes the underlying DOM element when needed for accessibility or SEO reasons. Note that currently only block-level elements are available.
     *
     * @default 'div'
     */
    as?:
        | "article"
        | "aside"
        | "details"
        | "div"
        | "figcaption"
        | "figure"
        | "footer"
        | "header"
        | "main"
        | "nav"
        | "section"
        | "summary"
        | undefined;
    borderStyle?: "sm" | "lg" | "shadow" | "raisedTopShadow" | "raisedBottomShadow" | "none" | undefined;
    bottom?: boolean | undefined;
    children?: React.ReactNode | undefined;
    color?:
        | "darkWash"
        | "lightWash"
        | "transparent"
        | "transparentDarkGray"
        | "default"
        | "infoBase"
        | "infoWeak"
        | "errorBase"
        | "errorWeak"
        | "warningBase"
        | "warningWeak"
        | "successBase"
        | "successWeak"
        | "recommendationBase"
        | "recommendationWeak"
        | "shopping"
        | "primary"
        | "secondary"
        | "tertiary"
        | "selected"
        | "inverse"
        | "brand"
        | "education"
        | "elevationAccent"
        | "elevationFloating"
        | "elevationRaised"
        | "dark"
        | "light"
        | undefined;
    column?: UnsignedUpTo12 | undefined;
    smColumn?: UnsignedUpTo12 | undefined;
    mdColumn?: UnsignedUpTo12 | undefined;
    lgColumn?: UnsignedUpTo12 | undefined;
    dangerouslySetInlineStyle?:
        | {
            __style: {
                [key: string]: string | number | undefined;
            };
        }
        | undefined;
    direction?: "row" | "column" | undefined;
    smDirection?: "row" | "column" | undefined;
    mdDirection?: "row" | "column" | undefined;
    lgDirection?: "row" | "column" | undefined;
    display?: "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden" | undefined;
    smDisplay?: "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden" | undefined;
    mdDisplay?: "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden" | undefined;
    lgDisplay?: "none" | "flex" | "block" | "inlineBlock" | "visuallyHidden" | undefined;
    fit?: boolean | undefined;
    flex?: "grow" | "shrink" | "none" | undefined;
    height?: number | string | undefined;
    justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly" | undefined;
    left?: boolean | undefined;
    margin?: SignedUpTo12 | "auto" | undefined;
    smMargin?: SignedUpTo12 | "auto" | undefined;
    mdMargin?: SignedUpTo12 | "auto" | undefined;
    lgMargin?: SignedUpTo12 | "auto" | undefined;
    marginBottom?: SignedUpTo12 | "auto" | undefined;
    smMarginBottom?: SignedUpTo12 | "auto" | undefined;
    mdMarginBottom?: SignedUpTo12 | "auto" | undefined;
    lgMarginBottom?: SignedUpTo12 | "auto" | undefined;
    marginEnd?: SignedUpTo12 | "auto" | undefined;
    smMarginEnd?: SignedUpTo12 | "auto" | undefined;
    mdMarginEnd?: SignedUpTo12 | "auto" | undefined;
    lgMarginEnd?: SignedUpTo12 | "auto" | undefined;
    marginStart?: SignedUpTo12 | "auto" | undefined;
    smMarginStart?: SignedUpTo12 | "auto" | undefined;
    mdMarginStart?: SignedUpTo12 | "auto" | undefined;
    lgMarginStart?: SignedUpTo12 | "auto" | undefined;
    marginTop?: SignedUpTo12 | "auto" | undefined;
    smMarginTop?: SignedUpTo12 | "auto" | undefined;
    mdMarginTop?: SignedUpTo12 | "auto" | undefined;
    lgMarginTop?: SignedUpTo12 | "auto" | undefined;
    maxHeight?: number | string | undefined;
    maxWidth?: number | string | undefined;
    minHeight?: number | string | undefined;
    minWidth?: number | string | undefined;
    opacity?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1 | undefined;
    overflow?: "visible" | "hidden" | "scroll" | "scrollX" | "scrollY" | "auto" | undefined;
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
    position?: "static" | "absolute" | "relative" | "fixed" | undefined;
    right?: boolean | undefined;
    role?: string | undefined;
    rounding?: "pill" | "circle" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined;
    top?: boolean | undefined;
    userSelect?: "auto" | "none" | undefined;
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
    color?:
        | "gray"
        | "red"
        | "blue"
        | "transparent"
        | "semiTransparentWhite"
        | "transparentWhiteText"
        | "white"
        | undefined;
    disabled?: boolean | undefined;
    href?: string | undefined;
    iconEnd?: Icons | undefined;
    fullWidth?: boolean | undefined;
    name?: string | undefined;
    onClick?:
        | AbstractEventHandler<
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLButtonElement>,
            { dangerouslyDisableOnNavigation?: (() => void) | undefined }
        >
        | undefined;
    rel?: "none" | "nofollow" | undefined;
    role?: "button" | "link" | undefined;
    selected?: boolean | undefined;
    size?: "sm" | "md" | "lg" | undefined;
    tabIndex?: -1 | 0 | undefined;
    target?: null | "self" | "blank" | undefined;
    type?: "submit" | "button" | undefined;
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
    disabled?: boolean;
    href?: string | undefined;
    label: string;
    onClick?:
        | AbstractEventHandler<
            | React.MouseEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLAnchorElement>
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>,
            { dangerouslyDisableOnNavigation?: (() => void) | undefined }
        >
        | undefined;
    rel?: "none" | "nofollow" | undefined;
    target?: null | "self" | "blank" | undefined;
}

/**
 * Callout Props Interface
 * https://gestalt.netlify.app/Callout
 */
export interface CalloutProps {
    iconAccessibilityLabel: string;
    message: string;
    type: "error" | "info" | "recommendation" | "success" | "warning";
    dismissButton?:
        | {
            accessibilityLabel: string;
            onDismiss: () => void;
        }
        | undefined;
    primaryAction?: ActionData | undefined;
    secondaryAction?: ActionData | undefined;
    title?: string | undefined;
}

/**
 * Wash Animated Props Interface
 * https://gestalt.netlify.app/washanimated
 */
export interface WashAnimatedProps {
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
    size?: "sm" | "md" | undefined;
    subtext?: string | undefined;
    labelDisplay?: "visible" | "hidden" | undefined;
}

/**
 * ComboBox Props Interface
 * https://gestalt.netlify.app/ComboBox
 */

export interface ComboBoxItemType {
    label: string;
    subtext?: string;
    value: string;
}

export interface ComboBoxProps {
    accessibilityClearButtonLabel: string;
    id: string;
    label: string;
    options: ComboBoxItemType[];
    noResultText: string;
    zIndex?: Indexable | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    helperText?: string | undefined;
    inputValue?: string | undefined;
    labelDisplay?: "visible" | "hidden" | undefined;
    onChange?: ((args: { event: React.SyntheticEvent<HTMLInputElement>; value: string }) => void) | undefined;
    onBlur?:
        | ((args: {
            event: React.FocusEvent<HTMLInputElement> | React.SyntheticEvent<HTMLInputElement>;
            value: string;
        }) => void)
        | undefined;
    onFocus?: ((args: { event: React.FocusEvent<HTMLInputElement>; value: string }) => void) | undefined;
    onKeyDown?: ((args: { event: React.KeyboardEvent<HTMLInputElement>; value: string }) => void) | undefined;
    onClear?: (() => void) | undefined;
    onSelect?:
        | ((args: {
            event: React.SyntheticEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>;
            item: ComboBoxItemType;
        }) => void)
        | undefined;
    placeholder?: string | undefined;
    selectedOption?: ComboBoxItemType | undefined;
    size?: "md" | "lg" | undefined;
    tags?: ReadonlyArray<React.ReactElement<TagProps, typeof Tag>> | undefined;
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
    colorScheme: "light" | "dark" | "userPreference";
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
 * Datapoint Props Interface
 * https://gestalt.netlify.app/datapoint
 */
export interface DatapointProps {
    title: string;
    value: string;
    size?: "md" | "lg" | undefined;
    tooltipText?: string | undefined;
    trend?: { accessibilityLabel: string; value: number } | undefined;
    trendSentiment?: "good" | "bad" | "neutral" | "auto" | undefined;
    badge?: BadgeObject | undefined;
    tooltipZIndex?: Indexable | undefined;
}

export type DeviceType = "desktop" | "mobile";

export interface DeviceTypeProviderProps {
    deviceType: DeviceType;
}

export interface DefaultLabelContextType {
    ComboBox: {
        accessibilityClearButtonLabel: string;
    };
    Link: {
        accessibilityNewTabLabel: string;
    };
    ModalAlert: {
        accessibilityDismissButtonLabel: string;
    };
    Popover: {
        accessibilityDismissButtonLabel: string;
    };
    Tag: {
        accessibilityErrorIconLabel: string;
        accessibilityRemoveIconLabel: string;
        accessibilityWarningIconLabel: string;
    };
    TextField: {
        accessibilityHidePasswordLabel: string;
        accessibilityShowPasswordLabel: string;
    };
}

export interface DefaultLabelProviderProps {
    labels?: DefaultLabelContextType | undefined;
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
        | Array<React.ReactElement<DropdownItemProps | DropdownSectionProps>>;
    /**
     * Unique id to identify this Dropdown
     */
    id: string;
    onDismiss: () => void;
    /**
     * Ref for the element that the Dropdown will attach to, will most likely be a Button
     */
    anchor?: HTMLElement | null | undefined;

    /**
     * Removes the Layer component around Popover.
     * Should only be used in cases where Layer breaks the Dropdown positionings such as
     * when the anchor element is within a sticky component.
     */
    dangerouslyRemoveLayer?: boolean;
    headerContent?: React.ReactNode | undefined;
    /**
     * Preferred direction for the Dropdown to open
     *
     * @default "down"
     */
    idealDirection?: FourDirections | undefined;
    /**
     *  Define a controlled size to dropdown's Popover.
     */
    maxHeight?: "30vh" | undefined;
    zIndex?: Indexable | undefined;
}

export interface DropdownItemProps {
    children?: React.ReactNode;

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
    badge?: BadgeObject | undefined;

    /**
     * When supplied, will add a data-test-id prop to the dom element.
     */
    dataTestId?: string | undefined;

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
    badge?: BadgeObject | undefined;
    children?: React.ReactNode;
    /**
     * When supplied, will add a data-test-id prop to the dom element.
     */
    dataTestId?: string | undefined;
    /**
     * When true, adds an arrow icon to the end of the item to signal this item takes users to an external source
     * and opens the link in a new tab.
     * Do not add if the item navigates users within the app. See the Best practices for more info.
     */
    isExternal?: boolean | undefined;

    onClick?:
        | AbstractEventHandler<
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLAnchorElement>,
            { dangerouslyDisableOnNavigation?: (() => void) | undefined }
        >
        | undefined;
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
    id?: string;
    legend: string;
    legendDisplay?: "visible" | "hidden" | undefined;
    errorMessage?: string;
}

/**
 * Flex Props Interface
 * https://gestalt.netlify.app/Flex
 */
export interface FlexProps {
    alignContent?: "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch" | undefined;
    alignItems?: "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    smAlignItems?: "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    mdAlignItems?: "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    lgAlignItems?: "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    children?: React.ReactNode | undefined;
    direction?: "row" | "column" | undefined;
    flex?: "grow" | "shrink" | "none" | undefined;
    gap?: UnsignedUpTo12 | { row: UnsignedUpTo12; column: UnsignedUpTo12 } | undefined;
    height?: number | string | undefined;
    justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly" | undefined;
    maxHeight?: number | string | undefined;
    maxWidth?: number | string | undefined;
    minHeight?: number | string | undefined;
    minWidth?: number | string | undefined;
    width?: number | string | undefined;
    wrap?: boolean | undefined;
    /**
     * Used to identify the element for testing purposes.
     */
    dataTestId?: string | undefined;
}

export interface FlexItemProps {
    alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    children?: React.ReactNode | undefined;
    flex?: "grow" | "shrink" | "none" | undefined;
    minWidth?: number | string | undefined;
    flexBasis?: string | number | undefined;
}

/**
 * Heading Props Interface
 * https://gestalt.netlify.app/Heading
 */
export interface HeaderProps {
    accessibilityLevel?: 1 | 2 | 3 | 4 | 5 | 6 | "none" | undefined;
    align?: "start" | "end" | "center" | "forceLeft" | "forceRight" | undefined;
    children?: React.ReactNode | undefined;
    color?:
        | "default"
        | "subtle"
        | "success"
        | "error"
        | "warning"
        | "shopping"
        | "inverse"
        | "light"
        | "dark"
        | undefined;
    id?: string | undefined;
    overflow?: "normal" | "breakWord" | undefined;
    size?: "100" | "200" | "300" | "400" | "500" | "600" | undefined;
    truncate?: boolean | undefined;
    lineClamp?: number | undefined;
}

export interface HelpButtonLinkType {
    accessibilityLabel?: string | undefined;
    externalLinkIcon?:
        | "none"
        | "default"
        | {
            color: IconProps["color"];
            size: IconProps["size"];
        };
    href: string;
    onClick?:
        | AbstractEventHandler<
            React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>,
            {
                dangerouslyDisableOnNavigation: () => void;
            }
        >
        | undefined;
    text: string;
    ref?: React.Ref<"a">;
    target?: null | "self" | "blank";
}

/**
 * Help Button props
 * https://gestalt.netlify.app/helpbutton
 */
export interface HelpButtonProps {
    /**
     * Supply a short, descriptive label screen readers. Follow the pattern `Click to learn more about [description]`.
     * See [Accessibility](https://gestalt.pinterest.systems/web/helpbutton#Accessibility) section for guidance.
     */
    accessibilityLabel: string;
    /**
     * Supply a short, descriptive label for screen-readers to describe the popover content.
     * Used for [accessibility](https://gestalt.pinterest.systems/web/popover#ARIA-attributes) purposes.
     */
    accessibilityPopoverLabel: string;
    /**
     * Specifies the preferred position of the tooltip and popover relative to HelpButton.
     * See [Popover's ideal direction variant](https://gestalt.pinterest.systems/web/popover#Ideal-direction) to learn more.
     */
    idealDirection?: "up" | "right" | "down" | "left" | undefined;
    /**
     * Enables correct behavior when HelpButton is used within a fixed container.
     * To achieve this it removes the Layer component around Popover and enables positioning relative to its anchor element.
     * Should only be used in cases where Layer breaks the HelpButton positionings such as when the anchor element is within a sticky component.
     */
    isWithinFixedContainer?: boolean | undefined;
    /**
     * If provided, displays a [link api](https://gestalt.pinterest.systems/web/link#Props) at the bottom of the popover message.
     * - `href` is the URL that the hyperlink points to.
     * - `text` is the displayed text for the link. See the [link variant](https://gestalt.pinterest.systems/web/helpbutton#With-a-link) for more details.
     * - `target` see the [target Link variant](https://gestalt.pinterest.systems/web/link#Target) to learn more. If not defined the link will open in a new window.
     * - Optionally use `accessibilityLabel` to supply a short,
     *      descriptive label for screen-readers to replace link texts that don't provide sufficient context about the link component behavior.
     *      Texts like "Click Here", or "Read More" can be confusing when a screen reader reads them out of context.
     *      In those cases, we must pass an alternative text to replace the link text.
     *      It populates `aria-label`. Screen readers read the `accessibilityLabel` prop, if present, instead of the link text.
     *      See [ Link's accessibility guidelines](https://gestalt.pinterest.systems/web/link#Accessibility) for more information.
     * - Optionally provide an `onClick` callback, which is fired when the link is clicked (pressed and released) with a mouse or keyboard.
     *      See [OnLinkNavigationProvider](https://gestalt.pinterest.systems/web/utilities/onlinknavigationprovider) to learn more about link navigation.
     */
    link?: HelpButtonLinkType | undefined;
    /**
     * Callback fired when HelpIcon is clicked (pressed and released) with a mouse or keyboard.
     */
    onClick?:
        | AbstractEventHandler<
            | React.MouseEvent<HTMLDivElement>
            | React.KeyboardEvent<HTMLDivElement>
            | React.MouseEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLAnchorElement>,
            {
                dangerouslyDisableOnNavigation: () => void;
            }
        >
        | undefined;
    /**
     * Informational content that's displayed when the user clicks on HelpButton.
     */
    text: string | React.ReactElement<typeof Text>;
    /**
     * Specifies the z-index for HelpButton's tooltip and popover to resolve any layering issues with other elements.
     *  See the [zIndex variant](https://gestalt.pinterest.systems/web/helpbutton#With-Z-index) for more details.
     */
    zIndex?: Indexable | undefined;
}

export type Icons =
    | "ad"
    | "ad-group"
    | "add"
    | "add-circle"
    | "add-layout"
    | "add-pin"
    | "ads-stats"
    | "ads-overview"
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
    | "android-share"
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
    | "captions"
    | "color-picker"
    | "check"
    | "check-circle"
    | "circle-outline"
    | "clear"
    | "clock"
    | "code"
    | "cog"
    | "compass"
    | "compose"
    | "copy-to-clipboard"
    | "crop"
    | "dash"
    | "conversion-tag"
    | "credit-card"
    | "directional-arrow-left"
    | "directional-arrow-right"
    | "download"
    | "drag-drop"
    | "duplicate"
    | "edit"
    | "ellipsis"
    | "ellipsis-circle-outline"
    | "envelope"
    | "eye"
    | "eye-hide"
    | "facebook"
    | "face-happy"
    | "face-neutral"
    | "face-sad"
    | "face-smiley"
    | "file-unknown"
    | "fill-opaque"
    | "fill-transparent"
    | "filter"
    | "flag"
    | "flash"
    | "flashlight"
    | "flipHorizontal"
    | "flipVertical"
    | "folder"
    | "gif"
    | "globe"
    | "globe-checked"
    | "gmail"
    | "google-plus"
    | "graph-bar"
    | "handle"
    | "hand-pointing"
    | "heart"
    | "heart-outline"
    | "heart-broken"
    | "history"
    | "home"
    | "idea-pin"
    | "impressum"
    | "insights-audience"
    | "insights-conversions"
    | "info-circle"
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
    | "music-off"
    | "music-on"
    | "overlay-text"
    | "overview"
    | "pause"
    | "people"
    | "person"
    | "person-add"
    | "phone"
    | "pin"
    | "pincode"
    | "pin-hide"
    | "pinterest"
    | "play"
    | "protect"
    | "refresh"
    | "question-mark"
    | "remove"
    | "reorder-images"
    | "replace"
    | "report"
    | "rotate"
    | "scale"
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
    | "sparkle"
    | "speech"
    | "speech-ellipsis"
    | "star"
    | "star-half"
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
    | "trending"
    | "twitter"
    | "video-camera"
    | "view-type-default"
    | "view-type-dense"
    | "view-type-list"
    | "visit"
    | "workflow-status-all"
    | "workflow-status-canceled"
    | "workflow-status-halted"
    | "workflow-status-in-progress"
    | "workflow-status-ok"
    | "workflow-status-problem"
    | "workflow-status-unstarted"
    | "workflow-status-warning";

/**
 * Icon Props Interface
 * https://gestalt.netlify.app/Icon
 */
export interface IconProps {
    accessibilityLabel: string;

    color?:
        | "default"
        | "subtle"
        | "success"
        | "error"
        | "warning"
        | "info"
        | "inverse"
        | "shopping"
        | "brandPrimary"
        | "light"
        | "dark"
        | undefined;
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
    bgColor?: "transparent" | "darkGray" | "transparentDarkGray" | "gray" | "lightGray" | "white" | "red" | undefined;
    accessibilityControls?: string | undefined;
    accessibilityExpanded?: boolean | undefined;
    accessibilityHaspopup?: boolean | undefined;
    accessibilityLabel: string;

    dangerouslySetSvgPath?: { __path: string } | undefined;
    disabled?: boolean | undefined;
    href?: string | undefined;
    icon?: Icons | undefined;
    iconColor?: "gray" | "darkGray" | "red" | "white" | "brandPrimary" | undefined;
    onClick?:
        | AbstractEventHandler<
            | React.MouseEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLAnchorElement>
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>,
            { dangerouslyDisableOnNavigation?: (() => void) | undefined }
        >
        | undefined;
    padding?: 1 | 2 | 3 | 4 | 5 | undefined;
    rel?: "none" | "nofollow" | undefined;
    role?: "button" | "link" | undefined;
    selected?: boolean | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    tabIndex?: -1 | 0 | undefined;
    target?: null | "self" | "blank" | undefined;
    tooltip?: Pick<TooltipProps, "accessibilityLabel" | "inline" | "idealDirection" | "text" | "zIndex"> | undefined;
    type?: "submit" | "button" | undefined;
}

/**
 * IconButtonFloating Props Interface
 * https://gestalt.netlify.app/IconButtonFloating
 */
export interface IconButtonFloatingProps {
    accessibilityControls?: string | undefined;
    accessibilityExpanded?: boolean | undefined;
    accessibilityPopupRole: "menu" | "dialog";
    accessibilityLabel: string;
    icon: Icons;
    onClick?:
        | AbstractEventHandler<
            | React.MouseEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLAnchorElement>
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>,
            { dangerouslyDisableOnNavigation?: (() => void) | undefined }
        >
        | undefined;
    selected?: boolean | undefined;
}

/**
 * Image Props Interface
 * https://gestalt.netlify.app/Image
 */
export interface ImageProps {
    alt: string;
    color: string;
    crossOrigin?: "anonymous" | "use-credentials" | undefined;
    decoding?: "sync" | "async" | "auto";
    elementTiming?: string | undefined;
    naturalHeight: number;
    naturalWidth: number;
    src: string;
    children?: React.ReactNode | undefined;
    fit?: "cover" | "contain" | "none" | undefined;
    fetchPriority?: "high" | "low" | "auto" | undefined;
    loading?: "eager" | "lazy" | "auto" | undefined;
    onError?: AbstractEventHandler<React.SyntheticEvent<HTMLImageElement>> | undefined;
    onLoad?: AbstractEventHandler<React.SyntheticEvent<HTMLImageElement>> | undefined;
    role?: "img" | "presentation" | undefined;
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
export type ExternalLinkIcon = "none" | "default" | { color: IconProps["color"]; size: TextProps["size"] };
export interface LinkProps {
    href: string;
    accessibilityLabel?: string | undefined;
    children?: React.ReactNode | undefined;
    hoverStyle?: "none" | "underline" | undefined;
    id?: string | undefined;
    display?: "inline" | "inlineBlock" | "block" | undefined;

    /**
     * When supplied, a "visit" icon is shown at the end of Link. See the [externalLinkIcon and rel variant](https://gestalt.pinterest.systems/link#externalLinkIcon-and-rel) to learn more.
     */
    externalLinkIcon?: ExternalLinkIcon | undefined;
    onBlur?: AbstractEventHandler<React.FocusEvent<HTMLAnchorElement>> | undefined;
    onClick?:
        | AbstractEventHandler<
            React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>,
            { dangerouslyDisableOnNavigation?: (() => void) | undefined }
        >
        | undefined;
    onFocus?: AbstractEventHandler<React.FocusEvent<HTMLAnchorElement>> | undefined;
    rel?: "none" | "nofollow" | undefined;
    rounding?: "pill" | "circle" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined;
    tapStyle?: "none" | "compress" | undefined;
    target?: null | "self" | "blank" | undefined;
    underline?: "auto" | "none" | "always" | "hover" | undefined;
}

export interface ListItemProps {
    text: string | React.ReactElement<typeof Text>;
}

export interface ListProps {
    label: string | React.ReactElement<typeof Text>;
    labelDisplay?: "visible" | "hidden" | undefined;
    spacing?: "regular" | "condensed" | undefined;
    type?: "bare" | "ordered" | "unordered" | undefined;
}

/**
 * Mask Props Interface
 * https://gestalt.netlify.app/Mask
 */
export interface MaskProps {
    children?: React.ReactNode | undefined;
    height?: number | string | undefined;
    rounding?: "circle" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined;
    wash?: boolean | undefined;
    width?: number | string | undefined;
    willChangeTransform?: boolean | undefined;
}

/**
 * Masonry Props Interface
 * https://gestalt.netlify.app/Masonry
 */

export interface MasonryCache<K, V> {
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): void;
    reset(): void;
}
export interface MasonryProps<T = any> {
    columnWidth?: number | undefined;
    gutterWidth?: number | undefined;
    items: ReadonlyArray<T>;
    loadItems?: false | ((_arg?: { from: number }) => undefined | boolean | {}) | undefined;
    measurementStore?: MasonryCache<T, any>;
    layout?: "basic" | "basicCentered" | "flexible" | "serverRenderedFlexible" | "uniformRow" | undefined;
    renderItem: (args: { data: T; itemIdx: number; isMeasuring: boolean }) => React.ReactNode;
    flexible?: boolean | undefined;
    minCols?: number | undefined;
    scrollContainer?: (() => HTMLElement) | undefined;
    virtualBoundsBottom?: number | undefined;
    virtualBoundsTop?: number | undefined;
    virtualize?: boolean | undefined;
    virtualBufferFactor?: number | undefined;
}

/**
 * Modal Props Interface
 * https://gestalt.netlify.app/Modal
 */

export interface ModalProps {
    /**
     * Temporary undocumented prop to disable ScrollBoundaryContainer.
     */
    _dangerouslyDisableScrollBoundaryContainer?: boolean;
    accessibilityModalLabel: string;
    align?: "center" | "start" | undefined;
    children?: React.ReactNode | undefined;
    closeOnOutsideClick?: boolean | undefined;
    footer?: React.ReactNode | undefined;
    heading?: React.ReactNode | undefined;
    onDismiss: () => void;
    pending?: "defaut" | "none" | undefined;
    role?: "alertdialog" | "dialog" | undefined;
    size?: "sm" | "md" | "lg" | number | undefined;
    subHeading?: string | undefined;
}

/**
 * Modal Alert Props Interface
 * https://gestalt.netlify.app/modalalert
 */

export interface ModalAlertActionDataType {
    accessibilityLabel: string;
    disabled?: boolean | undefined;
    href?: string | undefined;
    label: string;
    onClick: AbstractEventHandler<
        | React.KeyboardEvent<HTMLButtonElement>
        | React.MouseEvent<HTMLAnchorElement>
        | React.KeyboardEvent<HTMLAnchorElement>
        | React.MouseEvent<HTMLButtonElement>,
        { dangerouslyDisableOnNavigation: () => void }
    >;
    rel?: "none" | "nofollow" | undefined;
    target?: null | "self" | "blank" | undefined;
}

export interface ModalAlertProps {
    accessibilityDismissButtonLabel?: string | undefined;
    accessibilityModalLabel: string;
    heading: string;
    onDismiss: () => void;
    type?: "default" | "warning" | "error" | undefined;
    primaryAction: ModalAlertActionDataType;
    secondaryAction?: ModalAlertActionDataType | undefined;
}

/**
 * Module Props Interface
 * https://gestalt.netlify.app/Module
 */
export interface ModuleProps {
    id: string;
    badge?: BadgeObject | undefined;
    icon?: Icons | undefined;
    iconAccessibilityLabel?: string | undefined;
    iconButton?: React.ReactElement<typeof IconButton> | undefined;
    title?: string | undefined;
    type?: "error" | "info" | undefined;
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
        iconButton?: React.ReactElement<typeof IconButton> | undefined;
        summary?: ReadonlyArray<string> | undefined;
        type?: "info" | "error" | undefined;
        iconAccessibilityLabel?: string | undefined;
        children?: React.ReactNode | undefined;
        badge?: BadgeObject | undefined;
    }>;
    expandedIndex?: number | null | undefined;
    onExpandedChange?: ((expandedIndex: number | null) => void) | undefined;
}

/**
 * NumberField Props Interface
 * https://gestalt.netlify.app/numberfield
 */
export interface NumberFieldProps {
    /**
     * A unique identifier for the input
     */
    id: string;
    /**
     * Callback triggered when the value of the input changes, whether by keyboard entry or the input's arrows.
     */
    onChange: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: number | undefined }) => void;
    /**
     * Indicate if autocomplete should be available to the input.
     */
    autoComplete?: "on" | "off" | undefined;
    /**
     * Indicate if the input is disabled
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     *  Optionally specify the action label to present for the enter key on virtual keyboards.
     */
    enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
    /**
     * For most cases, pass a string with a helpful error message (be sure to localize!).
     * In certain instances it can be useful to make some text clickable; to suppor this you may instead pass a React.Node to wrap text in Link or TapArea.
     */
    errorMessage?: React.ReactNode | undefined;
    /**
     * More information about how to complete the form field
     */
    helperText?: string | undefined;
    /**
     * The label for the input. Be sure to localize the text.
     */
    label?: string | undefined;
    /**
     * The upper bound of valid input, inclusive.
     */
    max?: number | undefined;
    /**
     * The lower bound of valid input, inclusive.
     */
    min?: number | undefined;
    /**
     * An unique name for the input
     */
    name?: string | undefined;
    /**
     * Callback triggered when the user blurs the input.
     */
    onBlur?: ((args: { event: React.FocusEvent<HTMLInputElement>; value: number | undefined }) => void) | undefined;
    /**
     * Callback triggered when the user focuses the input.
     */
    onFocus?: ((args: { event: React.FocusEvent<HTMLInputElement>; value: number | undefined }) => void) | undefined;
    /**
     * Callback triggered when the user presses any key while the input is focused.
     */
    onKeyDown?:
        | ((args: { event: React.KeyboardEvent<HTMLInputElement>; value: number | undefined }) => void)
        | undefined;
    /**
     * Placeholder text shown when the user has not yes input a value.
     */
    placeholder?: string | undefined;
    /**
     * md: 40px, lg: 48px
     *
     * @default "md"
     */
    size?: "md" | "lg" | undefined;
    /**
     * Indicates the amount the value will increase or decrease when using the input's arrows.
     */
    step?: number | undefined;
    /**
     * The current value of the input.
     */
    value?: number | undefined;
}

/**
 * ColorSchemeProvider Props Interface
 * https://gestalt.netlify.app/OnLinkNavigationProvider
 */
export interface OnLinkNavigationProviderProps {
    onNavigation?: OnNavigationType | undefined;
}

export interface PageHeaderBadge {
    text: string;
    tooltipText?: string | undefined;
}

export interface PageHeaderHelperIconButton {
    accessibilityLabel?: string | undefined;
    accessibilityControls?: string | undefined;
    accessibilityExpanded?: boolean | undefined;
    onClick: (args: {
        event:
            | React.MouseEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLButtonElement>;
        dangerouslyDisableOnNavigation: () => void;
    }) => void;
}
export interface PageHeaderAction {
    component?:
        | React.ReactElement<typeof Button | typeof IconButton | typeof Link | typeof Tooltip | typeof Text>
        | undefined;
    dropdownItems?:
        | ReadonlyArray<React.ReactElement<DropdownItemProps | DropdownLinkProps, typeof Dropdown>>
        | undefined;
}

/**
 * PageHeader Props Interface
 * https://gestalt.netlify.app/PageHeader
 */
export interface PageHeaderProps {
    title: string;
    badge?: PageHeaderBadge | undefined;
    borderStyle?: "sm" | "none" | undefined;
    helperIconButton?: PageHeaderHelperIconButton | undefined;
    helperLink?: {
        accessibilityLabel: string;
        text: string;
        href: string;
        onClick?: (args: {
            event: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>;
            dangerouslyDisableOnNavigation: () => void;
        }) => void | undefined;
    };
    items?: ReadonlyArray<React.ReactNode> | undefined;
    dropdownAccessibilityLabel?: string | undefined;
    maxWidth?: number | string | undefined;
    primaryAction?: PageHeaderAction | undefined;
    secondaryAction?: PageHeaderAction | undefined;
    subtext?: string | undefined;
    thumbnail?: React.ReactElement<typeof Image>;
}

/**
 * Pog Props Interface
 * https://gestalt.netlify.app/Pog
 */
export interface PogProps {
    accessibilityLabel?: string | undefined;
    active?: boolean | undefined;
    bgColor?: "transparent" | "darkGray" | "transparentDarkGray" | "gray" | "lightGray" | "white" | "red" | undefined;
    dangerouslySetSvgPath?: { __path: string } | undefined;
    focused?: boolean | undefined;
    hovered?: boolean | undefined;
    icon?: Icons | undefined;
    iconColor?: "gray" | "darkGray" | "red" | "white" | "brandPrimary" | undefined;
    padding?: 1 | 2 | 3 | 4 | 5 | undefined;
    selected?: boolean | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
}

/**
 * Popover Props Interface
 * https://gestalt.netlify.app/Popover
 */
export interface PopoverProps {
    anchor: HTMLElement | null | undefined; // ideally a HTMLAnchorElement
    onDismiss: () => void;
    children?: React.ReactNode | undefined;
    color?: "blue" | "orange" | "red" | "white" | "darkGray" | undefined;
    id?: string | undefined;
    idealDirection?: FourDirections | undefined;
    positionRelativeToAnchor?: boolean | undefined;
    shouldFocus?: boolean | undefined;
    showCaret?: boolean | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "flexible" | number | undefined;
    /**
     *  This property can be set when `ScrollBoundaryContainer` is set to `overflow="visible"`
     *  - but therefore limits the height of the Popover-based component. Some cases require
     */
    __dangerouslySetMaxHeight?: "30vh";
    onKeyDown?: AbstractEventHandler<React.KeyboardEvent<HTMLElement>>;
    accessibilityDismissButtonLabel?: string | undefined;
    showDismissButton?: boolean | undefined;
}

/**
 * Popover Educational Interface
 * https://gestalt.netlify.app/popovereducational
 */
export interface PopoverEducationalProps {
    accessibilityLabel: string;
    anchor: HTMLElement | null | undefined; // ideally a HTMLAnchorElement
    onDismiss: () => void;
    children?: React.ReactNode | undefined;
    id?: string | undefined;
    idealDirection?: FourDirections | undefined;
    message?: React.ReactElement<typeof Text> | undefined;
    primaryAction?:
        | {
            accessibilityLabel?: string | undefined;
            href?: string | undefined;
            text: string | undefined;
            onClick?:
                | AbstractEventHandler<
                    | React.MouseEvent<HTMLButtonElement>
                    | React.MouseEvent<HTMLAnchorElement>
                    | React.KeyboardEvent<HTMLAnchorElement>
                    | React.KeyboardEvent<HTMLButtonElement>,
                    {
                        dangerouslyDisableOnNavigation: () => void;
                    }
                >
                | undefined;
            rel?: "none" | "nofollow" | undefined;
            target?: null | "self" | "blank" | undefined;
        }
        | undefined;
    role?: "dialog" | "tooltip" | undefined;
    shouldFocus?: boolean | undefined;
    zIndex?: Indexable | undefined;
    size?: "sm" | "flexible" | undefined;
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
    value: string;
    checked?: boolean | undefined;
    helperText?: string | undefined;
    disabled?: boolean | undefined;
    image?: React.ReactNode | undefined;
    label?: string | undefined;
    name?: string | undefined;
    size?: "sm" | "md" | undefined;
}

/**
 * RadioGroup Props Interface
 * https://gestalt.netlify.app/RadioGroup
 */
export interface RadioGroupProps {
    id: string;
    children: React.ReactNode;
    legend: string;
    direction?: "column" | "row" | undefined;
    errorMessage?: string | undefined;
    legendDisplay?: "visible" | "hidden" | undefined;
}

/**
 * Row Props Interface
 * https://gestalt.netlify.app/Row
 */
export interface RowProps {
    alignContent?: "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch" | undefined;
    alignItems?: "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    children?: React.ReactNode | undefined;
    fit?: boolean | undefined;
    flex?: "grow" | "shrink" | "none" | undefined;
    gap?: UnsignedUpTo12 | undefined;
    height?: number | string | undefined;
    justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly" | undefined;
    maxHeight?: number | string | undefined;
    maxWidth?: number | string | undefined;
    minHeight?: number | string | undefined;
    minWidth?: number | string | undefined;
    width?: number | string | undefined;
    wrap?: boolean | undefined;
}

/**
 * ScrollBoundaryContainer Props Interface
 * https://gestalt.netlify.app/ScrollBoundaryContainer
 */
export interface ScrollBoundaryContainerProps {
    children: React.ReactNode;
    height?: number | string | undefined;
    overflow?: "scroll" | "scrollX" | "scrollY" | "auto" | "visible" | undefined;
}

/**
 * SearchField Props Interface
 * https://gestalt.netlify.app/SearchField
 */
export interface SearchFieldProps {
    accessibilityLabel: string;
    accessibilityClearButtonLabel?: string;
    id: string;
    autoComplete?: "on" | "off" | "username" | "name" | undefined;
    errorMessage?: string | undefined;
    onChange: (args: { value: string; syntheticEvent: React.SyntheticEvent<HTMLInputElement> }) => void;
    onBlur?: ((args: { event: React.SyntheticEvent<HTMLInputElement> }) => void) | undefined;
    onFocus?: ((args: { value: string; syntheticEvent: React.SyntheticEvent<HTMLInputElement> }) => void) | undefined;
    onKeyDown?: ((args: { event: React.KeyboardEvent<HTMLInputElement>; value: string }) => void) | undefined;
    placeholder?: string | undefined;
    size?: "md" | "lg" | undefined;
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
}

/**
 * SelectList Props Interface
 * https://gestalt.netlify.app/SelectList
 */
export interface SelectListProps {
    children: React.ReactNode;
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLElement>; value: string }) => void;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    helperText?: string | undefined;
    label?: string | undefined;
    labelDisplay?: "visible" | "hidden";
    name?: string | undefined;
    placeholder?: string | undefined;
    size?: "md" | "lg" | undefined;
    value?: string | undefined;
}

/**
 * SelectList Options Props Interface
 * https://gestalt.pinterest.systems/web/selectlist#SelectList.OptionProps
 */
export interface SelectListOptionProps {
    label: string;
    value: string;
    disabled?: boolean | undefined;
}

/**
 * SelectList Group Props Interface
 * https://gestalt.pinterest.systems/web/selectlist#SelectList.GroupProps
 */
export interface SelectListGroupProps {
    children: React.ReactNode;
    label: string;
    disabled?: boolean | undefined;
}

/**
 * SideNavigation Props Interface
 * https://gestalt.netlify.app/SideNavigation
 */
export interface SideNaviationProps {
    /**
     * String that clients such as VoiceOver will read to describe the element.
     */
    accessibilityLabel: string;
    /**
     * The content shown in SideNavigation.
     * See [subcomponents](https://gestalt.pinterest.systems/sidenavigation#Subcomponents).
     */
    children: React.ReactNode;
    /**
     * Content to display at the bottom of SideNavigation.
     * Open slot available to display other functionality required in the page.
     * See the [Footer variant](https://gestalt.pinterest.systems/sidenavigation#Header) to learn more.
     */
    footer?: React.ReactNode | undefined;
    /**
     * Content to display at the top of SideNavigation.
     * Open slot used for controlling the display of navigation items.
     * See the [Header variant](https://gestalt.pinterest.systems/sidenavigation#Header) to learn more.
     */
    header?: React.ReactNode | undefined;
    /**
     * Displays a border in SideNavigation.
     * See the [Border](https://gestalt.pinterest.systems/sidenavigation#Border) variant for more info.
     */
    showBorder?: boolean | undefined;
    title?: string | undefined;
    dismissButton?: { accessibilityLabel?: string; onDismiss: () => void } | undefined;
}

export interface SideNavigationSectionProps {
    /**
     * Any [SideNavigation.TopItem](https://gestalt.pinterest.systems/sidenavigation#SideNavigation.TopItem) to be rendered
     */
    children: React.ReactNode;
    /**
     * Label for the section. See the [Sections](https://gestalt.pinterest.systems/sidenavigation#Sections) variant for more info.
     */
    label: string;
}

export interface SideNavigationTopItemProps {
    /**
     * When set to 'page' or 'section', it displays the item in "active" state.
     * See the [Accessibility](https://gestalt.pinterest.systems/SideNavigation#Accessibility) guidelines to learn more.
     */
    active?: "page" | "section" | undefined;
    /**
     * When supplied, will display a
     * [Badge](https://gestalt.pinterest.systems/badge) next to the item's label.
     * See the [Badges](https://gestalt.pinterest.systems/SideNavigation#Badge) variant to learn more.
     */
    badge?:
        | {
            text: string;
            type?: "info" | "error" | "warning" | "success" | "neutral" | undefined;
        }
        | undefined;
    /**
     * When supplied, will display a counter. See the [Counter](https://gestalt.pinterest.systems/SideNavigation#Counter) variant to learn more.
     */
    counter?: { number: string; accessibilityLabel: string } | undefined;
    /**
     * Directs users to the url when item is selected.
     */
    href: string;
    /**
     * When supplied, will display Icon. See the [Icon](https://gestalt.pinterest.systems/SideNavigation#Icon) variant to learn more.
     */
    icon?: Icons | { __path: string };
    /**
     *  When supplied, will display a notification dot. See the [Notification](https://gestalt.pinterest.systems/SideNavigation#Notification) variant to learn more.
     */
    notificationAccessibilityLabel?: string;
    /**
     * Callback when the user selects an item using the mouse or keyboard.
     */
    onClick?:
        | AbstractEventHandler<
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLButtonElement>,
            { dangerouslyDisableOnNavigation?: (() => void) | undefined }
        >
        | undefined;

    /**
     * Label for the item.
     */
    label: string;
    primaryAction?:
        | {
            icon?: "ellipsis" | "edit" | "trash-can";
            onClick?:
                | AbstractEventHandler<
                    | React.MouseEvent<HTMLButtonElement>
                    | React.MouseEvent<HTMLAnchorElement>
                    | React.KeyboardEvent<HTMLAnchorElement>
                    | React.KeyboardEvent<HTMLButtonElement>
                >
                | undefined;
            tooltip: {
                accessibilityLabel?: string | undefined;
                text: string;
                zIndex?: Indexable | undefined;
            };
            dropdownItems?: Array<React.ReactElement<(typeof Dropdown)["Item"]>>;
        }
        | undefined;
}

export interface SideNavigationNestedItemProps {
    /**
     * When set to 'page' or 'section', it displays the item in "active" state. See the [Accessibility](https://gestalt.pinterest.systems/SideNavigation#Accessibility) guidelines to learn more.
     */
    active?: "page" | "section" | undefined;
    /**
     * Directs users to the url when item is selected.
     */
    href: string;
    /**
     * Label for the item.
     */
    label: string;
    /**
     * Callback when the user selects an item using the mouse or keyboard.
     */
    onClick?:
        | AbstractEventHandler<
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLButtonElement>,
            { dangerouslyDisableOnNavigation?: (() => void) | undefined }
        >
        | undefined;
}

export interface SideNavigationNestedGroupProps {
    /**
     * When supplied, will display a
     * [Badge](https://gestalt.pinterest.systems/badge) next to the item's label.
     * See the [Badges](https://gestalt.pinterest.systems/SideNavigation#Badge) variant to learn more.
     */
    badge?: BadgeProps | undefined;
    /**
     * Content of the group. See [nested directory](#Nested-directory) variant for more information.
     */
    children: React.ReactNode;
    /**
     * When supplied, will display a counter. See the [Counter](https://gestalt.pinterest.systems/SideNavigation#Counter) variant to learn more.
     */
    counter?: { number: string; accessibilityLabel: string } | undefined;
    /**
     * Nested directories can be static or expandable. See [nested directory](#Nested-directory) variant for more information.
     */
    display?: "expandable" | "static" | undefined;
    /**
     * When supplied, will display Icon. See the [Icon](https://gestalt.pinterest.systems/SideNavigation#Icon) variant to learn more.
     */
    icon?: Icons;
    /**
     *  When supplied, will display a notification dot. See the [Notification](https://gestalt.pinterest.systems/SideNavigation#Notification) variant to learn more.
     */
    notificationAccessibilityLabel?: string | undefined;
    /**
     * Label for the group. See [nested directory](#Nested-directory) variant for more information.
     */
    label: string;

    primaryAction?:
        | {
            icon?: "ellipsis" | "edit" | "trash-can";
            onClick?:
                | AbstractEventHandler<
                    | React.MouseEvent<HTMLButtonElement>
                    | React.MouseEvent<HTMLAnchorElement>
                    | React.KeyboardEvent<HTMLAnchorElement>
                    | React.KeyboardEvent<HTMLButtonElement>
                >
                | undefined;
            tooltip: {
                accessibilityLabel?: string | undefined;
                text: string;
                zIndex?: Indexable | undefined;
            };
            dropdownItems?: Array<React.ReactElement<(typeof Dropdown)["Item"]>>;
        }
        | undefined;
}

export interface SideNavigationNestedGroup {
    /**
     * Content of the group. See [nested directory](#Nested-directory) variant for more information.
     */
    children: React.ReactNode;
    /**
     * Nested directories can be static or expandable. See [nested directory](#Nested-directory) variant for more information.
     */
    display?: "expandable" | "static" | undefined;
    /**
     * Label for the group. See [nested directory](#Nested-directory) variant for more information.
     */
    label: string;
}

/**
 * Sheet Props Interface
 * https://gestalt.netlify.app/Sheet
 */
export type OverlayPanelNodeOrRenderProp =
    | ((prop: { onDismissStart: () => void }) => React.ReactNode)
    | React.ReactNode;
export type OnAnimationEndStateType = "in" | "out";
export interface OverlayPanel {
    accessibilityDismissButtonLabel?: string | undefined;
    accessibilityLabel: string;
    children?: OverlayPanelNodeOrRenderProp | undefined;
    closeOnOutsideClick?: boolean | undefined;
    footer?: OverlayPanelNodeOrRenderProp | undefined;
    heading?: string | undefined;
    onAnimationEnd?: (args: { animationState: OnAnimationEndStateType }) => void;
    dismissConfirmation?: {
        message?: string | undefined;
        subtext?: string | undefined;
        primaryAction?: {
            accessibilityLabel?: string | undefined;
            text?: string | undefined;
            onClick?:
                | AbstractEventHandler<
                    | React.MouseEvent<HTMLButtonElement>
                    | React.MouseEvent<HTMLAnchorElement>
                    | React.KeyboardEvent<HTMLAnchorElement>
                    | React.KeyboardEvent<HTMLButtonElement>
                >
                | undefined;
        };
        secondaryAction?: {
            accessibilityLabel?: string | undefined;
            text?: string | undefined;
            onClick?:
                | AbstractEventHandler<
                    | React.MouseEvent<HTMLButtonElement>
                    | React.MouseEvent<HTMLAnchorElement>
                    | React.KeyboardEvent<HTMLAnchorElement>
                    | React.KeyboardEvent<HTMLButtonElement>
                >
                | undefined;
        };
    };
    onDismiss: () => void;
    size?: "sm" | "md" | "lg" | undefined;
    subHeading?: OverlayPanelNodeOrRenderProp | undefined;
}

/**
 * Slim Banner Props Interface
 * https://gestalt.netlify.app/slimbanner
 */
export interface SlimBannerProps {
    dismissButton?:
        | {
            accessibilityLabel: string;
            onDismiss: () => void;
        }
        | undefined;
    primaryAction?:
        | {
            accessibilityLabel: string;
            disabled?: boolean;
            href?: string;
            label: string;
            onClick?:
                | AbstractEventHandler<
                    | React.MouseEvent<HTMLButtonElement>
                    | React.MouseEvent<HTMLAnchorElement>
                    | React.MouseEvent<HTMLAnchorElement>
                    | React.MouseEvent<HTMLButtonElement>,
                    {
                        rel?: "none" | "nofollow";
                        target?: null | "self" | "blank";
                    }
                >
                | undefined;
        }
        | undefined;

    /**
     * Helper [Link](https://gestalt.pinterest.systems/link) to be placed after the message. See the [helperLink variant](https://gestalt.pinterest.systems/slimbanner#helperLink) to learn more.
     */
    helperLink?: {
        accessibilityLabel: string;
        href: string;
        target?: null | "self" | "blank" | undefined;
        text: string;
        onClick?:
            | AbstractEventHandler<
                React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>,
                { dangerouslyDisableOnNavigation?: (() => void) | undefined }
            >
            | undefined;
    };
    /**
     * Label to describe the status icon’s purpose. See the [Accessibility guidelines](https://gestalt.pinterest.systems/slimbanner#Accessibility) for details on proper usage.
     */
    iconAccessibilityLabel?: string | undefined;
    /**
     * Main content of SlimBanner. Content should be [localized](https://gestalt.pinterest.systems/slimbanner#Localization).
     */
    message: React.ReactElement<typeof Text> | string;
    /**
     * The type of SlimBanner. See the [variants](https://gestalt.pinterest.systems/slimbanner#Variants) to learn more.
     */
    type?:
        | "neutral"
        | "error"
        | "info"
        | "warning"
        | "success"
        | "errorBare"
        | "infoBare"
        | "warningBare"
        | "successBare"
        | "recommendation"
        | undefined;
}

/**
 * Spinner Props Interface
 * https://gestalt.netlify.app/Spinner
 */
export interface SpinnerProps {
    accessibilityLabel: string;
    show: boolean;
    delay?: boolean | undefined;
    size?: "sm" | "md" | undefined;
}

/**
 * Stack Props Interface
 * https://gestalt.netlify.app/Stack
 */
export interface StackProps {
    alignContent?: "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch" | undefined;
    alignItems?: "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch" | undefined;
    children?: React.ReactNode | undefined;
    fit?: boolean | undefined;
    flex?: "grow" | "shrink" | "none" | undefined;
    gap?: UnsignedUpTo12 | undefined;
    height?: number | string | undefined;
    justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly" | undefined;
    maxHeight?: number | string | undefined;
    maxWidth?: number | string | undefined;
    minHeight?: number | string | undefined;
    minWidth?: number | string | undefined;
    width?: number | string | undefined;
    wrap?: boolean | undefined;
}

/**
 * Status Props Interface
 * https://gestalt.netlify.app/status
 */
export interface StatusProps {
    type: "unstarted" | "inProgress" | "halted" | "ok" | "problem" | "canceled" | "warning";
    accessibilityLabel?: string | undefined;
    subtext?: string | undefined;
    title?: string | undefined;
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
    onChange?: AbstractEventHandler<React.SyntheticEvent<HTMLInputElement>, { value: boolean }> | undefined;
    disabled?: boolean | undefined;
    name?: string | undefined;
    switched?: boolean | undefined;
}

/**
 * Table Props Interface
 * https://gestalt.netlify.app/Table
 */
export interface TableProps {
    accessibilityLabel: string;
    borderStyle?: "sm" | "none" | undefined;
    children?: React.ReactNode | undefined;
    maxHeight?: number | string | undefined;
    stickyColumns?: number | undefined;
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
    sticky?: boolean | undefined;
}

export interface TableHeaderProps {
    children?: React.ReactNode | undefined;
    display?: "tableHeaderGroup" | "visuallyHidden";
    sticky?: boolean | undefined;
}

export interface TableHeaderCellProps extends TableCellProps {
    scope?: "col" | "row" | "colgroup" | "rowgroup";
    colSpan?: number;
    rowSpan?: number;
}

export interface TableRowProps {
    children?: React.ReactNode | undefined;
}

export interface TableRowDrawerProps {
    children: React.ReactElement<TableCellProps> | Array<React.ReactElement<TableCellProps>> | undefined;
    drawerContents: React.ReactNode;
    id: string;
}

export interface TableRowExpandableProps {
    accessibilityCollapseLabel: string;
    accessibilityExpandLabel: string;
    expandedContents: React.ReactNode;
    id: string;
    children?: React.ReactNode | undefined;
    hoverStyle?: "none" | "gray" | undefined;
    onExpand?:
        | AbstractEventHandler<
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLAnchorElement>
            | React.KeyboardEvent<HTMLButtonElement>
        >
        | undefined;
}

export interface TableSortableHeaderCellProps extends TableHeaderCellProps {
    onSortChange: AbstractEventHandler<
        React.MouseEvent<HTMLTableCellElement> | React.KeyboardEvent<HTMLTableCellElement>
    >;
    sortOrder: "asc" | "desc";
    status: "active" | "inactive";
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
        dangerouslyDisableOnNavigation: () => void;
    }) => void;
    tabs: ReadonlyArray<{
        href: string;
        text: React.ReactNode;
        id?: string | undefined;
        indicator?: "dot" | number | undefined;
        ref?: { current?: HTMLElement | undefined } | undefined;
    }>;
    size?: "md" | "lg";
    wrap?: boolean;
    bgColor?: "default" | "transparent";
}

/**
 * Tag Props Interface
 * https://gestalt.netlify.app/Tag
 */
export interface TagProps {
    accessibilityRemoveIconLabel?: string;
    disabled?: boolean | undefined;
    onRemove?: AbstractEventHandler<React.MouseEvent<HTMLButtonElement>> | undefined;
    text: string;
    type?: "default" | "error" | "warning";
}

export type OnTapType = AbstractEventHandler<
    | React.MouseEvent<HTMLDivElement>
    | React.KeyboardEvent<HTMLDivElement>
    | React.MouseEvent<HTMLAnchorElement>
    | React.KeyboardEvent<HTMLAnchorElement>,
    { dangerouslydangerouslyDisableOnNavigation?: (() => void) | undefined }
>;

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
    mouseCursor?: "copy" | "grab" | "grabbing" | "move" | "noDrop" | "pointer" | "zoomIn" | "zoomOut" | undefined;
    onBlur?: AbstractEventHandler<React.FocusEvent<HTMLDivElement | HTMLAnchorElement>> | undefined;
    onFocus?: AbstractEventHandler<React.FocusEvent<HTMLDivElement | HTMLAnchorElement>> | undefined;
    onMouseDown?: AbstractEventHandler<React.MouseEvent<HTMLDivElement | HTMLAnchorElement>> | undefined;
    onMouseEnter?: AbstractEventHandler<React.MouseEvent<HTMLDivElement | HTMLAnchorElement>> | undefined;
    onMouseLeave?: AbstractEventHandler<React.MouseEvent<HTMLDivElement | HTMLAnchorElement>> | undefined;
    onTap?: OnTapType | undefined;
    rel?: "none" | "nofollow" | undefined;
    role?: "button" | "link" | undefined;
    rounding?: "pill" | "circle" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined;
    tabIndex?: -1 | 0 | undefined;
    tapStyle?: "none" | "compress" | undefined;
    target?: null | "self" | "blank" | undefined;
}

/**
 * Text Props Interface
 * https://gestalt.netlify.app/Text
 */
export interface TextProps {
    align?: "start" | "end" | "center" | "forceLeft" | "forceRight" | undefined;
    children?: React.ReactNode | undefined;
    color?:
        | "default"
        | "subtle"
        | "success"
        | "error"
        | "warning"
        | "shopping"
        | "link"
        | "inverse"
        | "light"
        | "dark"
        | undefined;
    inline?: boolean | undefined;
    italic?: boolean | undefined;
    overflow?: "normal" | "breakWord" | "noWrap" | undefined;
    size?: "100" | "200" | "300" | "400" | "500" | "600" | undefined;
    lineClamp?: number;
    underline?: boolean | undefined;
    weight?: "bold" | "normal" | undefined;
    title?: string | undefined;
}

export interface MaxLength {
    characterCount: number;
    errorAccessibilityLabel: string;
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
    onBlur?: ((args: { event: React.FocusEvent<HTMLTextAreaElement>; value: string }) => void) | undefined;
    onFocus?: ((args: { event: React.FocusEvent<HTMLTextAreaElement>; value: string }) => void) | undefined;
    onKeyDown?: ((args: { event: React.KeyboardEvent<HTMLTextAreaElement>; value: string }) => void) | undefined;
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
    maxLength?: MaxLength | undefined;
    value?: string | undefined;
    readonly?: boolean;
    labelDisplay?: "visible" | "hidden" | undefined;
}

/**
 * TextField Props Interface
 * https://gestalt.netlify.app/TextField
 */
export interface TextFieldProps {
    id: string;
    onChange: (args: { event: React.SyntheticEvent<HTMLInputElement>; value: string }) => void;
    autoComplete?: "bday" | "current-password" | "email" | "new-password" | "on" | "off" | "username" | undefined;
    /**
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     *  Optionally specify the action label to present for the enter key on virtual keyboards.
     */
    enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
    errorMessage?: React.ReactNode | undefined;
    /**
     * More information about how to complete the form field
     */
    helperText?: string | undefined;
    maxLength?: MaxLength | undefined;
    label?: string | undefined;
    name?: string | undefined;
    onBlur?: ((args: { event: React.FocusEvent<HTMLInputElement>; value: string }) => void) | undefined;
    onFocus?: ((args: { event: React.FocusEvent<HTMLInputElement>; value: string }) => void) | undefined;
    onKeyDown?: ((args: { event: React.KeyboardEvent<HTMLInputElement>; value: string }) => void) | undefined;
    placeholder?: string | undefined;
    /**
     * md: 40px, lg: 48px
     *
     * @default "md"
     */
    size?: "md" | "lg" | undefined;
    /**
     * List of tags to display in the component
     */
    tags?: ReadonlyArray<React.ReactElement<TagProps, typeof Tag>> | undefined;
    /**
     * @default "text"
     */
    type?: "date" | "email" | "password" | "text" | "url" | "tel" | undefined;
    value?: string | undefined;
    labelDisplay?: "visible" | "hidden" | undefined;
}

/**
 * Toast Props Interface
 * https://gestalt.netlify.app/Toast
 */
export interface ToastProps {
    text: string | React.ReactElement<typeof Text>;
    dissmissButton:
        | {
            accessibilityLabel?: string | undefined;
            onDismiss: () => void;
        }
        | undefined;
    helperLink?:
        | {
            text: string;
            accessibilityLabel: string;
            href: string;
            onClick?: AbstractEventHandler<
                React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
                { dangerouslyDisableOnNavigation: () => void }
            >;
        }
        | undefined;
    primaryAction?: {
        accessibilityLabel: string;
        href?: string;
        label: string;
        onClick?: ButtonProps["onClick"] | undefined;
        rel?: LinkProps["rel"] | undefined;
        size?: ButtonProps["size"] | undefined;
        target?: LinkProps["target"] | undefined;
    };
    thumbnail?:
        | { image: React.ReactElement<typeof Image> }
        | { avatar: React.ReactElement<typeof Avatar> }
        | { icon: React.ReactElement<typeof Icon> }
        | undefined;
    variant?: "default" | "success" | "error" | "progress" | undefined;
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
    accessibilityLabel?: string | undefined;
}

/**
 * Upsell Props Interface
 * https://gestalt.netlify.app/Upsell
 */
export interface UpsellProps {
    children?: React.ReactElement;
    message: string | React.ReactElement<typeof Text>;
    dismissButton?:
        | {
            accessibilityLabel: string;
            onDismiss: () => void;
        }
        | undefined;
    imageData?:
        | {
            component: React.ReactElement<any, typeof Image | typeof Icon>;
            width?: number | undefined;
            mask?:
                | {
                    rounding: "circle" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
                    wash: boolean;
                }
                | undefined;
        }
        | undefined;
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
    backgroundColor?: "black" | "transparent" | undefined;
    captions: string;
    playbackRate?: number | undefined;
    playing?: boolean | undefined;
    preload?: "auto" | "metadata" | "none" | undefined;
    src: string | ReadonlyArray<{ type: "video/m3u8" | "video/mp4" | "video/ogg"; src: string }>;
    volume?: number | undefined;
    children?: Node | undefined;
    controls?: boolean | undefined;
    disableRemotePlayback?: boolean | undefined;
    crossOrigin?: "anonymous" | "use-credentials" | undefined;
    loop?: boolean | undefined;
    objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down" | undefined;
    onDurationChange?:
        | ((args: { event: React.SyntheticEvent<HTMLVideoElement>; duration: number }) => void)
        | undefined;
    onEnded?: AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>> | undefined;
    onFullscreenChange?:
        | AbstractEventHandler<React.SyntheticEvent<HTMLVideoElement>, { fullscreen: boolean }>
        | undefined;
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
    startTime?: number | undefined;
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

export const ActivationCard: React.FunctionComponent<ActivationCardProps>;
export const Avatar: React.FunctionComponent<AvatarProps>;
export const AvatarGroup: React.FunctionComponent<AvatarGroupProps>;
export const AvatarPair: React.FunctionComponent<AvatarPairProps>;
export const Badge: React.FunctionComponent<BadgeProps>;
export const Box: ReactForwardRef<HTMLDivElement, BoxProps>;
export const Button: ReactForwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>;
export const ButtonGroup: React.FunctionComponent<ButtonGroupProps>;
export const Callout: React.FunctionComponent<CalloutProps>;
export const ComboBox: React.FunctionComponent<ComboBoxProps>;
export const Checkbox: ReactForwardRef<HTMLInputElement, CheckboxProps>;
export const Collage: React.FunctionComponent<CollageProps>;
export const ColorSchemeProvider: React.FunctionComponent<React.PropsWithChildren<ColorSchemeProviderProps>>;
export const Column: React.FunctionComponent<ColumnProps>;
export const Container: React.FunctionComponent<ContainerProps>;
export const Datapoint: React.FunctionComponent<DatapointProps>;
export const ScrollBoundaryContainer: React.FunctionComponent<ScrollBoundaryContainerProps>;
export const DeviceTypeProvider: React.FunctionComponent<React.PropsWithChildren<DeviceTypeProviderProps>>;
export const DefaultLabelProvider: React.FunctionComponent<React.PropsWithChildren<DefaultLabelProviderProps>>;
export const Divider: React.FunctionComponent;

export interface DropdownSubComponents {
    Item: React.FC<DropdownItemProps>;
    Link: React.FC<DropdownLinkProps>;
    Section: React.FC<DropdownSectionProps>;
}
export const Dropdown: React.FunctionComponent<DropdownProps> & DropdownSubComponents;
export const Fieldset: React.FunctionComponent<FieldsetProps>;

export interface FlexSubCompnents {
    Item: React.FC<FlexItemProps>;
}
export const Flex: React.FunctionComponent<FlexProps> & FlexSubCompnents;
export const Heading: React.FunctionComponent<HeaderProps>;
export const HelpButton: React.FunctionComponent<HelpButtonProps>;
export const Icon: React.FunctionComponent<IconProps>;
export const IconButton: ReactForwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>;
export const IconButtonFloating: React.FunctionComponent<IconButtonFloatingProps>;
export const Image: React.FunctionComponent<ImageProps>;
export const Label: React.FunctionComponent<LabelProps>;
export const Layer: React.FunctionComponent<LayerProps>;
export const Letterbox: React.FunctionComponent<LetterboxProps>;
export const Link: ReactForwardRef<HTMLAnchorElement, LinkProps>;
export interface ListSubCmoponents {
    Item: React.FunctionComponent<React.PropsWithChildren<ListItemProps>>;
}
export const List: React.FunctionComponent<React.PropsWithChildren<ListProps>> & ListSubCmoponents;
export const Mask: React.FunctionComponent<MaskProps>;
export const Masonry: React.FunctionComponent<MasonryProps>;
export const Modal: ReactForwardRef<HTMLDivElement, ModalProps>;
export const ModalAlert: React.FunctionComponent<React.PropsWithChildren<ModalAlertProps>>;

export interface ModuleSubComponents {
    Expandable: React.FC<ModuleExpandableProps>;
}
export const Module: React.FunctionComponent<React.PropsWithChildren<ModuleProps>> & ModuleSubComponents;
export const NumberField: ReactForwardRef<HTMLInputElement, NumberFieldProps>;
export const OnLinkNavigationProvider: React.FunctionComponent<OnLinkNavigationProviderProps>;
export const PageHeader: React.FunctionComponent<PageHeaderProps>;
export const Pog: React.FunctionComponent<PogProps>;
export const Popover: React.FunctionComponent<PopoverProps>;
export const Popovereducational: React.FunctionComponent<PopoverEducationalProps>;
export const Pulsar: React.FunctionComponent<PulsarProps>;
export const RadioButton: ReactForwardRef<HTMLInputElement, RadioButtonProps>;
export interface RadioGroupSubCompnents {
    RadioButton: typeof RadioButton;
}

export const RadioGroup: React.FunctionComponent<RadioGroupProps> & RadioGroupSubCompnents;
export const Row: React.FunctionComponent<RowProps>;
export const SearchField: ReactForwardRef<HTMLInputElement, SearchFieldProps>;
export const SegmentedControl: React.FunctionComponent<SegmentedControlProps>;

export interface SelectListSubComponents {
    Option: React.FC<SelectListOptionProps>;
    Group: React.FC<SelectListGroupProps>;
}
export const SelectList: React.FunctionComponent<SelectListProps> & SelectListSubComponents;

export interface SideNavigationSubcomponents {
    Section: React.FC<SideNavigationSectionProps>;
    TopItem: React.FC<SideNavigationTopItemProps>;
    NestedItem: React.FC<SideNavigationNestedItemProps>;
    Group: React.FC<SideNavigationNestedGroupProps>;
    NestedGroup: React.FC<SideNavigationNestedGroupProps>;
}
export const SideNavigation: React.FunctionComponent<SideNaviationProps> & SideNavigationSubcomponents;

export const OverlayPanel: ReactForwardRef<HTMLDivElement, OverlayPanel>;
export const SlimBanner: React.FunctionComponent<SlimBannerProps>;
export const Spinner: React.FunctionComponent<SpinnerProps>;
export const Stack: React.FunctionComponent<StackProps>;
export const Status: React.FunctionComponent<StatusProps>;
export const Sticky: React.FunctionComponent<StickyProps>;
export const Switch: React.FunctionComponent<SwitchProps>;
export interface TableSubCompnents {
    Body: React.FC<TableBodyProps>;
    Cell: React.FC<TableCellProps>;
    Footer: React.FC<TableFooterProps>;
    Header: React.FC<TableHeaderProps>;
    HeaderCell: React.FC<TableHeaderCellProps>;
    Row: React.FC<TableRowProps>;
    RowExpandable: React.FC<TableRowExpandableProps>;
    SortableHeaderCell: React.FC<TableSortableHeaderCellProps>;
    RowDrawer: React.FC<TableRowDrawerProps>;
}
export const Table: React.FunctionComponent<TableProps> & TableSubCompnents;
export const Tabs: React.FunctionComponent<TabsProps>;
export const Tag: React.FunctionComponent<TagProps>;
export const TapArea: ReactForwardRef<HTMLButtonElement | HTMLAnchorElement, TapAreaProps>;
export const Text: ReactForwardRef<HTMLDivElement | HTMLSpanElement, TextProps>;
export const TextArea: ReactForwardRef<HTMLTextAreaElement, TextAreaProps>;
export const TextField: ReactForwardRef<HTMLInputElement, TextFieldProps>;
export const Toast: React.FunctionComponent<ToastProps>;
export const Tooltip: React.FunctionComponent<TooltipProps>;
export interface UpsellSubCompnents {
    Form: React.FC<UpsellFormProps>;
}
export const Upsell: React.FunctionComponent<UpsellProps> & UpsellSubCompnents;
export const Video: React.FunctionComponent<VideoProps>;
export const WashAnimated: React.FunctionComponent<WashAnimatedProps>;

export function useReducedMotion(): boolean;
export function useFocusVisible(): { isFocusVisible: boolean };
