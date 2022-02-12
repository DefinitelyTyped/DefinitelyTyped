import { Plugin } from '@ckeditor/ckeditor5-core';

export default class ParagraphButtonUI extends Plugin {
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ParagraphButtonUI: ParagraphButtonUI;
    }
}
