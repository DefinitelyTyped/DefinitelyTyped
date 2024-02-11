import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenQuestion
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenQuestion extends AbstractCrudObject {
    static get Fields(): Readonly<{
        conditional_questions_choices: "conditional_questions_choices";
        conditional_questions_group_id: "conditional_questions_group_id";
        dependent_conditional_questions: "dependent_conditional_questions";
        id: "id";
        inline_context: "inline_context";
        key: "key";
        label: "label";
        options: "options";
        type: "type";
    }>;
}
