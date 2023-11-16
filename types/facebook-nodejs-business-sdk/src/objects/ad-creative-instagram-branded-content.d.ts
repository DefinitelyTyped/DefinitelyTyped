import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeInstagramBrandedContent
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeInstagramBrandedContent extends AbstractCrudObject {
    static get Fields(): Readonly<{
        sponsor_id: "sponsor_id";
    }>;
}
