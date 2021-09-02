import { Plugin } from '@ckeditor/ckeditor5-core';

export default class RemoveFormatUI extends Plugin {
    static readonly pluginName: 'RemoveFormatUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        RemoveFormatUI: RemoveFormatUI;
    }
}
