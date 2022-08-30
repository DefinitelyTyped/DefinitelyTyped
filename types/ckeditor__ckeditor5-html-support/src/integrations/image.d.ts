import { Plugin } from '@ckeditor/ckeditor5-core';
import DataFilter from '../datafilter';

/**
 * Provides the General HTML Support integration with the {@link module:image/image~Image Image} feature.
 */
export default class ImageElementSupport extends Plugin {
    static readonly requires: [typeof DataFilter];
    init(): void;
}
