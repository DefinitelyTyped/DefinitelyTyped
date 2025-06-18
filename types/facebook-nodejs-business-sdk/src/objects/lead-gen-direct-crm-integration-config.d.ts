import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenDirectCRMIntegrationConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenDirectCRMIntegrationConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        auth_id: "auth_id";
        creation_time: "creation_time";
        id: "id";
        lead_gen_data: "lead_gen_data";
        matched_fields: "matched_fields";
        matched_fields_labels: "matched_fields_labels";
        resources: "resources";
        third_party_app_id: "third_party_app_id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<LeadGenDirectCRMIntegrationConfig>;
}
