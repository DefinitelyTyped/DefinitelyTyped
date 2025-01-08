import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenFormPreviewDetails
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenFormPreviewDetails extends AbstractCrudObject {
    static get Fields(): Readonly<{
        call_to_action_title: "call_to_action_title";
        contact_information_text: "contact_information_text";
        creatives_overview_default_text: "creatives_overview_default_text";
        data_privacy_policy_setting_description: "data_privacy_policy_setting_description";
        default_appointment_scheduling_inline_context: "default_appointment_scheduling_inline_context";
        default_disqualified_end_component: "default_disqualified_end_component";
        default_thank_you_page: "default_thank_you_page";
        disqualified_thank_you_card_transparency_info_text: "disqualified_thank_you_card_transparency_info_text";
        edit_text: "edit_text";
        email_inline_context_text: "email_inline_context_text";
        email_messenger_push_opt_in_disclaimer: "email_messenger_push_opt_in_disclaimer";
        email_messenger_push_opt_in_transparency_text: "email_messenger_push_opt_in_transparency_text";
        form_clarity_description_content: "form_clarity_description_content";
        form_clarity_description_title: "form_clarity_description_title";
        form_clarity_headline: "form_clarity_headline";
        gated_content_locked_description: "gated_content_locked_description";
        gated_content_locked_headline: "gated_content_locked_headline";
        gated_content_unlocked_description: "gated_content_unlocked_description";
        gated_content_unlocked_headline: "gated_content_unlocked_headline";
        how_it_works_section_headers: "how_it_works_section_headers";
        next_button_text: "next_button_text";
        optional_question_text: "optional_question_text";
        personal_info_text: "personal_info_text";
        phone_number_inline_context_text: "phone_number_inline_context_text";
        privacy_policy_title_section_title_text: "privacy_policy_title_section_title_text";
        privacy_setting_description: "privacy_setting_description";
        products_section_headers: "products_section_headers";
        qualified_thank_you_card_transparency_info_text: "qualified_thank_you_card_transparency_info_text";
        review_your_info_text: "review_your_info_text";
        secure_sharing_text: "secure_sharing_text";
        slide_to_submit_text: "slide_to_submit_text";
        social_proof_section_headers: "social_proof_section_headers";
        submit_button_text: "submit_button_text";
    }>;
}
