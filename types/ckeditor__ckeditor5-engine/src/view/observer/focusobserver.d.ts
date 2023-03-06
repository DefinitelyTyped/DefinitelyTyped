import DomEventObserver from './domeventobserver';

/**
 * {@link module:engine/view/document~Document#event:focus Focus}
 * and {@link module:engine/view/document~Document#event:blur blur} events observer.
 * Focus observer handle also {@link module:engine/view/rooteditableelement~RootEditableElement#isFocused isFocused} property of the
 * {@link module:engine/view/rooteditableelement~RootEditableElement root elements}.
 *
 * Note that this observer is attached by the {@link module:engine/view/view~View} and is available by default.
 */
export default class FocusObserver extends DomEventObserver {
    readonly domEventType: ['focus', 'blur'];

    onDomEvent(domEvent: HTMLElementEventMap[FocusObserver['domEventType'][number]]): void;

    destroy(): void;
}

declare module '@ckeditor/ckeditor5-engine/src/view/view' {
    interface Observers {
        FocusObserver: FocusObserver;
    }
}
