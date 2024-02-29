import * as React from "react";
import Card from "./Card";

declare class Tooltip extends React.Component<TooltipProps> {}

export default Tooltip;

export interface TooltipProps extends Card.CardProps {
    parent: string | React.JSX.Element | React.RefObject<unknown>;
    active?: boolean | undefined;
    group?: string | undefined;
    tooltipTimeout?: number | undefined;
}
