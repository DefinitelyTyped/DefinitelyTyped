import { Plugin } from '@ckeditor/ckeditor5-core';
import { Delete } from '@ckeditor/ckeditor5-typing';

export default class Autoformat extends Plugin {
    static readonly requires: [typeof Delete];
    static readonly pluginName: 'Autoformat';
    afterInit(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Autoformat: Autoformat;
    }
}
