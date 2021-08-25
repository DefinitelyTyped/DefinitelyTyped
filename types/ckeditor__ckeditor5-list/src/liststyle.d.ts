import { Plugin } from '@ckeditor/ckeditor5-core';
import ListStyleEditing from './liststyleediting';
import ListStyleUI from './liststyleui';

export default class ListStyle extends Plugin {
    static readonly requires: [typeof ListStyleEditing, typeof ListStyleUI];
    static readonly pluginName: 'ListStyle';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ListStyle: ListStyle;
    }
}
