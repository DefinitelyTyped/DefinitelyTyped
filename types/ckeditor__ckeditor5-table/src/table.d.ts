import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget } from '@ckeditor/ckeditor5-widget';
import TableClipboard from './tableclipboard';
import TableEditing from './tableediting';
import TableKeyboard from './tablekeyboard';
import TableSelection from './tableselection';
import TableUI from './tableui';
import TableMouse from './tablemouse';

export default class Table extends Plugin {
    static readonly requires: [
        typeof TableEditing,
        typeof TableUI,
        typeof TableSelection,
        typeof TableMouse,
        typeof TableKeyboard,
        typeof TableClipboard,
        typeof Widget,
    ];
    static readonly pluginName: 'Table';
}

export interface TableConfig {
    contentToolbar?: string[];
    tableCellProperties?: {
        borderColors?: TableColorConfig[];
        backgroundColors: TableColorConfig[];
    };
    tableProperties?: {
        borderColors?: TableColorConfig[];
        backgroundColors: TableColorConfig[];
    };
    tableToolbar?: string[];
}

export type TableColorConfig =
    | string
    | {
          color: string;
          label: string;
          hasBorder?: boolean;
      };
