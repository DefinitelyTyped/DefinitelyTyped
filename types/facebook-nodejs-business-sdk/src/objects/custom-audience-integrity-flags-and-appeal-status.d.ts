import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomAudienceIntegrityFlagsAndAppealStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomAudienceIntegrityFlagsAndAppealStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        closeout_time: "closeout_time";
        flagged_fields: "flagged_fields";
        latest_appeal_requestor: "latest_appeal_requestor";
        latest_appeal_time: "latest_appeal_time";
        restriction_status: "restriction_status";
    }>;
}
