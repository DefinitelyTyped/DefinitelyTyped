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
    /* Node(s) to render in the overlay. */
    body: React.ReactNode;
    /* Node to render as the reference element (that the `body` will be placed in relation to). */
    control: React.ReactNode;
    className?: string;
    customStyles?: {[x: string]: any};
    disabled?: boolean;
    /* Set to **true** to render popover without edge detection so popover will not flip from top to bottom with scroll. */
    disableEdgeDetection?: boolean;
    /* Set to **true** to remove onKeyPress handler and aria-* roles. Only do so if the control is a complex component such as a FormInput with Button. */
    disableKeyPressHandler?: boolean;
    disableStyles?: boolean;
    /* Set to **true** to render a popover without an arrow. */
    noArrow?: boolean;
    /* Initial position of the `body` (overlay) related to the `control`. */
    placement?: PopperPlacement;
    /* Additional props to be spread to the overlay element. */
    popperProps?: { [x: string]: any };
    /* Indicates the type of popup - "dialog", "grid", "listbox", "menu", or "tree". This value is attached to aria-haspopup and is useful to assistive tech. Defaulted to boolean true. */
    type?: PopoverTypes;
    /* Callback for consumer clicking outside of popover body. */
    onClickOutside?: (event: MouseEvent | TouchEvent | FocusEvent) => void;
    /* Callback when escape key is pressed when popover body is visible. */
    onEscapeKey?: () => void;
    useArrowKeyNavigation?: boolean;
    widthSizingType?: PopperSizingTypes;
} & React.HTMLAttributes<HTMLDivElement>;

declare class Popover extends React.Component<PopoverProps> {}

export default Popover;
