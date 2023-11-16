import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * LeadGenConditionalQuestionsGroupQuestions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenConditionalQuestionsGroupQuestions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        field_key: "field_key";
        input_type: "input_type";
        name: "name";
    }>;
}
