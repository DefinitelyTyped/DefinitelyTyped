import { Plugin } from '@ckeditor/ckeditor5-core';
import FontColorEditing from './fontcolor/fontcolorediting';
import FontColorUI from './fontcolor/fontcolorui';

export default class FontColor extends Plugin {
    static readonly requires: [typeof FontColorEditing, typeof FontColorUI];
    static readonly pluginName: 'FontColor';
}

export interface FontColorConfig {
    colors?: Array<string | { hasBorder?: boolean | undefined; color: string; label: string }> | undefined;
    columns?: number | undefined;
    documentColors?: number | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FontColor: FontColor;
    }
}
