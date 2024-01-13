import * as React from "react";

export = Popover;

declare class Popover extends React.Component<Popover.PopoverProps> {}

declare namespace Popover {
    type PopoverPlace =
        | "above"
        | "right"
        | "below"
        | "left"
        | "row"
        | "column"
        | "start"
        | "end";

    interface PopoverProps {
        body: React.ReactNode;
        isOpen?: boolean | undefined;
        preferPlace?: PopoverPlace | undefined;
        place?: PopoverPlace | undefined;
        onOuterAction?: ((event: Event) => void) | undefined;
        refreshIntervalMs?: number | undefined;
        enterExitTransitionDurationMs?: number | undefined;
        tipSize?: number | undefined;
        className?: string | undefined;
        style?: React.CSSProperties | undefined;
        target?: React.ReactElement | undefined;
        appendTarget?: Element | undefined;
        children?: React.ReactNode;
    }
}
