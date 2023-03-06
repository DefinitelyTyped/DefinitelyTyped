import { DomEventObserver } from '@ckeditor/ckeditor5-engine';

/**
 * The mouse selection event observer.
 *
 * It registers listeners for the following DOM events:
 *
 * - `'mousemove'`
 * - `'mouseup'`
 * - `'mouseleave'`
 *
 * Note that this observer is disabled by default. To enable this observer, it needs to be added to
 * {@link module:engine/view/view~View} using the {@link module:engine/view/view~View#addObserver} method.
 *
 * The observer is registered by the {@link module:table/tableselection~TableSelection} plugin.
 */
export default class MouseEventsObserver extends DomEventObserver {
    readonly domEventType: ['mousemove', 'mouseleave'];
    observe(domElement: HTMLElement, name?: string): void;
    onDomEvent(domEvent: MouseEvent): void;
}
