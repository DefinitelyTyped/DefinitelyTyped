interface Modal {
    focusTrap: null;
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
    /**
     *  Toggle the visibility of a modal window
     *
     * @param event the keydown event
     * @returns safeActive if mobile is open
     */
    toggleModal(event: KeyboardEvent): boolean;
}

declare const modal: Modal;

export default modal;
