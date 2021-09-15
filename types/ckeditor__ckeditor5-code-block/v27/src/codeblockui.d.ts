import { Plugin } from '@ckeditor/ckeditor5-core';

export default class CodeBlockUI extends Plugin {
    static readonly pluginName: 'CodeBlockUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CodeBlockUI: CodeBlockUI;
    }
}
