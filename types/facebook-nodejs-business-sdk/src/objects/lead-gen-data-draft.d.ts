import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenDataDraft
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenDataDraft extends AbstractCrudObject {
    static get Fields(): Readonly<{
        block_display_for_non_targeted_viewer: "block_display_for_non_targeted_viewer";
        created_time: "created_time";
        disqualified_end_component: "disqualified_end_component";
        follow_up_action_url: "follow_up_action_url";
        id: "id";
        is_optimized_for_quality: "is_optimized_for_quality";
        legal_content: "legal_content";
        locale: "locale";
        name: "name";
        page: "page";
        question_page_custom_headline: "question_page_custom_headline";
        questions: "questions";
        status: "status";
        thank_you_page: "thank_you_page";
        tracking_parameters: "tracking_parameters";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<LeadGenDataDraft>;
}
