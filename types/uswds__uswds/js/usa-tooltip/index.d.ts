interface TooltipContext {
    tooltipBody: HTMLSpanElement;
    position: string;
    tooltipContent: string;
    wrapper: HTMLSpanElement;
}

interface Tooltip {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     * Setup the tooltip component
     * @param {HTMLElement} tooltipTrigger The element that creates the tooltip
     * @returns {object} elements
     */
    setup(tooltipTrigger: HTMLElement): {
        tooltipBody: HTMLSpanElement;
        position: string;
        tooltipContent: string;
        wrapper: HTMLSpanElement;
    };
    /**
     *
     * @param {DOMElement} trigger - The tooltip trigger
     * @returns {object} Elements for initialized tooltip; includes trigger, wrapper, and body
     */
    getTooltipElements(trigger: Element): {
        trigger: Element;
        wrapper: HTMLElement;
        body: HTMLElement;
    };
    /**
     * Shows the tooltip
     * @param {HTMLElement} tooltipTrigger - the element that initializes the tooltip
     */
    show(tooltipTrigger: HTMLElement): void;
    /**
     * Removes all the properties to show and position the tooltip,
     * and resets the tooltip position to the original intention
     * in case the window is resized or the element is moved through
     * DOM manipulation.
     * @param {HTMLElement} tooltipBody - The body of the tooltip
     */
    hide(tooltipBody: HTMLElement): void;
}

declare const tooltip: Tooltip;

export default tooltip;
