import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget } from '@ckeditor/ckeditor5-widget';
import ClipboardPipeline from './clipboardpipeline';

/**
 * The drag and drop feature. It works on top of the {@link module:clipboard/clipboardpipeline~ClipboardPipeline}.
 *
 * Read more about the clipboard integration in the {@glink framework/guides/deep-dive/clipboard clipboard deep dive guide}.
 */
export default class DragDrop extends Plugin {
    static readonly pluginName: 'DragDrop';

    static readonly requires: [typeof ClipboardPipeline, typeof Widget];

    init(): void;

    destroy(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        DragDrop: DragDrop;
    }
}
