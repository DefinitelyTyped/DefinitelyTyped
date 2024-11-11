import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyPartnerPanelScheduled
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ThirdPartyPartnerPanelScheduled extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adentities_ids: "adentities_ids";
        cadence: "cadence";
        country: "country";
        created_time: "created_time";
        description: "description";
        end_time: "end_time";
        id: "id";
        modified_time: "modified_time";
        owner_instance_id: "owner_instance_id";
        owner_panel_id: "owner_panel_id";
        owner_panel_name: "owner_panel_name";
        start_time: "start_time";
        status: "status";
        study_type: "study_type";
    }>;
    static get Status(): Readonly<{
        cancelled: "CANCELLED";
        created: "CREATED";
        finished: "FINISHED";
        ongoing: "ONGOING";
    }>;
    static get StudyType(): Readonly<{
        brand_lift: "BRAND_LIFT";
        panel_sales_attribution: "PANEL_SALES_ATTRIBUTION";
        reach: "REACH";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ThirdPartyPartnerPanelScheduled>;
}
