import { Plugin } from '@ckeditor/ckeditor5-core';
import RestrictedEditingModeEditing from './restrictededitingmodeediting';
import RestrictedEditingModeUI from './restrictededitingmodeui';

export default class RestrictedEditingMode extends Plugin {
    static readonly pluginName: 'RestrictedEditingMode';
    static readonly requires: [typeof RestrictedEditingModeEditing, typeof RestrictedEditingModeUI];
}

export interface RestrictedEditingModeConfig {
    allowedAttributes: string[];
    allowedCommands: string[];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        RestrictedEditingMode: RestrictedEditingMode;
    }
}
