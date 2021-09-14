import { Plugin } from '@ckeditor/ckeditor5-core';
import SelectAllEditing from './selectallediting';
import SelectAllUI from './selectallui';

export default class SelectAll extends Plugin {
    static readonly requires: [typeof SelectAllEditing, typeof SelectAllUI];
    static readonly pluginName: 'SelectAll';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SelectAll: SelectAll;
    }
}
