import { Plugin } from '@ckeditor/ckeditor5-core';

export default class RestrictedEditingModeUI extends Plugin {
    static readonly pluginName: 'RestrictedEditingModeUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        RestrictedEditingModeUI: RestrictedEditingModeUI;
    }
}
