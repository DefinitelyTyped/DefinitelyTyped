import { Plugin } from '@ckeditor/ckeditor5-core';

export default class StandardEditingModeEditing extends Plugin {
    static readonly pluginName: 'StandardEditingModeEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        StandardEditingModeEditing: StandardEditingModeEditing;
    }
}
