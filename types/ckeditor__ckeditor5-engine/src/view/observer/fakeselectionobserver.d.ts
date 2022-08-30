import Observer from './observer';

/**
 * Fake selection observer class. If view selection is fake it is placed in dummy DOM container. This observer listens
 * on {@link module:engine/view/document~Document#event:keydown keydown} events and handles moving fake view selection to the correct place
 * if arrow keys are pressed.
 * Fires {@link module:engine/view/document~Document#event:selectionChange selectionChange event} simulating natural behaviour of
 * {@link module:engine/view/observer/selectionobserver~SelectionObserver SelectionObserver}.
 */
export default class FakeSelectionObserver extends Observer {
    observe(): void;

    destroy(): void;
}

declare module '@ckeditor/ckeditor5-engine/src/view/view' {
    interface Observers {
        FakeSelectionObserver: FakeSelectionObserver;
    }
}
