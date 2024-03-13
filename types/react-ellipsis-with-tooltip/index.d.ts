import * as React from "react";

export interface EllipsisWithTooltipProps {
    placement?:
        | "auto-start"
        | "auto"
        | "auto-end"
        | "top-start"
        | "top"
        | "top-end"
        | "right-start"
        | "right"
        | "right-end"
        | "bottom-end"
        | "bottom"
        | "bottom-start"
        | "left-end"
        | "left"
        | "left-start"
        | undefined;
    style?: React.CSSProperties | undefined;
    delayShow?: number | undefined;
    delayHide?: number | undefined;
    children: React.ReactNode;
}

declare class EllipsisWithTooltip extends React.Component<EllipsisWithTooltipProps> {}

export default EllipsisWithTooltip;
