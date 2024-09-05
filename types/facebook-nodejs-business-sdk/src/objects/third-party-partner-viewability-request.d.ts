import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyPartnerViewabilityRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyPartnerViewabilityRequest extends AbstractCrudObject {
    static get Fields(): Readonly<{
        created_time: "created_time";
        description: "description";
        hour: "hour";
        id: "id";
        metric: "metric";
        modified_time: "modified_time";
        owner_instance_id: "owner_instance_id";
        platform: "platform";
        status: "status";
        total_file_count: "total_file_count";
    }>;
    static get Status(): Readonly<{
        created: "CREATED";
        failure: "FAILURE";
        in_progress: "IN_PROGRESS";
        scheduled: "SCHEDULED";
        success: "SUCCESS";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ThirdPartyPartnerViewabilityRequest>;
}
