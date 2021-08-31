import { Plugin } from '@ckeditor/ckeditor5-core';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import DataTransfer from './datatransfer';

export default class ClipboardPipeline extends Plugin {
    static readonly pluginName: 'ClipboardPipeline';
    init(): void;
}

export interface ClipboardOutputEventData {
    content: DocumentFragment;
    readonly dataTransfer: DataTransfer;
    method: 'copy' | 'cut';
}
