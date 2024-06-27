import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * InstagramBoostableMediaForAccessToken
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class InstagramBoostableMediaForAccessToken extends AbstractCrudObject {
    static get Fields(): Readonly<{
        has_product_tags: "has_product_tags";
        media: "media";
    }>;
}
