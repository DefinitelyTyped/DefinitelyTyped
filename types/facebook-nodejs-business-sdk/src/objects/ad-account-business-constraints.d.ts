import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountBusinessConstraints
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountBusinessConstraints extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audience_controls: "audience_controls";
        campaigns_with_error: "campaigns_with_error";
        placement_controls: "placement_controls";
        status: "status";
    }>;
    static get Status(): Readonly<{
        active: "ACTIVE";
        application_in_progress: "APPLICATION_IN_PROGRESS";
        with_campaign_error: "WITH_CAMPAIGN_ERROR";
    }>;
}
