import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountSuggestedTag
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountSuggestedTag extends AbstractCrudObject {
    static get Fields(): Readonly<{
        product_id: "product_id";
        x: "x";
        y: "y";
    }>;
}
