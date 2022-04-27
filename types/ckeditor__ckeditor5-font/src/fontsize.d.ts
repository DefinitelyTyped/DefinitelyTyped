import { Plugin } from '@ckeditor/ckeditor5-core';
import { ElementDefinition } from '@ckeditor/ckeditor5-engine/src/view/elementdefinition';
import FontSizeEditing from './fontsize/fontsizeediting';
import FontSizeUI from './fontsize/fontsizeui';

export default class FontSize extends Plugin {
    static readonly requires: [typeof FontSizeEditing, typeof FontSizeUI];
    static readonly pluginName: 'FontSize';
    /**
     * Normalizes and translates the {@link module:font/fontsize~FontSizeConfig#options configuration options}
     * to the {@link module:font/fontsize~FontSizeOption} format.
     */
    normalizeSizeOptions(options: NonNullable<FontSizeConfig['options']>): FontSizeOption[];
}

export interface FontSizeOption {
    model: string;
    title: string;
    upcastAlso: ElementDefinition[];
    view: ElementDefinition;
}

export interface FontSizeConfig {
    options?: Array<string | number | FontSizeOption> | undefined;
    supportAllValues?: boolean | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FontSize: FontSize;
    }
}
