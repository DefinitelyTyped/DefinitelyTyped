import { Plugin } from '@ckeditor/ckeditor5-core';

export default class IndentEditing extends Plugin {
    static readonly pluginName: 'IndentEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        IndentEditing: IndentEditing;
    }
}
