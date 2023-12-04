import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * DeliveryCheckExtraInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DeliveryCheckExtraInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adgroup_ids: "adgroup_ids";
        campaign_ids: "campaign_ids";
        countries: "countries";
    }>;
}
