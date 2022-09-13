import { Plugin } from '@ckeditor/ckeditor5-core';
import { Enter } from '@ckeditor/ckeditor5-enter';
import { Delete } from '@ckeditor/ckeditor5-typing';

export default class WidgetTypeAround extends Plugin {
    static readonly pluginName: 'WidgetTypeAround';
    static readonly requires: [typeof Enter, typeof Delete];
    init(): void;
    destroy(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        WidgetTypeAround: WidgetTypeAround;
    }
}
