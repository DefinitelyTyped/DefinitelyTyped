import BaseComponent from './base-component';

declare class Button extends BaseComponent {
    /**
     * Toggles push state. Gives the button the appearance that it has been activated.
     */
    toggle(): void;

    /**
     * Destroys an element's button.
     */
    dispose(): void;

    // static NAME: 'button';
}

declare namespace Button {
    type jQueryInterface = (config?: 'toggle' | 'dispose') => void;
}

export default Button;
