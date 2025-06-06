import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MusicWorkCopyright
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MusicWorkCopyright extends AbstractCrudObject {
    static get Fields(): Readonly<{
        available_ui_actions: "available_ui_actions";
        claim_status: "claim_status";
        creation_time: "creation_time";
        displayed_fb_matches_count: "displayed_fb_matches_count";
        displayed_ig_matches_count: "displayed_ig_matches_count";
        displayed_matches_count: "displayed_matches_count";
        has_rev_share_eligible_isrcs: "has_rev_share_eligible_isrcs";
        id: "id";
        is_linking_required_to_monetize_for_manual_claim: "is_linking_required_to_monetize_for_manual_claim";
        match_rule: "match_rule";
        status: "status";
        tags: "tags";
        update_time: "update_time";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<MusicWorkCopyright>;
}
