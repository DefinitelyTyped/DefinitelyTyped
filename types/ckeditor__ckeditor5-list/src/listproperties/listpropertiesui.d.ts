import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * The list properties UI plugin. It introduces the extended `'bulletedList'`
 * and `'numberedList'` toolbar buttons that allow users to control such aspects
 * of list as the marker, start index or order.
 */
export default class ListPropertiesUI extends Plugin {
    static readonly pluginName: 'ListPropertiesUI';

    init(): void;
}
