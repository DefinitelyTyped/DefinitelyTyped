import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyPartnerPanelRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyPartnerPanelRequest extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adentities_ids: "adentities_ids";
        country: "country";
        created_time: "created_time";
        description: "description";
        id: "id";
        modified_time: "modified_time";
        owner_instance_id: "owner_instance_id";
        owner_panel_id: "owner_panel_id";
        owner_panel_name: "owner_panel_name";
        status: "status";
        study_end_time: "study_end_time";
        study_start_time: "study_start_time";
        study_type: "study_type";
    }>;
    static get Status(): Readonly<{
        created: "CREATED";
        failure: "FAILURE";
        in_progress: "IN_PROGRESS";
        scheduled: "SCHEDULED";
        success: "SUCCESS";
    }>;
    static get StudyType(): Readonly<{
        brand_lift: "BRAND_LIFT";
        panel_sales_attribution: "PANEL_SALES_ATTRIBUTION";
        reach: "REACH";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ThirdPartyPartnerPanelRequest>;
}
