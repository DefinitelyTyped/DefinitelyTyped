import { Plugin } from '@ckeditor/ckeditor5-core';
import IndentEditing from './indentediting';
import IndentUI from './indentui';

export default class Indent extends Plugin {
    static readonly pluginName: 'Indent';
    static readonly requires: [typeof IndentEditing, typeof IndentUI];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Indent: Indent;
    }
}
