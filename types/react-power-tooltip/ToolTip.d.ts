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
    lineSeparated?: boolean | string;
    position?: PositionType;
    hoverBackground?: string;
    backgroundColor?: string;
    arrowAlign?: ArrowAlignType;
    moveDown?: string;
    moveRight?: string;
    moveLeft?: string;
    moveUp?: string;
    textAlign?: string;
    fontFamily?: string;
    fontWeight?: string;
    fontSize?: string;
    color?: string;
    animation?: AnimationType;
    zIndex?: string;
    show: boolean;
    static?: boolean;
    flat?: boolean;
}
