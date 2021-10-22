import { Plugin } from '@ckeditor/ckeditor5-core';

export default class HighlightUI extends Plugin {
    readonly localizedOptionTitles: {
        'Yellow marker': string;
        'Green marker': string;
        'Pink marker': string;
        'Blue marker': string;
        'Red pen': string;
        'Green pen': string;
    };
    static readonly pluginName: 'HighlightUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        HighlightUI: HighlightUI;
    }
}
