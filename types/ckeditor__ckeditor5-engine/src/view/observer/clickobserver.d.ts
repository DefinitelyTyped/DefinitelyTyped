import DomEventObserver from './domeventobserver';

/**
 * {@link module:engine/view/document~Document#event:click Click} event observer.
 *
 * Note that this observer is not available by default. To make it available it needs to be added to
 * {@link module:engine/view/view~View view controller}
 * by a {@link module:engine/view/view~View#addObserver} method.
 */
export default class ClickObserver extends DomEventObserver {
    readonly domEventType = 'click';

    onDomEvent(domEvent: HTMLElementEventMap[ClickObserver['domEventType']]): void;
}

declare module '@ckeditor/ckeditor5-engine/src/view/view' {
    interface Observers {
        ClickObserver: ClickObserver;
    }
}
