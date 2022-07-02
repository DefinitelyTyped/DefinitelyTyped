import Observer from './observer';

/**
 * Arrow keys observer introduces the {@link module:engine/view/document~Document#event:arrowKey `Document#arrowKey`} event.
 *
 * Note that this observer is attached by the {@link module:engine/view/view~View} and is available by default.
 */
export default class ArrowKeysObserver extends Observer {
    observe(): void;
}

declare module '@ckeditor/ckeditor5-engine/src/view/view' {
    interface Observers {
        ArrowKeysObserver: ArrowKeysObserver;
    }
}
