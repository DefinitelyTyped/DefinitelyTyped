import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageAboutStoryComposedBlockEntityRanges
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageAboutStoryComposedBlockEntityRanges extends AbstractCrudObject {
    static get Fields(): Readonly<{
        key: "key";
        length: "length";
        offset: "offset";
    }>;
}
