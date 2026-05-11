import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdConversions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdConversions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        adgroup_id: "adgroup_id";
        campaign_id: "campaign_id";
        values: "values";
    }>;
}
