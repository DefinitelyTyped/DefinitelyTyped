interface Modal {
    focusTrap: null;
    init(root: HTMLElement | Document): void;
    teardown(root: HTMLElement | Document): void;
    on(root: HTMLElement | Document): void;
    off(root: HTMLElement | Document): void;
    /**
     *  Toggle the visibility of a modal window
     *
     * @param {KeyboardEvent} event the keydown event
     * @returns {boolean} safeActive if mobile is open
     */
    toggleModal(event: KeyboardEvent): boolean;
}

declare const modal: Modal;

export default modal;
