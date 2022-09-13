import { Plugin } from '@ckeditor/ckeditor5-core';
import ListProperties from './listproperties';

export default class ListStyle extends Plugin {
    static readonly requires: [typeof ListProperties];
    static readonly pluginName: 'ListStyle';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ListStyle: ListStyle;
    }
}
