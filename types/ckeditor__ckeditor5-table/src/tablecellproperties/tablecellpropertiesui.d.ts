import { Plugin } from '@ckeditor/ckeditor5-core';
import { ContextualBalloon } from '@ckeditor/ckeditor5-ui';

export default class TableCellPropertiesUI extends Plugin {
    static readonly requires: [typeof ContextualBalloon];
    static readonly pluginName: 'TableCellPropertiesUI';
    init(): void;
    destroy(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableCellPropertiesUI: TableCellPropertiesUI;
    }
}
