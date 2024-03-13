import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PartnerStudy
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PartnerStudy extends AbstractCrudObject {
    static get Fields(): Readonly<{
        additional_info: "additional_info";
        brand: "brand";
        client_name: "client_name";
        emails: "emails";
        id: "id";
        input_ids: "input_ids";
        is_export: "is_export";
        lift_study: "lift_study";
        location: "location";
        match_file_ds: "match_file_ds";
        name: "name";
        partner_defined_id: "partner_defined_id";
        partner_household_graph_dataset_id: "partner_household_graph_dataset_id";
        status: "status";
        study_end_date: "study_end_date";
        study_start_date: "study_start_date";
        study_type: "study_type";
        submit_date: "submit_date";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<PartnerStudy>;
}
