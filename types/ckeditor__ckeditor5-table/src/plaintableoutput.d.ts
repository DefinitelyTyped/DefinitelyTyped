import { Plugin } from '@ckeditor/ckeditor5-core';
import Table from './table';

/**
 * The plain table output feature.
 */
export default class PlainTableOutput extends Plugin {
    static readonly pluginName: 'PlainTableOutput';
    static readonly requires: [typeof Table];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        PlainTableOutput: PlainTableOutput;
    }
}
