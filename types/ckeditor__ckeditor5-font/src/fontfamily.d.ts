import { Plugin } from '@ckeditor/ckeditor5-core';
import { ElementDefinition } from '@ckeditor/ckeditor5-engine/src/view/elementdefinition';
import FontFamilyEditing from './fontfamily/fontfamilyediting';
import FontFamilyUI from './fontfamily/fontfamilyui';

export default class FontFamily extends Plugin {
    static readonly requires: [typeof FontFamilyEditing, typeof FontFamilyUI];
    static readonly pluginName: 'FontFamily';
}

export interface FontFamilyOption {
    model: string;
    title: string;
    upcastAlso: ElementDefinition[];
    view: ElementDefinition;
}

export interface FontFamilyConfig {
    options?: Array<string | FontFamilyOption> | undefined;
    supportAllValues?: boolean | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FontFamily: FontFamily;
    }
}
