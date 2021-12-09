import { Plugin } from '@ckeditor/ckeditor5-core';

export default class RemoveFormatEditing extends Plugin {
    static readonly pluginName: 'RemoveFormatEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        RemoveFormatEditing: RemoveFormatEditing;
    }
}
