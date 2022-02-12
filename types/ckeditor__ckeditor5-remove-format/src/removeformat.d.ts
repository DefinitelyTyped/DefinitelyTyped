import { Plugin } from '@ckeditor/ckeditor5-core';
import RemoveFormatEditing from './removeformatediting';
import RemoveFormatUI from './removeformatui';

export default class RemoveFormat extends Plugin {
    static readonly requires: [typeof RemoveFormatEditing, typeof RemoveFormatUI];
    static readonly pluginName: 'RemoveFormat';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        RemoveFormat: RemoveFormat;
    }
}
