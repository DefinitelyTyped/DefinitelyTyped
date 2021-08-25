import { Plugin } from '@ckeditor/ckeditor5-core';

export default class TextPartLanguageUI extends Plugin {
    static readonly pluginName: 'TextPartLanguageUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TextPartLanguageUI: TextPartLanguageUI;
    }
}
