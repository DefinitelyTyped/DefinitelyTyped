import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetDescription
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetDescription extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        text: "text";
        url_tags: "url_tags";
    }>;
}
