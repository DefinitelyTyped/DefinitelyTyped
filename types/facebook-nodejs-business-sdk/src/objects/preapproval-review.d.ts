import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PreapprovalReview
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PreapprovalReview extends AbstractCrudObject {
    static get Fields(): Readonly<{
        comp_type: "comp_type";
        crow_component_id: "crow_component_id";
        is_human_reviewed: "is_human_reviewed";
        is_reviewed: "is_reviewed";
        policy_info: "policy_info";
    }>;
}
