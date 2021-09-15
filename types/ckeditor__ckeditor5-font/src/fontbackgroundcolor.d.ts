import { Plugin } from '@ckeditor/ckeditor5-core';
import FontBackgroundColorEditing from './fontbackgroundcolor/fontbackgroundcolorediting';
import FontBackgroundColorUI from './fontbackgroundcolor/fontbackgroundcolorui';

export default class FontBackgroundColor extends Plugin {
    static readonly requires: [typeof FontBackgroundColorEditing, typeof FontBackgroundColorUI];
    static readonly pluginName: 'FontBackgroundColor';
}

export interface FontBackgroundColorConfig {
    colors?: Array<string | { hasBorder?: boolean | undefined; color: string; label: string }> | undefined;
    columns?: number | undefined;
    documentColors?: number | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FontBackgroundColor: FontBackgroundColor;
    }
}
