declare class Button {
    constructor(element: Element);

    /**
     * Toggles push state. Gives the button the appearance that it has been activated.
     */
    toggle(): void;

    /**
     * Destroys an element's button.
     */
    dispose(): void;
}

export default Button;
