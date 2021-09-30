import { Plugin } from '@ckeditor/ckeditor5-core';
import { Enter } from '@ckeditor/ckeditor5-enter';
import { Delete } from '@ckeditor/ckeditor5-typing';

export default class ListEditing extends Plugin {
    static readonly pluginName: 'ListEditing';
    static readonly requires: [typeof Enter, typeof Delete];
    init(): void;
    afterInit(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ListEditing: ListEditing;
    }
}
