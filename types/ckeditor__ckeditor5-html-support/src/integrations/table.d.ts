import { Plugin } from '@ckeditor/ckeditor5-core';
import DataFilter from '../datafilter';

/**
 * Provides the General HTML Support integration with {@link module:table/table~Table Table} feature.
 */
export default class TableElementSupport extends Plugin {
    static readonly requires: [typeof DataFilter];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableElementSupport: TableElementSupport;
    }
}
