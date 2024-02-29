import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdBidAdjustments
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdBidAdjustments extends AbstractCrudObject {
    static get Fields(): Readonly<{
        age_range: "age_range";
        page_types: "page_types";
        user_groups: "user_groups";
    }>;
}
