/**
 *  This tooltip class is derived from Bootstrap 3, but modified to not require
 *  jQuery, which is an expensive dependency we want to eliminate.
 */
export interface Tooltip {
    readonly options: TooltipOptions;
    readonly enabled: boolean;
    readonly timeout: number;
    readonly hoverState: 'in' | 'out' | null;
    readonly element: HTMLElement;

    getTitle(): string;
    getTooltipElement(): HTMLElement;
    getArrowElement(): HTMLElement;
    enable(): void;
    disable(): void;
    toggleEnabled(): void;
    toggle(): void;
    recalculatePosition(): void;
}

/** The options for a Bootstrap 3 Tooltip class, which Atom uses a variant of. */
export interface TooltipOptions {
    /** Apply a CSS fade transition to the tooltip. */
    animation?: boolean;

    /** Appends the tooltip to a specific element. */
    container?: string | HTMLElement | false;

    /**
     *  Delay showing and hiding the tooltip (ms) - does not apply to manual
     *  trigger type.
     */
    delay?: number | { show: number; hide: number };

    /** Allow HTML in the tooltip. */
    html?: boolean;

    /** How to position the tooltip. */
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';

    /**
     *  If a selector is provided, tooltip objects will be delegated to the
     *  specified targets.
     */
    selector?: string;

    /** Base HTML to use when creating the tooltip. */
    template?: string;

    /**
     *  Default title value if title attribute isn't present.
     *  If a function is given, it will be called with its this reference set to
     *  the element that the tooltip is attached to.
     */
    title?: string | HTMLElement | (() => string);

    /**
     *  How tooltip is triggered - click | hover | focus | manual.
     *  You may pass multiple triggers; separate them with a space.
     */
    trigger?: string;
}
