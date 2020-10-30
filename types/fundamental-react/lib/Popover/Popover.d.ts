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
    className?: string;
    disabled?: boolean;
    disableEdgeDetection?: boolean;
    disableKeyPressHandler?: boolean;
    disableStyles?: boolean;
    noArrow?: boolean;
    placement?: PopperPlacement;
    popperClassName?: string;
    popperProps?: any;
    type?: PopoverTypes;
    useArrowKeyNavigation?: boolean;
    widthSizingType?: PopperSizingTypes;
    onClickOutside?: (event: MouseEvent | TouchEvent | FocusEvent) => void;
    onEscapeKey?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

declare class Popover extends React.Component<PopoverProps> {}

export default Popover;
