import { Plugin } from '@ckeditor/ckeditor5-core';
import { MatcherPattern } from '@ckeditor/ckeditor5-engine/src/view/matcher';
import { Widget } from '@ckeditor/ckeditor5-widget';
import DataSchema from './dataschema';

/**
 * Allows to validate elements and element attributes registered by {@link module:html-support/dataschema~DataSchema}.
 *
 * To enable registered element in the editor, use {@link module:html-support/datafilter~DataFilter#allowElement} method:
 *
 *        dataFilter.allowElement( 'section' );
 *
 * You can also allow or disallow specific element attributes:
 *
 *        // Allow `data-foo` attribute on `section` element.
 *        dataFilter.allowAttributes( {
 *            name: 'section',
 *            attributes: {
 *                'data-foo': true
 *            }
 *        } );
 *
 *        // Disallow `color` style attribute on 'section' element.
 *        dataFilter.disallowAttributes( {
 *            name: 'section',
 *            styles: {
 *                color: /[\s\S]+/
 *            }
 *        } );
 */
export default class DataFilter extends Plugin {
    static readonly pluginName: 'DataFilter';
    static readonly requires: [typeof DataSchema, typeof Widget];
    /**
     * Load a configuration of one or many elements, where their attributes should be allowed.
     */
    loadAllowedConfig(config: MatcherPattern[]): void;

    /**
     * Load a configuration of one or many elements, where their attributes should be disallowed.
     */
    loadDisallowedConfig(config: MatcherPattern[]): void;

    /**
     * Allow the given element in the editor context.
     *
     * This method will only allow elements described by the {@link module:html-support/dataschema~DataSchema} used
     * to create data filter.
     */
    allowElement(viewName: string | RegExp): void;

    /**
     * Allow the given attributes for view element allowed by {@link #allowElement} method.
     */
    allowAttributes(config: MatcherPattern): void;

    /**
     * Disallow the given attributes for view element allowed by {@link #allowElement} method.
     */
    disallowAttributes(config: MatcherPattern): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        DataFilter: DataFilter;
    }
}
