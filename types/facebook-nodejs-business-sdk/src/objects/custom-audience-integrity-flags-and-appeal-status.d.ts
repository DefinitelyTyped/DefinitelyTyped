import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomAudienceIntegrityFlagsAndAppealStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceIntegrityFlagsAndAppealStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        closeout_time: "closeout_time";
        days_until_enforcement: "days_until_enforcement";
        flagged_fields: "flagged_fields";
        is_enforcement_rolled_out: "is_enforcement_rolled_out";
        latest_appeal_requestor: "latest_appeal_requestor";
        latest_appeal_time: "latest_appeal_time";
        restriction_status: "restriction_status";
    }>;
}
