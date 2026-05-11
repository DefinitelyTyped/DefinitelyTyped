type TooltipPosition = "top" | "right" | "bottom" | "left";

interface TooltipContext {
    tooltipBody: HTMLSpanElement;
    position: string;
    tooltipContent: string;
    wrapper: HTMLSpanElement;
}

interface Tooltip {
    init(root?: HTMLElement | Document): void;
    on(el?: HTMLElement): void;
    off(el?: HTMLElement): void;
    /**
     * Setup the tooltip component
     */
    setup(tooltipTrigger: HTMLElement): {
        tooltipBody: HTMLSpanElement;
        position: string;
        tooltipContent: string;
        wrapper: HTMLSpanElement;
    };
    getTooltipElements(trigger: Element): {
        trigger: HTMLElement;
        wrapper: HTMLElement;
        body: HTMLElement;
    };
    /**
     * Shows the tooltip
     */
    show(tooltipBody: HTMLElement, tooltipTrigger: HTMLElement, position: TooltipPosition): void;
    /**
     * Removes all the properties to show and position the tooltip,
     * and resets the tooltip position to the original intention
     * in case the window is resized or the element is moved through
     * DOM manipulation.
     */
    hide(tooltipBody: HTMLElement): void;
}

declare const tooltip: Tooltip;

export default tooltip;
