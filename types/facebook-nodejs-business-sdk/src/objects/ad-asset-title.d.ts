import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAssetTitle
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAssetTitle extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        text: "text";
        url_tags: "url_tags";
    }>;
}
