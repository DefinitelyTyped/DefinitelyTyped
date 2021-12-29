import { Plugin } from '@ckeditor/ckeditor5-core';
import ClipboardPipeline from './clipboardpipeline';
import DragDrop from './dragdrop';
import PastePlainText from './pasteplaintext';

export default class Clipboard extends Plugin {
    static readonly pluginName: 'Clipboard';
    static readonly requires: [typeof ClipboardPipeline, typeof DragDrop, typeof PastePlainText];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Clipboard: Clipboard;
    }
}
