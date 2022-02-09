import * as React from "react";

export type PopperPlacement =
    | "bottom-start"
    | "bottom"
    | "bottom-end"
    | "left-start"
    | "left"
    | "left-end"
    | "right-start"
    | "right"
    | "right-end"
    | "top-start"
    | "top"
    | "top-end";

export type PopoverTypes =
    | true
    | "dialog"
    | "grid"
    | "listbox"
    | "menu"
    | "tree";

export type PopperSizingTypes =
    | 'none'
    | "matchTarget"
    | "minTarget"
    | "maxTarget";

export type PopoverProps = {
    body: React.ReactNode;
    control: React.ReactNode;
    className?: string | undefined;
    disabled?: boolean | undefined;
    disableEdgeDetection?: boolean | undefined;
    disableKeyPressHandler?: boolean | undefined;
    disableStyles?: boolean | undefined;
    noArrow?: boolean | undefined;
    placement?: PopperPlacement | undefined;
    popperClassName?: string | undefined;
    popperProps?: any;
    type?: PopoverTypes | undefined;
    useArrowKeyNavigation?: boolean | undefined;
    widthSizingType?: PopperSizingTypes | undefined;
    onClickOutside?: ((event: MouseEvent | TouchEvent | FocusEvent) => void) | undefined;
    onEscapeKey?: (() => void) | undefined;
} & React.HTMLAttributes<HTMLDivElement>;

declare class Popover extends React.Component<PopoverProps> {}

export default Popover;
