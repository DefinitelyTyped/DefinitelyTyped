import * as React from "react";

// Things to work on
// - add better typing than unknown for `children` render functions.
//      - Need to inspect the render function signature and look into the related react context object
// - hook methods are exported, but seem to be mostly for internal usage. For now will just expose
export {};

export const colorStyle: { dark: ThemeColorStyle; light: ThemeColorStyle };
export function Accordion(props: AccordionProps): JSX.Element;
export function AccordionBody(props: TonicProps): JSX.Element;
export function AccordionCollapse(props: TonicProps): JSX.Element;
export function AccordionHeader(props: AccordionHeaderProps): JSX.Element;
export function AccordionItem(props: AccordionItemProps): JSX.Element;
export function AccordionToggle(props: AccordionToggleProps): JSX.Element;
export function AccordionToggleIcon(props: AccordionToggleIconProps): JSX.Element;
export function Alert(props: AlertProps): JSX.Element;
export function AlertCloseButton(props: ButtonProps): JSX.Element;
export function AnimatePresence(): any;
export function Badge(props: BadgeProps): JSX.Element;
export function Box(props: TonicProps): JSX.Element;
export function Button(props: ButtonProps): JSX.Element;
export function ButtonBase(props: ButtonProps): JSX.Element;
export function ButtonGroup(props: ButtonGroupProps): JSX.Element;
export function ButtonLink(props: ButtonLinkProps): JSX.Element;
export function Checkbox(props: CheckboxProps): JSX.Element;
export function CheckboxGroup(props: CheckboxGroupProps<Array<string | number | undefined>>): JSX.Element;
export function Collapse(props: TransitionProps): JSX.Element;
export function ControlBox(props: ControlBoxProps): JSX.Element;
export function DarkMode(props: React.PropsWithChildren<{}>): JSX.Element;
export function Divider(props: DividerProps): JSX.Element;
export function Drawer(props: DrawerProps): JSX.Element;
export function DrawerBody(props: TonicProps): JSX.Element;
export function DrawerCloseButton(props: ButtonProps): JSX.Element;
export function DrawerContent(props: DrawerContentProps): JSX.Element;
export function DrawerFooter(props: TonicProps): JSX.Element;
export function DrawerHeader(props: TonicProps): JSX.Element;
export function DrawerOverlay(props: DrawerOverlayProps): JSX.Element;
export function Fade(props: TransitionProps): JSX.Element;
export function Flex(props: FlexProps): JSX.Element;
export function Grid(props: GridProps): JSX.Element;
export function Grow(props: TransitionProps): JSX.Element;
export function Icon(props: IconProps): JSX.Element;
export function Image(props: ImageProps): JSX.Element;
export function Input(props: InputProps): JSX.Element;
export function InputAdornment(props: TonicProps): JSX.Element;
export function InputBase(props: InputProps): JSX.Element;
export function InputControl(props: InputControlProps): JSX.Element;
export function InputGroup(props: InputGroupProps): JSX.Element;
export function InputGroupAddon(props: InputGroupAddonProps): JSX.Element;
export function InputGroupAppend(props: TonicProps): JSX.Element;
export function InputGroupPrepend(props: TonicProps): JSX.Element;
export function LightMode(props: React.PropsWithChildren<{}>): JSX.Element;
export function LinearProgress(props: LinearProgressProps): JSX.Element;
export function Link(props: LinkProps): JSX.Element;
export function LinkButton(props: ButtonProps): JSX.Element;
export function Menu(props: MenuProps): JSX.Element;
export function MenuButton(props: ButtonProps): JSX.Element;
export function MenuContent(props: MenuContentProps): JSX.Element;
export function MenuDivider(props: TonicProps): JSX.Element;
export function MenuGroup(props: MenuGroupProps): JSX.Element;
export function MenuItem(props: MenuItemProps): JSX.Element;
export function MenuList(props: TonicProps): JSX.Element;
export function MenuToggle(props: MenuToggleProps): JSX.Element;
export function MenuToggleIcon(props: MenuToggleIconProps): JSX.Element;
export function Modal(props: ModalProps): JSX.Element;
export function ModalBody(props: TonicProps): JSX.Element;
export function ModalCloseButton(props: ButtonProps): JSX.Element;
export function ModalContent(props: ModalContentProps): JSX.Element;
export function ModalFooter(props: TonicProps): JSX.Element;
export function ModalHeader(props: TonicProps): JSX.Element;
export function ModalOverlay(props: ModalOverlayProps): JSX.Element;
export function Option(props: React.OptionHTMLAttributes<HTMLOptionElement>): JSX.Element;
export function OptionGroup(props: TonicProps): JSX.Element;
export function Pagination(props: PaginationProps): JSX.Element;
export function PaginationItem(props: PaginationItemProps): JSX.Element;
export function Popover(props: PopoverProps): JSX.Element;
export function PopoverBody(props: TonicProps): JSX.Element;
export function PopoverContent(props: PopoverContentProps): JSX.Element;
export function PopoverFooter(props: TonicProps): JSX.Element;
export function PopoverHeader(props: TonicProps): JSX.Element;
export function PopoverTrigger(props: PopoverTriggerProps): JSX.Element;
export function Portal(props: PortalProps): JSX.Element;
export function PortalManager(props: React.PropsWithChildren<{}>): JSX.Element;
export function Radio(props: InputProps): JSX.Element;
export function RadioGroup(props: RadioGroupProps<string | number | undefined>): JSX.Element;
export function SVGIcon(props: TonicProps): JSX.Element;
export function Scale(props: TransitionScaleProps): JSX.Element;
export function Scrollbar(props: ScrollbarProps): JSX.Element;
export function SearchInput(props: SearchInputProps): JSX.Element;
export function Select(props: SelectProps): JSX.Element;
export function Skeleton(props: SkeletonProps): JSX.Element;
export function Slide(props: TransitionSlideProps): JSX.Element;
export function Space(props: TonicProps): JSX.Element;
export function Spinner(props: SpinnerProps): JSX.Element;
export function Stack(props: StackProps): JSX.Element;
export function Submenu(props: SubmenuProps): JSX.Element;
export function SubmenuList(props: TonicProps): JSX.Element;
export function SubmenuToggle(props: SubmenuToggleProps): JSX.Element;
export function Switch(props: CheckboxProps): JSX.Element;
export function Tab(props: TabProps<string | number | undefined>): JSX.Element;
export function TabList(props: TonicProps): JSX.Element;
export function TabPanel(props: TabPanelProps<number | string | undefined>): JSX.Element;
export function TabPanels(props: TonicProps): JSX.Element;
export function Table(props: TableProps): JSX.Element;
export function TableBody(props: TonicProps): JSX.Element;
export function TableCell(props: TonicProps): JSX.Element;
export function TableHeader(props: TonicProps): JSX.Element;
export function TableHeaderCell(props: TonicProps): JSX.Element;
export function TableHeaderRow(props: TonicProps): JSX.Element;
export function TableRow(props: TonicProps): JSX.Element;
export function Tabs(props: TabsProps<string | number | undefined>): JSX.Element;
export function Tag(props: TagProps): JSX.Element;
export function TagCloseButton(props: ButtonProps): JSX.Element;
export function Text(props: TextProps): JSX.Element;
export function TextLabel(props: TextLabelProps): JSX.Element;
export function Textarea(props: TextareaProps): JSX.Element;
export const theme: TonicProviderTheme;
export function Toast(props: ToastProps): JSX.Element;
export function ToastCloseButton(props: ButtonProps): JSX.Element;
export function ToastController(props: ToastControllerProps): JSX.Element;
export function ToastProvider(props: ToastProviderProps): JSX.Element;
export function ToastTransition(props: ToastTransitionProps): JSX.Element;
export function TonicProvider(props: React.PropsWithChildren<TonicProviderProps>): JSX.Element;
export function Tooltip(props: TooltipProps): JSX.Element;
export function Truncate(prop: TonicProps): JSX.Element;
export function VisuallyHidden(props: TonicProps): JSX.Element;
export function Zoom(props: TransitionProps): JSX.Element;
export const useAccordion: any;
export const useAccordionItem: any;
export const useAnimatePresence: any;
export const useButtonGroup: any;
export const useCheckboxGroup: any;
export function useColorMode(): [colorMode: ThemeColorModes, setColorMode: React.Dispatch<ThemeColorModes>];
export function useColorStyle<ThemeColorStyle>(config: {
    colorMode: ThemeColorModes;
}): [colorStyle: ThemeColorStyle, setColorStyle: React.Dispatch<ThemeColorStyle>];
export function useDrawer(): any;
export function useInputGroup(): any;
export function useMenu(): any;
export function useModal(): any;
export function usePagination(): any;
export function usePopover(): any;
export function usePortalManager(): PortalObject;
export function useRadioGroup(): any;
export function useSubmenu(): any;
export function useTabs(): any;
export function useTheme(): any;
export function useToast(): any;

export type Breakpoints = "sm" | "md" | "lg" | "xl" | "2xl" | "_";
type ThemeColorModes = "light" | "dark";

interface AccordionItemContext {
    bodyId: string;
    disabled?: boolean;
    headerId: string;
    isExpanded?: boolean;
    onToggle: () => void;
    variant?: string;
}

export interface AccordionProps extends Omit<TonicProps, "children"> {
    children: React.ReactNode | ((context: unknown) => React.ReactNode);
}

export interface AccordionHeaderProps extends TonicProps {
    disabled?: boolean;
}

export interface AccordionToggleProps extends TonicProps {
    disabled?: boolean;
}

export interface AccordionToggleIconProps extends Omit<TonicProps, "children"> {
    appear?: boolean;
    children:
        | React.ReactNode
        | ((state: unknown, props: { ref: any; style: _ExtendedCSSProperties }) => React.ReactNode);
    disabled?: boolean;
    easing?: string | { enter?: string; exit?: string };
    in?: boolean;
    mountOnEnter?: boolean;
    timeout?: number | { appear?: number; enter?: number; exit?: number };
    unmountOnExit?: boolean;
}

export interface AccordionItemProps extends Omit<TonicProps, "children"> {
    children?: React.ReactNode | ((context: AccordionItemContext) => React.ReactNode);
    disabled?: boolean;
    isExpanded?: boolean;
    defaultIsExpanded?: boolean;
    onToggle?: () => void;
}

export interface AlertProps extends TonicProps {
    severity: "warning" | "error" | "success" | "info" | undefined;
    variant?: "solid" | "outline";
    icon?: string | React.ReactNode | false;
    isClosable?: boolean;
    onClose?: (evt?: React.MouseEvent<HTMLElement>) => void;
}

export interface BadgeProps extends TonicProps {
    badgeContent?: React.ReactNode;
    isInvisible?: boolean;
    placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    variant?: "solid" | "dot";
}

export interface ButtonProps extends TonicHTMLButtonProps {
    disabled?: boolean;
    selected?: boolean;
    size?: "sm" | "md" | "lg" | number;
    variant?: "emphasis" | "primary" | "default" | "secondary" | "ghost";
}

export interface ButtonGroupProps extends Omit<TonicProps, "children"> {
    children: React.ReactNode | ((context: unknown) => React.ReactNode);
    orientation?: "horizontal" | "vertical";
    size?: "sm" | "md" | "lg" | number;
    variant?: "emphasis" | "primary" | "default" | "secondary" | "ghost";
}

export interface ButtonLinkProps extends ButtonProps {
    href?: string;
}

export interface CheckboxProps extends TonicHTMLInputProps<HTMLInputElement> {
    children?: React.ReactNode;
    variantColor?: string;
    indeterminate?: boolean;
}

export interface CheckboxGroupProps<T extends Array<string | number | undefined>>
    extends Omit<TonicProps, "onChange" | "children">
{
    children: React.ReactNode | ((context: unknown) => React.ReactNode);
    defaultValue?: T;
    disabled?: boolean;
    name: string;
    onChange: (value: T) => void;
    size?: "sm" | "md" | "lg" | number;
    value?: T;
    variantColor?: string;
}

export interface ControlBoxProps extends TonicProps {
    _child?: _ExtendedCSSProperties;
    _checkedAndActive?: _ExtendedCSSProperties;
    _checkedAndChild?: _ExtendedCSSProperties;
    _checkedAndDisabled?: _ExtendedCSSProperties;
    _checkedAndFocus?: _ExtendedCSSProperties;
    _checkedAndHover?: _ExtendedCSSProperties;
    _indeterminateAndActive?: _ExtendedCSSProperties;
    _indeterminateAndChild?: _ExtendedCSSProperties;
    _indeterminateAndDisabled?: _ExtendedCSSProperties;
    _indeterminateAndFocus?: _ExtendedCSSProperties;
    _indeterminateAndHover?: _ExtendedCSSProperties;
}

export interface DividerProps extends TonicProps {
    orientation?: "horizontal" | "vertical";
    variant?: "solid" | "dashed" | "dotted";
}

export interface DrawerProps extends Omit<TonicProps, "children"> {
    autoFocus?: boolean;
    backdrop?: boolean;
    children: React.ReactNode | ((context: unknown) => React.ReactNode);
    closeOnEsc?: boolean;
    closeOnOutsideClick?: boolean;
    ensureFocus?: boolean;
    finalFocusRef?: React.RefObject<HTMLElement>;
    initialFocusRef?: React.RefObject<HTMLElement>;
    isClosable?: boolean;
    isOpen?: boolean;
    onClose?: () => void;
    placement?: "left" | "right" | "top" | "bottom";
    size: "auto" | "sm" | "md" | "lg" | "full";
}

export interface DrawerContentProps extends TonicProps {
    TransitionComponent?: React.ComponentType;
    TransitionProps?: { appear: boolean };
}

export interface DrawerOverlayProps extends TonicProps {
    TransitionComponent?: React.ComponentType;
    TransitionProps?: { appear: boolean };
}

export interface FlexProps extends TonicProps {
    align?: React.CSSProperties["alignItems"];
    direction?: React.CSSProperties["flexDirection"];
    wrap?: React.CSSProperties["flexWrap"];
    justify?: React.CSSProperties["justifyContent"];
}

export interface GridProps extends TonicProps {
    gap?: React.CSSProperties["gridGap"];
    rowGap?: React.CSSProperties["gridRowGap"];
    columnGap?: React.CSSProperties["gridColumnGap"];
    row?: React.CSSProperties["gridRow"];
    column?: React.CSSProperties["gridColumn"];
    area?: React.CSSProperties["gridArea"];
    autoFlow?: React.CSSProperties["gridAutoFlow"];
    autoRows?: React.CSSProperties["gridAutoRows"];
    autoColumns?: React.CSSProperties["gridAutoColumns"];
    templateRows?: React.CSSProperties["gridTemplateRows"];
    templateColumns?: React.CSSProperties["gridTemplateColumns"];
    templateAreas?: React.CSSProperties["gridTemplateAreas"];
}

export interface IconProps extends TonicProps {
    icon: string;
    size?: string | number;
    spin?: boolean | "cw" | "ccw";
}

export interface InputProps extends TonicHTMLInputProps<HTMLInputElement> {
    inputProps?: InputProps;
    error?: boolean;
    variant?: "outline" | "filled" | "unstyled";
}

export interface InputControlProps extends TonicHTMLInputProps<HTMLInputElement> {
    error?: boolean;
    endAdornment?: React.ReactNode;
    inputComponent?: React.ComponentType;
    inputProps?: InputProps;
    inputRef?: React.RefObject<HTMLElement>;
    size?: "sm" | "md" | "lg" | number;
    variant?: "outline" | "filled" | "unstyled";
    startAdornment?: React.ReactNode;
}

export interface InputGroupProps extends Omit<TonicProps, "children"> {
    children: React.ReactNode | ((context: unknown) => React.ReactNode);
    size?: "sm" | "md" | "lg" | number;
    variant?: "outline" | "filled" | "unstyled";
}

export interface InputGroupAddonProps extends TonicProps {
    size?: "sm" | "md" | "lg" | number;
    variant?: "outline" | "filled" | "unstyled";
}

export interface LinearProgressProps extends Omit<TonicProps, "color"> {
    color?: string | string[];
    min?: number;
    max?: number;
    size?: "xs" | "sm" | "md" | "lg";
    variant?: "indeterminate" | "determinate";
    value: number;
}

export interface LinkProps extends TonicHTMLAnchorProps {
    href?: string;
}

export interface MenuProps extends Omit<TonicProps, "children"> {
    anchorEl?: HTMLElement;
    autoSelect?: boolean;
    children: React.ReactNode | ((context: unknown) => React.ReactNode);
    closeOnBlur?: boolean;
    closeOnSelect?: boolean;
    defaultActiveIndex?: number;
    defaultIsOpen?: boolean;
    isOpen?: boolean;
    offset?: [skidding: number, distance: number];
    onClose?: () => void;
    onOpen?: () => void;
    placement?: "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end";
}

export interface MenuContentProps extends TonicProps {
    PopperComponent: React.ComponentType;
    PopperProps: Record<string, unknown>;
    TransitionComponent?: React.ComponentType;
    TransitionProps?: { appear: boolean };
}

export interface MenuGroupProps extends TonicProps {
    title: string;
}

export interface MenuItemProps extends TonicProps {
    disabled?: boolean;
}

export interface MenuToggleProps extends Omit<TonicProps, "children"> {
    children?:
        | React.ReactNode
        | ((
            state: { getMenuToggleProps: () => _ExtendedCSSProperties },
            props: _ExtendedCSSProperties,
        ) => React.ReactNode);
}

export interface MenuToggleIconProps extends Omit<TonicProps, "children"> {
    appear?: boolean;
    children?: React.ReactNode | ((state: unknown, props: _ExtendedCSSProperties) => React.ReactNode);
    disabled?: boolean;
    easing?: string | { enter?: string; exit?: string };
    in?: boolean;
    mountOnEnter?: boolean;
    timeout?: number | { appear?: number; enter?: number; exit?: number };
    unmountOnExit?: boolean;
}

export interface ModalProps extends Omit<TonicProps, "children"> {
    autoFocus?: boolean;
    children: React.ReactNode | ((context: unknown) => React.ReactNode);
    closeOnEsc?: boolean;
    closeOnOutsideClick?: boolean;
    ensureFocus?: boolean;
    finalFocusRef?: React.RefObject<HTMLElement>;
    initialFocusRef?: React.RefObject<HTMLElement>;
    isClosable?: boolean;
    isOpen?: boolean;
    onClose?: React.MouseEventHandler;
    size?: "auto" | "xs" | "sm" | "md" | "lg" | "xl" | "full" | number;
    scrollBehavior?: "inside" | "outside";
}

export interface ModalContentProps extends TonicProps {
    TransitionComponent?: React.ComponentType;
    TransitionProps?: { appear: boolean };
}

export interface ModalOverlayProps extends TonicProps {
    TransitionComponent?: React.ComponentType;
    TransitionProps?: { appear: boolean };
}

export interface PaginationProps extends Omit<TonicProps, "onChange" | "page"> {
    boundaryCount?: number;
    count?: number;
    defaultPage?: number;
    disabled?: boolean;
    onChange?: (event: React.MouseEvent, page: number) => void;
    page?: number;
    renderItem?: (props: PaginationItemProps) => React.ReactNode;
    siblingCount?: number;
    slot?: { first?: boolean; last?: boolean; previous?: boolean; next?: boolean };
}

export interface PaginationItemProps extends TonicProps {
    type: "start-ellipsis" | "end-ellipsis" | "first-page" | "last-page" | "previous-page" | "next-page";
    slot: { previous: JSX.Element; next: JSX.Element };
}

export interface PopoverProps extends Omit<TonicProps, "children"> {
    arrowAt?: "left" | "right" | "top" | "bottom";
    children: React.ReactNode | ((context: unknown) => React.ReactNode);
    closeOnBlur?: boolean;
    closeOnEsc?: boolean;
    defaultIsOpen?: boolean;
    enterDelay?: number;
    followCursor?: boolean;
    hideArrow?: boolean;
    id?: string;
    initialFocusRef?: React.RefObject<HTMLElement>;
    isOpen?: boolean;
    leaveDelay?: number;
    nextToCursor?: boolean;
    offset?: [skidding: number, distance: number];
    onClose?: () => void;
    onOpen?: () => void;
    placement?:
        | "top"
        | "bottom"
        | "right"
        | "left"
        | "top-start"
        | "top-end"
        | "bottom-start"
        | "bottom-end"
        | "right-start"
        | "right-end"
        | "left-start"
        | "left-end";
    returnFocusOnClose?: boolean;
    trigger?: "click" | "hover";
}

export interface PopoverContentProps extends TonicProps {
    PopperComponent?: React.ComponentType;
    PopperProps?: object;
    PopperArrowComponent?: React.ComponentType;
    PopperArrowProps?: object;
    TransitionComponent?: React.ComponentType;
    TransitionProps?: object;
}

export interface PopoverTriggerProps extends Omit<TonicProps, "children"> {
    children: React.ReactNode | ((args: { getPopoverTriggerProps: () => TonicProps }) => React.ReactNode);
}

export interface PortalObject {
    (
        render: (close: () => void) => React.ReactNode,
        options?: { id?: string; appendToParentPortal?: boolean; containerRef?: Element | null },
    ): string;
    remove(id: string): void;
}

export interface PortalProps {
    appendToParentPortal?: boolean;
    containerRef?: React.RefObject<HTMLElement>;
}

export interface RadioGroupProps<T extends string | number | undefined>
    extends Omit<TonicHTMLInputProps<HTMLInputElement>, "onChange" | "children">
{
    children: React.ReactNode | ((context: unknown) => React.ReactNode);
    defaultValue?: T;
    disabled?: boolean;
    name: string;
    onChange?: (value: T) => void;
    size?: "sm" | "md" | "lg" | number;
    value?: T;
    variantColor?: string;
}

export interface SearchInputProps extends InputProps {
    isLoading?: boolean;
    onClearInput: React.MouseEventHandler;
}

export interface ScrollbarProps extends Omit<TonicProps, "children"> {
    children: React.ReactNode | ((context: unknown) => React.ReactNode);
    minThumbWidth?: number;
    minThumbHeight?: number;
    onUpdate: (args: { values: { scrollTop: number; scrollHeight: number; clientHeight: number } }) => void;
}

export interface SelectProps extends TonicHTMLSelectProps {
    size?: "sm" | "md" | "lg" | number;
    error?: boolean;
    variant?: "outline" | "filled" | "unstyled";
}

export interface SkeletonProps extends TonicProps {
    variant?: "text" | "rect" | "circle";
    animation?: "pulse" | "wave";
}

export interface SpinnerProps extends TonicProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
    lineColor?: string;
    lineWidth?: number;
    trackColor?: string;
    trackWidth?: number;
}

export interface StackProps extends TonicProps {
    align?: React.CSSProperties["alignItems"];
    direction?: React.CSSProperties["flexDirection"];
    gap?: number | string;
    shouldWrapChildren?: boolean;
    spacing?: number | string;
}

export interface SubmenuProps extends TonicProps {
    defaultIsOpen?: boolean;
    isOpen?: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    placement?: "right-start" | "right-end" | "left-start" | "left-end";
}

export interface SubmenuToggleProps extends TonicProps {
    disabled?: boolean;
}

export interface TabProps<T extends string | number | undefined> extends Omit<TonicProps, "children"> {
    children:
        | React.ReactNode
        | ((args: {
            getTabProps: () => TonicProps;
            disabled: boolean;
            index: T;
            isSelected: boolean;
        }) => React.ReactNode);
    disabled?: boolean;
    index?: T;
}

export interface TabPanelProps<T extends number | string | undefined> extends Omit<TonicProps, "children"> {
    children:
        | React.ReactNode
        | ((args: { getTabPanelProps: () => TonicProps; index: number; isSelected: boolean }) => React.ReactNode);
    index?: T;
}

export interface TableProps extends TonicProps {
    size?: "sm" | "md" | "lg" | number;
    variant?: "default" | "outline";
}

export interface TabsProps<T extends number | string | undefined> extends Omit<TonicProps, "children" | "onChange"> {
    children: React.ReactNode | ((context: unknown) => React.ReactNode);
    defaultIndex?: T;
    disabled?: boolean;
    index?: T;
    onChange?: (index: T) => void;
    orientation?: "horizontal" | "vertical";
    variant?: "default" | "filled" | "unstyled";
}

export interface TagProps extends TonicProps {
    disabled?: boolean;
    error?: boolean;
    isClosable?: boolean;
    onClose?: () => void;
    size?: "sm" | "md" | "lg" | number;
    variant?: "solid" | "outline";
}

export interface TextProps extends TonicProps {
    size?: "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | number;
}

export interface TextLabelProps extends TonicProps<HTMLLabelElement> {
    size?: "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs" | number;
}

export interface ToastProps extends Omit<TonicProps, "appearance"> {
    isClosable?: boolean;
    onClose?: () => void;
    appearance?: "none" | "success" | "info" | "warning" | "error";
    icon?: React.ReactNode;
}

export interface ToastControllerProps extends TonicProps {
    duration?: number | null;
    onClose?: () => void;
}

export interface ToastProviderProps extends Omit<TonicProps, "children"> {
    children: React.ReactNode | ((context: unknown) => React.ReactNode);
    container?: any;
    placement?: "top" | "top-right" | "top-left" | "bottom" | "bottom-left" | "bottom-right";
}

export interface ToastTransitionProps extends Omit<TonicProps, "children"> {
    appear?: boolean;
    children:
        | React.ReactNode
        | ((state: "entering" | "entered" | "exiting" | "exited", props: _ExtendedCSSProperties) => React.ReactNode);
    easing?: string | { enter?: string; exit?: string };
    in?: boolean;
    mountOnEnter?: boolean;
    timeout?: number | { appear?: number; enter?: number; exit?: number };
    unmountOnExit?: boolean;
}

export interface TonicProviderProps {
    colorMode?: {
        defaultValue: ThemeColorModes;
        value?: ThemeColorModes;
    };
    colorStyle?: {
        defaultValue: { light: ThemeColorStyle; dark: ThemeColorStyle };
    };
    useCSSBaseline?: boolean;
    theme?: TonicProviderTheme;
}

type TonicProviderTheme = Record<string, unknown>;

export interface TooltipProps extends Omit<TonicProps, "children"> {
    PopperComponent?: React.ComponentType;
    PopperProps?: object;
    PopperArrowComponent?: React.ComponentType;
    PopperArrowProps?: object;
    TransitionComponent?: React.ComponentType;
    TransitionProps?: { appear?: boolean };
    arrowAt?: "left" | "right" | "top" | "bottom";
    children: React.ReactNode | ((context: { getTooltipTriggerProps: () => TonicProps }) => React.ReactNode);
    closeOnClick?: boolean;
    closeOnEsc?: boolean;
    closeOnMouseDown?: boolean;
    defaultIsOpen?: boolean;
    disabled?: boolean;
    enterDelay?: number;
    hideArrow?: boolean;
    isOpen?: boolean;
    label?: React.ReactNode;
    leaveDelay?: number;
    onClose?: () => void;
    onOpen?: () => void;
    placement?:
        | "top"
        | "bottom"
        | "right"
        | "left"
        | "top-start"
        | "top-end"
        | "bottom-start"
        | "bottom-end"
        | "right-start"
        | "right-end"
        | "left-start"
        | "left-end";
    shouldWrapChildren?: boolean;
}

export interface TransitionProps extends Omit<TonicProps, "children"> {
    appear?: boolean;
    children: React.ReactNode | ((state: unknown, props: _ExtendedCSSProperties) => React.ReactNode);
    easing?: string | { enter?: string; exit?: string };
    in?: boolean;
    mountOnEnter?: boolean;
    timeout?: number | { appear?: number; enter?: number; exit?: number };
    unmountOnExit?: boolean;
}

export interface TransitionScaleProps extends TransitionProps {
    initialScale?: number;
}

export interface TransitionSlideProps extends TransitionProps {
    direction?: "up" | "down" | "left" | "right";
}

/**
 * Found by printing the object return from `useColorStyle` hook.
 * These are light mode values. Dark mode will have the same keys, but different values. Kept the light mode strings as a reference
 */
export interface ThemeColorStyle {
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
    };
    color: {
        emphasis: string;
        primary: string;
        secondary: string;
        tertiary: string;
        disabled: string;
        success: string;
        info: string;
        warning: string;
        error: string;
    };
    divider: string;
    text: {
        selection: string;
        highlight: string;
    };
    shadow: {
        thin: string;
        medium: string;
        thick: string;
    };
    severity: {
        critical: string;
        high: string;
        medium: string;
        low: string;
        safe: string;
        info: string;
        unknown: string;
    };
    chart: {
        classic: {
            colors: string[];
        };
    };
}

// Extends CSS properties to remove those that conflict with Tonic and add some shorthands/helpers
type _ExtendedCSSProperties = Omit<React.CSSProperties, "direction" | "scrollBehavior" | "offset"> & {
    tabIndex?: string | number | undefined; // tabIndex is defined in HTMLAttributes as just a number. Redefining to be less annoying to work with

    paddingX?: string | number | undefined;
    paddingY?: string | number | undefined;
    px?: string | number | undefined;
    py?: string | number | undefined;
    p?: React.CSSProperties["padding"];
    pt?: React.CSSProperties["paddingTop"];
    pr?: React.CSSProperties["paddingRight"];
    pb?: React.CSSProperties["paddingBottom"];
    pl?: React.CSSProperties["paddingLeft"];

    marginX?: string | number | undefined;
    marginY?: string | number | undefined;
    mx?: string | number | undefined;
    my?: string | number | undefined;
    m?: React.CSSProperties["margin"];
    mt?: React.CSSProperties["marginTop"];
    mr?: React.CSSProperties["marginRight"];
    mb?: React.CSSProperties["marginBottom"];
    ml?: React.CSSProperties["marginLeft"];

    bg?: React.CSSProperties["background"];
};

/**
 * Tonic components support writing CSS properties directly as props. It also supports assigning an object for responsiveness
 * ex. <Grid columnGap="2x">
 *     or
 * ex. <Grid columnGap={{ _: '20x', lg: '30x', xl: '40x' }}
 */
type _ResponsiveCSSProperties = {
    [K in keyof _ExtendedCSSProperties]:
        | _ExtendedCSSProperties[K]
        | {
            sm?: _ExtendedCSSProperties[K];
            md?: _ExtendedCSSProperties[K];
            lg?: _ExtendedCSSProperties[K];
            xl?: _ExtendedCSSProperties[K];
            "2xl"?: _ExtendedCSSProperties[K];
            _?: _ExtendedCSSProperties[K];
        };
};

/** Helper type that contains all CSS related props that can be augmented with remaining React props like ref/children/etc  */
type _CSSPropsWithHTML<Element, Attributes> =
    & React.RefAttributes<Element>
    & Attributes
    & _ResponsiveCSSProperties
    & {
        as?: string;

        // Protip, avoid using this if it can be handled with regular CSS props
        css?: Record<string, unknown>;

        _active?: _ExtendedCSSProperties;
        _checked?: _ExtendedCSSProperties;
        _selected?: _ExtendedCSSProperties;
        _disabled?: _ExtendedCSSProperties;
        _empty?: _ExtendedCSSProperties;
        _enabled?: _ExtendedCSSProperties;
        _fullscreen?: _ExtendedCSSProperties;
        _focus?: _ExtendedCSSProperties;
        _focusActive?: _ExtendedCSSProperties;
        _focusHover?: _ExtendedCSSProperties;
        _focusWithin?: _ExtendedCSSProperties;
        _focusSelected?: _ExtendedCSSProperties;
        _hover?: _ExtendedCSSProperties;
        _indeterminate?: _ExtendedCSSProperties;
        _valid?: _ExtendedCSSProperties;
        _invalid?: _ExtendedCSSProperties;
        _readOnly?: _ExtendedCSSProperties;
        _visited?: _ExtendedCSSProperties;

        _firstChild?: _ExtendedCSSProperties;
        _firstOfType?: _ExtendedCSSProperties;
        _notFirstOfType?: _ExtendedCSSProperties;
        _lastChild?: _ExtendedCSSProperties;
        _lastOfType?: _ExtendedCSSProperties;
        _nthOfType?: _ExtendedCSSProperties;
        __after?: _ExtendedCSSProperties;
        __backdrop?: _ExtendedCSSProperties;
        __before?: _ExtendedCSSProperties;
        __cue?: _ExtendedCSSProperties;
        __firstLetter?: _ExtendedCSSProperties;
        __firstLine?: _ExtendedCSSProperties;
        __placeholder?: _ExtendedCSSProperties;
        __selection?: _ExtendedCSSProperties;
    };

/// Public interfaces. Combines both HTML attributes and CSS properties
// There are several cases where the HTML attributes are omitted. There are a couple reasons
// 1. The same property exists on both HTMLAttributes and CSSProperties and they aren't compatible. Usually this causes a conflict with responsive CSS property objects.
// 2. The HTML Attribute conflicts with a Tonic component prop (like Tonic component's onChange is sometimes defined differently

export interface ImageProps extends
    _CSSPropsWithHTML<
        HTMLImageElement,
        Omit<
            React.ImgHTMLAttributes<HTMLImageElement>,
            "color" | "translate" | "slot" | "defaultValue" | "height" | "width"
        >
    >
{}

interface TonicHTMLAnchorProps extends
    _CSSPropsWithHTML<
        HTMLAnchorElement,
        Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "tabIndex" | "color" | "translate">
    >
{}

interface TonicHTMLSelectProps extends
    _CSSPropsWithHTML<
        HTMLSelectElement,
        Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "tabIndex" | "color" | "translate" | "size">
    >
{
    size?: "sm" | "md" | "lg" | number;
}

export interface TextareaProps extends
    _CSSPropsWithHTML<
        HTMLTextAreaElement,
        Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "tabIndex" | "color" | "translate">
    >
{
    size?: "sm" | "md" | "lg" | number;
}

interface TonicHTMLInputProps<Element> extends
    _CSSPropsWithHTML<
        Element,
        Omit<
            React.InputHTMLAttributes<Element>,
            "children" | "color" | "defaultValue" | "height" | "size" | "slot" | "tabIndex" | "translate" | "width"
        >
    >
{
    children?: React.ReactNode;
    size?: "sm" | "md" | "lg" | number;
}

interface TonicHTMLButtonProps extends
    _CSSPropsWithHTML<
        HTMLButtonElement,
        Omit<
            React.ButtonHTMLAttributes<HTMLButtonElement>,
            "color" | "tabIndex" | "translate" | "slot" | "defaultValue"
        >
    >
{}

export interface TonicProps<Element = HTMLDivElement> extends
    _CSSPropsWithHTML<
        Element,
        Omit<React.HTMLAttributes<Element>, "color" | "tabIndex" | "translate" | "slot" | "defaultValue">
    >
{}
