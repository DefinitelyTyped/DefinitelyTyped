import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ImageReferenceMatch
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ImageReferenceMatch extends AbstractCrudObject {
    static get Fields(): Readonly<{
        conflicting_countries: "conflicting_countries";
        country_resolution_history: "country_resolution_history";
        creation_time: "creation_time";
        current_conflict_resolved_countries: "current_conflict_resolved_countries";
        displayed_match_state: "displayed_match_state";
        dispute_form_data_entries_with_translations: "dispute_form_data_entries_with_translations";
        expiration_time: "expiration_time";
        id: "id";
        match_state: "match_state";
        matched_reference_copyright: "matched_reference_copyright";
        matched_reference_owner: "matched_reference_owner";
        modification_history: "modification_history";
        reference_copyright: "reference_copyright";
        reference_owner: "reference_owner";
        rejection_form_data_entries_with_translations: "rejection_form_data_entries_with_translations";
        resolution_reason: "resolution_reason";
        update_time: "update_time";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ImageReferenceMatch>;
}
