interface Accordion {
    ACCORDION: string;
    BUTTON: string;
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     * @param {HTMLButtonElement} button
     * @return {boolean} true
     */
    show(button: HTMLButtonElement): boolean;
    /**
     * @param {HTMLButtonElement} button
     * @return {boolean} false
     */
    hide(button: HTMLButtonElement): boolean;
    /**
     * Toggle a button's "pressed" state, optionally providing a target
     * state.
     *
     * @param {HTMLButtonElement} button
     * @param {boolean?} expanded If no state is provided, the current
     * state will be toggled (from false to true, and vice-versa).
     * @return {boolean} the resulting state
     */
    toggle(button: HTMLButtonElement, expanded?: boolean): boolean;
    /**
     * Get an Array of button elements belonging directly to the given
     * accordion element.
     * @param {HTMLElement} accordion
     * @return {array<HTMLButtonElement>}
     */
    getButtons(accordion: HTMLElement): HTMLButtonElement[];
}

declare const accordion: Accordion;

export default accordion;
