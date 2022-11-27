export interface Controls {
    readonly items: HTMLElement[];

    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     */
    mount(): void;

    /**
     * Sets active class to current slide.
     */
    setActive(): void;

    /**
     * Removes active class to current slide.
     */
    removeActive(): void;

    /**
     * Toggles active class on items inside navigation.
     *
     */
    addClass(controls: HTMLElement): void;

    /**
     * Removes active class from active control.
     *
     */
    removeClass(controls: HTMLElement): void;

    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState(): void;

    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     */
    resetArrowState(...lists: NodeList[]): void;

    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     */
    disableArrow(...lists: NodeList[]): void;

    /**
     * Adds handles to the each group of controls.
     */
    addBindings(): void;

    /**
     * Removes handles from the each group of controls.
     */
    removeBindings(): void;

    /**
     * Binds events to arrows HTML elements.
     *
     */
    bind(elements: HTMLCollection): void;

    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     */
    unbind(elements: HTMLCollection): void;

    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     */
    click(event: Event): void;
}
