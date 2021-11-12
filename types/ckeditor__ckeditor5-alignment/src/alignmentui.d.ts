import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * The default alignment UI plugin.
 *
 * It introduces the `'alignment:left'`, `'alignment:right'`, `'alignment:center'` and `'alignment:justify'` buttons
 * and the `'alignment'` dropdown.
 */
export default class AlignmentUI extends Plugin {
    readonly localizedOptionTitles: {
        left: string;
        right: string;
        center: string;
        justify: string;
    };
    static readonly pluginName: 'AlignmentUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        AlignmentUI: AlignmentUI;
    }
}
