import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AudioVisualReferenceMatch
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudioVisualReferenceMatch extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audio_conflicting_segments: "audio_conflicting_segments";
        audio_current_conflict_resolved_segments: "audio_current_conflict_resolved_segments";
        audio_segment_resolution_history: "audio_segment_resolution_history";
        conflict_type: "conflict_type";
        conflicting_countries: "conflicting_countries";
        country_resolution_history: "country_resolution_history";
        creation_time: "creation_time";
        current_conflict_resolved_countries: "current_conflict_resolved_countries";
        displayed_match_state: "displayed_match_state";
        dispute_form_data_entries_with_translations: "dispute_form_data_entries_with_translations";
        expiration_time: "expiration_time";
        id: "id";
        is_disputable: "is_disputable";
        match_state: "match_state";
        matched_overlap_percentage: "matched_overlap_percentage";
        matched_owner_match_duration_in_sec: "matched_owner_match_duration_in_sec";
        matched_reference_owner: "matched_reference_owner";
        modification_history: "modification_history";
        num_matches_on_matched_side: "num_matches_on_matched_side";
        num_matches_on_ref_side: "num_matches_on_ref_side";
        ref_owner_match_duration_in_sec: "ref_owner_match_duration_in_sec";
        reference_overlap_percentage: "reference_overlap_percentage";
        reference_owner: "reference_owner";
        rejection_form_data_entries_with_translations: "rejection_form_data_entries_with_translations";
        resolution_details: "resolution_details";
        resolution_reason: "resolution_reason";
        update_time: "update_time";
        views_on_matched_side: "views_on_matched_side";
        visual_conflicting_segments: "visual_conflicting_segments";
        visual_current_conflict_resolved_segments: "visual_current_conflict_resolved_segments";
        visual_segment_resolution_history: "visual_segment_resolution_history";
    }>;
}
