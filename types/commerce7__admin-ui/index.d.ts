import type { Moment } from "moment";
import * as React from "react";

export type ComponentOverride = React.ComponentType<any> | string;
export type ButtonSize = "default" | "small";
export type ButtonVariant = "primary" | "secondary" | "text" | "link";
export type ButtonType = "button" | "submit";
export type ButtonMenuVariant = "primary" | "secondary" | "text";
export type FormButtonSize = "small" | "medium" | "large";
export type FormButtonVariant = "button" | "default";
export type InputMode = "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url";
export type InputType = "text" | "number" | "password" | "email" | "color";
export type IconVariant = "default" | "success" | "error" | "text" | "info" | "warning";
export type DisplayIconVariant = "default" | "success" | "warning" | "error" | "tip" | "info";
export type StatusVariant = "default" | "info" | "error" | "warning" | "success" | "tip";

export interface Commerce7AdminUIProps {
    mode?: "light" | "dark" | undefined;
    children?: React.ReactNode | undefined;
}

export class Commerce7AdminUI extends React.Component<Commerce7AdminUIProps> {}

export type IconName =
    | "add"
    | "addCart"
    | "addUser"
    | "adjust"
    | "alignCenter"
    | "alignLeft"
    | "alignRight"
    | "app"
    | "application"
    | "applicationSwitcher"
    | "archive"
    | "arrowDivert"
    | "arrowDown"
    | "arrowLeft"
    | "arrowRight"
    | "arrowSpace"
    | "arrowUp"
    | "availability"
    | "bag"
    | "balloon"
    | "bell"
    | "book"
    | "bounce"
    | "brush"
    | "bundle"
    | "button"
    | "buttonLine"
    | "cake"
    | "calendar"
    | "calenderAdd"
    | "calenderCross"
    | "car"
    | "carrot"
    | "cart"
    | "cash"
    | "cashier"
    | "chartbars"
    | "chat"
    | "check"
    | "checkCircle"
    | "checkIn"
    | "chevronDown"
    | "chevronUp"
    | "city"
    | "clipboardText"
    | "close"
    | "closeCircle"
    | "club"
    | "code"
    | "coin"
    | "combine"
    | "comment"
    | "complianceCheck"
    | "construction"
    | "copy"
    | "customer"
    | "dashboard"
    | "database"
    | "department"
    | "developer"
    | "discount"
    | "document"
    | "documentImage"
    | "dollar"
    | "dolly"
    | "download"
    | "drag"
    | "duplicate"
    | "edit"
    | "ellipsis"
    | "email"
    | "emailOpen"
    | "enter"
    | "euro"
    | "exclamation"
    | "exit"
    | "export"
    | "eye"
    | "eyeCrossed"
    | "fileExport"
    | "fileImport"
    | "filter"
    | "flag"
    | "form"
    | "gift"
    | "giftCard"
    | "gradHat"
    | "group"
    | "hammer"
    | "hand"
    | "heart"
    | "heartFilled"
    | "history"
    | "image"
    | "imagePlaceholder"
    | "import"
    | "infoCircle"
    | "inventory"
    | "language"
    | "launch"
    | "lightBulb"
    | "link"
    | "loading"
    | "location"
    | "locationBottom"
    | "locationPage"
    | "locationTop"
    | "lock"
    | "logOut"
    | "loyalty"
    | "map"
    | "mapMarker"
    | "marketing"
    | "megaAdmin"
    | "menu"
    | "merge"
    | "minus"
    | "moon"
    | "moreActions"
    | "move"
    | "network"
    | "newTab"
    | "note"
    | "notification"
    | "onboarding"
    | "package"
    | "paperPlane"
    | "pauseCircle"
    | "percent"
    | "phone"
    | "platter"
    | "playCircle"
    | "pointer"
    | "pos"
    | "posProfile"
    | "pound"
    | "power"
    | "print"
    | "process"
    | "product"
    | "qr"
    | "questionCircle"
    | "rand"
    | "receipt"
    | "redo"
    | "redoLarge"
    | "reload"
    | "remove"
    | "report"
    | "reservation"
    | "rocket"
    | "screen"
    | "search"
    | "security"
    | "seedling"
    | "send"
    | "setting"
    | "shuffle"
    | "smartphone"
    | "sparkle"
    | "split"
    | "star"
    | "store"
    | "sun"
    | "support"
    | "switchUser"
    | "sync"
    | "table"
    | "tag"
    | "tasting"
    | "textAlignCenter"
    | "textAlignLeft"
    | "textAlignRight"
    | "textBold"
    | "textCase"
    | "textItalic"
    | "textSize"
    | "thumbsDown"
    | "thumbsUp"
    | "ticket"
    | "time"
    | "title"
    | "transfer"
    | "trash"
    | "truck"
    | "undo"
    | "undoLarge"
    | "upload"
    | "user"
    | "users"
    | "video"
    | "wallet"
    | "wand"
    | "warning"
    | "wine"
    | "write";

export const c7Colors: {
    white: string;
    black: string;
    yellow100: string;
    yellow200: string;
    yellow300: string;
    green100: string;
    green200: string;
    green300: string;
    red100: string;
    red200: string;
    red300: string;
    orange100: string;
    orange200: string;
    orange300: string;
    purple100: string;
    purple200: string;
    purple300: string;
    violet100: string;
    violet200: string;
    violet300: string;
    blue100: string;
    blue200: string;
    blue300: string;
    blue400: string;
    blue500: string;
    blue600: string;
    blueberry100: string;
    blueberry200: string;
    blueberry300: string;
    slate100: string;
    slate200: string;
    slate300: string;
    slate400: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray750: string;
    gray800: string;
    gray900: string;
    gray950: string;
};

export interface AlertProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    component?: ComponentOverride | undefined;
    variant?: StatusVariant | undefined;
    size?: ButtonSize | undefined;
    icon?: IconName | string | undefined;
    dataTestId?: string | undefined;
    href?: string | undefined;
    [key: string]: any;
}

export class Alert extends React.Component<AlertProps> {}

export interface AvatarProps {
    className?: string | undefined;
    label?: string | undefined;
    imageSrc?: string | undefined;
    imageAlt?: string | undefined;
    size?: "tiny" | "small" | "default" | "large" | undefined;
    dataTestId?: string | undefined;
}

export class Avatar extends React.Component<AvatarProps> {}

export interface BreadcrumbProps {
    children: React.ReactNode;
    className?: string | undefined;
    onClick?: (() => void) | null | undefined;
    component?: React.ElementType | undefined;
    href?: string | undefined;
    dataTestId?: string | undefined;
}

export class Breadcrumb extends React.Component<BreadcrumbProps> {}

export interface BreadcrumbsProps {
    className?: string | undefined;
    children: React.ReactNode;
    dataTestId?: string | undefined;
}

export class Breadcrumbs extends React.Component<BreadcrumbsProps> {
    static Breadcrumb: typeof Breadcrumb;
}

export interface CardProps {
    variant?: "default" | "white" | undefined;
    className?: string | undefined;
    children: React.ReactNode;
    dataTestId?: string | null | undefined;
}

export class Card extends React.Component<CardProps> {}

export interface ColumnProps {
    children?: React.ReactNode | undefined;
    span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "none" | "auto" | undefined;
}

export class Column extends React.Component<ColumnProps> {}

export interface ColumnsProps {
    children: React.ReactNode;
    justify?: string | undefined;
    align?: string | undefined;
    wrap?: string | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class Columns extends React.Component<ColumnsProps> {
    static Column: typeof Column;
}

export interface InfoCardGridProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class InfoCardGrid extends React.Component<InfoCardGridProps> {}

export interface InfoCardProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
    icon?: IconName | string | undefined;
    label?: React.ReactNode | undefined;
    title?: React.ReactNode | undefined;
    subtitle?: React.ReactNode | undefined;
    variant?: StatusVariant | undefined;
    iconVariant?: StatusVariant | undefined;
    img?: string | undefined;
}

export class InfoCard extends React.Component<InfoCardProps> {
    static InfoCardGrid: typeof InfoCardGrid;
}

export interface LineBreakProps {
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class LineBreak extends React.Component<LineBreakProps> {}

export interface ModalBodyProps {
    children: React.ReactNode;
    className?: string | undefined;
}

export class ModalBody extends React.Component<ModalBodyProps> {}

export interface ModalFooterProps {
    children: React.ReactNode;
    className?: string | undefined;
}

export class ModalFooter extends React.Component<ModalFooterProps> {}

export interface ModalProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    disableBodyScroll?: boolean | undefined;
    onClose?: (() => void) | null | undefined;
    title?: string | undefined;
    visible?: boolean | undefined;
    dataTestId?: string | undefined;
    disableFocusLock?: boolean | undefined;
}

export class Modal extends React.Component<ModalProps> {
    static ModalBody: typeof ModalBody;
    static ModalFooter: typeof ModalFooter;
}

export interface NoRecordsProps {
    title?: string | undefined;
    description?: string | undefined;
    icon?: IconName | string | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
    iconVariant?: Exclude<DisplayIconVariant, "tip"> | undefined;
}

export class NoRecords extends React.Component<NoRecordsProps> {}

export interface PictureSource {
    src?: string | undefined;
    webp?: string | undefined;
    avif?: string | undefined;
}

export interface PictureProps {
    className?: string | undefined;
    dataTestId?: string | undefined;
    height?: number | undefined;
    src?: string | PictureSource | undefined;
    alt: string;
}

export class Picture extends React.Component<PictureProps> {}

export interface ProgressBarContent {
    text?: string | undefined;
    circleColor?: string | undefined;
    progress?: number | undefined;
}

export interface ProgressBarProps {
    progress?: number | undefined;
    className?: string | undefined;
    content?: ProgressBarContent | undefined;
    color?: string | undefined;
    dataTestId?: string | undefined;
}

export class ProgressBar extends React.Component<ProgressBarProps> {}

export interface RegionProps {
    children: React.ReactNode;
    className?: string | undefined;
    borderBottom?: boolean | undefined;
    dataTestId?: string | undefined;
}

export class Region extends React.Component<RegionProps> {}

export interface SpinnerProps {
    label?: string | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class Spinner extends React.Component<SpinnerProps> {}

export interface TagProps {
    className?: string | undefined;
    children?: React.ReactNode | undefined;
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    onDelete?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
    variant?: StatusVariant | undefined;
    startIcon?: IconName | string | undefined;
    endIcon?: IconName | string | undefined;
    dataTestId?: string | undefined;
}

export class Tag extends React.Component<TagProps> {}

export interface ButtonProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
    size?: ButtonSize | undefined;
    startIcon?: IconName | string | undefined;
    endIcon?: IconName | string | undefined;
    type?: ButtonType | undefined;
    variant?: ButtonVariant | undefined;
    dataTestId?: string | undefined;
    formNoValidate?: boolean | undefined;
}

export class Button extends React.Component<ButtonProps> {}

export interface ContextMenuItemProps {
    alt?: string | undefined;
    children: React.ReactNode;
    className?: string | undefined;
    disabled?: boolean | undefined;
    icon?: IconName | string | undefined;
    img?: string | undefined;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    dataTestId?: string | undefined;
}

export class ButtonMenuItem extends React.Component<ContextMenuItemProps> {}

export interface ButtonMenuProps {
    children: React.ReactNode;
    className?: string | undefined;
    disabled?: boolean | undefined;
    label?: string | undefined;
    size?: ButtonSize | undefined;
    variant?: ButtonMenuVariant | undefined;
    dataTestId?: string | undefined;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
}

export class ButtonMenu extends React.Component<ButtonMenuProps> {
    static ButtonMenuItem: typeof ButtonMenuItem;
}

export class ContextMenuItem extends React.Component<ContextMenuItemProps> {}

export interface ContextMenuMoreActionsProps {
    children: React.ReactNode;
    className?: string | undefined;
    label?: string | undefined;
    disabled?: boolean | undefined;
    dataTestId?: string | undefined;
}

export class ContextMenuMoreActions extends React.Component<ContextMenuMoreActionsProps> {}

export interface ContextMenuProps {
    children: React.ReactNode;
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class ContextMenu extends React.Component<ContextMenuProps> {
    static ContextMenuItem: typeof ContextMenuItem;
    static ContextMenuMoreActions: typeof ContextMenuMoreActions;
}

export interface LinkButtonProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    component?: ComponentOverride | undefined;
    disabled?: boolean | undefined;
    download?: boolean | undefined;
    loading?: boolean | undefined;
    href?: string | undefined;
    rel?: string | undefined;
    size?: ButtonSize | undefined;
    startIcon?: IconName | string | undefined;
    endIcon?: IconName | string | undefined;
    target?: string | undefined;
    variant?: ButtonVariant | undefined;
    dataTestId?: string | undefined;
    onClick?: ((event: React.MouseEvent<HTMLAnchorElement>) => void) | undefined;
    [key: string]: any;
}

export class LinkButton extends React.Component<LinkButtonProps> {}

export interface SelectButtonProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    selected?: boolean | undefined;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
    type?: ButtonType | undefined;
    dataTestId?: string | undefined;
    size?: FormButtonSize | undefined;
    icon?: IconName | string | undefined;
    as?: any;
}

export class SelectButton extends React.Component<SelectButtonProps> {}

export interface CardLinkProps {
    className?: string | undefined;
    children: React.ReactNode;
    component?: ComponentOverride | undefined;
    href?: string | undefined;
    icon?: IconName | string | undefined;
    description?: string | undefined;
    label?: string | undefined;
    dataTestId?: string | undefined;
    [key: string]: any;
}

export class CardLink extends React.Component<CardLinkProps> {}

export interface SubNavProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    isOpen?: boolean | undefined;
    dataTestId?: string | undefined;
}

export class SubNav extends React.Component<SubNavProps> {}

export interface NavLinkProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
    icon?: IconName | string | undefined;
    component?: ComponentOverride | undefined;
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    href?: string | undefined;
    activeClassName?: string | undefined;
    [key: string]: any;
}

export class NavLink extends React.Component<NavLinkProps> {}

export interface SubNavLinkProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    component?: ComponentOverride | undefined;
    dataTestId?: string | undefined;
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    href?: string | undefined;
    activeClassName?: string | undefined;
    [key: string]: any;
}

export class SubNavLink extends React.Component<SubNavLinkProps> {}

export interface NavProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    isOpen?: boolean | undefined;
    dataTestId?: string | undefined;
}

export class Nav extends React.Component<NavProps> {
    static SubNav: typeof SubNav;
    static NavLink: typeof NavLink;
    static SubNavLink: typeof SubNavLink;
}

export interface StepProps {
    step?: number | undefined;
    description?: string | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
    component?: ComponentOverride | undefined;
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    href?: string | undefined;
    activeClassName?: string | undefined;
    icon?: IconName | string | undefined;
}

export class Step extends React.Component<StepProps> {}

export interface StepperProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class Stepper extends React.Component<StepperProps> {
    static Step: typeof Step;
}

export interface SubMenuItemProps {
    children?: React.ReactNode | undefined;
    activeClassName?: string | undefined;
    className?: string | undefined;
    component?: ComponentOverride | undefined;
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    href?: string | undefined;
    dataTestId?: string | undefined;
    [key: string]: any;
}

export class SubMenuItem extends React.Component<SubMenuItemProps> {}

export interface SubMenuProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
    borderBottom?: boolean | undefined;
    activeClassName?: string | undefined;
}

export class SubMenu extends React.Component<SubMenuProps> {
    static SubMenuItem: typeof SubMenuItem;
}

export interface TabProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
    component?: ComponentOverride | undefined;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void) | undefined;
    href?: string | undefined;
    activeClassName?: string | undefined;
    [key: string]: any;
}

export class Tab extends React.Component<TabProps> {}

export interface TabBodyProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class TabBody extends React.Component<TabBodyProps> {}

export interface TabsProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class Tabs extends React.Component<TabsProps> {
    static Tab: typeof Tab;
    static TabBody: typeof TabBody;
}

export interface CheckboxProps {
    checked: boolean;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean | undefined;
    value?: string | undefined;
    dataTestId?: string | undefined;
    variant?: FormButtonVariant | undefined;
    size?: FormButtonSize | undefined;
    icon?: IconName | string | undefined;
    children?: React.ReactNode | undefined;
}

export class Checkbox extends React.Component<CheckboxProps> {}

export interface CheckboxGroupProps {
    children: React.ReactNode;
    className?: string | undefined;
    errorMessage?: string | undefined;
    label?: string | undefined;
    required?: boolean | undefined;
    dataTestId?: string | undefined;
    variant?: "button" | null | undefined;
    size?: FormButtonSize | undefined;
}

export class CheckboxGroup extends React.Component<CheckboxGroupProps> {}

export interface DataDisplayProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    label: string;
    dataTestId?: string | undefined;
}

export class DataDisplay extends React.Component<DataDisplayProps> {}

export interface DatePickerProps {
    allowClear?: boolean | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    description?: string | null | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | null | undefined;
    id?: string | undefined;
    inline?: boolean | undefined;
    isValidDate?: ((currentDate: Moment) => boolean) | undefined;
    label?: string | null | undefined;
    onChange: (date: Moment | string) => void;
    onBlur?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    onFocus?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    placeholder?: string | undefined;
    required?: boolean | undefined;
    value: string;
    dataTestId?: string | null | undefined;
    variant?: "default" | "dayFormat" | undefined;
}

export class DatePicker extends React.Component<DatePickerProps> {}

export interface InputProps {
    autoFocus?: boolean | undefined;
    autoComplete?: string | undefined;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    startIcon?: IconName | string | undefined;
    endIcon?: IconName | string | undefined;
    suffix?: string | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    inputMode?: InputMode | undefined;
    onBlur?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    onFocus?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    placeholder?: string | undefined;
    required?: boolean | undefined;
    type?: InputType | undefined;
    value?: string | number | undefined;
    dataTestId?: string | undefined;
}

export class Input extends React.Component<InputProps> {}

export interface RadioProps {
    checked: boolean;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
    required?: boolean | undefined;
    value: string;
    dataTestId?: string | undefined;
    variant?: FormButtonVariant | undefined;
    size?: FormButtonSize | undefined;
    icon?: IconName | string | undefined;
    children?: React.ReactNode | undefined;
}

export class Radio extends React.Component<RadioProps> {}

export interface RadioGroupProps {
    children: React.ReactNode;
    className?: string | undefined;
    errorMessage?: string | undefined;
    label?: string | undefined;
    required?: boolean | undefined;
    dataTestId?: string | undefined;
    variant?: FormButtonVariant | undefined;
    size?: FormButtonSize | undefined;
}

export class RadioGroup extends React.Component<RadioGroupProps> {}

export interface OptionItem {
    value?: string | number | undefined;
    label: string;
    options?: OptionItem[] | undefined;
}

export interface SelectProps {
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options?: OptionItem[] | undefined;
    placeholder?: string | undefined;
    required?: boolean | undefined;
    value: string | number;
    dataTestId?: string | undefined;
}

export class Select extends React.Component<SelectProps> {}

export interface SwitchProps {
    checked: boolean;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean | undefined;
    value?: string | undefined;
    dataTestId?: string | undefined;
}

export class Switch extends React.Component<SwitchProps> {}

export interface TextareaProps {
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    height?: number | undefined;
    id?: string | undefined;
    label?: string | undefined;
    onBlur?: ((event: React.FocusEvent<HTMLTextAreaElement>) => void) | undefined;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: ((event: React.FocusEvent<HTMLTextAreaElement>) => void) | undefined;
    placeholder?: string | undefined;
    required?: boolean | undefined;
    value: string;
    dataTestId?: string | undefined;
}

export class Textarea extends React.Component<TextareaProps> {}

export interface DisplayIconProps {
    className?: string | undefined;
    icon: IconName | string;
    label?: string | undefined;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
    variant?: DisplayIconVariant | undefined;
    dataTestId?: string | undefined;
}

export class DisplayIcon extends React.Component<DisplayIconProps> {}

export interface IconProps {
    className?: string | undefined;
    icon: IconName | string;
    label?: string | undefined;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
    size?: number | undefined;
    variant?: IconVariant | string | undefined;
    dataTestId?: string | undefined;
}

export class Icon extends React.Component<IconProps> {}

export interface VividIconProps {
    className?: string | undefined;
    icon: IconName | string;
    label?: string | undefined;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
    color?: "pink" | "blue" | "green" | "teal" | "orange" | "purple" | "gray" | undefined;
    dataTestId?: string | undefined;
}

export class VividIcon extends React.Component<VividIconProps> {}

export interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | undefined;
    marginBottom?: string | null | undefined;
    children: React.ReactNode;
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class Heading extends React.Component<HeadingProps> {}

export interface TextProps {
    as?: React.ElementType | undefined;
    block?: boolean | undefined;
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    error?: boolean | undefined;
    strong?: boolean | undefined;
    italic?: boolean | undefined;
    small?: boolean | undefined;
    uppercase?: boolean | undefined;
    secondary?: boolean | undefined;
    strikeThrough?: boolean | undefined;
    dataTestId?: string | undefined;
}

export class Text extends React.Component<TextProps> {}

export interface LegendItem {
    title?: string | undefined;
    value: string | number;
    color: string;
}

export interface LegendProps {
    data: LegendItem[];
    isVertical?: boolean | undefined;
    width?: string | number | undefined;
    legendHeader?: string | undefined;
}

export class Legend extends React.Component<LegendProps> {}

export interface PieChartProps {
    data: Array<{ name: string; value: string | number }>;
    colors: string[];
    width?: string | number | undefined;
    height?: string | number | undefined;
    innerRadius?: string | number | undefined;
    outerRadius?: string | number | undefined;
    margin?:
        | {
            top?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        }
        | undefined;
    label?: any;
    legendWrapperStyle?: React.CSSProperties | null | undefined;
    legend?: React.ReactNode | undefined;
    legendProps?:
        | {
            width?: number | undefined;
            verticalAlign?: "top" | "middle" | "bottom" | undefined;
            align?: "left" | "center" | "right" | undefined;
            layout?: "horizontal" | "vertical" | undefined;
        }
        | null
        | undefined;
    tooltip?: React.ReactElement | undefined;
    hideLegend?: boolean | undefined;
    hideTooltip?: boolean | undefined;
}

export class PieChart extends React.Component<PieChartProps> {}

export interface TheadProps {
    children: React.ReactNode;
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class Thead extends React.Component<TheadProps> {}

export interface TbodyProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class Tbody extends React.Component<TbodyProps> {}

export interface ThProps {
    align?: "left" | "center" | "right" | undefined;
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    colSpan?: number | undefined;
    dataTestId?: string | undefined;
}

export class Th extends React.Component<ThProps> {}

export interface TdProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    colSpan?: number | undefined;
    onClick?: ((event: React.MouseEvent<HTMLTableCellElement>) => void) | undefined;
    align?: "left" | "center" | "right" | undefined;
    dataTestId?: string | undefined;
}

export class Td extends React.Component<TdProps> {}

export interface TrProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    onClick?: ((event: React.MouseEvent<HTMLTableRowElement>) => void) | undefined;
    dataTestId?: string | undefined;
}

export class Tr extends React.Component<TrProps> {}

export interface TfootProps {
    children: React.ReactNode;
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class Tfoot extends React.Component<TfootProps> {}

export interface TableProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    dataTestId?: string | undefined;
}

export class Table extends React.Component<TableProps> {
    static Thead: typeof Thead;
    static Tbody: typeof Tbody;
    static Th: typeof Th;
    static Td: typeof Td;
    static Tr: typeof Tr;
    static Tfoot: typeof Tfoot;
}
