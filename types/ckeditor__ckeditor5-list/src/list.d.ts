import { Plugin } from '@ckeditor/ckeditor5-core';
import ListEditing from './list/listediting';
import ListUI from './list/listui';

export default class List extends Plugin {
    static readonly requires: [typeof ListEditing, typeof ListUI];
    static readonly pluginName: 'List';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        List: List;
    }
}
