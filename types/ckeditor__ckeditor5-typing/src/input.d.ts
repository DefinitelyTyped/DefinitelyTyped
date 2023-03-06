import { Plugin } from '@ckeditor/ckeditor5-core';

export default class Input extends Plugin {
    static readonly pluginName: 'Input';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Input: Input;
    }
}
