import { Plugin } from '@ckeditor/ckeditor5-core';

export default class IndentUI extends Plugin {
    static readonly pluginName: 'IndentUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        IndentUI: IndentUI;
    }
}
