import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountAAACompatibleAdObjects
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAAACompatibleAdObjects extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adgroup_ids: "adgroup_ids";
        campaign_group_ids: "campaign_group_ids";
        campaign_ids: "campaign_ids";
    }>;
}
