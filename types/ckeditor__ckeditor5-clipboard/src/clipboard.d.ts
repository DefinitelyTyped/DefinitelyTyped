import { Plugin } from '@ckeditor/ckeditor5-core';
import ClipboardPipeline from './clipboardpipeline';
import DragDrop from './dragdrop';
import PastePlainText from './pasteplaintext';

/**
 * The clipboard feature.
 *
 * Read more about the clipboard integration in the {@glink framework/guides/deep-dive/clipboard clipboard deep dive guide}.
 *
 * This is a "glue" plugin which loads the following plugins:
 * * {@link module:clipboard/clipboardpipeline~ClipboardPipeline}
 * * {@link module:clipboard/dragdrop~DragDrop}
 * * {@link module:clipboard/pasteplaintext~PastePlainText}
 */
export default class Clipboard extends Plugin {
    static readonly pluginName: 'Clipboard';
    static readonly requires: [typeof ClipboardPipeline, typeof DragDrop, typeof PastePlainText];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Clipboard: Clipboard;
    }
}
