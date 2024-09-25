import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdConversionValues
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdConversionValues extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adgroup_id: "adgroup_id";
        campaign_id: "campaign_id";
        values: "values";
    }>;
}
