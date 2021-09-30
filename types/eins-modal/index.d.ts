// Type definitions for eins-modal 2.2
// Project: https://www.einscms.com/modal
// Definitions by: Timucin Ünal <https://github.com/Timu57>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

type openTransition = 'fadeIn'|
    'flipXIn'|
    'flipYIn'|
    'flipBounceXIn'|
    'flipBounceYIn'|
    'swoopIn'|
    'whirlIn'|
    'shrinkIn'|
    'expandIn'|
    'bounceIn'|
    'bounceUpIn'|
    'bounceDownIn'|
    'bounceLeftIn'|
    'bounceRightIn'|
    'slideUpIn'|
    'slideDownIn'|
    'slideLeftIn'|
    'slideUpBigIn'|
    'slideDownBigIn'|
    'slideLeftBigIn'|
    'slideRightBigIn'|
    'perspectiveUpIn'|
    'perspectiveDownIn'|
    'perspectiveLeftIn'|
    'perspectiveRightIn';

type closeTransition = 'fadeOut'|
    'flipXOut'|
    'flipYOut'|
    'flipBounceXOut'|
    'flipBounceYOut'|
    'swoopOut'|
    'whirlOut'|
    'shrinkOut'|
    'expandOut'|
    'bounceOut'|
    'bounceUpOut'|
    'bounceDownOut'|
    'bounceLeftOut'|
    'bounceRightOut'|
    'slideUpOut'|
    'slideDownOut'|
    'slideLeftOut'|
    'slideUpBigOut'|
    'slideDownBigOut'|
    'slideLeftBigOut'|
    'slideRightBigOut'|
    'perspectiveUpOut'|
    'perspectiveDownOut'|
    'perspectiveLeftOut'|
    'perspectiveRightOut';

interface EinsModalOptions {
    /**
     * Animation when opening modal
     * @default 'bounceIn'
     */
    openTransition?: openTransition;
    /**
     * Duration it takes to open the modal in milliseconds
     * @default: 400
     */
    openDuration?: number;
    /**
     * Animation when closing modal
     * @default: 'expandOut'
     */
    closeTransition?: closeTransition;
    /**
     * Duration it takes to close the modal in milliseconds
     * @default 200
     */
    closeDuration?: number;
    /**
     * Close modal with click/ touch on backdrop
     * @default false
     */
    backdropClose?: boolean;
    /**
     * Enable/ Disable showing multiple modals on screen
     * @default true
     */
    multiple?: boolean;
    /**
     * Wait for next action (open/close) before opening modal
     * @default true
     */
    wait?: boolean;
}

interface EinsModal {
    /**
     * Open a modal.
     * @param modalElementOrId
     * @param options
     */
    open(modalElementOrId: string|HTMLElement|JQuery, options?: EinsModalOptions|null): void;

    /**
     * Close a modal.
     * @param modalElementOrId
     * @param options
     */
    close(modalElementOrId?: string|HTMLElement|JQuery, options?: EinsModalOptions|null): void;

    /**
     * Override default options.
     * @param options
     */
    setDefaultOptions(options: EinsModalOptions): void;

    /**
     * Get a list of all open modal objects
     */
    getOpenModals(): Array<HTMLElement|JQuery>|[];

    /**
     * Check if modal is open
     * @param modalElementOrId
     */
    isOpen(modalElementOrId: string|HTMLElement): boolean;

    /**
     * Add an event listener to a element and/or assign it to a modal.
     * @param triggerElementOrId
     * @param modalElementOrId
     * @param options
     */
    addButton(triggerElementOrId: string|HTMLElement|JQuery, modalElementOrId?: string|HTMLElement|JQuery|null, options?: EinsModalOptions|null): void;

    /**
     * Remove all event listeners from an element.
     * @param triggerElementOrId
     */
    removeButton(triggerElementOrId: string|HTMLElement|JQuery): void;

    /**
     * Add ".modal()" function to a modal
     * @param modalElementOrId
     */
    addModalFunction(modalElementOrId: string|HTMLElement|JQuery): void;
}

interface ModalFunction {
    (action: 'show'|'hide'|'toggle', options?: EinsModalOptions): void;
}

declare const einsModal: EinsModal;

declare global {
    interface Window {
        einsModal: EinsModal;
    }
    interface HTMLElement {
        modal?: ModalFunction;
    }
    interface JQuery {
        modal?: ModalFunction;
    }
}

export default einsModal;
