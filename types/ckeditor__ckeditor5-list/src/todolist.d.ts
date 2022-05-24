import { Plugin } from '@ckeditor/ckeditor5-core';
import TodoListEditing from './todolistediting';
import TodoListUI from './todolistui';

export default class TodoList extends Plugin {
    static readonly requires: [typeof TodoListEditing, typeof TodoListUI];
    static readonly pluginName: 'TodoList';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TodoList: TodoList;
    }
}
