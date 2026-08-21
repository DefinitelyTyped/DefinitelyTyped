export interface Keyboard {
    /**
     * Binds keyboard events on component mount.
     */
    mount(): void;

    /**
     * Adds keyboard press events.
     */
    bind(): void;

    /**
     * Removes keyboard press events.
     */
    unbind(): void;

    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     */
    press(event: Event): void;
}
