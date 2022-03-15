import { Plugin } from '@ckeditor/ckeditor5-core';
import { Input, TwoStepCaretMovement } from '@ckeditor/ckeditor5-typing';
import ClipboardPipeline from '@ckeditor/ckeditor5-clipboard/src/clipboardpipeline';

export default class LinkEditing extends Plugin {
    static readonly pluginName: 'LinkEditing';
    static readonly requires: [typeof TwoStepCaretMovement, typeof Input, typeof ClipboardPipeline];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        LinkEditing: LinkEditing;
    }
}
