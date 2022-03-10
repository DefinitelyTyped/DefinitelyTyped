import { Plugin } from '@ckeditor/ckeditor5-core';
import DataFilter from '../datafilter';

/**
 * Provides the General HTML Support integration with {@link module:media-embed/mediaembed~MediaEmbed Media Embed} feature.
 */
export default class MediaEmbedElementSupport extends Plugin {
    static readonly requires: [typeof DataFilter];
    init(): void;
}
