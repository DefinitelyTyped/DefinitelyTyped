import { Plugin } from '@ckeditor/ckeditor5-core';
import ListEditing from './listediting';
import ListUI from './listui';

export default class List extends Plugin {
    static readonly requires: [typeof ListEditing, typeof ListUI];
    static readonly pluginName: 'List';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        List: List;
    }
}
