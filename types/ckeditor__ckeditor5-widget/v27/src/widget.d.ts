import { Plugin } from '@ckeditor/ckeditor5-core';
import { Delete } from '@ckeditor/ckeditor5-typing';
import WidgetTypeAround from './widgettypearound/widgettypearound';

export default class Widget extends Plugin {
    static readonly pluginName: 'Widget';
    static readonly requires: [typeof WidgetTypeAround, typeof Delete];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Widget: Widget;
    }
}
