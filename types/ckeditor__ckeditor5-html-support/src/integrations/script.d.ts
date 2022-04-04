import { Plugin } from '@ckeditor/ckeditor5-core';
import DataFilter from '../datafilter';

/**
 * Provides the General HTML Support for `script` elements.
 */
export default class ScriptElementSupport extends Plugin {
    static readonly requires: [typeof DataFilter];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ScriptElementSupport: ScriptElementSupport;
    }
}
