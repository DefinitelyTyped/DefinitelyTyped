import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenConditionalQuestionsGroupChoices
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenConditionalQuestionsGroupChoices extends AbstractCrudObject {
    static get Fields(): Readonly<{
        customized_token: "customized_token";
        next_question_choices: "next_question_choices";
        value: "value";
    }>;
}
