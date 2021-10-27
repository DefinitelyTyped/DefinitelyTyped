import { Plugin } from '@ckeditor/ckeditor5-core';

export default class HorizontalLineEditing extends Plugin {
    static readonly pluginName: 'HorizontalLineEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        HorizontalLineEditing: HorizontalLineEditing;
    }
}
