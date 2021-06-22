import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget } from '@ckeditor/ckeditor5-widget';
import ClipboardPipeline from './clipboardpipeline';

export default class DragDrop extends Plugin {
    static readonly pluginName: 'DragDrop';
    static readonly requires: [typeof ClipboardPipeline, typeof Widget];
    init(): void;
    destroy(): void;
}
