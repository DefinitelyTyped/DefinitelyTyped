interface Accordion {
    ACCORDION: string;
    BUTTON: string;
    init(root?: HTMLElement | Document): void;
    on(el?: HTMLElement): void;
    off(el?: HTMLElement): void;
    show(button: HTMLButtonElement): boolean;
    hide(button: HTMLButtonElement): boolean;
    /**
     * Toggle a button's "pressed" state, optionally providing a target
     * state.
     */
    toggle(button: HTMLButtonElement, expanded?: boolean): boolean;
    /**
     * Get an Array of button elements belonging directly to the given
     * accordion element.
     */
    getButtons(accordion: HTMLElement): HTMLButtonElement[];
}

declare const accordion: Accordion;

export default accordion;
