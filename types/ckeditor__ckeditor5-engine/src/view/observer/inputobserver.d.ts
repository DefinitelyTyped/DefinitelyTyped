import DomEventObserver from './domeventobserver';

/**
 * Observer for events connected with data input.
 *
 * Note that this observer is attached by the {@link module:engine/view/view~View} and is available by default.
 */
export default class InputObserver extends DomEventObserver {
    readonly domEventType: ['beforeinput'];

    onDomEvent(domEvent: HTMLElementEventMap[InputObserver['domEventType'][number]]): void;
}

declare module '@ckeditor/ckeditor5-engine/src/view/view' {
    interface Observers {
        InputObserver: InputObserver;
    }
}
