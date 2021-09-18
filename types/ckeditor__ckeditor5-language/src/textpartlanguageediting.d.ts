import { Plugin } from '@ckeditor/ckeditor5-core';

export default class TextPartLanguageEditing extends Plugin {
    static readonly pluginName: 'TextPartLanguageEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TextPartLanguageEditing: TextPartLanguageEditing;
    }
}
