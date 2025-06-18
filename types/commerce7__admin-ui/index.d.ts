import * as React from "react";

export class Commerce7AdminUI extends React.Component<{
    mode?: "light" | "dark" | undefined;
    children?: React.ReactNode | undefined;
}> {}

export type IconName =
    | "add"
    | "addCart"
    | "addUser"
    | "adjust"
    | "alignCenter"
    | "alignLeft"
    | "alighRight"
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
    | "bell"
    | "book"
    | "brush"
    | "bundle"
    | "button"
    | "buttonLine"
    | "calendar"
    | "calendarCross"
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
    | "coin"
    | "combine"
    | "comment"
    | "complianceCheck"
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
    | "filter"
    | "flag"
    | "gift"
    | "giftCard"
    | "gradHat"
    | "hammer"
    | "hand"
    | "heart"
    | "heartFilled"
    | "history"
    | "image"
    | "imagePlaceholder"
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
    | "logOut"
    | "loyalty"
    | "map"
    | "mapMarker"
    | "marketing"
    | "megaAdmin"
    | "menu"
    | "minus"
    | "moreActions"
    | "move"
    | "newTab"
    | "note"
    | "notification"
    | "onboarding"
    | "package"
    | "paperPlane"
    | "percent"
    | "phone"
    | "platter"
    | "playCircle"
    | "pointer"
    | "pos"
    | "posProfile"
    | "pound"
    | "print"
    | "process"
    | "product"
    | "questionCircle"
    | "rand"
    | "redo"
    | "redoLarge"
    | "reload"
    | "remove"
    | "report"
    | "reservation"
    | "rocket"
    | "search"
    | "security"
    | "setting"
    | "shuffle"
    | "smartphone"
    | "split"
    | "star"
    | "store"
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
    | "textItalic"
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
    | "video"
    | "wallet"
    | "wand"
    | "warning"
    | "wine";

export class Alert extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    variant?: "default" | "info" | "error" | "warning" | "success" | undefined;
    size?: "default" | "small" | undefined;
    icon?: IconName | undefined;
}> {}

export class Avatar extends React.Component<{
    className?: string | undefined;
    label?: string | undefined;
    imageSrc?: string | undefined;
    imageAlt?: string | undefined;
    size?: "tiny" | "small" | "default" | "large" | undefined;
}> {}

export class Breadcrumb extends React.Component<{
    children?: React.ReactNode;
    className?: string | undefined;
    onClick?: (() => void) | undefined;
    component?: any;
    href?: string | undefined;
}> {}

export class Breadcrumbs extends React.Component<{
    className?: string | undefined;
    children?: React.ReactNode | undefined;
}> {
    static Breadcrumb: typeof Breadcrumb;
}

export class Card extends React.Component<{
    variant?: "default" | "white" | undefined;
    className?: string | undefined;
    children: React.ReactNode;
}> {}

export class Column extends React.Component<{
    children?: React.ReactNode | undefined;
    span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "none" | "auto" | undefined;
}> {}

export class Columns extends React.Component<{
    children: React.ReactNode;
    justify?: React.CSSProperties["justifyContent"] | undefined;
    align?: React.CSSProperties["alignItems"] | undefined;
    wrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
    className?: string | undefined;
}> {
    static Column: typeof Column;
}

export class InfoCardGrid extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
}> {}

export class InfoCard extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    icon?: IconName | undefined;
    label?: React.ReactNode | undefined;
    title?: React.ReactNode | undefined;
    subtitle?: React.ReactNode | undefined;
    variant?: "default" | "success" | "error" | "warning" | "info" | undefined;
    img?: string | undefined;
}> {
    static InfoCardGrid: typeof InfoCardGrid;
}

export class LineBreak extends React.Component<{
    className?: string | undefined;
}> {}

export class ModalBody extends React.Component<{
    children: React.ReactNode;
    className?: string | undefined;
}> {}

export class ModalFooter extends React.Component<{
    children: React.ReactNode;
    className?: string | undefined;
}> {}

export class Modal extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    disableBodyScroll?: boolean | undefined;
    onClose?: (() => void) | undefined;
    title?: string | undefined;
    visible?: boolean | undefined;
}> {
    static ModalBody: typeof ModalBody;
    static ModalFooter: typeof ModalFooter;
}

export class NoRecords extends React.Component<{
    title?: string | undefined;
    description?: string | undefined;
    icon?: IconName | undefined;
    className?: string | undefined;
}> {}

export class Picture extends React.Component<{
    className?: string | undefined;
    height?: number | undefined;
    src?: string | { src: string; webp: string; avif: string } | undefined;
    alt?: string | undefined;
}> {}

export class ProgressBar extends React.Component<{
    progress?: number | undefined;
    className?: string | undefined;
    content?: { text: string; circleColor: string; progress: number } | undefined;
    color?: string | undefined;
}> {}

export class Region extends React.Component<{
    children: React.ReactNode;
    className?: string | undefined;
    borderBottom?: boolean | undefined;
}> {}

export class Spinner extends React.Component<{
    label?: string | undefined;
    className?: string | undefined;
}> {}

export class Tag extends React.Component<{
    className?: string | undefined;
    children?: React.ReactNode | undefined;
    onClick?: (() => void) | undefined;
    onDelete?: (() => void) | undefined;
    variant?: "default" | "info" | "warning" | "error" | "success" | undefined;
    startIcon?: IconName | undefined;
    endIcon?: IconName | undefined;
}> {}

export class Button extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    onClick?: (() => void) | undefined;
    size?: "default" | "small" | undefined;
    startIcon?: IconName | undefined;
    type?: "button" | "submit" | undefined;
    variant?: "primary" | "secondary" | "text" | "link" | undefined;
    formNoValidate?: boolean | undefined;
}> {}

export class ButtonMenuItem extends React.Component<{
    children: React.ReactNode;
    className?: string | undefined;
    disabled?: boolean | undefined;
    label?: string | undefined;
    size?: "default" | "small" | undefined;
    variant?: "primary" | "secondary" | "text" | undefined;
    onClick?: (() => void) | undefined;
    icon?: IconName | undefined;
}> {}

export class ButtonMenu extends React.Component<{
    children: React.ReactNode;
    className?: string | undefined;
}> {
    static ButtonMenuItem: typeof ButtonMenuItem;
}

export class ContextMenuItem extends React.Component<{
    alt?: string | undefined;
    children: React.ReactNode;
    className?: string | undefined;
    disabled?: boolean | undefined;
    icon?: IconName | undefined;
    img?: string | undefined;
    onClick?: (() => void) | undefined;
}> {}

export class ContextMenuMoreActions extends React.Component<{
    children: React.ReactNode;
    className?: string | undefined;
    label?: string | undefined;
    disabled?: boolean | undefined;
}> {}

export class ContextMenu extends React.Component<{
    children: React.ReactNode;
    className?: string | undefined;
}> {
    static ContextMenuItem: typeof ContextMenuItem;
    static ContextMenuMoreActions: typeof ContextMenuMoreActions;
}

export class LinkButton extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    component?: any;
    disabled?: boolean | undefined;
    download?: boolean | undefined;
    href?: string | undefined;
    rel?: string | undefined;
    size?: "default" | "small" | undefined;
    startIcon?: IconName | undefined;
    target?: string | undefined;
    variant?: "primary" | "secondary" | "text" | "link" | undefined;
}> {}

export class SelectButton extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    selected?: boolean | undefined;
    onClick?: (() => void) | undefined;
    type?: "button" | "submit" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    icon?: IconName | undefined;
}> {}

export class CardLink extends React.Component<{
    className?: string | undefined;
    children: React.ReactNode;
    component?: any;
    href?: string | undefined;
    icon?: IconName | undefined;
    description?: string | undefined;
    label?: string | undefined;
}> {}

export class SubNav extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    isOpen?: boolean | undefined;
}> {}

export class NavLink extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    icon?: IconName | undefined;
    component?: any;
    onClick?: (() => void) | undefined;
    href?: string | undefined;
    activeClassName?: string | undefined;
}> {}

export class SubNavLink extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    component?: any;
    onClick?: (() => void) | undefined;
    href?: string | undefined;
    activeClassName?: string | undefined;
}> {}

export class Nav extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
}> {
    static SubNav: typeof SubNav;
    static NavLink: typeof NavLink;
    static SubNavLink: typeof SubNavLink;
}

export class Step extends React.Component<{
    step?: number | undefined;
    description?: string | undefined;
    className?: string | undefined;
    component?: any;
    onClick?: (() => void) | undefined;
    href?: string | undefined;
    activeClassName?: string | undefined;
    icon?: IconName | undefined;
}> {}

export class Stepper extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
}> {
    static Step: typeof Step;
}

export class SubMenuItem extends React.Component<{
    children?: React.ReactNode | undefined;
    activeClassName?: string | undefined;
    className?: string | undefined;
    component?: any;
    onClick?: (() => void) | undefined;
    href?: string | undefined;
}> {}

export class SubMenu extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    borderBottom?: boolean | undefined;
    activeClassName?: string | undefined;
}> {
    static SubMenuItem: typeof SubMenuItem;
}

export class Tab extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    component?: any;
    onClick?: (() => void) | undefined;
    href?: string | undefined;
    activeClassName?: string | undefined;
}> {}

export class TabBody extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
}> {}

export class Tabs extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
}> {
    static Tab: typeof Tab;
    static TabBody: typeof TabBody;
}

export class Checkbox extends React.Component<{
    checked: boolean;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    onChange?: (() => void) | undefined;
    required?: boolean | undefined;
    value?: string | undefined;
    variant?: "button" | "default" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    icon?: IconName | undefined;
}> {}

export class CheckboxGroup extends React.Component<{
    children: React.ReactNode;
    className?: string | undefined;
    errorMessage?: string | undefined;
    label?: string | undefined;
    required?: boolean | undefined;
    variant?: "button" | null | undefined;
    size?: "small" | "medium" | "large" | undefined;
}> {}

export class DataDisplay extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    label: string;
}> {}

export class DatePicker extends React.Component<{
    allowClear?: boolean | undefined;
    autoFocus?: boolean | undefined;
    children?: React.ReactNode | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    inline?: boolean | undefined;
    isValidDate?: ((d: Date) => boolean) | undefined;
    label?: string | undefined;
    onChange: (d: Date) => void;
    onBlur?: (() => void) | undefined;
    onFocus?: (() => void) | undefined;
    placeholder?: string | undefined;
    required?: boolean | undefined;
    value: string;
}> {}

export class Input extends React.Component<{
    autoFocus?: boolean | undefined;
    autoComplete?: string | undefined;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    startIcon?: IconName | undefined;
    endIcon?: IconName | undefined;
    suffix?: string | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    inputMode?: "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url" | undefined;
    onBlur?: (() => void) | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    // onChange is marked as required in the docs, but Input elements are shown elsewhere
    // in the docs with this property omitted
    onFocus?: (() => void) | undefined;
    placeholder?: string | undefined;
    required?: boolean | undefined;
    type?: "text" | "number" | "password" | "email" | "color" | undefined;
    value?: string | number | undefined;
    // value is marked as required in the docs, but Input elements are shown elsewhere
    // in the docs with this property omitted
}> {}

export class Radio extends React.Component<{
    checked: boolean;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (() => void) | undefined;
    required?: boolean | undefined;
    value: string;
    variant?: "button" | "default" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    icon?: IconName | undefined;
}> {}

export class RadioGroup extends React.Component<{
    children: React.ReactNode;
    checked?: boolean | undefined;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    onChange?: (() => void) | undefined;
    onClick?: (() => void) | undefined;
    required?: boolean | undefined;
    value?: string | undefined;
    variant?: "button" | "default" | undefined;
    size?: "small" | "medium" | "large" | undefined;
    icon?: IconName | undefined;
}> {}

export class Select extends React.Component<{
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options?: Array<{ value: string | number; label: string }> | undefined;
    placeholder?: string | undefined;
    required?: boolean | undefined;
    value?: string | number | undefined;
}> {}

export class Switch extends React.Component<{
    checked: boolean;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    onChange: () => void;
    required?: boolean | undefined;
    value?: string | undefined;
}> {}

export class Textarea extends React.Component<{
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    description?: string | undefined;
    disabled?: boolean | undefined;
    errorMessage?: string | undefined;
    height?: number | undefined;
    id?: string | undefined;
    label?: string | undefined;
    onBlur?: (() => void) | undefined;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: (() => void) | undefined;
    placeholder?: string | undefined;
    required?: boolean | undefined;
    value: string | number;
}> {}

export class DisplayIcon extends React.Component<{
    className?: string | undefined;
    icon: IconName;
    label?: string;
    onClick?: (() => void) | undefined;
    variant?: "default" | "success" | "warning" | "error" | undefined;
}> {}

export class Icon extends React.Component<{
    className?: string | undefined;
    icon: IconName;
    label?: string;
    onClick?: (() => void) | undefined;
    size?: number | undefined;
    variant?: "default" | "success" | "warning" | "error" | undefined;
}> {}

export class VividIcon extends React.Component<{
    className?: string | undefined;
    icon: IconName;
    label?: string;
    onClick?: (() => void) | undefined;
    color?: "pink" | "blue" | "green" | "teal" | "orange" | "purple" | undefined;
}> {}

export class Heading extends React.Component<{
    level?: 1 | 2 | 3 | 4 | undefined;
    marginBottom?: string | undefined;
    children: React.ReactNode;
    className?: string | undefined;
}> {}

export class Text extends React.Component<{
    as?: string | undefined;
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
}> {}

export class Legend extends React.Component<{
    data: Array<{ title: string; value?: string | number; color: string }>;
    isVertical?: boolean | undefined;
    width?: string | number | undefined;
    legendHeader?: string | undefined;
}> {}

export class PieChart extends React.Component<{
    data: Array<{ name: string; value: string | number }>;
    colors: string[];
    width?: string | number | undefined;
    height?: string | number | undefined;
    innerRadius?: string | number | undefined;
    outerRadius?: string | number | undefined;
    margin?: { top?: number; bottom?: number; left?: number; right?: number } | undefined;
    label?: React.ReactNode | undefined;
    legendWrapperStyle?: any;
    legend?: React.ReactNode | undefined;
    legendProps?: any;
    tooltip?: React.ReactNode | undefined;
    hideLegend?: boolean | undefined;
    hideTooltip?: boolean | undefined;
}> {}

export class Thead extends React.Component<{
    children: React.ReactNode;
    className?: string | undefined;
}> {}

export class Tbody extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
}> {}

export class Th extends React.Component<{
    align?: "left" | "center" | "right" | undefined;
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    colSpan?: number | undefined;
}> {}

export class Td extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    colSpan?: number | undefined;
    onClick?: (() => void) | undefined;
    align?: "left" | "center" | "right" | undefined;
}> {}

export class Tr extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    onClick?: (() => void) | undefined;
}> {}

export class Tfoot extends React.Component<{
    children: React.ReactNode;
    className?: string | undefined;
}> {}

export class Table extends React.Component<{
    children?: React.ReactNode | undefined;
    className?: string | undefined;
}> {
    static Thead: typeof Thead;
    static Tbody: typeof Tbody;
    static Th: typeof Th;
    static Td: typeof Td;
    static Tr: typeof Tr;
    static Tfoot: typeof Tfoot;
}
