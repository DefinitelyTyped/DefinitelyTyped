import { Plugin } from '@ckeditor/ckeditor5-core';
import { MatcherPattern } from '@ckeditor/ckeditor5-engine/src/view/matcher';
import DataFilter from './datafilter';
import CodeBlockElementSupport from './integrations/codeblock';
import DualContentModelElementSupport from './integrations/dualcontent';
import HeadingElementSupport from './integrations/heading';
import ImageElementSupport from './integrations/image';
import MediaEmbedElementSupport from './integrations/mediaembed';
import ScriptElementSupport from './integrations/script';
import StyleElementSupport from './integrations/style';
import TableElementSupport from './integrations/table';

/**
 * The General HTML Support feature.
 *
 * This is a "glue" plugin which initializes the {@link module:html-support/datafilter~DataFilter data filter} configuration
 * and features integration with the General HTML Support.
 */
export default class GeneralHtmlSupport extends Plugin {
    static readonly pluginName: 'GeneralHtmlSupport';
    init(): void;
    static readonly requires: [
        typeof DataFilter,
        typeof CodeBlockElementSupport,
        typeof DualContentModelElementSupport,
        typeof HeadingElementSupport,
        typeof ImageElementSupport,
        typeof MediaEmbedElementSupport,
        typeof ScriptElementSupport,
        typeof TableElementSupport,
        typeof StyleElementSupport,
    ];
}

export interface GeneralHtmlSupportConfig {
    allow?: MatcherPattern[] | undefined;
    disallow?: MatcherPattern[] | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        GeneralHtmlSupport: GeneralHtmlSupport;
    }
}
