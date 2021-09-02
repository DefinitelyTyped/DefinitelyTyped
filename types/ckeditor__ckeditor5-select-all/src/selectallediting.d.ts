import { Plugin } from '@ckeditor/ckeditor5-core';

export default class SelectAllEditing extends Plugin {
    static readonly pluginName: 'SelectAllEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SelectAllEditing: SelectAllEditing;
    }
}
