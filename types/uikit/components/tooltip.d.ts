import { UIkitElement } from "../utils";

type UIkitTooltipOptions = {
    title?: string;	
    pos?: string;
    offset?: number | boolean;
    animation?: string;	
    duration?: number;	
    delay?: number;	
    cls?: string;
}

type UIkitTooltipElement = {
    show(): void;
    hide(): void;
}

export type Tooltip = (element: UIkitElement, options?: UIkitTooltipOptions) => UIkitTooltipElement;