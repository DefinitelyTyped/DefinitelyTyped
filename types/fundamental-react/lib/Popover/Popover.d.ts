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

export type PopoverProps = {
    /* Node(s) to render in the overlay. */
    body: React.ReactNode;
    /* Node to render as the reference element (that the `body` will be placed in relation to). */
    control: React.ReactNode;
    className?: string;
    disabled?: boolean;
    /* Set to **true** to render a popover without an arrow. */
    noArrow?: boolean;
    /* Initial position of the `body` (overlay) related to the `control`. */
    placement?: PopperPlacement;
    /* Additional props to be spread to the overlay element. */
    popperProps?: { [x: string]: any };
    /* Callback for consumer clicking outside of popover body. */
    onClickOutside?: (event: MouseEvent | TouchEvent | FocusEvent) => void;
    /* Callback when escape key is pressed when popover body is visible. */
    onEscapeKey?: () => void;
} & { [x: string]: any };

declare class Popover extends React.Component<PopoverProps> {}

export default Popover;
