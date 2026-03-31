import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ProductItemVideoData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItemVideoData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        tags: "tags";
        url: "url";
    }>;
}
