import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageAboutStoryComposedBlockInlineStyle
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageAboutStoryComposedBlockInlineStyle extends AbstractCrudObject {
    static get Fields(): Readonly<{
        length: "length";
        offset: "offset";
        style: "style";
    }>;
}
