import { Plugin } from '@ckeditor/ckeditor5-core';
import ListEditing from './listediting';

export default class TodoListEditing extends Plugin {
    static readonly pluginName: 'TodoListEditing';
    static readonly requires: [typeof ListEditing];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TodoListEditing: TodoListEditing;
    }
}
