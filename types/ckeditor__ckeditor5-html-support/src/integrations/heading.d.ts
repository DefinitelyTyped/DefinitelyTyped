import { Plugin } from '@ckeditor/ckeditor5-core';
import DataSchema from '../dataschema';
/**
 * Provides the General HTML Support integration with {@link module:heading/heading~Heading Heading} feature.
 */
export default class HeadingElementSupport extends Plugin {
    static readonly requires: [typeof DataSchema];
    init(): void;
}
