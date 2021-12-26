import * as React from 'react';

declare class Tooltip extends React.Component<TooltipProps> {}

export default Tooltip;

export type PositionType =  "right start" | "right center" | "right end"
         | "bottom start" | "bottom center" | "bottom end"
         | "left start" | "left center" | "left end"
         | "top start" | "top center" | "top end";

export type ArrowAlignType = "start" | "center" | "end";

export type AnimationType = "fade" | "bounce";

export interface TooltipProps {
    children?: React.ReactNode;
    lineSeparated?: boolean | string | undefined;
    position?: PositionType | undefined;
    hoverBackground?: string | undefined;
    backgroundColor?: string | undefined;
    arrowAlign?: ArrowAlignType | undefined;
    moveDown?: string | undefined;
    moveRight?: string | undefined;
    moveLeft?: string | undefined;
    moveUp?: string | undefined;
    textAlign?: string | undefined;
    fontFamily?: string | undefined;
    fontWeight?: string | undefined;
    fontSize?: string | undefined;
    color?: string | undefined;
    animation?: AnimationType | undefined;
    zIndex?: string | undefined;
    show: boolean;
    static?: boolean | undefined;
    flat?: boolean | undefined;
}
