import { Plugin } from '@ckeditor/ckeditor5-core';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import DataTransfer from './datatransfer';

/**
 * The clipboard pipeline feature. It is responsible for intercepting the `paste` and `drop` events and
 * passing the pasted content through a series of events in order to insert it into the editor's content.
 * It also handles the `cut` and `copy` events to fill the native clipboard with the serialized editor's data.
 *
 * # Input pipeline
 *
 * The behavior of the default handlers (all at a `low` priority):
 *
 * ## Event: `paste` or `drop`
 *
 * 1. Translates the event data.
 * 2. Fires the {@link module:engine/view/document~Document#event:clipboardInput `view.Document#clipboardInput`} event.
 *
 * ## Event: `view.Document#clipboardInput`
 *
 * 1. If the `data.content` event field is already set (by some listener on a higher priority), it takes this content and fires the event
 *    from the last point.
 * 2. Otherwise, it retrieves `text/html` or `text/plain` from `data.dataTransfer`.
 * 3. Normalizes the raw data by applying simple filters on string data.
 * 4. Processes the raw data to {@link module:engine/view/documentfragment~DocumentFragment `view.DocumentFragment`} with the
 *    {@link module:engine/controller/datacontroller~DataController#htmlProcessor `DataController#htmlProcessor`}.
 * 5. Fires the {@link module:clipboard/clipboardpipeline~ClipboardPipeline#event:inputTransformation
 *   `ClipboardPipeline#inputTransformation`} event with the view document fragment in the `data.content` event field.
 *
 * ## Event: `ClipboardPipeline#inputTransformation`
 *
 * 1. Converts {@link module:engine/view/documentfragment~DocumentFragment `view.DocumentFragment`} from the `data.content` field to
 *    {@link module:engine/model/documentfragment~DocumentFragment `model.DocumentFragment`}.
 * 2. Fires the {@link module:clipboard/clipboardpipeline~ClipboardPipeline#event:contentInsertion `ClipboardPipeline#contentInsertion`}
 *    event with the model document fragment in the `data.content` event field.
 *    **Note**: The `ClipboardPipeline#contentInsertion` event is fired within a model change block to allow other handlers
 *    to run in the same block without post-fixers called in between (i.e., the selection post-fixer).
 *
 * ## Event: `ClipboardPipeline#contentInsertion`
 *
 * 1. Calls {@link module:engine/model/model~Model#insertContent `model.insertContent()`} to insert `data.content`
 *    at the current selection position.
 *
 * # Output pipeline
 *
 * The behavior of the default handlers (all at a `low` priority):
 *
 * ## Event: `copy`, `cut` or `dragstart`
 *
 * 1. Retrieves the selected {@link module:engine/model/documentfragment~DocumentFragment `model.DocumentFragment`} by calling
 *    {@link module:engine/model/model~Model#getSelectedContent `model#getSelectedContent()`}.
 * 2. Converts the model document fragment to {@link module:engine/view/documentfragment~DocumentFragment `view.DocumentFragment`}.
 * 3. Fires the {@link module:engine/view/document~Document#event:clipboardOutput `view.Document#clipboardOutput`} event
 *    with the view document fragment in the `data.content` event field.
 *
 * ## Event: `view.Document#clipboardOutput`
 *
 * 1. Processes `data.content` to HTML and plain text with the
 *    {@link module:engine/controller/datacontroller~DataController#htmlProcessor `DataController#htmlProcessor`}.
 * 2. Updates the `data.dataTransfer` data for `text/html` and `text/plain` with the processed data.
 * 3. For the `cut` method, calls {@link module:engine/model/model~Model#deleteContent `model.deleteContent()`}
 *    on the current selection.
 *
 * Read more about the clipboard integration in the {@glink framework/guides/deep-dive/clipboard clipboard deep dive guide}.
 */
export default class ClipboardPipeline extends Plugin {
    static readonly pluginName: 'ClipboardPipeline';

    init(): void;
}

export interface ClipboardOutputEventData {
    content: DocumentFragment;
    readonly dataTransfer: DataTransfer;
    method: 'copy' | 'cut';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ClipboardPipeline: ClipboardPipeline;
    }
}
