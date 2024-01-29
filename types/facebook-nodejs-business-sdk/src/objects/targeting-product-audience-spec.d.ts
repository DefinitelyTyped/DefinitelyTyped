import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingProductAudienceSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingProductAudienceSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        exclusions: "exclusions";
        inclusions: "inclusions";
        product_set_id: "product_set_id";
    }>;
}
