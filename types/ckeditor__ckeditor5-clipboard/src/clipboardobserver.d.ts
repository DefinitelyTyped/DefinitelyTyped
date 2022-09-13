import { DomEventObserver } from '@ckeditor/ckeditor5-engine';
import DataTransfer from './datatransfer';

/**
 * Clipboard events observer.
 *
 * Fires the following events:
 *
 * * {@link module:engine/view/document~Document#event:clipboardInput},
 * * {@link module:engine/view/document~Document#event:paste},
 * * {@link module:engine/view/document~Document#event:copy},
 * * {@link module:engine/view/document~Document#event:cut},
 * * {@link module:engine/view/document~Document#event:drop},
 * * {@link module:engine/view/document~Document#event:dragover},
 * * {@link module:engine/view/document~Document#event:dragging},
 * * {@link module:engine/view/document~Document#event:dragstart},
 * * {@link module:engine/view/document~Document#event:dragend},
 * * {@link module:engine/view/document~Document#event:dragenter},
 * * {@link module:engine/view/document~Document#event:dragleave}.
 *
 * **Note**: This observer is not available by default (ckeditor5-engine does not add it on its own).
 * To make it available, it needs to be added to {@link module:engine/view/document~Document} by using
 * the {@link module:engine/view/view~View#addObserver `View#addObserver()`} method. Alternatively, you can load the
 * {@link module:clipboard/clipboard~Clipboard} plugin which adds this observer automatically (because it uses it).
 */
export default class ClipboardObserver extends DomEventObserver {
    readonly domEventType: [
        'paste',
        'copy',
        'cut',
        'drop',
        'dragover',
        'dragstart',
        'dragend',
        'dragenter',
        'dragleave',
    ];

    onDomEvent(domEvent: HTMLElementEventMap[ClipboardObserver['domEventType'][number]]): void;
}

export interface ClipboardEventData {
    readonly dataTransfer: DataTransfer;
}

declare module '@ckeditor/ckeditor5-engine/src/view/view' {
    interface Observers {
        ClipboardObserver: ClipboardObserver;
    }
}
