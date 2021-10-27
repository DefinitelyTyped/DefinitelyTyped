import { Plugin } from '@ckeditor/ckeditor5-core';

export default class HighlightEditing extends Plugin {
    static readonly pluginName: 'HighlightEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        HighlightEditing: HighlightEditing;
    }
}
