import { Plugin } from '@ckeditor/ckeditor5-core';

export default class StandardEditingModeUI extends Plugin {
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        StandardEditingModeUI: StandardEditingModeUI;
    }
}
