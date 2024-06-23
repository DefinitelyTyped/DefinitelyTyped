import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingDynamicRule
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingDynamicRule extends AbstractCrudObject {
    static get Fields(): Readonly<{
        action_type: "action.type";
        ad_group_id: "ad_group_id";
        campaign_group_id: "campaign_group_id";
        campaign_id: "campaign_id";
        impression_count: "impression_count";
        page_id: "page_id";
        post: "post";
        retention_seconds: "retention_seconds";
    }>;
}
