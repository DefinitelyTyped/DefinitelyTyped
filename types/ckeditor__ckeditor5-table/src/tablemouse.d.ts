import { Plugin } from '@ckeditor/ckeditor5-core';
import TableSelection from './tableselection';

export default class TableMouse extends Plugin {
    static readonly pluginName: 'TableMouse';
    static readonly requires: [typeof TableSelection];
    init(): void;
}
