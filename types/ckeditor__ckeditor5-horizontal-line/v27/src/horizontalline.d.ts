import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget } from '@ckeditor/ckeditor5-widget';
import HorizontalLineEditing from './horizontallineediting';
import HorizontalLineUI from './horizontallineui';

export default class HorizontalLine extends Plugin {
    static readonly requires: [typeof HorizontalLineEditing, typeof HorizontalLineUI, typeof Widget];
    static readonly pluginName: 'HorizontalLine';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        HorizontalLine: HorizontalLine;
    }
}
