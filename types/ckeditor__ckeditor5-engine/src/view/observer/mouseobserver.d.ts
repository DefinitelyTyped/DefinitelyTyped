import DomEventObserver from './domeventobserver';

/**
 * Mouse events observer.
 *
 * Note that this observer is not available by default. To make it available it needs to be added to
 * {@link module:engine/view/view~View} by {@link module:engine/view/view~View#addObserver} method.
 */
export default class MouseObserver extends DomEventObserver {
    readonly domEventType: ['mousedown', 'mouseup', 'mouseover', 'mouseout'];

    onDomEvent(domEvent: HTMLElementEventMap[MouseObserver['domEventType'][number]]): void;
}

declare module '@ckeditor/ckeditor5-engine/src/view/view' {
    interface Observers {
        MouseObserver: MouseObserver;
    }
}
