import { Plugin } from '@ckeditor/ckeditor5-core';
import ListEditing from './listediting';

export default class ListStyleEditing extends Plugin {
    static readonly requires: [typeof ListEditing];
    static readonly pluginName: 'ListStyleEditing';
    init(): void;
    afterInit(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ListStyleEditing: ListStyleEditing;
    }
}
